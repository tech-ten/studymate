# AI Prompt Engineering Guide

## Overview

StudyMate uses AI-powered tutoring to provide personalized learning support for students across different year levels (Prep to Year 12). This document details the prompt engineering strategies used to ensure age-appropriate, effective, and engaging AI responses.

**Last Updated:** 2026-01-04
**Implementation:** `/packages/api/src/handlers/ai.ts`

---

## Table of Contents

1. [AI Model Configuration](#ai-model-configuration)
2. [Year-Level-Specific Prompting](#year-level-specific-prompting)
3. [Explanation Prompts (`/ai/explain`)](#explanation-prompts-aiexplain)
4. [Chat Prompts (`/ai/chat`)](#chat-prompts-aichat)
5. [Token Limits by Year Level](#token-limits-by-year-level)
6. [Safety and Age-Appropriateness](#safety-and-age-appropriateness)
7. [Caching Strategy](#caching-strategy)
8. [Best Practices](#best-practices)
9. [Examples](#examples)

---

## AI Model Configuration

### Model Provider
- **Provider:** Groq (via `GROQ_API_KEY`)
- **Model:** `llama-3.3-70b-versatile`
- **Reasoning:** Fast inference, high quality responses, cost-effective for education use case

### Temperature Settings
- **Explanation requests:** `0.7` (balanced between creativity and accuracy)
- **Chat interactions:** `0.8` (slightly more creative for conversational flow)

### Age Calculation
```typescript
const AGE_BUFFER = 2; // Adjust if responses are too simple/complex
function getAgeFromYearLevel(yearLevel: number): number {
  // Prep = 5, Year 1 = 6, etc. + buffer for less restrictive responses
  return yearLevel + 5 + AGE_BUFFER;
}
```

**Example Age Mapping:**
| Year Level | Student Age | AI Safety Age (with buffer) |
|-----------|-------------|----------------------------|
| Prep      | 5           | 7                         |
| Year 1    | 6           | 8                         |
| Year 3    | 8           | 10                        |
| Year 5    | 10          | 12                        |
| Year 8    | 13          | 15                        |

---

## Year-Level-Specific Prompting

### The Problem
Initial implementation used the same prompt structure for all students, resulting in:
- **Year 1 students** receiving overly complex, lengthy explanations
- Reduced engagement and comprehension for younger learners
- Inconsistent learning experience across age groups

### The Solution
Implemented **three-tier prompt customization** based on year level:

#### Tier 1: Early Primary (Year 1-3)
**Age:** 6-8 years old
**Characteristics:**
- Very short attention spans
- Limited vocabulary
- Need concrete, simple explanations
- Benefit from warm, encouraging tone

**Response Guidelines:**
```typescript
year <= 3
  ? `IMPORTANT: This is a young child (Year ${year}). Keep responses VERY short - 2-3 simple sentences max. Use only basic words. Be warm and encouraging like talking to a 6-7 year old.`
```

#### Tier 2: Upper Primary (Year 4-6)
**Age:** 9-11 years old
**Characteristics:**
- Developing abstract thinking
- Expanding vocabulary
- Can handle moderate complexity
- Still need clear, structured explanations

**Response Guidelines:**
```typescript
year <= 6
  ? `Keep responses concise - 3-4 sentences. Use age-appropriate vocabulary for Year ${year} students.`
```

#### Tier 3: Secondary (Year 7+)
**Age:** 12+ years old
**Characteristics:**
- Abstract reasoning capability
- Advanced vocabulary
- Can handle multi-paragraph explanations
- Appreciate detailed reasoning

**Response Guidelines:**
```typescript
: `Keep responses clear and focused - 2-3 short paragraphs max.`
```

---

## Explanation Prompts (`/ai/explain`)

**Endpoint:** `POST /ai/explain`
**Purpose:** Explain why a student's answer was incorrect and guide them to the correct solution.

### System Prompt Structure

```typescript
const systemPrompt = `Safe for ${age}yo. You are a friendly, encouraging tutor for Australian Year ${year} students.
Your role is to help students understand their mistakes without being condescating.
Use Australian English spelling (e.g., colour, favourite, maths).
${responseGuidelines}`;
```

**Key Elements:**
1. **Safety marker:** `Safe for ${age}yo` - Groq content moderation uses this
2. **Role definition:** Sets clear tutoring context
3. **Australian context:** Ensures culturally appropriate language
4. **Year-level guidelines:** Injected based on student's year level

### User Prompt Structure

**For Year 1-3:**
```typescript
const userPrompt = `A student answered this ${subject} question incorrectly.

Question: ${question}
Options: ${options.map((o, i) => `${i}: ${o}`).join(', ')}
Student's answer: ${userAnswer} (${options[userAnswer]})
Correct answer: ${correctAnswer} (${options[correctAnswer]})
${topic ? `Topic: ${topic}` : ''}

Please explain:
1. Why their answer is incorrect
2. The correct approach to solve this

Keep it to 2-3 SHORT simple sentences only. Use easy words!`;
```

**For Year 4+:**
```typescript
Please explain:
1. Why their answer is incorrect
2. The correct approach to solve this
3. A helpful tip to remember

Keep it to 2-3 short paragraphs. Be encouraging!
```

### What Changed (2026-01-04)
| Aspect | Before | After |
|--------|--------|-------|
| **Prompt length** | Same for all years | Tier-based (Year 1-3 shortest) |
| **Complexity** | Standard 3-point structure | 2 points for Year 1-3, 3 for others |
| **Vocabulary** | Age-appropriate but not enforced | "Use easy words" explicit for young kids |
| **Tone** | Encouraging | "Warm like talking to 6-7 year old" for Year 1-3 |

---

## Chat Prompts (`/ai/chat`)

**Endpoint:** `POST /ai/chat`
**Purpose:** Free-form tutoring conversation about curriculum topics.

### System Prompt Structure

```typescript
const systemPrompt = `Safe for ${chatAge}yo. You are a friendly, patient AI tutor for Australian students.
You're currently helping a Year ${chatYear} student with ${subject || 'their studies'}.

Guidelines:
- Be encouraging and supportive
- Use Australian English spelling (colour, favourite, maths)
${chatGuidelines}
- If they ask something off-topic, gently redirect to learning
- Never provide answers directly - guide them to discover answers
- Use examples relevant to Australian students

${context ? `Current context: ${context}` : ''}
${topic ? `Current topic: ${topic}` : ''}`;
```

### Chat Guidelines by Tier

**Year 1-3:**
```typescript
chatYear <= 3
  ? `CRITICAL: This is a young child (Year ${chatYear}). Keep ALL responses VERY short - 1-2 simple sentences. Use only basic words a 6-7 year old knows. Be warm, friendly, and encouraging like talking to a little kid.`
```

**Year 4-6:**
```typescript
chatYear <= 6
  ? `Keep responses short and simple - 2-3 sentences. Use vocabulary appropriate for Year ${chatYear} students.`
```

**Year 7+:**
```typescript
: `Keep responses focused and clear - 3-4 sentences unless more detail is needed.`
```

### Chat Context Injection
The chat endpoint receives context about what the student is currently reading:

```typescript
context: `The student is reading about "${selectedSection.title}" which covers: ${selectedSection.description}. Key points: ${selectedSection.keyPoints.join(', ')}. The content discusses: ${selectedSection.content.substring(0, 500)}...`
```

This allows the AI to:
- Stay on topic
- Reference specific curriculum content
- Provide contextually relevant examples

---

## Token Limits by Year Level

Token limits enforce response length constraints at the API level, ensuring the LLM cannot generate overly long responses regardless of prompt instructions.

### Explanation Endpoint (`/ai/explain`)

```typescript
const maxTokens = year <= 3 ? 150 : year <= 6 ? 250 : 300;
```

| Year Level | Max Tokens | Approximate Words | Rationale |
|-----------|------------|-------------------|-----------|
| 1-3       | 150        | ~112 words        | Forces very short, simple explanations |
| 4-6       | 250        | ~187 words        | Allows moderate detail |
| 7+        | 300        | ~225 words        | Permits full explanations with examples |

### Chat Endpoint (`/ai/chat`)

```typescript
const chatMaxTokens = chatYear <= 3 ? 100 : chatYear <= 6 ? 200 : 400;
```

| Year Level | Max Tokens | Approximate Words | Rationale |
|-----------|------------|-------------------|-----------|
| 1-3       | 100        | ~75 words         | Very brief conversational responses |
| 4-6       | 200        | ~150 words        | Balanced conversation |
| 7+        | 400        | ~300 words        | Can provide detailed discussion |

### Why Both Prompt Instructions AND Token Limits?

1. **Prompt instructions** guide the model's style, tone, and structure
2. **Token limits** provide a hard technical constraint as a safety net
3. Together they ensure age-appropriate responses even if the model doesn't perfectly follow instructions

---

## Safety and Age-Appropriateness

### Content Safety
All prompts include the age marker: `Safe for ${age}yo`

Groq's content moderation uses this to:
- Filter inappropriate content
- Adjust complexity automatically
- Ensure child-safe responses

### Educational Boundaries

**Socratic Method - No Direct Answers:**
```
- Never provide answers directly - guide them to discover answers
```

This ensures students:
- Develop problem-solving skills
- Learn through discovery
- Build confidence

**On-Topic Redirection:**
```
- If they ask something off-topic, gently redirect to learning
```

Keeps students focused on educational content.

### Australian Context
```
- Use Australian English spelling (colour, favourite, maths)
- Use examples relevant to Australian students
- If discussing curriculum topics, align with Australian curriculum standards
```

Ensures cultural relevance and curriculum alignment.

---

## Caching Strategy

### Cache Implementation
```typescript
const cacheKey = createHash('md5')
  .update(`${questionId}:${userAnswer}:${correctAnswer}`)
  .digest('hex');
```

### What Gets Cached
- **Endpoint:** `/ai/explain` only
- **Cache key:** MD5 hash of question ID + user answer + correct answer
- **TTL:** 30 days
- **Storage:** DynamoDB

### Why Cache Explanations?
1. **Cost savings:** Avoid repeated API calls for same question/answer combinations
2. **Latency:** Instant responses for common mistakes
3. **Consistency:** Students see the same explanation for the same mistake
4. **Analytics:** Track which mistakes are most common

### Why NOT Cache Chat?
- Chat is context-specific and conversational
- Same question may have different optimal responses based on:
  - Previous conversation history
  - Student's current section/topic
  - Time of day/session length

---

## Best Practices

### 1. Always Pass Year Level
```typescript
// Good
await getAIExplanation({
  yearLevel: childProfile.yearLevel,
  ...
});

// Bad - defaults to Year 5
await getAIExplanation({
  // missing yearLevel
  ...
});
```

### 2. Provide Topic Context
```typescript
// Good - AI knows the specific topic
topic: selectedSection.title

// Bad - AI has less context
topic: undefined
```

### 3. Monitor Rate Limits
```typescript
const RATE_LIMITS: Record<string, number> = {
  free: 10,
  essential: 1000,
  premium: 1000,
};
```

Rate limits are per-parent, not per-child.

### 4. Log All Interactions
Every AI interaction is logged with:
```typescript
interface AIInteractionLog {
  id: string;
  childId: string;
  questionAttemptId?: string;
  requestType: 'explain' | 'hint' | 'chat';
  requestTimestamp: string;
  responseTimestamp: string;
  systemPrompt: string;  // Full prompt for RAG analysis
  userPrompt: string;     // Full prompt for RAG analysis
  questionContext?: {...};
  response: string;
  tokensUsed?: number;
  latencyMs: number;
  model: string;
  temperature: number;
  curriculumArea?: string;
  yearLevel?: number;
  subject?: string;
}
```

This enables:
- RAG (Retrieval-Augmented Generation) enhancement
- Prompt optimization analysis
- Quality monitoring
- Cost tracking

---

## Examples

### Example 1: Year 1 Explanation

**Question:** What is 5 + 3?
**Student Answer:** 7
**Correct Answer:** 8

**AI Response (150 tokens max):**
```
You were very close! When we add 5 and 3, we need to count up 3 more from 5.
Let's count together: 5... 6, 7, 8! The answer is 8.
Try using your fingers to count next time!
```

**Token count:** ~45 tokens
**Word count:** ~37 words
**Reading level:** Grade 1

---

### Example 2: Year 5 Explanation

**Question:** What is 3/4 + 1/2?
**Student Answer:** 4/6
**Correct Answer:** 5/4 (or 1 1/4)

**AI Response (250 tokens max):**
```
Good try, but remember that when adding fractions, we need to make sure they have
the same denominator first!

Here's how to solve it: The denominators are 4 and 2. The lowest common denominator
is 4. We need to convert 1/2 to quarters: 1/2 = 2/4. Now we can add: 3/4 + 2/4 = 5/4.

Since 5/4 is an improper fraction (top number bigger than bottom), we can also
write it as 1 1/4.

Helpful tip: Always find a common denominator before adding or subtracting fractions!
```

**Token count:** ~110 tokens
**Word count:** ~95 words
**Reading level:** Grade 5

---

### Example 3: Year 8 Explanation

**Question:** Solve for x: 2x + 5 = 13
**Student Answer:** x = 4
**Correct Answer:** x = 4

**AI Response (300 tokens max):**
```
Great work! You got the right answer.

Let's walk through the solution to confirm your understanding:
1. Start with: 2x + 5 = 13
2. Subtract 5 from both sides: 2x = 8
3. Divide both sides by 2: x = 4

This is a linear equation, and you correctly used inverse operations to isolate x.
First, you undid the addition of 5 by subtracting 5 from both sides. Then you undid
the multiplication by 2 by dividing both sides by 2.

A helpful tip: When solving equations, think of it like a balance scale - whatever
you do to one side, you must do to the other. Always work backwards from the order
of operations: undo addition/subtraction first, then multiplication/division, and
finally any exponents or roots.

Well done on applying the correct process!
```

**Token count:** ~165 tokens
**Word count:** ~143 words
**Reading level:** Grade 8

---

### Example 4: Year 1 Chat

**Student:** "What is adding?"

**AI Response (100 tokens max):**
```
Adding means putting numbers together to make a bigger number! Like if you have
2 apples and your friend gives you 3 more apples, now you have 5 apples total.
That's adding! 🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎
```

**Token count:** ~48 tokens
**Reading level:** Grade 1

---

### Example 5: Year 8 Chat

**Student:** "Why do we need to learn algebra?"

**AI Response (400 tokens max):**
```
Algebra is like learning the language of patterns and problem-solving! It helps
you describe relationships between things using letters and numbers.

Here's why it's useful in real life:
- If you want to save money for something, algebra helps you work out how long
it will take based on how much you save each week
- When cooking, you can scale recipes up or down using algebraic thinking
- Game designers use algebra to calculate scores, physics, and character stats
- Understanding algebra helps with budgeting, comparing phone plans, or figuring
out if a sale price is really a good deal

The skills you develop in algebra - logical thinking, breaking down problems
into steps, finding patterns - are valuable in almost every career. Engineers,
scientists, economists, and even artists use algebraic thinking!

What kind of problems do you enjoy solving? I can show you how algebra connects
to things you're interested in!
```

**Token count:** ~165 tokens
**Reading level:** Grade 8

---

## Monitoring and Optimization

### CloudWatch Metrics

Every AI request publishes metrics to CloudWatch:

```typescript
await Promise.all([
  publishMetric('AIRequests', 1, 'Count', [{ Name: 'Type', Value: 'explain' }]),
  publishMetric('AILatency', latencyMs, 'Milliseconds', [{ Name: 'Type', Value: 'explain' }]),
  publishMetric('TokensUsed', tokensUsed, 'Count', [{ Name: 'Type', Value: 'explain' }]),
]);
```

**Available metrics:**
- `AIRequests` - Request count by type
- `AILatency` - Response time in ms
- `TokensUsed` - Token consumption
- `RateLimitHits` - How often users hit limits
- `AIErrors` - Error count

### Future Enhancements

Based on logged interactions, future improvements could include:

1. **RAG Enhancement:**
   - Use past successful explanations to improve new ones
   - Identify common misconceptions and preload responses

2. **Personalization:**
   - Track which explanation styles work best for each child
   - Adjust temperature/guidelines based on child's response patterns

3. **Adaptive Token Limits:**
   - Increase limits for advanced students
   - Further reduce for struggling students

4. **Multi-language Support:**
   - Detect parent's language preference
   - Provide translations while maintaining educational quality

---

## Related Files

| File | Purpose |
|------|---------|
| [ai.ts](/packages/api/src/handlers/ai.ts) | Main AI handler implementation |
| [DEVELOPER_GUIDE.md](/docs/DEVELOPER_GUIDE.md) | General development guidelines |
| [CLAUDE.md](/CLAUDE.md) | Deployment and infrastructure |
| [CURRICULUM_CONTENT_GUIDE.md](/docs/CURRICULUM_CONTENT_GUIDE.md) | Curriculum structure |

---

## Changelog

### 2026-01-04 - Year-Level Prompt Customization
- ✅ Added three-tier year-level-specific prompting (Year 1-3, 4-6, 7+)
- ✅ Implemented token limits by year level (100-400 tokens)
- ✅ Simplified explanation structure for Year 1-3 (2 points instead of 3)
- ✅ Added explicit vocabulary constraints for young children
- ✅ Enhanced warmth and encouragement for Year 1-3 responses

### Initial Implementation (2024)
- Basic prompt structure with year level passed to Groq
- Caching for explanation endpoint
- Rate limiting by tier
- CloudWatch metrics integration
