// Victorian Curriculum Year 6 Mathematics
import { YearLevelCurriculum } from './curriculum-data';

export const year6Maths: YearLevelCurriculum = {
  yearLevel: 6,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra-y6',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'whole-numbers-y6',
          title: 'Whole Numbers and Integers',
          description: 'Working with large numbers and negative numbers',
          sections: [
            {
              id: 'large-numbers-y6',
              code: 'VCMNA208',
              title: 'Large Numbers to Millions',
              description: 'Select and apply efficient strategies to solve problems involving all four operations',
              content: `# Working with Large Numbers

In Year 6, we work with numbers up to millions!

## Place Value to Millions

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|:--------:|:-----------------:|:-------------:|:---------:|:--------:|:----:|:----:|
|    2     |         4         |       5       |     3     |    7     |   8  |   2  |

This is **2,453,782** - "two million, four hundred and fifty-three thousand, seven hundred and eighty-two"

## Understanding Millions

- **1,000,000** = one million = 1000 thousands
- Australia's population is about 26 million

## Rounding Large Numbers

**Round to nearest 10,000:**
- Look at the thousands digit
- If it's 5 or more, round up

## Negative Numbers

Numbers less than zero are **negative**.

-5 -4 -3 -2 -1  0  1  2  3  4  5
←—————————————————————————————→
    colder    freezing   warmer`,
              keyPoints: [
                '1 million = 1,000,000 = 1000 thousands',
                'Round by looking at the digit to the right',
                'Negative numbers are less than zero',
                'On a number line, right = bigger',
                '-3 > -5 (closer to zero is bigger)'
              ],
              examples: [
                {
                  problem: 'Round 2,847,523 to the nearest hundred thousand',
                  solution: '2,800,000',
                  explanation: 'Look at ten thousands (4). Since 4 < 5, round down.'
                },
                {
                  problem: 'Order these: 3, -1, -5, 0, 2',
                  solution: '-5, -1, 0, 2, 3',
                  explanation: 'From smallest to largest. Negatives first, then zero, then positives.'
                }
              ],
              questions: [
                {
                  id: 'y6-num-1',
                  question: 'What is 3,456,789 rounded to the nearest million?',
                  options: ['3,000,000', '4,000,000', '3,500,000', '3,400,000'],
                  correctAnswer: 0,
                  explanation: 'The hundred thousands digit is 4, which is less than 5, so round down',
                  difficulty: 1
                },
                {
                  id: 'y6-num-2',
                  question: 'Which is the smallest number?',
                  options: ['-8', '-2', '0', '-5'],
                  correctAnswer: 0,
                  explanation: '-8 is furthest from zero on the negative side, so it\'s the smallest',
                  difficulty: 1
                },
                {
                  id: 'y6-num-3',
                  question: 'The temperature dropped from 5°C to -3°C. How many degrees did it fall?',
                  options: ['8 degrees', '2 degrees', '3 degrees', '5 degrees'],
                  correctAnswer: 0,
                  explanation: 'From 5 to 0 is 5 degrees, from 0 to -3 is 3 degrees. Total: 8 degrees',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'fractions-operations-y6',
          title: 'Fractions and Operations',
          description: 'Adding, subtracting, multiplying fractions',
          sections: [
            {
              id: 'fraction-operations-y6',
              code: 'VCMNA211',
              title: 'Adding and Subtracting Fractions',
              description: 'Solve problems involving addition and subtraction of fractions',
              content: `# Adding and Subtracting Fractions

Let's learn to add and subtract fractions!

## Same Denominators = Easy!

When denominators match, just add/subtract the numerators:

**3/8 + 2/8 = 5/8** ✓
**7/10 - 4/10 = 3/10** ✓

## Different Denominators

Find a common denominator first.

### Example: 1/2 + 1/4

1. Common denominator: 4
2. Convert: 1/2 = 2/4
3. Add: 2/4 + 1/4 = **3/4** ✓

### Example: 3/4 - 1/3

1. LCD (Lowest Common Denominator): 12
2. Convert: 3/4 = 9/12, 1/3 = 4/12
3. Subtract: 9/12 - 4/12 = **5/12** ✓`,
              keyPoints: [
                'Same denominators: just add/subtract numerators',
                'Different denominators: find a common denominator first',
                'LCD = Lowest Common Denominator',
                'Always simplify your final answer',
                'Mixed numbers: add wholes and fractions separately'
              ],
              examples: [
                {
                  problem: 'Calculate 2/3 + 1/6',
                  solution: '5/6',
                  explanation: 'Convert 2/3 to 4/6. Then 4/6 + 1/6 = 5/6'
                },
                {
                  problem: 'Calculate 5/6 - 1/2',
                  solution: '2/6 = 1/3',
                  explanation: 'Convert 1/2 to 3/6. Then 5/6 - 3/6 = 2/6 = 1/3'
                }
              ],
              questions: [
                {
                  id: 'y6-frac-1',
                  question: 'What is 1/4 + 2/4?',
                  options: ['3/4', '3/8', '1/2', '2/4'],
                  correctAnswer: 0,
                  explanation: 'Same denominators: 1 + 2 = 3, keep denominator 4. Answer: 3/4',
                  difficulty: 1
                },
                {
                  id: 'y6-frac-2',
                  question: 'What is 1/2 + 1/3?',
                  options: ['5/6', '2/5', '2/6', '1/5'],
                  correctAnswer: 0,
                  explanation: 'LCD is 6. 1/2 = 3/6, 1/3 = 2/6. So 3/6 + 2/6 = 5/6',
                  difficulty: 2
                },
                {
                  id: 'y6-frac-3',
                  question: 'What is 3/4 - 2/5?',
                  options: ['7/20', '1/1', '1/9', '5/9'],
                  correctAnswer: 0,
                  explanation: 'LCD is 20. 3/4 = 15/20, 2/5 = 8/20. So 15/20 - 8/20 = 7/20',
                  difficulty: 3
                }
              ]
            },
            {
              id: 'multiply-fractions-y6',
              code: 'VCMNA212',
              title: 'Multiplying Fractions',
              description: 'Find a simple fraction of a quantity',
              content: `# Multiplying Fractions

Multiplying fractions is actually easier than adding them!

## The Rule: Multiply Across

a/b × c/d = (a × c)/(b × d)

Multiply tops together, multiply bottoms together!

### Example: 2/3 × 4/5

- Top: 2 × 4 = 8
- Bottom: 3 × 5 = 15
- Answer: **8/15**

## Finding a Fraction OF Something

"Of" means multiply!

### Example: Find 3/4 of 20

3/4 × 20 = (3 × 20)/4 = 60/4 = **15**

Or think: 20 ÷ 4 = 5, then 5 × 3 = 15`,
              keyPoints: [
                'Multiply numerators together, denominators together',
                '"Of" means multiply',
                'Convert mixed numbers to improper fractions first',
                'Cross-cancel to simplify before multiplying',
                'Multiplying two fractions (both < 1) gives a smaller result'
              ],
              examples: [
                {
                  problem: 'Calculate 3/5 × 2/7',
                  solution: '6/35',
                  explanation: 'Multiply tops: 3 × 2 = 6. Multiply bottoms: 5 × 7 = 35.'
                },
                {
                  problem: 'Find 2/3 of 18',
                  solution: '12',
                  explanation: '18 ÷ 3 = 6, then 6 × 2 = 12'
                }
              ],
              questions: [
                {
                  id: 'y6-mult-frac-1',
                  question: 'What is 1/2 × 1/3?',
                  options: ['1/6', '2/5', '1/5', '2/6'],
                  correctAnswer: 0,
                  explanation: 'Multiply: 1 × 1 = 1 (top), 2 × 3 = 6 (bottom). Answer: 1/6',
                  difficulty: 1
                },
                {
                  id: 'y6-mult-frac-2',
                  question: 'What is 3/4 of 24?',
                  options: ['18', '16', '12', '20'],
                  correctAnswer: 0,
                  explanation: '24 ÷ 4 = 6, then 6 × 3 = 18',
                  difficulty: 1
                },
                {
                  id: 'y6-mult-frac-3',
                  question: 'Calculate 2/3 × 3/4',
                  options: ['1/2', '6/12', '5/7', '2/4'],
                  correctAnswer: 0,
                  explanation: '2/3 × 3/4 = 6/12 = 1/2',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'decimals-percentages-y6',
          title: 'Decimals and Percentages',
          description: 'Working with decimals and understanding percentages',
          sections: [
            {
              id: 'percentages-y6',
              code: 'VCMNA215',
              title: 'Understanding Percentages',
              description: 'Make connections between percentages, fractions and decimals',
              content: `# Percentages

Percent means "per hundred" or "out of 100".

## The Connection

| Percentage | Fraction | Decimal |
|:----------:|:--------:|:-------:|
| 50% | 1/2 | 0.5 |
| 25% | 1/4 | 0.25 |
| 75% | 3/4 | 0.75 |
| 10% | 1/10 | 0.1 |
| 100% | 1 | 1.0 |

## Converting

### Percentage → Decimal
Divide by 100: 45% = 0.45

### Decimal → Percentage
Multiply by 100: 0.35 = 35%

## Finding Percentages of Amounts

**10% of 250:** 250 ÷ 10 = **25**
**50% of 80:** 80 ÷ 2 = **40**
**25% of 60:** 60 ÷ 4 = **15**`,
              keyPoints: [
                'Percent means out of 100',
                '50% = 1/2, 25% = 1/4, 10% = 1/10',
                'To convert % to decimal: ÷ 100',
                'To convert decimal to %: × 100',
                'Find 10% by dividing by 10'
              ],
              examples: [
                {
                  problem: 'Convert 3/4 to a percentage',
                  solution: '75%',
                  explanation: '3/4 = 75/100 = 75%'
                },
                {
                  problem: 'Find 30% of 80',
                  solution: '24',
                  explanation: '10% of 80 = 8. So 30% = 3 × 8 = 24'
                }
              ],
              questions: [
                {
                  id: 'y6-perc-1',
                  question: 'What is 25% as a decimal?',
                  options: ['0.25', '2.5', '0.025', '25.0'],
                  correctAnswer: 0,
                  explanation: '25% = 25 ÷ 100 = 0.25',
                  difficulty: 1
                },
                {
                  id: 'y6-perc-2',
                  question: 'What is 10% of 150?',
                  options: ['15', '1.5', '150', '50'],
                  correctAnswer: 0,
                  explanation: '10% means divide by 10. 150 ÷ 10 = 15',
                  difficulty: 1
                },
                {
                  id: 'y6-perc-3',
                  question: 'Convert 0.8 to a percentage',
                  options: ['80%', '8%', '0.8%', '800%'],
                  correctAnswer: 0,
                  explanation: '0.8 × 100 = 80%',
                  difficulty: 1
                }
              ]
            }
          ]
        },
        {
          id: 'algebra-y6',
          title: 'Order of Operations',
          description: 'BODMAS and algebraic thinking',
          sections: [
            {
              id: 'order-operations-y6',
              code: 'VCMNA217',
              title: 'Order of Operations (BODMAS)',
              description: 'Explore the use of brackets and order of operations',
              content: `# Order of Operations (BODMAS)

When a problem has multiple operations, we need rules!

## The Order: BODMAS

**B** - Brackets first ( )
**O** - Orders (powers) ²
**D** - Division ÷
**M** - Multiplication ×
**A** - Addition +
**S** - Subtraction −

## Examples

### Without Brackets
**3 + 4 × 2**
1. Multiplication first: 4 × 2 = 8
2. Then addition: 3 + 8 = **11**

### With Brackets
**(3 + 4) × 2**
1. Brackets first: 3 + 4 = 7
2. Then multiplication: 7 × 2 = **14**

See how brackets change the answer!`,
              keyPoints: [
                'BODMAS: Brackets, Orders, Division/Multiplication, Addition/Subtraction',
                'Division and multiplication: left to right',
                'Addition and subtraction: left to right',
                'Brackets change what you calculate first',
                'Without rules, the same problem could have different answers!'
              ],
              examples: [
                {
                  problem: 'Calculate 5 + 3 × 4',
                  solution: '17',
                  explanation: 'Multiplication first: 3 × 4 = 12. Then: 5 + 12 = 17'
                },
                {
                  problem: 'Calculate 24 ÷ (3 + 5)',
                  solution: '3',
                  explanation: 'Brackets first: 3 + 5 = 8. Then: 24 ÷ 8 = 3'
                }
              ],
              questions: [
                {
                  id: 'y6-bodmas-1',
                  question: 'What is 2 + 3 × 4?',
                  options: ['14', '20', '9', '24'],
                  correctAnswer: 0,
                  explanation: 'Multiplication first: 3 × 4 = 12. Then 2 + 12 = 14',
                  difficulty: 1
                },
                {
                  id: 'y6-bodmas-2',
                  question: 'What is (2 + 3) × 4?',
                  options: ['20', '14', '11', '24'],
                  correctAnswer: 0,
                  explanation: 'Brackets first: 2 + 3 = 5. Then 5 × 4 = 20',
                  difficulty: 1
                },
                {
                  id: 'y6-bodmas-3',
                  question: 'What is 18 ÷ 3 + 6 × 2?',
                  options: ['18', '6', '15', '24'],
                  correctAnswer: 0,
                  explanation: 'Division: 18 ÷ 3 = 6. Multiplication: 6 × 2 = 12. Addition: 6 + 12 = 18',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'measurement-geometry-y6',
      name: 'Measurement and Geometry',
      chapters: [
        {
          id: 'measurement-y6',
          title: 'Measurement',
          description: 'Area, volume, and angles',
          sections: [
            {
              id: 'area-shapes-y6',
              code: 'VCMMG223',
              title: 'Area of Triangles and Parallelograms',
              description: 'Solve problems involving the area of triangles and parallelograms',
              content: `# Area of Shapes

Let's find areas of triangles and parallelograms!

## Area of a Parallelogram

Area = Base × Height

**Important:** Height is PERPENDICULAR to the base!

### Example:
Base = 8 cm, Height = 5 cm
Area = 8 × 5 = **40 cm²**

## Area of a Triangle

A triangle is HALF of a parallelogram!

Area = (Base × Height) ÷ 2

### Example:
Base = 10 cm, Height = 6 cm
Area = (10 × 6) ÷ 2 = 60 ÷ 2 = **30 cm²**`,
              keyPoints: [
                'Parallelogram area = base × height',
                'Triangle area = (base × height) ÷ 2',
                'Height must be perpendicular to base',
                'A triangle is half a parallelogram',
                'Always use square units for area'
              ],
              examples: [
                {
                  problem: 'Find the area of a parallelogram with base 12 cm and height 7 cm',
                  solution: '84 cm²',
                  explanation: 'Area = base × height = 12 × 7 = 84 cm²'
                },
                {
                  problem: 'Find the area of a triangle with base 8 m and height 5 m',
                  solution: '20 m²',
                  explanation: 'Area = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 m²'
                }
              ],
              questions: [
                {
                  id: 'y6-area-1',
                  question: 'What is the area of a triangle with base 6 cm and height 8 cm?',
                  options: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'],
                  correctAnswer: 0,
                  explanation: 'Area = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm²',
                  difficulty: 1
                },
                {
                  id: 'y6-area-2',
                  question: 'What is the area of a parallelogram with base 9 m and height 4 m?',
                  options: ['36 m²', '18 m²', '26 m²', '13 m²'],
                  correctAnswer: 0,
                  explanation: 'Area = base × height = 9 × 4 = 36 m²',
                  difficulty: 1
                },
                {
                  id: 'y6-area-3',
                  question: 'A triangle has area 30 cm² and base 10 cm. What is the height?',
                  options: ['6 cm', '3 cm', '20 cm', '15 cm'],
                  correctAnswer: 0,
                  explanation: '30 = (10 × h) ÷ 2, so 60 = 10 × h, so h = 6 cm',
                  difficulty: 3
                }
              ]
            },
            {
              id: 'volume-y6',
              code: 'VCMMG224',
              title: 'Volume of Rectangular Prisms',
              description: 'Calculate the volume of rectangular prisms',
              content: `# Volume of Rectangular Prisms

Volume measures how much space is inside a 3D shape.

## The Formula

Volume = Length × Width × Height

## Units of Volume

- Cubic centimetres (cm³)
- Cubic metres (m³)
- Millilitres (mL) and Litres (L)

**Connection:** 1 cm³ = 1 mL, 1000 cm³ = 1 L

## Examples

### Example 1: A box
L = 5 cm, W = 3 cm, H = 2 cm
Volume = 5 × 3 × 2 = **30 cm³**

### Example 2: A fish tank
L = 40 cm, W = 20 cm, H = 30 cm
Volume = 40 × 20 × 30 = **24,000 cm³** = **24 L**`,
              keyPoints: [
                'Volume = Length × Width × Height',
                'Volume measures 3D space (inside)',
                'Cubic units: cm³, m³',
                '1 cm³ = 1 mL, 1000 cm³ = 1 L',
                'Count how many unit cubes fit inside'
              ],
              examples: [
                {
                  problem: 'Find the volume of a box: 8 cm × 5 cm × 3 cm',
                  solution: '120 cm³',
                  explanation: 'V = L × W × H = 8 × 5 × 3 = 120 cm³'
                },
                {
                  problem: 'A container holds 60 cm³. If L = 5 cm and W = 4 cm, what is H?',
                  solution: '3 cm',
                  explanation: '60 = 5 × 4 × H = 20 × H, so H = 3 cm'
                }
              ],
              questions: [
                {
                  id: 'y6-vol-1',
                  question: 'What is the volume of a rectangular prism 6 cm × 4 cm × 2 cm?',
                  options: ['48 cm³', '24 cm³', '12 cm³', '48 cm'],
                  correctAnswer: 0,
                  explanation: 'V = 6 × 4 × 2 = 48 cm³',
                  difficulty: 1
                },
                {
                  id: 'y6-vol-2',
                  question: 'A box holds 1000 cm³. How many litres is that?',
                  options: ['1 L', '10 L', '100 L', '0.1 L'],
                  correctAnswer: 0,
                  explanation: '1000 cm³ = 1000 mL = 1 L',
                  difficulty: 1
                },
                {
                  id: 'y6-vol-3',
                  question: 'A cube has sides of 5 cm. What is its volume?',
                  options: ['125 cm³', '25 cm³', '15 cm³', '75 cm³'],
                  correctAnswer: 0,
                  explanation: 'A cube has equal sides, so V = 5 × 5 × 5 = 125 cm³',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'statistics-probability-y6',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'data-y6',
          title: 'Data Analysis',
          description: 'Mean, median, mode and range',
          sections: [
            {
              id: 'data-interpretation-y6',
              code: 'VCMSP235',
              title: 'Interpreting Data',
              description: 'Interpret and compare a range of data displays',
              content: `# Interpreting Data

Let's learn to find averages and understand data!

## Mean (Average)

Add all values, divide by how many:

Mean = Sum of all values / Number of values

**Example:** 4, 7, 9, 8, 7
Mean = (4 + 7 + 9 + 8 + 7) ÷ 5 = 35 ÷ 5 = **7**

## Median (Middle)

Put in order, find the middle value:
4, 7, **7**, 8, 9 → Median = **7**

## Mode (Most Common)

The value that appears most often:
4, 7, 9, 8, **7** → Mode = **7** (appears twice)

## Range

Difference between highest and lowest:
Range = 9 - 4 = **5**`,
              keyPoints: [
                'Mean = sum ÷ number of values (average)',
                'Median = middle value when ordered',
                'Mode = most frequent value',
                'Range = highest - lowest',
                'Choose the right graph for your data type'
              ],
              examples: [
                {
                  problem: 'Find the mean of: 3, 5, 7, 9, 6',
                  solution: '6',
                  explanation: 'Sum = 30. Count = 5. Mean = 30÷5 = 6'
                },
                {
                  problem: 'Find the median of: 12, 5, 8, 3, 10, 7, 15',
                  solution: '8',
                  explanation: 'Ordered: 3, 5, 7, 8, 10, 12, 15. Middle = 8'
                }
              ],
              questions: [
                {
                  id: 'y6-data-1',
                  question: 'What is the mean of 4, 6, 8, 10, 12?',
                  options: ['8', '6', '10', '40'],
                  correctAnswer: 0,
                  explanation: 'Sum = 40. Mean = 40 ÷ 5 = 8',
                  difficulty: 1
                },
                {
                  id: 'y6-data-2',
                  question: 'Find the mode: 3, 5, 7, 5, 9, 5, 8',
                  options: ['5', '7', '3', '6'],
                  correctAnswer: 0,
                  explanation: '5 appears three times, more than any other number',
                  difficulty: 1
                },
                {
                  id: 'y6-data-3',
                  question: 'Find the range of: 15, 8, 22, 11, 19',
                  options: ['14', '15', '11', '22'],
                  correctAnswer: 0,
                  explanation: 'Range = highest - lowest = 22 - 8 = 14',
                  difficulty: 1
                }
              ]
            }
          ]
        },
        {
          id: 'probability-y6',
          title: 'Probability',
          description: 'Calculating probabilities',
          sections: [
            {
              id: 'probability-calculations-y6',
              code: 'VCMSP232',
              title: 'Calculating Probability',
              description: 'Describe probabilities using fractions, decimals and percentages',
              content: `# Calculating Probability

Probability tells us how likely something is, as a number!

## Probability Formula

Probability = Favourable outcomes / Total outcomes

## Expressing Probability

The same probability can be written as:
- **Fraction:** 1/4
- **Decimal:** 0.25
- **Percentage:** 25%

## Examples

### Rolling a Dice
- P(getting 4) = 1/6 ≈ 17%
- P(even number) = 3/6 = 1/2 = 50%

### Drawing from a Bag
Bag has: 3 red, 2 blue, 5 green (10 total)
- P(red) = 3/10 = 30%
- P(blue) = 2/10 = 20%

## Complementary Events

P(something) + P(not that thing) = 1`,
              keyPoints: [
                'P = favourable outcomes ÷ total outcomes',
                'Probability is between 0 and 1',
                'Convert between fractions, decimals, percentages',
                'Complementary: P(not A) = 1 - P(A)',
                'Independent events: multiply probabilities'
              ],
              examples: [
                {
                  problem: 'A spinner has 8 sections: 3 red, 2 blue, 3 yellow. What\'s P(blue)?',
                  solution: '2/8 = 1/4 = 25%',
                  explanation: '2 blue out of 8 total. 2/8 = 1/4'
                },
                {
                  problem: 'If P(winning) = 0.35, what is P(not winning)?',
                  solution: '0.65 or 65%',
                  explanation: 'P(not winning) = 1 - 0.35 = 0.65'
                }
              ],
              questions: [
                {
                  id: 'y6-prob-1',
                  question: 'A bag has 4 red and 6 blue marbles. What is P(red) as a percentage?',
                  options: ['40%', '60%', '4%', '10%'],
                  correctAnswer: 0,
                  explanation: 'P(red) = 4/10 = 0.4 = 40%',
                  difficulty: 1
                },
                {
                  id: 'y6-prob-2',
                  question: 'If P(rain) = 0.7, what is P(no rain)?',
                  options: ['0.3', '0.7', '1.3', '0.07'],
                  correctAnswer: 0,
                  explanation: 'P(no rain) = 1 - 0.7 = 0.3',
                  difficulty: 1
                },
                {
                  id: 'y6-prob-3',
                  question: 'Two fair coins are flipped. What is P(both tails)?',
                  options: ['1/4', '1/2', '3/4', '1/8'],
                  correctAnswer: 0,
                  explanation: 'P(tail) × P(tail) = 1/2 × 1/2 = 1/4',
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
