// Victorian Curriculum Year 5 Mathematics
import type { YearLevelCurriculum } from './curriculum-data';

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

## Ordering Large Numbers

When comparing large numbers, start from the left and compare digit by digit.`,
              keyPoints: [
                'Each position in a number represents a different value (ones, tens, hundreds, thousands, etc.)',
                'We use commas to separate groups of three digits for easier reading',
                'When comparing numbers, start from the leftmost digit',
                'The more digits a number has, the larger it generally is'
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
                {
                  id: 'VCMNA186-001',
                  question: 'What is the value of the 7 in 372,458?',
                  options: ['7', '70', '700', '70,000'],
                  correctAnswer: 3,
                  explanation: 'The 7 is in the ten thousands place, so its value is 70,000.',
                  difficulty: 1
                },
                {
                  id: 'VCMNA186-002',
                  question: 'Which number is largest?',
                  options: ['199,999', '200,001', '189,999', '201,000'],
                  correctAnswer: 3,
                  explanation: '201,000 has the highest value in the hundred thousands and thousands places.',
                  difficulty: 2
                },
                {
                  id: 'VCMNA186-003',
                  question: 'How do you write "five hundred and thirty-two thousand, one hundred and seven" as a number?',
                  options: ['53,217', '532,107', '532,170', '523,107'],
                  correctAnswer: 1,
                  explanation: '532 thousand = 532,000, plus 107 = 532,107',
                  difficulty: 2
                },
                {
                  id: 'VCMNA186-004',
                  question: 'What number is 10,000 more than 456,789?',
                  options: ['456,799', '457,789', '466,789', '556,789'],
                  correctAnswer: 2,
                  explanation: 'Adding 10,000 changes the ten thousands digit: 456,789 + 10,000 = 466,789',
                  difficulty: 2
                },
                {
                  id: 'VCMNA186-005',
                  question: 'Round 847,562 to the nearest ten thousand',
                  options: ['847,000', '848,000', '850,000', '840,000'],
                  correctAnswer: 2,
                  explanation: 'Look at the thousands digit (7). Since 7 ≥ 5, round up to 850,000.',
                  difficulty: 3
                }
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

Start with 1 and work your way up, finding pairs. Stop when your pairs start repeating!

## What are Multiples?

**Multiples** are what you get when you multiply a number by 1, 2, 3, 4, and so on.

**Example:** Multiples of 5: **5, 10, 15, 20, 25, 30...**

## The Connection

If 3 is a **factor** of 12, then 12 is a **multiple** of 3. They're like two sides of the same coin!`,
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
              description: 'Solve problems involving multiplication of large numbers using efficient strategies',
              content: `# Multiplying Large Numbers

When numbers get bigger, we need smart strategies to multiply them!

## The Expanded Method (Partitioning)

Break the number into parts:

**347 × 6 = ?**
- 300 × 6 = 1,800
- 40 × 6 = 240
- 7 × 6 = 42
- Total: 1,800 + 240 + 42 = **2,082**

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

## What Do Remainders Mean in Real Life?

**1. Ignore the remainder:** "How many full cartons?" → Just use the quotient

**2. Round up:** "How many buses needed?" → Add 1 if there's a remainder

**3. The remainder IS the answer:** "How many left over?" → Use the remainder`,
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

## Understanding Unit Fractions

A **unit fraction** has 1 as its numerator: ½, ⅓, ¼, ⅕, ⅙...

**Important rule:** The LARGER the denominator, the SMALLER the fraction!

Think about it: If you share a pizza among more people, each person gets a smaller piece.

So: **½ > ⅓ > ¼ > ⅕ > ⅙ > ⅐ > ⅛**

## Comparing Fractions with Same Denominators

When denominators are the same, just compare numerators:
- ⅗ vs ⅖ → 3 > 2, so **⅗ > ⅖**

## Using Benchmarks

