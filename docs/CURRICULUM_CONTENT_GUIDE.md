# Curriculum Content Development Guide

This document provides a comprehensive guide for developing curriculum content in StudyMate, including section notes, question development, answer formulation, and the knowledge tokenisation system that powers personalised learning and RAG-based question customisation.

---

## Table of Contents

1. [Content Architecture Overview](#content-architecture-overview)
2. [Data Structure Hierarchy](#data-structure-hierarchy)
3. [Section Content Development](#section-content-development)
4. [Knowledge Token System](#knowledge-token-system)
5. [Question Development](#question-development)
6. [Answer Formulation & Distractor Design](#answer-formulation--distractor-design)
7. [Tokenisation for Analytics & RAG](#tokenisation-for-analytics--rag)
8. [Complete Worked Example](#complete-worked-example)
9. [Quality Checklist](#quality-checklist)
10. [Future: RAG-Based Customisation](#future-rag-based-customisation)

---

## Content Architecture Overview

StudyMate's curriculum content follows the **Victorian Curriculum** structure and is designed to support:

1. **Self-paced learning** - Students read notes, study examples, then practice with questions
2. **Granular analytics** - Track mastery at the skill level, not just topic level
3. **Misconception detection** - Identify WHY students get answers wrong
4. **Personalised learning** - Future RAG-based question customisation based on knowledge gaps

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CURRICULUM HIERARCHY                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Year Level (e.g., Year 5)                                                  │
│    └── Strand (e.g., Number and Algebra)                                    │
│          └── Chapter (e.g., Place Value and Large Numbers)                  │
│                └── Section (e.g., VCMNA186 - Reading and Writing Numbers)   │
│                      ├── Content (Markdown notes)                           │
│                      ├── Key Points (4 bullet points)                       │
│                      ├── Examples (2+ worked examples)                      │
│                      ├── Knowledge Tokens (6-12 granular skills)            │
│                      └── Questions (20 questions with tokenisation)         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Structure Hierarchy

### File Location
```
packages/curriculum/src/maths/year5.ts
packages/curriculum/src/types.ts
```

### TypeScript Interfaces

```typescript
interface YearLevelCurriculum {
  yearLevel: number;           // e.g., 5
  subject: 'maths' | 'english';
  strands: CurriculumStrand[];
}

interface CurriculumStrand {
  id: string;                  // e.g., "number-algebra"
  name: string;                // e.g., "Number and Algebra"
  chapters: CurriculumChapter[];
}

interface CurriculumChapter {
  id: string;                  // e.g., "place-value"
  title: string;               // e.g., "Place Value and Large Numbers"
  description: string;         // Brief chapter description
  sections: CurriculumSection[];
}

interface CurriculumSection {
  id: string;                  // Victorian Curriculum code (e.g., "VCMNA186")
  code: string;                // Same as id
  title: string;               // e.g., "Reading and Writing Large Numbers"
  description: string;         // Official curriculum descriptor
  content: string;             // Markdown content for student reading
  keyPoints: string[];         // 4 key takeaways
  examples: Example[];         // 2+ worked examples
  knowledgeTokens: KnowledgeToken[];  // Granular skills (6-12)
  questions: Question[];       // 20 questions with tokenisation
}
```

---

## Section Content Development

Each curriculum section contains **learning content** that students read before attempting questions.

### 1. Content (Markdown Notes)

The `content` field contains Markdown-formatted educational material written for the target age group (Year 5 = ~10-11 years old).

**Structure:**
```markdown
# [Topic Title]

[Opening hook - make it relatable]

## [Concept 1]

[Explanation with simple language]

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |

## [Concept 2]

[More explanation]

**Example:** [Worked example inline]

## [Key Rule/Tip]

[Memorable rule or tip]
```

**Example (Place Value):**
```typescript
content: `# Understanding Large Numbers

When we count beyond thousands, we enter the world of really big numbers! Let's explore how our place value system works with these large numbers.

## What is Place Value?

Every digit in a number has a special position that tells us its value. Think of it like assigned seats in a cinema - each seat has a specific spot!

| Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|-------------------|---------------|-----------|----------|------|------|
| 100,000          | 10,000        | 1,000     | 100      | 10   | 1    |

## Reading Large Numbers

Let's read the number **347,582**:
- **3** hundred thousands = 300,000
- **4** ten thousands = 40,000
- **7** thousands = 7,000
- **5** hundreds = 500
- **8** tens = 80
- **2** ones = 2

We say: "Three hundred and forty-seven thousand, five hundred and eighty-two"

## The Comma Rule

We use commas to separate groups of three digits from the right. This makes big numbers easier to read!`
```

**Writing Guidelines:**
- Use simple, age-appropriate language
- Include visual aids (tables, lists)
- Use bold for key terms
- Include inline examples
- Keep paragraphs short (2-3 sentences)
- Use analogies children can relate to

### 2. Key Points

Four bullet points summarising the most important concepts. These appear in a highlighted box.

```typescript
keyPoints: [
  'Each position in a number represents a different value (ones, tens, hundreds, thousands, etc.)',
  'We use commas to separate groups of three digits for easier reading',
  'When comparing numbers, start from the leftmost digit',
  'The more digits a number has, the larger it generally is'
]
```

### 3. Examples

Two or more worked examples showing problem-solving steps.

```typescript
interface Example {
  problem: string;      // The question posed
  solution: string;     // The answer
  explanation: string;  // How to arrive at the answer
}

examples: [
  {
    problem: 'Write 456,789 in words',
    solution: 'Four hundred and fifty-six thousand, seven hundred and eighty-nine',
    explanation: 'Break it into parts: 456 thousand + 789'
  },
  {
    problem: 'Order from smallest to largest: 89,234 | 98,234 | 89,432',
    solution: '89,234 < 89,432 < 98,234',
    explanation: 'Compare the ten-thousands digit first, then thousands, etc.'
  }
]
```

---

## Knowledge Token System

Knowledge tokens are **granular units of knowledge** that enable:
1. **Skill-level tracking** - Not just "Place Value" but "Ten Thousands Place Value"
2. **Prerequisite mapping** - Which skills must be mastered before others
3. **Misconception detection** - Identify specific confusions
4. **RAG-based customisation** - Generate questions targeting weak skills

### Token Structure

```typescript
interface KnowledgeToken {
  id: string;              // Unique identifier (kebab-case)
  name: string;            // Human-readable name
  description: string;     // What this skill entails
  prerequisites?: string[]; // Token IDs that should be mastered first
}
```

### Token Design Principles

1. **Granular but meaningful** - Each token should represent a testable skill
2. **Hierarchical prerequisites** - Map the learning progression
3. **Confusion-aware** - Include tokens for common misconceptions
4. **6-12 tokens per section** - Enough granularity without over-engineering

### Example: Place Value Tokens

```typescript
knowledgeTokens: [
  // === Core Place Value Skills (Building Blocks) ===
  {
    id: 'place-value-ones',
    name: 'Ones Place Value',
    description: 'Understanding the ones (units) position',
  },
  {
    id: 'place-value-tens',
    name: 'Tens Place Value',
    description: 'Understanding the tens position',
    prerequisites: ['place-value-ones'],
  },
  {
    id: 'place-value-hundreds',
    name: 'Hundreds Place Value',
    description: 'Understanding the hundreds position',
    prerequisites: ['place-value-tens'],
  },
  {
    id: 'place-value-thousands',
    name: 'Thousands Place Value',
    description: 'Understanding the thousands position',
    prerequisites: ['place-value-hundreds'],
  },
  {
    id: 'place-value-ten-thousands',
    name: 'Ten Thousands Place Value',
    description: 'Understanding the ten thousands position',
    prerequisites: ['place-value-thousands'],
  },
  {
    id: 'place-value-hundred-thousands',
    name: 'Hundred Thousands Place Value',
    description: 'Understanding the hundred thousands position',
    prerequisites: ['place-value-ten-thousands'],
  },

  // === Applied Skills (Depend on Core Skills) ===
  {
    id: 'reading-large-numbers',
    name: 'Reading Large Numbers',
    description: 'Converting numerals to words correctly',
    prerequisites: ['place-value-hundred-thousands'],
  },
  {
    id: 'writing-large-numbers',
    name: 'Writing Large Numbers',
    description: 'Converting words to numerals correctly',
    prerequisites: ['place-value-hundred-thousands'],
  },
  {
    id: 'comparing-large-numbers',
    name: 'Comparing Large Numbers',
    description: 'Determining which of two numbers is larger or smaller',
    prerequisites: ['place-value-hundred-thousands'],
  },
  {
    id: 'ordering-large-numbers',
    name: 'Ordering Large Numbers',
    description: 'Arranging multiple numbers from smallest to largest or vice versa',
    prerequisites: ['comparing-large-numbers'],
  },
  {
    id: 'adding-place-value',
    name: 'Adding by Place Value',
    description: 'Adding a specific place value amount to a number',
    prerequisites: ['place-value-hundred-thousands'],
  },
  {
    id: 'rounding-large-numbers',
    name: 'Rounding Large Numbers',
    description: 'Rounding to nearest thousand, ten thousand, etc.',
    prerequisites: ['place-value-hundred-thousands'],
  },
]
```

### Prerequisite Chains

```
place-value-ones
    └── place-value-tens
          └── place-value-hundreds
                └── place-value-thousands
                      └── place-value-ten-thousands
                            └── place-value-hundred-thousands
                                  ├── reading-large-numbers
                                  ├── writing-large-numbers
                                  ├── comparing-large-numbers
                                  │     └── ordering-large-numbers
                                  ├── adding-place-value
                                  └── rounding-large-numbers
```

---

## Question Development

Each section has **20 questions** covering all knowledge tokens with varying difficulty.

### Question Structure

```typescript
interface Question {
  id: string;                  // Section code + number (e.g., "VCMNA186-001")
  question: string;            // The question text
  options: string[];           // 4 multiple choice options
  correctAnswer: number;       // Index of correct option (0-3)
  explanation: string;         // Why the answer is correct
  difficulty: 1 | 2 | 3;       // 1=Easy, 2=Medium, 3=Hard
  knowledge: QuestionKnowledge; // Tokenisation (see below)
}
```

### Question Distribution Guidelines

| Difficulty | Count | Description |
|------------|-------|-------------|
| 1 (Easy) | 6-8 | Direct application of single concept |
| 2 (Medium) | 8-10 | Multiple steps or minor complexity |
| 3 (Hard) | 4-6 | Multi-concept or tricky edge cases |

### Question Categories by Skill Type

For Place Value section, questions should cover:

```
Questions 1-5:   Place value identification (Which digit is in X place?)
Questions 6-10:  Reading and writing numbers (Words ↔ Numerals)
Questions 11-15: Comparing and ordering (Which is larger/smallest to largest)
Questions 16-18: Adding/subtracting by place value (10,000 more than...)
Questions 19-20: Rounding or challenge questions
```

---

## Answer Formulation & Distractor Design

The power of knowledge tokenisation comes from **carefully designed wrong answers (distractors)** that reveal specific misconceptions.

### The Knowledge Object

```typescript
interface QuestionKnowledge {
  questionTokens: string[];           // All tokens being tested
  correctToken: string;               // Token demonstrated by correct answer
  incorrectTokens: (string | null)[]; // Misconception per wrong option (null if correct)
}
```

### Distractor Design Principles

1. **Each distractor should reveal a specific misconception**
2. **Distractors should be plausible** - A student with that misconception would choose it
3. **Use common error patterns** from teaching experience
4. **null for the correct answer** in incorrectTokens array

### Example: Place Value Question

```typescript
{
  id: 'VCMNA186-001',
  question: 'What is the value of the 7 in 372,458?',
  options: ['7', '70', '700', '70,000'],  // Four options
  correctAnswer: 3,                        // Index 3 = '70,000'
  explanation: 'The 7 is in the ten thousands place, so its value is 70,000.',
  difficulty: 1,
  knowledge: {
    questionTokens: ['place-value-ten-thousands'],
    correctToken: 'place-value-ten-thousands',
    incorrectTokens: [
      'place-value-ones-confusion',      // Option 0: Thinks digit = value
      'place-value-tens-confusion',      // Option 1: Wrong place (tens)
      'place-value-hundreds-confusion',  // Option 2: Wrong place (hundreds)
      null,                              // Option 3: CORRECT (no misconception)
    ],
  },
}
```

### Distractor Analysis

| Option | Value | Student Thinking | Misconception Token |
|--------|-------|------------------|---------------------|
| A | 7 | "The digit is 7, so the value is 7" | `place-value-ones-confusion` |
| B | 70 | "7 is in tens place" (miscounted) | `place-value-tens-confusion` |
| C | 700 | "7 is in hundreds place" (miscounted) | `place-value-hundreds-confusion` |
| D | 70,000 | Correctly identified ten thousands | `null` (correct) |

### Common Misconception Token Patterns

Create tokens for recurring misconceptions:

```typescript
// === Confusion Tokens (Used in incorrectTokens) ===

// Place Value Confusions
'place-value-ones-confusion'           // Thinks digit = value
'place-value-tens-confusion'           // Misidentifies tens position
'place-value-hundreds-confusion'       // Misidentifies hundreds position
'place-value-thousands-confusion'      // Misidentifies thousands position
'place-value-ten-thousands-confusion'  // Misidentifies ten thousands
'place-value-hundred-thousands-confusion'

// Reading/Writing Confusions
'digit-grouping-confusion'             // Wrong thousands grouping
'zero-placeholder-confusion'           // Mishandles zeros in numbers
'magnitude-confusion'                  // Wrong order of magnitude
'digit-order-confusion'                // Misplaced digits
'ones-tens-transposition'              // Swapped ones and tens

// Comparing/Ordering Confusions
'leftmost-digit-only-error'            // Only checked first digit
'digit-sum-confusion'                  // Compared digit sums not values
'reverse-order-error'                  // Got order backwards
'partial-comparison-error'             // Stopped comparing too early

// Operation Confusions
'adding-wrong-place-error'             // Added to wrong place value
'subtracting-wrong-place-error'        // Subtracted from wrong place
```

---

## Tokenisation for Analytics & RAG

### How Tokenisation Powers Analytics

When a student answers a question:

```typescript
// Student selects Option 1 (value: 70) for question about 7 in 372,458

const studentAnswer = 1;  // Selected "70"
const correctAnswer = 3;  // Correct was "70,000"

if (studentAnswer !== correctAnswer) {
  const misconception = question.knowledge.incorrectTokens[studentAnswer];
  // misconception = 'place-value-tens-confusion'

  // Record this misconception for the child
  await recordMisconception(childId, misconception);
  // Also decrement mastery for the tested token
  await decrementMastery(childId, question.knowledge.correctToken);
}
```

### Analytics Data Generated

```typescript
// After many attempts, we can generate insights like:
{
  childId: "child-123",
  tokenMastery: {
    "place-value-ones": { mastery: 95, attempts: 20 },
    "place-value-tens": { mastery: 88, attempts: 18 },
    "place-value-ten-thousands": { mastery: 45, attempts: 12 },  // WEAK
  },
  misconceptions: {
    "place-value-tens-confusion": 5,      // Happened 5 times
    "place-value-hundreds-confusion": 3,  // Happened 3 times
  },
  aiInsight: "Your child often confuses ten thousands with tens place. They may benefit from using a place value chart."
}
```

### Future: RAG-Based Question Customisation

The tokenisation system enables future AI-powered features:

```typescript
// RAG Query for generating custom questions
const query = {
  childId: "child-123",
  weakTokens: ["place-value-ten-thousands", "comparing-large-numbers"],
  misconceptions: ["place-value-tens-confusion"],

  // AI generates questions that:
  // 1. Target weak tokens specifically
  // 2. Include distractors that test known misconceptions
  // 3. Use similar numbers to previously missed questions
};

// AI-generated question targeting their specific weakness:
{
  question: "In 847,253, which digit is in the ten thousands position?",
  options: ["8", "4", "7", "2"],  // 4 is correct, but includes 7 (thousands) as trap
  // Specifically designed to test ten-thousands vs thousands confusion
}
```

---

## Complete Worked Example

### Section: VCMNA186 - Reading and Writing Large Numbers

```typescript
{
  id: 'VCMNA186',
  code: 'VCMNA186',
  title: 'Reading and Writing Large Numbers',
  description: 'Recognise, represent and order numbers to at least hundreds of thousands',

  // === CONTENT ===
  content: `# Understanding Large Numbers

When we count beyond thousands, we enter the world of really big numbers! Let's explore how our place value system works with these large numbers.

## What is Place Value?

Every digit in a number has a special position that tells us its value. Think of it like assigned seats in a cinema - each seat has a specific spot!

| Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|-------------------|---------------|-----------|----------|------|------|
| 100,000          | 10,000        | 1,000     | 100      | 10   | 1    |

## Reading Large Numbers

Let's read the number **347,582**:
- **3** hundred thousands = 300,000
- **4** ten thousands = 40,000
- **7** thousands = 7,000
- **5** hundreds = 500
- **8** tens = 80
- **2** ones = 2

We say: "Three hundred and forty-seven thousand, five hundred and eighty-two"

## The Comma Rule

We use commas to separate groups of three digits from the right. This makes big numbers easier to read!

- 1,000 (one thousand)
- 10,000 (ten thousand)
- 100,000 (one hundred thousand)

## Ordering Large Numbers

When comparing large numbers, start from the left and compare digit by digit:

**Example:** Which is larger, 234,567 or 243,567?
- Both start with 2
- Next digit: 3 vs 4
- Since 4 > 3, we know **243,567 is larger**`,

  // === KEY POINTS ===
  keyPoints: [
    'Each position in a number represents a different value (ones, tens, hundreds, thousands, etc.)',
    'We use commas to separate groups of three digits for easier reading',
    'When comparing numbers, start from the leftmost digit',
    'The more digits a number has, the larger it generally is'
  ],

  // === EXAMPLES ===
  examples: [
    {
      problem: 'Write 456,789 in words',
      solution: 'Four hundred and fifty-six thousand, seven hundred and eighty-nine',
      explanation: 'Break it into parts: 456 thousand + 789'
    },
    {
      problem: 'Order from smallest to largest: 89,234 | 98,234 | 89,432',
      solution: '89,234 < 89,432 < 98,234',
      explanation: 'Compare the ten-thousands digit first, then thousands, etc.'
    }
  ],

  // === KNOWLEDGE TOKENS ===
  knowledgeTokens: [
    {
      id: 'place-value-ones',
      name: 'Ones Place Value',
      description: 'Understanding the ones (units) position',
    },
    {
      id: 'place-value-tens',
      name: 'Tens Place Value',
      description: 'Understanding the tens position',
      prerequisites: ['place-value-ones'],
    },
    {
      id: 'place-value-hundreds',
      name: 'Hundreds Place Value',
      description: 'Understanding the hundreds position',
      prerequisites: ['place-value-tens'],
    },
    {
      id: 'place-value-thousands',
      name: 'Thousands Place Value',
      description: 'Understanding the thousands position',
      prerequisites: ['place-value-hundreds'],
    },
    {
      id: 'place-value-ten-thousands',
      name: 'Ten Thousands Place Value',
      description: 'Understanding the ten thousands position',
      prerequisites: ['place-value-thousands'],
    },
    {
      id: 'place-value-hundred-thousands',
      name: 'Hundred Thousands Place Value',
      description: 'Understanding the hundred thousands position',
      prerequisites: ['place-value-ten-thousands'],
    },
    {
      id: 'reading-large-numbers',
      name: 'Reading Large Numbers',
      description: 'Converting numerals to words correctly',
      prerequisites: ['place-value-hundred-thousands'],
    },
    {
      id: 'writing-large-numbers',
      name: 'Writing Large Numbers',
      description: 'Converting words to numerals correctly',
      prerequisites: ['place-value-hundred-thousands'],
    },
    {
      id: 'comparing-large-numbers',
      name: 'Comparing Large Numbers',
      description: 'Determining which of two numbers is larger or smaller',
      prerequisites: ['place-value-hundred-thousands'],
    },
    {
      id: 'ordering-large-numbers',
      name: 'Ordering Large Numbers',
      description: 'Arranging multiple numbers from smallest to largest or vice versa',
      prerequisites: ['comparing-large-numbers'],
    },
    {
      id: 'adding-place-value',
      name: 'Adding by Place Value',
      description: 'Adding a specific place value amount to a number',
      prerequisites: ['place-value-hundred-thousands'],
    },
    {
      id: 'rounding-large-numbers',
      name: 'Rounding Large Numbers',
      description: 'Rounding to nearest thousand, ten thousand, etc.',
      prerequisites: ['place-value-hundred-thousands'],
    },
  ],

  // === QUESTIONS (showing 3 examples) ===
  questions: [
    // QUESTION 1: Easy - Direct place value identification
    {
      id: 'VCMNA186-001',
      question: 'What is the value of the 7 in 372,458?',
      options: ['7', '70', '700', '70,000'],
      correctAnswer: 3,
      explanation: 'The 7 is in the ten thousands place, so its value is 70,000.',
      difficulty: 1,
      knowledge: {
        questionTokens: ['place-value-ten-thousands'],
        correctToken: 'place-value-ten-thousands',
        incorrectTokens: [
          'place-value-ones-confusion',      // Thinks digit = value
          'place-value-tens-confusion',      // Wrong place identification
          'place-value-hundreds-confusion',  // Wrong place identification
          null,                              // Correct answer
        ],
      },
    },

    // QUESTION 6: Medium - Writing numbers from words
    {
      id: 'VCMNA186-006',
      question: 'How do you write "five hundred and thirty-two thousand, one hundred and seven" as a number?',
      options: ['53,217', '532,107', '532,170', '523,107'],
      correctAnswer: 1,
      explanation: '532 thousand = 532,000, plus 107 = 532,107',
      difficulty: 2,
      knowledge: {
        questionTokens: ['writing-large-numbers'],
        correctToken: 'writing-large-numbers',
        incorrectTokens: [
          'digit-grouping-confusion',   // Wrong thousands grouping
          null,                         // Correct
          'ones-tens-transposition',    // Swapped 07 to 70
          'digit-order-confusion',      // Misplaced digits
        ],
      },
    },

    // QUESTION 13: Hard - Ordering multiple numbers
    {
      id: 'VCMNA186-013',
      question: 'Order these numbers from smallest to largest: 562,418 | 526,418 | 562,148',
      options: [
        '526,418 < 562,148 < 562,418',
        '562,148 < 526,418 < 562,418',
        '562,418 < 562,148 < 526,418',
        '526,418 < 562,418 < 562,148'
      ],
      correctAnswer: 0,
      explanation: 'First compare ten thousands: 526 < 562. Then compare the two 562s: 562,148 < 562,418 (hundreds place: 1 < 4).',
      difficulty: 3,
      knowledge: {
        questionTokens: ['ordering-large-numbers'],
        correctToken: 'ordering-large-numbers',
        incorrectTokens: [
          null,                          // Correct
          'sequential-comparison-error', // Didn't compare systematically
          'reverse-order-error',         // Got order backwards
          'partial-comparison-error',    // Stopped comparing too early
        ],
      },
    },
    // ... 17 more questions following same pattern
  ],
}
```

---

## Quality Checklist

Before adding a new section, verify:

### Content
- [ ] Written at appropriate reading level (Year 5 = ~10-11 years)
- [ ] Uses simple, clear language
- [ ] Includes visual aids (tables, lists)
- [ ] Has 2+ worked examples
- [ ] Key concepts are bolded
- [ ] 4 key points that summarise the topic

### Knowledge Tokens
- [ ] 6-12 tokens covering all key skills
- [ ] Tokens are granular but meaningful
- [ ] Prerequisites form logical learning path
- [ ] Token names are clear and descriptive

### Questions
- [ ] 20 questions total
- [ ] Difficulty distribution: 6-8 Easy, 8-10 Medium, 4-6 Hard
- [ ] All knowledge tokens are tested
- [ ] Each question has a knowledge object

### Answer Tokenisation
- [ ] Each distractor reveals a specific misconception
- [ ] Misconception tokens are meaningful (not generic)
- [ ] `null` is used for the correct answer in incorrectTokens
- [ ] incorrectTokens array matches options array length

### Question Quality
- [ ] Question text is unambiguous
- [ ] Options are plausible (student with misconception would choose)
- [ ] Explanation is clear and educational
- [ ] No duplicate or near-duplicate questions

---

## Future: RAG-Based Customisation

The tokenisation system is designed to enable future AI-powered features:

### Personalised Question Generation

```typescript
// Given a child's mastery profile:
const childProfile = {
  weakTokens: ['place-value-ten-thousands', 'comparing-large-numbers'],
  misconceptions: ['place-value-tens-confusion'],
  recentlyMissedNumbers: ['847,253', '562,418'],
};

// RAG system retrieves relevant questions and generates new ones:
const customQuestion = await generateQuestion({
  targetToken: 'place-value-ten-thousands',
  avoidMisconception: 'place-value-tens-confusion',
  similarTo: childProfile.recentlyMissedNumbers,
  difficulty: 2, // Medium - challenge but not frustrate
});
```

### Adaptive Learning Paths

```typescript
// Based on prerequisite chains, suggest what to study next:
if (mastery['place-value-thousands'] < 70) {
  // Don't move to ten-thousands yet
  return recommendSection('VCMNA186', focus: 'place-value-thousands');
}
```

### AI Tutor Integration

```typescript
// When explaining a wrong answer, use token context:
const explanation = await aiTutor.explain({
  question: currentQuestion,
  studentAnswer: selectedOption,
  misconception: 'place-value-tens-confusion',

  // AI can say: "I see you thought the 7 was in the tens place.
  // Remember, we count from the right: ones, tens, hundreds, thousands,
  // TEN thousands. Try counting again!"
});
```

---

## Appendix: Token Naming Conventions

### Skill Tokens (Correct Answer)
```
[topic]-[specific-skill]

Examples:
place-value-ones
place-value-ten-thousands
reading-large-numbers
comparing-large-numbers
acute-angle-identification
fraction-equivalent-finding
```

### Misconception Tokens (Incorrect Answers)
```
[topic]-[confusion-type]-confusion
[skill]-[error-type]-error

Examples:
place-value-ones-confusion        # Thought digit = value
place-value-tens-confusion        # Miscounted place value
digit-grouping-confusion          # Wrong comma placement
reverse-order-error               # Got smallest/largest backwards
acute-right-confusion             # Confused acute with right angle
```

---

*Last Updated: January 2026*
*Version: 1.0*
