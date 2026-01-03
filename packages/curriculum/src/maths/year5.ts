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
                {
                  id: 'VCMNA181-001',
                  question: 'Which of these is NOT a factor of 20?',
                  options: ['2', '4', '6', '10'],
                  correctAnswer: 2,
                  explanation: '20 ÷ 6 = 3 remainder 2. Since there is a remainder, 6 is not a factor.',
                  difficulty: 1
                },
                {
                  id: 'VCMNA181-002',
                  question: 'What is the 6th multiple of 8?',
                  options: ['40', '48', '56', '64'],
                  correctAnswer: 1,
                  explanation: '8 × 6 = 48. The multiples are 8, 16, 24, 32, 40, 48.',
                  difficulty: 1
                },
                {
                  id: 'VCMNA181-003',
                  question: 'How many factors does 36 have?',
                  options: ['6', '8', '9', '12'],
                  correctAnswer: 2,
                  explanation: 'Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 = 9 factors',
                  difficulty: 2
                },
                {
                  id: 'VCMNA181-004',
                  question: 'What is the greatest common factor of 24 and 36?',
                  options: ['6', '8', '12', '18'],
                  correctAnswer: 2,
                  explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The largest shared factor is 12.',
                  difficulty: 3
                },
                {
                  id: 'VCMNA181-005',
                  question: 'What is the smallest number that is a multiple of both 4 and 6?',
                  options: ['12', '18', '24', '36'],
                  correctAnswer: 0,
                  explanation: 'Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... The first common one is 12.',
                  difficulty: 2
                }
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
                {
                  id: 'VCMNA182-001',
                  question: 'What is 6,473 rounded to the nearest thousand?',
                  options: ['6,000', '6,400', '6,500', '7,000'],
                  correctAnswer: 0,
                  explanation: 'The hundreds digit is 4, which is less than 5, so round down to 6,000.',
                  difficulty: 1
                },
                {
                  id: 'VCMNA182-002',
                  question: 'Estimate 298 + 512 by rounding to the nearest hundred',
                  options: ['700', '800', '810', '900'],
                  correctAnswer: 1,
                  explanation: '298 ≈ 300, 512 ≈ 500, so 300 + 500 = 800',
                  difficulty: 1
                },
                {
                  id: 'VCMNA182-003',
                  question: 'A student calculated 89 × 7 = 543. Use estimation to check if this is reasonable.',
                  options: ['Yes, it\'s close to 630', 'No, it should be closer to 560', 'Yes, it\'s close to 540', 'No, it should be closer to 700'],
                  correctAnswer: 0,
                  explanation: '89 ≈ 90, and 90 × 7 = 630. The answer 543 is not close to 630, so it may be wrong. (89 × 7 = 623)',
                  difficulty: 2
                },
                {
                  id: 'VCMNA182-004',
                  question: 'Estimate 4,892 ÷ 5',
                  options: ['About 800', 'About 900', 'About 1,000', 'About 1,100'],
                  correctAnswer: 2,
                  explanation: '4,892 ≈ 5,000, and 5,000 ÷ 5 = 1,000',
                  difficulty: 2
                },
                {
                  id: 'VCMNA182-005',
                  question: 'Which calculation will give an answer closest to 2,000?',
                  options: ['512 × 3', '389 × 6', '198 × 9', '678 × 3'],
                  correctAnswer: 2,
                  explanation: '198 ≈ 200, and 200 × 9 = 1,800. This is closest to 2,000.',
                  difficulty: 3
                }
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
                {
                  id: 'VCMNA183-001',
                  question: 'What is 145 × 6?',
                  options: ['770', '830', '870', '890'],
                  correctAnswer: 2,
                  explanation: '100×6=600, 40×6=240, 5×6=30. Total: 600+240+30=870',
                  difficulty: 1
                },
                {
                  id: 'VCMNA183-002',
                  question: 'Calculate 38 × 12',
                  options: ['446', '456', '466', '476'],
                  correctAnswer: 1,
                  explanation: '38×10=380, 38×2=76. Total: 380+76=456',
                  difficulty: 2
                },
                {
                  id: 'VCMNA183-003',
                  question: 'What is 25 × 32 using the doubling and halving strategy?',
                  options: ['750', '800', '850', '900'],
                  correctAnswer: 1,
                  explanation: '25×32 = 50×16 = 100×8 = 800',
                  difficulty: 2
                },
                {
                  id: 'VCMNA183-004',
                  question: 'A school has 28 classes with 24 students in each. How many students in total?',
                  options: ['572', '612', '672', '724'],
                  correctAnswer: 2,
                  explanation: '28×24 = 28×20 + 28×4 = 560 + 112 = 672',
                  difficulty: 2
                },
                {
                  id: 'VCMNA183-005',
                  question: 'What is 99 × 15?',
                  options: ['1,485', '1,495', '1,500', '1,515'],
                  correctAnswer: 0,
                  explanation: '99×15 = (100×15) - 15 = 1500 - 15 = 1,485',
                  difficulty: 3
                }
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
                {
                  id: 'VCMNA184-001',
                  question: 'What is 47 ÷ 5?',
                  options: ['8 r 7', '9 r 2', '9 r 3', '10 r 3'],
                  correctAnswer: 1,
                  explanation: '5 × 9 = 45, and 47 - 45 = 2. So 47 ÷ 5 = 9 r 2',
                  difficulty: 1
                },
                {
                  id: 'VCMNA184-002',
                  question: '83 students need to be divided into groups of 6. How many complete groups can be made?',
                  options: ['12', '13', '14', '15'],
                  correctAnswer: 1,
                  explanation: '83 ÷ 6 = 13 r 5. There are 13 complete groups.',
                  difficulty: 2
                },
                {
                  id: 'VCMNA184-003',
                  question: 'What is 156 ÷ 7?',
                  options: ['21 r 3', '22 r 2', '22 r 3', '23 r 1'],
                  correctAnswer: 1,
                  explanation: '7 × 22 = 154, and 156 - 154 = 2. So 156 ÷ 7 = 22 r 2',
                  difficulty: 2
                },
                {
                  id: 'VCMNA184-004',
                  question: 'A baker has 200 cupcakes to put in boxes of 8. How many boxes does she need?',
                  options: ['24', '25', '26', '27'],
                  correctAnswer: 1,
                  explanation: '200 ÷ 8 = 25 exactly. She needs 25 boxes.',
                  difficulty: 2
                },
                {
                  id: 'VCMNA184-005',
                  question: 'If 173 ÷ 8 = 21 r ?, what is the remainder?',
                  options: ['3', '4', '5', '6'],
                  correctAnswer: 2,
                  explanation: '8 × 21 = 168, and 173 - 168 = 5',
                  difficulty: 3
                }
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
                {
                  id: 'VCMNA187-001',
                  question: 'Which fraction is the smallest?',
                  options: ['½', '⅓', '¼', '⅕'],
                  correctAnswer: 3,
                  explanation: 'For unit fractions, the larger the denominator, the smaller the fraction. ⅕ has the largest denominator.',
                  difficulty: 1
                },
                {
                  id: 'VCMNA187-002',
                  question: 'Order these fractions from smallest to largest: ⅝, ⅜, ⅞',
                  options: ['⅜, ⅝, ⅞', '⅞, ⅝, ⅜', '⅝, ⅜, ⅞', '⅜, ⅞, ⅝'],
                  correctAnswer: 0,
                  explanation: 'Same denominators, so compare numerators: 3 < 5 < 7',
                  difficulty: 1
                },
                {
                  id: 'VCMNA187-003',
                  question: 'Which fraction is greater than ½?',
                  options: ['³⁄₈', '²⁄₅', '⁴⁄₉', '⁵⁄₈'],
                  correctAnswer: 3,
                  explanation: '½ = ⁴⁄₈, and ⁵⁄₈ > ⁴⁄₈, so ⁵⁄₈ > ½',
                  difficulty: 2
                },
                {
                  id: 'VCMNA187-004',
                  question: 'Where would ³⁄₄ be on a number line from 0 to 1?',
                  options: ['Closer to 0', 'Exactly at ½', 'Between ½ and 1', 'At 1'],
                  correctAnswer: 2,
                  explanation: '³⁄₄ = 0.75, which is between ½ (0.5) and 1',
                  difficulty: 2
                },
                {
                  id: 'VCMNA187-005',
                  question: 'Which is larger: ⁵⁄₆ or ⁷⁄₈?',
                  options: ['⁵⁄₆', '⁷⁄₈', 'They are equal', 'Cannot compare'],
                  correctAnswer: 1,
                  explanation: '⁵⁄₆ ≈ 0.833, ⁷⁄₈ = 0.875. So ⁷⁄₈ is larger.',
                  difficulty: 3
                }
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
              questions: [
                {
                  id: 'VCMNA190-001',
                  question: 'What is the value of the 7 in 3.478?',
                  options: ['7', '0.7', '0.07', '0.007'],
                  correctAnswer: 2,
                  explanation: 'The 7 is in the hundredths place, so its value is 0.07',
                  difficulty: 1
                },
                {
                  id: 'VCMNA190-002',
                  question: 'Which decimal is largest?',
                  options: ['0.9', '0.85', '0.095', '0.58'],
                  correctAnswer: 0,
                  explanation: 'Compare tenths: 9 > 8 > 5 > 0, so 0.9 is largest',
                  difficulty: 1
                },
                {
                  id: 'VCMNA190-003',
                  question: 'Order these from smallest to largest: 2.05, 2.5, 2.005',
                  options: ['2.005, 2.05, 2.5', '2.5, 2.05, 2.005', '2.05, 2.005, 2.5', '2.5, 2.005, 2.05'],
                  correctAnswer: 0,
                  explanation: '2.005 = 2.005, 2.05 = 2.050, 2.5 = 2.500. Comparing: 005 < 050 < 500',
                  difficulty: 2
                },
                {
                  id: 'VCMNA190-004',
                  question: 'Which decimal is equivalent to ¾?',
                  options: ['0.34', '0.43', '0.75', '0.74'],
                  correctAnswer: 2,
                  explanation: '¾ = 3 ÷ 4 = 0.75',
                  difficulty: 2
                },
                {
                  id: 'VCMNA190-005',
                  question: 'What is 2.8 + 0.35?',
                  options: ['2.115', '3.15', '2.43', '3.05'],
                  correctAnswer: 1,
                  explanation: '2.80 + 0.35 = 3.15 (line up decimal points)',
                  difficulty: 3
                }
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
              questions: [
                {
                  id: 'VCMMG195-001',
                  question: 'What unit would be best to measure the distance from Melbourne to Sydney?',
                  options: ['Millimetres', 'Centimetres', 'Metres', 'Kilometres'],
                  correctAnswer: 3,
                  explanation: 'Long distances between cities are measured in kilometres (about 877 km)',
                  difficulty: 1
                },
                {
                  id: 'VCMMG195-002',
                  question: 'What unit would you use to measure the capacity of a swimming pool?',
                  options: ['Millilitres', 'Litres', 'Grams', 'Metres'],
                  correctAnswer: 1,
                  explanation: 'Large amounts of liquid are measured in litres (a pool might hold 50,000 litres)',
                  difficulty: 1
                },
                {
                  id: 'VCMMG195-003',
                  question: 'How many centimetres are in 3.5 metres?',
                  options: ['35', '350', '3,500', '0.35'],
                  correctAnswer: 1,
                  explanation: '1 m = 100 cm, so 3.5 m = 3.5 × 100 = 350 cm',
                  difficulty: 2
                },
                {
                  id: 'VCMMG195-004',
                  question: 'A recipe needs 2.5 kg of flour. How many grams is this?',
                  options: ['25 g', '250 g', '2,500 g', '25,000 g'],
                  correctAnswer: 2,
                  explanation: '1 kg = 1,000 g, so 2.5 kg = 2.5 × 1,000 = 2,500 g',
                  difficulty: 2
                },
                {
                  id: 'VCMMG195-005',
                  question: 'Which measurement is the same as 4,500 mL?',
                  options: ['0.45 L', '4.5 L', '45 L', '450 L'],
                  correctAnswer: 1,
                  explanation: '1,000 mL = 1 L, so 4,500 mL = 4.5 L',
                  difficulty: 3
                }
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
              questions: [
                {
                  id: 'VCMMG196-001',
                  question: 'What is the perimeter of a rectangle with length 9m and width 4m?',
                  options: ['13 m', '26 m', '36 m', '52 m'],
                  correctAnswer: 1,
                  explanation: 'Perimeter = 2 × (9 + 4) = 2 × 13 = 26 m',
                  difficulty: 1
                },
                {
                  id: 'VCMMG196-002',
                  question: 'A garden is 15m long and 8m wide. What is its area?',
                  options: ['23 m²', '46 m²', '120 m²', '240 m²'],
                  correctAnswer: 2,
                  explanation: 'Area = length × width = 15 × 8 = 120 m²',
                  difficulty: 1
                },
                {
                  id: 'VCMMG196-003',
                  question: 'A box is 6cm × 4cm × 5cm. What is its volume?',
                  options: ['15 cm³', '60 cm³', '120 cm³', '240 cm³'],
                  correctAnswer: 2,
                  explanation: 'Volume = 6 × 4 × 5 = 120 cm³',
                  difficulty: 2
                },
                {
                  id: 'VCMMG196-004',
                  question: 'A rectangular pool has an area of 48 m². If it is 8m long, how wide is it?',
                  options: ['4 m', '5 m', '6 m', '7 m'],
                  correctAnswer: 2,
                  explanation: 'Area = length × width, so 48 = 8 × width. Width = 48 ÷ 8 = 6 m',
                  difficulty: 2
                },
                {
                  id: 'VCMMG196-005',
                  question: 'A container is 20cm × 15cm × 10cm. How many litres can it hold?',
                  options: ['3 L', '30 L', '300 L', '0.3 L'],
                  correctAnswer: 0,
                  explanation: 'Volume = 20 × 15 × 10 = 3,000 cm³ = 3 L (since 1,000 cm³ = 1 L)',
                  difficulty: 3
                }
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
              questions: [
                {
                  id: 'VCMSP203-001',
                  question: 'What is the probability of flipping heads on a fair coin?',
                  options: ['1/4', '1/3', '1/2', '2/3'],
                  correctAnswer: 2,
                  explanation: 'A coin has 2 outcomes (heads, tails). P(heads) = 1/2',
                  difficulty: 1
                },
                {
                  id: 'VCMSP203-002',
                  question: 'What is the probability of rolling a number greater than 4 on a die?',
                  options: ['1/6', '2/6', '3/6', '4/6'],
                  correctAnswer: 1,
                  explanation: 'Numbers greater than 4: 5 and 6 (2 outcomes). P = 2/6 = 1/3',
                  difficulty: 2
                },
                {
                  id: 'VCMSP203-003',
                  question: 'A bag has 3 red, 5 blue, and 2 green balls. What is P(blue)?',
                  options: ['3/10', '5/10', '2/10', '7/10'],
                  correctAnswer: 1,
                  explanation: '5 blue out of 10 total = 5/10 = 1/2',
                  difficulty: 1
                },
                {
                  id: 'VCMSP203-004',
                  question: 'If P(rain) = 3/5, what is P(no rain)?',
                  options: ['1/5', '2/5', '3/5', '4/5'],
                  correctAnswer: 1,
                  explanation: 'P(rain) + P(no rain) = 1. So P(no rain) = 1 - 3/5 = 2/5',
                  difficulty: 2
                },
                {
                  id: 'VCMSP203-005',
                  question: 'Two coins are flipped. What is P(getting two heads)?',
                  options: ['1/2', '1/3', '1/4', '1/8'],
                  correctAnswer: 2,
                  explanation: 'Outcomes: HH, HT, TH, TT (4 total). P(HH) = 1/4',
                  difficulty: 3
                }
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
              questions: [
                {
                  id: 'VCMSP206-001',
                  question: 'What type of graph is best for comparing the number of students in different clubs?',
                  options: ['Dot plot', 'Column graph', 'Line graph', 'Pie chart'],
                  correctAnswer: 1,
                  explanation: 'A column graph is best for comparing categories (clubs)',
                  difficulty: 1
                },
                {
                  id: 'VCMSP206-002',
                  question: 'In a dot plot showing ages of students, what does 4 dots above the number 11 mean?',
                  options: ['11 students are aged 4', '4 students are aged 11', '44 students total', 'Average age is 11'],
                  correctAnswer: 1,
                  explanation: 'Each dot represents one student with that age, so 4 dots = 4 students aged 11',
                  difficulty: 1
                },
                {
                  id: 'VCMSP206-003',
                  question: 'A column graph shows: Red=12, Blue=8, Green=5. What is the total?',
                  options: ['12', '20', '25', '96'],
                  correctAnswer: 2,
                  explanation: 'Add all the values: 12 + 8 + 5 = 25',
                  difficulty: 2
                },
                {
                  id: 'VCMSP206-004',
                  question: 'Which statement about column graphs is TRUE?',
                  options: ['Columns should touch', 'All columns should be different widths', 'The scale must start at 0', 'Labels are optional'],
                  correctAnswer: 2,
                  explanation: 'Column graphs should have a scale starting at 0 to avoid misleading readers',
                  difficulty: 2
                },
                {
                  id: 'VCMSP206-005',
                  question: 'A two-way table shows boys and girls who like cats or dogs. There are 15 boys who like dogs and 12 girls who like dogs. How many students like dogs?',
                  options: ['12', '15', '27', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'Add boys and girls who like dogs: 15 + 12 = 27',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
