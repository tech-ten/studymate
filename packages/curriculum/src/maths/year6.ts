import { YearLevelCurriculum } from '../types';

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
          title: 'Whole Numbers and Place Value',
          description: 'Working with large numbers and integers',
          sections: [
            {
              id: 'large-numbers-y6',
              code: 'VCMNA208',
              title: 'Large Numbers to Millions',
              description: 'Select and apply efficient mental and written strategies to solve problems involving all four operations with whole numbers',
              content: `# Working with Large Numbers

In Year 6, we work with numbers up to millions! Let's master these big numbers.

## Place Value to Millions

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|:--------:|:-----------------:|:-------------:|:---------:|:--------:|:----:|:----:|
|    2     |         4         |       5       |     3     |    7     |   8  |   2  |

This is **2,453,782** - "two million, four hundred and fifty-three thousand, seven hundred and eighty-two"

## Understanding Millions

- **1,000,000** = one million = 1000 thousands
- Australia's population is about 26 million
- A million seconds = about 11.5 days!

## Rounding Large Numbers

**Round to nearest 10,000:**
- Look at the thousands digit
- If it's 5 or more, round up
- If it's less than 5, round down

**Example:** Round 347,582 to nearest 10,000
- Thousands digit is 7 (≥5)
- Round up: **350,000**

## Negative Numbers

Numbers less than zero are **negative**.

\`\`\`
-5  -4  -3  -2  -1   0   1   2   3   4   5
←————————————————————————————————————————→
    colder         freezing        warmer
\`\`\`

**Uses:**
- Temperature below zero: -5°C
- Below sea level: -100 metres
- Debt: -$50

## Comparing Negative Numbers

- -3 is greater than -5 (closer to zero)
- -1 > -2 > -3 > -4 > -5
- Any positive number > any negative number`,
              keyPoints: [
                '1 million = 1,000,000 = 1000 thousands',
                'Round by looking at the digit to the right of your target place',
                'Negative numbers are less than zero',
                'On a number line, right = bigger, left = smaller',
                '-3 > -5 (closer to zero is bigger for negatives)'
              ],
              examples: [
                {
                  problem: 'Round 2,847,523 to the nearest hundred thousand',
                  solution: '2,800,000',
                  explanation: 'Look at ten thousands (4). Since 4 < 5, round down. 8 hundred thousands stays 8.'
                },
                {
                  problem: 'Order these: 3, -1, -5, 0, 2',
                  solution: '-5, -1, 0, 2, 3',
                  explanation: 'From smallest to largest. Negatives are smallest, then zero, then positives.'
                }
              ],
              questions: [
                {
                  id: 'y6-num-1',
                  question: 'What is 3,456,789 rounded to the nearest million?',
                  options: ['3,000,000', '4,000,000', '3,500,000', '3,400,000'],
                  correctAnswer: 0,
                  explanation: 'The hundred thousands digit is 4, which is less than 5, so round down to 3,000,000',
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
                  explanation: 'From 5 to 0 is 5 degrees, from 0 to -3 is 3 degrees. Total: 5 + 3 = 8 degrees',
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
              description: 'Solve problems involving addition and subtraction of fractions with related denominators',
              content: `# Adding and Subtracting Fractions

Let's learn to add and subtract fractions like a pro!

## Same Denominators = Easy!

When denominators match, just add/subtract the numerators:

**3/8 + 2/8 = 5/8** ✓

**7/10 - 4/10 = 3/10** ✓

## Different Denominators = Find a Common One

When denominators are different, we need to make them the same first.

### Example: 1/2 + 1/4

1. Find a common denominator (a number both 2 and 4 go into)
   - 4 works! (2 × 2 = 4)

2. Convert fractions:
   - 1/2 = 2/4 (multiply top and bottom by 2)
   - 1/4 stays as 1/4

3. Now add:
   - 2/4 + 1/4 = **3/4** ✓

### Example: 3/4 - 1/3

1. Find LCD (Lowest Common Denominator)
   - 4 and 3 both go into 12

2. Convert:
   - 3/4 = 9/12 (×3)
   - 1/3 = 4/12 (×4)

3. Subtract:
   - 9/12 - 4/12 = **5/12** ✓

## Mixed Numbers

**2 1/4 + 1 3/4**

Method 1: Add whole numbers, then fractions
- Wholes: 2 + 1 = 3
- Fractions: 1/4 + 3/4 = 4/4 = 1
- Total: 3 + 1 = **4**

Method 2: Convert to improper fractions
- 2 1/4 = 9/4
- 1 3/4 = 7/4
- 9/4 + 7/4 = 16/4 = **4** ✓`,
              keyPoints: [
                'Same denominators: just add/subtract numerators',
                'Different denominators: find a common denominator first',
                'LCD = Lowest Common Denominator',
                'Always simplify your final answer',
                'Mixed numbers: add wholes and fractions separately, or convert to improper'
              ],
              examples: [
                {
                  problem: 'Calculate 2/3 + 1/6',
                  solution: '5/6',
                  explanation: 'Convert 2/3 to 4/6 (×2). Then 4/6 + 1/6 = 5/6'
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

**To multiply fractions:**
\`\`\`
a/b × c/d = (a × c)/(b × d)
\`\`\`

Multiply tops together, multiply bottoms together!

### Example: 2/3 × 4/5

- Top: 2 × 4 = 8
- Bottom: 3 × 5 = 15
- Answer: **8/15**

## Finding a Fraction OF Something

"Of" means multiply!

### Example: Find 3/4 of 20

3/4 × 20 = (3 × 20)/4 = 60/4 = **15**

Or think: 20 ÷ 4 = 5 (that's 1/4), then 5 × 3 = 15 (that's 3/4)

## Multiplying Mixed Numbers

Convert to improper fractions first!

### Example: 1 1/2 × 2/3

1. Convert: 1 1/2 = 3/2
2. Multiply: 3/2 × 2/3 = 6/6 = **1**

## Simplifying Before Multiplying (Cross-Cancel)

Look for common factors to cancel:

**2/3 × 3/4**
- The 3s cancel!
- = 2/1 × 1/4 = 2/4 = **1/2**

## Remember!

- Multiplying fractions makes them SMALLER (when both < 1)
- 1/2 × 1/2 = 1/4 (half of a half)
- Always simplify your answer`,
              keyPoints: [
                'Multiply numerators together, denominators together',
                '"Of" means multiply (3/4 of 20 = 3/4 × 20)',
                'Convert mixed numbers to improper fractions first',
                'Cross-cancel to simplify before multiplying',
                'Multiplying two fractions (both < 1) gives a smaller result'
              ],
              examples: [
                {
                  problem: 'Calculate 3/5 × 2/7',
                  solution: '6/35',
                  explanation: 'Multiply tops: 3 × 2 = 6. Multiply bottoms: 5 × 7 = 35. Answer: 6/35'
                },
                {
                  problem: 'Find 2/3 of 18',
                  solution: '12',
                  explanation: '2/3 × 18 = (2 × 18) ÷ 3 = 36 ÷ 3 = 12. Or: 18 ÷ 3 = 6, then 6 × 2 = 12'
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
                  explanation: '3/4 × 24. Method: 24 ÷ 4 = 6, then 6 × 3 = 18',
                  difficulty: 1
                },
                {
                  id: 'y6-mult-frac-3',
                  question: 'Calculate 2/3 × 3/4',
                  options: ['1/2', '6/12', '5/7', '2/4'],
                  correctAnswer: 0,
                  explanation: '2/3 × 3/4 = 6/12 = 1/2. Or cross-cancel: the 3s cancel, leaving 2/4 = 1/2',
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
              id: 'decimal-operations-y6',
              code: 'VCMNA214',
              title: 'Decimal Operations',
              description: 'Add and subtract decimals and use estimation to check calculations',
              content: `# Working with Decimals

Decimals are used everywhere - money, measurements, sports scores. Let's master them!

## Adding and Subtracting Decimals

**Golden Rule:** Line up the decimal points!

\`\`\`
   23.45
 +  7.89
 -------
   31.34
\`\`\`

### Adding Empty Places

When one number has more decimal places, add zeros:
\`\`\`
   5.7     →    5.70
 + 3.25   →  + 3.25
                -----
                8.95
\`\`\`

## Multiplying Decimals

1. Ignore the decimal points and multiply normally
2. Count total decimal places in both numbers
3. Put that many decimal places in your answer

**Example: 2.3 × 1.4**
- 23 × 14 = 322
- Total decimal places: 1 + 1 = 2
- Answer: **3.22**

## Dividing by 10, 100, 1000

Move the decimal point LEFT:
- ÷ 10: move 1 place left (45.6 → 4.56)
- ÷ 100: move 2 places left (45.6 → 0.456)
- ÷ 1000: move 3 places left (45.6 → 0.0456)

## Estimating with Decimals

Round to whole numbers to estimate:

**7.8 × 4.2 ≈ 8 × 4 = 32**

Actual answer: 32.76 ✓ (close!)`,
              keyPoints: [
                'Line up decimal points for adding/subtracting',
                'Add zeros to fill empty decimal places',
                'When multiplying: count decimal places, put same in answer',
                '÷ 10 moves decimal 1 left, ÷ 100 moves 2 left',
                'Estimate by rounding to check your answer'
              ],
              examples: [
                {
                  problem: 'Calculate 15.7 + 8.35',
                  solution: '24.05',
                  explanation: 'Line up decimals: 15.70 + 8.35 = 24.05'
                },
                {
                  problem: 'Calculate 3.2 × 0.5',
                  solution: '1.60 or 1.6',
                  explanation: '32 × 5 = 160. Two decimal places total. Answer: 1.60'
                }
              ],
              questions: [
                {
                  id: 'y6-dec-1',
                  question: 'What is 12.45 + 3.7?',
                  options: ['16.15', '15.15', '16.52', '49.45'],
                  correctAnswer: 0,
                  explanation: 'Line up decimals: 12.45 + 3.70 = 16.15',
                  difficulty: 1
                },
                {
                  id: 'y6-dec-2',
                  question: 'What is 45.6 ÷ 100?',
                  options: ['0.456', '4.56', '0.0456', '456'],
                  correctAnswer: 0,
                  explanation: 'Divide by 100 = move decimal 2 places left. 45.6 → 0.456',
                  difficulty: 1
                },
                {
                  id: 'y6-dec-3',
                  question: 'What is 2.5 × 0.4?',
                  options: ['1.0', '0.1', '10', '1.00'],
                  correctAnswer: 0,
                  explanation: '25 × 4 = 100. Two decimal places: 1.00 = 1.0 = 1',
                  difficulty: 2
                }
              ]
            },
            {
              id: 'percentages-y6',
              code: 'VCMNA215',
              title: 'Understanding Percentages',
              description: 'Make connections between percentages, fractions and decimals',
              content: `# Percentages

Percent means "per hundred" or "out of 100". It's a way to compare amounts!

## The Connection

| Percentage | Fraction | Decimal |
|:----------:|:--------:|:-------:|
| 50% | 1/2 | 0.5 |
| 25% | 1/4 | 0.25 |
| 75% | 3/4 | 0.75 |
| 10% | 1/10 | 0.1 |
| 20% | 1/5 | 0.2 |
| 100% | 1 | 1.0 |

## Converting

### Percentage → Decimal
Divide by 100 (move decimal 2 left):
- 45% = 0.45
- 8% = 0.08

### Decimal → Percentage
Multiply by 100 (move decimal 2 right):
- 0.35 = 35%
- 0.7 = 70%

### Fraction → Percentage
Method 1: Make denominator 100
- 3/5 = 60/100 = 60%

Method 2: Divide then × 100
- 3 ÷ 5 = 0.6 → 60%

## Finding Percentages of Amounts

**50% of 80:**
50% = 1/2, so 80 ÷ 2 = **40**

**10% of 250:**
10% = ÷ 10, so 250 ÷ 10 = **25**

**25% of 60:**
25% = 1/4, so 60 ÷ 4 = **15**

## Building Percentages

Use 10% and 50% to find others:
- **15%** = 10% + 5% (5% is half of 10%)
- **35%** = 30% + 5% (30% is 3 × 10%)`,
              keyPoints: [
                'Percent means out of 100',
                '50% = 1/2, 25% = 1/4, 10% = 1/10',
                'To convert % to decimal: ÷ 100',
                'To convert decimal to %: × 100',
                'Find 10% by dividing by 10, build from there'
              ],
              examples: [
                {
                  problem: 'Convert 3/4 to a percentage',
                  solution: '75%',
                  explanation: '3/4 = 75/100 = 75%. Or: 3 ÷ 4 = 0.75 → 75%'
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
          title: 'Algebra and Patterns',
          description: 'Introduction to algebraic thinking',
          sections: [
            {
              id: 'order-operations-y6',
              code: 'VCMNA217',
              title: 'Order of Operations',
              description: 'Explore the use of brackets and order of operations to write number sentences',
              content: `# Order of Operations (BODMAS/BIDMAS)

When a problem has multiple operations, we need rules for what to do first!

## The Order: BODMAS

**B** - Brackets first ( )
**O** - Orders (powers/exponents) ²
**D** - Division ÷
**M** - Multiplication ×
**A** - Addition +
**S** - Subtraction −

Division and Multiplication are done left to right (equally important)
Addition and Subtraction are done left to right (equally important)

## Examples

### Without Brackets
**3 + 4 × 2**
1. Multiplication first: 4 × 2 = 8
2. Then addition: 3 + 8 = **11**

### With Brackets
**(3 + 4) × 2**
1. Brackets first: 3 + 4 = 7
2. Then multiplication: 7 × 2 = **14**

See how brackets change the answer!

### Multiple Operations
**20 - 12 ÷ 4 + 3**
1. Division first: 12 ÷ 4 = 3
2. Left to right: 20 - 3 + 3
3. = 17 + 3 = **20**

## Writing Equations

Use brackets to show what you mean:
- "Add 5 and 3, then multiply by 2" = (5 + 3) × 2 = 16
- "Add 5 to the product of 3 and 2" = 5 + (3 × 2) = 11

## Common Mistake!

❌ 8 ÷ 2 × 4 ≠ 8 ÷ 8 = 1
✓ 8 ÷ 2 × 4 = 4 × 4 = 16 (work left to right)`,
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
          description: 'Area, volume, and unit conversions',
          sections: [
            {
              id: 'area-shapes-y6',
              code: 'VCMMG223',
              title: 'Area of Triangles and Parallelograms',
              description: 'Solve problems involving the area of triangles and parallelograms',
              content: `# Area of Shapes

You know rectangles. Now let's find areas of triangles and parallelograms!

## Area of a Rectangle (Review)
\`\`\`
Area = Length × Width
     = L × W
\`\`\`

## Area of a Parallelogram

A parallelogram is like a "pushed over" rectangle.

\`\`\`
     ___________
    /          /
   /          /  height
  /__________/
     base
\`\`\`

**Formula:**
\`\`\`
Area = Base × Height
     = b × h
\`\`\`

**Important:** Height is PERPENDICULAR to the base (straight up, not slanted!)

### Example:
Base = 8 cm, Height = 5 cm
Area = 8 × 5 = **40 cm²**

## Area of a Triangle

A triangle is HALF of a rectangle or parallelogram!

\`\`\`
     /\\
    /  \\  height
   /____\\
    base
\`\`\`

**Formula:**
\`\`\`
Area = (Base × Height) ÷ 2
     = (b × h) / 2
     = ½ × b × h
\`\`\`

### Example:
Base = 10 cm, Height = 6 cm
Area = (10 × 6) ÷ 2 = 60 ÷ 2 = **30 cm²**

## Remember!

- Height is always perpendicular (at 90°) to the base
- Triangle area = half of parallelogram area
- Always include square units (cm², m²)`,
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
              description: 'Calculate the volume of rectangular prisms using length, width and height',
              content: `# Volume of Rectangular Prisms

Volume measures how much space is inside a 3D shape. Think of it as how many unit cubes fit inside!

## What is a Rectangular Prism?

A 3D shape with:
- 6 rectangular faces
- 8 vertices (corners)
- 12 edges

Examples: boxes, bricks, cereal packets, shipping containers

## The Formula

\`\`\`
Volume = Length × Width × Height
       = L × W × H
\`\`\`

## Units of Volume

- Cubic centimetres (cm³) - small objects
- Cubic metres (m³) - rooms, buildings
- Millilitres (mL) and Litres (L) for liquids

**Connection:** 1 cm³ = 1 mL, 1000 cm³ = 1 L

## Examples

### Example 1: A box
L = 5 cm, W = 3 cm, H = 2 cm
Volume = 5 × 3 × 2 = **30 cm³**

### Example 2: A fish tank
L = 40 cm, W = 20 cm, H = 30 cm
Volume = 40 × 20 × 30 = **24,000 cm³** = **24 L**

## Finding Missing Dimensions

If Volume = 48 cm³, L = 6 cm, W = 4 cm, find H:
- 48 = 6 × 4 × H
- 48 = 24 × H
- H = 48 ÷ 24 = **2 cm**

## Comparison: Area vs Volume

| Measurement | Formula | Units |
|:------------|:--------|:------|
| Area (2D) | L × W | cm², m² |
| Volume (3D) | L × W × H | cm³, m³ |`,
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
                  problem: 'A container has volume 60 cm³. If L = 5 cm and W = 4 cm, what is H?',
                  solution: '3 cm',
                  explanation: '60 = 5 × 4 × H = 20 × H, so H = 60 ÷ 20 = 3 cm'
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
        },
        {
          id: 'geometry-y6',
          title: 'Geometry',
          description: 'Angles and transformations',
          sections: [
            {
              id: 'angle-properties-y6',
              code: 'VCMMG229',
              title: 'Angle Properties',
              description: 'Investigate, with and without digital technologies, angles on a straight line, angles at a point and vertically opposite angles',
              content: `# Angle Properties

Understanding angle relationships helps us solve problems!

## Angles on a Straight Line

Angles that form a straight line add up to **180°**

\`\`\`
      a     b
   ___↗___↘___
      ←180°→
\`\`\`

a + b = 180°

### Example:
If angle a = 70°, then angle b = 180° - 70° = **110°**

## Angles at a Point

All angles around a point add up to **360°**

\`\`\`
       a
     ↗   ↖
      \ /
   b ←-·-→ d
      / \\
     ↙   ↘
       c
\`\`\`

a + b + c + d = 360°

## Vertically Opposite Angles

When two lines cross, opposite angles are EQUAL!

\`\`\`
      a
       \\  b
        \\/
        /\\
       /  \\
      c    d
\`\`\`

- a = d (vertically opposite)
- b = c (vertically opposite)
- a + b = 180° (on a straight line)

## Triangle Angles

All angles in a triangle add up to **180°**

### Example:
If a triangle has angles of 60° and 80°, the third angle is:
180° - 60° - 80° = **40°**

## Quadrilateral Angles

All angles in a quadrilateral add up to **360°**`,
              keyPoints: [
                'Straight line angles = 180°',
                'Angles at a point = 360°',
                'Vertically opposite angles are equal',
                'Triangle angles = 180°',
                'Quadrilateral angles = 360°'
              ],
              examples: [
                {
                  problem: 'Two angles on a straight line: one is 65°. Find the other.',
                  solution: '115°',
                  explanation: '180° - 65° = 115°'
                },
                {
                  problem: 'Two lines cross. One angle is 40°. Find all four angles.',
                  solution: '40°, 140°, 40°, 140°',
                  explanation: 'Opposite angles equal: 40° and 40°. Adjacent angles: 180° - 40° = 140°'
                }
              ],
              questions: [
                {
                  id: 'y6-angle-1',
                  question: 'Two angles are on a straight line. One is 135°. What is the other?',
                  options: ['45°', '55°', '135°', '225°'],
                  correctAnswer: 0,
                  explanation: '180° - 135° = 45°',
                  difficulty: 1
                },
                {
                  id: 'y6-angle-2',
                  question: 'A triangle has angles of 90° and 45°. What is the third angle?',
                  options: ['45°', '135°', '90°', '35°'],
                  correctAnswer: 0,
                  explanation: '180° - 90° - 45° = 45°',
                  difficulty: 1
                },
                {
                  id: 'y6-angle-3',
                  question: 'Two lines cross. The angles are x° and 3x°. Find x.',
                  options: ['45°', '30°', '60°', '90°'],
                  correctAnswer: 0,
                  explanation: 'Adjacent angles: x + 3x = 180°, so 4x = 180°, x = 45°',
                  difficulty: 3
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
          description: 'Interpreting and representing data',
          sections: [
            {
              id: 'data-interpretation-y6',
              code: 'VCMSP235',
              title: 'Interpreting Data',
              description: 'Interpret and compare a range of data displays',
              content: `# Interpreting Data

Let's learn to read, compare, and draw conclusions from data!

## Types of Data Displays

### Column/Bar Graphs
- Compare quantities
- Easy to see differences
- Good for categorical data (colours, types, etc.)

### Line Graphs
- Show change over time
- Connect data points with lines
- Good for temperature, growth, trends

### Pie Charts (Circle Graphs)
- Show parts of a whole
- Slices add up to 100%
- Good for proportions

### Dot Plots
- Show individual data points
- Easy to see clusters and gaps
- Good for small data sets

## Measures of Central Tendency

### Mean (Average)
Add all values, divide by how many:
\`\`\`
Mean = Sum of all values / Number of values
\`\`\`

**Example:** 4, 7, 9, 8, 7
Mean = (4 + 7 + 9 + 8 + 7) ÷ 5 = 35 ÷ 5 = **7**

### Median (Middle)
Put in order, find the middle value:
4, 7, **7**, 8, 9 → Median = **7**

If even number of values, find average of middle two.

### Mode (Most Common)
The value that appears most often:
4, 7, 9, 8, **7** → Mode = **7** (appears twice)

### Range
Difference between highest and lowest:
Range = 9 - 4 = **5**

## Drawing Conclusions

Ask yourself:
- What's the overall trend?
- Are there any outliers (unusual values)?
- What story does the data tell?`,
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
                  explanation: 'Sum = 3+5+7+9+6 = 30. Count = 5. Mean = 30÷5 = 6'
                },
                {
                  problem: 'Find the median of: 12, 5, 8, 3, 10, 7, 15',
                  solution: '8',
                  explanation: 'Ordered: 3, 5, 7, 8, 10, 12, 15. Middle (4th) = 8'
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
                  question: 'The median of 6 numbers is 15. If the numbers in order are: 8, 12, ___, ___, 20, 25, what are the missing numbers?',
                  options: ['14 and 16', '15 and 15', '13 and 17', '10 and 20'],
                  correctAnswer: 0,
                  explanation: 'With 6 numbers, median = average of 3rd and 4th. (14+16)÷2 = 15',
                  difficulty: 3
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

Probability tells us how likely something is to happen, expressed as a number!

## Probability Formula

\`\`\`
Probability = Number of favourable outcomes
              ————————————————————————————
              Total number of possible outcomes
\`\`\`

## Expressing Probability

The same probability can be written as:
- **Fraction:** 1/4
- **Decimal:** 0.25
- **Percentage:** 25%

## Probability Scale

| Probability | Fraction | Decimal | Percentage |
|:------------|:--------:|:-------:|:----------:|
| Impossible | 0 | 0 | 0% |
| Unlikely | 1/4 | 0.25 | 25% |
| Even chance | 1/2 | 0.5 | 50% |
| Likely | 3/4 | 0.75 | 75% |
| Certain | 1 | 1.0 | 100% |

## Examples

### Rolling a Dice
- P(getting 4) = 1/6 ≈ 0.17 ≈ 17%
- P(getting even) = 3/6 = 1/2 = 0.5 = 50%
- P(getting less than 7) = 6/6 = 1 = 100% (certain!)

### Drawing from a Bag
Bag has: 3 red, 2 blue, 5 green balls (10 total)
- P(red) = 3/10 = 0.3 = 30%
- P(blue) = 2/10 = 1/5 = 0.2 = 20%
- P(green) = 5/10 = 1/2 = 0.5 = 50%

## Complementary Events

If something has probability P, the probability it WON'T happen is (1 - P):
- P(rain) = 0.3 → P(no rain) = 1 - 0.3 = 0.7

## Combined Events

For independent events (one doesn't affect the other):
P(A and B) = P(A) × P(B)

**Example:** Two coins flipped
P(both heads) = 1/2 × 1/2 = 1/4 = 25%`,
              keyPoints: [
                'P = favourable outcomes ÷ total outcomes',
                'Probability is between 0 and 1',
                'Convert between fractions, decimals, percentages',
                'Complementary: P(not A) = 1 - P(A)',
                'Independent events: multiply probabilities'
              ],
              examples: [
                {
                  problem: 'A spinner has 8 equal sections: 3 red, 2 blue, 3 yellow. What\'s P(blue)?',
                  solution: '2/8 = 1/4 = 0.25 = 25%',
                  explanation: '2 blue sections out of 8 total. 2/8 simplifies to 1/4'
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