Compare fractions to ½:
- Is ³⁄₈ more or less than ½? → ½ = ⁴⁄₈, and 3 < 4, so **³⁄₈ < ½**`,
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

| Ones | . | Tenths | Hundredths | Thousandths |
|------|---|--------|------------|-------------|
| 1    | . | 0.1    | 0.01       | 0.001       |

## Comparing Decimals

**Golden Rule:** Line up the decimal points, then compare from left to right!

**Example:** Which is larger, 3.45 or 3.5?
- 3.45
- 3.50 (add a zero to help compare)
- Compare: 4 < 5, so **3.5 > 3.45**

## Common Mistakes to Avoid

❌ "3.45 is bigger because it has more digits"
✓ Compare place values, not number of digits!`,
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
              id: 'VCMMG196',
              code: 'VCMMG196',
              title: 'Perimeter, Area and Volume',
              description: 'Calculate the perimeter and area of rectangles and the volume and capacity of prisms',
              content: `# Perimeter, Area and Volume

These three measurements tell us different things about shapes!

## Perimeter

**Perimeter** = the distance around the outside of a shape

For a rectangle: **Perimeter = 2 × (length + width)**

## Area

**Area** = the space inside a 2D shape (measured in square units)

For a rectangle: **Area = length × width**

## Volume

**Volume** = the space inside a 3D shape (measured in cubic units)

For a rectangular prism (box): **Volume = length × width × height**

### Volume and Capacity

- **1 cm³ = 1 mL**
- **1,000 cm³ = 1 L**`,
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

- **Acute Angle** (Sharp!): Less than 90°
- **Right Angle** (Square corner): Exactly 90°
- **Obtuse Angle** (Wide): Between 90° and 180°
- **Straight Angle**: Exactly 180°
- **Reflex Angle**: Between 180° and 360°

## Angles in Shapes

| Shape | Sum of Angles |
|-------|---------------|
| Triangle | 180° |
| Quadrilateral | 360° |`,
              keyPoints: [
                'Angles are measured in degrees (°)',
                'Acute < 90° < Right = 90° < Obtuse < 180° < Straight = 180° < Reflex < 360°',
                'Use benchmarks (45°, 90°, 180°) to estimate',
                'A protractor measures angles precisely'
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
                {
                  id: 'VCMMG202-001',
                  question: 'What type of angle is 75°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                  correctAnswer: 0,
                  explanation: '75° is less than 90°, so it is an acute angle',
                  difficulty: 1
                },
                {
                  id: 'VCMMG202-002',
                  question: 'What type of angle is 145°?',
                  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                  correctAnswer: 2,
                  explanation: '145° is between 90° and 180°, so it is an obtuse angle',
                  difficulty: 1
                },
                {
                  id: 'VCMMG202-003',
                  question: 'A right angle and an angle of 35° are together. What is their total?',
                  options: ['115°', '125°', '135°', '145°'],
                  correctAnswer: 1,
                  explanation: 'A right angle = 90°, so 90° + 35° = 125°',
                  difficulty: 2
                },
                {
                  id: 'VCMMG202-004',
                  question: 'The angles of a triangle are 90°, 45°, and what?',
                  options: ['35°', '45°', '55°', '65°'],
                  correctAnswer: 1,
                  explanation: 'Triangle angles = 180°, so 180 - 90 - 45 = 45°',
                  difficulty: 2
                },
                {
                  id: 'VCMMG202-005',
                  question: 'What is the reflex angle when the acute angle is 50°?',
                  options: ['130°', '230°', '310°', '360°'],
                  correctAnswer: 2,
                  explanation: 'A reflex angle and its corresponding angle make 360°. 360° - 50° = 310°',
                  difficulty: 3
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
              description: 'List outcomes of chance experiments and represent probabilities using fractions',
              content: `# Understanding Probability

Probability tells us how likely something is to happen, measured from 0 to 1.

## The Probability Scale

- **0** = Impossible (will never happen)
- **½** = Even chance (equally likely to happen or not)
- **1** = Certain (will definitely happen)

## Writing Probability as Fractions

**Probability = Number of ways event can happen / Total number of possible outcomes**

## Example: Rolling a Die

**P(rolling a 4) = 1/6** (1 way to get 4, 6 total outcomes)
**P(even number) = 3/6 = 1/2** (3 even numbers: 2, 4, 6)`,
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
        }
      ]
    }
  ]
};
