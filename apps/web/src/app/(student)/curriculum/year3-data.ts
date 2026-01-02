// Victorian Curriculum Year 3 Mathematics
import { YearLevelCurriculum } from './curriculum-data';

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
- All together: "four thousand, five hundred and sixty-seven"`,
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
            }
          ]
        },
        {
          id: 'times-tables-y3',
          title: 'Times Tables',
          description: 'Learning multiplication facts',
          sections: [
            {
              id: 'times-tables-2-5-10-y3',
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
          title: 'Fractions',
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
Cut something into **2 equal parts**
- 1/2 = one half
- 2/2 = two halves = 1 whole

### Quarters (1/4)
Cut something into **4 equal parts**
- 1/4 = one quarter
- 2/4 = two quarters = 1/2
- 4/4 = four quarters = 1 whole

### Thirds (1/3)
Cut something into **3 equal parts**
- 1/3 = one third
- 2/3 = two thirds
- 3/3 = three thirds = 1 whole`,
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
          id: 'time-y3',
          title: 'Time',
          description: 'Telling time and understanding duration',
          sections: [
            {
              id: 'telling-time-y3',
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
| 3 | 15 |
| 6 | 30 |
| 9 | 45 |

## AM and PM

- **AM** = midnight to noon
- **PM** = noon to midnight`,
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
        }
      ]
    },
    {
      id: 'statistics-probability-y3',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'chance-y3',
          title: 'Chance',
          description: 'Understanding probability',
          sections: [
            {
              id: 'probability-y3',
              code: 'VCMSP147',
              title: 'Understanding Chance',
              description: 'Conduct chance experiments, identify and describe possible outcomes',
              content: `# Understanding Chance

Chance is about how likely something is to happen. Let's explore!

## Chance Words

| Word | Meaning | Example |
|:-----|:--------|:--------|
| **Impossible** | Will never happen | Rolling a 7 on a dice |
| **Unlikely** | Probably won't happen | Snow in summer |
| **Even chance** | Could go either way | Flipping heads |
| **Likely** | Probably will happen | Sun rising tomorrow |
| **Certain** | Will definitely happen | Getting older |

## Chance Experiments

**Coin Flip:**
- 2 possible outcomes: Heads or Tails
- Each has an even chance (50%)

**Dice Roll:**
- 6 possible outcomes: 1, 2, 3, 4, 5, 6
- Each number has the same chance`,
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
