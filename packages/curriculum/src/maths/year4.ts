import { YearLevelCurriculum } from '../types';

export const year4Maths: YearLevelCurriculum = {
  yearLevel: 4,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra-y4',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'place-value-y4',
          title: 'Place Value',
          description: 'Understanding numbers to tens of thousands',
          sections: [
            {
              id: 'place-value-tenthousands-y4',
              code: 'VCMNA150',
              title: 'Place Value to Tens of Thousands',
              description: 'Recognise, represent and order numbers to at least tens of thousands',
              content: `# Place Value: Going Even Bigger!

In Year 4, we work with numbers up to tens of thousands. That's really big!

## The Place Value System

| Ten Thousands | Thousands | Hundreds | Tens | Ones |
|:-------------:|:---------:|:--------:|:----:|:----:|
|       2       |     5     |    4     |   3  |   1  |

This number is **25,431** - "twenty-five thousand, four hundred and thirty-one"

## Understanding Ten Thousands

- **10,000** = ten thousand (10 groups of 1,000!)
- **20,000** = twenty thousand
- **50,000** = fifty thousand
- **99,999** = the biggest 5-digit number

## Place Value Breakdown

Let's break down 47,358:
- 4 ten thousands = 40,000
- 7 thousands = 7,000
- 3 hundreds = 300
- 5 tens = 50
- 8 ones = 8

Check: 40,000 + 7,000 + 300 + 50 + 8 = **47,358** ✓

## Reading Large Numbers

1. Find the comma
2. Read the number before the comma, say "thousand"
3. Then read the rest

**67,294** = "sixty-seven thousand, two hundred and ninety-four"

## Comparing Large Numbers

Compare from left to right:
- **45,678** vs **45,687**
- 4=4, 5=5, 6=6, 7<8
- So 45,678 < 45,687`,
              keyPoints: [
                'Ten thousands is the place to the left of thousands',
                '10,000 = 10 groups of 1,000',
                'Use commas to separate thousands',
                'Compare numbers starting from the left',
                'Break numbers down by place value to understand them'
              ],
              examples: [
                {
                  problem: 'Write 56,032 in expanded form',
                  solution: '50,000 + 6,000 + 30 + 2',
                  explanation: '5 ten-thousands + 6 thousands + 0 hundreds + 3 tens + 2 ones'
                },
                {
                  problem: 'What is the value of 7 in 73,459?',
                  solution: '70,000',
                  explanation: 'The 7 is in the ten thousands place, so it represents 70,000'
                }
              ],
              questions: [
                {
                  id: 'y4-pv-1',
                  question: 'What is the value of 8 in 28,451?',
                  options: ['8,000', '80,000', '800', '8'],
                  correctAnswer: 0,
                  explanation: 'The 8 is in the thousands place, so it equals 8,000',
                  difficulty: 1
                },
                {
                  id: 'y4-pv-2',
                  question: 'Which number is largest?',
                  options: ['45,999', '45,099', '44,999', '45,909'],
                  correctAnswer: 0,
                  explanation: 'All start with 4. Compare: 45,999 has 5 thousands and 999, which is largest',
                  difficulty: 2
                },
                {
                  id: 'y4-pv-3',
                  question: 'Write in digits: "Thirty-four thousand, five hundred and six"',
                  options: ['34,506', '34,560', '35,406', '30,456'],
                  correctAnswer: 0,
                  explanation: 'Thirty-four thousand = 34,000, five hundred = 500, six = 6. Total: 34,506',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'multiplication-y4',
          title: 'Multiplication and Division',
          description: 'Extending times tables and using mental strategies',
          sections: [
            {
              id: 'times-tables-y4',
              code: 'VCMNA153',
              title: 'Times Tables to 10',
              description: 'Recall multiplication facts up to 10 × 10 and related division facts',
              content: `# Mastering All Times Tables

Time to learn all your times tables up to 10 × 10!

## The Times Tables Grid

|  ×  |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 |
|:---:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **1** |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 |
| **2** |  2 |  4 |  6 |  8 | 10 | 12 | 14 | 16 | 18 | 20 |
| **3** |  3 |  6 |  9 | 12 | 15 | 18 | 21 | 24 | 27 | 30 |
| **4** |  4 |  8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 |
| **5** |  5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 |
| **6** |  6 | 12 | 18 | 24 | 30 | 36 | 42 | 48 | 54 | 60 |
| **7** |  7 | 14 | 21 | 28 | 35 | 42 | 49 | 56 | 63 | 70 |
| **8** |  8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 |
| **9** |  9 | 18 | 27 | 36 | 45 | 54 | 63 | 72 | 81 | 90 |
| **10** | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 |

## Tricky Tables Tips

### The 6 Times Table
- 6 × 6 = 36
- 6 × 7 = 42
- 6 × 8 = 48

### The 7 Times Table
- 7 × 7 = 49 (7 ate 9... no wait, 7 × 7 = 49!)
- 7 × 8 = 56 (5, 6, 7, 8: 56 = 7 × 8)

### The 8 Times Table
- Double the 4s table!
- 8 × 8 = 64

### The 9 Times Table (Magic Trick!)
The digits always add up to 9:
- 9 × 2 = 18 → 1+8 = 9 ✓
- 9 × 7 = 63 → 6+3 = 9 ✓

## Division Facts

Every multiplication fact gives you division facts:
- 6 × 8 = 48
- 48 ÷ 6 = 8
- 48 ÷ 8 = 6`,
              keyPoints: [
                'Know all times tables to 10 × 10',
                '9s trick: digits always add to 9',
                '8 times table = double the 4 times table',
                '7 × 8 = 56 (think: 5, 6, 7, 8)',
                'Each multiplication gives 2 division facts'
              ],
              examples: [
                {
                  problem: 'What is 8 × 7?',
                  solution: '56',
                  explanation: 'Remember: 5, 6, 7, 8! So 56 = 7 × 8 (or 8 × 7)'
                },
                {
                  problem: 'Use 9 × 6 = 54 to find 54 ÷ 9',
                  solution: '6',
                  explanation: 'If 9 × 6 = 54, then 54 ÷ 9 = 6'
                }
              ],
              questions: [
                {
                  id: 'y4-mult-1',
                  question: 'What is 7 × 6?',
                  options: ['42', '48', '36', '56'],
                  correctAnswer: 0,
                  explanation: '7 × 6 = 42. You can think of it as 7 × 5 = 35, plus one more 7 = 42',
                  difficulty: 1
                },
                {
                  id: 'y4-mult-2',
                  question: 'What is 72 ÷ 8?',
                  options: ['9', '8', '7', '6'],
                  correctAnswer: 0,
                  explanation: '8 × 9 = 72, so 72 ÷ 8 = 9',
                  difficulty: 1
                },
                {
                  id: 'y4-mult-3',
                  question: 'What is 9 × 8?',
                  options: ['72', '63', '81', '64'],
                  correctAnswer: 0,
                  explanation: '9 × 8 = 72. Check: 7 + 2 = 9 ✓ (the 9s trick works!)',
                  difficulty: 2
                }
              ]
            },
            {
              id: 'mult-strategies-y4',
              code: 'VCMNA154',
              title: 'Multiplication Strategies',
              description: 'Develop efficient mental and written strategies for multiplication',
              content: `# Smart Multiplication Strategies

Let's learn clever ways to multiply bigger numbers!

## The Distributive Property (Splitting)

Break one number into easier parts:

**Example:** 7 × 14
- Split 14 into 10 + 4
- 7 × 10 = 70
- 7 × 4 = 28
- Add: 70 + 28 = **98**

## Doubling and Halving

Make one number easier by doubling it, then halve the other:

**Example:** 4 × 15
- Double 4 → 8
- Halve 15 → 7.5... that's tricky!

Better example: 5 × 16
- Double 5 → 10
- Halve 16 → 8
- 10 × 8 = **80** ✓

## Using Known Facts

Use facts you know to find new ones:

**Example:** 6 × 12
- I know 6 × 10 = 60
- I know 6 × 2 = 12
- 60 + 12 = **72**

## The Grid Method

For bigger multiplications, use a grid:

**Example:** 23 × 4
|   ×   |  20 |  3  |
|:-----:|:---:|:---:|
| **4** |  80 | 12  |

80 + 12 = **92**

## Multiplying by 10, 100, 1000

- × 10: Add one zero
- × 100: Add two zeros
- × 1000: Add three zeros

**45 × 100 = 4,500**`,
              keyPoints: [
                'Split numbers to make multiplication easier',
                'Double and halve can simplify calculations',
                'Use known facts to find new ones',
                'Grid method helps with larger multiplications',
                'Multiplying by 10/100/1000 adds zeros'
              ],
              examples: [
                {
                  problem: 'Calculate 8 × 15 using splitting',
                  solution: '120',
                  explanation: '8 × 15 = 8 × 10 + 8 × 5 = 80 + 40 = 120'
                },
                {
                  problem: 'Calculate 25 × 4 using doubling/halving',
                  solution: '100',
                  explanation: 'Double 25 = 50, halve 4 = 2. So 50 × 2 = 100'
                }
              ],
              questions: [
                {
                  id: 'y4-strat-1',
                  question: 'What is 6 × 15?',
                  options: ['90', '80', '75', '85'],
                  correctAnswer: 0,
                  explanation: '6 × 15 = 6 × 10 + 6 × 5 = 60 + 30 = 90',
                  difficulty: 1
                },
                {
                  id: 'y4-strat-2',
                  question: 'What is 34 × 10?',
                  options: ['340', '34', '3400', '304'],
                  correctAnswer: 0,
                  explanation: 'Multiplying by 10 adds one zero: 34 × 10 = 340',
                  difficulty: 1
                },
                {
                  id: 'y4-strat-3',
                  question: 'Using the grid method, what is 26 × 3?',
                  options: ['78', '68', '72', '86'],
                  correctAnswer: 0,
                  explanation: '20 × 3 = 60, and 6 × 3 = 18. Total: 60 + 18 = 78',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'fractions-decimals-y4',
          title: 'Fractions and Decimals',
          description: 'Working with fractions and introducing decimals',
          sections: [
            {
              id: 'equivalent-fractions-y4',
              code: 'VCMNA156',
              title: 'Equivalent Fractions',
              description: 'Investigate equivalent fractions used in contexts',
              content: `# Equivalent Fractions

Equivalent fractions look different but are worth the same amount!

## What Are Equivalent Fractions?

Look at these - they're all the same!

\`\`\`
1/2 = 2/4 = 3/6 = 4/8
\`\`\`

They all equal one half!

## Finding Equivalent Fractions

**Multiply both numbers by the same thing:**

1/3 = ?/6
- Multiply top and bottom by 2
- 1 × 2 = 2, 3 × 2 = 6
- 1/3 = **2/6** ✓

**Or divide both numbers by the same thing:**

4/8 = ?/?
- Divide top and bottom by 4
- 4 ÷ 4 = 1, 8 ÷ 4 = 2
- 4/8 = **1/2** ✓

## Simplifying Fractions

A fraction is **simplest form** when you can't divide anymore.

**Example:** Simplify 6/8
- Both 6 and 8 can be divided by 2
- 6 ÷ 2 = 3, 8 ÷ 2 = 4
- 6/8 = **3/4** (simplest form!)

## Visual Proof

Imagine a chocolate bar:
- Cut into 2 pieces: eat 1 piece = 1/2
- Cut into 4 pieces: eat 2 pieces = 2/4
- Same amount of chocolate! 🍫`,
              keyPoints: [
                'Equivalent fractions have the same value',
                'Multiply top and bottom by the same number to find equivalents',
                'Divide top and bottom by the same number to simplify',
                'Simplest form = can\'t divide anymore',
                '1/2 = 2/4 = 3/6 = 4/8...'
              ],
              examples: [
                {
                  problem: 'Find an equivalent fraction for 2/3 with denominator 9',
                  solution: '6/9',
                  explanation: 'Multiply both by 3: 2 × 3 = 6, 3 × 3 = 9. So 2/3 = 6/9'
                },
                {
                  problem: 'Simplify 10/15',
                  solution: '2/3',
                  explanation: 'Divide both by 5: 10 ÷ 5 = 2, 15 ÷ 5 = 3. So 10/15 = 2/3'
                }
              ],
              questions: [
                {
                  id: 'y4-frac-1',
                  question: 'Which fraction is equivalent to 1/4?',
                  options: ['2/8', '2/4', '1/8', '4/8'],
                  correctAnswer: 0,
                  explanation: '1 × 2 = 2, 4 × 2 = 8. So 1/4 = 2/8',
                  difficulty: 1
                },
                {
                  id: 'y4-frac-2',
                  question: 'Simplify 8/12 to its simplest form',
                  options: ['2/3', '4/6', '3/4', '1/2'],
                  correctAnswer: 0,
                  explanation: 'Divide both by 4: 8 ÷ 4 = 2, 12 ÷ 4 = 3. Answer: 2/3',
                  difficulty: 2
                },
                {
                  id: 'y4-frac-3',
                  question: 'Which is NOT equivalent to 3/4?',
                  options: ['5/8', '6/8', '9/12', '12/16'],
                  correctAnswer: 0,
                  explanation: '5/8 is different. Check: 3/4 = 6/8 = 9/12 = 12/16, but 5/8 ≠ 3/4',
                  difficulty: 2
                }
              ]
            },
            {
              id: 'decimals-intro-y4',
              code: 'VCMNA157',
              title: 'Introduction to Decimals',
              description: 'Recognise that the place value system can be extended to tenths and hundredths',
              content: `# Welcome to Decimals!

Decimals are another way to write fractions. Let's learn!

## The Decimal Point

A decimal point separates whole numbers from parts:

**3.5** = 3 and a half
- 3 = whole number part
- .5 = decimal part (five tenths)

## Tenths

One whole divided into 10 equal parts:
- 1/10 = 0.1 (one tenth)
- 2/10 = 0.2 (two tenths)
- 5/10 = 0.5 (five tenths = half!)

## Hundredths

One whole divided into 100 equal parts:
- 1/100 = 0.01 (one hundredth)
- 25/100 = 0.25 (twenty-five hundredths = one quarter!)

## Place Value with Decimals

| Ones | . | Tenths | Hundredths |
|:----:|:-:|:------:|:----------:|
|   2  | . |    4   |     5      |

This is **2.45** = 2 ones + 4 tenths + 5 hundredths

## Money Uses Decimals!

$3.45 means:
- 3 dollars (ones)
- 4 ten-cent pieces (tenths)
- 5 cents (hundredths)

## Comparing Decimals

Compare from left to right, just like whole numbers:
- 0.5 vs 0.3 → 5 tenths > 3 tenths → 0.5 > 0.3
- 0.45 vs 0.5 → 0.45 = 45 hundredths, 0.5 = 50 hundredths → 0.5 > 0.45`,
              keyPoints: [
                'Decimal point separates wholes from parts',
                'Tenths = 1 place after decimal point',
                'Hundredths = 2 places after decimal point',
                '0.5 = 5/10 = 1/2',
                '0.25 = 25/100 = 1/4'
              ],
              examples: [
                {
                  problem: 'Write 3/10 as a decimal',
                  solution: '0.3',
                  explanation: 'Three tenths = 0.3 (3 in the tenths place)'
                },
                {
                  problem: 'Which is greater: 0.6 or 0.59?',
                  solution: '0.6',
                  explanation: '0.6 = 0.60 = 60 hundredths. 0.59 = 59 hundredths. 60 > 59'
                }
              ],
              questions: [
                {
                  id: 'y4-dec-1',
                  question: 'What is 7/10 as a decimal?',
                  options: ['0.7', '0.07', '7.0', '0.70'],
                  correctAnswer: 0,
                  explanation: 'Seven tenths = 0.7 (the 7 goes in the tenths place)',
                  difficulty: 1
                },
                {
                  id: 'y4-dec-2',
                  question: 'Which decimal is equal to 1/4?',
                  options: ['0.25', '0.4', '0.14', '0.75'],
                  correctAnswer: 0,
                  explanation: '1/4 = 25/100 = 0.25 (twenty-five hundredths)',
                  difficulty: 2
                },
                {
                  id: 'y4-dec-3',
                  question: 'Put in order from smallest to largest: 0.5, 0.05, 0.55',
                  options: ['0.05, 0.5, 0.55', '0.5, 0.05, 0.55', '0.55, 0.5, 0.05', '0.05, 0.55, 0.5'],
                  correctAnswer: 0,
                  explanation: '0.05 = 5 hundredths, 0.5 = 50 hundredths, 0.55 = 55 hundredths',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'measurement-geometry-y4',
      name: 'Measurement and Geometry',
      chapters: [
        {
          id: 'measurement-y4',
          title: 'Measurement',
          description: 'Converting units and calculating perimeter/area',
          sections: [
            {
              id: 'perimeter-area-y4',
              code: 'VCMMG165',
              title: 'Perimeter and Area',
              description: 'Calculate the perimeter and area of rectangles',
              content: `# Perimeter and Area

Let's learn the difference between going AROUND a shape and FILLING a shape!

## Perimeter = Distance Around

Perimeter is the total length around the outside of a shape.

**Rectangle Perimeter:**
For a rectangle with length (L) and width (W):
\`\`\`
Perimeter = L + W + L + W
         = 2 × L + 2 × W
         = 2 × (L + W)
\`\`\`

**Example:** Rectangle 8 cm × 5 cm
- P = 2 × (8 + 5) = 2 × 13 = **26 cm**

**Square Perimeter:**
A square has 4 equal sides (S):
\`\`\`
Perimeter = 4 × S
\`\`\`

**Example:** Square with side 6 cm
- P = 4 × 6 = **24 cm**

## Area = Space Inside

Area measures how much space is inside a flat shape. We measure it in **square units** (like cm² or m²).

**Rectangle Area:**
\`\`\`
Area = Length × Width
\`\`\`

**Example:** Rectangle 8 cm × 5 cm
- A = 8 × 5 = **40 cm²**

**Square Area:**
\`\`\`
Area = Side × Side = Side²
\`\`\`

**Example:** Square with side 6 cm
- A = 6 × 6 = **36 cm²**

## Remember!

- **Perimeter** = add the sides (units: cm, m)
- **Area** = multiply length × width (units: cm², m²)`,
              keyPoints: [
                'Perimeter = distance around the outside',
                'Area = space inside the shape',
                'Rectangle perimeter = 2 × (length + width)',
                'Rectangle area = length × width',
                'Area uses square units (cm², m²)'
              ],
              examples: [
                {
                  problem: 'Find the perimeter of a rectangle 12 m × 7 m',
                  solution: '38 m',
                  explanation: 'P = 2 × (12 + 7) = 2 × 19 = 38 m'
                },
                {
                  problem: 'Find the area of a square with sides of 9 cm',
                  solution: '81 cm²',
                  explanation: 'A = 9 × 9 = 81 cm²'
                }
              ],
              questions: [
                {
                  id: 'y4-perim-1',
                  question: 'What is the perimeter of a rectangle 10 cm by 4 cm?',
                  options: ['28 cm', '40 cm', '14 cm', '28 cm²'],
                  correctAnswer: 0,
                  explanation: 'P = 2 × (10 + 4) = 2 × 14 = 28 cm',
                  difficulty: 1
                },
                {
                  id: 'y4-perim-2',
                  question: 'What is the area of a rectangle 7 m by 5 m?',
                  options: ['35 m²', '24 m²', '35 m', '12 m²'],
                  correctAnswer: 0,
                  explanation: 'Area = 7 × 5 = 35 m²',
                  difficulty: 1
                },
                {
                  id: 'y4-perim-3',
                  question: 'A square has a perimeter of 20 cm. What is its area?',
                  options: ['25 cm²', '20 cm²', '16 cm²', '100 cm²'],
                  correctAnswer: 0,
                  explanation: 'If perimeter = 20, each side = 20 ÷ 4 = 5 cm. Area = 5 × 5 = 25 cm²',
                  difficulty: 3
                }
              ]
            },
            {
              id: 'angles-y4',
              code: 'VCMMG166',
              title: 'Angles',
              description: 'Compare angles and classify them as equal to, greater than or less than a right angle',
              content: `# All About Angles

An angle is the space between two lines that meet at a point. Let's measure them!

## Types of Angles

### Right Angle (90°)
- Exactly like the corner of a square ⬜
- We mark it with a small square
- Found everywhere: books, doors, windows

### Acute Angle (less than 90°)
- Smaller than a right angle
- Think: "acute" = small/cute
- Like a pizza slice 🍕

### Obtuse Angle (between 90° and 180°)
- Bigger than a right angle but less than straight
- Think: "obtuse" = fat/big

### Straight Angle (180°)
- Exactly a straight line
- Like half a turn

### Reflex Angle (more than 180°)
- More than a straight line
- Goes "the long way around"

## Comparing Angles

Use a right angle corner (like a piece of paper) to check:
- Angle fits inside = **acute**
- Angle matches exactly = **right angle**
- Angle is bigger = **obtuse**

## Angles in Shapes

- Square/Rectangle: All angles are 90° (right angles)
- Triangle: Angles add up to 180°
- Full turn: 360°`,
              keyPoints: [
                'Right angle = 90° (square corner)',
                'Acute = less than 90° (small)',
                'Obtuse = between 90° and 180° (large)',
                'Straight angle = 180° (flat line)',
                'Full turn = 360°'
              ],
              examples: [
                {
                  problem: 'Classify an angle of 45°',
                  solution: 'Acute angle',
                  explanation: '45° is less than 90°, so it\'s an acute angle'
                },
                {
                  problem: 'What type of angle is 120°?',
                  solution: 'Obtuse angle',
                  explanation: '120° is greater than 90° but less than 180°, so it\'s obtuse'
                }
              ],
              questions: [
                {
                  id: 'y4-angle-1',
                  question: 'What type of angle is smaller than a right angle?',
                  options: ['Acute', 'Obtuse', 'Straight', 'Reflex'],
                  correctAnswer: 0,
                  explanation: 'Acute angles are less than 90° (smaller than a right angle)',
                  difficulty: 1
                },
                {
                  id: 'y4-angle-2',
                  question: 'How many degrees is a straight angle?',
                  options: ['180°', '90°', '360°', '45°'],
                  correctAnswer: 0,
                  explanation: 'A straight angle is a flat line = 180°',
                  difficulty: 1
                },
                {
                  id: 'y4-angle-3',
                  question: 'What type of angle is 135°?',
                  options: ['Obtuse', 'Acute', 'Right', 'Reflex'],
                  correctAnswer: 0,
                  explanation: '135° is between 90° and 180°, so it\'s obtuse',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'shape-y4',
          title: 'Shape',
          description: 'Properties of 2D and 3D shapes',
          sections: [
            {
              id: 'symmetry-y4',
              code: 'VCMMG167',
              title: 'Symmetry and Transformation',
              description: 'Create symmetrical patterns, pictures and shapes with and without digital technologies',
              content: `# Symmetry: Mirror Images

Symmetry is when one half of something is a mirror image of the other half.

## Line of Symmetry

An imaginary line that divides a shape into two matching halves.

**Example:** A butterfly 🦋
- Fold it down the middle
- Both wings match perfectly!

## Finding Lines of Symmetry

| Shape | Lines of Symmetry |
|:------|:-----------------:|
| Square | 4 |
| Rectangle | 2 |
| Equilateral triangle | 3 |
| Isosceles triangle | 1 |
| Circle | Infinite! |
| Regular hexagon | 6 |

## Drawing Symmetrical Shapes

To complete a symmetrical pattern:
1. Count squares from the line of symmetry
2. Draw the same on the other side
3. Make sure it's a mirror image!

## Types of Symmetry

### Reflective Symmetry
Like looking in a mirror - the image flips.

### Rotational Symmetry
The shape looks the same when you rotate it.
- Square: Looks same after 90° turn
- Rectangle: Looks same after 180° turn

## Testing for Symmetry

1. **Fold test**: Fold along the line - do both halves match?
2. **Mirror test**: Hold a mirror on the line - does it look complete?`,
              keyPoints: [
                'Symmetry = two halves are mirror images',
                'Line of symmetry divides shape into matching halves',
                'Square has 4 lines of symmetry',
                'Rectangle has 2 lines of symmetry',
                'Use fold or mirror test to check'
              ],
              examples: [
                {
                  problem: 'How many lines of symmetry does an equilateral triangle have?',
                  solution: '3',
                  explanation: 'You can fold through each corner to the opposite side - 3 ways'
                },
                {
                  problem: 'Does the letter A have a line of symmetry?',
                  solution: 'Yes, 1 vertical line',
                  explanation: 'A can be folded vertically down the middle and both halves match'
                }
              ],
              questions: [
                {
                  id: 'y4-sym-1',
                  question: 'How many lines of symmetry does a square have?',
                  options: ['4', '2', '1', '8'],
                  correctAnswer: 0,
                  explanation: 'A square has 4 lines: 2 through opposite corners, 2 through middle of sides',
                  difficulty: 1
                },
                {
                  id: 'y4-sym-2',
                  question: 'Which letter does NOT have a line of symmetry?',
                  options: ['F', 'A', 'M', 'T'],
                  correctAnswer: 0,
                  explanation: 'F has no line of symmetry. A, M, and T all have vertical symmetry',
                  difficulty: 2
                },
                {
                  id: 'y4-sym-3',
                  question: 'A rectangle has how many lines of symmetry?',
                  options: ['2', '4', '1', '0'],
                  correctAnswer: 0,
                  explanation: 'A rectangle has 2 lines: one horizontal, one vertical through the center',
                  difficulty: 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'statistics-probability-y4',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'data-y4',
          title: 'Data Representation',
          description: 'Collecting, organizing and interpreting data',
          sections: [
            {
              id: 'graphs-y4',
              code: 'VCMSP178',
              title: 'Reading and Creating Graphs',
              description: 'Construct suitable data displays and evaluate the effectiveness of different displays',
              content: `# Working with Graphs

Graphs help us see data clearly. Let's learn to read and create them!

## Types of Graphs

### Column Graphs (Bar Graphs)
- Bars go UP from the bottom
- Height shows the amount
- Good for comparing different groups

### Picture Graphs (Pictographs)
- Use pictures to show data
- Each picture = a certain amount
- Always include a key!

### Line Graphs
- Points connected by lines
- Show how things change over time
- Great for temperature, growth, etc.

## Parts of a Graph

Every good graph needs:
1. **Title** - What is this graph about?
2. **Labels** - What do the axes show?
3. **Scale** - What numbers are used?
4. **Key/Legend** - What do symbols mean?

## Reading a Graph

Ask yourself:
- What is being measured?
- What does each bar/point/picture mean?
- What's the highest/lowest value?
- What patterns do you see?

## Creating a Graph

1. Collect your data
2. Choose the right type of graph
3. Draw axes and choose a scale
4. Plot your data carefully
5. Add title and labels

## Scale Matters!

If numbers are big, use a scale:
- Count by 2s, 5s, 10s, or even 100s
- Make sure the scale is even (same gap between numbers)`,
              keyPoints: [
                'Column graphs compare different groups',
                'Line graphs show change over time',
                'Every graph needs a title and labels',
                'Choose an appropriate scale',
                'Include a key for pictographs'
              ],
              examples: [
                {
                  problem: 'A bar reaches up to 15 on a graph. If each square = 5, how many squares high is it?',
                  solution: '3 squares',
                  explanation: '15 ÷ 5 = 3 squares high'
                },
                {
                  problem: 'In a pictograph, 🍎 = 4 apples. How would you show 10 apples?',
                  solution: '🍎🍎½ (2 and a half apples)',
                  explanation: '10 ÷ 4 = 2.5 pictures needed'
                }
              ],
              questions: [
                {
                  id: 'y4-graph-1',
                  question: 'Which type of graph is best for showing temperature changes over a week?',
                  options: ['Line graph', 'Pie chart', 'Pictograph', 'Column graph'],
                  correctAnswer: 0,
                  explanation: 'Line graphs show change over time, perfect for daily temperatures',
                  difficulty: 1
                },
                {
                  id: 'y4-graph-2',
                  question: 'On a bar graph, the scale goes 0, 10, 20, 30... What is the scale counting by?',
                  options: ['10s', '5s', '20s', '30s'],
                  correctAnswer: 0,
                  explanation: 'The difference between numbers is 10 (10-0=10, 20-10=10), so counting by 10s',
                  difficulty: 1
                },
                {
                  id: 'y4-graph-3',
                  question: 'What should ALWAYS be included in a pictograph?',
                  options: ['A key showing what each picture represents', 'Exactly 10 pictures', 'Only one type of picture', 'No numbers'],
                  correctAnswer: 0,
                  explanation: 'A key is essential so people know what each picture stands for',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'chance-y4',
          title: 'Chance',
          description: 'Probability and chance experiments',
          sections: [
            {
              id: 'probability-y4',
              code: 'VCMSP176',
              title: 'Probability Scale',
              description: 'Describe possible everyday events and order their chances of occurring',
              content: `# Probability: How Likely?

Probability measures how likely something is to happen, from impossible to certain.

## The Probability Scale

\`\`\`
0 ←————————————————————→ 1
Impossible          Certain
   ↑      ↑      ↑      ↑
  0%    25%    50%   100%
      Unlikely  Even  Likely
\`\`\`

## Probability as Fractions

- **Impossible** = 0 (0 out of something)
- **Unlikely** = less than 1/2
- **Even chance** = 1/2 or 50%
- **Likely** = more than 1/2
- **Certain** = 1 (all out of all)

## Calculating Simple Probability

Probability = (What you want) ÷ (All possibilities)

**Example:** Rolling a 3 on a dice
- What you want: 1 way (just the 3)
- All possibilities: 6 ways (1,2,3,4,5,6)
- Probability = 1/6

**Example:** Drawing a red card from a pack
- Red cards: 26 (hearts and diamonds)
- Total cards: 52
- Probability = 26/52 = 1/2

## Comparing Probabilities

- 1/2 > 1/4 (half is more likely than quarter)
- 3/4 > 1/2 (three quarters is more likely than half)
- 1/6 < 1/2 (one sixth is less likely than half)

## Fair vs Unfair

- **Fair**: All outcomes have equal chance (fair dice, fair coin)
- **Unfair**: Some outcomes are more likely than others`,
              keyPoints: [
                'Probability goes from 0 (impossible) to 1 (certain)',
                'Even chance = 1/2 = 50%',
                'Probability = favourable outcomes ÷ total outcomes',
                'Fair = all outcomes equally likely',
                'Higher fraction = more likely'
              ],
              examples: [
                {
                  problem: 'What\'s the probability of flipping heads on a fair coin?',
                  solution: '1/2',
                  explanation: '1 way to get heads, 2 possible outcomes. Probability = 1/2'
                },
                {
                  problem: 'A bag has 3 red balls and 2 blue balls. What\'s the probability of picking red?',
                  solution: '3/5',
                  explanation: '3 red balls, 5 total balls. Probability = 3/5'
                }
              ],
              questions: [
                {
                  id: 'y4-prob-1',
                  question: 'What is the probability of rolling an even number on a dice?',
                  options: ['1/2', '1/3', '1/6', '2/3'],
                  correctAnswer: 0,
                  explanation: 'Even numbers are 2, 4, 6 (3 numbers). 3 out of 6 = 3/6 = 1/2',
                  difficulty: 2
                },
                {
                  id: 'y4-prob-2',
                  question: 'Which probability means "unlikely"?',
                  options: ['1/4', '1/2', '3/4', '1'],
                  correctAnswer: 0,
                  explanation: '1/4 = 25% which is less than half, so it\'s unlikely',
                  difficulty: 1
                },
                {
                  id: 'y4-prob-3',
                  question: 'A spinner has 4 equal sections: 2 red, 1 blue, 1 green. What\'s the probability of landing on red?',
                  options: ['2/4 or 1/2', '1/4', '3/4', '1/3'],
                  correctAnswer: 0,
                  explanation: '2 red sections out of 4 total = 2/4 = 1/2',
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
