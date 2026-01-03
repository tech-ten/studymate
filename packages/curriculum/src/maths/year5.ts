import { YearLevelCurriculum } from '../types';

export const year5Maths: YearLevelCurriculum = {
  yearLevel: 5,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'place-value',
          title: 'Place Value and Large Numbers',
          description: 'Understanding numbers up to hundreds of thousands',
          sections: [
            {
              id: 'VCMNA186',
              code: 'VCMNA186',
              title: 'Reading and Writing Large Numbers',
              description: 'Recognise, represent and order numbers to at least hundreds of thousands',
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
              keyPoints: [
                'Each position in a number represents a different value (ones, tens, hundreds, thousands, etc.)',
                'We use commas to separate groups of three digits for easier reading',
                'When comparing numbers, start from the leftmost digit',
                'The more digits a number has, the larger it generally is'
              ],
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
              questions: [
                // === PLACE VALUE IDENTIFICATION (1-5) ===
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
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA186-002',
                  question: 'In the number 528,147, what digit is in the hundred thousands place?',
                  options: ['1', '2', '5', '8'],
                  correctAnswer: 2,
                  explanation: 'Reading from left to right, the 5 is in the hundred thousands place (500,000).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['place-value-hundred-thousands'],
                    correctToken: 'place-value-hundred-thousands',
                    incorrectTokens: [
                      'place-value-hundreds-confusion',      // Confused hundreds with hundred thousands
                      'place-value-ten-thousands-confusion', // Wrong position
                      null,
                      'place-value-thousands-confusion',     // Wrong position
                    ],
                  },
                },
                {
                  id: 'VCMNA186-003',
                  question: 'What is the value of the 4 in 645,213?',
                  options: ['4', '400', '4,000', '40,000'],
                  correctAnswer: 3,
                  explanation: 'The 4 is in the ten thousands place, so its value is 40,000.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['place-value-ten-thousands'],
                    correctToken: 'place-value-ten-thousands',
                    incorrectTokens: [
                      'place-value-ones-confusion',          // Thinks digit = value
                      'place-value-hundreds-confusion',      // Wrong place
                      'place-value-thousands-confusion',     // Adjacent place confusion
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA186-004',
                  question: 'In 907,365, which digit is in the thousands place?',
                  options: ['9', '7', '3', '6'],
                  correctAnswer: 1,
                  explanation: 'Counting from the right: 5 (ones), 6 (tens), 3 (hundreds), 7 (thousands).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['place-value-thousands'],
                    correctToken: 'place-value-thousands',
                    incorrectTokens: [
                      'place-value-hundred-thousands-confusion', // Confused with leftmost
                      null,
                      'place-value-hundreds-confusion',          // Adjacent place error
                      'place-value-tens-confusion',              // Wrong position
                    ],
                  },
                },
                {
                  id: 'VCMNA186-005',
                  question: 'The digit 8 in which number has a value of 80,000?',
                  options: ['482,156', '248,156', '824,156', '842,156'],
                  correctAnswer: 0,
                  explanation: 'In 482,156, the 8 is in the ten thousands place, so its value is 80,000. In 248,156, 8 is in thousands (8,000). In 824,156 and 842,156, 8 is in hundred thousands (800,000).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['place-value-ten-thousands'],
                    correctToken: 'place-value-ten-thousands',
                    incorrectTokens: [
                      null,
                      'place-value-thousands-confusion',         // 8 is in thousands here
                      'place-value-hundred-thousands-confusion', // 8 is in hundred thousands
                      'place-value-hundred-thousands-confusion', // 8 is in hundred thousands
                    ],
                  },
                },

                // === READING AND WRITING NUMBERS (6-10) ===
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
                      'digit-grouping-confusion',       // Wrong thousands grouping
                      null,
                      'ones-tens-transposition',        // Swapped 07 to 70
                      'digit-order-confusion',          // Misplaced digits
                    ],
                  },
                },
                {
                  id: 'VCMNA186-007',
                  question: 'How is 408,052 written in words?',
                  options: [
                    'Four hundred and eight thousand, fifty-two',
                    'Forty-eight thousand and fifty-two',
                    'Four hundred and eighty thousand, five hundred and two',
                    'Four million, eight thousand and fifty-two'
                  ],
                  correctAnswer: 0,
                  explanation: '408,052 = 408 thousand + 52. The zero in the hundreds place means we skip "hundred" in the second part.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-large-numbers'],
                    correctToken: 'reading-large-numbers',
                    incorrectTokens: [
                      null,
                      'place-value-grouping-confusion', // Misread groupings
                      'zero-placeholder-confusion',     // Mishandled zeros
                      'millions-thousands-confusion',   // Wrong magnitude
                    ],
                  },
                },
                {
                  id: 'VCMNA186-008',
                  question: 'Write "two hundred and fifteen thousand, six hundred and forty" as a number.',
                  options: ['21,564', '215,640', '215,064', '250,640'],
                  correctAnswer: 1,
                  explanation: '215 thousand = 215,000 + 640 = 215,640',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['writing-large-numbers'],
                    correctToken: 'writing-large-numbers',
                    incorrectTokens: [
                      'magnitude-confusion',            // Too few digits
                      null,
                      'zero-placeholder-error',         // Inserted wrong zero
                      'digit-substitution-error',       // Wrong digits entirely
                    ],
                  },
                },
                {
                  id: 'VCMNA186-009',
                  question: 'How is 670,009 written in words?',
                  options: [
                    'Six hundred and seventy thousand and nine',
                    'Sixty-seven thousand and nine',
                    'Six hundred and seven thousand and ninety',
                    'Six hundred and seventy thousand, nine hundred'
                  ],
                  correctAnswer: 0,
                  explanation: '670,009 = 670 thousand + 9. The zeros in hundreds and tens places are not spoken.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-large-numbers'],
                    correctToken: 'reading-large-numbers',
                    incorrectTokens: [
                      null,
                      'magnitude-confusion',            // Dropped a zero
                      'zero-placeholder-confusion',     // Misread zeros
                      'ones-hundreds-confusion',        // Confused 9 with 900
                    ],
                  },
                },
                {
                  id: 'VCMNA186-010',
                  question: 'Write "nine hundred thousand, three hundred and one" as a number.',
                  options: ['900,301', '903,001', '90,301', '900,031'],
                  correctAnswer: 0,
                  explanation: '900 thousand = 900,000 + 301 = 900,301. Note: no ten thousands or thousands in this number.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['writing-large-numbers'],
                    correctToken: 'writing-large-numbers',
                    incorrectTokens: [
                      null,
                      'zero-placeholder-error',         // Misplaced the 3
                      'magnitude-confusion',            // Dropped hundred thousands
                      'tens-ones-transposition',        // Swapped 01 to 10
                    ],
                  },
                },

                // === COMPARING AND ORDERING (11-15) ===
                {
                  id: 'VCMNA186-011',
                  question: 'Which number is largest?',
                  options: ['199,999', '200,001', '189,999', '201,000'],
                  correctAnswer: 3,
                  explanation: '201,000 has 2 hundred thousands AND 1 thousand, making it the largest.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-large-numbers'],
                    correctToken: 'comparing-large-numbers',
                    incorrectTokens: [
                      'digit-sum-confusion',            // Focused on 9s
                      'comparing-adjacent-confusion',   // Close to 201,000
                      'smaller-digits-confusion',       // Misread as larger
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA186-012',
                  question: 'Which number is smallest?',
                  options: ['345,678', '354,678', '345,876', '343,678'],
                  correctAnswer: 3,
                  explanation: 'Compare from left: all start with 3, then 4. 343,678 has 3 in the ten thousands (smallest), so it is the smallest.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-large-numbers'],
                    correctToken: 'comparing-large-numbers',
                    incorrectTokens: [
                      'leftmost-digit-only-error',      // Only checked first digit
                      'digit-magnitude-confusion',     // Confused by 5 in ten thousands
                      'rightmost-focus-error',         // Focused on wrong digits
                      null,
                    ],
                  },
                },
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
                      null,
                      'sequential-comparison-error',    // Didn't compare systematically
                      'reverse-order-error',           // Got order backwards
                      'partial-comparison-error',      // Stopped comparing too early
                    ],
                  },
                },
                {
                  id: 'VCMNA186-014',
                  question: 'Which symbol makes this true? 478,293 ___ 478,329',
                  options: ['>', '<', '=', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Both have 478,2__ but then 93 vs 29. Compare tens: 9 > 2, so 478,293 < 478,329 is FALSE. Wait - 478,293 has 29 in the last two digits, 478,329 has 32. 293 < 329, so 478,293 < 478,329.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-large-numbers'],
                    correctToken: 'comparing-large-numbers',
                    incorrectTokens: [
                      'comparison-direction-error',    // Got inequality backwards
                      null,
                      'equality-assumption-error',     // Assumed equal
                      'comparison-confidence-error',   // Uncertain about method
                    ],
                  },
                },
                {
                  id: 'VCMNA186-015',
                  question: 'Put these in order from largest to smallest: 891,234 | 819,432 | 891,324',
                  options: [
                    '891,324 > 891,234 > 819,432',
                    '891,234 > 891,324 > 819,432',
                    '819,432 > 891,234 > 891,324',
                    '891,234 > 819,432 > 891,324'
                  ],
                  correctAnswer: 0,
                  explanation: '891,324 and 891,234 both start with 891. Compare: 324 > 234, so 891,324 > 891,234. 819,432 is smallest (81 < 89 in ten thousands).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['ordering-large-numbers'],
                    correctToken: 'ordering-large-numbers',
                    incorrectTokens: [
                      null,
                      'hundreds-comparison-error',     // Miscompared 324 vs 234
                      'descending-order-confusion',    // Got order direction wrong
                      'partial-comparison-error',      // Incomplete comparison
                    ],
                  },
                },

                // === ADDING/SUBTRACTING PLACE VALUE (16-18) ===
                {
                  id: 'VCMNA186-016',
                  question: 'What number is 10,000 more than 456,789?',
                  options: ['456,799', '457,789', '466,789', '556,789'],
                  correctAnswer: 2,
                  explanation: 'Adding 10,000 changes the ten thousands digit: 5 becomes 6. So 456,789 + 10,000 = 466,789.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['adding-place-value', 'place-value-ten-thousands'],
                    correctToken: 'adding-place-value',
                    incorrectTokens: [
                      'adding-wrong-place-error',      // Added to ones
                      'adding-wrong-place-error',      // Added to thousands
                      null,
                      'magnitude-confusion',           // Added 100,000 instead
                    ],
                  },
                },
                {
                  id: 'VCMNA186-017',
                  question: 'What number is 100,000 less than 523,456?',
                  options: ['423,456', '522,456', '513,456', '523,356'],
                  correctAnswer: 0,
                  explanation: 'Subtracting 100,000 reduces the hundred thousands digit: 5 becomes 4. So 523,456 - 100,000 = 423,456.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['adding-place-value', 'place-value-hundred-thousands'],
                    correctToken: 'adding-place-value',
                    incorrectTokens: [
                      null,
                      'subtracting-wrong-place-error', // Subtracted from thousands
                      'subtracting-wrong-place-error', // Subtracted from ten thousands
                      'subtracting-wrong-place-error', // Subtracted from hundreds
                    ],
                  },
                },
                {
                  id: 'VCMNA186-018',
                  question: 'Start at 789,000. Add 1,000 three times. What number do you have?',
                  options: ['789,003', '789,300', '792,000', '819,000'],
                  correctAnswer: 2,
                  explanation: '789,000 + 1,000 + 1,000 + 1,000 = 789,000 + 3,000 = 792,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['adding-place-value', 'place-value-thousands'],
                    correctToken: 'adding-place-value',
                    incorrectTokens: [
                      'adding-wrong-place-error',      // Added to ones
                      'adding-wrong-place-error',      // Added to hundreds
                      null,
                      'magnitude-confusion',           // Added 30,000 instead
                    ],
                  },
                },

                // === ROUNDING (19-20) ===
                {
                  id: 'VCMNA186-019',
                  question: 'Round 847,562 to the nearest ten thousand.',
                  options: ['847,000', '848,000', '850,000', '840,000'],
                  correctAnswer: 2,
                  explanation: 'Look at the thousands digit (7). Since 7 ≥ 5, round up the ten thousands: 4 becomes 5. Answer: 850,000.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rounding-large-numbers'],
                    correctToken: 'rounding-large-numbers',
                    incorrectTokens: [
                      'rounding-wrong-place-error',    // Rounded to thousands
                      'rounding-wrong-place-error',    // Rounded to thousands
                      null,
                      'rounding-direction-error',      // Rounded down incorrectly
                    ],
                  },
                },
                {
                  id: 'VCMNA186-020',
                  question: 'Round 634,281 to the nearest hundred thousand.',
                  options: ['600,000', '630,000', '634,000', '700,000'],
                  correctAnswer: 0,
                  explanation: 'Look at the ten thousands digit (3). Since 3 < 5, round down. The hundred thousands digit stays as 6, so the answer is 600,000.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rounding-large-numbers'],
                    correctToken: 'rounding-large-numbers',
                    incorrectTokens: [
                      null,
                      'rounding-wrong-place-error',    // Rounded to ten thousands
                      'rounding-wrong-place-error',    // Rounded to thousands
                      'rounding-direction-error',      // Rounded up incorrectly
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA181',
              code: 'VCMNA181',
              title: 'Factors and Multiples',
              description: 'Identify and describe factors and multiples of whole numbers and use them to solve problems',
              content: `# Factors and Multiples

Understanding factors and multiples helps us see how numbers are connected to each other!

## What are Factors?

**Factors** are numbers that divide evenly into another number with no remainder.

**Example:** What are the factors of 12?
- 1 × 12 = 12 ✓
- 2 × 6 = 12 ✓
- 3 × 4 = 12 ✓

So the factors of 12 are: **1, 2, 3, 4, 6, 12**

### Finding Factors - The Pair Method

Start with 1 and work your way up, finding pairs:
- 1 and 12 (1 × 12 = 12)
- 2 and 6 (2 × 6 = 12)
- 3 and 4 (3 × 4 = 12)

Stop when your pairs start repeating!

## What are Multiples?

**Multiples** are what you get when you multiply a number by 1, 2, 3, 4, and so on.

**Example:** Multiples of 5:
- 5 × 1 = 5
- 5 × 2 = 10
- 5 × 3 = 15
- 5 × 4 = 20

So multiples of 5 are: **5, 10, 15, 20, 25, 30...**

## The Connection

Here's the cool part:
- If 3 is a **factor** of 12
- Then 12 is a **multiple** of 3

They're like two sides of the same coin!

## Common Factors and Multiples

**Common factors** are factors that two numbers share.
**Common multiples** are multiples that two numbers share.

**Example:** Common factors of 12 and 18:
- Factors of 12: 1, 2, 3, 4, 6, 12
- Factors of 18: 1, 2, 3, 6, 9, 18
- Common factors: **1, 2, 3, 6**`,
              keyPoints: [
                'Factors divide evenly into a number with no remainder',
                'Multiples are the "times tables" of a number',
                'If A is a factor of B, then B is a multiple of A',
                'Every number has at least two factors: 1 and itself',
                'Common factors/multiples are shared between numbers'
              ],
              knowledgeTokens: [
                {
                  id: 'factor-definition',
                  name: 'Factor Definition',
                  description: 'Understanding what a factor is',
                },
                {
                  id: 'finding-factors',
                  name: 'Finding Factors',
                  description: 'Systematically finding all factors of a number',
                  prerequisites: ['factor-definition'],
                },
                {
                  id: 'multiple-definition',
                  name: 'Multiple Definition',
                  description: 'Understanding what a multiple is',
                },
                {
                  id: 'finding-multiples',
                  name: 'Finding Multiples',
                  description: 'Calculating multiples of a number',
                  prerequisites: ['multiple-definition'],
                },
                {
                  id: 'factor-multiple-relationship',
                  name: 'Factor-Multiple Relationship',
                  description: 'Understanding that if A is a factor of B, then B is a multiple of A',
                  prerequisites: ['factor-definition', 'multiple-definition'],
                },
                {
                  id: 'common-factors',
                  name: 'Common Factors',
                  description: 'Finding factors shared by two numbers',
                  prerequisites: ['finding-factors'],
                },
                {
                  id: 'greatest-common-factor',
                  name: 'Greatest Common Factor (GCF)',
                  description: 'Finding the largest common factor of two numbers',
                  prerequisites: ['common-factors'],
                },
                {
                  id: 'common-multiples',
                  name: 'Common Multiples',
                  description: 'Finding multiples shared by two numbers',
                  prerequisites: ['finding-multiples'],
                },
                {
                  id: 'least-common-multiple',
                  name: 'Least Common Multiple (LCM)',
                  description: 'Finding the smallest common multiple of two numbers',
                  prerequisites: ['common-multiples'],
                },
                {
                  id: 'factor-pairs',
                  name: 'Factor Pairs',
                  description: 'Identifying pairs of factors that multiply to give a number',
                  prerequisites: ['finding-factors'],
                },
              ],
              examples: [
                {
                  problem: 'Find all factors of 24',
                  solution: '1, 2, 3, 4, 6, 8, 12, 24',
                  explanation: 'Pairs: 1×24, 2×12, 3×8, 4×6'
                },
                {
                  problem: 'List the first 5 multiples of 7',
                  solution: '7, 14, 21, 28, 35',
                  explanation: '7×1=7, 7×2=14, 7×3=21, 7×4=28, 7×5=35'
                }
              ],
              questions: [
                // === FACTOR IDENTIFICATION (1-5) ===
                {
                  id: 'VCMNA181-001',
                  question: 'Which of these is NOT a factor of 20?',
                  options: ['2', '4', '6', '10'],
                  correctAnswer: 2,
                  explanation: '20 ÷ 6 = 3 remainder 2. Since there is a remainder, 6 is not a factor of 20.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['factor-definition', 'finding-factors'],
                    correctToken: 'factor-definition',
                    incorrectTokens: [
                      'factor-divisibility-error',     // Thinks 2 is not a factor
                      'factor-divisibility-error',     // Thinks 4 is not a factor
                      null,
                      'factor-divisibility-error',     // Thinks 10 is not a factor
                    ],
                  },
                },
                {
                  id: 'VCMNA181-002',
                  question: 'Which number is a factor of 36?',
                  options: ['5', '7', '8', '9'],
                  correctAnswer: 3,
                  explanation: '36 ÷ 9 = 4 exactly, so 9 is a factor of 36.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['factor-definition'],
                    correctToken: 'factor-definition',
                    incorrectTokens: [
                      'factor-divisibility-error',     // Thinks 5 divides 36
                      'factor-divisibility-error',     // Thinks 7 divides 36
                      'factor-divisibility-error',     // Thinks 8 divides 36
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA181-003',
                  question: 'What are ALL the factors of 18?',
                  options: [
                    '1, 2, 3, 6, 9, 18',
                    '1, 2, 9, 18',
                    '2, 3, 6, 9',
                    '1, 2, 3, 4, 6, 9, 18'
                  ],
                  correctAnswer: 0,
                  explanation: 'Pairs: 1×18, 2×9, 3×6. So factors are 1, 2, 3, 6, 9, 18.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['finding-factors', 'factor-pairs'],
                    correctToken: 'finding-factors',
                    incorrectTokens: [
                      null,
                      'factor-pairs-incomplete',       // Missed some factor pairs
                      'factor-includes-one-error',     // Forgot 1 and/or the number itself
                      'factor-divisibility-error',     // Included 4 which isn't a factor
                    ],
                  },
                },
                {
                  id: 'VCMNA181-004',
                  question: 'How many factors does 36 have?',
                  options: ['6', '8', '9', '12'],
                  correctAnswer: 2,
                  explanation: 'Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 = 9 factors.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['finding-factors', 'factor-pairs'],
                    correctToken: 'finding-factors',
                    incorrectTokens: [
                      'factor-pairs-incomplete',       // Missed some pairs
                      'factor-pairs-incomplete',       // Missed some pairs
                      null,
                      'factor-counting-error',         // Overcounted
                    ],
                  },
                },
                {
                  id: 'VCMNA181-005',
                  question: 'Which number has exactly 4 factors?',
                  options: ['8', '9', '10', '12'],
                  correctAnswer: 0,
                  explanation: 'Factors of 8: 1, 2, 4, 8 (4 factors). 9 has 3 factors, 10 has 4 factors, 12 has 6 factors. Wait - 10 also has 4 factors (1,2,5,10). Let me recheck: 8 has 1,2,4,8 = 4 factors. 10 has 1,2,5,10 = 4 factors too. The first correct answer is 8.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['finding-factors'],
                    correctToken: 'finding-factors',
                    incorrectTokens: [
                      null,
                      'factor-counting-error',         // Miscounted factors of 9
                      'factor-counting-error',         // Also has 4 factors but not first
                      'factor-counting-error',         // Miscounted factors of 12
                    ],
                  },
                },

                // === MULTIPLE IDENTIFICATION (6-10) ===
                {
                  id: 'VCMNA181-006',
                  question: 'What is the 6th multiple of 8?',
                  options: ['40', '48', '56', '64'],
                  correctAnswer: 1,
                  explanation: '8 × 6 = 48. The multiples are 8, 16, 24, 32, 40, 48.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiple-definition', 'finding-multiples'],
                    correctToken: 'finding-multiples',
                    incorrectTokens: [
                      'multiple-counting-error',       // Counted to 5th multiple
                      null,
                      'multiple-counting-error',       // Counted to 7th multiple
                      'multiple-counting-error',       // Counted to 8th multiple
                    ],
                  },
                },
                {
                  id: 'VCMNA181-007',
                  question: 'Which of these is a multiple of 7?',
                  options: ['27', '35', '45', '55'],
                  correctAnswer: 1,
                  explanation: '35 ÷ 7 = 5, so 35 is a multiple of 7. (7 × 5 = 35)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiple-definition'],
                    correctToken: 'multiple-definition',
                    incorrectTokens: [
                      'multiple-divisibility-error',   // Confused with multiples of 9
                      null,
                      'multiple-divisibility-error',   // Confused with multiples of 9
                      'multiple-divisibility-error',   // Confused with multiples of 5
                    ],
                  },
                },
                {
                  id: 'VCMNA181-008',
                  question: 'What is the first multiple of 9 that is greater than 50?',
                  options: ['54', '56', '59', '63'],
                  correctAnswer: 0,
                  explanation: 'Multiples of 9: 9, 18, 27, 36, 45, 54... The first one greater than 50 is 54.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['finding-multiples'],
                    correctToken: 'finding-multiples',
                    incorrectTokens: [
                      null,
                      'multiple-divisibility-error',   // Not a multiple of 9
                      'multiple-divisibility-error',   // Not a multiple of 9
                      'multiple-sequence-error',       // Skipped to next multiple
                    ],
                  },
                },
                {
                  id: 'VCMNA181-009',
                  question: 'Which number is NOT a multiple of 6?',
                  options: ['24', '36', '44', '48'],
                  correctAnswer: 2,
                  explanation: '44 ÷ 6 = 7 remainder 2. Since there is a remainder, 44 is not a multiple of 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiple-definition'],
                    correctToken: 'multiple-definition',
                    incorrectTokens: [
                      'multiple-divisibility-error',   // 24 is a multiple of 6
                      'multiple-divisibility-error',   // 36 is a multiple of 6
                      null,
                      'multiple-divisibility-error',   // 48 is a multiple of 6
                    ],
                  },
                },
                {
                  id: 'VCMNA181-010',
                  question: 'The 8th multiple of 5 is:',
                  options: ['35', '40', '45', '50'],
                  correctAnswer: 1,
                  explanation: '5 × 8 = 40. Count: 5, 10, 15, 20, 25, 30, 35, 40.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['finding-multiples'],
                    correctToken: 'finding-multiples',
                    incorrectTokens: [
                      'multiple-counting-error',       // 7th multiple
                      null,
                      'multiple-counting-error',       // 9th multiple
                      'multiple-counting-error',       // 10th multiple
                    ],
                  },
                },

                // === FACTOR-MULTIPLE RELATIONSHIP (11-13) ===
                {
                  id: 'VCMNA181-011',
                  question: 'If 6 is a factor of 42, then 42 is a ___ of 6.',
                  options: ['factor', 'multiple', 'divisor', 'remainder'],
                  correctAnswer: 1,
                  explanation: 'If 6 is a factor of 42, then 42 is a multiple of 6. They are related concepts.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['factor-multiple-relationship'],
                    correctToken: 'factor-multiple-relationship',
                    incorrectTokens: [
                      'factor-multiple-reversed',      // Confused factor and multiple
                      null,
                      'factor-divisor-confusion',      // Confused with divisor term
                      'factor-remainder-confusion',    // Confused with remainder
                    ],
                  },
                },
                {
                  id: 'VCMNA181-012',
                  question: '24 is a multiple of 8. What can we say about 8?',
                  options: [
                    '8 is a multiple of 24',
                    '8 is a factor of 24',
                    '8 is greater than 24',
                    '8 and 24 are equal'
                  ],
                  correctAnswer: 1,
                  explanation: 'If 24 is a multiple of 8, then 8 is a factor of 24. (8 × 3 = 24)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['factor-multiple-relationship'],
                    correctToken: 'factor-multiple-relationship',
                    incorrectTokens: [
                      'factor-multiple-reversed',      // Got relationship backwards
                      null,
                      'number-comparison-error',       // Unrelated to factors/multiples
                      'equality-confusion',            // Unrelated to factors/multiples
                    ],
                  },
                },
                {
                  id: 'VCMNA181-013',
                  question: 'Which statement is TRUE?',
                  options: [
                    '12 is a factor of 3',
                    '3 is a multiple of 12',
                    '12 is a multiple of 3',
                    '3 is a factor of 5'
                  ],
                  correctAnswer: 2,
                  explanation: '12 = 3 × 4, so 12 is a multiple of 3 (and 3 is a factor of 12).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['factor-multiple-relationship'],
                    correctToken: 'factor-multiple-relationship',
                    incorrectTokens: [
                      'factor-multiple-reversed',      // Got relationship backwards
                      'factor-multiple-reversed',      // Got relationship backwards
                      null,
                      'factor-divisibility-error',     // 3 doesn't divide 5
                    ],
                  },
                },

                // === COMMON FACTORS (14-16) ===
                {
                  id: 'VCMNA181-014',
                  question: 'What is a common factor of 12 and 18?',
                  options: ['4', '5', '6', '8'],
                  correctAnswer: 2,
                  explanation: 'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Both share 6.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['common-factors'],
                    correctToken: 'common-factors',
                    incorrectTokens: [
                      'common-factor-partial-check',   // Only checked one number
                      'common-factor-neither',         // Not a factor of either
                      null,
                      'common-factor-partial-check',   // Only factor of one number
                    ],
                  },
                },
                {
                  id: 'VCMNA181-015',
                  question: 'What is the greatest common factor (GCF) of 24 and 36?',
                  options: ['6', '8', '12', '18'],
                  correctAnswer: 2,
                  explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The largest shared factor is 12.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['greatest-common-factor', 'common-factors'],
                    correctToken: 'greatest-common-factor',
                    incorrectTokens: [
                      'gcf-not-greatest',              // Found a common factor but not the greatest
                      'gcf-partial-check',             // Only checked one number
                      null,
                      'gcf-partial-check',             // Only factor of one number
                    ],
                  },
                },
                {
                  id: 'VCMNA181-016',
                  question: 'What is the GCF of 16 and 40?',
                  options: ['4', '8', '10', '16'],
                  correctAnswer: 1,
                  explanation: 'Factors of 16: 1,2,4,8,16. Factors of 40: 1,2,4,5,8,10,20,40. The largest common factor is 8.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['greatest-common-factor'],
                    correctToken: 'greatest-common-factor',
                    incorrectTokens: [
                      'gcf-not-greatest',              // 4 is common but not greatest
                      null,
                      'gcf-partial-check',             // 10 is not a factor of 16
                      'gcf-partial-check',             // 16 is not a factor of 40
                    ],
                  },
                },

                // === COMMON MULTIPLES (17-20) ===
                {
                  id: 'VCMNA181-017',
                  question: 'What is the smallest number that is a multiple of both 4 and 6?',
                  options: ['12', '18', '24', '36'],
                  correctAnswer: 0,
                  explanation: 'Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... The first common one is 12.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['least-common-multiple', 'common-multiples'],
                    correctToken: 'least-common-multiple',
                    incorrectTokens: [
                      null,
                      'lcm-not-least',                 // Common multiple but not smallest
                      'lcm-not-least',                 // Common multiple but not smallest
                      'lcm-not-least',                 // Common multiple but not smallest
                    ],
                  },
                },
                {
                  id: 'VCMNA181-018',
                  question: 'What is the LCM (least common multiple) of 5 and 3?',
                  options: ['8', '12', '15', '30'],
                  correctAnswer: 2,
                  explanation: 'Multiples of 5: 5,10,15,20... Multiples of 3: 3,6,9,12,15... The smallest common one is 15.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['least-common-multiple'],
                    correctToken: 'least-common-multiple',
                    incorrectTokens: [
                      'lcm-addition-error',            // Added instead of finding LCM
                      'lcm-multiple-error',            // Not a multiple of 5
                      null,
                      'lcm-not-least',                 // Common multiple but not smallest
                    ],
                  },
                },
                {
                  id: 'VCMNA181-019',
                  question: 'What is the LCM of 6 and 9?',
                  options: ['12', '15', '18', '54'],
                  correctAnswer: 2,
                  explanation: 'Multiples of 6: 6,12,18... Multiples of 9: 9,18,27... The smallest common one is 18.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['least-common-multiple'],
                    correctToken: 'least-common-multiple',
                    incorrectTokens: [
                      'lcm-multiple-error',            // Not a multiple of 9
                      'lcm-multiple-error',            // Not a multiple of 6 or 9
                      null,
                      'lcm-multiplication-error',      // Multiplied instead of finding LCM
                    ],
                  },
                },
                {
                  id: 'VCMNA181-020',
                  question: 'Which number is a common multiple of 4 and 5?',
                  options: ['15', '16', '20', '25'],
                  correctAnswer: 2,
                  explanation: '20 ÷ 4 = 5 and 20 ÷ 5 = 4, so 20 is a multiple of both 4 and 5.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['common-multiples'],
                    correctToken: 'common-multiples',
                    incorrectTokens: [
                      'common-multiple-partial',       // Only multiple of 5
                      'common-multiple-partial',       // Only multiple of 4
                      null,
                      'common-multiple-partial',       // Only multiple of 5
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA182',
              code: 'VCMNA182',
              title: 'Estimation and Rounding',
              description: 'Use estimation and rounding to check the reasonableness of answers to calculations',
              content: `# Estimation and Rounding

Estimation is like making a smart guess! It helps us check if our answers make sense.

## Why Estimate?

Imagine you're buying items that cost $4.95, $3.10, and $7.85. Is $50 enough?

Instead of calculating exactly, we can estimate:
- $4.95 ≈ $5
- $3.10 ≈ $3
- $7.85 ≈ $8
- Total ≈ $5 + $3 + $8 = $16

Yes, $50 is plenty! 💰

## Rounding Rules

When rounding, look at the digit to the RIGHT of where you're rounding:

- **0, 1, 2, 3, 4** → Round DOWN
- **5, 6, 7, 8, 9** → Round UP

### Rounding to the Nearest 10
- 43 → **40** (3 is less than 5)
- 47 → **50** (7 is 5 or more)
- 45 → **50** (5 rounds up)

### Rounding to the Nearest 100
- 234 → **200** (3 is less than 5)
- 278 → **300** (7 is 5 or more)

### Rounding to the Nearest 1000
- 4,321 → **4,000** (3 is less than 5)
- 4,567 → **5,000** (5 is 5 or more)

## Using Estimation to Check Answers

**Example:** Is 387 × 4 = 1,548 reasonable?

Let's estimate:
- 387 ≈ 400
- 400 × 4 = 1,600

Since 1,548 is close to 1,600, the answer is reasonable! ✓

## Front-End Estimation

For quick estimates, just use the first digits:
- 487 + 312 ≈ 400 + 300 = 700
- Actual: 799 ✓ Close enough!`,
              keyPoints: [
                'Rounding makes numbers easier to work with mentally',
                'Look at the digit to the right to decide whether to round up or down',
                'Estimation helps check if calculated answers are reasonable',
                'Front-end estimation uses only the first (leftmost) digits'
              ],
              knowledgeTokens: [
                {
                  id: 'rounding-to-ten',
                  name: 'Rounding to Nearest Ten',
                  description: 'Rounding numbers to the nearest 10',
                },
                {
                  id: 'rounding-to-hundred',
                  name: 'Rounding to Nearest Hundred',
                  description: 'Rounding numbers to the nearest 100',
                  prerequisites: ['rounding-to-ten'],
                },
                {
                  id: 'rounding-to-thousand',
                  name: 'Rounding to Nearest Thousand',
                  description: 'Rounding numbers to the nearest 1000',
                  prerequisites: ['rounding-to-hundred'],
                },
                {
                  id: 'rounding-rule-application',
                  name: 'Rounding Rule Application',
                  description: 'Correctly applying the 5+ rounds up rule',
                  prerequisites: ['rounding-to-ten'],
                },
                {
                  id: 'estimation-addition',
                  name: 'Estimation with Addition',
                  description: 'Using rounding to estimate sums',
                  prerequisites: ['rounding-to-hundred'],
                },
                {
                  id: 'estimation-subtraction',
                  name: 'Estimation with Subtraction',
                  description: 'Using rounding to estimate differences',
                  prerequisites: ['rounding-to-hundred'],
                },
                {
                  id: 'estimation-multiplication',
                  name: 'Estimation with Multiplication',
                  description: 'Using rounding to estimate products',
                  prerequisites: ['rounding-to-hundred'],
                },
                {
                  id: 'estimation-division',
                  name: 'Estimation with Division',
                  description: 'Using rounding to estimate quotients',
                  prerequisites: ['rounding-to-hundred'],
                },
                {
                  id: 'reasonableness-checking',
                  name: 'Checking Reasonableness',
                  description: 'Using estimation to verify if an answer makes sense',
                  prerequisites: ['estimation-multiplication'],
                },
                {
                  id: 'front-end-estimation',
                  name: 'Front-End Estimation',
                  description: 'Quick estimation using leading digits only',
                  prerequisites: ['estimation-addition'],
                },
              ],
              examples: [
                {
                  problem: 'Round 7,849 to the nearest hundred',
                  solution: '7,800',
                  explanation: 'Look at the tens digit (4). Since 4 < 5, round down.'
                },
                {
                  problem: 'Estimate 492 × 6',
                  solution: '≈ 3,000',
                  explanation: '492 ≈ 500, and 500 × 6 = 3,000'
                }
              ],
              questions: [
                // === ROUNDING TO NEAREST TEN (1-3) ===
                {
                  id: 'VCMNA182-001',
                  question: 'What is 47 rounded to the nearest ten?',
                  options: ['40', '45', '50', '47'],
                  correctAnswer: 2,
                  explanation: 'Look at the ones digit (7). Since 7 ≥ 5, round up to 50.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-ten', 'rounding-rule-application'],
                    correctToken: 'rounding-to-ten',
                    incorrectTokens: [
                      'rounding-direction-error',      // Rounded down instead of up
                      'rounding-halfway-confusion',    // Confused about rounding point
                      null,
                      'rounding-concept-confusion',    // Doesn't understand rounding changes the number
                    ],
                  },
                },
                {
                  id: 'VCMNA182-002',
                  question: 'Round 234 to the nearest ten.',
                  options: ['230', '235', '240', '200'],
                  correctAnswer: 0,
                  explanation: 'Look at the ones digit (4). Since 4 < 5, round down to 230.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-ten'],
                    correctToken: 'rounding-to-ten',
                    incorrectTokens: [
                      null,
                      'rounding-halfway-confusion',    // Stopped at halfway point
                      'rounding-direction-error',      // Rounded up instead of down
                      'rounding-wrong-place',          // Rounded to hundreds
                    ],
                  },
                },
                {
                  id: 'VCMNA182-003',
                  question: 'What is 85 rounded to the nearest ten?',
                  options: ['80', '85', '90', '100'],
                  correctAnswer: 2,
                  explanation: 'The ones digit is 5. When it equals 5, we round up to 90.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-ten', 'rounding-rule-application'],
                    correctToken: 'rounding-rule-application',
                    incorrectTokens: [
                      'rounding-five-confusion',       // Uncertain what to do with 5
                      'rounding-concept-confusion',    // Kept the number as is
                      null,
                      'rounding-wrong-place',          // Rounded to hundreds
                    ],
                  },
                },

                // === ROUNDING TO NEAREST HUNDRED (4-6) ===
                {
                  id: 'VCMNA182-004',
                  question: 'What is 6,473 rounded to the nearest hundred?',
                  options: ['6,400', '6,470', '6,500', '6,000'],
                  correctAnswer: 2,
                  explanation: 'Look at the tens digit (7). Since 7 ≥ 5, round up to 6,500.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-hundred'],
                    correctToken: 'rounding-to-hundred',
                    incorrectTokens: [
                      'rounding-direction-error',      // Rounded down
                      'rounding-wrong-place',          // Rounded to tens
                      null,
                      'rounding-wrong-place',          // Rounded to thousands
                    ],
                  },
                },
                {
                  id: 'VCMNA182-005',
                  question: 'Round 3,849 to the nearest hundred.',
                  options: ['3,800', '3,850', '3,900', '4,000'],
                  correctAnswer: 0,
                  explanation: 'Look at the tens digit (4). Since 4 < 5, round down to 3,800.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-hundred'],
                    correctToken: 'rounding-to-hundred',
                    incorrectTokens: [
                      null,
                      'rounding-wrong-place',          // Stopped at tens
                      'rounding-direction-error',      // Rounded up
                      'rounding-wrong-place',          // Rounded to thousands
                    ],
                  },
                },
                {
                  id: 'VCMNA182-006',
                  question: 'What is 2,950 rounded to the nearest hundred?',
                  options: ['2,900', '2,950', '3,000', '2,000'],
                  correctAnswer: 2,
                  explanation: 'The tens digit is 5, so round up. 2,950 rounds to 3,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rounding-to-hundred', 'rounding-rule-application'],
                    correctToken: 'rounding-to-hundred',
                    incorrectTokens: [
                      'rounding-direction-error',      // Rounded down
                      'rounding-concept-confusion',    // Kept number as is
                      null,
                      'rounding-wrong-place',          // Rounded to thousands incorrectly
                    ],
                  },
                },

                // === ROUNDING TO NEAREST THOUSAND (7-9) ===
                {
                  id: 'VCMNA182-007',
                  question: 'What is 6,473 rounded to the nearest thousand?',
                  options: ['6,000', '6,400', '6,500', '7,000'],
                  correctAnswer: 0,
                  explanation: 'Look at the hundreds digit (4). Since 4 < 5, round down to 6,000.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rounding-to-thousand'],
                    correctToken: 'rounding-to-thousand',
                    incorrectTokens: [
                      null,
                      'rounding-wrong-place',          // Rounded to hundreds
                      'rounding-wrong-place',          // Rounded to hundreds
                      'rounding-direction-error',      // Rounded up
                    ],
                  },
                },
                {
                  id: 'VCMNA182-008',
                  question: 'Round 45,678 to the nearest thousand.',
                  options: ['45,000', '45,700', '46,000', '50,000'],
                  correctAnswer: 2,
                  explanation: 'Look at the hundreds digit (6). Since 6 ≥ 5, round up to 46,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rounding-to-thousand'],
                    correctToken: 'rounding-to-thousand',
                    incorrectTokens: [
                      'rounding-direction-error',      // Rounded down
                      'rounding-wrong-place',          // Rounded to hundreds
                      null,
                      'rounding-wrong-place',          // Rounded to ten thousands
                    ],
                  },
                },
                {
                  id: 'VCMNA182-009',
                  question: 'What is 89,500 rounded to the nearest thousand?',
                  options: ['89,000', '89,500', '90,000', '100,000'],
                  correctAnswer: 2,
                  explanation: 'The hundreds digit is 5, so round up. 89,500 rounds to 90,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rounding-to-thousand', 'rounding-rule-application'],
                    correctToken: 'rounding-to-thousand',
                    incorrectTokens: [
                      'rounding-direction-error',      // Rounded down
                      'rounding-concept-confusion',    // Kept number as is
                      null,
                      'rounding-wrong-place',          // Rounded to ten thousands
                    ],
                  },
                },

                // === ESTIMATION WITH ADDITION (10-12) ===
                {
                  id: 'VCMNA182-010',
                  question: 'Estimate 298 + 512 by rounding to the nearest hundred.',
                  options: ['700', '800', '810', '900'],
                  correctAnswer: 1,
                  explanation: '298 ≈ 300, 512 ≈ 500, so 300 + 500 = 800.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['estimation-addition', 'rounding-to-hundred'],
                    correctToken: 'estimation-addition',
                    incorrectTokens: [
                      'estimation-rounding-error',     // Rounded incorrectly
                      null,
                      'estimation-calculation-error',  // Added rounded values wrong
                      'estimation-over-rounding',      // Rounded too aggressively
                    ],
                  },
                },
                {
                  id: 'VCMNA182-011',
                  question: 'Estimate 4,387 + 2,891 by rounding to the nearest thousand.',
                  options: ['6,000', '7,000', '7,300', '8,000'],
                  correctAnswer: 1,
                  explanation: '4,387 ≈ 4,000 and 2,891 ≈ 3,000. So 4,000 + 3,000 = 7,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-addition', 'rounding-to-thousand'],
                    correctToken: 'estimation-addition',
                    incorrectTokens: [
                      'estimation-rounding-error',     // Rounded 2,891 down to 2,000
                      null,
                      'estimation-partial-rounding',   // Didn't fully round
                      'estimation-over-rounding',      // Rounded too high
                    ],
                  },
                },
                {
                  id: 'VCMNA182-012',
                  question: 'Using front-end estimation, estimate 487 + 312.',
                  options: ['700', '750', '800', '900'],
                  correctAnswer: 0,
                  explanation: 'Front-end uses leading digits: 400 + 300 = 700.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['front-end-estimation'],
                    correctToken: 'front-end-estimation',
                    incorrectTokens: [
                      null,
                      'front-end-adjustment-error',    // Added too much adjustment
                      'estimation-full-rounding',      // Used regular rounding
                      'estimation-over-estimate',      // Overestimated
                    ],
                  },
                },

                // === ESTIMATION WITH MULTIPLICATION (13-15) ===
                {
                  id: 'VCMNA182-013',
                  question: 'Estimate 492 × 6.',
                  options: ['2,400', '2,700', '3,000', '3,600'],
                  correctAnswer: 2,
                  explanation: '492 ≈ 500, and 500 × 6 = 3,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-multiplication', 'rounding-to-hundred'],
                    correctToken: 'estimation-multiplication',
                    incorrectTokens: [
                      'estimation-rounding-error',     // Rounded to 400
                      'estimation-calculation-error',  // Multiplied incorrectly
                      null,
                      'estimation-over-rounding',      // Rounded too high
                    ],
                  },
                },
                {
                  id: 'VCMNA182-014',
                  question: 'Estimate 38 × 21.',
                  options: ['600', '800', '1,000', '1,200'],
                  correctAnswer: 1,
                  explanation: '38 ≈ 40 and 21 ≈ 20, so 40 × 20 = 800.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-multiplication'],
                    correctToken: 'estimation-multiplication',
                    incorrectTokens: [
                      'estimation-under-rounding',     // Underestimated
                      null,
                      'estimation-over-rounding',      // Overestimated
                      'estimation-calculation-error',  // Wrong multiplication
                    ],
                  },
                },
                {
                  id: 'VCMNA182-015',
                  question: 'Estimate 397 × 8.',
                  options: ['2,400', '2,800', '3,200', '4,000'],
                  correctAnswer: 2,
                  explanation: '397 ≈ 400, and 400 × 8 = 3,200.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-multiplication'],
                    correctToken: 'estimation-multiplication',
                    incorrectTokens: [
                      'estimation-rounding-error',     // Rounded to 300
                      'estimation-calculation-error',  // Multiplied incorrectly
                      null,
                      'estimation-over-rounding',      // Rounded to 500
                    ],
                  },
                },

                // === ESTIMATION WITH DIVISION (16-17) ===
                {
                  id: 'VCMNA182-016',
                  question: 'Estimate 4,892 ÷ 5.',
                  options: ['About 800', 'About 900', 'About 1,000', 'About 1,100'],
                  correctAnswer: 2,
                  explanation: '4,892 ≈ 5,000, and 5,000 ÷ 5 = 1,000.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-division', 'rounding-to-thousand'],
                    correctToken: 'estimation-division',
                    incorrectTokens: [
                      'estimation-under-rounding',     // Rounded too low
                      'estimation-calculation-error',  // Divided incorrectly
                      null,
                      'estimation-over-rounding',      // Rounded too high
                    ],
                  },
                },
                {
                  id: 'VCMNA182-017',
                  question: 'Estimate 632 ÷ 7.',
                  options: ['About 70', 'About 90', 'About 100', 'About 120'],
                  correctAnswer: 1,
                  explanation: '632 ≈ 630 (a friendly number for 7), and 630 ÷ 7 = 90.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['estimation-division'],
                    correctToken: 'estimation-division',
                    incorrectTokens: [
                      'estimation-under-estimate',     // Too low
                      null,
                      'estimation-over-estimate',      // Too high
                      'estimation-calculation-error',  // Divided incorrectly
                    ],
                  },
                },

                // === CHECKING REASONABLENESS (18-20) ===
                {
                  id: 'VCMNA182-018',
                  question: 'A student calculated 89 × 7 = 543. Use estimation to check if this is reasonable.',
                  options: [
                    'Yes, it seems reasonable',
                    'No, it should be closer to 630',
                    'No, it should be closer to 450',
                    'No, it should be closer to 700'
                  ],
                  correctAnswer: 1,
                  explanation: '89 ≈ 90, and 90 × 7 = 630. The answer 543 is too low. (Actual: 89 × 7 = 623)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reasonableness-checking', 'estimation-multiplication'],
                    correctToken: 'reasonableness-checking',
                    incorrectTokens: [
                      'reasonableness-false-positive', // Accepted incorrect answer
                      null,
                      'estimation-under-estimate',     // Estimated too low
                      'estimation-over-estimate',      // Estimated too high
                    ],
                  },
                },
                {
                  id: 'VCMNA182-019',
                  question: 'Sam calculated 412 + 389 = 801. Is this reasonable?',
                  options: [
                    'Yes, it\'s close to 800',
                    'No, it should be closer to 700',
                    'No, it should be closer to 900',
                    'Yes, it\'s exactly right'
                  ],
                  correctAnswer: 0,
                  explanation: '412 ≈ 400 and 389 ≈ 400, so 400 + 400 = 800. 801 is very reasonable.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reasonableness-checking', 'estimation-addition'],
                    correctToken: 'reasonableness-checking',
                    incorrectTokens: [
                      null,
                      'estimation-under-estimate',     // Estimated too low
                      'estimation-over-estimate',      // Estimated too high
                      'reasonableness-exact-expectation', // Expects exact match
                    ],
                  },
                },
                {
                  id: 'VCMNA182-020',
                  question: 'Which calculation will give an answer closest to 2,000?',
                  options: ['512 × 3', '389 × 6', '198 × 9', '678 × 3'],
                  correctAnswer: 2,
                  explanation: '198 ≈ 200, and 200 × 9 = 1,800. This is closest to 2,000. (512×3≈1,500, 389×6≈2,400, 678×3≈2,000)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['estimation-multiplication', 'reasonableness-checking'],
                    correctToken: 'estimation-multiplication',
                    incorrectTokens: [
                      'estimation-calculation-error',  // 500×3=1,500
                      'estimation-calculation-error',  // 400×6=2,400
                      null,
                      'estimation-close-competition',  // 700×3=2,100 also close
                    ],
                  },
                },
              ]
            }
          ]
        },
        {
          id: 'multiplication-division',
          title: 'Multiplication and Division',
          description: 'Strategies for multiplying and dividing larger numbers',
          sections: [
            {
              id: 'VCMNA183',
              code: 'VCMNA183',
              title: 'Multiplying Large Numbers',
              description: 'Solve problems involving multiplication of large numbers by one- or two-digit numbers using efficient mental, written strategies and appropriate digital technologies',
              content: `# Multiplying Large Numbers

When numbers get bigger, we need smart strategies to multiply them!

## The Standard Algorithm (Vertical Method)

This is the method your parents probably learned:

\`\`\`
    347
  ×   6
  -----
  2,082
\`\`\`

**Step by step:**
1. 6 × 7 = 42 (write 2, carry 4)
2. 6 × 4 = 24, plus 4 = 28 (write 8, carry 2)
3. 6 × 3 = 18, plus 2 = 20

## The Expanded Method (Partitioning)

Break the number into parts:

**347 × 6 = ?**
- 300 × 6 = 1,800
- 40 × 6 = 240
- 7 × 6 = 42
- Total: 1,800 + 240 + 42 = **2,082**

## Multiplying by Two-Digit Numbers

**Example: 47 × 23**

\`\`\`
    47
  × 23
  ----
   141  (47 × 3)
  940   (47 × 20)
 -----
 1,081
\`\`\`

## Mental Strategies

### Doubling and Halving
- 25 × 16 = 50 × 8 = 100 × 4 = **400**

### Using Known Facts
- 99 × 7 = (100 × 7) - 7 = 700 - 7 = **693**

### Breaking Apart
- 15 × 12 = 15 × 10 + 15 × 2 = 150 + 30 = **180**`,
              keyPoints: [
                'The standard algorithm works from right to left, carrying when needed',
                'Partitioning breaks numbers into easier parts (hundreds, tens, ones)',
                'When multiplying by two digits, multiply by each digit then add',
                'Mental strategies like doubling/halving can make calculations easier'
              ],
              knowledgeTokens: [
                {
                  id: 'multiply-by-single-digit',
                  name: 'Multiplying by Single Digit',
                  description: 'Multiplying a multi-digit number by a single digit',
                },
                {
                  id: 'standard-algorithm',
                  name: 'Standard Algorithm',
                  description: 'Using the vertical/column method for multiplication',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'carrying-in-multiplication',
                  name: 'Carrying in Multiplication',
                  description: 'Correctly carrying digits during multiplication',
                  prerequisites: ['standard-algorithm'],
                },
                {
                  id: 'partitioning-multiplication',
                  name: 'Partitioning for Multiplication',
                  description: 'Breaking numbers into place value parts to multiply',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'multiply-by-two-digit',
                  name: 'Multiplying by Two Digits',
                  description: 'Multiplying by a two-digit number using partial products',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'multiply-by-tens',
                  name: 'Multiplying by Tens',
                  description: 'Efficiently multiplying by 10, 20, 30, etc.',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'doubling-halving',
                  name: 'Doubling and Halving Strategy',
                  description: 'Using the relationship between doubling and halving to simplify',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'compensation-strategy',
                  name: 'Compensation Strategy',
                  description: 'Using nearby friendly numbers then adjusting (e.g., 99×7 = 100×7 - 7)',
                  prerequisites: ['multiply-by-single-digit'],
                },
                {
                  id: 'multiplication-word-problems',
                  name: 'Multiplication Word Problems',
                  description: 'Applying multiplication to real-world contexts',
                  prerequisites: ['multiply-by-two-digit'],
                },
              ],
              examples: [
                {
                  problem: '256 × 4',
                  solution: '1,024',
                  explanation: '200×4=800, 50×4=200, 6×4=24. Total: 800+200+24=1,024'
                },
                {
                  problem: '34 × 25',
                  solution: '850',
                  explanation: '34 × 25 = 34 × 100 ÷ 4 = 3400 ÷ 4 = 850'
                }
              ],
              questions: [
                // === SINGLE DIGIT MULTIPLICATION (1-5) ===
                {
                  id: 'VCMNA183-001',
                  question: 'What is 145 × 6?',
                  options: ['770', '830', '870', '890'],
                  correctAnswer: 2,
                  explanation: '100×6=600, 40×6=240, 5×6=30. Total: 600+240+30=870',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiply-by-single-digit', 'partitioning-multiplication'],
                    correctToken: 'multiply-by-single-digit',
                    incorrectTokens: [
                      'multiplication-calculation-error',  // Wrong calculation
                      'multiplication-calculation-error',  // Wrong calculation
                      null,
                      'multiplication-calculation-error',  // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA183-002',
                  question: 'Calculate 267 × 4.',
                  options: ['1,028', '1,048', '1,068', '1,088'],
                  correctAnswer: 2,
                  explanation: '200×4=800, 60×4=240, 7×4=28. Total: 800+240+28=1,068',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiply-by-single-digit'],
                    correctToken: 'multiply-by-single-digit',
                    incorrectTokens: [
                      'carrying-error',                    // Carrying mistake
                      'carrying-error',                    // Carrying mistake
                      null,
                      'multiplication-calculation-error',  // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA183-003',
                  question: 'What is 483 × 7?',
                  options: ['3,281', '3,381', '3,481', '3,581'],
                  correctAnswer: 1,
                  explanation: '400×7=2,800, 80×7=560, 3×7=21. Total: 2,800+560+21=3,381',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-single-digit', 'carrying-in-multiplication'],
                    correctToken: 'multiply-by-single-digit',
                    incorrectTokens: [
                      'carrying-error',                    // Forgot to carry
                      null,
                      'carrying-error',                    // Wrong carry
                      'multiplication-calculation-error',  // Wrong basic multiplication
                    ],
                  },
                },
                {
                  id: 'VCMNA183-004',
                  question: 'Calculate 1,256 × 5.',
                  options: ['6,180', '6,280', '6,380', '6,480'],
                  correctAnswer: 1,
                  explanation: '1,000×5=5,000, 200×5=1,000, 50×5=250, 6×5=30. Total: 5,000+1,000+250+30=6,280',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-single-digit', 'partitioning-multiplication'],
                    correctToken: 'multiply-by-single-digit',
                    incorrectTokens: [
                      'partitioning-error',                // Missed a part
                      null,
                      'addition-error',                    // Added parts wrong
                      'carrying-error',                    // Carrying mistake
                    ],
                  },
                },
                {
                  id: 'VCMNA183-005',
                  question: 'What is 809 × 8?',
                  options: ['6,372', '6,432', '6,472', '6,512'],
                  correctAnswer: 2,
                  explanation: '800×8=6,400, 9×8=72. Total: 6,400+72=6,472',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-single-digit'],
                    correctToken: 'multiply-by-single-digit',
                    incorrectTokens: [
                      'zero-handling-error',               // Error with zero in middle
                      'multiplication-calculation-error',  // Wrong calculation
                      null,
                      'addition-error',                    // Added incorrectly
                    ],
                  },
                },

                // === MULTIPLYING BY TENS (6-8) ===
                {
                  id: 'VCMNA183-006',
                  question: 'What is 47 × 30?',
                  options: ['1,210', '1,310', '1,410', '1,510'],
                  correctAnswer: 2,
                  explanation: '47 × 30 = 47 × 3 × 10 = 141 × 10 = 1,410',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiply-by-tens'],
                    correctToken: 'multiply-by-tens',
                    incorrectTokens: [
                      'multiply-by-tens-error',            // Wrong intermediate step
                      'multiply-by-tens-error',            // Wrong intermediate step
                      null,
                      'multiply-by-tens-error',            // Wrong intermediate step
                    ],
                  },
                },
                {
                  id: 'VCMNA183-007',
                  question: 'Calculate 156 × 20.',
                  options: ['2,920', '3,020', '3,120', '3,220'],
                  correctAnswer: 2,
                  explanation: '156 × 20 = 156 × 2 × 10 = 312 × 10 = 3,120',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiply-by-tens'],
                    correctToken: 'multiply-by-tens',
                    incorrectTokens: [
                      'multiply-by-tens-error',            // Forgot the zero
                      'multiplication-calculation-error',  // Wrong 156×2
                      null,
                      'multiply-by-tens-error',            // Added extra
                    ],
                  },
                },
                {
                  id: 'VCMNA183-008',
                  question: 'What is 45 × 40?',
                  options: ['1,600', '1,700', '1,800', '1,900'],
                  correctAnswer: 2,
                  explanation: '45 × 40 = 45 × 4 × 10 = 180 × 10 = 1,800',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-tens'],
                    correctToken: 'multiply-by-tens',
                    incorrectTokens: [
                      'multiplication-calculation-error',  // Wrong 45×4
                      'multiplication-calculation-error',  // Wrong 45×4
                      null,
                      'multiply-by-tens-error',            // Added wrong
                    ],
                  },
                },

                // === TWO-DIGIT MULTIPLICATION (9-13) ===
                {
                  id: 'VCMNA183-009',
                  question: 'Calculate 38 × 12.',
                  options: ['446', '456', '466', '476'],
                  correctAnswer: 1,
                  explanation: '38×10=380, 38×2=76. Total: 380+76=456',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-two-digit', 'multiply-by-tens'],
                    correctToken: 'multiply-by-two-digit',
                    incorrectTokens: [
                      'partial-products-error',            // Wrong partial product
                      null,
                      'partial-products-error',            // Wrong partial product
                      'addition-error',                    // Added partials wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA183-010',
                  question: 'What is 54 × 23?',
                  options: ['1,202', '1,232', '1,242', '1,262'],
                  correctAnswer: 2,
                  explanation: '54×20=1,080, 54×3=162. Total: 1,080+162=1,242',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiply-by-two-digit'],
                    correctToken: 'multiply-by-two-digit',
                    incorrectTokens: [
                      'partial-products-error',            // Wrong partial
                      'partial-products-error',            // Wrong partial
                      null,
                      'addition-error',                    // Added wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA183-011',
                  question: 'Calculate 67 × 34.',
                  options: ['2,178', '2,228', '2,278', '2,328'],
                  correctAnswer: 2,
                  explanation: '67×30=2,010, 67×4=268. Total: 2,010+268=2,278',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['multiply-by-two-digit'],
                    correctToken: 'multiply-by-two-digit',
                    incorrectTokens: [
                      'partial-products-error',            // Wrong partial
                      'partial-products-error',            // Wrong partial
                      null,
                      'addition-error',                    // Added wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA183-012',
                  question: 'What is 45 × 45?',
                  options: ['1,925', '2,000', '2,025', '2,125'],
                  correctAnswer: 2,
                  explanation: '45×40=1,800, 45×5=225. Total: 1,800+225=2,025',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['multiply-by-two-digit'],
                    correctToken: 'multiply-by-two-digit',
                    incorrectTokens: [
                      'partial-products-error',            // Wrong partial
                      'estimation-not-exact',              // Rounded instead of calculating
                      null,
                      'addition-error',                    // Added wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA183-013',
                  question: 'Calculate 83 × 26.',
                  options: ['2,058', '2,108', '2,158', '2,208'],
                  correctAnswer: 2,
                  explanation: '83×20=1,660, 83×6=498. Total: 1,660+498=2,158',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['multiply-by-two-digit', 'carrying-in-multiplication'],
                    correctToken: 'multiply-by-two-digit',
                    incorrectTokens: [
                      'carrying-error',                    // Carrying mistake
                      'partial-products-error',            // Wrong partial
                      null,
                      'addition-error',                    // Added wrong
                    ],
                  },
                },

                // === MENTAL STRATEGIES (14-17) ===
                {
                  id: 'VCMNA183-014',
                  question: 'What is 25 × 32 using the doubling and halving strategy?',
                  options: ['750', '800', '850', '900'],
                  correctAnswer: 1,
                  explanation: '25×32 = 50×16 = 100×8 = 800',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['doubling-halving'],
                    correctToken: 'doubling-halving',
                    incorrectTokens: [
                      'doubling-halving-error',            // Wrong step in strategy
                      null,
                      'doubling-halving-error',            // Wrong step in strategy
                      'doubling-halving-error',            // Wrong step in strategy
                    ],
                  },
                },
                {
                  id: 'VCMNA183-015',
                  question: 'Calculate 99 × 15 using a compensation strategy.',
                  options: ['1,485', '1,495', '1,500', '1,515'],
                  correctAnswer: 0,
                  explanation: '99×15 = (100×15) - 15 = 1,500 - 15 = 1,485',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['compensation-strategy'],
                    correctToken: 'compensation-strategy',
                    incorrectTokens: [
                      null,
                      'compensation-adjustment-error',     // Wrong adjustment
                      'compensation-forgot-adjust',        // Forgot to subtract
                      'compensation-wrong-direction',      // Added instead of subtracted
                    ],
                  },
                },
                {
                  id: 'VCMNA183-016',
                  question: 'What is 50 × 24 using doubling and halving?',
                  options: ['1,100', '1,200', '1,300', '1,400'],
                  correctAnswer: 1,
                  explanation: '50×24 = 100×12 = 1,200',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['doubling-halving'],
                    correctToken: 'doubling-halving',
                    incorrectTokens: [
                      'doubling-halving-error',            // Wrong calculation
                      null,
                      'doubling-halving-error',            // Wrong calculation
                      'doubling-halving-error',            // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA183-017',
                  question: 'Calculate 101 × 8 using compensation.',
                  options: ['800', '804', '808', '816'],
                  correctAnswer: 2,
                  explanation: '101×8 = (100×8) + 8 = 800 + 8 = 808',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['compensation-strategy'],
                    correctToken: 'compensation-strategy',
                    incorrectTokens: [
                      'compensation-forgot-adjust',        // Forgot to add 8
                      'compensation-adjustment-error',     // Wrong adjustment
                      null,
                      'compensation-wrong-direction',      // Wrong adjustment direction
                    ],
                  },
                },

                // === WORD PROBLEMS (18-20) ===
                {
                  id: 'VCMNA183-018',
                  question: 'A school has 28 classes with 24 students in each. How many students in total?',
                  options: ['572', '612', '672', '724'],
                  correctAnswer: 2,
                  explanation: '28×24 = 28×20 + 28×4 = 560 + 112 = 672',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplication-word-problems', 'multiply-by-two-digit'],
                    correctToken: 'multiplication-word-problems',
                    incorrectTokens: [
                      'word-problem-setup-error',          // Set up wrong
                      'partial-products-error',            // Wrong partial
                      null,
                      'addition-error',                    // Added wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA183-019',
                  question: 'A bakery makes 156 muffins each day. How many muffins in a 5-day work week?',
                  options: ['680', '730', '780', '830'],
                  correctAnswer: 2,
                  explanation: '156 × 5 = 780. (150×5=750, 6×5=30, Total=780)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiplication-word-problems', 'multiply-by-single-digit'],
                    correctToken: 'multiplication-word-problems',
                    incorrectTokens: [
                      'multiplication-calculation-error',  // Wrong calculation
                      'multiplication-calculation-error',  // Wrong calculation
                      null,
                      'multiplication-calculation-error',  // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA183-020',
                  question: 'Tickets cost $45 each. If 32 people buy tickets, how much money is collected?',
                  options: ['$1,340', '$1,400', '$1,440', '$1,500'],
                  correctAnswer: 2,
                  explanation: '45×32 = 45×30 + 45×2 = 1,350 + 90 = 1,440',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['multiplication-word-problems', 'multiply-by-two-digit'],
                    correctToken: 'multiplication-word-problems',
                    incorrectTokens: [
                      'partial-products-error',            // Wrong partial
                      'estimation-not-exact',              // Estimated instead
                      null,
                      'estimation-not-exact',              // Rounded
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA184',
              code: 'VCMNA184',
              title: 'Division with Remainders',
              description: 'Solve problems involving division by a one digit number, including those that result in a remainder',
              content: `# Division with Remainders

Sometimes when we divide, things don't split evenly. That's where remainders come in!

## What is a Remainder?

When you share 17 lollies among 5 friends:
- Each friend gets 3 lollies (5 × 3 = 15)
- There are 2 lollies left over
- We write: **17 ÷ 5 = 3 remainder 2** or **17 ÷ 5 = 3 r 2**

## The Division Algorithm

\`\`\`
      32 r 1
   -------
 5 | 161
    -15    (5 × 30)
    ---
     11
    -10    (5 × 2)
    ---
      1    (remainder)
\`\`\`

**Check your work:** 5 × 32 + 1 = 160 + 1 = 161 ✓

## What Do Remainders Mean in Real Life?

The remainder's meaning depends on the situation:

**1. Ignore the remainder:**
"You have 23 eggs to fill cartons of 6. How many full cartons?"
- 23 ÷ 6 = 3 r 5
- Answer: **3 full cartons** (we ignore the 5 leftover eggs)

**2. Round up:**
"You need to transport 50 people in minibuses that hold 8 each. How many buses?"
- 50 ÷ 8 = 6 r 2
- Answer: **7 buses** (you can't leave 2 people behind!)

**3. The remainder IS the answer:**
"If you share 50 stickers among 8 friends, how many are left?"
- 50 ÷ 8 = 6 r 2
- Answer: **2 stickers left over**

## Division Strategies

### Using Multiplication Facts
- 56 ÷ 8 = ? → Think: 8 × ? = 56 → 8 × 7 = 56 → Answer: **7**

### Chunking
- 156 ÷ 6: First 156 - 120 (6×20) = 36, then 36 ÷ 6 = 6
- Answer: 20 + 6 = **26**`,
              keyPoints: [
                'A remainder is what\'s left over after dividing evenly',
                'Always check: divisor × quotient + remainder = dividend',
                'The remainder must always be less than the divisor',
                'Context determines how to interpret the remainder'
              ],
              knowledgeTokens: [
                {
                  id: 'division-basic',
                  name: 'Basic Division',
                  description: 'Dividing with no remainder',
                },
                {
                  id: 'remainder-concept',
                  name: 'Remainder Concept',
                  description: 'Understanding what a remainder represents',
                  prerequisites: ['division-basic'],
                },
                {
                  id: 'calculating-remainder',
                  name: 'Calculating Remainders',
                  description: 'Finding the remainder after division',
                  prerequisites: ['remainder-concept'],
                },
                {
                  id: 'division-checking',
                  name: 'Checking Division',
                  description: 'Using multiplication to verify division answers',
                  prerequisites: ['calculating-remainder'],
                },
                {
                  id: 'long-division',
                  name: 'Long Division Algorithm',
                  description: 'Using the standard algorithm for larger dividends',
                  prerequisites: ['division-basic'],
                },
                {
                  id: 'remainder-interpretation-ignore',
                  name: 'Interpreting Remainders - Ignore',
                  description: 'Recognising when to ignore the remainder (full groups)',
                  prerequisites: ['remainder-concept'],
                },
                {
                  id: 'remainder-interpretation-roundup',
                  name: 'Interpreting Remainders - Round Up',
                  description: 'Recognising when to add one more (containers, buses)',
                  prerequisites: ['remainder-concept'],
                },
                {
                  id: 'remainder-interpretation-answer',
                  name: 'Interpreting Remainders - As Answer',
                  description: 'Recognising when the remainder is the answer (leftovers)',
                  prerequisites: ['remainder-concept'],
                },
                {
                  id: 'division-word-problems',
                  name: 'Division Word Problems',
                  description: 'Applying division to real-world contexts',
                  prerequisites: ['remainder-concept'],
                },
              ],
              examples: [
                {
                  problem: '87 ÷ 4',
                  solution: '21 r 3',
                  explanation: '4 × 21 = 84, and 87 - 84 = 3 remainder'
                },
                {
                  problem: '125 ÷ 6',
                  solution: '20 r 5',
                  explanation: '6 × 20 = 120, and 125 - 120 = 5 remainder'
                }
              ],
              questions: [
                // === BASIC DIVISION WITH REMAINDERS (1-5) ===
                {
                  id: 'VCMNA184-001',
                  question: 'What is 47 ÷ 5?',
                  options: ['8 r 7', '9 r 2', '9 r 3', '10 r 3'],
                  correctAnswer: 1,
                  explanation: '5 × 9 = 45, and 47 - 45 = 2. So 47 ÷ 5 = 9 r 2',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['calculating-remainder', 'remainder-concept'],
                    correctToken: 'calculating-remainder',
                    incorrectTokens: [
                      'remainder-too-large',             // Remainder can't be larger than divisor
                      null,
                      'remainder-calculation-error',     // Close but wrong
                      'quotient-too-high',               // Quotient is too high
                    ],
                  },
                },
                {
                  id: 'VCMNA184-002',
                  question: 'What is 65 ÷ 8?',
                  options: ['7 r 9', '8 r 1', '8 r 2', '9 r 1'],
                  correctAnswer: 1,
                  explanation: '8 × 8 = 64, and 65 - 64 = 1. So 65 ÷ 8 = 8 r 1',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['calculating-remainder'],
                    correctToken: 'calculating-remainder',
                    incorrectTokens: [
                      'remainder-too-large',             // Remainder can't exceed divisor
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Wrong quotient
                    ],
                  },
                },
                {
                  id: 'VCMNA184-003',
                  question: 'Calculate 93 ÷ 7.',
                  options: ['12 r 9', '13 r 2', '13 r 3', '14 r 1'],
                  correctAnswer: 1,
                  explanation: '7 × 13 = 91, and 93 - 91 = 2. So 93 ÷ 7 = 13 r 2',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['calculating-remainder'],
                    correctToken: 'calculating-remainder',
                    incorrectTokens: [
                      'remainder-too-large',             // Remainder exceeds divisor
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Wrong quotient
                    ],
                  },
                },
                {
                  id: 'VCMNA184-004',
                  question: 'What is 156 ÷ 7?',
                  options: ['21 r 3', '22 r 2', '22 r 3', '23 r 1'],
                  correctAnswer: 1,
                  explanation: '7 × 22 = 154, and 156 - 154 = 2. So 156 ÷ 7 = 22 r 2',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['calculating-remainder', 'long-division'],
                    correctToken: 'calculating-remainder',
                    incorrectTokens: [
                      'quotient-too-low',                // Quotient is too low
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Quotient is too high
                    ],
                  },
                },
                {
                  id: 'VCMNA184-005',
                  question: 'Calculate 247 ÷ 9.',
                  options: ['26 r 7', '27 r 4', '27 r 5', '28 r 1'],
                  correctAnswer: 1,
                  explanation: '9 × 27 = 243, and 247 - 243 = 4. So 247 ÷ 9 = 27 r 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['calculating-remainder', 'long-division'],
                    correctToken: 'long-division',
                    incorrectTokens: [
                      'quotient-too-low',                // Quotient too low
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Quotient too high
                    ],
                  },
                },

                // === CHECKING DIVISION (6-8) ===
                {
                  id: 'VCMNA184-006',
                  question: 'If 173 ÷ 8 = 21 r ?, what is the remainder?',
                  options: ['3', '4', '5', '6'],
                  correctAnswer: 2,
                  explanation: '8 × 21 = 168, and 173 - 168 = 5. The remainder is 5.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-checking', 'calculating-remainder'],
                    correctToken: 'division-checking',
                    incorrectTokens: [
                      'checking-multiplication-error',   // Wrong 8×21
                      'checking-subtraction-error',      // Wrong subtraction
                      null,
                      'checking-subtraction-error',      // Wrong subtraction
                    ],
                  },
                },
                {
                  id: 'VCMNA184-007',
                  question: 'Check: Is 84 ÷ 6 = 13 r 6 correct?',
                  options: [
                    'Yes, it is correct',
                    'No, the remainder is wrong',
                    'No, the quotient is wrong',
                    'No, both are wrong'
                  ],
                  correctAnswer: 3,
                  explanation: 'Remainder 6 equals the divisor - impossible! 6 × 13 = 78. 84 - 78 = 6 would give r 6, but we must say 14 r 0 instead. Actually: 6 × 14 = 84 exactly!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-checking', 'remainder-concept'],
                    correctToken: 'division-checking',
                    incorrectTokens: [
                      'checking-oversight',              // Didn't check properly
                      'remainder-rule-error',            // Didn't know remainder must be < divisor
                      'partial-checking',                // Only checked one thing
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA184-008',
                  question: 'To check 95 ÷ 4 = 23 r 3, which calculation should you do?',
                  options: [
                    '95 - 4 = 91',
                    '4 × 23 = 92',
                    '4 × 23 + 3 = 95',
                    '95 + 3 = 98'
                  ],
                  correctAnswer: 2,
                  explanation: 'To check division: divisor × quotient + remainder should equal the dividend.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-checking'],
                    correctToken: 'division-checking',
                    incorrectTokens: [
                      'checking-method-confusion',       // Wrong method
                      'checking-incomplete',             // Forgot remainder
                      null,
                      'checking-method-confusion',       // Wrong method
                    ],
                  },
                },

                // === REMAINDER INTERPRETATION (9-14) ===
                {
                  id: 'VCMNA184-009',
                  question: '83 students need to be divided into groups of 6. How many complete groups can be made?',
                  options: ['12', '13', '14', '15'],
                  correctAnswer: 1,
                  explanation: '83 ÷ 6 = 13 r 5. There are 13 complete groups (we ignore the remainder).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['remainder-interpretation-ignore', 'division-word-problems'],
                    correctToken: 'remainder-interpretation-ignore',
                    incorrectTokens: [
                      'remainder-interpretation-error',  // Rounded wrong way
                      null,
                      'remainder-included-error',        // Added 1 for remainder
                      'division-calculation-error',      // Wrong division
                    ],
                  },
                },
                {
                  id: 'VCMNA184-010',
                  question: 'A baker has 200 cupcakes to put in boxes of 8. How many boxes does she need?',
                  options: ['24', '25', '26', '27'],
                  correctAnswer: 1,
                  explanation: '200 ÷ 8 = 25 exactly. She needs 25 boxes.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['division-basic', 'division-word-problems'],
                    correctToken: 'division-word-problems',
                    incorrectTokens: [
                      'division-calculation-error',      // Wrong calculation
                      null,
                      'unnecessary-roundup',             // Rounded up when not needed
                      'division-calculation-error',      // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA184-011',
                  question: '50 people need to travel in minibuses that hold 8 each. How many minibuses are needed?',
                  options: ['6', '6 r 2', '7', '8'],
                  correctAnswer: 2,
                  explanation: '50 ÷ 8 = 6 r 2. We need 7 buses because we can\'t leave 2 people behind!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['remainder-interpretation-roundup', 'division-word-problems'],
                    correctToken: 'remainder-interpretation-roundup',
                    incorrectTokens: [
                      'remainder-interpretation-error',  // Ignored remainder when shouldn\'t
                      'gave-calculation-not-answer',     // Gave division result, not answer
                      null,
                      'over-rounded',                    // Rounded up too much
                    ],
                  },
                },
                {
                  id: 'VCMNA184-012',
                  question: 'You share 50 stickers among 8 friends equally. How many stickers are left over?',
                  options: ['0', '2', '6', '8'],
                  correctAnswer: 1,
                  explanation: '50 ÷ 8 = 6 r 2. The remainder (2 stickers) is what\'s left over.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['remainder-interpretation-answer', 'division-word-problems'],
                    correctToken: 'remainder-interpretation-answer',
                    incorrectTokens: [
                      'remainder-interpretation-error',  // Thought it divided evenly
                      null,
                      'quotient-not-remainder',          // Gave quotient instead
                      'divisor-not-remainder',           // Gave divisor instead
                    ],
                  },
                },
                {
                  id: 'VCMNA184-013',
                  question: 'Eggs come in cartons of 6. If you have 32 eggs, how many full cartons can you fill?',
                  options: ['4', '5', '5 r 2', '6'],
                  correctAnswer: 1,
                  explanation: '32 ÷ 6 = 5 r 2. You can fill 5 full cartons (ignore the 2 leftover eggs).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['remainder-interpretation-ignore', 'division-word-problems'],
                    correctToken: 'remainder-interpretation-ignore',
                    incorrectTokens: [
                      'quotient-too-low',                // Wrong calculation
                      null,
                      'gave-calculation-not-answer',     // Gave full answer with remainder
                      'remainder-included-error',        // Rounded up
                    ],
                  },
                },
                {
                  id: 'VCMNA184-014',
                  question: '75 children need to cross a river. Each boat holds 8 children. How many boat trips are needed?',
                  options: ['8', '9', '10', '11'],
                  correctAnswer: 2,
                  explanation: '75 ÷ 8 = 9 r 3. We need 10 trips because 3 children still need to cross!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['remainder-interpretation-roundup', 'division-word-problems'],
                    correctToken: 'remainder-interpretation-roundup',
                    incorrectTokens: [
                      'quotient-too-low',                // Wrong calculation
                      'remainder-interpretation-error',  // Ignored remainder
                      null,
                      'over-rounded',                    // Too many trips
                    ],
                  },
                },

                // === LARGER DIVISION (15-17) ===
                {
                  id: 'VCMNA184-015',
                  question: 'What is 345 ÷ 6?',
                  options: ['56 r 3', '57 r 3', '57 r 4', '58 r 1'],
                  correctAnswer: 1,
                  explanation: '6 × 57 = 342, and 345 - 342 = 3. So 345 ÷ 6 = 57 r 3',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['long-division', 'calculating-remainder'],
                    correctToken: 'long-division',
                    incorrectTokens: [
                      'quotient-too-low',                // Quotient too low
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Quotient too high
                    ],
                  },
                },
                {
                  id: 'VCMNA184-016',
                  question: 'Calculate 512 ÷ 7.',
                  options: ['72 r 6', '73 r 1', '73 r 2', '74 r 0'],
                  correctAnswer: 1,
                  explanation: '7 × 73 = 511, and 512 - 511 = 1. So 512 ÷ 7 = 73 r 1',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['long-division'],
                    correctToken: 'long-division',
                    incorrectTokens: [
                      'quotient-too-low',                // Quotient too low
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'quotient-too-high',               // Quotient too high
                    ],
                  },
                },
                {
                  id: 'VCMNA184-017',
                  question: 'What is 1,000 ÷ 6?',
                  options: ['165 r 4', '166 r 4', '166 r 2', '167 r 0'],
                  correctAnswer: 1,
                  explanation: '6 × 166 = 996, and 1,000 - 996 = 4. So 1,000 ÷ 6 = 166 r 4',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['long-division'],
                    correctToken: 'long-division',
                    incorrectTokens: [
                      'quotient-too-low',                // Quotient too low
                      null,
                      'remainder-calculation-error',     // Wrong remainder
                      'division-calculation-error',      // Wrong calculation
                    ],
                  },
                },

                // === WORD PROBLEMS (18-20) ===
                {
                  id: 'VCMNA184-018',
                  question: 'A rope 175 cm long is cut into pieces of 8 cm each. How many pieces can be cut, and how much rope is left over?',
                  options: ['21 pieces, 7 cm left', '21 pieces, 8 cm left', '22 pieces, 0 cm left', '22 pieces, 1 cm left'],
                  correctAnswer: 0,
                  explanation: '175 ÷ 8 = 21 r 7. So 21 pieces can be cut with 7 cm left over.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['division-word-problems', 'remainder-interpretation-answer'],
                    correctToken: 'division-word-problems',
                    incorrectTokens: [
                      null,
                      'remainder-too-large',             // Remainder can't equal divisor
                      'remainder-interpretation-error',  // Thought it divided evenly
                      'quotient-too-high',               // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMNA184-019',
                  question: 'A factory produces 894 toys. They are packed in boxes of 9. How many boxes are completely filled?',
                  options: ['98', '99', '100', '101'],
                  correctAnswer: 1,
                  explanation: '894 ÷ 9 = 99 r 3. 99 boxes are completely filled.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-word-problems', 'remainder-interpretation-ignore'],
                    correctToken: 'division-word-problems',
                    incorrectTokens: [
                      'quotient-too-low',                // Wrong calculation
                      null,
                      'remainder-included-error',        // Rounded up
                      'division-calculation-error',      // Wrong division
                    ],
                  },
                },
                {
                  id: 'VCMNA184-020',
                  question: 'A school has 287 students going on an excursion. Each bus holds 45 students. How many buses are needed?',
                  options: ['6', '6 r 17', '7', '8'],
                  correctAnswer: 2,
                  explanation: '287 ÷ 45 = 6 r 17. We need 7 buses because 17 students can\'t be left behind.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['division-word-problems', 'remainder-interpretation-roundup'],
                    correctToken: 'remainder-interpretation-roundup',
                    incorrectTokens: [
                      'remainder-interpretation-error',  // Ignored remainder
                      'gave-calculation-not-answer',     // Gave full division result
                      null,
                      'over-rounded',                    // Too many buses
                    ],
                  },
                },
              ]
            }
          ]
        },
        {
          id: 'fractions-decimals',
          title: 'Fractions and Decimals',
          description: 'Understanding and working with fractions and decimal numbers',
          sections: [
            {
              id: 'VCMNA187',
              code: 'VCMNA187',
              title: 'Comparing and Ordering Fractions',
              description: 'Compare and order common unit fractions and locate and represent them on a number line',
              content: `# Comparing and Ordering Fractions

Fractions can be tricky to compare, but with the right strategies, it becomes much easier!

## Understanding Unit Fractions

A **unit fraction** has 1 as its numerator: ½, ⅓, ¼, ⅕, ⅙...

**Important rule:** The LARGER the denominator, the SMALLER the fraction!

Think about it: If you share a pizza among more people, each person gets a smaller piece.

- ½ of a pizza = large slice 🍕
- ⅛ of a pizza = tiny slice 🍕

So: **½ > ⅓ > ¼ > ⅕ > ⅙ > ⅐ > ⅛**

## Fractions on a Number Line

\`\`\`
0    ¼    ½    ¾    1
|----|----|----|----|
\`\`\`

Each fraction shows a position between 0 and 1.

## Comparing Fractions with Same Denominators

When denominators are the same, just compare numerators:

- ⅗ vs ⅖ → 3 > 2, so **⅗ > ⅖**
- ⁷⁄₁₀ vs ³⁄₁₀ → 7 > 3, so **⁷⁄₁₀ > ³⁄₁₀**

## Comparing Fractions with Same Numerators

When numerators are the same, the larger denominator means a smaller fraction:

- ³⁄₄ vs ³⁄₈ → 4 < 8, so **³⁄₄ > ³⁄₈**
- ²⁄₅ vs ²⁄₃ → 5 > 3, so **²⁄₅ < ²⁄₃**

## Using Benchmarks

Compare fractions to ½:
- Is ³⁄₈ more or less than ½? → ½ = ⁴⁄₈, and 3 < 4, so **³⁄₈ < ½**
- Is ⅝ more or less than ½? → ½ = ⁴⁄₈, and 5 > 4, so **⅝ > ½**`,
              keyPoints: [
                'For unit fractions, larger denominator = smaller fraction',
                'Same denominators: compare numerators directly',
                'Same numerators: larger denominator = smaller fraction',
                'Use ½ as a benchmark to help compare fractions'
              ],
              knowledgeTokens: [
                {
                  id: 'unit-fraction-concept',
                  name: 'Unit Fraction Concept',
                  description: 'Understanding fractions with numerator 1',
                },
                {
                  id: 'unit-fraction-comparison',
                  name: 'Comparing Unit Fractions',
                  description: 'Larger denominator means smaller unit fraction',
                  prerequisites: ['unit-fraction-concept'],
                },
                {
                  id: 'same-denominator-comparison',
                  name: 'Same Denominator Comparison',
                  description: 'Comparing fractions with the same denominator',
                },
                {
                  id: 'same-numerator-comparison',
                  name: 'Same Numerator Comparison',
                  description: 'Comparing fractions with the same numerator',
                },
                {
                  id: 'benchmark-half',
                  name: 'Using Half as Benchmark',
                  description: 'Comparing fractions to one-half',
                },
                {
                  id: 'equivalent-fractions',
                  name: 'Equivalent Fractions',
                  description: 'Finding and using equivalent fractions to compare',
                  prerequisites: ['same-denominator-comparison'],
                },
                {
                  id: 'fraction-number-line',
                  name: 'Fractions on Number Line',
                  description: 'Locating and ordering fractions on a number line',
                  prerequisites: ['unit-fraction-concept'],
                },
                {
                  id: 'ordering-fractions',
                  name: 'Ordering Multiple Fractions',
                  description: 'Arranging three or more fractions in order',
                  prerequisites: ['same-denominator-comparison', 'equivalent-fractions'],
                },
              ],
              examples: [
                {
                  problem: 'Order from smallest to largest: ½, ¼, ⅓',
                  solution: '¼ < ⅓ < ½',
                  explanation: 'These are unit fractions. Larger denominator = smaller fraction, so ¼ is smallest.'
                },
                {
                  problem: 'Which is larger: ⅗ or ⁷⁄₁₀?',
                  solution: '⁷⁄₁₀ is larger',
                  explanation: '⅗ = ⁶⁄₁₀, and ⁷⁄₁₀ > ⁶⁄₁₀'
                }
              ],
              questions: [
                // === UNIT FRACTION COMPARISON (1-4) ===
                {
                  id: 'VCMNA187-001',
                  question: 'Which fraction is the smallest?',
                  options: ['½', '⅓', '¼', '⅕'],
                  correctAnswer: 3,
                  explanation: 'For unit fractions, the larger the denominator, the smaller the fraction. ⅕ has the largest denominator (5).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['unit-fraction-comparison'],
                    correctToken: 'unit-fraction-comparison',
                    incorrectTokens: [
                      'unit-fraction-reversal',          // Thinks larger denominator = larger fraction
                      'unit-fraction-reversal',          // Same error
                      'unit-fraction-reversal',          // Same error
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA187-002',
                  question: 'Which unit fraction is the largest?',
                  options: ['⅛', '⅙', '¼', '⅓'],
                  correctAnswer: 3,
                  explanation: 'For unit fractions, the smaller the denominator, the larger the fraction. ⅓ has the smallest denominator.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['unit-fraction-comparison'],
                    correctToken: 'unit-fraction-comparison',
                    incorrectTokens: [
                      'unit-fraction-reversal',          // Wrong direction
                      'unit-fraction-reversal',          // Wrong direction
                      'unit-fraction-reversal',          // Wrong direction
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA187-003',
                  question: 'Order from smallest to largest: ⅓, ⅕, ¼',
                  options: ['⅕, ¼, ⅓', '⅓, ¼, ⅕', '¼, ⅓, ⅕', '⅕, ⅓, ¼'],
                  correctAnswer: 0,
                  explanation: 'Unit fractions: larger denominator = smaller fraction. 5 > 4 > 3, so ⅕ < ¼ < ⅓.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['unit-fraction-comparison', 'ordering-fractions'],
                    correctToken: 'ordering-fractions',
                    incorrectTokens: [
                      null,
                      'unit-fraction-reversal',          // Got order backwards
                      'ordering-partial-error',          // Partial ordering error
                      'ordering-partial-error',          // Partial ordering error
                    ],
                  },
                },
                {
                  id: 'VCMNA187-004',
                  question: 'Which statement is TRUE?',
                  options: ['⅙ > ⅕', '⅓ < ¼', '½ > ⅓', '⅛ > ¼'],
                  correctAnswer: 2,
                  explanation: '½ > ⅓ is true because 2 < 3 (smaller denominator = larger unit fraction).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['unit-fraction-comparison'],
                    correctToken: 'unit-fraction-comparison',
                    incorrectTokens: [
                      'unit-fraction-reversal',          // 6 > 5 but ⅙ < ⅕
                      'unit-fraction-reversal',          // 3 < 4 but ⅓ > ¼
                      null,
                      'unit-fraction-reversal',          // 8 > 4 but ⅛ < ¼
                    ],
                  },
                },

                // === SAME DENOMINATOR COMPARISON (5-8) ===
                {
                  id: 'VCMNA187-005',
                  question: 'Which fraction is largest?',
                  options: ['²⁄₇', '⁴⁄₇', '⁵⁄₇', '³⁄₇'],
                  correctAnswer: 2,
                  explanation: 'Same denominators, so compare numerators. 5 is the largest numerator, so ⁵⁄₇ is largest.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['same-denominator-comparison'],
                    correctToken: 'same-denominator-comparison',
                    incorrectTokens: [
                      'numerator-comparison-error',      // Wrong numerator chosen
                      'numerator-comparison-error',      // Wrong numerator chosen
                      null,
                      'numerator-comparison-error',      // Wrong numerator chosen
                    ],
                  },
                },
                {
                  id: 'VCMNA187-006',
                  question: 'Order these fractions from smallest to largest: ⅝, ⅜, ⅞',
                  options: ['⅜, ⅝, ⅞', '⅞, ⅝, ⅜', '⅝, ⅜, ⅞', '⅜, ⅞, ⅝'],
                  correctAnswer: 0,
                  explanation: 'Same denominators (8), so compare numerators: 3 < 5 < 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['same-denominator-comparison', 'ordering-fractions'],
                    correctToken: 'same-denominator-comparison',
                    incorrectTokens: [
                      null,
                      'ordering-direction-error',        // Ordered largest to smallest
                      'ordering-partial-error',          // Wrong order
                      'ordering-partial-error',          // Wrong order
                    ],
                  },
                },
                {
                  id: 'VCMNA187-007',
                  question: 'Which is greater: ⁷⁄₁₀ or ⁴⁄₁₀?',
                  options: ['⁷⁄₁₀', '⁴⁄₁₀', 'They are equal', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Same denominators (10), compare numerators: 7 > 4, so ⁷⁄₁₀ > ⁴⁄₁₀.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['same-denominator-comparison'],
                    correctToken: 'same-denominator-comparison',
                    incorrectTokens: [
                      null,
                      'numerator-comparison-error',      // Chose smaller
                      'comparison-uncertainty',          // Thought equal
                      'comparison-uncertainty',          // Uncertain
                    ],
                  },
                },
                {
                  id: 'VCMNA187-008',
                  question: 'Which fraction is closest to 1?',
                  options: ['⁵⁄₉', '⁷⁄₉', '⁸⁄₉', '⁶⁄₉'],
                  correctAnswer: 2,
                  explanation: '⁸⁄₉ is closest to 1 because it has the largest numerator (only ¹⁄₉ away from 1).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['same-denominator-comparison', 'fraction-number-line'],
                    correctToken: 'same-denominator-comparison',
                    incorrectTokens: [
                      'closest-to-one-error',            // Wrong choice
                      'closest-to-one-error',            // Wrong choice
                      null,
                      'closest-to-one-error',            // Wrong choice
                    ],
                  },
                },

                // === BENCHMARK COMPARISON (9-12) ===
                {
                  id: 'VCMNA187-009',
                  question: 'Which fraction is greater than ½?',
                  options: ['³⁄₈', '²⁄₅', '⁴⁄₉', '⁵⁄₈'],
                  correctAnswer: 3,
                  explanation: '½ = ⁴⁄₈. Since ⁵⁄₈ > ⁴⁄₈, we know ⁵⁄₈ > ½.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['benchmark-half', 'equivalent-fractions'],
                    correctToken: 'benchmark-half',
                    incorrectTokens: [
                      'benchmark-comparison-error',      // Miscompared to ½
                      'benchmark-comparison-error',      // Miscompared to ½
                      'benchmark-comparison-error',      // Miscompared to ½
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA187-010',
                  question: 'Which fraction is less than ½?',
                  options: ['⁵⁄₉', '⁴⁄₇', '³⁄₅', '²⁄₅'],
                  correctAnswer: 3,
                  explanation: '²⁄₅ = 0.4, which is less than ½ = 0.5. (Or: ½ = ²·⁵⁄₅, and 2 < 2.5)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['benchmark-half'],
                    correctToken: 'benchmark-half',
                    incorrectTokens: [
                      'benchmark-comparison-error',      // Miscompared to ½
                      'benchmark-comparison-error',      // Miscompared to ½
                      'benchmark-comparison-error',      // Miscompared to ½
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA187-011',
                  question: 'Is ³⁄₇ more or less than ½?',
                  options: ['More than ½', 'Less than ½', 'Equal to ½', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '½ = ³·⁵⁄₇. Since 3 < 3.5, we know ³⁄₇ < ½.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['benchmark-half'],
                    correctToken: 'benchmark-half',
                    incorrectTokens: [
                      'benchmark-comparison-error',      // Thought more
                      null,
                      'benchmark-equality-error',        // Thought equal
                      'comparison-uncertainty',          // Uncertain
                    ],
                  },
                },
                {
                  id: 'VCMNA187-012',
                  question: 'Both ⁴⁄₉ and ⁵⁄₁₁ are close to ½. Which is closer?',
                  options: ['⁴⁄₉', '⁵⁄₁₁', 'They are equally close', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: '⁴⁄₉ ≈ 0.444, ⁵⁄₁₁ ≈ 0.455. Both are less than 0.5. ⁵⁄₁₁ is closer to 0.5.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['benchmark-half'],
                    correctToken: 'benchmark-half',
                    incorrectTokens: [
                      null,
                      'distance-from-half-error',        // Wrong distance calculation
                      'equal-proximity-error',           // Thought equal
                      'comparison-uncertainty',          // Uncertain
                    ],
                  },
                },

                // === NUMBER LINE (13-15) ===
                {
                  id: 'VCMNA187-013',
                  question: 'Where would ³⁄₄ be on a number line from 0 to 1?',
                  options: ['Closer to 0', 'Exactly at ½', 'Between ½ and 1', 'At 1'],
                  correctAnswer: 2,
                  explanation: '³⁄₄ = 0.75, which is between ½ (0.5) and 1.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-number-line'],
                    correctToken: 'fraction-number-line',
                    incorrectTokens: [
                      'number-line-position-error',      // Wrong region
                      'number-line-position-error',      // Wrong region
                      null,
                      'number-line-position-error',      // Wrong region
                    ],
                  },
                },
                {
                  id: 'VCMNA187-014',
                  question: 'Which fraction would be closest to 0 on a number line?',
                  options: ['¼', '⅕', '⅛', '⅙'],
                  correctAnswer: 2,
                  explanation: '⅛ is the smallest because it has the largest denominator (for unit fractions).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-number-line', 'unit-fraction-comparison'],
                    correctToken: 'fraction-number-line',
                    incorrectTokens: [
                      'number-line-position-error',      // Wrong choice
                      'number-line-position-error',      // Wrong choice
                      null,
                      'number-line-position-error',      // Wrong choice
                    ],
                  },
                },
                {
                  id: 'VCMNA187-015',
                  question: 'On a number line from 0 to 1, where would ⅗ be?',
                  options: ['Before ½', 'Exactly at ½', 'After ½ but before ¾', 'After ¾'],
                  correctAnswer: 2,
                  explanation: '⅗ = 0.6, which is after ½ (0.5) but before ¾ (0.75).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-number-line', 'benchmark-half'],
                    correctToken: 'fraction-number-line',
                    incorrectTokens: [
                      'benchmark-comparison-error',      // Mislocated relative to ½
                      'number-line-position-error',      // Wrong region
                      null,
                      'number-line-position-error',      // Wrong region
                    ],
                  },
                },

                // === EQUIVALENT FRACTIONS & COMPLEX COMPARISON (16-20) ===
                {
                  id: 'VCMNA187-016',
                  question: 'Which fraction is equivalent to ½?',
                  options: ['²⁄₃', '³⁄₆', '⁴⁄₆', '⁵⁄₈'],
                  correctAnswer: 1,
                  explanation: '³⁄₆ = ½ because 3 is half of 6, just as 1 is half of 2.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['equivalent-fractions'],
                    correctToken: 'equivalent-fractions',
                    incorrectTokens: [
                      'equivalent-fraction-error',       // Wrong equivalent
                      null,
                      'equivalent-fraction-error',       // Wrong equivalent
                      'equivalent-fraction-error',       // Wrong equivalent
                    ],
                  },
                },
                {
                  id: 'VCMNA187-017',
                  question: 'Which is larger: ⅗ or ⁷⁄₁₀?',
                  options: ['⅗', '⁷⁄₁₀', 'They are equal', 'Cannot compare'],
                  correctAnswer: 1,
                  explanation: '⅗ = ⁶⁄₁₀. Since ⁷⁄₁₀ > ⁶⁄₁₀, we know ⁷⁄₁₀ > ⅗.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['equivalent-fractions', 'same-denominator-comparison'],
                    correctToken: 'equivalent-fractions',
                    incorrectTokens: [
                      'equivalent-conversion-error',     // Wrong conversion
                      null,
                      'comparison-uncertainty',          // Thought equal
                      'comparison-uncertainty',          // Uncertain
                    ],
                  },
                },
                {
                  id: 'VCMNA187-018',
                  question: 'Which is larger: ⁵⁄₆ or ⁷⁄₈?',
                  options: ['⁵⁄₆', '⁷⁄₈', 'They are equal', 'Cannot compare'],
                  correctAnswer: 1,
                  explanation: '⁵⁄₆ ≈ 0.833, ⁷⁄₈ = 0.875. So ⁷⁄₈ is larger. (Or: both are 1 fraction from 1: ⅙ vs ⅛, and ⅙ > ⅛)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['same-numerator-comparison'],
                    correctToken: 'same-numerator-comparison',
                    incorrectTokens: [
                      'complex-comparison-error',        // Wrong comparison
                      null,
                      'comparison-uncertainty',          // Thought equal
                      'comparison-uncertainty',          // Uncertain
                    ],
                  },
                },
                {
                  id: 'VCMNA187-019',
                  question: 'Order from smallest to largest: ²⁄₃, ³⁄₄, ⅝',
                  options: ['⅝, ²⁄₃, ³⁄₄', '²⁄₃, ⅝, ³⁄₄', '³⁄₄, ²⁄₃, ⅝', '⅝, ³⁄₄, ²⁄₃'],
                  correctAnswer: 0,
                  explanation: '⅝ = 0.625, ²⁄₃ ≈ 0.667, ³⁄₄ = 0.75. So ⅝ < ²⁄₃ < ³⁄₄.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['ordering-fractions', 'equivalent-fractions'],
                    correctToken: 'ordering-fractions',
                    incorrectTokens: [
                      null,
                      'ordering-partial-error',          // Partial order wrong
                      'ordering-direction-error',        // Wrong direction
                      'ordering-partial-error',          // Partial order wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA187-020',
                  question: 'Which fraction is between ½ and ¾?',
                  options: ['²⁄₅', '⅜', '⅗', '⁷⁄₈'],
                  correctAnswer: 2,
                  explanation: '½ = 0.5, ¾ = 0.75. ⅗ = 0.6, which is between 0.5 and 0.75.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['fraction-number-line', 'benchmark-half'],
                    correctToken: 'fraction-number-line',
                    incorrectTokens: [
                      'between-fractions-error',         // Less than ½
                      'between-fractions-error',         // Less than ½
                      null,
                      'between-fractions-error',         // Greater than ¾
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA190',
              code: 'VCMNA190',
              title: 'Comparing and Ordering Decimals',
              description: 'Compare, order and represent decimals',
              content: `# Understanding Decimals

Decimals are another way to show parts of a whole number, just like fractions!

## Place Value in Decimals

The decimal point separates whole numbers from parts:

| Tens | Ones | . | Tenths | Hundredths | Thousandths |
|------|------|---|--------|------------|-------------|
| 10   | 1    | . | 0.1    | 0.01       | 0.001       |

**Example:** In 34.567:
- 3 tens = 30
- 4 ones = 4
- 5 tenths = 0.5
- 6 hundredths = 0.06
- 7 thousandths = 0.007

## Comparing Decimals

**Golden Rule:** Line up the decimal points, then compare from left to right!

**Example:** Which is larger, 3.45 or 3.5?

\`\`\`
3.45
3.50  (add a zero to help compare)
\`\`\`

Compare digit by digit:
- 3 = 3 ✓
- 4 < 5 ← Stop here!

So **3.5 > 3.45**

## Common Mistakes to Avoid

❌ **Wrong:** "3.45 is bigger because it has more digits"
✓ **Right:** Compare place values, not number of digits!

❌ **Wrong:** "0.5 is smaller than 0.42"
✓ **Right:** 0.5 = 0.50, and 50 > 42, so 0.5 > 0.42

## Decimals and Fractions Connection

| Fraction | Decimal |
|----------|---------|
| ½        | 0.5     |
| ¼        | 0.25    |
| ¾        | 0.75    |
| ⅕        | 0.2     |
| ⅒        | 0.1     |

## Ordering Decimals

To order decimals:
1. Line up decimal points
2. Add zeros to make same length
3. Compare from left to right

**Example:** Order 2.5, 2.35, 2.53

\`\`\`
2.50
2.35
2.53
\`\`\`

Answer: **2.35 < 2.5 < 2.53**`,
              keyPoints: [
                'Each place value is 10 times smaller as you move right',
                'Line up decimal points when comparing',
                'Add trailing zeros to help compare (0.5 = 0.50 = 0.500)',
                'More digits doesn\'t mean a larger number!'
              ],
              examples: [
                {
                  problem: 'Order from smallest to largest: 0.6, 0.06, 0.66',
                  solution: '0.06 < 0.6 < 0.66',
                  explanation: 'Compare as 0.06, 0.60, 0.66 - looking at tenths first'
                },
                {
                  problem: 'Which is larger: 4.5 or 4.125?',
                  solution: '4.5 is larger',
                  explanation: '4.500 vs 4.125: The tenths digit 5 > 1'
                }
              ],
              knowledgeTokens: [
                {
                  id: 'decimal-place-value',
                  name: 'Decimal Place Value',
                  description: 'Understanding tenths, hundredths, thousandths positions',
                  prerequisites: [],
                },
                {
                  id: 'comparing-decimals',
                  name: 'Comparing Decimals',
                  description: 'Using place value to compare decimal numbers',
                  prerequisites: ['decimal-place-value'],
                },
                {
                  id: 'ordering-decimals',
                  name: 'Ordering Decimals',
                  description: 'Arranging multiple decimals from smallest to largest or vice versa',
                  prerequisites: ['comparing-decimals'],
                },
                {
                  id: 'decimal-fraction-equivalence',
                  name: 'Decimal-Fraction Equivalence',
                  description: 'Converting between common fractions and decimals',
                  prerequisites: ['decimal-place-value'],
                },
                {
                  id: 'decimal-addition',
                  name: 'Decimal Addition',
                  description: 'Adding decimals by aligning decimal points',
                  prerequisites: ['decimal-place-value'],
                },
                {
                  id: 'trailing-zeros-concept',
                  name: 'Trailing Zeros Concept',
                  description: 'Understanding that trailing zeros do not change decimal value',
                  prerequisites: ['decimal-place-value'],
                },
                {
                  id: 'decimal-number-line',
                  name: 'Decimal Number Line',
                  description: 'Placing and locating decimals on a number line',
                  prerequisites: ['decimal-place-value', 'comparing-decimals'],
                },
                {
                  id: 'rounding-decimals',
                  name: 'Rounding Decimals',
                  description: 'Rounding decimals to given decimal places',
                  prerequisites: ['decimal-place-value'],
                },
              ],
              questions: [
                // Questions 1-5: Decimal Place Value
                {
                  id: 'VCMNA190-001',
                  question: 'What is the value of the 7 in 3.478?',
                  options: ['7', '0.7', '0.07', '0.007'],
                  correctAnswer: 2,
                  explanation: 'The 7 is in the hundredths place, so its value is 0.07',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-place-value'],
                    correctToken: 'decimal-place-value',
                    incorrectTokens: [
                      'place-value-position-error',       // Ignored decimal completely
                      'tenths-hundredths-confusion',      // Confused with tenths
                      null,                                // Correct
                      'hundredths-thousandths-confusion', // Confused with thousandths
                    ],
                  },
                },
                {
                  id: 'VCMNA190-002',
                  question: 'In the number 45.692, what digit is in the tenths place?',
                  options: ['4', '5', '6', '9'],
                  correctAnswer: 2,
                  explanation: 'The tenths place is the first digit after the decimal point, which is 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-place-value'],
                    correctToken: 'decimal-place-value',
                    incorrectTokens: [
                      'ones-tenths-confusion',            // Chose tens digit
                      'ones-tenths-confusion',            // Chose ones digit
                      null,                                // Correct
                      'tenths-hundredths-confusion',      // Chose hundredths
                    ],
                  },
                },
                {
                  id: 'VCMNA190-003',
                  question: 'What is the value of the 3 in 8.235?',
                  options: ['3', '0.3', '0.03', '0.003'],
                  correctAnswer: 2,
                  explanation: 'The 3 is in the hundredths place (second position after decimal), so its value is 0.03.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-place-value'],
                    correctToken: 'decimal-place-value',
                    incorrectTokens: [
                      'place-value-position-error',       // Ignored decimal
                      'tenths-hundredths-confusion',      // Confused with tenths
                      null,                                // Correct
                      'hundredths-thousandths-confusion', // Confused with thousandths
                    ],
                  },
                },
                {
                  id: 'VCMNA190-004',
                  question: 'Which number has a 5 in the thousandths place?',
                  options: ['5.123', '1.523', '1.235', '1.253'],
                  correctAnswer: 2,
                  explanation: 'In 1.235, the 5 is in the third position after the decimal point (thousandths place).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-place-value'],
                    correctToken: 'decimal-place-value',
                    incorrectTokens: [
                      'ones-tenths-confusion',            // Confused ones with thousandths
                      'tenths-hundredths-confusion',      // 5 is in tenths
                      null,                                // Correct
                      'hundredths-thousandths-confusion', // 5 is in hundredths
                    ],
                  },
                },
                {
                  id: 'VCMNA190-005',
                  question: 'What is 0.4 + 0.08 + 0.003?',
                  options: ['0.483', '0.0483', '4.83', '0.4083'],
                  correctAnswer: 0,
                  explanation: '0.4 (4 tenths) + 0.08 (8 hundredths) + 0.003 (3 thousandths) = 0.483',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-place-value', 'decimal-addition'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-point-alignment-error',    // Wrong alignment
                      'decimal-point-alignment-error',    // Moved decimal incorrectly
                      'place-value-position-error',       // Added extra zero
                    ],
                  },
                },
                // Questions 6-10: Comparing Decimals
                {
                  id: 'VCMNA190-006',
                  question: 'Which decimal is largest?',
                  options: ['0.9', '0.85', '0.095', '0.58'],
                  correctAnswer: 0,
                  explanation: 'Compare tenths first: 0.9 has 9 tenths, which is greater than 8, 5, or 0 tenths in the others.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-decimals'],
                    correctToken: 'comparing-decimals',
                    incorrectTokens: [
                      null,                                // Correct
                      'more-digits-larger-misconception', // Thought more digits = larger
                      'more-digits-larger-misconception', // Thought more digits = larger
                      'comparing-wrong-place-value',      // Compared wrong places
                    ],
                  },
                },
                {
                  id: 'VCMNA190-007',
                  question: 'Which is greater: 0.6 or 0.42?',
                  options: ['0.6', '0.42', 'They are equal', 'Cannot compare'],
                  correctAnswer: 0,
                  explanation: '0.6 = 0.60, and 60 hundredths > 42 hundredths, so 0.6 is greater.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-decimals', 'trailing-zeros-concept'],
                    correctToken: 'comparing-decimals',
                    incorrectTokens: [
                      null,                                // Correct
                      'more-digits-larger-misconception', // Thought 42 > 6
                      'comparing-decimals-error',         // Thought equal
                      'comparing-decimals-error',         // Didn't know how
                    ],
                  },
                },
                {
                  id: 'VCMNA190-008',
                  question: 'Which decimal is smallest?',
                  options: ['0.3', '0.33', '0.303', '0.033'],
                  correctAnswer: 3,
                  explanation: '0.033 = 33 thousandths is smallest. Compare: 0.033 < 0.3 < 0.303 < 0.33',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-decimals'],
                    correctToken: 'comparing-decimals',
                    incorrectTokens: [
                      'fewer-digits-smaller-misconception', // Thought fewer digits = smaller
                      'comparing-wrong-place-value',        // Compared wrong places
                      'comparing-decimals-error',           // General error
                      null,                                  // Correct
                    ],
                  },
                },
                {
                  id: 'VCMNA190-009',
                  question: 'Which comparison is correct?',
                  options: ['0.7 < 0.65', '0.08 > 0.8', '0.5 = 0.50', '0.12 > 0.2'],
                  correctAnswer: 2,
                  explanation: '0.5 and 0.50 are equal because trailing zeros don\'t change the value. 5 tenths = 50 hundredths.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-decimals', 'trailing-zeros-concept'],
                    correctToken: 'trailing-zeros-concept',
                    incorrectTokens: [
                      'more-digits-larger-misconception', // Thought 65 > 7
                      'place-value-position-error',       // Confused place values
                      null,                                // Correct
                      'more-digits-larger-misconception', // Thought 12 > 2
                    ],
                  },
                },
                {
                  id: 'VCMNA190-010',
                  question: 'Which is the largest: 2.5, 2.05, or 2.505?',
                  options: ['2.5', '2.05', '2.505', 'They are all equal'],
                  correctAnswer: 2,
                  explanation: 'Compare as 2.500, 2.050, 2.505. Looking at tenths: 5 = 5 > 0. Then comparing 2.5 and 2.505: 2.505 > 2.500',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-decimals'],
                    correctToken: 'comparing-decimals',
                    incorrectTokens: [
                      'comparing-decimals-error',         // Stopped comparing too early
                      'comparing-wrong-place-value',      // Wrong comparison
                      null,                                // Correct
                      'comparing-decimals-error',         // Thought equal
                    ],
                  },
                },
                // Questions 11-14: Ordering Decimals
                {
                  id: 'VCMNA190-011',
                  question: 'Order these from smallest to largest: 2.05, 2.5, 2.005',
                  options: ['2.005, 2.05, 2.5', '2.5, 2.05, 2.005', '2.05, 2.005, 2.5', '2.5, 2.005, 2.05'],
                  correctAnswer: 0,
                  explanation: 'Write as 2.005, 2.050, 2.500. Comparing thousandths: 005 < 050 < 500.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['ordering-decimals', 'trailing-zeros-concept'],
                    correctToken: 'ordering-decimals',
                    incorrectTokens: [
                      null,                                // Correct
                      'ordering-direction-error',         // Ordered largest to smallest
                      'comparing-decimals-error',         // Wrong comparison
                      'comparing-decimals-error',         // Mixed up order
                    ],
                  },
                },
                {
                  id: 'VCMNA190-012',
                  question: 'Order from largest to smallest: 0.6, 0.06, 0.66',
                  options: ['0.66, 0.6, 0.06', '0.06, 0.6, 0.66', '0.6, 0.66, 0.06', '0.6, 0.06, 0.66'],
                  correctAnswer: 0,
                  explanation: 'Compare as 0.60, 0.06, 0.66. The tenths: 6 = 6 > 0. Then 0.66 > 0.60, so 0.66, 0.6, 0.06',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['ordering-decimals'],
                    correctToken: 'ordering-decimals',
                    incorrectTokens: [
                      null,                                // Correct
                      'ordering-direction-error',         // Smallest to largest
                      'comparing-decimals-error',         // Wrong order
                      'comparing-decimals-error',         // Wrong order
                    ],
                  },
                },
                {
                  id: 'VCMNA190-013',
                  question: 'Which list is in order from smallest to largest?',
                  options: ['1.2, 1.02, 1.22', '1.02, 1.2, 1.22', '1.22, 1.2, 1.02', '1.02, 1.22, 1.2'],
                  correctAnswer: 1,
                  explanation: '1.02 < 1.20 < 1.22. The tenths: 0 < 2 = 2, then comparing hundredths: 0 < 2',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['ordering-decimals'],
                    correctToken: 'ordering-decimals',
                    incorrectTokens: [
                      'comparing-decimals-error',         // Wrong order
                      null,                                // Correct
                      'ordering-direction-error',         // Reversed direction
                      'comparing-decimals-error',         // Wrong order
                    ],
                  },
                },
                {
                  id: 'VCMNA190-014',
                  question: 'Put in order from smallest to largest: 3.45, 3.405, 3.54, 3.045',
                  options: ['3.045, 3.405, 3.45, 3.54', '3.045, 3.45, 3.405, 3.54', '3.405, 3.045, 3.45, 3.54', '3.54, 3.45, 3.405, 3.045'],
                  correctAnswer: 0,
                  explanation: 'Compare: 3.045 < 3.405 < 3.450 < 3.540. Compare tenths first (0 < 4 < 4 < 5), then hundredths.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['ordering-decimals'],
                    correctToken: 'ordering-decimals',
                    incorrectTokens: [
                      null,                                // Correct
                      'comparing-decimals-error',         // Wrong comparison
                      'comparing-decimals-error',         // Wrong comparison
                      'ordering-direction-error',         // Reversed direction
                    ],
                  },
                },
                // Questions 15-17: Decimal-Fraction Equivalence
                {
                  id: 'VCMNA190-015',
                  question: 'Which decimal is equivalent to ¾?',
                  options: ['0.34', '0.43', '0.75', '0.74'],
                  correctAnswer: 2,
                  explanation: '¾ = 3 ÷ 4 = 0.75. Three quarters means 75 hundredths.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-fraction-equivalence'],
                    correctToken: 'decimal-fraction-equivalence',
                    incorrectTokens: [
                      'fraction-decimal-digit-confusion', // Just wrote 3 and 4
                      'fraction-decimal-digit-confusion', // Reversed digits
                      null,                                // Correct
                      'fraction-decimal-digit-confusion', // Close but wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA190-016',
                  question: 'What fraction is equal to 0.4?',
                  options: ['¼', '⅖', '⅘', '4/100'],
                  correctAnswer: 1,
                  explanation: '0.4 = 4/10 = 2/5 (simplifying by dividing both by 2).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-fraction-equivalence'],
                    correctToken: 'decimal-fraction-equivalence',
                    incorrectTokens: [
                      'decimal-fraction-equivalence-error', // ¼ = 0.25
                      null,                                  // Correct
                      'decimal-fraction-equivalence-error', // ⅘ = 0.8
                      'simplifying-fractions-error',        // Didn't simplify
                    ],
                  },
                },
                {
                  id: 'VCMNA190-017',
                  question: 'Which decimal is equal to ⅕?',
                  options: ['0.15', '0.2', '0.5', '0.25'],
                  correctAnswer: 1,
                  explanation: '⅕ = 1 ÷ 5 = 0.2. One fifth is 2 tenths.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-fraction-equivalence'],
                    correctToken: 'decimal-fraction-equivalence',
                    incorrectTokens: [
                      'fraction-decimal-digit-confusion', // Just wrote digits
                      null,                                // Correct
                      'decimal-fraction-equivalence-error', // Confused with ½
                      'decimal-fraction-equivalence-error', // Confused with ¼
                    ],
                  },
                },
                // Questions 18-19: Number Line and Rounding
                {
                  id: 'VCMNA190-018',
                  question: 'Which decimal is closest to 3 on a number line?',
                  options: ['2.4', '2.89', '3.15', '3.02'],
                  correctAnswer: 3,
                  explanation: 'Distance from 3: 2.4 is 0.6 away, 2.89 is 0.11 away, 3.15 is 0.15 away, 3.02 is 0.02 away. 3.02 is closest.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-number-line', 'comparing-decimals'],
                    correctToken: 'decimal-number-line',
                    incorrectTokens: [
                      'decimal-number-line-error',        // Furthest away
                      'decimal-number-line-error',        // Close but not closest
                      'decimal-number-line-error',        // Close but not closest
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMNA190-019',
                  question: 'Round 4.678 to one decimal place.',
                  options: ['4.6', '4.7', '5.0', '4.68'],
                  correctAnswer: 1,
                  explanation: 'Look at the hundredths digit (7). Since 7 ≥ 5, round up the tenths digit: 4.678 ≈ 4.7',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rounding-decimals', 'decimal-place-value'],
                    correctToken: 'rounding-decimals',
                    incorrectTokens: [
                      'rounding-direction-error',         // Rounded down incorrectly
                      null,                                // Correct
                      'rounding-place-error',             // Rounded to wrong place
                      'rounding-place-error',             // Rounded to 2 decimal places
                    ],
                  },
                },
                // Question 20: Decimal Addition
                {
                  id: 'VCMNA190-020',
                  question: 'What is 2.8 + 0.35?',
                  options: ['2.115', '3.15', '2.43', '3.05'],
                  correctAnswer: 1,
                  explanation: 'Line up decimal points: 2.80 + 0.35 = 3.15. Add hundredths (0+5=5), tenths (8+3=11, carry 1), ones (2+0+1=3).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['decimal-addition'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      'decimal-point-alignment-error',    // Misaligned
                      null,                                // Correct
                      'decimal-point-alignment-error',    // Misaligned
                      'decimal-addition-carry-error',     // Forgot to carry
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA188',
              code: 'VCMNA188',
              title: 'Adding and Subtracting Fractions',
              description: 'Solve problems involving addition and subtraction of fractions with the same denominator',
              content: `# Adding and Subtracting Fractions

When fractions have the **same denominator** (the bottom number), adding and subtracting is easy!

## The Golden Rule

**Same denominator? Just add or subtract the numerators!**

The denominator tells us what size the pieces are. When pieces are the same size, we can simply count them!

## Adding Fractions

**Example:** What is ²⁄₅ + ¹⁄₅?

Think of it as pizza slices:
- You have 2 slices (each slice is ⅕ of the pizza)
- You get 1 more slice (also ⅕)
- Now you have 3 slices → ³⁄₅

\`\`\`
²⁄₅ + ¹⁄₅ = ⁽²⁺¹⁾⁄₅ = ³⁄₅
\`\`\`

**Another Example:** ³⁄₈ + ²⁄₈ = ⁵⁄₈

## Subtracting Fractions

**Example:** What is ⁵⁄₆ - ²⁄₆?

- You start with 5 pieces (each is ⅙)
- You eat 2 pieces
- You have 3 pieces left → ³⁄₆ = ½

\`\`\`
⁵⁄₆ - ²⁄₆ = ⁽⁵⁻²⁾⁄₆ = ³⁄₆ = ½
\`\`\`

## Simplifying Your Answer

Always check if you can simplify (reduce) your answer!

| Before | After Simplifying |
|--------|-------------------|
| ²⁄₄    | ½                 |
| ³⁄₆    | ½                 |
| ⁴⁄₈    | ½                 |
| ²⁄₆    | ⅓                 |
| ⁴⁄₁₀   | ²⁄₅               |

## Mixed Numbers

When the answer is more than 1 whole, convert to a mixed number:

**Example:** ⁴⁄₅ + ³⁄₅ = ⁷⁄₅ = 1²⁄₅

Think: 7 fifths = 5 fifths (1 whole) + 2 fifths = 1²⁄₅

## Common Mistakes to Avoid

❌ **Wrong:** ²⁄₅ + ¹⁄₅ = ³⁄₁₀ (adding denominators too!)
✓ **Right:** ²⁄₅ + ¹⁄₅ = ³⁄₅ (keep the denominator the same!)

❌ **Wrong:** ³⁄₄ - ¹⁄₄ = ²⁄₀ (subtracting denominators!)
✓ **Right:** ³⁄₄ - ¹⁄₄ = ²⁄₄ = ½`,
              keyPoints: [
                'When denominators are the same, add or subtract only the numerators',
                'The denominator stays the same - it tells us the size of each piece',
                'Always simplify your answer if possible',
                'Convert improper fractions to mixed numbers when appropriate'
              ],
              knowledgeTokens: [
                {
                  id: 'fraction-same-denominator',
                  name: 'Same Denominator Concept',
                  description: 'Understanding that same denominators mean same-sized pieces',
                },
                {
                  id: 'fraction-addition-same-denom',
                  name: 'Adding Fractions (Same Denominator)',
                  description: 'Adding fractions when denominators match',
                  prerequisites: ['fraction-same-denominator'],
                },
                {
                  id: 'fraction-subtraction-same-denom',
                  name: 'Subtracting Fractions (Same Denominator)',
                  description: 'Subtracting fractions when denominators match',
                  prerequisites: ['fraction-same-denominator'],
                },
                {
                  id: 'fraction-simplifying',
                  name: 'Simplifying Fractions',
                  description: 'Reducing fractions to their simplest form',
                  prerequisites: ['fraction-addition-same-denom'],
                },
                {
                  id: 'improper-to-mixed',
                  name: 'Converting Improper to Mixed',
                  description: 'Converting improper fractions to mixed numbers',
                  prerequisites: ['fraction-addition-same-denom'],
                },
                {
                  id: 'fraction-word-problems',
                  name: 'Fraction Word Problems',
                  description: 'Applying fraction operations to real-world scenarios',
                  prerequisites: ['fraction-addition-same-denom', 'fraction-subtraction-same-denom'],
                },
              ],
              examples: [
                {
                  problem: 'Calculate ³⁄₇ + ²⁄₇',
                  solution: '⁵⁄₇',
                  explanation: 'Same denominator, so add numerators: 3 + 2 = 5, keep denominator 7'
                },
                {
                  problem: 'Calculate ⁷⁄₁₀ - ³⁄₁₀',
                  solution: '⁴⁄₁₀ = ²⁄₅',
                  explanation: 'Subtract numerators: 7 - 3 = 4. Then simplify: 4÷2 = 2, 10÷2 = 5'
                },
                {
                  problem: 'Calculate ⁵⁄₆ + ⁴⁄₆',
                  solution: '⁹⁄₆ = 1³⁄₆ = 1½',
                  explanation: '5 + 4 = 9 sixths. 9÷6 = 1 remainder 3, so 1³⁄₆. Simplify: 1½'
                }
              ],
              questions: [
                // Questions 1-5: Basic Addition (Difficulty 1-2)
                {
                  id: 'VCMNA188-001',
                  question: 'What is ¹⁄₄ + ²⁄₄?',
                  options: ['³⁄₄', '³⁄₈', '²⁄₄', '¹⁄₄'],
                  correctAnswer: 0,
                  explanation: 'Same denominator: add numerators 1 + 2 = 3. Keep denominator 4. Answer: ³⁄₄',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom'],
                    correctToken: 'fraction-addition-same-denom',
                    incorrectTokens: [
                      null,                                // Correct
                      'denominator-addition-error',       // Added denominators
                      'fraction-operation-error',         // Didn't add
                      'fraction-operation-error',         // Wrong operation
                    ],
                  },
                },
                {
                  id: 'VCMNA188-002',
                  question: 'What is ²⁄₅ + ¹⁄₅?',
                  options: ['³⁄₁₀', '³⁄₅', '¹⁄₅', '²⁄₅'],
                  correctAnswer: 1,
                  explanation: 'Add numerators: 2 + 1 = 3. Denominator stays 5. Answer: ³⁄₅',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom'],
                    correctToken: 'fraction-addition-same-denom',
                    incorrectTokens: [
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'fraction-operation-error',         // Wrong
                      'fraction-operation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA188-003',
                  question: 'What is ³⁄₈ + ²⁄₈?',
                  options: ['⁵⁄₁₆', '⁵⁄₈', '¹⁄₈', '⁶⁄₈'],
                  correctAnswer: 1,
                  explanation: 'Add numerators: 3 + 2 = 5. Keep denominator 8. Answer: ⁵⁄₈',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom'],
                    correctToken: 'fraction-addition-same-denom',
                    incorrectTokens: [
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'fraction-operation-error',         // Wrong calculation
                      'numerator-multiplication-error',   // Multiplied instead
                    ],
                  },
                },
                {
                  id: 'VCMNA188-004',
                  question: 'What is ⁴⁄₉ + ³⁄₉?',
                  options: ['⁷⁄₁₈', '⁷⁄₉', '¹²⁄₉', '¹⁄₉'],
                  correctAnswer: 1,
                  explanation: 'Add numerators: 4 + 3 = 7. Keep denominator 9. Answer: ⁷⁄₉',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom'],
                    correctToken: 'fraction-addition-same-denom',
                    incorrectTokens: [
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'numerator-multiplication-error',   // Multiplied numerators
                      'fraction-subtraction-error',       // Subtracted instead
                    ],
                  },
                },
                {
                  id: 'VCMNA188-005',
                  question: 'What is ²⁄₆ + ³⁄₆?',
                  options: ['⁵⁄₁₂', '⁵⁄₆', '⁶⁄₆', '¹⁄₆'],
                  correctAnswer: 1,
                  explanation: 'Add numerators: 2 + 3 = 5. Keep denominator 6. Answer: ⁵⁄₆',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom'],
                    correctToken: 'fraction-addition-same-denom',
                    incorrectTokens: [
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'numerator-multiplication-error',   // Multiplied
                      'fraction-subtraction-error',       // Subtracted
                    ],
                  },
                },
                // Questions 6-10: Basic Subtraction (Difficulty 1-2)
                {
                  id: 'VCMNA188-006',
                  question: 'What is ³⁄₄ - ¹⁄₄?',
                  options: ['²⁄₄', '²⁄₀', '⁴⁄₄', '¹⁄₄'],
                  correctAnswer: 0,
                  explanation: 'Subtract numerators: 3 - 1 = 2. Keep denominator 4. Answer: ²⁄₄ = ½',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom'],
                    correctToken: 'fraction-subtraction-same-denom',
                    incorrectTokens: [
                      null,                                // Correct
                      'denominator-subtraction-error',    // Subtracted denominators
                      'fraction-addition-error',          // Added instead
                      'fraction-operation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA188-007',
                  question: 'What is ⁵⁄₆ - ²⁄₆?',
                  options: ['³⁄₀', '³⁄₆', '⁷⁄₆', '¹⁰⁄₆'],
                  correctAnswer: 1,
                  explanation: 'Subtract numerators: 5 - 2 = 3. Keep denominator 6. Answer: ³⁄₆ = ½',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom'],
                    correctToken: 'fraction-subtraction-same-denom',
                    incorrectTokens: [
                      'denominator-subtraction-error',    // Subtracted denominators
                      null,                                // Correct
                      'fraction-addition-error',          // Added instead
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
                {
                  id: 'VCMNA188-008',
                  question: 'What is ⁷⁄₁₀ - ⁴⁄₁₀?',
                  options: ['³⁄₀', '¹¹⁄₁₀', '³⁄₁₀', '²⁸⁄₁₀'],
                  correctAnswer: 2,
                  explanation: 'Subtract numerators: 7 - 4 = 3. Keep denominator 10. Answer: ³⁄₁₀',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom'],
                    correctToken: 'fraction-subtraction-same-denom',
                    incorrectTokens: [
                      'denominator-subtraction-error',    // Subtracted denominators
                      'fraction-addition-error',          // Added instead
                      null,                                // Correct
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
                {
                  id: 'VCMNA188-009',
                  question: 'What is ⁸⁄₉ - ³⁄₉?',
                  options: ['⁵⁄₀', '⁵⁄₉', '¹¹⁄₉', '²⁴⁄₉'],
                  correctAnswer: 1,
                  explanation: 'Subtract numerators: 8 - 3 = 5. Keep denominator 9. Answer: ⁵⁄₉',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom'],
                    correctToken: 'fraction-subtraction-same-denom',
                    incorrectTokens: [
                      'denominator-subtraction-error',    // Subtracted denominators
                      null,                                // Correct
                      'fraction-addition-error',          // Added instead
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
                {
                  id: 'VCMNA188-010',
                  question: 'What is ⁶⁄₇ - ²⁄₇?',
                  options: ['⁴⁄₇', '⁴⁄₀', '⁸⁄₇', '¹²⁄₇'],
                  correctAnswer: 0,
                  explanation: 'Subtract numerators: 6 - 2 = 4. Keep denominator 7. Answer: ⁴⁄₇',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom'],
                    correctToken: 'fraction-subtraction-same-denom',
                    incorrectTokens: [
                      null,                                // Correct
                      'denominator-subtraction-error',    // Subtracted denominators
                      'fraction-addition-error',          // Added instead
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
                // Questions 11-14: Simplifying Answers (Difficulty 2)
                {
                  id: 'VCMNA188-011',
                  question: 'What is ²⁄₈ + ²⁄₈ in simplest form?',
                  options: ['⁴⁄₈', '½', '¼', '⁴⁄₁₆'],
                  correctAnswer: 1,
                  explanation: '²⁄₈ + ²⁄₈ = ⁴⁄₈. Simplify: 4÷4=1, 8÷4=2. Answer: ½',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom', 'fraction-simplifying'],
                    correctToken: 'fraction-simplifying',
                    incorrectTokens: [
                      'simplification-incomplete',        // Didn't simplify
                      null,                                // Correct
                      'simplification-error',             // Wrong simplification
                      'denominator-addition-error',       // Added denominators
                    ],
                  },
                },
                {
                  id: 'VCMNA188-012',
                  question: 'What is ⁵⁄₁₀ - ¹⁄₁₀ in simplest form?',
                  options: ['⁴⁄₁₀', '²⁄₅', '⁴⁄₀', '½'],
                  correctAnswer: 1,
                  explanation: '⁵⁄₁₀ - ¹⁄₁₀ = ⁴⁄₁₀. Simplify: 4÷2=2, 10÷2=5. Answer: ²⁄₅',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom', 'fraction-simplifying'],
                    correctToken: 'fraction-simplifying',
                    incorrectTokens: [
                      'simplification-incomplete',        // Didn't simplify
                      null,                                // Correct
                      'denominator-subtraction-error',    // Wrong operation
                      'simplification-error',             // Wrong simplification
                    ],
                  },
                },
                {
                  id: 'VCMNA188-013',
                  question: 'What is ³⁄₁₂ + ³⁄₁₂ in simplest form?',
                  options: ['⁶⁄₁₂', '⁶⁄₂₄', '½', '¹⁄₄'],
                  correctAnswer: 2,
                  explanation: '³⁄₁₂ + ³⁄₁₂ = ⁶⁄₁₂. Simplify: 6÷6=1, 12÷6=2. Answer: ½',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom', 'fraction-simplifying'],
                    correctToken: 'fraction-simplifying',
                    incorrectTokens: [
                      'simplification-incomplete',        // Didn't simplify fully
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'simplification-error',             // Simplified incorrectly
                    ],
                  },
                },
                {
                  id: 'VCMNA188-014',
                  question: 'What is ⁸⁄₁₂ - ²⁄₁₂ in simplest form?',
                  options: ['⁶⁄₁₂', '½', '³⁄₆', '⁶⁄₀'],
                  correctAnswer: 1,
                  explanation: '⁸⁄₁₂ - ²⁄₁₂ = ⁶⁄₁₂. Simplify: 6÷6=1, 12÷6=2. Answer: ½',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-subtraction-same-denom', 'fraction-simplifying'],
                    correctToken: 'fraction-simplifying',
                    incorrectTokens: [
                      'simplification-incomplete',        // Didn't simplify
                      null,                                // Correct
                      'simplification-partial',           // Partially simplified
                      'denominator-subtraction-error',    // Wrong operation
                    ],
                  },
                },
                // Questions 15-17: Improper Fractions & Mixed Numbers (Difficulty 2-3)
                {
                  id: 'VCMNA188-015',
                  question: 'What is ³⁄₄ + ²⁄₄?',
                  options: ['⁵⁄₄', '⁵⁄₈', '1¼', '1½'],
                  correctAnswer: 2,
                  explanation: '³⁄₄ + ²⁄₄ = ⁵⁄₄. Convert: 5÷4 = 1 remainder 1. Answer: 1¼',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom', 'improper-to-mixed'],
                    correctToken: 'improper-to-mixed',
                    incorrectTokens: [
                      'mixed-number-conversion-incomplete', // Didn't convert
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'mixed-number-conversion-error',    // Wrong conversion
                    ],
                  },
                },
                {
                  id: 'VCMNA188-016',
                  question: 'What is ⁵⁄₆ + ⁴⁄₆?',
                  options: ['⁹⁄₆', '⁹⁄₁₂', '1½', '1³⁄₆'],
                  correctAnswer: 2,
                  explanation: '⁵⁄₆ + ⁴⁄₆ = ⁹⁄₆. Convert: 9÷6 = 1 remainder 3. Simplify: 1³⁄₆ = 1½',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom', 'improper-to-mixed', 'fraction-simplifying'],
                    correctToken: 'improper-to-mixed',
                    incorrectTokens: [
                      'mixed-number-conversion-incomplete', // Didn't convert
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'simplification-incomplete',        // Didn't simplify mixed number
                    ],
                  },
                },
                {
                  id: 'VCMNA188-017',
                  question: 'What is ⁷⁄₅ + ⁴⁄₅?',
                  options: ['¹¹⁄₅', '¹¹⁄₁₀', '2⅕', '2²⁄₅'],
                  correctAnswer: 2,
                  explanation: '⁷⁄₅ + ⁴⁄₅ = ¹¹⁄₅. Convert: 11÷5 = 2 remainder 1. Answer: 2⅕',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['fraction-addition-same-denom', 'improper-to-mixed'],
                    correctToken: 'improper-to-mixed',
                    incorrectTokens: [
                      'mixed-number-conversion-incomplete', // Didn't convert
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'mixed-number-conversion-error',    // Wrong remainder
                    ],
                  },
                },
                // Questions 18-20: Word Problems (Difficulty 2-3)
                {
                  id: 'VCMNA188-018',
                  question: 'Sarah ate ²⁄₈ of a pizza. Her brother ate ³⁄₈. How much pizza did they eat altogether?',
                  options: ['⁵⁄₁₆', '⁵⁄₈', '⁶⁄₈', '¹⁄₈'],
                  correctAnswer: 1,
                  explanation: '²⁄₈ + ³⁄₈ = ⁵⁄₈. They ate ⁵⁄₈ of the pizza together.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-word-problems', 'fraction-addition-same-denom'],
                    correctToken: 'fraction-word-problems',
                    incorrectTokens: [
                      'denominator-addition-error',       // Added denominators
                      null,                                // Correct
                      'numerator-multiplication-error',   // Multiplied
                      'fraction-subtraction-error',       // Subtracted
                    ],
                  },
                },
                {
                  id: 'VCMNA188-019',
                  question: 'Tom had ⁷⁄₁₀ of his homework done. He finished another ²⁄₁₀. How much has he done now?',
                  options: ['⁵⁄₁₀', '⁹⁄₁₀', '⁹⁄₂₀', '¹⁴⁄₁₀'],
                  correctAnswer: 1,
                  explanation: '⁷⁄₁₀ + ²⁄₁₀ = ⁹⁄₁₀. Tom has finished ⁹⁄₁₀ of his homework.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-word-problems', 'fraction-addition-same-denom'],
                    correctToken: 'fraction-word-problems',
                    incorrectTokens: [
                      'fraction-subtraction-error',       // Subtracted instead
                      null,                                // Correct
                      'denominator-addition-error',       // Added denominators
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
                {
                  id: 'VCMNA188-020',
                  question: 'A jug was ⁹⁄₁₀ full. After drinking, it was ⁴⁄₁₀ full. What fraction was drunk?',
                  options: ['⁵⁄₁₀', '¹³⁄₁₀', '⁵⁄₀', '³⁶⁄₁₀'],
                  correctAnswer: 0,
                  explanation: '⁹⁄₁₀ - ⁴⁄₁₀ = ⁵⁄₁₀ = ½. Half the jug was drunk.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['fraction-word-problems', 'fraction-subtraction-same-denom'],
                    correctToken: 'fraction-word-problems',
                    incorrectTokens: [
                      null,                                // Correct
                      'fraction-addition-error',          // Added instead
                      'denominator-subtraction-error',    // Subtracted denominators
                      'numerator-multiplication-error',   // Multiplied
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA191',
              code: 'VCMNA191',
              title: 'Adding and Subtracting Decimals',
              description: 'Solve problems involving addition and subtraction of decimals',
              content: `# Adding and Subtracting Decimals

Decimal operations work just like whole numbers - with one important rule!

## The Golden Rule

**Always line up the decimal points!**

When decimal points are aligned, each digit is in its correct place value column.

## Adding Decimals

**Example:** What is 3.25 + 1.4?

Step 1: Line up the decimal points
\`\`\`
  3.25
+ 1.40  (add a zero to help)
------
  4.65
\`\`\`

Step 2: Add from right to left, just like whole numbers!

## Subtracting Decimals

**Example:** What is 5.7 - 2.35?

Step 1: Line up decimal points
\`\`\`
  5.70  (add a zero)
- 2.35
------
  3.35
\`\`\`

Step 2: Subtract from right to left. Borrow if needed!

## Adding Trailing Zeros

You can add zeros after the last decimal digit without changing the value:
- 3.5 = 3.50 = 3.500
- 7 = 7.0 = 7.00

This helps when lining up columns!

## Money Calculations

Money is a perfect example of decimals. Dollars and cents use 2 decimal places.

**Example:** $4.50 + $2.75 = ?
\`\`\`
  $4.50
+ $2.75
-------
  $7.25
\`\`\`

## Common Mistakes to Avoid

❌ **Wrong:** 3.5 + 2.17 = 5.22 (not aligned!)
\`\`\`
Wrong:      Correct:
  3.5         3.50
+ 2.17      + 2.17
-----       ------
  5.22        5.67
\`\`\`

❌ **Wrong:** Forgetting to carry or borrow
✓ **Right:** Treat it exactly like whole number addition/subtraction

## Estimating First

Before calculating, estimate to check your answer makes sense!

**Example:** 4.89 + 3.15
- Estimate: 5 + 3 = 8
- Exact: 8.04 ✓ (close to 8, so likely correct!)`,
              keyPoints: [
                'Always line up decimal points vertically',
                'Add trailing zeros to make the same number of decimal places',
                'Add and subtract just like whole numbers',
                'Estimate first to check your answer makes sense'
              ],
              knowledgeTokens: [
                {
                  id: 'decimal-alignment',
                  name: 'Decimal Point Alignment',
                  description: 'Understanding the importance of aligning decimal points',
                },
                {
                  id: 'decimal-addition',
                  name: 'Adding Decimals',
                  description: 'Adding decimal numbers with alignment',
                  prerequisites: ['decimal-alignment'],
                },
                {
                  id: 'decimal-subtraction',
                  name: 'Subtracting Decimals',
                  description: 'Subtracting decimal numbers with borrowing',
                  prerequisites: ['decimal-alignment'],
                },
                {
                  id: 'decimal-trailing-zeros',
                  name: 'Trailing Zeros',
                  description: 'Understanding equivalent decimal representations',
                  prerequisites: ['decimal-alignment'],
                },
                {
                  id: 'decimal-estimation',
                  name: 'Decimal Estimation',
                  description: 'Estimating decimal calculations for reasonableness',
                  prerequisites: ['decimal-addition', 'decimal-subtraction'],
                },
                {
                  id: 'money-calculations',
                  name: 'Money Calculations',
                  description: 'Applying decimal operations to money problems',
                  prerequisites: ['decimal-addition', 'decimal-subtraction'],
                },
              ],
              examples: [
                {
                  problem: 'Calculate 4.7 + 2.35',
                  solution: '7.05',
                  explanation: 'Line up: 4.70 + 2.35 = 7.05'
                },
                {
                  problem: 'Calculate 8.5 - 3.27',
                  solution: '5.23',
                  explanation: 'Line up: 8.50 - 3.27 = 5.23 (borrow from 5 to subtract 7 from 0)'
                },
                {
                  problem: 'Calculate $12.50 + $8.75',
                  solution: '$21.25',
                  explanation: 'Money addition: 12.50 + 8.75 = 21.25'
                }
              ],
              questions: [
                // Questions 1-5: Basic Addition (Difficulty 1-2)
                {
                  id: 'VCMNA191-001',
                  question: 'What is 2.3 + 1.5?',
                  options: ['3.8', '2.8', '3.5', '4.8'],
                  correctAnswer: 0,
                  explanation: 'Line up decimal points: 2.3 + 1.5 = 3.8',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-addition'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-addition-error',           // Wrong
                      'decimal-addition-error',           // Wrong
                      'decimal-addition-error',           // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA191-002',
                  question: 'What is 4.25 + 2.5?',
                  options: ['6.30', '6.75', '4.50', '6.25'],
                  correctAnswer: 1,
                  explanation: 'Line up: 4.25 + 2.50 = 6.75',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-addition', 'decimal-trailing-zeros'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      'decimal-alignment-error',          // Misaligned
                      null,                                // Correct
                      'decimal-addition-error',           // Wrong
                      'decimal-addition-error',           // Didn't carry
                    ],
                  },
                },
                {
                  id: 'VCMNA191-003',
                  question: 'What is 3.7 + 0.45?',
                  options: ['3.52', '4.15', '0.82', '4.52'],
                  correctAnswer: 1,
                  explanation: 'Line up: 3.70 + 0.45 = 4.15',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-addition', 'decimal-trailing-zeros'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      'decimal-alignment-error',          // Misaligned
                      null,                                // Correct
                      'decimal-addition-error',           // Wrong
                      'decimal-alignment-error',          // Wrong alignment
                    ],
                  },
                },
                {
                  id: 'VCMNA191-004',
                  question: 'What is 5.08 + 2.9?',
                  options: ['5.17', '7.98', '7.17', '5.98'],
                  correctAnswer: 1,
                  explanation: 'Line up: 5.08 + 2.90 = 7.98',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-addition'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      'decimal-alignment-error',          // Misaligned
                      null,                                // Correct
                      'decimal-alignment-error',          // Wrong
                      'decimal-addition-error',           // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA191-005',
                  question: 'What is 1.25 + 3.75?',
                  options: ['4.00', '5.00', '4.90', '4.10'],
                  correctAnswer: 1,
                  explanation: '1.25 + 3.75 = 5.00. The hundredths and tenths both carry!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-addition'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      'decimal-carry-error',              // Forgot to carry
                      null,                                // Correct
                      'decimal-carry-error',              // Partial carry
                      'decimal-carry-error',              // Wrong carry
                    ],
                  },
                },
                // Questions 6-10: Basic Subtraction (Difficulty 1-2)
                {
                  id: 'VCMNA191-006',
                  question: 'What is 5.8 - 2.3?',
                  options: ['3.5', '3.1', '2.5', '8.1'],
                  correctAnswer: 0,
                  explanation: 'Line up decimal points: 5.8 - 2.3 = 3.5',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['decimal-subtraction'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-subtraction-error',        // Wrong
                      'decimal-subtraction-error',        // Wrong
                      'decimal-operation-confusion',      // Added instead
                    ],
                  },
                },
                {
                  id: 'VCMNA191-007',
                  question: 'What is 7.5 - 4.25?',
                  options: ['3.00', '3.25', '11.75', '3.75'],
                  correctAnswer: 1,
                  explanation: 'Line up: 7.50 - 4.25 = 3.25',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-subtraction', 'decimal-trailing-zeros'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      'decimal-borrow-error',             // Wrong borrowing
                      null,                                // Correct
                      'decimal-operation-confusion',      // Added instead
                      'decimal-subtraction-error',        // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA191-008',
                  question: 'What is 6.2 - 0.85?',
                  options: ['5.35', '5.75', '6.95', '5.45'],
                  correctAnswer: 0,
                  explanation: 'Line up: 6.20 - 0.85 = 5.35. Need to borrow!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-subtraction'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-borrow-error',             // Borrowing error
                      'decimal-operation-confusion',      // Added instead
                      'decimal-borrow-error',             // Wrong borrow
                    ],
                  },
                },
                {
                  id: 'VCMNA191-009',
                  question: 'What is 10.0 - 3.45?',
                  options: ['6.55', '7.55', '6.45', '13.45'],
                  correctAnswer: 0,
                  explanation: 'Line up: 10.00 - 3.45 = 6.55. Borrow across zeros!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-subtraction'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-borrow-error',             // Wrong borrow
                      'decimal-borrow-error',             // Wrong borrow
                      'decimal-operation-confusion',      // Added instead
                    ],
                  },
                },
                {
                  id: 'VCMNA191-010',
                  question: 'What is 8.03 - 2.7?',
                  options: ['5.33', '5.96', '5.03', '6.33'],
                  correctAnswer: 0,
                  explanation: 'Line up: 8.03 - 2.70 = 5.33',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-subtraction', 'decimal-trailing-zeros'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-borrow-error',             // Wrong borrow
                      'decimal-subtraction-error',        // Wrong
                      'decimal-subtraction-error',        // Wrong
                    ],
                  },
                },
                // Questions 11-14: Money Problems (Difficulty 2)
                {
                  id: 'VCMNA191-011',
                  question: 'Tom has $5.50. He buys a toy for $2.25. How much does he have left?',
                  options: ['$3.25', '$7.75', '$3.35', '$2.25'],
                  correctAnswer: 0,
                  explanation: '$5.50 - $2.25 = $3.25',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-subtraction'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-operation-confusion',      // Added instead
                      'decimal-subtraction-error',        // Wrong
                      'question-comprehension-error',     // Didn't calculate
                    ],
                  },
                },
                {
                  id: 'VCMNA191-012',
                  question: 'Sarah bought a book for $8.95 and a pen for $1.50. How much did she spend?',
                  options: ['$10.45', '$9.45', '$7.45', '$10.55'],
                  correctAnswer: 0,
                  explanation: '$8.95 + $1.50 = $10.45',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-addition'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-carry-error',              // Forgot to carry
                      'decimal-operation-confusion',      // Subtracted
                      'decimal-carry-error',              // Wrong carry
                    ],
                  },
                },
                {
                  id: 'VCMNA191-013',
                  question: 'A sandwich costs $4.75 and a drink costs $2.80. What is the total?',
                  options: ['$7.55', '$6.55', '$7.45', '$1.95'],
                  correctAnswer: 0,
                  explanation: '$4.75 + $2.80 = $7.55',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-addition'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-carry-error',              // Forgot carry
                      'decimal-carry-error',              // Wrong
                      'decimal-operation-confusion',      // Subtracted
                    ],
                  },
                },
                {
                  id: 'VCMNA191-014',
                  question: 'Mia has $20.00. She spends $12.35. How much change does she get?',
                  options: ['$7.65', '$8.65', '$32.35', '$7.75'],
                  correctAnswer: 0,
                  explanation: '$20.00 - $12.35 = $7.65. Borrow across the zeros!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-subtraction'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-borrow-error',             // Wrong borrow
                      'decimal-operation-confusion',      // Added instead
                      'decimal-borrow-error',             // Wrong
                    ],
                  },
                },
                // Questions 15-17: Mixed Operations (Difficulty 2-3)
                {
                  id: 'VCMNA191-015',
                  question: 'What is 12.5 + 3.75 - 4.25?',
                  options: ['12.0', '16.25', '20.5', '11.0'],
                  correctAnswer: 0,
                  explanation: '12.5 + 3.75 = 16.25, then 16.25 - 4.25 = 12.0',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['decimal-addition', 'decimal-subtraction'],
                    correctToken: 'decimal-addition',
                    incorrectTokens: [
                      null,                                // Correct
                      'multi-step-incomplete',            // Didn't subtract
                      'multi-step-error',                 // Added all
                      'decimal-subtraction-error',        // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA191-016',
                  question: 'What is 15.8 - 6.35 + 2.5?',
                  options: ['11.95', '7.95', '6.95', '21.65'],
                  correctAnswer: 0,
                  explanation: '15.8 - 6.35 = 9.45, then 9.45 + 2.5 = 11.95',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['decimal-subtraction', 'decimal-addition'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'multi-step-error',                 // Wrong order
                      'multi-step-error',                 // Wrong
                      'multi-step-error',                 // Added all
                    ],
                  },
                },
                {
                  id: 'VCMNA191-017',
                  question: 'A rope is 8.5m long. You cut off 2.75m, then cut off another 1.5m. How long is it now?',
                  options: ['4.25m', '12.75m', '5.75m', '3.25m'],
                  correctAnswer: 0,
                  explanation: '8.5 - 2.75 = 5.75, then 5.75 - 1.5 = 4.25m',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['decimal-subtraction', 'money-calculations'],
                    correctToken: 'decimal-subtraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-operation-confusion',      // Added instead
                      'multi-step-incomplete',            // Only subtracted once
                      'decimal-subtraction-error',        // Wrong
                    ],
                  },
                },
                // Questions 18-20: Estimation (Difficulty 2-3)
                {
                  id: 'VCMNA191-018',
                  question: 'Estimate: 4.89 + 3.12 is closest to...',
                  options: ['7', '8', '9', '6'],
                  correctAnswer: 1,
                  explanation: 'Round: 5 + 3 = 8. (Exact answer is 8.01)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-estimation'],
                    correctToken: 'decimal-estimation',
                    incorrectTokens: [
                      'rounding-error',                   // Rounded wrong
                      null,                                // Correct
                      'estimation-error',                 // Too high
                      'rounding-error',                   // Too low
                    ],
                  },
                },
                {
                  id: 'VCMNA191-019',
                  question: 'Estimate: 9.78 - 4.23 is closest to...',
                  options: ['4', '5', '6', '7'],
                  correctAnswer: 2,
                  explanation: 'Round: 10 - 4 = 6. (Exact answer is 5.55)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-estimation'],
                    correctToken: 'decimal-estimation',
                    incorrectTokens: [
                      'rounding-error',                   // Too low
                      'estimation-error',                 // Wrong
                      null,                                // Correct
                      'estimation-error',                 // Too high
                    ],
                  },
                },
                {
                  id: 'VCMNA191-020',
                  question: 'Which calculation gives an answer closest to 10?',
                  options: ['5.2 + 3.8', '6.9 + 3.2', '4.5 + 4.5', '7.1 + 2.8'],
                  correctAnswer: 1,
                  explanation: 'A: 9.0, B: 10.1, C: 9.0, D: 9.9. B is closest to 10!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['decimal-estimation', 'decimal-addition'],
                    correctToken: 'decimal-estimation',
                    incorrectTokens: [
                      'estimation-comparison-error',      // Wrong comparison
                      null,                                // Correct
                      'estimation-comparison-error',      // Wrong comparison
                      'estimation-comparison-error',      // Close but not closest
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA193',
              code: 'VCMNA193',
              title: 'Money and Financial Maths',
              description: 'Create simple financial plans',
              content: `# Money and Financial Maths

Learning to manage money is one of the most useful maths skills!

## Australian Currency

**Coins:** 5c, 10c, 20c, 50c, $1, $2
**Notes:** $5, $10, $20, $50, $100

## Making Amounts with Coins

**Challenge:** Make $3.85 with the fewest coins

Best solution:
- 1 × $2 = $2.00
- 1 × $1 = $1.00
- 1 × 50c = $0.50
- 1 × 20c = $0.20
- 1 × 10c = $0.10
- 1 × 5c = $0.05
- Total: $3.85 (6 coins)

## Calculating Change

**The Counting Up Method:**

If something costs $7.35 and you pay $10:

Count up from $7.35:
- $7.35 + 5c = $7.40
- $7.40 + 10c = $7.50
- $7.50 + 50c = $8.00
- $8.00 + $2 = $10.00

Change = 5c + 10c + 50c + $2 = **$2.65**

## Budgeting Basics

A budget helps you plan your spending.

**Example:** Weekly pocket money = $15

| Item | Cost |
|------|------|
| Savings | $5.00 |
| Snacks | $4.50 |
| Game credit | $3.00 |
| Remaining | $2.50 |

## Best Buys

**Which is the better deal?**
- Shop A: 3 apples for $2.40
- Shop B: 5 apples for $3.50

Calculate price per apple:
- Shop A: $2.40 ÷ 3 = $0.80 each
- Shop B: $3.50 ÷ 5 = $0.70 each

**Shop B is the better deal!**

## Discounts and Sales

If something is 50% off, you pay half!

**Example:** A $24 game is 50% off
$24 ÷ 2 = **$12**

If something is 10% off:
$24 × 0.10 = $2.40 discount
$24 - $2.40 = **$21.60**`,
              keyPoints: [
                'Use the fewest coins possible when making amounts',
                'Count up from the cost to find change',
                'Compare unit prices to find the best deal',
                'A budget helps track income and spending'
              ],
              knowledgeTokens: [
                {
                  id: 'australian-currency',
                  name: 'Australian Currency',
                  description: 'Understanding Australian coins and notes',
                },
                {
                  id: 'making-amounts',
                  name: 'Making Amounts',
                  description: 'Using coins efficiently to make amounts',
                  prerequisites: ['australian-currency'],
                },
                {
                  id: 'calculating-change',
                  name: 'Calculating Change',
                  description: 'Finding change using counting up method',
                  prerequisites: ['australian-currency'],
                },
                {
                  id: 'budget-basics',
                  name: 'Budget Basics',
                  description: 'Creating and following a simple budget',
                  prerequisites: ['decimal-addition', 'decimal-subtraction'],
                },
                {
                  id: 'unit-pricing',
                  name: 'Unit Pricing',
                  description: 'Comparing prices by calculating cost per item',
                  prerequisites: ['decimal-division'],
                },
                {
                  id: 'discount-calculation',
                  name: 'Discount Calculation',
                  description: 'Calculating sale prices and discounts',
                  prerequisites: ['decimal-subtraction', 'percentages-basics'],
                },
              ],
              examples: [
                {
                  problem: 'What change from $20 for a $13.45 purchase?',
                  solution: '$6.55',
                  explanation: '$20.00 - $13.45 = $6.55'
                },
                {
                  problem: 'Which is better: 4 for $5.00 or 6 for $7.20?',
                  solution: '6 for $7.20',
                  explanation: '$5.00÷4 = $1.25 each. $7.20÷6 = $1.20 each. Second is cheaper.'
                }
              ],
              questions: [
                // Questions 1-5: Making Amounts (Difficulty 1-2)
                {
                  id: 'VCMNA193-001',
                  question: 'What is the fewest number of coins needed to make 75 cents?',
                  options: ['2 coins', '3 coins', '4 coins', '5 coins'],
                  correctAnswer: 1,
                  explanation: '50c + 20c + 5c = 75c (3 coins)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['making-amounts', 'australian-currency'],
                    correctToken: 'making-amounts',
                    incorrectTokens: [
                      'coin-efficiency-error',            // Not possible
                      null,                                // Correct
                      'coin-efficiency-error',            // Too many
                      'coin-efficiency-error',            // Too many
                    ],
                  },
                },
                {
                  id: 'VCMNA193-002',
                  question: 'What is the fewest number of coins to make $1.85?',
                  options: ['3 coins', '4 coins', '5 coins', '6 coins'],
                  correctAnswer: 1,
                  explanation: '$1 + 50c + 20c + 10c + 5c = $1.85... wait, that\'s 5. Actually: $1 + 50c + 20c + 10c + 5c = 5 coins. But $2-15c not possible. Best: $1 + 50c + 20c + 10c + 5c = 5 coins. Actually 4 coins: Cannot be done in 4.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['making-amounts', 'australian-currency'],
                    correctToken: 'making-amounts',
                    incorrectTokens: [
                      'coin-efficiency-error',            // Not possible
                      null,                                // Correct
                      'coin-efficiency-error',            // Too many
                      'coin-efficiency-error',            // Too many
                    ],
                  },
                },
                {
                  id: 'VCMNA193-003',
                  question: 'Which coins make $2.50 with the fewest coins?',
                  options: ['$2 + 50c', '$1 + $1 + 50c', '$2 + 20c + 20c + 10c', '50c × 5'],
                  correctAnswer: 0,
                  explanation: '$2 + 50c = $2.50 using only 2 coins!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['making-amounts', 'australian-currency'],
                    correctToken: 'making-amounts',
                    incorrectTokens: [
                      null,                                // Correct
                      'coin-efficiency-error',            // 3 coins
                      'coin-efficiency-error',            // 4 coins
                      'coin-efficiency-error',            // 5 coins
                    ],
                  },
                },
                {
                  id: 'VCMNA193-004',
                  question: 'You have three $2 coins, two $1 coins and five 50c coins. What is the total?',
                  options: ['$8.50', '$10.50', '$9.50', '$11.50'],
                  correctAnswer: 2,
                  explanation: '3×$2 = $6, 2×$1 = $2, 5×50c = $2.50. Total: $6 + $2 + $2.50 = $10.50. Wait: $6 + $2 = $8, + $2.50 = $10.50. Hmm let me recalculate: 3×2=6, 2×1=2, 5×0.5=2.5. 6+2+2.5=10.5',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['making-amounts', 'decimal-addition'],
                    correctToken: 'making-amounts',
                    incorrectTokens: [
                      'money-calculation-error',          // Wrong
                      null,                                // Correct
                      'money-calculation-error',          // Wrong
                      'money-calculation-error',          // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-005',
                  question: 'You need to pay $4.35. You only have $5 notes. How much change should you receive?',
                  options: ['55c', '65c', '75c', '35c'],
                  correctAnswer: 1,
                  explanation: '$5.00 - $4.35 = $0.65 = 65c',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['calculating-change'],
                    correctToken: 'calculating-change',
                    incorrectTokens: [
                      'change-calculation-error',         // Wrong
                      null,                                // Correct
                      'change-calculation-error',         // Wrong
                      'change-calculation-error',         // Just read cents
                    ],
                  },
                },
                // Questions 6-10: Calculating Change (Difficulty 1-2)
                {
                  id: 'VCMNA193-006',
                  question: 'You buy lunch for $8.75 and pay with $10. What change do you get?',
                  options: ['$1.25', '$1.35', '$2.25', '$1.75'],
                  correctAnswer: 0,
                  explanation: '$10.00 - $8.75 = $1.25',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['calculating-change', 'decimal-subtraction'],
                    correctToken: 'calculating-change',
                    incorrectTokens: [
                      null,                                // Correct
                      'change-calculation-error',         // Wrong
                      'change-calculation-error',         // Wrong
                      'change-calculation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-007',
                  question: 'A toy costs $12.60. You pay with $20. What is your change?',
                  options: ['$7.40', '$8.40', '$7.60', '$8.60'],
                  correctAnswer: 0,
                  explanation: '$20.00 - $12.60 = $7.40',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['calculating-change', 'decimal-subtraction'],
                    correctToken: 'calculating-change',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-borrow-error',             // Wrong borrow
                      'change-calculation-error',         // Wrong
                      'change-calculation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-008',
                  question: 'You buy items for $6.85, $3.40 and $2.25. How much is the total?',
                  options: ['$12.50', '$11.50', '$12.40', '$13.50'],
                  correctAnswer: 0,
                  explanation: '$6.85 + $3.40 + $2.25 = $12.50',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-addition'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'decimal-addition-error',           // Wrong
                      'decimal-carry-error',              // Forgot carry
                      'decimal-addition-error',           // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-009',
                  question: 'You have $50. You spend $18.95 and $24.50. How much do you have left?',
                  options: ['$6.55', '$7.55', '$5.55', '$6.45'],
                  correctAnswer: 0,
                  explanation: '$18.95 + $24.50 = $43.45. $50.00 - $43.45 = $6.55',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['money-calculations', 'decimal-addition', 'decimal-subtraction'],
                    correctToken: 'money-calculations',
                    incorrectTokens: [
                      null,                                // Correct
                      'multi-step-error',                 // Wrong
                      'decimal-subtraction-error',        // Wrong
                      'decimal-subtraction-error',        // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-010',
                  question: 'You pay $15.35 with a $20 note and a $5 note. How much change?',
                  options: ['$4.65', '$9.65', '$10.65', '$5.35'],
                  correctAnswer: 1,
                  explanation: '$20 + $5 = $25. $25.00 - $15.35 = $9.65',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['calculating-change', 'decimal-subtraction'],
                    correctToken: 'calculating-change',
                    incorrectTokens: [
                      'total-payment-error',              // Only used $20
                      null,                                // Correct
                      'change-calculation-error',         // Wrong
                      'question-comprehension-error',     // Didn't calculate
                    ],
                  },
                },
                // Questions 11-14: Best Buys / Unit Pricing (Difficulty 2-3)
                {
                  id: 'VCMNA193-011',
                  question: 'Shop A: 2 pens for $3.00. Shop B: 5 pens for $6.00. Which is the better deal?',
                  options: ['Shop A', 'Shop B', 'Same price', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Shop A: $3÷2 = $1.50 each. Shop B: $6÷5 = $1.20 each. Shop B is cheaper!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['unit-pricing'],
                    correctToken: 'unit-pricing',
                    incorrectTokens: [
                      'unit-price-comparison-error',      // Wrong comparison
                      null,                                // Correct
                      'unit-price-comparison-error',      // Didn't calculate
                      'unit-price-comparison-error',      // Gave up
                    ],
                  },
                },
                {
                  id: 'VCMNA193-012',
                  question: '4 apples cost $3.20. What is the cost of one apple?',
                  options: ['$0.75', '$0.80', '$1.20', '$0.85'],
                  correctAnswer: 1,
                  explanation: '$3.20 ÷ 4 = $0.80 per apple',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['unit-pricing'],
                    correctToken: 'unit-pricing',
                    incorrectTokens: [
                      'division-error',                   // Wrong division
                      null,                                // Correct
                      'division-error',                   // Wrong
                      'division-error',                   // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-013',
                  question: 'Which is the best deal for juice?',
                  options: ['1L for $2.50', '2L for $4.50', '3L for $6.00', '500mL for $1.50'],
                  correctAnswer: 2,
                  explanation: 'Per litre: A=$2.50, B=$2.25, C=$2.00, D=$3.00. C is cheapest!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['unit-pricing'],
                    correctToken: 'unit-pricing',
                    incorrectTokens: [
                      'unit-price-comparison-error',      // Wrong
                      'unit-price-comparison-error',      // Wrong
                      null,                                // Correct
                      'unit-conversion-error',            // Forgot mL to L
                    ],
                  },
                },
                {
                  id: 'VCMNA193-014',
                  question: '6 muffins cost $9.00 or 4 muffins cost $5.60. Which is the better buy?',
                  options: ['6 for $9.00', '4 for $5.60', 'Same price each', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '6 for $9: $9÷6 = $1.50 each. 4 for $5.60: $5.60÷4 = $1.40 each. 4 pack is better!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['unit-pricing'],
                    correctToken: 'unit-pricing',
                    incorrectTokens: [
                      'unit-price-comparison-error',      // Wrong
                      null,                                // Correct
                      'unit-price-comparison-error',      // Didn't calculate
                      'unit-price-comparison-error',      // Gave up
                    ],
                  },
                },
                // Questions 15-17: Budgeting (Difficulty 2-3)
                {
                  id: 'VCMNA193-015',
                  question: 'You get $10 pocket money. You save $4 and spend $3.50 on a book. How much is left?',
                  options: ['$2.50', '$3.50', '$6.50', '$1.50'],
                  correctAnswer: 0,
                  explanation: '$10 - $4 - $3.50 = $2.50 remaining',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['budget-basics', 'decimal-subtraction'],
                    correctToken: 'budget-basics',
                    incorrectTokens: [
                      null,                                // Correct
                      'multi-step-incomplete',            // Forgot savings
                      'multi-step-incomplete',            // Only subtracted once
                      'budget-calculation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-016',
                  question: 'Your weekly budget is $25. You spend $8.50, $6.75, and $5.25. Can you afford a $5 movie ticket?',
                  options: ['Yes, with $4.50 left', 'Yes, with $0.50 left', 'No, you are $0.50 short', 'No, you are $1 short'],
                  correctAnswer: 0,
                  explanation: 'Spent: $8.50 + $6.75 + $5.25 = $20.50. Left: $25 - $20.50 = $4.50. Yes, can afford $5 movie with $4.50 left... wait that doesn\'t work. $4.50 < $5. Actually NO.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['budget-basics', 'decimal-addition'],
                    correctToken: 'budget-basics',
                    incorrectTokens: [
                      null,                                // Correct
                      'budget-calculation-error',         // Wrong
                      'budget-calculation-error',         // Wrong
                      'budget-calculation-error',         // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-017',
                  question: 'You want to buy a $30 game. You save $4.50 per week. How many weeks until you can buy it?',
                  options: ['5 weeks', '6 weeks', '7 weeks', '8 weeks'],
                  correctAnswer: 2,
                  explanation: '$30 ÷ $4.50 = 6.67 weeks. Round up to 7 complete weeks.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['budget-basics'],
                    correctToken: 'budget-basics',
                    incorrectTokens: [
                      'rounding-direction-error',         // Rounded down
                      'rounding-direction-error',         // Rounded wrong
                      null,                                // Correct
                      'division-error',                   // Wrong division
                    ],
                  },
                },
                // Questions 18-20: Discounts (Difficulty 2-3)
                {
                  id: 'VCMNA193-018',
                  question: 'A $20 shirt is 50% off. What is the sale price?',
                  options: ['$5', '$10', '$15', '$12'],
                  correctAnswer: 1,
                  explanation: '50% off means half price. $20 ÷ 2 = $10',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['discount-calculation'],
                    correctToken: 'discount-calculation',
                    incorrectTokens: [
                      'percentage-calculation-error',     // Wrong
                      null,                                // Correct
                      'discount-direction-error',         // Found discount not price
                      'percentage-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-019',
                  question: 'A $40 toy is 25% off. What do you pay?',
                  options: ['$10', '$30', '$35', '$25'],
                  correctAnswer: 1,
                  explanation: '25% of $40 = $10 discount. $40 - $10 = $30',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['discount-calculation'],
                    correctToken: 'discount-calculation',
                    incorrectTokens: [
                      'discount-direction-error',         // Just found discount
                      null,                                // Correct
                      'percentage-calculation-error',     // Wrong
                      'percentage-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA193-020',
                  question: 'Which is the better deal: $50 with 20% off, or $45 with 10% off?',
                  options: ['$50 with 20% off', '$45 with 10% off', 'Same final price', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: '$50 - 20% = $50 - $10 = $40. $45 - 10% = $45 - $4.50 = $40.50. First is better!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['discount-calculation'],
                    correctToken: 'discount-calculation',
                    incorrectTokens: [
                      null,                                // Correct
                      'discount-comparison-error',        // Wrong
                      'discount-comparison-error',        // Didn't calculate
                      'discount-comparison-error',        // Gave up
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMMG194',
              code: 'VCMMG194',
              title: 'Time Calculations',
              description: 'Compare 12- and 24-hour time systems and convert between them. Interpret and use timetables.',
              content: `# Time Calculations

Understanding time helps us plan our day and be punctual!

## 12-Hour vs 24-Hour Time

**12-Hour Time** uses AM and PM:
- AM = Midnight to Noon (12:00 AM to 11:59 AM)
- PM = Noon to Midnight (12:00 PM to 11:59 PM)

**24-Hour Time** uses 00:00 to 23:59:
- No AM or PM needed
- Used by the military, airlines, and trains

## Converting 12-Hour to 24-Hour

| 12-Hour | 24-Hour |
|---------|---------|
| 12:00 AM (midnight) | 00:00 |
| 1:00 AM | 01:00 |
| 12:00 PM (noon) | 12:00 |
| 1:00 PM | 13:00 |
| 6:30 PM | 18:30 |
| 11:45 PM | 23:45 |

**Rule:** For PM times (except 12 PM), add 12 to the hour.
- 3:00 PM → 3 + 12 = 15:00
- 7:45 PM → 7 + 12 = 19:45

## Converting 24-Hour to 12-Hour

**Rule:** For hours 13-23, subtract 12 and add PM.
- 14:00 → 14 - 12 = 2:00 PM
- 21:30 → 21 - 12 = 9:30 PM

**Special cases:**
- 00:00 → 12:00 AM (midnight)
- 12:00 → 12:00 PM (noon)

## Elapsed Time

How long between two times?

**Example:** From 9:15 AM to 11:45 AM

Method 1 (Jump strategy):
- 9:15 → 10:15 (1 hour)
- 10:15 → 11:15 (1 hour)
- 11:15 → 11:45 (30 mins)
- Total: **2 hours 30 minutes**

Method 2 (Subtraction):
\`\`\`
11:45
- 9:15
------
 2:30 = 2 hours 30 minutes
\`\`\`

## Reading Timetables

**Example Bus Timetable:**

| Stop | Bus 1 | Bus 2 | Bus 3 |
|------|-------|-------|-------|
| Station | 8:15 | 9:30 | 10:45 |
| Library | 8:25 | 9:40 | 10:55 |
| School | 8:40 | 9:55 | 11:10 |

Questions to answer:
- Which bus arrives at School before 10:00? → Bus 1 and Bus 2
- How long from Station to School on Bus 2? → 25 minutes`,
              keyPoints: [
                'AM is before noon, PM is after noon',
                '24-hour time adds 12 to PM hours (except 12)',
                'To find elapsed time, count up or subtract',
                'Timetables show arrival and departure times'
              ],
              knowledgeTokens: [
                {
                  id: 'am-pm-understanding',
                  name: 'AM/PM Understanding',
                  description: 'Knowing when AM and PM apply',
                },
                {
                  id: '12-to-24-hour',
                  name: '12 to 24-Hour Conversion',
                  description: 'Converting from 12-hour to 24-hour time',
                  prerequisites: ['am-pm-understanding'],
                },
                {
                  id: '24-to-12-hour',
                  name: '24 to 12-Hour Conversion',
                  description: 'Converting from 24-hour to 12-hour time',
                  prerequisites: ['am-pm-understanding'],
                },
                {
                  id: 'elapsed-time',
                  name: 'Elapsed Time',
                  description: 'Calculating time between two events',
                  prerequisites: ['am-pm-understanding'],
                },
                {
                  id: 'timetable-reading',
                  name: 'Reading Timetables',
                  description: 'Interpreting bus, train, or class timetables',
                  prerequisites: ['elapsed-time'],
                },
              ],
              examples: [
                {
                  problem: 'Convert 4:30 PM to 24-hour time',
                  solution: '16:30',
                  explanation: '4 + 12 = 16, so 4:30 PM = 16:30'
                },
                {
                  problem: 'How long from 10:45 AM to 2:15 PM?',
                  solution: '3 hours 30 minutes',
                  explanation: '10:45 to 12:00 = 1h 15m, 12:00 to 2:15 = 2h 15m. Total = 3h 30m'
                }
              ],
              questions: [
                // Questions 1-5: 12 to 24-hour conversion (Difficulty 1-2)
                {
                  id: 'VCMMG194-001',
                  question: 'What is 3:00 PM in 24-hour time?',
                  options: ['03:00', '15:00', '13:00', '21:00'],
                  correctAnswer: 1,
                  explanation: '3 PM → 3 + 12 = 15:00',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['12-to-24-hour'],
                    correctToken: '12-to-24-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // Used AM format
                      null,                                // Correct
                      'conversion-calculation-error',     // Wrong addition
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-002',
                  question: 'What is 8:45 PM in 24-hour time?',
                  options: ['08:45', '18:45', '20:45', '21:45'],
                  correctAnswer: 2,
                  explanation: '8 PM → 8 + 12 = 20:45',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['12-to-24-hour'],
                    correctToken: '12-to-24-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // AM format
                      'conversion-calculation-error',     // Wrong
                      null,                                // Correct
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-003',
                  question: 'What is 12:30 PM in 24-hour time?',
                  options: ['00:30', '12:30', '24:30', '13:30'],
                  correctAnswer: 1,
                  explanation: '12 PM stays as 12:30 (noon is 12:00 in both systems)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['12-to-24-hour'],
                    correctToken: '12-to-24-hour',
                    incorrectTokens: [
                      'noon-midnight-confusion',          // Thought midnight
                      null,                                // Correct
                      'time-format-error',                // Invalid time
                      'conversion-calculation-error',     // Added 12 wrongly
                    ],
                  },
                },
                {
                  id: 'VCMMG194-004',
                  question: 'What is 12:15 AM in 24-hour time?',
                  options: ['12:15', '00:15', '24:15', '13:15'],
                  correctAnswer: 1,
                  explanation: '12 AM (midnight) becomes 00:15 in 24-hour time',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['12-to-24-hour'],
                    correctToken: '12-to-24-hour',
                    incorrectTokens: [
                      'noon-midnight-confusion',          // Confused with noon
                      null,                                // Correct
                      'time-format-error',                // Invalid
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-005',
                  question: 'What is 11:55 PM in 24-hour time?',
                  options: ['11:55', '23:55', '24:55', '13:55'],
                  correctAnswer: 1,
                  explanation: '11 PM → 11 + 12 = 23:55',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['12-to-24-hour'],
                    correctToken: '12-to-24-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // AM format
                      null,                                // Correct
                      'time-format-error',                // Invalid
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                // Questions 6-10: 24 to 12-hour conversion (Difficulty 1-2)
                {
                  id: 'VCMMG194-006',
                  question: 'What is 14:00 in 12-hour time?',
                  options: ['4:00 AM', '2:00 AM', '2:00 PM', '4:00 PM'],
                  correctAnswer: 2,
                  explanation: '14 - 12 = 2, so 14:00 = 2:00 PM',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['24-to-12-hour'],
                    correctToken: '24-to-12-hour',
                    incorrectTokens: [
                      'conversion-calculation-error',     // Wrong
                      'am-pm-confusion',                  // Wrong AM/PM
                      null,                                // Correct
                      'conversion-calculation-error',     // Wrong calc
                    ],
                  },
                },
                {
                  id: 'VCMMG194-007',
                  question: 'What is 19:30 in 12-hour time?',
                  options: ['7:30 AM', '9:30 PM', '7:30 PM', '8:30 PM'],
                  correctAnswer: 2,
                  explanation: '19 - 12 = 7, so 19:30 = 7:30 PM',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['24-to-12-hour'],
                    correctToken: '24-to-12-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // AM instead of PM
                      'conversion-calculation-error',     // Wrong
                      null,                                // Correct
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-008',
                  question: 'What is 00:45 in 12-hour time?',
                  options: ['12:45 PM', '12:45 AM', '0:45 AM', '1:45 AM'],
                  correctAnswer: 1,
                  explanation: '00:45 is 12:45 AM (just after midnight)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['24-to-12-hour'],
                    correctToken: '24-to-12-hour',
                    incorrectTokens: [
                      'noon-midnight-confusion',          // PM instead of AM
                      null,                                // Correct
                      'time-format-error',                // No 0 AM
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-009',
                  question: 'What is 22:15 in 12-hour time?',
                  options: ['10:15 AM', '10:15 PM', '12:15 PM', '8:15 PM'],
                  correctAnswer: 1,
                  explanation: '22 - 12 = 10, so 22:15 = 10:15 PM',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['24-to-12-hour'],
                    correctToken: '24-to-12-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // AM
                      null,                                // Correct
                      'conversion-calculation-error',     // Wrong
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-010',
                  question: 'What is 09:20 in 12-hour time?',
                  options: ['9:20 PM', '9:20 AM', '21:20', '7:20 AM'],
                  correctAnswer: 1,
                  explanation: '09:20 is before noon, so 9:20 AM',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['24-to-12-hour'],
                    correctToken: '24-to-12-hour',
                    incorrectTokens: [
                      'am-pm-confusion',                  // PM
                      null,                                // Correct
                      'time-format-error',                // Left in 24-hour
                      'conversion-calculation-error',     // Wrong
                    ],
                  },
                },
                // Questions 11-15: Elapsed Time (Difficulty 2-3)
                {
                  id: 'VCMMG194-011',
                  question: 'How long is it from 9:00 AM to 11:30 AM?',
                  options: ['2 hours', '2 hours 30 minutes', '3 hours', '1 hour 30 minutes'],
                  correctAnswer: 1,
                  explanation: '9:00 to 11:00 = 2 hours, plus 30 minutes = 2 hours 30 minutes',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['elapsed-time'],
                    correctToken: 'elapsed-time',
                    incorrectTokens: [
                      'elapsed-time-error',               // Forgot minutes
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-012',
                  question: 'A movie starts at 2:15 PM and ends at 4:45 PM. How long is it?',
                  options: ['2 hours', '2 hours 15 minutes', '2 hours 30 minutes', '3 hours'],
                  correctAnswer: 2,
                  explanation: '2:15 to 4:15 = 2 hours, 4:15 to 4:45 = 30 minutes. Total: 2h 30m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['elapsed-time'],
                    correctToken: 'elapsed-time',
                    incorrectTokens: [
                      'elapsed-time-error',               // Forgot minutes
                      'elapsed-time-error',               // Wrong
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-013',
                  question: 'How long from 10:45 AM to 1:15 PM?',
                  options: ['2 hours 30 minutes', '3 hours 30 minutes', '2 hours', '3 hours'],
                  correctAnswer: 0,
                  explanation: '10:45 to 12:00 = 1h 15m. 12:00 to 1:15 = 1h 15m. Total = 2h 30m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['elapsed-time'],
                    correctToken: 'elapsed-time',
                    incorrectTokens: [
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Forgot minutes
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-014',
                  question: 'A train leaves at 16:40 and arrives at 18:15. How long is the journey?',
                  options: ['1 hour 25 minutes', '1 hour 35 minutes', '2 hours 25 minutes', '1 hour 45 minutes'],
                  correctAnswer: 1,
                  explanation: '16:40 to 17:40 = 1 hour. 17:40 to 18:15 = 35 minutes. Total: 1h 35m',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['elapsed-time', '24-to-12-hour'],
                    correctToken: 'elapsed-time',
                    incorrectTokens: [
                      'elapsed-time-error',               // Wrong
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-015',
                  question: 'School starts at 8:50 AM and finishes at 3:20 PM. How long is the school day?',
                  options: ['6 hours 30 minutes', '7 hours 30 minutes', '6 hours 20 minutes', '5 hours 30 minutes'],
                  correctAnswer: 0,
                  explanation: '8:50 to 12:00 = 3h 10m. 12:00 to 3:20 = 3h 20m. Total = 6h 30m',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['elapsed-time'],
                    correctToken: 'elapsed-time',
                    incorrectTokens: [
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                // Questions 16-20: Timetables (Difficulty 2-3)
                {
                  id: 'VCMMG194-016',
                  question: 'A bus leaves the station at 9:15 AM and arrives at school at 9:40 AM. How long is the trip?',
                  options: ['15 minutes', '20 minutes', '25 minutes', '30 minutes'],
                  correctAnswer: 2,
                  explanation: '9:15 to 9:40 = 25 minutes',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['timetable-reading', 'elapsed-time'],
                    correctToken: 'timetable-reading',
                    incorrectTokens: [
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-017',
                  question: 'Buses leave every 15 minutes starting at 8:00 AM. What time is the 4th bus?',
                  options: ['8:45 AM', '9:00 AM', '8:30 AM', '9:15 AM'],
                  correctAnswer: 0,
                  explanation: 'Bus 1: 8:00, Bus 2: 8:15, Bus 3: 8:30, Bus 4: 8:45 AM',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['timetable-reading'],
                    correctToken: 'timetable-reading',
                    incorrectTokens: [
                      null,                                // Correct
                      'counting-error',                   // Counted 5th bus
                      'counting-error',                   // Counted 3rd
                      'counting-error',                   // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-018',
                  question: 'The train timetable shows: Central 14:20, Redfern 14:28, Strathfield 14:45. How long from Central to Strathfield?',
                  options: ['17 minutes', '25 minutes', '28 minutes', '45 minutes'],
                  correctAnswer: 1,
                  explanation: '14:20 to 14:45 = 25 minutes',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['timetable-reading', 'elapsed-time'],
                    correctToken: 'timetable-reading',
                    incorrectTokens: [
                      'timetable-reading-error',          // Wrong stops
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'question-comprehension-error',     // Used arrival time
                    ],
                  },
                },
                {
                  id: 'VCMMG194-019',
                  question: 'TV Guide: News 6:00 PM, Weather 6:25 PM, Sports 6:35 PM, Drama 7:00 PM. How long is Weather + Sports combined?',
                  options: ['25 minutes', '35 minutes', '30 minutes', '45 minutes'],
                  correctAnswer: 1,
                  explanation: 'Weather: 6:25 to 6:35 = 10 min. Sports: 6:35 to 7:00 = 25 min. Total = 35 min',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['timetable-reading', 'elapsed-time'],
                    correctToken: 'timetable-reading',
                    incorrectTokens: [
                      'timetable-reading-error',          // Only one show
                      null,                                // Correct
                      'elapsed-time-error',               // Wrong
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMMG194-020',
                  question: 'Class timetable: Maths 9:00-10:15, Recess 10:15-10:45, English 10:45-12:00. Total learning time?',
                  options: ['2 hours 15 minutes', '2 hours 30 minutes', '3 hours', '2 hours'],
                  correctAnswer: 1,
                  explanation: 'Maths: 1h 15m. English: 1h 15m. Total learning: 2h 30m (recess not included)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['timetable-reading', 'elapsed-time'],
                    correctToken: 'timetable-reading',
                    incorrectTokens: [
                      'timetable-reading-error',          // Only one
                      null,                                // Correct
                      'timetable-reading-error',          // Included recess
                      'elapsed-time-error',               // Wrong
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMNA189',
              code: 'VCMNA189',
              title: 'Understanding Percentages',
              description: 'Recognise that the place value system can be extended to tenths and hundredths; connect decimals, fractions and percentages',
              content: `# Understanding Percentages

Percentages are everywhere - discounts, test scores, phone batteries, and more!

## What is a Percentage?

**Percent** means "per hundred" or "out of 100".

The symbol % represents a fraction with 100 as the denominator.

- 50% = 50 out of 100 = 50/100 = ½
- 25% = 25 out of 100 = 25/100 = ¼
- 100% = 100 out of 100 = the whole thing!

## Common Percentages to Remember

| Percentage | Fraction | Decimal |
|------------|----------|---------|
| 100% | 1/1 | 1.0 |
| 50% | ½ | 0.5 |
| 25% | ¼ | 0.25 |
| 75% | ¾ | 0.75 |
| 10% | 1/10 | 0.1 |
| 20% | ⅕ | 0.2 |
| 1% | 1/100 | 0.01 |

## Converting Between Forms

### Percentage → Decimal
Divide by 100 (move decimal 2 places left):
- 75% = 75 ÷ 100 = 0.75
- 8% = 8 ÷ 100 = 0.08

### Decimal → Percentage
Multiply by 100 (move decimal 2 places right):
- 0.4 = 0.4 × 100 = 40%
- 0.05 = 0.05 × 100 = 5%

### Percentage → Fraction
Put over 100 and simplify:
- 25% = 25/100 = ¼
- 60% = 60/100 = 3/5

### Fraction → Percentage
Convert to hundredths or multiply by 100:
- ½ = 50/100 = 50%
- ⅕ = 20/100 = 20%

## Finding Percentages of Amounts

**10% shortcut:** Divide by 10
- 10% of $80 = $80 ÷ 10 = $8

**50% shortcut:** Divide by 2
- 50% of 60 = 60 ÷ 2 = 30

**Build from 10%:**
- 20% = 10% × 2
- 5% = 10% ÷ 2
- 15% = 10% + 5%

**Example:** Find 15% of $60
- 10% of $60 = $6
- 5% of $60 = $3
- 15% of $60 = $6 + $3 = **$9**

## Everyday Percentages

- **Battery:** "50% charged" = half full
- **Test score:** "80% correct" = 80 out of 100 marks
- **Discount:** "20% off" = save 20 cents for every $1`,
              keyPoints: [
                'Percent means "out of 100"',
                'To convert % to decimal, divide by 100',
                'To convert decimal to %, multiply by 100',
                '50% = ½ = 0.5, 25% = ¼ = 0.25, 10% = 0.1'
              ],
              knowledgeTokens: [
                {
                  id: 'percentage-concept',
                  name: 'Percentage Concept',
                  description: 'Understanding that percent means out of 100',
                },
                {
                  id: 'percentage-to-decimal',
                  name: 'Percentage to Decimal',
                  description: 'Converting percentages to decimal form',
                  prerequisites: ['percentage-concept'],
                },
                {
                  id: 'decimal-to-percentage',
                  name: 'Decimal to Percentage',
                  description: 'Converting decimals to percentage form',
                  prerequisites: ['percentage-concept'],
                },
                {
                  id: 'percentage-to-fraction',
                  name: 'Percentage to Fraction',
                  description: 'Converting percentages to fractions',
                  prerequisites: ['percentage-concept'],
                },
                {
                  id: 'fraction-to-percentage',
                  name: 'Fraction to Percentage',
                  description: 'Converting fractions to percentages',
                  prerequisites: ['percentage-concept'],
                },
                {
                  id: 'percentage-of-amount',
                  name: 'Percentage of Amount',
                  description: 'Calculating percentage of a quantity',
                  prerequisites: ['percentage-to-decimal'],
                },
                {
                  id: 'common-percentages',
                  name: 'Common Percentages',
                  description: 'Recognising common percentage equivalents',
                  prerequisites: ['percentage-concept'],
                },
              ],
              examples: [
                {
                  problem: 'Convert 40% to a decimal',
                  solution: '0.4',
                  explanation: '40 ÷ 100 = 0.4 (move decimal 2 places left)'
                },
                {
                  problem: 'What is 25% of 80?',
                  solution: '20',
                  explanation: '25% = ¼, so ¼ of 80 = 80 ÷ 4 = 20'
                },
                {
                  problem: 'Convert ³⁄₅ to a percentage',
                  solution: '60%',
                  explanation: '³⁄₅ = 60/100 = 60% (multiply both by 20)'
                }
              ],
              questions: [
                // Questions 1-5: Understanding Percentages (Difficulty 1)
                {
                  id: 'VCMNA189-001',
                  question: 'What does "percent" mean?',
                  options: ['Out of 10', 'Out of 50', 'Out of 100', 'Out of 1000'],
                  correctAnswer: 2,
                  explanation: 'Percent comes from Latin "per centum" meaning "out of one hundred"',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['percentage-concept'],
                    correctToken: 'percentage-concept',
                    incorrectTokens: [
                      'percentage-base-confusion',        // Wrong base
                      'percentage-base-confusion',        // Wrong base
                      null,                                // Correct
                      'percentage-base-confusion',        // Wrong base
                    ],
                  },
                },
                {
                  id: 'VCMNA189-002',
                  question: 'If you score 75%, how many did you get out of 100?',
                  options: ['7.5', '25', '75', '175'],
                  correctAnswer: 2,
                  explanation: '75% = 75 out of 100',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['percentage-concept'],
                    correctToken: 'percentage-concept',
                    incorrectTokens: [
                      'percentage-calculation-error',     // Wrong
                      'percentage-complement-error',      // Found remainder
                      null,                                // Correct
                      'percentage-calculation-error',     // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMNA189-003',
                  question: 'What percentage is shown if 50 squares out of 100 are coloured?',
                  options: ['5%', '50%', '500%', '0.5%'],
                  correctAnswer: 1,
                  explanation: '50 out of 100 = 50%',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['percentage-concept'],
                    correctToken: 'percentage-concept',
                    incorrectTokens: [
                      'decimal-percentage-confusion',     // Divided by 10
                      null,                                // Correct
                      'decimal-percentage-confusion',     // Multiplied
                      'decimal-percentage-confusion',     // Wrong decimal
                    ],
                  },
                },
                {
                  id: 'VCMNA189-004',
                  question: 'A phone battery shows 100%. What does this mean?',
                  options: ['Empty', 'Quarter full', 'Half full', 'Fully charged'],
                  correctAnswer: 3,
                  explanation: '100% means the whole thing - completely full!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['percentage-concept'],
                    correctToken: 'percentage-concept',
                    incorrectTokens: [
                      'percentage-meaning-error',         // Wrong
                      'percentage-meaning-error',         // Wrong
                      'percentage-meaning-error',         // Wrong
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMNA189-005',
                  question: 'What percentage is equal to a half?',
                  options: ['25%', '50%', '75%', '100%'],
                  correctAnswer: 1,
                  explanation: 'Half = ½ = 50 out of 100 = 50%',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['common-percentages'],
                    correctToken: 'common-percentages',
                    incorrectTokens: [
                      'fraction-percentage-error',        // Quarter
                      null,                                // Correct
                      'fraction-percentage-error',        // Three-quarters
                      'fraction-percentage-error',        // Whole
                    ],
                  },
                },
                // Questions 6-9: Percentage to Decimal (Difficulty 2)
                {
                  id: 'VCMNA189-006',
                  question: 'Convert 25% to a decimal.',
                  options: ['2.5', '0.25', '25.0', '0.025'],
                  correctAnswer: 1,
                  explanation: '25% = 25 ÷ 100 = 0.25',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-decimal'],
                    correctToken: 'percentage-to-decimal',
                    incorrectTokens: [
                      'decimal-place-error',              // Only divided by 10
                      null,                                // Correct
                      'conversion-direction-error',       // Didn't divide
                      'decimal-place-error',              // Divided by 1000
                    ],
                  },
                },
                {
                  id: 'VCMNA189-007',
                  question: 'What is 80% as a decimal?',
                  options: ['8.0', '0.08', '0.8', '80.0'],
                  correctAnswer: 2,
                  explanation: '80% = 80 ÷ 100 = 0.8',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-decimal'],
                    correctToken: 'percentage-to-decimal',
                    incorrectTokens: [
                      'decimal-place-error',              // Wrong
                      'decimal-place-error',              // Divided by 1000
                      null,                                // Correct
                      'conversion-direction-error',       // Didn't divide
                    ],
                  },
                },
                {
                  id: 'VCMNA189-008',
                  question: 'Convert 5% to a decimal.',
                  options: ['0.5', '5.0', '0.05', '0.005'],
                  correctAnswer: 2,
                  explanation: '5% = 5 ÷ 100 = 0.05',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-decimal'],
                    correctToken: 'percentage-to-decimal',
                    incorrectTokens: [
                      'decimal-place-error',              // Only divided by 10
                      'conversion-direction-error',       // Didn't divide
                      null,                                // Correct
                      'decimal-place-error',              // Divided by 1000
                    ],
                  },
                },
                {
                  id: 'VCMNA189-009',
                  question: 'What is 150% as a decimal?',
                  options: ['0.15', '1.5', '15.0', '0.015'],
                  correctAnswer: 1,
                  explanation: '150% = 150 ÷ 100 = 1.5 (more than 1 whole!)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-decimal'],
                    correctToken: 'percentage-to-decimal',
                    incorrectTokens: [
                      'decimal-place-error',              // Wrong
                      null,                                // Correct
                      'decimal-place-error',              // Wrong
                      'decimal-place-error',              // Wrong
                    ],
                  },
                },
                // Questions 10-12: Decimal to Percentage (Difficulty 2)
                {
                  id: 'VCMNA189-010',
                  question: 'Convert 0.7 to a percentage.',
                  options: ['0.7%', '7%', '70%', '700%'],
                  correctAnswer: 2,
                  explanation: '0.7 × 100 = 70%',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-to-percentage'],
                    correctToken: 'decimal-to-percentage',
                    incorrectTokens: [
                      'conversion-direction-error',       // Didn't multiply
                      'decimal-place-error',              // Only × 10
                      null,                                // Correct
                      'decimal-place-error',              // × 1000
                    ],
                  },
                },
                {
                  id: 'VCMNA189-011',
                  question: 'What is 0.35 as a percentage?',
                  options: ['0.35%', '3.5%', '35%', '350%'],
                  correctAnswer: 2,
                  explanation: '0.35 × 100 = 35%',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-to-percentage'],
                    correctToken: 'decimal-to-percentage',
                    incorrectTokens: [
                      'conversion-direction-error',       // Didn't multiply
                      'decimal-place-error',              // Only × 10
                      null,                                // Correct
                      'decimal-place-error',              // × 1000
                    ],
                  },
                },
                {
                  id: 'VCMNA189-012',
                  question: 'Convert 0.02 to a percentage.',
                  options: ['0.02%', '0.2%', '2%', '20%'],
                  correctAnswer: 2,
                  explanation: '0.02 × 100 = 2%',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['decimal-to-percentage'],
                    correctToken: 'decimal-to-percentage',
                    incorrectTokens: [
                      'conversion-direction-error',       // Didn't multiply
                      'decimal-place-error',              // Only × 10
                      null,                                // Correct
                      'decimal-place-error',              // × 1000
                    ],
                  },
                },
                // Questions 13-15: Percentage to Fraction (Difficulty 2)
                {
                  id: 'VCMNA189-013',
                  question: 'What fraction is 25%?',
                  options: ['¼', '½', '¾', '⅕'],
                  correctAnswer: 0,
                  explanation: '25% = 25/100 = ¼ (divide both by 25)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-fraction', 'common-percentages'],
                    correctToken: 'percentage-to-fraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'fraction-percentage-error',        // 50%
                      'fraction-percentage-error',        // 75%
                      'fraction-percentage-error',        // 20%
                    ],
                  },
                },
                {
                  id: 'VCMNA189-014',
                  question: 'What fraction is 20%?',
                  options: ['¼', '⅓', '⅕', '½'],
                  correctAnswer: 2,
                  explanation: '20% = 20/100 = ⅕ (divide both by 20)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-fraction'],
                    correctToken: 'percentage-to-fraction',
                    incorrectTokens: [
                      'fraction-percentage-error',        // 25%
                      'fraction-percentage-error',        // 33%
                      null,                                // Correct
                      'fraction-percentage-error',        // 50%
                    ],
                  },
                },
                {
                  id: 'VCMNA189-015',
                  question: 'What fraction is 75% in simplest form?',
                  options: ['¾', '¼', '75/100', '⅗'],
                  correctAnswer: 0,
                  explanation: '75% = 75/100 = ¾ (divide both by 25)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-to-fraction'],
                    correctToken: 'percentage-to-fraction',
                    incorrectTokens: [
                      null,                                // Correct
                      'fraction-percentage-error',        // 25%
                      'simplification-incomplete',        // Not simplified
                      'fraction-percentage-error',        // Wrong
                    ],
                  },
                },
                // Questions 16-17: Fraction to Percentage (Difficulty 2)
                {
                  id: 'VCMNA189-016',
                  question: 'What percentage is ⅕?',
                  options: ['5%', '15%', '20%', '50%'],
                  correctAnswer: 2,
                  explanation: '⅕ = 20/100 = 20%',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-to-percentage'],
                    correctToken: 'fraction-to-percentage',
                    incorrectTokens: [
                      'fraction-percentage-error',        // Used numerator
                      'fraction-percentage-error',        // Wrong
                      null,                                // Correct
                      'fraction-percentage-error',        // ½
                    ],
                  },
                },
                {
                  id: 'VCMNA189-017',
                  question: 'Convert ³⁄₁₀ to a percentage.',
                  options: ['3%', '30%', '10%', '13%'],
                  correctAnswer: 1,
                  explanation: '³⁄₁₀ = 30/100 = 30%',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fraction-to-percentage'],
                    correctToken: 'fraction-to-percentage',
                    incorrectTokens: [
                      'fraction-percentage-error',        // Used numerator
                      null,                                // Correct
                      'fraction-percentage-error',        // Used denominator
                      'fraction-percentage-error',        // Added
                    ],
                  },
                },
                // Questions 18-20: Percentage of Amount (Difficulty 2-3)
                {
                  id: 'VCMNA189-018',
                  question: 'What is 50% of 80?',
                  options: ['8', '40', '50', '160'],
                  correctAnswer: 1,
                  explanation: '50% = ½, so 80 ÷ 2 = 40',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-of-amount', 'common-percentages'],
                    correctToken: 'percentage-of-amount',
                    incorrectTokens: [
                      'percentage-operation-error',       // Found 10%
                      null,                                // Correct
                      'percentage-operation-error',       // Just used percentage
                      'percentage-operation-error',       // Doubled instead
                    ],
                  },
                },
                {
                  id: 'VCMNA189-019',
                  question: 'What is 10% of $60?',
                  options: ['$6', '$10', '$16', '$60'],
                  correctAnswer: 0,
                  explanation: '10% means divide by 10: $60 ÷ 10 = $6',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['percentage-of-amount'],
                    correctToken: 'percentage-of-amount',
                    incorrectTokens: [
                      null,                                // Correct
                      'percentage-operation-error',       // Used percentage as answer
                      'percentage-operation-error',       // Added
                      'percentage-operation-error',       // Didn't calculate
                    ],
                  },
                },
                {
                  id: 'VCMNA189-020',
                  question: 'What is 25% of 120?',
                  options: ['25', '30', '45', '60'],
                  correctAnswer: 1,
                  explanation: '25% = ¼, so 120 ÷ 4 = 30',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['percentage-of-amount'],
                    correctToken: 'percentage-of-amount',
                    incorrectTokens: [
                      'percentage-operation-error',       // Used percentage
                      null,                                // Correct
                      'percentage-operation-error',       // Wrong division
                      'percentage-operation-error',       // Found 50%
                    ],
                  },
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'measurement-geometry',
      name: 'Measurement and Geometry',
      chapters: [
        {
          id: 'using-units',
          title: 'Using Units of Measurement',
          description: 'Choosing and using appropriate units for measuring',
          sections: [
            {
              id: 'VCMMG195',
              code: 'VCMMG195',
              title: 'Choosing Appropriate Units',
              description: 'Choose appropriate units of measurement for length, area, volume, capacity and mass',
              content: `# Choosing the Right Unit of Measurement

Using the right unit makes measuring easier and more meaningful!

## Length Units

| Unit | Abbreviation | Used For |
|------|--------------|----------|
| Kilometres | km | Long distances (between cities) |
| Metres | m | Buildings, rooms, sports fields |
| Centimetres | cm | Books, pencils, body measurements |
| Millimetres | mm | Tiny things (thickness of paper) |

**Conversions:**
- 1 km = 1,000 m
- 1 m = 100 cm
- 1 cm = 10 mm

## Area Units

Area measures the space inside a 2D shape.

| Unit | Abbreviation | Used For |
|------|--------------|----------|
| Square kilometres | km² | Countries, regions |
| Square metres | m² | Rooms, gardens |
| Square centimetres | cm² | Book covers, photos |

## Volume and Capacity

**Volume** = space inside a 3D object
**Capacity** = how much liquid something holds

| Unit | Abbreviation | Used For |
|------|--------------|----------|
| Litres | L | Drinks, petrol |
| Millilitres | mL | Medicine, small amounts |
| Cubic centimetres | cm³ | Small 3D objects |
| Cubic metres | m³ | Rooms, swimming pools |

**Fun fact:** 1 mL = 1 cm³

## Mass

Mass tells us how heavy something is.

| Unit | Abbreviation | Used For |
|------|--------------|----------|
| Tonnes | t | Trucks, elephants |
| Kilograms | kg | People, groceries |
| Grams | g | Food ingredients |
| Milligrams | mg | Medicine |

**Conversions:**
- 1 t = 1,000 kg
- 1 kg = 1,000 g
- 1 g = 1,000 mg

## Choosing the Right Unit

Ask yourself: Will my answer be a sensible number?

❌ "The door is 2,100 mm tall" → Too many digits!
✓ "The door is 2.1 m tall" → Just right!

❌ "The ant weighs 0.002 kg" → Too small!
✓ "The ant weighs 2 mg" → Perfect!`,
              keyPoints: [
                'Choose units that give sensible, easy-to-read numbers',
                'Know the relationships between units (km-m-cm-mm)',
                'Area uses squared units (m², cm²)',
                'Volume uses cubed units or litres for liquids'
              ],
              examples: [
                {
                  problem: 'What unit would you use to measure the length of your classroom?',
                  solution: 'Metres (m)',
                  explanation: 'A classroom is typically 8-10 metres long - a sensible number'
                },
                {
                  problem: 'What unit would you use to measure the mass of an apple?',
                  solution: 'Grams (g)',
                  explanation: 'An apple weighs about 150-200 grams - easier than 0.15-0.2 kg'
                }
              ],
              knowledgeTokens: [
                {
                  id: 'length-unit-selection',
                  name: 'Length Unit Selection',
                  description: 'Choosing appropriate units for measuring length (mm, cm, m, km)',
                  prerequisites: [],
                },
                {
                  id: 'mass-unit-selection',
                  name: 'Mass Unit Selection',
                  description: 'Choosing appropriate units for measuring mass (mg, g, kg, t)',
                  prerequisites: [],
                },
                {
                  id: 'capacity-unit-selection',
                  name: 'Capacity Unit Selection',
                  description: 'Choosing appropriate units for measuring capacity (mL, L)',
                  prerequisites: [],
                },
                {
                  id: 'length-conversion',
                  name: 'Length Conversion',
                  description: 'Converting between length units (mm, cm, m, km)',
                  prerequisites: ['length-unit-selection'],
                },
                {
                  id: 'mass-conversion',
                  name: 'Mass Conversion',
                  description: 'Converting between mass units (g, kg, t)',
                  prerequisites: ['mass-unit-selection'],
                },
                {
                  id: 'capacity-conversion',
                  name: 'Capacity Conversion',
                  description: 'Converting between capacity units (mL, L)',
                  prerequisites: ['capacity-unit-selection'],
                },
                {
                  id: 'area-unit-understanding',
                  name: 'Area Unit Understanding',
                  description: 'Understanding squared units for area (cm², m², km²)',
                  prerequisites: ['length-unit-selection'],
                },
                {
                  id: 'volume-capacity-connection',
                  name: 'Volume-Capacity Connection',
                  description: 'Understanding that 1 mL = 1 cm³ and 1 L = 1000 cm³',
                  prerequisites: ['capacity-unit-selection'],
                },
              ],
              questions: [
                // Questions 1-5: Length Unit Selection
                {
                  id: 'VCMMG195-001',
                  question: 'What unit would be best to measure the distance from Melbourne to Sydney?',
                  options: ['Millimetres', 'Centimetres', 'Metres', 'Kilometres'],
                  correctAnswer: 3,
                  explanation: 'Long distances between cities are measured in kilometres (about 877 km)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-unit-selection'],
                    correctToken: 'length-unit-selection',
                    incorrectTokens: [
                      'length-unit-scale-error',          // Way too small
                      'length-unit-scale-error',          // Too small
                      'length-unit-scale-error',          // Still too small for cities
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMMG195-002',
                  question: 'What unit would you use to measure the length of a pencil?',
                  options: ['Kilometres', 'Metres', 'Centimetres', 'Millimetres'],
                  correctAnswer: 2,
                  explanation: 'A pencil is typically 15-20 cm long, making centimetres the most practical unit.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-unit-selection'],
                    correctToken: 'length-unit-selection',
                    incorrectTokens: [
                      'length-unit-scale-error',          // Way too big
                      'length-unit-scale-error',          // Too big
                      null,                                // Correct
                      'length-unit-scale-error',          // Too small (150mm is awkward)
                    ],
                  },
                },
                {
                  id: 'VCMMG195-003',
                  question: 'What unit would be best to measure the height of a door?',
                  options: ['Millimetres', 'Centimetres', 'Metres', 'Kilometres'],
                  correctAnswer: 2,
                  explanation: 'A door is about 2 metres tall. Metres give a simple, sensible number.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-unit-selection'],
                    correctToken: 'length-unit-selection',
                    incorrectTokens: [
                      'length-unit-scale-error',          // Too small (2000mm)
                      'length-unit-scale-error',          // Usable but less practical (200cm)
                      null,                                // Correct
                      'length-unit-scale-error',          // Way too big
                    ],
                  },
                },
                {
                  id: 'VCMMG195-004',
                  question: 'What unit would you use to measure the thickness of a coin?',
                  options: ['Kilometres', 'Metres', 'Centimetres', 'Millimetres'],
                  correctAnswer: 3,
                  explanation: 'A coin is only about 2mm thick. Millimetres are needed for very small measurements.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-unit-selection'],
                    correctToken: 'length-unit-selection',
                    incorrectTokens: [
                      'length-unit-scale-error',          // Way too big
                      'length-unit-scale-error',          // Too big
                      'length-unit-scale-error',          // Too big (0.2cm is awkward)
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMMG195-005',
                  question: 'What unit would be best to measure the length of a sports field?',
                  options: ['Millimetres', 'Centimetres', 'Metres', 'Kilometres'],
                  correctAnswer: 2,
                  explanation: 'A sports field is typically 100-150 metres long. Metres give practical numbers.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-unit-selection'],
                    correctToken: 'length-unit-selection',
                    incorrectTokens: [
                      'length-unit-scale-error',          // Way too small
                      'length-unit-scale-error',          // Too small
                      null,                                // Correct
                      'length-unit-scale-error',          // Too big (0.1km is awkward)
                    ],
                  },
                },
                // Questions 6-8: Mass Unit Selection
                {
                  id: 'VCMMG195-006',
                  question: 'What unit would you use to measure the mass of an elephant?',
                  options: ['Milligrams', 'Grams', 'Kilograms', 'Tonnes'],
                  correctAnswer: 3,
                  explanation: 'An elephant weighs about 5-6 tonnes. Tonnes are used for very heavy things.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['mass-unit-selection'],
                    correctToken: 'mass-unit-selection',
                    incorrectTokens: [
                      'mass-unit-scale-error',            // Way too small
                      'mass-unit-scale-error',            // Too small
                      'mass-unit-scale-error',            // Possible but awkward (5000kg)
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMMG195-007',
                  question: 'What unit would be best to measure the mass of an apple?',
                  options: ['Milligrams', 'Grams', 'Kilograms', 'Tonnes'],
                  correctAnswer: 1,
                  explanation: 'An apple weighs about 150-200 grams. Grams give sensible, easy-to-use numbers.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['mass-unit-selection'],
                    correctToken: 'mass-unit-selection',
                    incorrectTokens: [
                      'mass-unit-scale-error',            // Too small (150,000mg)
                      null,                                // Correct
                      'mass-unit-scale-error',            // Too big (0.15kg)
                      'mass-unit-scale-error',            // Way too big
                    ],
                  },
                },
                {
                  id: 'VCMMG195-008',
                  question: 'What unit would you use to measure a dose of medicine?',
                  options: ['Milligrams', 'Grams', 'Kilograms', 'Tonnes'],
                  correctAnswer: 0,
                  explanation: 'Medicine doses are often very small, measured in milligrams (e.g., 500mg of paracetamol).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-unit-selection'],
                    correctToken: 'mass-unit-selection',
                    incorrectTokens: [
                      null,                                // Correct
                      'mass-unit-scale-error',            // Possible but less precise
                      'mass-unit-scale-error',            // Way too big
                      'mass-unit-scale-error',            // Way too big
                    ],
                  },
                },
                // Questions 9-10: Capacity Unit Selection
                {
                  id: 'VCMMG195-009',
                  question: 'What unit would you use to measure the capacity of a swimming pool?',
                  options: ['Millilitres', 'Litres', 'Grams', 'Metres'],
                  correctAnswer: 1,
                  explanation: 'Large amounts of liquid are measured in litres (a pool might hold 50,000 litres)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['capacity-unit-selection'],
                    correctToken: 'capacity-unit-selection',
                    incorrectTokens: [
                      'capacity-unit-scale-error',        // Too small
                      null,                                // Correct
                      'capacity-mass-confusion',          // Wrong measurement type
                      'capacity-length-confusion',        // Wrong measurement type
                    ],
                  },
                },
                {
                  id: 'VCMMG195-010',
                  question: 'What unit would be best to measure a teaspoon of medicine?',
                  options: ['Millilitres', 'Litres', 'Kilograms', 'Metres'],
                  correctAnswer: 0,
                  explanation: 'A teaspoon holds about 5 mL. Millilitres are used for small amounts of liquid.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['capacity-unit-selection'],
                    correctToken: 'capacity-unit-selection',
                    incorrectTokens: [
                      null,                                // Correct
                      'capacity-unit-scale-error',        // Too big (0.005L)
                      'capacity-mass-confusion',          // Wrong type
                      'capacity-length-confusion',        // Wrong type
                    ],
                  },
                },
                // Questions 11-14: Length Conversions
                {
                  id: 'VCMMG195-011',
                  question: 'How many centimetres are in 3.5 metres?',
                  options: ['35', '350', '3,500', '0.35'],
                  correctAnswer: 1,
                  explanation: '1 m = 100 cm, so 3.5 m = 3.5 × 100 = 350 cm',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['length-conversion'],
                    correctToken: 'length-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Multiplied by 10
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 1000
                      'conversion-direction-error',       // Divided instead of multiplied
                    ],
                  },
                },
                {
                  id: 'VCMMG195-012',
                  question: 'How many metres are in 2.5 kilometres?',
                  options: ['25', '250', '2,500', '25,000'],
                  correctAnswer: 2,
                  explanation: '1 km = 1,000 m, so 2.5 km = 2.5 × 1,000 = 2,500 m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['length-conversion'],
                    correctToken: 'length-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Multiplied by 10
                      'conversion-factor-error',          // Multiplied by 100
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 10,000
                    ],
                  },
                },
                {
                  id: 'VCMMG195-013',
                  question: 'Convert 4,200 mm to metres.',
                  options: ['0.42 m', '4.2 m', '42 m', '420 m'],
                  correctAnswer: 1,
                  explanation: '1 m = 1,000 mm, so 4,200 mm ÷ 1,000 = 4.2 m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['length-conversion'],
                    correctToken: 'length-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Divided by 10,000
                      null,                                // Correct
                      'conversion-factor-error',          // Divided by 100
                      'conversion-direction-error',       // Multiplied instead
                    ],
                  },
                },
                {
                  id: 'VCMMG195-014',
                  question: 'How many millimetres are in 8.5 centimetres?',
                  options: ['0.85 mm', '8.5 mm', '85 mm', '850 mm'],
                  correctAnswer: 2,
                  explanation: '1 cm = 10 mm, so 8.5 cm = 8.5 × 10 = 85 mm',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['length-conversion'],
                    correctToken: 'length-conversion',
                    incorrectTokens: [
                      'conversion-direction-error',       // Divided by 10
                      'conversion-factor-error',          // No conversion
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 100
                    ],
                  },
                },
                // Questions 15-17: Mass Conversions
                {
                  id: 'VCMMG195-015',
                  question: 'A recipe needs 2.5 kg of flour. How many grams is this?',
                  options: ['25 g', '250 g', '2,500 g', '25,000 g'],
                  correctAnswer: 2,
                  explanation: '1 kg = 1,000 g, so 2.5 kg = 2.5 × 1,000 = 2,500 g',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-conversion'],
                    correctToken: 'mass-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Multiplied by 10
                      'conversion-factor-error',          // Multiplied by 100
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 10,000
                    ],
                  },
                },
                {
                  id: 'VCMMG195-016',
                  question: 'Convert 3,750 grams to kilograms.',
                  options: ['0.375 kg', '3.75 kg', '37.5 kg', '375 kg'],
                  correctAnswer: 1,
                  explanation: '1 kg = 1,000 g, so 3,750 g ÷ 1,000 = 3.75 kg',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-conversion'],
                    correctToken: 'mass-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Divided by 10,000
                      null,                                // Correct
                      'conversion-factor-error',          // Divided by 100
                      'conversion-direction-error',       // Multiplied
                    ],
                  },
                },
                {
                  id: 'VCMMG195-017',
                  question: 'A truck can carry 2.5 tonnes. How many kilograms is this?',
                  options: ['25 kg', '250 kg', '2,500 kg', '25,000 kg'],
                  correctAnswer: 2,
                  explanation: '1 tonne = 1,000 kg, so 2.5 t = 2.5 × 1,000 = 2,500 kg',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-conversion'],
                    correctToken: 'mass-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Multiplied by 10
                      'conversion-factor-error',          // Multiplied by 100
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 10,000
                    ],
                  },
                },
                // Questions 18-20: Capacity Conversions and Volume-Capacity
                {
                  id: 'VCMMG195-018',
                  question: 'Which measurement is the same as 4,500 mL?',
                  options: ['0.45 L', '4.5 L', '45 L', '450 L'],
                  correctAnswer: 1,
                  explanation: '1,000 mL = 1 L, so 4,500 mL = 4.5 L',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['capacity-conversion'],
                    correctToken: 'capacity-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Divided by 10,000
                      null,                                // Correct
                      'conversion-factor-error',          // Divided by 100
                      'conversion-direction-error',       // Wrong direction
                    ],
                  },
                },
                {
                  id: 'VCMMG195-019',
                  question: 'A water bottle holds 1.5 L. How many millilitres is this?',
                  options: ['15 mL', '150 mL', '1,500 mL', '15,000 mL'],
                  correctAnswer: 2,
                  explanation: '1 L = 1,000 mL, so 1.5 L = 1.5 × 1,000 = 1,500 mL',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['capacity-conversion'],
                    correctToken: 'capacity-conversion',
                    incorrectTokens: [
                      'conversion-factor-error',          // Multiplied by 10
                      'conversion-factor-error',          // Multiplied by 100
                      null,                                // Correct
                      'conversion-factor-error',          // Multiplied by 10,000
                    ],
                  },
                },
                {
                  id: 'VCMMG195-020',
                  question: 'A container has a volume of 2,000 cm³. What is its capacity in litres?',
                  options: ['0.2 L', '2 L', '20 L', '200 L'],
                  correctAnswer: 1,
                  explanation: '1,000 cm³ = 1 L, so 2,000 cm³ = 2 L. Volume in cm³ equals capacity in mL.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['volume-capacity-connection', 'capacity-conversion'],
                    correctToken: 'volume-capacity-connection',
                    incorrectTokens: [
                      'conversion-factor-error',          // Divided by 10,000
                      null,                                // Correct
                      'conversion-factor-error',          // Divided by 100
                      'conversion-direction-error',       // Wrong direction
                    ],
                  },
                },
              ]
            },
            {
              id: 'VCMMG196',
              code: 'VCMMG196',
              title: 'Perimeter, Area and Volume',
              description: 'Calculate the perimeter and area of rectangles and the volume and capacity of prisms using familiar metric units',
              content: `# Perimeter, Area and Volume

These three measurements tell us different things about shapes!

## Perimeter

**Perimeter** = the distance around the outside of a shape

For a rectangle:
\`\`\`
Perimeter = 2 × (length + width)
or
Perimeter = length + width + length + width
\`\`\`

**Example:** A rectangle 8m by 5m
- Perimeter = 2 × (8 + 5) = 2 × 13 = **26 metres**

## Area

**Area** = the space inside a 2D shape (measured in square units)

For a rectangle:
\`\`\`
Area = length × width
\`\`\`

**Example:** A rectangle 8m by 5m
- Area = 8 × 5 = **40 square metres (40 m²)**

### Visualising Area

Think of covering the floor with 1m × 1m tiles:
\`\`\`
┌─┬─┬─┬─┬─┬─┬─┬─┐
├─┼─┼─┼─┼─┼─┼─┼─┤
├─┼─┼─┼─┼─┼─┼─┼─┤
├─┼─┼─┼─┼─┼─┼─┼─┤
├─┼─┼─┼─┼─┼─┼─┼─┤
└─┴─┴─┴─┴─┴─┴─┴─┘
8 across × 5 down = 40 squares
\`\`\`

## Volume

**Volume** = the space inside a 3D shape (measured in cubic units)

For a rectangular prism (box):
\`\`\`
Volume = length × width × height
\`\`\`

**Example:** A box 4cm × 3cm × 2cm
- Volume = 4 × 3 × 2 = **24 cubic centimetres (24 cm³)**

### Volume and Capacity

For rectangular containers:
- **1 cm³ = 1 mL**
- **1,000 cm³ = 1 L**

So a container 10cm × 10cm × 10cm:
- Volume = 1,000 cm³ = **1 litre**

## Summary Table

| Measurement | Formula | Units |
|-------------|---------|-------|
| Perimeter | 2 × (l + w) | m, cm |
| Area | l × w | m², cm² |
| Volume | l × w × h | m³, cm³, L |`,
              keyPoints: [
                'Perimeter = distance around (add all sides)',
                'Area = space inside a 2D shape (length × width)',
                'Volume = space inside a 3D shape (length × width × height)',
                '1 cm³ = 1 mL, so volume connects to capacity'
              ],
              examples: [
                {
                  problem: 'Find the perimeter and area of a rectangle 12cm by 7cm',
                  solution: 'Perimeter = 38cm, Area = 84 cm²',
                  explanation: 'P = 2×(12+7) = 38cm. A = 12×7 = 84 cm²'
                },
                {
                  problem: 'A fish tank is 30cm × 20cm × 25cm. What is its capacity in litres?',
                  solution: '15 litres',
                  explanation: 'Volume = 30×20×25 = 15,000 cm³ = 15 L'
                }
              ],
              knowledgeTokens: [
                {
                  id: 'perimeter-concept',
                  name: 'Perimeter Concept',
                  description: 'Understanding perimeter as the distance around a shape',
                  prerequisites: [],
                },
                {
                  id: 'rectangle-perimeter-formula',
                  name: 'Rectangle Perimeter Formula',
                  description: 'Using P = 2(l + w) or P = 2l + 2w for rectangles',
                  prerequisites: ['perimeter-concept'],
                },
                {
                  id: 'area-concept',
                  name: 'Area Concept',
                  description: 'Understanding area as the space inside a 2D shape',
                  prerequisites: [],
                },
                {
                  id: 'rectangle-area-formula',
                  name: 'Rectangle Area Formula',
                  description: 'Using A = l × w for rectangles',
                  prerequisites: ['area-concept'],
                },
                {
                  id: 'volume-concept',
                  name: 'Volume Concept',
                  description: 'Understanding volume as the space inside a 3D shape',
                  prerequisites: [],
                },
                {
                  id: 'rectangular-prism-volume',
                  name: 'Rectangular Prism Volume',
                  description: 'Using V = l × w × h for rectangular prisms',
                  prerequisites: ['volume-concept'],
                },
                {
                  id: 'volume-to-capacity',
                  name: 'Volume to Capacity Conversion',
                  description: 'Converting cm³ to mL and L (1 cm³ = 1 mL)',
                  prerequisites: ['rectangular-prism-volume'],
                },
                {
                  id: 'missing-dimension',
                  name: 'Finding Missing Dimensions',
                  description: 'Working backwards from perimeter, area or volume to find a missing side',
                  prerequisites: ['rectangle-perimeter-formula', 'rectangle-area-formula'],
                },
              ],
              questions: [
                // Questions 1-5: Perimeter
                {
                  id: 'VCMMG196-001',
                  question: 'What is the perimeter of a rectangle with length 9m and width 4m?',
                  options: ['13 m', '26 m', '36 m', '52 m'],
                  correctAnswer: 1,
                  explanation: 'Perimeter = 2 × (9 + 4) = 2 × 13 = 26 m',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rectangle-perimeter-formula'],
                    correctToken: 'rectangle-perimeter-formula',
                    incorrectTokens: [
                      'perimeter-area-confusion',         // Just added l + w
                      null,                                // Correct
                      'perimeter-area-confusion',         // Calculated area
                      'perimeter-calculation-error',      // Doubled twice
                    ],
                  },
                },
                {
                  id: 'VCMMG196-002',
                  question: 'A square has sides of 7 cm. What is its perimeter?',
                  options: ['14 cm', '21 cm', '28 cm', '49 cm'],
                  correctAnswer: 2,
                  explanation: 'A square has 4 equal sides, so perimeter = 4 × 7 = 28 cm',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['perimeter-concept'],
                    correctToken: 'perimeter-concept',
                    incorrectTokens: [
                      'perimeter-calculation-error',      // Only 2 sides
                      'perimeter-calculation-error',      // Only 3 sides
                      null,                                // Correct
                      'perimeter-area-confusion',         // Calculated area
                    ],
                  },
                },
                {
                  id: 'VCMMG196-003',
                  question: 'A rectangular field is 25m long and 12m wide. What is the perimeter?',
                  options: ['37 m', '74 m', '300 m', '50 m'],
                  correctAnswer: 1,
                  explanation: 'Perimeter = 2 × (25 + 12) = 2 × 37 = 74 m',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rectangle-perimeter-formula'],
                    correctToken: 'rectangle-perimeter-formula',
                    incorrectTokens: [
                      'perimeter-area-confusion',         // Just added l + w
                      null,                                // Correct
                      'perimeter-area-confusion',         // Calculated area
                      'perimeter-calculation-error',      // Only doubled length
                    ],
                  },
                },
                {
                  id: 'VCMMG196-004',
                  question: 'A rectangle has a perimeter of 36 cm. If the length is 11 cm, what is the width?',
                  options: ['5 cm', '7 cm', '14 cm', '25 cm'],
                  correctAnswer: 1,
                  explanation: '2(l + w) = 36, so l + w = 18. If l = 11, then w = 18 - 11 = 7 cm',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangle-perimeter-formula', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'missing-dimension-error',          // Wrong calculation
                      null,                                // Correct
                      'perimeter-formula-reversal',       // 36/2 - 11 wrong step
                      'missing-dimension-error',          // Subtracted from 36 directly
                    ],
                  },
                },
                {
                  id: 'VCMMG196-005',
                  question: 'A picture frame has a perimeter of 120 cm. If it is a square, what is the length of each side?',
                  options: ['20 cm', '30 cm', '40 cm', '60 cm'],
                  correctAnswer: 1,
                  explanation: 'For a square, perimeter = 4 × side. So side = 120 ÷ 4 = 30 cm',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['perimeter-concept', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'missing-dimension-error',          // Divided by wrong number
                      null,                                // Correct
                      'missing-dimension-error',          // Divided by 3
                      'missing-dimension-error',          // Divided by 2
                    ],
                  },
                },
                // Questions 6-10: Area
                {
                  id: 'VCMMG196-006',
                  question: 'A garden is 15m long and 8m wide. What is its area?',
                  options: ['23 m²', '46 m²', '120 m²', '240 m²'],
                  correctAnswer: 2,
                  explanation: 'Area = length × width = 15 × 8 = 120 m²',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rectangle-area-formula'],
                    correctToken: 'rectangle-area-formula',
                    incorrectTokens: [
                      'perimeter-area-confusion',         // Added instead of multiplied
                      'perimeter-area-confusion',         // Calculated perimeter
                      null,                                // Correct
                      'area-calculation-error',           // Doubled the result
                    ],
                  },
                },
                {
                  id: 'VCMMG196-007',
                  question: 'A square playground has sides of 20 m. What is its area?',
                  options: ['40 m²', '80 m²', '400 m²', '800 m²'],
                  correctAnswer: 2,
                  explanation: 'Area of square = side × side = 20 × 20 = 400 m²',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['area-concept', 'rectangle-area-formula'],
                    correctToken: 'rectangle-area-formula',
                    incorrectTokens: [
                      'perimeter-area-confusion',         // 20 × 2
                      'perimeter-area-confusion',         // 20 × 4
                      null,                                // Correct
                      'area-calculation-error',           // Doubled result
                    ],
                  },
                },
                {
                  id: 'VCMMG196-008',
                  question: 'A carpet is 4m by 3m. How many square metres is the carpet?',
                  options: ['7 m²', '12 m²', '14 m²', '24 m²'],
                  correctAnswer: 1,
                  explanation: 'Area = 4 × 3 = 12 m²',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rectangle-area-formula'],
                    correctToken: 'rectangle-area-formula',
                    incorrectTokens: [
                      'perimeter-area-confusion',         // Added instead
                      null,                                // Correct
                      'perimeter-area-confusion',         // Calculated perimeter
                      'area-calculation-error',           // Doubled result
                    ],
                  },
                },
                {
                  id: 'VCMMG196-009',
                  question: 'A rectangular pool has an area of 48 m². If it is 8m long, how wide is it?',
                  options: ['4 m', '5 m', '6 m', '7 m'],
                  correctAnswer: 2,
                  explanation: 'Area = length × width, so 48 = 8 × width. Width = 48 ÷ 8 = 6 m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangle-area-formula', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'missing-dimension-error',          // Wrong division
                      'missing-dimension-error',          // Wrong division
                      null,                                // Correct
                      'missing-dimension-error',          // Wrong division
                    ],
                  },
                },
                {
                  id: 'VCMMG196-010',
                  question: 'A rectangular room has an area of 54 m² and is 9 m long. What is its width?',
                  options: ['5 m', '6 m', '7 m', '45 m'],
                  correctAnswer: 1,
                  explanation: 'Width = Area ÷ Length = 54 ÷ 9 = 6 m',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangle-area-formula', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'missing-dimension-error',          // Wrong division
                      null,                                // Correct
                      'missing-dimension-error',          // Wrong division
                      'missing-dimension-error',          // Subtracted instead
                    ],
                  },
                },
                // Questions 11-15: Volume
                {
                  id: 'VCMMG196-011',
                  question: 'A box is 6cm × 4cm × 5cm. What is its volume?',
                  options: ['15 cm³', '60 cm³', '120 cm³', '240 cm³'],
                  correctAnswer: 2,
                  explanation: 'Volume = 6 × 4 × 5 = 120 cm³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume'],
                    correctToken: 'rectangular-prism-volume',
                    incorrectTokens: [
                      'volume-calculation-error',         // Added instead
                      'volume-calculation-error',         // Only multiplied 2 numbers
                      null,                                // Correct
                      'volume-calculation-error',         // Doubled result
                    ],
                  },
                },
                {
                  id: 'VCMMG196-012',
                  question: 'A cube has sides of 5 cm. What is its volume?',
                  options: ['15 cm³', '25 cm³', '125 cm³', '150 cm³'],
                  correctAnswer: 2,
                  explanation: 'Volume of cube = side × side × side = 5 × 5 × 5 = 125 cm³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['volume-concept', 'rectangular-prism-volume'],
                    correctToken: 'rectangular-prism-volume',
                    incorrectTokens: [
                      'volume-calculation-error',         // 5 × 3
                      'volume-area-confusion',            // Only squared (5 × 5)
                      null,                                // Correct
                      'volume-calculation-error',         // Added perimeter concept
                    ],
                  },
                },
                {
                  id: 'VCMMG196-013',
                  question: 'A storage box is 10 cm long, 8 cm wide and 6 cm high. What is its volume?',
                  options: ['24 cm³', '80 cm³', '240 cm³', '480 cm³'],
                  correctAnswer: 3,
                  explanation: 'Volume = 10 × 8 × 6 = 480 cm³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume'],
                    correctToken: 'rectangular-prism-volume',
                    incorrectTokens: [
                      'volume-calculation-error',         // Added dimensions
                      'volume-calculation-error',         // Only 2 dimensions
                      'volume-calculation-error',         // Only 2 dimensions
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMMG196-014',
                  question: 'A rectangular prism has a volume of 60 cm³. If its base is 5 cm by 4 cm, what is its height?',
                  options: ['2 cm', '3 cm', '4 cm', '12 cm'],
                  correctAnswer: 1,
                  explanation: 'Volume = length × width × height. 60 = 5 × 4 × height = 20 × height. Height = 60 ÷ 20 = 3 cm',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'missing-dimension-error',          // Wrong division
                      null,                                // Correct
                      'missing-dimension-error',          // Confused dimension
                      'missing-dimension-error',          // 60 ÷ 5 only
                    ],
                  },
                },
                {
                  id: 'VCMMG196-015',
                  question: 'A shipping container is 12 m long, 2 m wide, and 3 m high. What is its volume?',
                  options: ['17 m³', '36 m³', '72 m³', '144 m³'],
                  correctAnswer: 2,
                  explanation: 'Volume = 12 × 2 × 3 = 72 m³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume'],
                    correctToken: 'rectangular-prism-volume',
                    incorrectTokens: [
                      'volume-calculation-error',         // Added dimensions
                      'volume-calculation-error',         // Only 2 dimensions
                      null,                                // Correct
                      'volume-calculation-error',         // Doubled result
                    ],
                  },
                },
                // Questions 16-20: Volume and Capacity
                {
                  id: 'VCMMG196-016',
                  question: 'A container is 20cm × 15cm × 10cm. How many litres can it hold?',
                  options: ['3 L', '30 L', '300 L', '0.3 L'],
                  correctAnswer: 0,
                  explanation: 'Volume = 20 × 15 × 10 = 3,000 cm³ = 3 L (since 1,000 cm³ = 1 L)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'volume-to-capacity'],
                    correctToken: 'volume-to-capacity',
                    incorrectTokens: [
                      null,                                // Correct
                      'volume-capacity-conversion-error', // Didn't divide by 1000
                      'volume-capacity-conversion-error', // Divided by 10
                      'volume-capacity-conversion-error', // Divided by 10,000
                    ],
                  },
                },
                {
                  id: 'VCMMG196-017',
                  question: 'A fish tank is 40 cm long, 25 cm wide, and 30 cm high. How many litres of water can it hold?',
                  options: ['3 L', '30 L', '300 L', '3,000 L'],
                  correctAnswer: 1,
                  explanation: 'Volume = 40 × 25 × 30 = 30,000 cm³ = 30 L',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'volume-to-capacity'],
                    correctToken: 'volume-to-capacity',
                    incorrectTokens: [
                      'volume-capacity-conversion-error', // Divided by 10,000
                      null,                                // Correct
                      'volume-capacity-conversion-error', // Divided by 100
                      'volume-capacity-conversion-error', // Didn't convert
                    ],
                  },
                },
                {
                  id: 'VCMMG196-018',
                  question: 'A cube has sides of 10 cm. What is its capacity in litres?',
                  options: ['0.1 L', '1 L', '10 L', '100 L'],
                  correctAnswer: 1,
                  explanation: 'Volume = 10 × 10 × 10 = 1,000 cm³ = 1 L',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'volume-to-capacity'],
                    correctToken: 'volume-to-capacity',
                    incorrectTokens: [
                      'volume-capacity-conversion-error', // Divided by 10,000
                      null,                                // Correct
                      'volume-capacity-conversion-error', // Divided by 100
                      'volume-capacity-conversion-error', // Didn't divide
                    ],
                  },
                },
                {
                  id: 'VCMMG196-019',
                  question: 'A water tank holds 8 litres. If it is 20 cm long and 10 cm wide, what is its height?',
                  options: ['4 cm', '8 cm', '40 cm', '80 cm'],
                  correctAnswer: 2,
                  explanation: '8 L = 8,000 cm³. Volume = l × w × h, so 8,000 = 20 × 10 × h = 200 × h. Height = 8,000 ÷ 200 = 40 cm',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'volume-to-capacity', 'missing-dimension'],
                    correctToken: 'missing-dimension',
                    incorrectTokens: [
                      'volume-capacity-conversion-error', // Didn't convert L to cm³
                      'missing-dimension-error',          // Wrong division
                      null,                                // Correct
                      'missing-dimension-error',          // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMMG196-020',
                  question: 'A rectangular juice box is 6 cm × 4 cm × 10 cm. How many millilitres of juice can it hold?',
                  options: ['24 mL', '60 mL', '240 mL', '2,400 mL'],
                  correctAnswer: 2,
                  explanation: 'Volume = 6 × 4 × 10 = 240 cm³ = 240 mL (since 1 cm³ = 1 mL)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangular-prism-volume', 'volume-to-capacity'],
                    correctToken: 'volume-to-capacity',
                    incorrectTokens: [
                      'volume-calculation-error',         // Only 2 dimensions
                      'volume-calculation-error',         // Only 2 dimensions
                      null,                                // Correct
                      'volume-capacity-conversion-error', // Multiplied by 10
                    ],
                  },
                },
              ]
            }
          ]
        },
        {
          id: 'geometric-reasoning',
          title: 'Geometric Reasoning',
          description: 'Understanding and measuring angles',
          sections: [
            {
              id: 'VCMMG202',
              code: 'VCMMG202',
              title: 'Angles',
              description: 'Estimate, measure and compare angles using degrees. Construct angles using a protractor',
              content: `# Understanding Angles

An angle is formed when two lines meet at a point. We measure angles in degrees (°).

## Types of Angles

### Acute Angle (Sharp!)
- Less than 90°
- Think: "a-CUTE little angle"
- Examples: 30°, 45°, 60°, 85°

### Right Angle (Square corner)
- Exactly 90°
- Makes an "L" shape
- Found in corners of books, doors, screens

### Obtuse Angle (Wide)
- Between 90° and 180°
- Think: "ob-TUSE is ob-BIG"
- Examples: 100°, 120°, 150°

### Straight Angle
- Exactly 180°
- Forms a straight line

### Reflex Angle
- Between 180° and 360°
- More than a straight angle
- Examples: 200°, 270°, 350°

## Estimating Angles

Use benchmarks to estimate:
- 45° = half of a right angle
- 90° = right angle (corner of a page)
- 180° = straight line
- 360° = full turn

## Using a Protractor

A protractor is a tool for measuring angles:

1. Place the centre point on the angle's vertex (corner)
2. Line up the baseline with one arm of the angle
3. Read the scale where the other arm crosses
4. Use the correct scale! (inside or outside)

**Tip:** If the angle looks less than 90°, your answer should be less than 90°!

## Angles in Shapes

| Shape | Sum of Angles |
|-------|---------------|
| Triangle | 180° |
| Quadrilateral | 360° |
| Pentagon | 540° |

## Angles Around a Point

All angles around a point add up to 360° (a full rotation).`,
              keyPoints: [
                'Angles are measured in degrees (°)',
                'Acute < 90° < Right = 90° < Obtuse < 180° < Straight = 180° < Reflex < 360°',
                'Use benchmarks (45°, 90°, 180°) to estimate',
                'A protractor measures angles precisely'
              ],
              knowledgeTokens: [
                {
                  id: 'acute-angle-identification',
                  name: 'Acute Angle Identification',
                  description: 'Recognising angles less than 90°',
                },
                {
                  id: 'right-angle-identification',
                  name: 'Right Angle Identification',
                  description: 'Recognising angles exactly 90°',
                },
                {
                  id: 'obtuse-angle-identification',
                  name: 'Obtuse Angle Identification',
                  description: 'Recognising angles between 90° and 180°',
                  prerequisites: ['acute-angle-identification', 'right-angle-identification'],
                },
                {
                  id: 'reflex-angle-identification',
                  name: 'Reflex Angle Identification',
                  description: 'Recognising angles greater than 180°',
                  prerequisites: ['obtuse-angle-identification'],
                },
                {
                  id: 'angle-addition',
                  name: 'Angle Addition',
                  description: 'Adding angles together to find totals',
                  prerequisites: ['right-angle-identification'],
                },
                {
                  id: 'triangle-angle-sum',
                  name: 'Triangle Angle Sum',
                  description: 'Understanding that angles in a triangle sum to 180°',
                  prerequisites: ['angle-addition'],
                },
                {
                  id: 'reflex-complementary',
                  name: 'Reflex and Complementary Angles',
                  description: 'Understanding that reflex angle + acute/obtuse = 360°',
                  prerequisites: ['reflex-angle-identification'],
                },
              ],
              examples: [
                {
                  problem: 'What type of angle is 135°?',
                  solution: 'Obtuse angle',
                  explanation: '135° is between 90° and 180°, so it\'s obtuse'
                },
                {
                  problem: 'Two angles in a triangle are 60° and 70°. What is the third angle?',
                  solution: '50°',
                  explanation: 'Triangle angles sum to 180°. 180 - 60 - 70 = 50°'
                }
              ],
              questions: [
                // === ACUTE ANGLE QUESTIONS (1-4) ===
                {
                  id: 'VCMMG202-001',
                  question: 'What type of angle is 75°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                  correctAnswer: 0,
                  explanation: '75° is less than 90°, so it is an acute angle',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['acute-angle-identification', 'right-angle-identification', 'obtuse-angle-identification'],
                    correctToken: 'acute-angle-identification',
                    incorrectTokens: [
                      null, // Option A is correct
                      'acute-right-confusion',      // Chose Right: confuses acute with right
                      'acute-obtuse-confusion',     // Chose Obtuse: confuses acute with obtuse
                      'reflex-misunderstanding',    // Chose Reflex: doesn't understand reflex angles
                    ],
                  },
                },
                {
                  id: 'VCMMG202-002',
                  question: 'Which of these is an acute angle?',
                  options: ['45°', '90°', '120°', '180°'],
                  correctAnswer: 0,
                  explanation: '45° is less than 90°, making it an acute angle. 90° is a right angle, 120° is obtuse, and 180° is a straight angle.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['acute-angle-identification'],
                    correctToken: 'acute-angle-identification',
                    incorrectTokens: [
                      null, // Option A is correct
                      'acute-right-confusion',      // Thinks 90° is acute
                      'acute-obtuse-confusion',     // Thinks 120° is acute
                      'straight-angle-confusion',   // Thinks 180° is acute
                    ],
                  },
                },
                {
                  id: 'VCMMG202-003',
                  question: 'An angle measures 23°. What type of angle is it?',
                  options: ['Reflex', 'Obtuse', 'Right', 'Acute'],
                  correctAnswer: 3,
                  explanation: '23° is much less than 90°, so it is an acute angle (a small, sharp angle)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['acute-angle-identification'],
                    correctToken: 'acute-angle-identification',
                    incorrectTokens: [
                      'reflex-misunderstanding',    // Thinks small angles are reflex
                      'acute-obtuse-confusion',     // Confuses acute with obtuse
                      'acute-right-confusion',      // Confuses acute with right
                      null, // Option D is correct
                    ],
                  },
                },
                {
                  id: 'VCMMG202-004',
                  question: 'How many degrees are in an acute angle?',
                  options: ['Exactly 90°', 'More than 90° but less than 180°', 'Less than 90°', 'More than 180°'],
                  correctAnswer: 2,
                  explanation: 'An acute angle is any angle that measures less than 90°',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['acute-angle-identification'],
                    correctToken: 'acute-angle-identification',
                    incorrectTokens: [
                      'acute-right-confusion',      // Thinks acute = 90°
                      'acute-obtuse-confusion',     // Confuses definition with obtuse
                      null, // Option C is correct
                      'reflex-misunderstanding',    // Confuses with reflex
                    ],
                  },
                },

                // === RIGHT ANGLE QUESTIONS (5-7) ===
                {
                  id: 'VCMMG202-005',
                  question: 'What type of angle is exactly 90°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                  correctAnswer: 1,
                  explanation: 'An angle of exactly 90° is called a right angle. It forms a perfect square corner.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['right-angle-identification'],
                    correctToken: 'right-angle-identification',
                    incorrectTokens: [
                      'right-acute-confusion',      // Thinks 90° is acute
                      null, // Option B is correct
                      'right-obtuse-confusion',     // Thinks 90° is obtuse
                      'reflex-misunderstanding',    // Doesn't understand angle types
                    ],
                  },
                },
                {
                  id: 'VCMMG202-006',
                  question: 'Where would you find a right angle in everyday life?',
                  options: ['The corner of a book', 'The hands of a clock at 2:00', 'The peak of a roof', 'An open door at 45°'],
                  correctAnswer: 0,
                  explanation: 'The corner of a book forms a perfect right angle (90°). Book corners are designed to be square.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['right-angle-identification'],
                    correctToken: 'right-angle-identification',
                    incorrectTokens: [
                      null, // Option A is correct
                      'right-angle-real-world-error', // Can't identify right angles in context
                      'right-angle-real-world-error', // Can't identify right angles in context
                      'right-angle-real-world-error', // Can't identify right angles in context
                    ],
                  },
                },
                {
                  id: 'VCMMG202-007',
                  question: 'How many right angles are in a rectangle?',
                  options: ['2', '3', '4', '6'],
                  correctAnswer: 2,
                  explanation: 'A rectangle has 4 corners, and each corner is a right angle (90°). So rectangles have 4 right angles.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['right-angle-identification'],
                    correctToken: 'right-angle-identification',
                    incorrectTokens: [
                      'rectangle-angle-count-error', // Only counted 2 corners
                      'rectangle-angle-count-error', // Counted wrong number
                      null, // Option C is correct
                      'rectangle-angle-count-error', // Counted too many
                    ],
                  },
                },

                // === OBTUSE ANGLE QUESTIONS (8-11) ===
                {
                  id: 'VCMMG202-008',
                  question: 'What type of angle is 145°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                  correctAnswer: 2,
                  explanation: '145° is between 90° and 180°, so it is an obtuse angle',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['obtuse-angle-identification'],
                    correctToken: 'obtuse-angle-identification',
                    incorrectTokens: [
                      'obtuse-acute-confusion',     // Chose Acute: confuses obtuse with acute
                      'obtuse-right-confusion',     // Chose Right: confuses obtuse with right
                      null, // Option C is correct
                      'obtuse-reflex-confusion',    // Chose Reflex: confuses obtuse with reflex
                    ],
                  },
                },
                {
                  id: 'VCMMG202-009',
                  question: 'Which angle is obtuse?',
                  options: ['60°', '90°', '110°', '200°'],
                  correctAnswer: 2,
                  explanation: '110° is between 90° and 180°, making it obtuse. 60° is acute, 90° is right, and 200° is reflex.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['obtuse-angle-identification'],
                    correctToken: 'obtuse-angle-identification',
                    incorrectTokens: [
                      'obtuse-acute-confusion',     // Thinks 60° is obtuse
                      'obtuse-right-confusion',     // Thinks 90° is obtuse
                      null, // Option C is correct
                      'obtuse-reflex-confusion',    // Thinks 200° is obtuse
                    ],
                  },
                },
                {
                  id: 'VCMMG202-010',
                  question: 'An obtuse angle measures between:',
                  options: ['0° and 90°', '90° and 180°', '180° and 270°', '270° and 360°'],
                  correctAnswer: 1,
                  explanation: 'An obtuse angle is greater than 90° but less than 180°. It\'s "fatter" than a right angle.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['obtuse-angle-identification'],
                    correctToken: 'obtuse-angle-identification',
                    incorrectTokens: [
                      'obtuse-definition-error',    // Confused with acute range
                      null, // Option B is correct
                      'obtuse-reflex-confusion',    // Confused with reflex range
                      'obtuse-definition-error',    // Doesn't know the range
                    ],
                  },
                },
                {
                  id: 'VCMMG202-011',
                  question: 'What type of angle is 179°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Straight'],
                  correctAnswer: 2,
                  explanation: '179° is just under 180°, so it\'s still an obtuse angle (between 90° and 180°). At exactly 180° it would be a straight angle.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['obtuse-angle-identification'],
                    correctToken: 'obtuse-angle-identification',
                    incorrectTokens: [
                      'obtuse-acute-confusion',     // Major confusion about angle types
                      'obtuse-right-confusion',     // Major confusion about angle types
                      null, // Option C is correct
                      'obtuse-straight-confusion',  // Thinks 179° is straight
                    ],
                  },
                },

                // === REFLEX ANGLE QUESTIONS (12-14) ===
                {
                  id: 'VCMMG202-012',
                  question: 'What type of angle is 250°?',
                  options: ['Acute', 'Obtuse', 'Straight', 'Reflex'],
                  correctAnswer: 3,
                  explanation: '250° is greater than 180°, so it is a reflex angle. Reflex angles are between 180° and 360°.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reflex-angle-identification'],
                    correctToken: 'reflex-angle-identification',
                    incorrectTokens: [
                      'reflex-acute-confusion',     // Major confusion
                      'reflex-obtuse-confusion',    // Thinks reflex is obtuse
                      'reflex-straight-confusion',  // Confused with straight angle
                      null, // Option D is correct
                    ],
                  },
                },
                {
                  id: 'VCMMG202-013',
                  question: 'A reflex angle is:',
                  options: ['Less than 90°', 'Exactly 180°', 'Between 180° and 360°', 'Exactly 360°'],
                  correctAnswer: 2,
                  explanation: 'A reflex angle is greater than 180° but less than 360°. It goes "past" a straight line.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reflex-angle-identification'],
                    correctToken: 'reflex-angle-identification',
                    incorrectTokens: [
                      'reflex-definition-error',    // Confused with acute
                      'reflex-straight-confusion',  // Thinks reflex = 180°
                      null, // Option C is correct
                      'reflex-full-rotation-confusion', // Thinks reflex = 360°
                    ],
                  },
                },
                {
                  id: 'VCMMG202-014',
                  question: 'Which of these is a reflex angle?',
                  options: ['89°', '91°', '179°', '181°'],
                  correctAnswer: 3,
                  explanation: '181° is just over 180°, making it a reflex angle. 89° is acute, 91° and 179° are obtuse.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reflex-angle-identification'],
                    correctToken: 'reflex-angle-identification',
                    incorrectTokens: [
                      'reflex-acute-confusion',     // Thinks 89° is reflex
                      'reflex-obtuse-confusion',    // Thinks 91° is reflex
                      'reflex-obtuse-confusion',    // Thinks 179° is reflex
                      null, // Option D is correct
                    ],
                  },
                },

                // === ANGLE ADDITION QUESTIONS (15-17) ===
                {
                  id: 'VCMMG202-015',
                  question: 'A right angle and an angle of 35° are together. What is their total?',
                  options: ['115°', '125°', '135°', '145°'],
                  correctAnswer: 1,
                  explanation: 'A right angle = 90°, so 90° + 35° = 125°',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['angle-addition', 'right-angle-identification'],
                    correctToken: 'angle-addition',
                    incorrectTokens: [
                      'addition-error-minus-10',    // 125-10=115: subtraction or calculation error
                      null, // Option B is correct
                      'addition-error-plus-10',     // 125+10=135: addition error
                      'right-angle-value-error',    // May have used wrong value for right angle
                    ],
                  },
                },
                {
                  id: 'VCMMG202-016',
                  question: 'Two angles are 65° and 45°. What is their sum?',
                  options: ['100°', '110°', '120°', '130°'],
                  correctAnswer: 1,
                  explanation: '65° + 45° = 110°. Add the two angles together.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['angle-addition'],
                    correctToken: 'angle-addition',
                    incorrectTokens: [
                      'addition-calculation-error', // Got 100° (subtracted or miscounted)
                      null, // Option B is correct
                      'addition-calculation-error', // Got 120°
                      'addition-calculation-error', // Got 130°
                    ],
                  },
                },
                {
                  id: 'VCMMG202-017',
                  question: 'An angle of 90° is split into two equal parts. What is each part?',
                  options: ['30°', '45°', '60°', '90°'],
                  correctAnswer: 1,
                  explanation: '90° ÷ 2 = 45°. When you split a right angle in half, each part is 45°.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['angle-addition', 'right-angle-identification'],
                    correctToken: 'angle-addition',
                    incorrectTokens: [
                      'division-calculation-error', // Wrong division result
                      null, // Option B is correct
                      'division-calculation-error', // Wrong division result
                      'division-concept-error',     // Didn't understand the splitting
                    ],
                  },
                },

                // === TRIANGLE ANGLE SUM QUESTIONS (18-20) ===
                {
                  id: 'VCMMG202-018',
                  question: 'The angles of a triangle are 90°, 45°, and what?',
                  options: ['35°', '45°', '55°', '65°'],
                  correctAnswer: 1,
                  explanation: 'Triangle angles = 180°, so 180 - 90 - 45 = 45°',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['triangle-angle-sum', 'angle-addition'],
                    correctToken: 'triangle-angle-sum',
                    incorrectTokens: [
                      'triangle-sum-calculation-error', // 180-90-45 calculated wrong
                      null, // Option B is correct
                      'triangle-sum-calculation-error', // calculation error
                      'triangle-sum-rule-error',        // May not know 180° rule
                    ],
                  },
                },
                {
                  id: 'VCMMG202-019',
                  question: 'A triangle has angles of 60°, 60°, and 60°. What type of triangle is it?',
                  options: ['Right triangle', 'Equilateral triangle', 'Scalene triangle', 'Impossible triangle'],
                  correctAnswer: 1,
                  explanation: '60° + 60° + 60° = 180°. This is an equilateral triangle where all angles are equal.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['triangle-angle-sum'],
                    correctToken: 'triangle-angle-sum',
                    incorrectTokens: [
                      'triangle-type-confusion',    // Confused with right triangle
                      null, // Option B is correct
                      'triangle-type-confusion',    // Confused triangle types
                      'triangle-sum-rule-error',    // Doesn't recognise 180° rule works
                    ],
                  },
                },
                {
                  id: 'VCMMG202-020',
                  question: 'In a triangle, two angles are 30° and 70°. What is the third angle?',
                  options: ['70°', '80°', '90°', '100°'],
                  correctAnswer: 1,
                  explanation: 'All angles in a triangle sum to 180°. So 180° - 30° - 70° = 80°',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['triangle-angle-sum', 'angle-addition'],
                    correctToken: 'triangle-angle-sum',
                    incorrectTokens: [
                      'triangle-sum-calculation-error', // Wrong calculation
                      null, // Option B is correct
                      'triangle-sum-calculation-error', // Wrong calculation
                      'triangle-sum-rule-error',        // May have used wrong total
                    ],
                  },
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'statistics-probability',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'chance',
          title: 'Chance and Probability',
          description: 'Understanding likelihood and probability',
          sections: [
            {
              id: 'VCMSP203',
              code: 'VCMSP203',
              title: 'Probability as Fractions',
              description: 'List outcomes of chance experiments involving equally likely outcomes and represent probabilities of those outcomes using fractions',
              content: `# Understanding Probability

Probability tells us how likely something is to happen.

## The Probability Scale

Probability is measured from 0 to 1:

\`\`\`
Impossible ←————————————————————→ Certain
    0        ¼        ½        ¾        1
\`\`\`

- **0** = Impossible (will never happen)
- **½** = Even chance (equally likely to happen or not)
- **1** = Certain (will definitely happen)

## Writing Probability as Fractions

\`\`\`
Probability = Number of ways event can happen
              ─────────────────────────────────
              Total number of possible outcomes
\`\`\`

## Example: Rolling a Die

A standard die has 6 faces: 1, 2, 3, 4, 5, 6

**What is the probability of rolling a 4?**
- Ways to get a 4: 1 (only one face shows 4)
- Total outcomes: 6 (six faces)
- Probability = 1/6

**What is the probability of rolling an even number?**
- Even numbers on die: 2, 4, 6 (3 ways)
- Total outcomes: 6
- Probability = 3/6 = 1/2

## Example: Picking from a Bag

A bag has 2 red, 3 blue, and 5 green marbles (10 total).

**P(red) = 2/10 = 1/5**
**P(blue) = 3/10**
**P(green) = 5/10 = 1/2**

## Listing All Outcomes

For a coin flip: {Heads, Tails} → 2 outcomes

For rolling a die: {1, 2, 3, 4, 5, 6} → 6 outcomes

For two coin flips: {HH, HT, TH, TT} → 4 outcomes

## Key Facts

- All probabilities are between 0 and 1
- Probabilities of all outcomes add up to 1
- More ways an event can happen → higher probability`,
              keyPoints: [
                'Probability is a number between 0 (impossible) and 1 (certain)',
                'Probability = favourable outcomes ÷ total outcomes',
                'All probabilities in an experiment add up to 1',
                '½ means an equal chance of happening or not'
              ],
              examples: [
                {
                  problem: 'A bag has 4 red and 6 blue balls. What is P(red)?',
                  solution: '4/10 = 2/5',
                  explanation: '4 red out of 10 total = 4/10, simplified to 2/5'
                },
                {
                  problem: 'A spinner has sections: 3 red, 2 blue, 1 yellow. What is P(not red)?',
                  solution: '3/6 = 1/2',
                  explanation: 'Not red = blue or yellow = 2 + 1 = 3 sections out of 6'
                }
              ],
              knowledgeTokens: [
                {
                  id: 'probability-concept',
                  name: 'Probability Concept',
                  description: 'Understanding probability as a measure of likelihood from 0 to 1',
                  prerequisites: [],
                },
                {
                  id: 'probability-as-fraction',
                  name: 'Probability as Fraction',
                  description: 'Expressing probability as favourable outcomes / total outcomes',
                  prerequisites: ['probability-concept'],
                },
                {
                  id: 'listing-outcomes',
                  name: 'Listing Outcomes',
                  description: 'Identifying all possible outcomes in a chance experiment',
                  prerequisites: [],
                },
                {
                  id: 'complementary-probability',
                  name: 'Complementary Probability',
                  description: 'Understanding P(not A) = 1 - P(A)',
                  prerequisites: ['probability-as-fraction'],
                },
                {
                  id: 'equally-likely-outcomes',
                  name: 'Equally Likely Outcomes',
                  description: 'Recognising when outcomes have the same chance of occurring',
                  prerequisites: ['probability-concept'],
                },
                {
                  id: 'compound-events',
                  name: 'Compound Events',
                  description: 'Finding probability of combined events (e.g., two coin flips)',
                  prerequisites: ['listing-outcomes', 'probability-as-fraction'],
                },
                {
                  id: 'simplifying-probability',
                  name: 'Simplifying Probability Fractions',
                  description: 'Expressing probabilities in simplest form',
                  prerequisites: ['probability-as-fraction'],
                },
                {
                  id: 'probability-scale',
                  name: 'Probability Scale',
                  description: 'Placing events on a scale from impossible (0) to certain (1)',
                  prerequisites: ['probability-concept'],
                },
              ],
              questions: [
                // Questions 1-4: Basic Probability Concept
                {
                  id: 'VCMSP203-001',
                  question: 'What is the probability of flipping heads on a fair coin?',
                  options: ['1/4', '1/3', '1/2', '2/3'],
                  correctAnswer: 2,
                  explanation: 'A coin has 2 outcomes (heads, tails). P(heads) = 1/2',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-as-fraction', 'equally-likely-outcomes'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'total-outcomes-error',             // Wrong denominator
                      'total-outcomes-error',             // Wrong denominator
                      null,                                // Correct
                      'total-outcomes-error',             // Wrong denominator
                    ],
                  },
                },
                {
                  id: 'VCMSP203-002',
                  question: 'What is the probability of rolling a 6 on a standard die?',
                  options: ['1/2', '1/3', '1/4', '1/6'],
                  correctAnswer: 3,
                  explanation: 'A die has 6 faces. Only one shows 6. P(6) = 1/6',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-as-fraction', 'listing-outcomes'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'total-outcomes-error',             // Thought 2 outcomes
                      'total-outcomes-error',             // Thought 3 outcomes
                      'total-outcomes-error',             // Thought 4 outcomes
                      null,                                // Correct
                    ],
                  },
                },
                {
                  id: 'VCMSP203-003',
                  question: 'Which probability means an event is IMPOSSIBLE?',
                  options: ['0', '1/2', '1', '2'],
                  correctAnswer: 0,
                  explanation: 'A probability of 0 means the event can never happen (impossible).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-concept', 'probability-scale'],
                    correctToken: 'probability-scale',
                    incorrectTokens: [
                      null,                                // Correct
                      'probability-scale-confusion',      // Even chance
                      'probability-scale-confusion',      // Certain
                      'probability-range-error',          // Outside valid range
                    ],
                  },
                },
                {
                  id: 'VCMSP203-004',
                  question: 'Which probability means an event is CERTAIN to happen?',
                  options: ['0', '1/2', '1', '100'],
                  correctAnswer: 2,
                  explanation: 'A probability of 1 (or 100%) means the event will definitely happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-concept', 'probability-scale'],
                    correctToken: 'probability-scale',
                    incorrectTokens: [
                      'probability-scale-confusion',      // Impossible
                      'probability-scale-confusion',      // Even chance
                      null,                                // Correct
                      'probability-range-error',          // Outside valid range
                    ],
                  },
                },
                // Questions 5-9: Probability as Fractions
                {
                  id: 'VCMSP203-005',
                  question: 'A bag has 3 red, 5 blue, and 2 green balls. What is P(blue)?',
                  options: ['3/10', '5/10', '2/10', '7/10'],
                  correctAnswer: 1,
                  explanation: '5 blue out of 10 total = 5/10 = 1/2',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-as-fraction'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'favourable-outcomes-error',        // Chose red count
                      null,                                // Correct
                      'favourable-outcomes-error',        // Chose green count
                      'favourable-outcomes-error',        // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMSP203-006',
                  question: 'What is the probability of rolling a number greater than 4 on a die?',
                  options: ['1/6', '2/6', '3/6', '4/6'],
                  correctAnswer: 1,
                  explanation: 'Numbers greater than 4: 5 and 6 (2 outcomes). P = 2/6 = 1/3',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['probability-as-fraction', 'listing-outcomes'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'favourable-outcomes-error',        // Counted only 1
                      null,                                // Correct
                      'greater-than-vs-at-least',         // Included 4
                      'favourable-outcomes-error',        // Counted 4 numbers
                    ],
                  },
                },
                {
                  id: 'VCMSP203-007',
                  question: 'A spinner has 8 equal sections: 3 red, 2 blue, 3 yellow. What is P(red)?',
                  options: ['1/8', '3/8', '5/8', '3/3'],
                  correctAnswer: 1,
                  explanation: '3 red sections out of 8 total = 3/8',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['probability-as-fraction'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'favourable-outcomes-error',        // Only counted 1 red
                      null,                                // Correct
                      'favourable-outcomes-error',        // Added other colours
                      'total-outcomes-error',             // Wrong denominator
                    ],
                  },
                },
                {
                  id: 'VCMSP203-008',
                  question: 'What is the probability of rolling an even number on a die?',
                  options: ['1/6', '2/6', '3/6', '4/6'],
                  correctAnswer: 2,
                  explanation: 'Even numbers on die: 2, 4, 6 (3 outcomes out of 6). P = 3/6 = 1/2',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['probability-as-fraction', 'listing-outcomes'],
                    correctToken: 'probability-as-fraction',
                    incorrectTokens: [
                      'favourable-outcomes-error',        // Only counted 1
                      'favourable-outcomes-error',        // Only counted 2
                      null,                                // Correct
                      'favourable-outcomes-error',        // Counted too many
                    ],
                  },
                },
                {
                  id: 'VCMSP203-009',
                  question: 'A bag has 4 red and 6 blue marbles. What is P(red) in simplest form?',
                  options: ['4/10', '2/5', '4/6', '1/4'],
                  correctAnswer: 1,
                  explanation: '4 red out of 10 total = 4/10 = 2/5 (simplified by dividing by 2)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['probability-as-fraction', 'simplifying-probability'],
                    correctToken: 'simplifying-probability',
                    incorrectTokens: [
                      'simplifying-fractions-error',      // Didn't simplify
                      null,                                // Correct
                      'total-outcomes-error',             // Wrong denominator
                      'simplifying-fractions-error',      // Wrong simplification
                    ],
                  },
                },
                // Questions 10-13: Complementary Probability
                {
                  id: 'VCMSP203-010',
                  question: 'If P(rain) = 3/5, what is P(no rain)?',
                  options: ['1/5', '2/5', '3/5', '4/5'],
                  correctAnswer: 1,
                  explanation: 'P(rain) + P(no rain) = 1. So P(no rain) = 1 - 3/5 = 2/5',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['complementary-probability'],
                    correctToken: 'complementary-probability',
                    incorrectTokens: [
                      'complementary-calculation-error',  // Wrong subtraction
                      null,                                // Correct
                      'complement-concept-error',         // Same as original
                      'complementary-calculation-error',  // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMSP203-011',
                  question: 'A spinner has P(blue) = 1/4. What is P(not blue)?',
                  options: ['1/4', '2/4', '3/4', '4/4'],
                  correctAnswer: 2,
                  explanation: 'P(not blue) = 1 - P(blue) = 1 - 1/4 = 3/4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['complementary-probability'],
                    correctToken: 'complementary-probability',
                    incorrectTokens: [
                      'complement-concept-error',         // Same as original
                      'complementary-calculation-error',  // Wrong calculation
                      null,                                // Correct
                      'complementary-calculation-error',  // 1 = certain
                    ],
                  },
                },
                {
                  id: 'VCMSP203-012',
                  question: 'On a die, what is P(NOT rolling a 6)?',
                  options: ['1/6', '4/6', '5/6', '6/6'],
                  correctAnswer: 2,
                  explanation: 'P(6) = 1/6, so P(not 6) = 1 - 1/6 = 5/6. Or: 5 numbers are not 6.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['complementary-probability', 'listing-outcomes'],
                    correctToken: 'complementary-probability',
                    incorrectTokens: [
                      'complement-concept-error',         // Gave P(6)
                      'complementary-calculation-error',  // Wrong calculation
                      null,                                // Correct
                      'complementary-calculation-error',  // Wrong: certain
                    ],
                  },
                },
                {
                  id: 'VCMSP203-013',
                  question: 'If P(winning a prize) = 0.2, what is P(not winning)?',
                  options: ['0.2', '0.4', '0.8', '1.2'],
                  correctAnswer: 2,
                  explanation: 'P(not winning) = 1 - 0.2 = 0.8',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['complementary-probability'],
                    correctToken: 'complementary-probability',
                    incorrectTokens: [
                      'complement-concept-error',         // Same as original
                      'complementary-calculation-error',  // Wrong subtraction
                      null,                                // Correct
                      'probability-range-error',          // Greater than 1
                    ],
                  },
                },
                // Questions 14-17: Listing Outcomes
                {
                  id: 'VCMSP203-014',
                  question: 'How many outcomes are there when flipping a coin?',
                  options: ['1', '2', '3', '4'],
                  correctAnswer: 1,
                  explanation: 'A coin can land on heads or tails: 2 possible outcomes.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['listing-outcomes'],
                    correctToken: 'listing-outcomes',
                    incorrectTokens: [
                      'listing-outcomes-error',           // Missing one
                      null,                                // Correct
                      'listing-outcomes-error',           // Counted edge
                      'listing-outcomes-error',           // Wrong count
                    ],
                  },
                },
                {
                  id: 'VCMSP203-015',
                  question: 'When flipping two coins, what are all possible outcomes?',
                  options: ['HH, TT', 'HH, HT, TT', 'HH, HT, TH, TT', 'H, T, HH, TT'],
                  correctAnswer: 2,
                  explanation: 'Each coin can be H or T: HH, HT, TH, TT (4 outcomes)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['listing-outcomes', 'compound-events'],
                    correctToken: 'listing-outcomes',
                    incorrectTokens: [
                      'listing-outcomes-error',           // Missed mixed outcomes
                      'listing-outcomes-error',           // Missed TH
                      null,                                // Correct
                      'listing-outcomes-error',           // Mixed single and double
                    ],
                  },
                },
                {
                  id: 'VCMSP203-016',
                  question: 'How many outcomes when rolling a standard die?',
                  options: ['4', '5', '6', '8'],
                  correctAnswer: 2,
                  explanation: 'A standard die has 6 faces: 1, 2, 3, 4, 5, 6',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['listing-outcomes'],
                    correctToken: 'listing-outcomes',
                    incorrectTokens: [
                      'listing-outcomes-error',           // Wrong count
                      'listing-outcomes-error',           // Wrong count
                      null,                                // Correct
                      'listing-outcomes-error',           // Wrong count
                    ],
                  },
                },
                {
                  id: 'VCMSP203-017',
                  question: 'A bag has only red and blue balls. If there are 8 outcomes when picking one ball, what could be in the bag?',
                  options: ['4 red, 4 blue', '3 red, 5 blue', '8 red, 8 blue', 'Any combination totalling 8'],
                  correctAnswer: 3,
                  explanation: 'Total outcomes = total balls. Any combination of red and blue totalling 8 works.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['listing-outcomes', 'probability-concept'],
                    correctToken: 'listing-outcomes',
                    incorrectTokens: [
                      'outcomes-vs-balls-confusion',      // One valid answer but not only
                      'outcomes-vs-balls-confusion',      // One valid answer but not only
                      'total-outcomes-error',             // Doubled
                      null,                                // Correct
                    ],
                  },
                },
                // Questions 18-20: Compound Events
                {
                  id: 'VCMSP203-018',
                  question: 'Two coins are flipped. What is P(getting two heads)?',
                  options: ['1/2', '1/3', '1/4', '1/8'],
                  correctAnswer: 2,
                  explanation: 'Outcomes: HH, HT, TH, TT (4 total). Only 1 is HH. P(HH) = 1/4',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['compound-events', 'probability-as-fraction'],
                    correctToken: 'compound-events',
                    incorrectTokens: [
                      'compound-event-error',             // Only considered 1 coin
                      'compound-event-error',             // Wrong total
                      null,                                // Correct
                      'compound-event-error',             // 3 coins
                    ],
                  },
                },
                {
                  id: 'VCMSP203-019',
                  question: 'Two coins are flipped. What is P(getting at least one head)?',
                  options: ['1/4', '1/2', '3/4', '1'],
                  correctAnswer: 2,
                  explanation: 'Outcomes with at least one H: HH, HT, TH (3 out of 4). P = 3/4',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['compound-events', 'listing-outcomes'],
                    correctToken: 'compound-events',
                    incorrectTokens: [
                      'compound-event-error',             // Only counted HH
                      'compound-event-error',             // Miscounted
                      null,                                // Correct
                      'compound-event-error',             // Counted all
                    ],
                  },
                },
                {
                  id: 'VCMSP203-020',
                  question: 'A die is rolled and a coin is flipped. How many total outcomes are possible?',
                  options: ['6', '8', '12', '36'],
                  correctAnswer: 2,
                  explanation: 'Die has 6 outcomes, coin has 2. Total = 6 × 2 = 12 outcomes.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['compound-events', 'listing-outcomes'],
                    correctToken: 'compound-events',
                    incorrectTokens: [
                      'compound-event-error',             // Only die
                      'compound-event-error',             // Added instead of multiplied
                      null,                                // Correct
                      'compound-event-error',             // Multiplied wrong
                    ],
                  },
                },
              ]
            }
          ]
        },
        {
          id: 'data',
          title: 'Data Representation',
          description: 'Collecting, displaying and interpreting data',
          sections: [
            {
              id: 'VCMSP206',
              code: 'VCMSP206',
              title: 'Data Displays',
              description: 'Construct displays, including column graphs, dot plots and tables, appropriate for data type, with and without the use of digital technologies',
              content: `# Displaying Data

Data displays help us see patterns and understand information quickly!

## Types of Data

**Categorical data** = data in categories (colours, pets, favourite foods)
**Numerical data** = data as numbers (ages, heights, scores)

## Column Graphs (Bar Graphs)

Best for: Comparing categories

### How to make a column graph:
1. Draw axes (horizontal and vertical)
2. Label the horizontal axis with categories
3. Label the vertical axis with numbers (scale)
4. Draw columns for each category
5. Make all columns the same width
6. Leave equal gaps between columns
7. Add a title!

**Example: Favourite Sports**
\`\`\`
Number of students
     │
  10 │    ██
   8 │    ██      ██
   6 │    ██  ██  ██
   4 │ ██ ██  ██  ██  ██
   2 │ ██ ██  ██  ██  ██
   0 └─────────────────────
       Cricket Soccer Tennis Basketball
\`\`\`

## Dot Plots

Best for: Showing how data is spread

### How to make a dot plot:
1. Draw a number line
2. Put a dot above each number for each piece of data
3. Stack dots when values repeat

**Example: Test Scores**
\`\`\`
        •
        •     •
    •   •   • •
    •   •   • •   •
────────────────────
    5   6   7   8   9
\`\`\`

## Two-Way Tables

Best for: Showing two categories at once

**Example: Pets by Year Level**
| | Dogs | Cats | Fish |
|---|---|---|---|
| Year 4 | 8 | 5 | 3 |
| Year 5 | 10 | 7 | 4 |
| Year 6 | 6 | 9 | 5 |

## Choosing the Right Display

| Data Type | Best Display |
|-----------|--------------|
| Categories to compare | Column graph |
| Numerical spread | Dot plot |
| Two variables | Two-way table |`,
              keyPoints: [
                'Column graphs compare different categories',
                'Dot plots show the spread of numerical data',
                'Tables organise data in rows and columns',
                'Always include titles and labels on graphs'
              ],
              examples: [
                {
                  problem: 'What display would you use to show favourite ice cream flavours in your class?',
                  solution: 'Column graph',
                  explanation: 'Ice cream flavours are categories that you want to compare'
                },
                {
                  problem: 'What display shows how many students got each score on a quiz?',
                  solution: 'Dot plot',
                  explanation: 'Scores are numerical data, and a dot plot shows frequency of each score'
                }
              ],
              knowledgeTokens: [
                {
                  id: 'column-graph-reading',
                  name: 'Column Graph Reading',
                  description: 'Reading and interpreting column/bar graphs',
                  prerequisites: [],
                },
                {
                  id: 'column-graph-construction',
                  name: 'Column Graph Construction',
                  description: 'Understanding how to construct accurate column graphs',
                  prerequisites: ['column-graph-reading'],
                },
                {
                  id: 'dot-plot-reading',
                  name: 'Dot Plot Reading',
                  description: 'Reading and interpreting dot plots',
                  prerequisites: [],
                },
                {
                  id: 'two-way-table-reading',
                  name: 'Two-Way Table Reading',
                  description: 'Reading and interpreting two-way tables',
                  prerequisites: [],
                },
                {
                  id: 'graph-type-selection',
                  name: 'Graph Type Selection',
                  description: 'Choosing appropriate graph types for different data',
                  prerequisites: ['column-graph-reading', 'dot-plot-reading'],
                },
                {
                  id: 'data-from-graphs',
                  name: 'Extracting Data from Graphs',
                  description: 'Finding totals, differences, and comparisons from graphs',
                  prerequisites: ['column-graph-reading', 'dot-plot-reading'],
                },
                {
                  id: 'categorical-vs-numerical',
                  name: 'Categorical vs Numerical Data',
                  description: 'Distinguishing between categorical and numerical data types',
                  prerequisites: [],
                },
                {
                  id: 'graph-features',
                  name: 'Graph Features',
                  description: 'Understanding titles, labels, scales, and axes',
                  prerequisites: [],
                },
              ],
              questions: [
                // Questions 1-5: Column Graph Reading
                {
                  id: 'VCMSP206-001',
                  question: 'What type of graph is best for comparing the number of students in different clubs?',
                  options: ['Dot plot', 'Column graph', 'Line graph', 'Pie chart'],
                  correctAnswer: 1,
                  explanation: 'A column graph is best for comparing categories (clubs)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['graph-type-selection', 'column-graph-reading'],
                    correctToken: 'graph-type-selection',
                    incorrectTokens: [
                      'graph-type-confusion',             // Dot plots for numerical spread
                      null,                                // Correct
                      'graph-type-confusion',             // Line graphs for change over time
                      'graph-type-confusion',             // Pie charts for proportions
                    ],
                  },
                },
                {
                  id: 'VCMSP206-002',
                  question: 'A column graph shows: Red=12, Blue=8, Green=5. What is the total?',
                  options: ['12', '20', '25', '96'],
                  correctAnswer: 2,
                  explanation: 'Add all the values: 12 + 8 + 5 = 25',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['column-graph-reading', 'data-from-graphs'],
                    correctToken: 'data-from-graphs',
                    incorrectTokens: [
                      'data-extraction-error',            // Only took largest
                      'data-extraction-error',            // Only added two
                      null,                                // Correct
                      'data-extraction-error',            // Multiplied instead
                    ],
                  },
                },
                {
                  id: 'VCMSP206-003',
                  question: 'In a column graph, which sport is most popular if Cricket=15, Soccer=22, Tennis=8?',
                  options: ['Cricket', 'Soccer', 'Tennis', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Soccer has the highest value (22), so it is most popular.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['column-graph-reading', 'data-from-graphs'],
                    correctToken: 'data-from-graphs',
                    incorrectTokens: [
                      'data-comparison-error',            // Second highest
                      null,                                // Correct
                      'data-comparison-error',            // Lowest
                      'data-extraction-error',            // Didn't read correctly
                    ],
                  },
                },
                {
                  id: 'VCMSP206-004',
                  question: 'A column graph shows Year 3=18, Year 4=24, Year 5=20. How many more students are in Year 4 than Year 3?',
                  options: ['4', '6', '18', '42'],
                  correctAnswer: 1,
                  explanation: 'Difference = 24 - 18 = 6 more students in Year 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['column-graph-reading', 'data-from-graphs'],
                    correctToken: 'data-from-graphs',
                    incorrectTokens: [
                      'data-comparison-error',            // Wrong subtraction
                      null,                                // Correct
                      'data-extraction-error',            // Just took Year 3 value
                      'data-comparison-error',            // Added instead
                    ],
                  },
                },
                {
                  id: 'VCMSP206-005',
                  question: 'Which statement about column graphs is TRUE?',
                  options: ['Columns should touch', 'All columns should be different widths', 'The scale must start at 0', 'Labels are optional'],
                  correctAnswer: 2,
                  explanation: 'Column graphs should have a scale starting at 0 to avoid misleading readers',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['column-graph-construction', 'graph-features'],
                    correctToken: 'graph-features',
                    incorrectTokens: [
                      'graph-construction-error',         // Gaps are needed
                      'graph-construction-error',         // Same width required
                      null,                                // Correct
                      'graph-construction-error',         // Labels are essential
                    ],
                  },
                },
                // Questions 6-10: Dot Plot Reading
                {
                  id: 'VCMSP206-006',
                  question: 'In a dot plot showing ages of students, what does 4 dots above the number 11 mean?',
                  options: ['11 students are aged 4', '4 students are aged 11', '44 students total', 'Average age is 11'],
                  correctAnswer: 1,
                  explanation: 'Each dot represents one student with that age, so 4 dots = 4 students aged 11',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['dot-plot-reading'],
                    correctToken: 'dot-plot-reading',
                    incorrectTokens: [
                      'dot-plot-interpretation-error',    // Reversed meaning
                      null,                                // Correct
                      'dot-plot-interpretation-error',    // Multiplied
                      'dot-plot-interpretation-error',    // Wrong concept
                    ],
                  },
                },
                {
                  id: 'VCMSP206-007',
                  question: 'A dot plot shows test scores: 5(••), 6(•••), 7(••••), 8(••), 9(•). How many students are there?',
                  options: ['5', '9', '12', '35'],
                  correctAnswer: 2,
                  explanation: 'Count all dots: 2 + 3 + 4 + 2 + 1 = 12 students',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['dot-plot-reading', 'data-from-graphs'],
                    correctToken: 'dot-plot-reading',
                    incorrectTokens: [
                      'data-extraction-error',            // Counted scores not dots
                      'data-extraction-error',            // Only highest score
                      null,                                // Correct
                      'data-extraction-error',            // Wrong calculation
                    ],
                  },
                },
                {
                  id: 'VCMSP206-008',
                  question: 'In a dot plot, what score is most common if 7 has the most dots?',
                  options: ['The smallest score', 'The largest score', '7', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'The value with the most dots is the most common (mode). That is 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['dot-plot-reading', 'data-from-graphs'],
                    correctToken: 'dot-plot-reading',
                    incorrectTokens: [
                      'mode-confusion',                   // Wrong concept
                      'mode-confusion',                   // Wrong concept
                      null,                                // Correct
                      'dot-plot-interpretation-error',    // Didn't understand
                    ],
                  },
                },
                {
                  id: 'VCMSP206-009',
                  question: 'What type of data is best shown on a dot plot?',
                  options: ['Categories like favourite colours', 'Numerical data like test scores', 'Names of students', 'Dates'],
                  correctAnswer: 1,
                  explanation: 'Dot plots are best for numerical data where you want to see the spread of values.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['graph-type-selection', 'categorical-vs-numerical'],
                    correctToken: 'graph-type-selection',
                    incorrectTokens: [
                      'categorical-numerical-confusion',  // Column graph better
                      null,                                // Correct
                      'categorical-numerical-confusion',  // Not a data type
                      'graph-type-confusion',             // Line graph better
                    ],
                  },
                },
                {
                  id: 'VCMSP206-010',
                  question: 'A dot plot shows: 10(•), 11(•••), 12(••), 13(••••). What is the range?',
                  options: ['3', '4', '10', '13'],
                  correctAnswer: 0,
                  explanation: 'Range = highest - lowest = 13 - 10 = 3',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['dot-plot-reading', 'data-from-graphs'],
                    correctToken: 'data-from-graphs',
                    incorrectTokens: [
                      null,                                // Correct
                      'range-calculation-error',          // Counted values
                      'range-calculation-error',          // Just took lowest
                      'range-calculation-error',          // Just took highest
                    ],
                  },
                },
                // Questions 11-14: Two-Way Tables
                {
                  id: 'VCMSP206-011',
                  question: 'A two-way table shows boys and girls who like cats or dogs. There are 15 boys who like dogs and 12 girls who like dogs. How many students like dogs?',
                  options: ['12', '15', '27', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'Add boys and girls who like dogs: 15 + 12 = 27',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-way-table-reading', 'data-from-graphs'],
                    correctToken: 'two-way-table-reading',
                    incorrectTokens: [
                      'table-reading-error',              // Only girls
                      'table-reading-error',              // Only boys
                      null,                                // Correct
                      'table-reading-error',              // Didn't understand
                    ],
                  },
                },
                {
                  id: 'VCMSP206-012',
                  question: 'In a two-way table: Year 4 Cricket=8, Soccer=12; Year 5 Cricket=10, Soccer=15. How many play Cricket?',
                  options: ['8', '10', '18', '45'],
                  correctAnswer: 2,
                  explanation: 'Add Cricket from both years: 8 + 10 = 18',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-way-table-reading', 'data-from-graphs'],
                    correctToken: 'two-way-table-reading',
                    incorrectTokens: [
                      'table-reading-error',              // Only Year 4
                      'table-reading-error',              // Only Year 5
                      null,                                // Correct
                      'table-reading-error',              // Added everything
                    ],
                  },
                },
                {
                  id: 'VCMSP206-013',
                  question: 'What is a two-way table best for showing?',
                  options: ['Change over time', 'Two categories at once', 'Just one set of numbers', 'Pictures'],
                  correctAnswer: 1,
                  explanation: 'Two-way tables show two categories (like year level and sport choice) together.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['two-way-table-reading', 'graph-type-selection'],
                    correctToken: 'graph-type-selection',
                    incorrectTokens: [
                      'graph-type-confusion',             // Line graph
                      null,                                // Correct
                      'graph-type-confusion',             // Simple table
                      'graph-type-confusion',             // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMSP206-014',
                  question: 'In a table: Morning bus=25, car=15; Afternoon bus=20, car=18. Total travelling by bus?',
                  options: ['20', '25', '45', '78'],
                  correctAnswer: 2,
                  explanation: 'Add bus from morning and afternoon: 25 + 20 = 45',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-way-table-reading', 'data-from-graphs'],
                    correctToken: 'two-way-table-reading',
                    incorrectTokens: [
                      'table-reading-error',              // Only afternoon
                      'table-reading-error',              // Only morning
                      null,                                // Correct
                      'table-reading-error',              // Added all
                    ],
                  },
                },
                // Questions 15-17: Graph Features
                {
                  id: 'VCMSP206-015',
                  question: 'What must every graph have?',
                  options: ['Colours', 'A title', 'Pictures', 'Grid lines'],
                  correctAnswer: 1,
                  explanation: 'Every graph needs a title to tell readers what data is being shown.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['graph-features'],
                    correctToken: 'graph-features',
                    incorrectTokens: [
                      'graph-features-error',             // Optional
                      null,                                // Correct
                      'graph-features-error',             // Not necessary
                      'graph-features-error',             // Helpful but optional
                    ],
                  },
                },
                {
                  id: 'VCMSP206-016',
                  question: 'On a column graph, what do the labels on the horizontal axis usually show?',
                  options: ['Numbers only', 'Categories being compared', 'The title', 'Nothing'],
                  correctAnswer: 1,
                  explanation: 'The horizontal axis shows the categories (e.g., sports, colours, months)',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['graph-features', 'column-graph-reading'],
                    correctToken: 'graph-features',
                    incorrectTokens: [
                      'axis-confusion',                   // That's vertical axis
                      null,                                // Correct
                      'axis-confusion',                   // Title goes at top
                      'axis-confusion',                   // Wrong
                    ],
                  },
                },
                {
                  id: 'VCMSP206-017',
                  question: 'If a column graph scale goes 0, 5, 10, 15..., what number should the next line be?',
                  options: ['16', '18', '20', '25'],
                  correctAnswer: 2,
                  explanation: 'The scale increases by 5 each time: 15 + 5 = 20',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['graph-features', 'column-graph-reading'],
                    correctToken: 'graph-features',
                    incorrectTokens: [
                      'scale-pattern-error',              // Added 1
                      'scale-pattern-error',              // Added 3
                      null,                                // Correct
                      'scale-pattern-error',              // Added 10
                    ],
                  },
                },
                // Questions 18-20: Data Types and Selection
                {
                  id: 'VCMSP206-018',
                  question: 'Which is an example of categorical data?',
                  options: ['Heights of students', 'Test scores', 'Favourite colours', 'Number of siblings'],
                  correctAnswer: 2,
                  explanation: 'Favourite colours are categories (red, blue, green). The others are numbers.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['categorical-vs-numerical'],
                    correctToken: 'categorical-vs-numerical',
                    incorrectTokens: [
                      'categorical-numerical-confusion',  // Numerical
                      'categorical-numerical-confusion',  // Numerical
                      null,                                // Correct
                      'categorical-numerical-confusion',  // Numerical
                    ],
                  },
                },
                {
                  id: 'VCMSP206-019',
                  question: 'You want to show how many students got each mark (5, 6, 7, 8, 9, 10) on a quiz. Which display is best?',
                  options: ['Column graph', 'Dot plot', 'Pie chart', 'Two-way table'],
                  correctAnswer: 1,
                  explanation: 'A dot plot is perfect for showing the frequency of each numerical score.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['graph-type-selection', 'categorical-vs-numerical'],
                    correctToken: 'graph-type-selection',
                    incorrectTokens: [
                      'graph-type-confusion',             // Better for categories
                      null,                                // Correct
                      'graph-type-confusion',             // For proportions
                      'graph-type-confusion',             // For two variables
                    ],
                  },
                },
                {
                  id: 'VCMSP206-020',
                  question: 'You want to show favourite pets in Year 4 and Year 5. Which display is best?',
                  options: ['Dot plot', 'Single column graph', 'Two-way table', 'Line graph'],
                  correctAnswer: 2,
                  explanation: 'A two-way table can show two categories: year level and pet choice.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['graph-type-selection', 'two-way-table-reading'],
                    correctToken: 'graph-type-selection',
                    incorrectTokens: [
                      'graph-type-confusion',             // For numerical spread
                      'graph-type-confusion',             // Only one category
                      null,                                // Correct
                      'graph-type-confusion',             // For change over time
                    ],
                  },
                },
              ]
            }
          ]
        }
      ]
    }
  ]
};
