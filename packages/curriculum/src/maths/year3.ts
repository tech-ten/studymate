import { YearLevelCurriculum } from '../types';

export const year3Maths: YearLevelCurriculum = {
  yearLevel: 3,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra-y3',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'counting-place-value-y3',
          title: 'Counting and Place Value',
          description: 'Understanding numbers up to 10,000',
          sections: [
            {
              id: 'place-value-thousands-y3',
              code: 'VCMNA130',
              title: 'Place Value to Thousands',
              description: 'Recognise, model, represent and order numbers to at least 10,000',
              content: `# Understanding Big Numbers

When we count higher than 999, we need a new place value called **thousands**. Let's explore how big numbers work!

## Place Value Chart

| Thousands | Hundreds | Tens | Ones |
|:---------:|:--------:|:----:|:----:|
|     1     |    2     |   3  |   4  |

The number above is **1,234** - we say "one thousand, two hundred and thirty-four".

## Building Numbers

Think of numbers like building blocks:
- **1,000** = one thousand (like 10 hundreds!)
- **2,000** = two thousand
- **5,000** = five thousand
- **10,000** = ten thousand (the biggest we'll learn today)

## Reading Big Numbers

When reading big numbers:
1. Start from the left
2. Say the thousands first
3. Then hundreds, tens, ones

**Example:** 4,567
- 4 thousands = "four thousand"
- 5 hundreds = "five hundred"
- 6 tens = "sixty"
- 7 ones = "seven"
- All together: "four thousand, five hundred and sixty-seven"

## Tip for Commas

We use commas to make big numbers easier to read. Put a comma after the thousands place: **3,456** not 3456.`,
              keyPoints: [
                'Numbers go up to at least 10,000',
                'Thousands is the place to the left of hundreds',
                '1,000 is the same as 10 hundreds',
                'Use commas to separate thousands from hundreds',
                'Read numbers from left to right'
              ],
              examples: [
                {
                  problem: 'What number is shown? 3 thousands, 5 hundreds, 2 tens, 8 ones',
                  solution: '3,528',
                  explanation: 'Put each digit in its place: 3 in thousands, 5 in hundreds, 2 in tens, 8 in ones = 3,528'
                },
                {
                  problem: 'Write 6,042 in words',
                  solution: 'Six thousand and forty-two',
                  explanation: '6 thousands = six thousand, 0 hundreds = skip, 4 tens = forty, 2 ones = two'
                }
              ],
              questions: [
                {
                  id: 'y3-pv-1',
                  question: 'What number is 5 thousands, 3 hundreds, 7 tens, 2 ones?',
                  options: ['5,372', '3,572', '5,732', '7,532'],
                  correctAnswer: 0,
                  explanation: 'Put each digit in order: 5 thousands, 3 hundreds, 7 tens, 2 ones = 5,372',
                  difficulty: 1
                },
                {
                  id: 'y3-pv-2',
                  question: 'Which number is the largest?',
                  options: ['999', '1,001', '900', '1,000'],
                  correctAnswer: 1,
                  explanation: '1,001 is the largest because it has the most thousands (1), and 001 more than 1,000',
                  difficulty: 1
                },
                {
                  id: 'y3-pv-3',
                  question: 'How do you write "four thousand, two hundred and fifteen"?',
                  options: ['4,215', '4,251', '42,15', '4215'],
                  correctAnswer: 0,
                  explanation: 'Four thousand = 4,000, two hundred = 200, fifteen = 15. Total: 4,215',
                  difficulty: 2
                }
              ]
            },
            {
              id: 'ordering-numbers-y3',
              code: 'VCMNA131',
              title: 'Ordering and Comparing Numbers',
              description: 'Compare and order numbers to at least 10,000',
              content: `# Comparing and Ordering Numbers

When we compare numbers, we figure out which is bigger, smaller, or if they're equal. Let's learn how!

## Comparing Symbols

We use special symbols to compare numbers:
- **>** means "greater than" (the bigger number goes first)
- **<** means "less than" (the smaller number goes first)
- **=** means "equals" (the numbers are the same)

**Tip:** The symbol always points to the smaller number, like an arrow!

## How to Compare Big Numbers

1. **Compare the digits from left to right**
2. **Start with thousands**, then hundreds, then tens, then ones
3. **The first different digit** tells you which is bigger

### Example: Compare 3,456 and 3,478

| Number | Thousands | Hundreds | Tens | Ones |
|:------:|:---------:|:--------:|:----:|:----:|
| 3,456  |     3     |    4     |  5   |  6   |
| 3,478  |     3     |    4     |  7   |  8   |

- Thousands: both have 3 ✓
- Hundreds: both have 4 ✓
- Tens: 5 vs 7 → 7 is bigger!

So **3,456 < 3,478**

## Ordering Numbers

To put numbers in order:
1. Compare all the numbers
2. **Ascending** = smallest to biggest (going up ↑)
3. **Descending** = biggest to smallest (going down ↓)`,
              keyPoints: [
                '> means greater than, < means less than, = means equals',
                'Compare digits from left to right (thousands first)',
                'Ascending order goes from smallest to largest',
                'Descending order goes from largest to smallest',
                'The symbol points to the smaller number'
              ],
              examples: [
                {
                  problem: 'Compare 2,345 and 2,354 using < or >',
                  solution: '2,345 < 2,354',
                  explanation: 'Both have 2 thousands and 3 hundreds. In tens place: 4 < 5, so 2,345 is smaller'
                },
                {
                  problem: 'Order these ascending: 4,567, 4,576, 4,765',
                  solution: '4,567, 4,576, 4,765',
                  explanation: 'All have 4 thousands. Compare hundreds/tens: 567 < 576 < 765'
                }
              ],
              questions: [
                {
                  id: 'y3-ord-1',
                  question: 'Which symbol goes in the blank? 5,678 ___ 5,687',
                  options: ['<', '>', '=', '+'],
                  correctAnswer: 0,
                  explanation: 'Compare the tens: 7 < 8, so 5,678 < 5,687',
                  difficulty: 1
                },
                {
                  id: 'y3-ord-2',
                  question: 'Which number is smallest? 3,999, 4,001, 3,909, 4,100',
                  options: ['3,999', '4,001', '3,909', '4,100'],
                  correctAnswer: 2,
                  explanation: '3,909 has 3 thousands (smallest) and 909 is less than 999',
                  difficulty: 2
                },
                {
                  id: 'y3-ord-3',
                  question: 'Put in descending order: 2,500, 2,050, 2,505',
                  options: ['2,505, 2,500, 2,050', '2,050, 2,500, 2,505', '2,500, 2,505, 2,050', '2,050, 2,505, 2,500'],
                  correctAnswer: 0,
                  explanation: 'Descending = biggest first. 2,505 > 2,500 > 2,050',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'addition-subtraction-y3',
          title: 'Addition and Subtraction',
          description: 'Adding and subtracting with 3-digit numbers',
          sections: [
            {
              id: 'add-sub-strategies-y3',
              code: 'VCMNA132',
              title: 'Addition and Subtraction Strategies',
              description: 'Apply place value to partition, rearrange and regroup numbers to at least 10,000',
              content: `# Smart Strategies for Adding and Subtracting

There are clever ways to add and subtract that make maths easier! Let's learn some tricks.

## Partitioning (Breaking Apart)

Break numbers into parts that are easier to work with.

**Example:** 345 + 234
- Break into: (300 + 200) + (40 + 30) + (5 + 4)
- Add each part: 500 + 70 + 9 = **579**

## Jump Strategy

Start at one number and jump to the answer.

**Example:** 456 + 38
- Start at 456
- Jump +30 → 486
- Jump +8 → **494**

## Compensating

Make one number "nicer" then fix it at the end.

**Example:** 299 + 156
- Change 299 to 300 (added 1)
- 300 + 156 = 456
- Take away the 1: 456 - 1 = **455**

## Column Method

Line up the numbers by place value and add each column.

\`\`\`
    456
  + 278
  -----
    734
\`\`\`

Start from ones: 6+8=14 (write 4, carry 1)
Tens: 5+7+1=13 (write 3, carry 1)
Hundreds: 4+2+1=7`,
              keyPoints: [
                'Partitioning breaks numbers into hundreds, tens, and ones',
                'Jump strategy adds in steps',
                'Compensating rounds to a "nice" number then adjusts',
                'Column method lines up place values',
                'Always start adding from the ones column'
              ],
              examples: [
                {
                  problem: 'Use partitioning: 236 + 152',
                  solution: '388',
                  explanation: '(200+100) + (30+50) + (6+2) = 300 + 80 + 8 = 388'
                },
                {
                  problem: 'Use compensating: 198 + 45',
                  solution: '243',
                  explanation: '200 + 45 = 245, then subtract 2 (since we added 2 to make 198→200) = 243'
                }
              ],
              questions: [
                {
                  id: 'y3-add-1',
                  question: 'What is 345 + 123?',
                  options: ['468', '458', '478', '568'],
                  correctAnswer: 0,
                  explanation: '300+100=400, 40+20=60, 5+3=8. Total: 468',
                  difficulty: 1
                },
                {
                  id: 'y3-add-2',
                  question: 'What is 500 - 267?',
                  options: ['233', '243', '333', '223'],
                  correctAnswer: 0,
                  explanation: '500 - 267 = 233. You can count up from 267 to 500: 33 to 300, then 200 more = 233',
                  difficulty: 2
                },
                {
                  id: 'y3-add-3',
                  question: 'Using compensating, 399 + 156 = ?',
                  options: ['555', '545', '565', '455'],
                  correctAnswer: 0,
                  explanation: '400 + 156 = 556, but we added 1 extra, so 556 - 1 = 555',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'multiplication-division-y3',
          title: 'Multiplication and Division',
          description: 'Understanding multiplication and division facts',
          sections: [
            {
              id: 'times-tables-y3',
              code: 'VCMNA133',
              title: 'Times Tables (2, 3, 4, 5, 10)',
              description: 'Recall multiplication facts of 2, 3, 4, 5 and 10 and related division facts',
              content: `# Learning Your Times Tables

Times tables are patterns that help you multiply quickly. Let's master them!

## The 2 Times Table (Doubles)

Multiplying by 2 is the same as doubling:
- 2 × 1 = 2
- 2 × 2 = 4
- 2 × 3 = 6
- 2 × 4 = 8
- 2 × 5 = 10
- 2 × 6 = 12

**Pattern:** Answers are all even numbers!

## The 5 Times Table

- 5 × 1 = 5
- 5 × 2 = 10
- 5 × 3 = 15
- 5 × 4 = 20
- 5 × 5 = 25

**Pattern:** Answers end in 0 or 5!

## The 10 Times Table

- 10 × 1 = 10
- 10 × 2 = 20
- 10 × 3 = 30

**Pattern:** Just add a zero to the number!

## The 3 Times Table

- 3 × 1 = 3
- 3 × 2 = 6
- 3 × 3 = 9
- 3 × 4 = 12

**Pattern:** Add 3 each time!

## The 4 Times Table

- 4 × 1 = 4
- 4 × 2 = 8
- 4 × 3 = 12
- 4 × 4 = 16

**Pattern:** Double the 2 times table!

## Division is the Opposite

If 3 × 4 = 12, then:
- 12 ÷ 3 = 4
- 12 ÷ 4 = 3`,
              keyPoints: [
                '2 times table = doubles (answers are even)',
                '5 times table ends in 0 or 5',
                '10 times table = add a zero',
                '4 times table = double the 2 times table',
                'Division is the opposite of multiplication'
              ],
              examples: [
                {
                  problem: 'What is 4 × 7?',
                  solution: '28',
                  explanation: '4 × 7 = 28. Think: double 7 is 14, double again is 28'
                },
                {
                  problem: 'What is 35 ÷ 5?',
                  solution: '7',
                  explanation: 'If 5 × 7 = 35, then 35 ÷ 5 = 7'
                }
              ],
              questions: [
                {
                  id: 'y3-mult-1',
                  question: 'What is 3 × 6?',
                  options: ['18', '15', '21', '12'],
                  correctAnswer: 0,
                  explanation: '3 × 6 = 18. Count by 3s: 3, 6, 9, 12, 15, 18',
                  difficulty: 1
                },
                {
                  id: 'y3-mult-2',
                  question: 'What is 40 ÷ 5?',
                  options: ['8', '7', '9', '6'],
                  correctAnswer: 0,
                  explanation: '5 × 8 = 40, so 40 ÷ 5 = 8',
                  difficulty: 1
                },
                {
                  id: 'y3-mult-3',
                  question: 'What is 4 × 9?',
                  options: ['36', '32', '40', '45'],
                  correctAnswer: 0,
                  explanation: '4 × 9 = 36. Think: 2 × 9 = 18, double it = 36',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'fractions-y3',
          title: 'Fractions and Decimals',
          description: 'Understanding fractions as equal parts',
          sections: [
            {
              id: 'understanding-fractions-y3',
              code: 'VCMNA135',
              title: 'Understanding Fractions',
              description: 'Model and represent unit fractions including 1/2, 1/4, 1/3, 1/5 and their multiples',
              content: `# What Are Fractions?

A fraction shows **equal parts** of a whole. Let's learn how they work!

## Parts of a Fraction

A fraction has two numbers:

**1/4** ← This is "one quarter"

- **Top number (numerator)** = how many parts we have
- **Bottom number (denominator)** = how many equal parts in total

## Common Fractions

### Halves (1/2)
🍕 Cut something into **2 equal parts**
- 1/2 = one half
- 2/2 = two halves = 1 whole

### Quarters (1/4)
🍕 Cut something into **4 equal parts**
- 1/4 = one quarter
- 2/4 = two quarters = 1/2
- 4/4 = four quarters = 1 whole

### Thirds (1/3)
🍕 Cut something into **3 equal parts**
- 1/3 = one third
- 2/3 = two thirds
- 3/3 = three thirds = 1 whole

## Important Rules

✅ The parts MUST be equal
❌ If parts aren't equal, it's not a proper fraction!

## Fractions on a Number Line

\`\`\`
0----1/4----1/2----3/4----1
\`\`\`

Fractions go between 0 and 1!`,
              keyPoints: [
                'Fractions show equal parts of a whole',
                'Numerator (top) = parts we have',
                'Denominator (bottom) = total equal parts',
                'All parts must be equal size',
                'Fractions are between 0 and 1 (unless greater than 1)'
              ],
              examples: [
                {
                  problem: 'A pizza is cut into 4 equal pieces. I eat 3 pieces. What fraction did I eat?',
                  solution: '3/4',
                  explanation: 'I ate 3 parts out of 4 equal parts = 3/4 (three quarters)'
                },
                {
                  problem: 'What fraction is shaded? [2 out of 3 parts shaded]',
                  solution: '2/3',
                  explanation: '2 parts shaded out of 3 total parts = 2/3 (two thirds)'
                }
              ],
              questions: [
                {
                  id: 'y3-frac-1',
                  question: 'A cake is cut into 4 equal pieces. What fraction is ONE piece?',
                  options: ['1/4', '1/2', '4/1', '1/3'],
                  correctAnswer: 0,
                  explanation: 'One piece out of 4 equal pieces = 1/4 (one quarter)',
                  difficulty: 1
                },
                {
                  id: 'y3-frac-2',
                  question: 'What fraction is the same as 2/4?',
                  options: ['1/2', '1/4', '3/4', '2/2'],
                  correctAnswer: 0,
                  explanation: '2/4 = 1/2 because 2 is half of 4',
                  difficulty: 2
                },
                {
                  id: 'y3-frac-3',
                  question: 'If I eat 2/3 of a chocolate bar, how much is left?',
                  options: ['1/3', '2/3', '1/2', '3/3'],
                  correctAnswer: 0,
                  explanation: '3/3 is the whole. 3/3 - 2/3 = 1/3 left',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'measurement-geometry-y3',
      name: 'Measurement and Geometry',
      chapters: [
        {
          id: 'measurement-y3',
          title: 'Measurement',
          description: 'Measuring length, mass, capacity and time',
          sections: [
            {
              id: 'units-measurement-y3',
              code: 'VCMMG140',
              title: 'Units of Measurement',
              description: 'Measure, order and compare objects using familiar metric units of length, mass and capacity',
              content: `# Measuring Things

We measure different things in different ways. Let's learn the units!

## Measuring Length

How long or tall something is:
- **Millimetres (mm)** - tiny things like ants 🐜
- **Centimetres (cm)** - small things like pencils ✏️
- **Metres (m)** - bigger things like rooms 🏠
- **Kilometres (km)** - really long distances 🚗

**Conversions:**
- 10 mm = 1 cm
- 100 cm = 1 m
- 1000 m = 1 km

## Measuring Mass (Weight)

How heavy something is:
- **Grams (g)** - light things like a paperclip
- **Kilograms (kg)** - heavier things like you!

**Conversion:** 1000 g = 1 kg

## Measuring Capacity (Liquids)

How much liquid fits inside:
- **Millilitres (mL)** - small amounts like medicine 💊
- **Litres (L)** - bigger amounts like milk 🥛

**Conversion:** 1000 mL = 1 L

## Choosing the Right Unit

| What to measure | Good unit |
|:----------------|:----------|
| Your height | cm or m |
| A pencil | cm |
| Distance to school | km |
| A bag of flour | kg |
| A glass of water | mL |`,
              keyPoints: [
                'Length: mm, cm, m, km (smallest to biggest)',
                'Mass: g and kg (1000 g = 1 kg)',
                'Capacity: mL and L (1000 mL = 1 L)',
                'Choose the right unit for what you\'re measuring',
                'Use smaller units for more precise measurements'
              ],
              examples: [
                {
                  problem: 'Which unit would you use to measure a swimming pool?',
                  solution: 'Litres (L)',
                  explanation: 'A swimming pool holds a lot of water, so we use litres not millilitres'
                },
                {
                  problem: 'Convert 2 kg to grams',
                  solution: '2000 g',
                  explanation: '1 kg = 1000 g, so 2 kg = 2 × 1000 = 2000 g'
                }
              ],
              questions: [
                {
                  id: 'y3-meas-1',
                  question: 'Which unit would you use to measure the length of your foot?',
                  options: ['Centimetres (cm)', 'Kilometres (km)', 'Litres (L)', 'Kilograms (kg)'],
                  correctAnswer: 0,
                  explanation: 'A foot is about 15-25 cm, so centimetres is the best choice',
                  difficulty: 1
                },
                {
                  id: 'y3-meas-2',
                  question: 'How many millilitres are in 3 litres?',
                  options: ['3000 mL', '300 mL', '30 mL', '30000 mL'],
                  correctAnswer: 0,
                  explanation: '1 L = 1000 mL, so 3 L = 3 × 1000 = 3000 mL',
                  difficulty: 2
                },
                {
                  id: 'y3-meas-3',
                  question: 'Which is heavier: 1500 g or 1 kg?',
                  options: ['1500 g', '1 kg', 'They are equal', 'Cannot compare'],
                  correctAnswer: 0,
                  explanation: '1 kg = 1000 g. Since 1500 > 1000, 1500 g is heavier',
                  difficulty: 2
                }
              ]
            },
            {
              id: 'time-y3',
              code: 'VCMMG141',
              title: 'Telling Time',
              description: 'Tell time to the minute and investigate the relationship between units of time',
              content: `# Telling Time Like a Pro

Let's learn to tell time down to the minute!

## Parts of a Clock

- **Hour hand** (short) - shows the hour
- **Minute hand** (long) - shows the minutes
- **60 minutes** = 1 hour
- **12 hours** around the clock face

## Counting Minutes

Each small mark = 1 minute
Each number = 5 minutes

| Clock number | Minutes |
|:------------:|:-------:|
| 12 | 0 (or 60) |
| 1 | 5 |
| 2 | 10 |
| 3 | 15 |
| 4 | 20 |
| 5 | 25 |
| 6 | 30 |
| 7 | 35 |
| 8 | 40 |
| 9 | 45 |
| 10 | 50 |
| 11 | 55 |

## Reading Time

**Example:** Hour hand on 3, minute hand on 8
- Hour = 3
- Minutes = 8 × 5 = 40
- Time = **3:40** (three forty)

## AM and PM

- **AM** = midnight to noon (12:00 am - 11:59 am)
- **PM** = noon to midnight (12:00 pm - 11:59 pm)

## Time Relationships

- 60 seconds = 1 minute
- 60 minutes = 1 hour
- 24 hours = 1 day
- 7 days = 1 week`,
              keyPoints: [
                'Hour hand is short, minute hand is long',
                'Each number on the clock = 5 minutes',
                '60 minutes = 1 hour',
                'AM is before noon, PM is after noon',
                '24 hours = 1 day'
              ],
              examples: [
                {
                  problem: 'What time is it when the hour hand is on 7 and minute hand is on 4?',
                  solution: '7:20',
                  explanation: 'Hour = 7, Minutes = 4 × 5 = 20. Time is 7:20'
                },
                {
                  problem: 'How many minutes in 2 hours?',
                  solution: '120 minutes',
                  explanation: '1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes'
                }
              ],
              questions: [
                {
                  id: 'y3-time-1',
                  question: 'The minute hand is on 9. How many minutes past the hour is it?',
                  options: ['45 minutes', '9 minutes', '54 minutes', '35 minutes'],
                  correctAnswer: 0,
                  explanation: '9 × 5 = 45 minutes past the hour',
                  difficulty: 1
                },
                {
                  id: 'y3-time-2',
                  question: 'How many minutes are in 1 and a half hours?',
                  options: ['90 minutes', '60 minutes', '120 minutes', '75 minutes'],
                  correctAnswer: 0,
                  explanation: '1 hour = 60 minutes, half hour = 30 minutes. 60 + 30 = 90 minutes',
                  difficulty: 2
                },
                {
                  id: 'y3-time-3',
                  question: 'School starts at 9:00 AM and morning tea is 2 hours later. What time is morning tea?',
                  options: ['11:00 AM', '10:00 AM', '12:00 PM', '9:02 AM'],
                  correctAnswer: 0,
                  explanation: '9:00 AM + 2 hours = 11:00 AM',
                  difficulty: 1
                }
              ]
            }
          ]
        },
        {
          id: 'shape-y3',
          title: 'Shape',
          description: 'Understanding 2D shapes and their properties',
          sections: [
            {
              id: '2d-shapes-y3',
              code: 'VCMMG142',
              title: '2D Shapes',
              description: 'Make models of three-dimensional objects and describe key features',
              content: `# 2D Shapes All Around Us

2D shapes are flat shapes that have length and width but no thickness. Let's explore them!

## Common 2D Shapes

### Triangles (3 sides)
- 3 straight sides
- 3 corners (vertices)
- 3 angles

### Quadrilaterals (4 sides)
- **Square** - 4 equal sides, 4 right angles
- **Rectangle** - 2 pairs of equal sides, 4 right angles
- **Rhombus** - 4 equal sides (like a tilted square)
- **Parallelogram** - 2 pairs of parallel sides

### Other Shapes
- **Pentagon** - 5 sides
- **Hexagon** - 6 sides
- **Octagon** - 8 sides (like a stop sign!)
- **Circle** - no sides, perfectly round

## Shape Properties

| Shape | Sides | Corners |
|:------|:-----:|:-------:|
| Triangle | 3 | 3 |
| Square | 4 | 4 |
| Rectangle | 4 | 4 |
| Pentagon | 5 | 5 |
| Hexagon | 6 | 6 |
| Octagon | 8 | 8 |

## Symmetry

A shape has **symmetry** if you can fold it in half and both sides match perfectly.

- Square: 4 lines of symmetry
- Rectangle: 2 lines of symmetry
- Equilateral triangle: 3 lines of symmetry
- Circle: infinite lines of symmetry!`,
              keyPoints: [
                '2D shapes are flat (length and width only)',
                'Triangles have 3 sides, quadrilaterals have 4 sides',
                'Squares have 4 equal sides and 4 right angles',
                'Rectangles have 2 pairs of equal sides',
                'Symmetry means both halves are mirror images'
              ],
              examples: [
                {
                  problem: 'How many sides does a hexagon have?',
                  solution: '6 sides',
                  explanation: 'Hex means 6, so a hexagon has 6 sides'
                },
                {
                  problem: 'Is a square also a rectangle?',
                  solution: 'Yes!',
                  explanation: 'A square has 4 right angles and 2 pairs of equal sides, so it\'s a special rectangle'
                }
              ],
              questions: [
                {
                  id: 'y3-shape-1',
                  question: 'Which shape has 5 sides?',
                  options: ['Pentagon', 'Hexagon', 'Octagon', 'Square'],
                  correctAnswer: 0,
                  explanation: 'Pentagon = 5 sides. Penta means 5!',
                  difficulty: 1
                },
                {
                  id: 'y3-shape-2',
                  question: 'What shape is a stop sign?',
                  options: ['Octagon', 'Hexagon', 'Rectangle', 'Circle'],
                  correctAnswer: 0,
                  explanation: 'A stop sign has 8 sides, making it an octagon',
                  difficulty: 1
                },
                {
                  id: 'y3-shape-3',
                  question: 'How many lines of symmetry does a square have?',
                  options: ['4', '2', '1', '8'],
                  correctAnswer: 0,
                  explanation: 'A square has 4 lines of symmetry: 2 diagonal and 2 through the middle',
                  difficulty: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'statistics-probability-y3',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'data-y3',
          title: 'Data Representation',
          description: 'Collecting and displaying data',
          sections: [
            {
              id: 'collecting-data-y3',
              code: 'VCMSP148',
              title: 'Collecting and Displaying Data',
              description: 'Identify questions or issues for categorical variables. Identify data sources and plan methods of data collection and recording',
              content: `# Collecting and Showing Data

Data is information we collect to answer questions. Let's learn how!

## Asking Good Questions

To collect data, first ask a question:
- "What's your favourite colour?"
- "How do you get to school?"
- "What fruit do you like best?"

## Ways to Collect Data

1. **Surveys** - Ask people questions
2. **Observations** - Watch and count things
3. **Experiments** - Test something and record results

## Tally Marks

Use tally marks to count quickly:
- | = 1
- || = 2
- ||| = 3
- |||| = 4
- ~~||||~~ = 5 (cross through for 5)

**Example:** Favourite pets
| Pet | Tally | Total |
|:----|:------|:-----:|
| Dog | ~~||||~~ ||| | 8 |
| Cat | ~~||||~~ | | 6 |
| Fish | ||| | 3 |

## Showing Data

### Pictographs
Use pictures to represent data
- Each 🐕 = 2 dogs
- 🐕🐕🐕 = 6 dogs

### Bar Graphs
Use bars to show amounts
- Taller bar = bigger number
- All bars should be same width

### Tables
Organise data in rows and columns`,
              keyPoints: [
                'Data is information we collect',
                'Ask a clear question before collecting data',
                'Tally marks help count quickly (5 = crossed bundle)',
                'Pictographs use pictures to show data',
                'Bar graphs use bars of different heights'
              ],
              examples: [
                {
                  problem: 'In tally marks, what does ~~||||~~ || mean?',
                  solution: '7',
                  explanation: '~~||||~~ = 5, then || = 2 more. Total: 5 + 2 = 7'
                },
                {
                  problem: 'In a pictograph, 🍎 = 4 apples. How many apples do 🍎🍎🍎 represent?',
                  solution: '12 apples',
                  explanation: 'Each apple = 4, so 3 apples = 3 × 4 = 12'
                }
              ],
              questions: [
                {
                  id: 'y3-data-1',
                  question: 'What does ~~||||~~ ~~||||~~ | mean in tally marks?',
                  options: ['11', '10', '6', '15'],
                  correctAnswer: 0,
                  explanation: '5 + 5 + 1 = 11',
                  difficulty: 1
                },
                {
                  id: 'y3-data-2',
                  question: 'In a pictograph, each ⭐ = 3 stars earned. If someone has ⭐⭐⭐⭐, how many stars did they earn?',
                  options: ['12', '4', '7', '15'],
                  correctAnswer: 0,
                  explanation: '4 symbols × 3 stars each = 12 stars total',
                  difficulty: 2
                },
                {
                  id: 'y3-data-3',
                  question: 'Which is NOT a good way to collect data about favourite sports?',
                  options: ['Guessing what people like', 'Taking a survey', 'Making a tally chart', 'Asking classmates'],
                  correctAnswer: 0,
                  explanation: 'Guessing isn\'t collecting real data - you need to actually ask or observe!',
                  difficulty: 2
                }
              ]
            }
          ]
        },
        {
          id: 'chance-y3',
          title: 'Chance',
          description: 'Understanding probability',
          sections: [
            {
              id: 'probability-y3',
              code: 'VCMSP147',
              title: 'Understanding Chance',
              description: 'Conduct chance experiments, identify and describe possible outcomes and recognise variation in results',
              content: `# Understanding Chance

Chance is about how likely something is to happen. Let's explore!

## Chance Words

We use special words to describe chance:

| Word | Meaning | Example |
|:-----|:--------|:--------|
| **Impossible** | Will never happen | Rolling a 7 on a regular dice |
| **Unlikely** | Probably won't happen | Snow in summer (in Australia) |
| **Even chance** | Could go either way | Flipping a coin - heads or tails |
| **Likely** | Probably will happen | Sun rising tomorrow |
| **Certain** | Will definitely happen | You'll get older each year |

## Chance Scale

\`\`\`
Impossible ←——————→ Certain
    0%              100%
\`\`\`

## Chance Experiments

We can test chance by doing experiments:

**Coin Flip:**
- 2 possible outcomes: Heads or Tails
- Each has an even chance (50%)

**Dice Roll:**
- 6 possible outcomes: 1, 2, 3, 4, 5, 6
- Each number has the same chance

## Important Idea

Even if something is likely, it might not happen every time. That's called **variation**!

Example: Heads is equally likely as tails, but you might flip heads 3 times in a row sometimes.`,
              keyPoints: [
                'Chance describes how likely something is to happen',
                'Impossible means it will never happen',
                'Certain means it will definitely happen',
                'Even chance means equally likely either way',
                'Results can vary - unlikely things sometimes happen!'
              ],
              examples: [
                {
                  problem: 'Is it certain, likely, unlikely, or impossible that you will breathe today?',
                  solution: 'Certain',
                  explanation: 'Breathing is something you definitely will do - it\'s certain!'
                },
                {
                  problem: 'What are the possible outcomes when rolling a dice?',
                  solution: '1, 2, 3, 4, 5, or 6',
                  explanation: 'A standard dice has 6 sides numbered 1 to 6'
                }
              ],
              questions: [
                {
                  id: 'y3-prob-1',
                  question: 'Which event is IMPOSSIBLE?',
                  options: ['Finding a unicorn at school', 'It raining tomorrow', 'Getting heads on a coin flip', 'The sun setting tonight'],
                  correctAnswer: 0,
                  explanation: 'Unicorns don\'t exist, so finding one is impossible',
                  difficulty: 1
                },
                {
                  id: 'y3-prob-2',
                  question: 'When flipping a fair coin, what is the chance of getting tails?',
                  options: ['Even chance', 'Certain', 'Impossible', 'Unlikely'],
                  correctAnswer: 0,
                  explanation: 'There are 2 equal options (heads or tails), so each has an even chance',
                  difficulty: 1
                },
                {
                  id: 'y3-prob-3',
                  question: 'You roll a dice. Is getting a number less than 7 certain, likely, or impossible?',
                  options: ['Certain', 'Likely', 'Unlikely', 'Impossible'],
                  correctAnswer: 0,
                  explanation: 'A dice only has 1-6, so getting less than 7 is certain (100%)',
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
