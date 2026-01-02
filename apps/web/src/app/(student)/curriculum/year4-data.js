"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.year4Maths = void 0;
exports.year4Maths = {
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

Check: 40,000 + 7,000 + 300 + 50 + 8 = **47,358** ✓`,
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

## Tricky Tables Tips

### The 6 Times Table
- 6 × 6 = 36
- 6 × 7 = 42
- 6 × 8 = 48

### The 7 Times Table
- 7 × 7 = 49
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
                                    explanation: '7 × 6 = 42. Think: 7 × 5 = 35, plus 7 = 42',
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

1/2 = 2/4 = 3/6 = 4/8

They all equal one half!

## Finding Equivalent Fractions

**Multiply both numbers by the same thing:**

1/3 = ?/6
- Multiply top and bottom by 2
- 1 × 2 = 2, 3 × 2 = 6
- 1/3 = **2/6** ✓

**Or divide both numbers:**

4/8 = ?/?
- Divide top and bottom by 4
- 4 ÷ 4 = 1, 8 ÷ 4 = 2
- 4/8 = **1/2** ✓`,
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
- 5/10 = 0.5 (five tenths = half!)

## Hundredths

One whole divided into 100 equal parts:
- 1/100 = 0.01 (one hundredth)
- 25/100 = 0.25 (one quarter!)

## Money Uses Decimals!

$3.45 means:
- 3 dollars (ones)
- 4 ten-cent pieces (tenths)
- 5 cents (hundredths)`,
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
                    description: 'Perimeter, area, and angles',
                    sections: [
                        {
                            id: 'perimeter-area-y4',
                            code: 'VCMMG165',
                            title: 'Perimeter and Area',
                            description: 'Calculate the perimeter and area of rectangles',
                            content: `# Perimeter and Area

Let's learn the difference between going AROUND a shape and FILLING a shape!

## Perimeter = Distance Around

**Rectangle Perimeter:**
Perimeter = 2 × (Length + Width)

**Example:** Rectangle 8 cm × 5 cm
- P = 2 × (8 + 5) = 2 × 13 = **26 cm**

**Square Perimeter:**
Perimeter = 4 × Side

**Example:** Square with side 6 cm
- P = 4 × 6 = **24 cm**

## Area = Space Inside

**Rectangle Area:**
Area = Length × Width

**Example:** Rectangle 8 cm × 5 cm
- A = 8 × 5 = **40 cm²**

**Square Area:**
Area = Side × Side

**Example:** Square with side 6 cm
- A = 6 × 6 = **36 cm²**`,
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
                            description: 'Compare angles and classify them',
                            content: `# All About Angles

An angle is the space between two lines that meet at a point. Let's measure them!

## Types of Angles

### Right Angle (90°)
- Exactly like the corner of a square
- We mark it with a small square

### Acute Angle (less than 90°)
- Smaller than a right angle
- Think: "acute" = small/cute

### Obtuse Angle (between 90° and 180°)
- Bigger than a right angle
- Think: "obtuse" = big

### Straight Angle (180°)
- Exactly a straight line

## Comparing Angles

Use a right angle corner to check:
- Angle fits inside = **acute**
- Angle matches exactly = **right angle**
- Angle is bigger = **obtuse**`,
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
                }
            ]
        },
        {
            id: 'statistics-probability-y4',
            name: 'Statistics and Probability',
            chapters: [
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

Probability measures how likely something is to happen.

## The Probability Scale

0 ←———————→ 1
Impossible     Certain
   0%           100%

## Probability as Fractions

- **Impossible** = 0
- **Unlikely** = less than 1/2
- **Even chance** = 1/2 or 50%
- **Likely** = more than 1/2
- **Certain** = 1

## Calculating Simple Probability

Probability = What you want ÷ All possibilities

**Example:** Rolling a 3 on a dice
- What you want: 1 way
- All possibilities: 6
- Probability = 1/6`,
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
                                    question: 'A spinner has 4 equal sections: 2 red, 1 blue, 1 green. What\'s the probability of red?',
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
