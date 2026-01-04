import { YearLevelCurriculum } from '../types';

export const year1Maths: YearLevelCurriculum = {
  yearLevel: 1,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'counting-numbers',
          title: 'Counting and Numbers to 100',
          description: 'Understanding numbers, counting sequences, and place value to 100',
          sections: [
            {
              id: 'VCMNA086',
              code: 'VCMNA086',
              title: 'Skip Counting and Number Sequences',
              description: 'Develop confidence with number sequences to and from 100 by ones from any starting point. Skip count by twos, fives and tens starting from zero.',
              content: `# Counting Fun!

Learning to count is like learning a special song - once you know the pattern, it's easy and fun!

## Counting by Ones

When we count by ones, we say every number:
**1, 2, 3, 4, 5, 6, 7, 8, 9, 10...**

We can count forwards (getting bigger) or backwards (getting smaller).

## Skip Counting

Sometimes we skip numbers to count faster! It's like hopping instead of walking.

### Counting by Twos (2s)
**2, 4, 6, 8, 10, 12, 14, 16, 18, 20**

Think of pairs of socks or shoes!

### Counting by Fives (5s)
**5, 10, 15, 20, 25, 30, 35, 40, 45, 50**

Look at your hand - you have 5 fingers! Two hands = 10 fingers.

### Counting by Tens (10s)
**10, 20, 30, 40, 50, 60, 70, 80, 90, 100**

This is the fastest way to count big groups!

## Number Patterns

Numbers follow patterns. If we know the pattern, we can guess what comes next!

| Pattern | Next Numbers |
|---------|--------------|
| 2, 4, 6, ? | 8, 10, 12 |
| 5, 10, 15, ? | 20, 25, 30 |
| 10, 20, 30, ? | 40, 50, 60 |`,
              keyPoints: [
                'We can count forwards (bigger) or backwards (smaller)',
                'Skip counting by 2s: 2, 4, 6, 8, 10...',
                'Skip counting by 5s: 5, 10, 15, 20, 25...',
                'Skip counting by 10s: 10, 20, 30, 40, 50...'
              ],
              knowledgeTokens: [
                {
                  id: 'counting-ones-forward',
                  name: 'Counting Forward by Ones',
                  description: 'Count forward from any number by ones',
                },
                {
                  id: 'counting-ones-backward',
                  name: 'Counting Backward by Ones',
                  description: 'Count backward from any number by ones',
                  prerequisites: ['counting-ones-forward'],
                },
                {
                  id: 'skip-count-twos',
                  name: 'Skip Counting by Twos',
                  description: 'Count by 2s: 2, 4, 6, 8, 10...',
                  prerequisites: ['counting-ones-forward'],
                },
                {
                  id: 'skip-count-fives',
                  name: 'Skip Counting by Fives',
                  description: 'Count by 5s: 5, 10, 15, 20...',
                  prerequisites: ['counting-ones-forward'],
                },
                {
                  id: 'skip-count-tens',
                  name: 'Skip Counting by Tens',
                  description: 'Count by 10s: 10, 20, 30, 40...',
                  prerequisites: ['counting-ones-forward'],
                },
                {
                  id: 'number-sequence-patterns',
                  name: 'Number Sequence Patterns',
                  description: 'Recognise and continue number patterns',
                  prerequisites: ['skip-count-twos', 'skip-count-fives', 'skip-count-tens'],
                },
                {
                  id: 'counting-from-any-start',
                  name: 'Counting from Any Starting Point',
                  description: 'Start counting from numbers other than 1',
                  prerequisites: ['counting-ones-forward'],
                },
              ],
              examples: [
                {
                  problem: 'Count by 2s from 2 to 12',
                  solution: '2, 4, 6, 8, 10, 12',
                  explanation: 'Start at 2 and add 2 each time: 2+2=4, 4+2=6, and so on'
                },
                {
                  problem: 'What comes next? 25, 30, 35, ?',
                  solution: '40',
                  explanation: 'The pattern is counting by 5s, so 35 + 5 = 40'
                }
              ],
              questions: [
                {
                  id: 'VCMNA086-001',
                  question: 'What number comes after 7?',
                  options: ['6', '8', '9', '5'],
                  correctAnswer: 1,
                  explanation: 'When counting forward, the number after 7 is 8.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['counting-ones-forward'],
                    correctToken: 'counting-ones-forward',
                    incorrectTokens: [
                      'forward-backward-confusion',
                      null,
                      'skip-counting-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-002',
                  question: 'What number comes before 10?',
                  options: ['11', '8', '9', '12'],
                  correctAnswer: 2,
                  explanation: 'When counting backward, the number before 10 is 9.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['counting-ones-backward'],
                    correctToken: 'counting-ones-backward',
                    incorrectTokens: [
                      'forward-backward-confusion',
                      'adjacent-number-error',
                      null,
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-003',
                  question: 'Count by 2s: 2, 4, 6, ?',
                  options: ['7', '8', '9', '10'],
                  correctAnswer: 1,
                  explanation: 'When counting by 2s, we add 2 each time. 6 + 2 = 8.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['skip-count-twos'],
                    correctToken: 'skip-count-twos',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-confusion',
                      'skip-count-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-004',
                  question: 'Count by 5s: 5, 10, 15, ?',
                  options: ['16', '18', '20', '25'],
                  correctAnswer: 2,
                  explanation: 'When counting by 5s, we add 5 each time. 15 + 5 = 20.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['skip-count-fives'],
                    correctToken: 'skip-count-fives',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'skip-count-confusion',
                      null,
                      'skip-count-tens-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-005',
                  question: 'Count by 10s: 10, 20, 30, ?',
                  options: ['35', '40', '50', '31'],
                  correctAnswer: 1,
                  explanation: 'When counting by 10s, we add 10 each time. 30 + 10 = 40.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['skip-count-tens'],
                    correctToken: 'skip-count-tens',
                    incorrectTokens: [
                      'skip-count-fives-confusion',
                      null,
                      'skip-count-error',
                      'counting-by-ones-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-006',
                  question: 'What comes next? 12, 14, 16, ?',
                  options: ['17', '18', '19', '20'],
                  correctAnswer: 1,
                  explanation: 'This is counting by 2s. 16 + 2 = 18.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-twos', 'number-sequence-patterns'],
                    correctToken: 'number-sequence-patterns',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-confusion',
                      'skip-count-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-007',
                  question: 'Count backward: 10, 9, 8, ?',
                  options: ['6', '7', '9', '11'],
                  correctAnswer: 1,
                  explanation: 'When counting backward by 1s, 8 - 1 = 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['counting-ones-backward'],
                    correctToken: 'counting-ones-backward',
                    incorrectTokens: [
                      'skip-count-error',
                      null,
                      'forward-backward-confusion',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-008',
                  question: 'Start at 23 and count forward 3 numbers. What number do you land on?',
                  options: ['25', '26', '27', '24'],
                  correctAnswer: 1,
                  explanation: '23, 24, 25, 26. We count 3 steps: 23→24→25→26.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['counting-ones-forward', 'counting-from-any-start'],
                    correctToken: 'counting-from-any-start',
                    incorrectTokens: [
                      'counting-steps-error',
                      null,
                      'counting-steps-error',
                      'counting-steps-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-009',
                  question: 'What is the missing number? 30, 40, ?, 60',
                  options: ['45', '50', '55', '70'],
                  correctAnswer: 1,
                  explanation: 'This is counting by 10s. 40 + 10 = 50.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-tens', 'number-sequence-patterns'],
                    correctToken: 'number-sequence-patterns',
                    incorrectTokens: [
                      'skip-count-fives-confusion',
                      null,
                      'skip-count-fives-confusion',
                      'skip-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-010',
                  question: 'Count by 2s starting from 10: 10, 12, 14, ?',
                  options: ['15', '16', '18', '20'],
                  correctAnswer: 1,
                  explanation: 'When counting by 2s, 14 + 2 = 16.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-twos', 'counting-from-any-start'],
                    correctToken: 'skip-count-twos',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-confusion',
                      'skip-count-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-011',
                  question: 'Which list shows counting by 5s?',
                  options: ['5, 6, 7, 8', '5, 10, 15, 20', '5, 15, 25, 35', '2, 4, 6, 8'],
                  correctAnswer: 1,
                  explanation: '5, 10, 15, 20 shows adding 5 each time.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-fives'],
                    correctToken: 'skip-count-fives',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-tens-confusion',
                      'skip-count-twos-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-012',
                  question: 'What number is 10 more than 50?',
                  options: ['40', '51', '60', '55'],
                  correctAnswer: 2,
                  explanation: '50 + 10 = 60. When we add 10, we go to the next tens number.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-tens'],
                    correctToken: 'skip-count-tens',
                    incorrectTokens: [
                      'addition-subtraction-confusion',
                      'counting-by-ones-error',
                      null,
                      'skip-count-fives-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-013',
                  question: 'Count backward by 10s: 70, 60, 50, ?',
                  options: ['45', '40', '30', '55'],
                  correctAnswer: 1,
                  explanation: 'Counting backward by 10s: 50 - 10 = 40.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-tens', 'counting-ones-backward'],
                    correctToken: 'skip-count-tens',
                    incorrectTokens: [
                      'skip-count-fives-confusion',
                      null,
                      'skip-count-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-014',
                  question: 'Fill in the blank: 35, 40, 45, __, 55',
                  options: ['46', '48', '50', '52'],
                  correctAnswer: 2,
                  explanation: 'Counting by 5s: 45 + 5 = 50.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['skip-count-fives', 'number-sequence-patterns'],
                    correctToken: 'number-sequence-patterns',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'skip-count-confusion',
                      null,
                      'skip-count-twos-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-015',
                  question: 'Which pattern is counting by 10s?',
                  options: ['2, 4, 6, 8', '5, 10, 15, 20', '10, 20, 30, 40', '1, 2, 3, 4'],
                  correctAnswer: 2,
                  explanation: '10, 20, 30, 40 adds 10 each time.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['skip-count-tens'],
                    correctToken: 'skip-count-tens',
                    incorrectTokens: [
                      'skip-count-twos-confusion',
                      'skip-count-fives-confusion',
                      null,
                      'counting-by-ones-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-016',
                  question: 'Start at 47. Count forward 2 numbers. Where do you land?',
                  options: ['48', '49', '50', '45'],
                  correctAnswer: 1,
                  explanation: '47, 48, 49. Count 2 steps forward from 47.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['counting-ones-forward', 'counting-from-any-start'],
                    correctToken: 'counting-from-any-start',
                    incorrectTokens: [
                      'counting-steps-error',
                      null,
                      'counting-steps-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-017',
                  question: 'What are the next TWO numbers? 75, 80, 85, ?, ?',
                  options: ['86, 87', '90, 95', '90, 100', '95, 100'],
                  correctAnswer: 1,
                  explanation: 'Counting by 5s: 85 + 5 = 90, then 90 + 5 = 95.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['skip-count-fives', 'number-sequence-patterns'],
                    correctToken: 'number-sequence-patterns',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-tens-confusion',
                      'skip-count-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-018',
                  question: 'Count backward by 2s: 20, 18, 16, ?',
                  options: ['15', '14', '12', '17'],
                  correctAnswer: 1,
                  explanation: 'Counting backward by 2s: 16 - 2 = 14.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['skip-count-twos', 'counting-ones-backward'],
                    correctToken: 'skip-count-twos',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'skip-count-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-019',
                  question: 'What number is missing? 62, 64, ?, 68, 70',
                  options: ['65', '66', '67', '63'],
                  correctAnswer: 1,
                  explanation: 'Counting by 2s: 64 + 2 = 66.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['skip-count-twos', 'number-sequence-patterns'],
                    correctToken: 'number-sequence-patterns',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'counting-by-ones-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA086-020',
                  question: 'Start at 83 and count backward 5 numbers. Where do you land?',
                  options: ['77', '78', '79', '88'],
                  correctAnswer: 1,
                  explanation: '83, 82, 81, 80, 79, 78. Count 5 steps backward.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['counting-ones-backward', 'counting-from-any-start'],
                    correctToken: 'counting-from-any-start',
                    incorrectTokens: [
                      'counting-steps-error',
                      null,
                      'counting-steps-error',
                      'forward-backward-confusion',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMNA088',
              code: 'VCMNA088',
              title: 'Place Value - Tens and Ones',
              description: 'Count collections to 100 by partitioning numbers using place value',
              content: `# Tens and Ones

Every two-digit number is made of **tens** and **ones**. Understanding this helps us count faster!

## What are Tens and Ones?

Think of it like bundling sticks:
- **Ones** are single sticks
- **Tens** are bundles of 10 sticks tied together

## Breaking Numbers Apart

The number **34** means:
- **3 tens** (3 bundles of 10 = 30)
- **4 ones** (4 single sticks = 4)
- Together: 30 + 4 = 34

| Number | Tens | Ones | We Say |
|--------|------|------|--------|
| 25 | 2 | 5 | twenty-five |
| 41 | 4 | 1 | forty-one |
| 76 | 7 | 6 | seventy-six |

## The Tens Digit

The **tens digit** tells us how many groups of 10.
- In 52, the tens digit is **5** (that's 50!)
- In 89, the tens digit is **8** (that's 80!)

## The Ones Digit

The **ones digit** tells us the leftover singles.
- In 52, the ones digit is **2**
- In 89, the ones digit is **9**

## Special Numbers

**Teen numbers** are tricky! They have 1 ten:
- 13 = 1 ten and 3 ones
- 17 = 1 ten and 7 ones`,
              keyPoints: [
                'Two-digit numbers have a tens place and a ones place',
                'The tens digit tells us how many groups of 10',
                'The ones digit tells us the singles (leftovers)',
                'We can break any number into tens and ones: 47 = 40 + 7'
              ],
              knowledgeTokens: [
                {
                  id: 'understanding-tens',
                  name: 'Understanding Tens',
                  description: 'Knowing that 10 ones make 1 ten',
                },
                {
                  id: 'understanding-ones',
                  name: 'Understanding Ones',
                  description: 'Recognising single units',
                },
                {
                  id: 'tens-digit-identification',
                  name: 'Identifying the Tens Digit',
                  description: 'Finding the tens digit in a two-digit number',
                  prerequisites: ['understanding-tens'],
                },
                {
                  id: 'ones-digit-identification',
                  name: 'Identifying the Ones Digit',
                  description: 'Finding the ones digit in a two-digit number',
                  prerequisites: ['understanding-ones'],
                },
                {
                  id: 'partitioning-numbers',
                  name: 'Partitioning Numbers',
                  description: 'Breaking numbers into tens and ones',
                  prerequisites: ['tens-digit-identification', 'ones-digit-identification'],
                },
                {
                  id: 'composing-numbers',
                  name: 'Composing Numbers',
                  description: 'Combining tens and ones to make numbers',
                  prerequisites: ['understanding-tens', 'understanding-ones'],
                },
                {
                  id: 'teen-numbers',
                  name: 'Understanding Teen Numbers',
                  description: 'Knowing teen numbers have 1 ten and some ones',
                  prerequisites: ['understanding-tens'],
                },
              ],
              examples: [
                {
                  problem: 'What is 56 in tens and ones?',
                  solution: '5 tens and 6 ones',
                  explanation: '56 = 50 + 6 = 5 tens and 6 ones'
                },
                {
                  problem: 'What number is 7 tens and 3 ones?',
                  solution: '73',
                  explanation: '7 tens = 70, plus 3 ones = 73'
                }
              ],
              questions: [
                {
                  id: 'VCMNA088-001',
                  question: 'How many tens are in the number 45?',
                  options: ['5', '4', '45', '9'],
                  correctAnswer: 1,
                  explanation: 'In 45, the 4 is in the tens place, so there are 4 tens.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['tens-digit-identification'],
                    correctToken: 'tens-digit-identification',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'whole-number-confusion',
                      'digit-sum-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-002',
                  question: 'How many ones are in the number 38?',
                  options: ['3', '8', '38', '11'],
                  correctAnswer: 1,
                  explanation: 'In 38, the 8 is in the ones place, so there are 8 ones.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['ones-digit-identification'],
                    correctToken: 'ones-digit-identification',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'whole-number-confusion',
                      'digit-sum-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-003',
                  question: 'What number is 3 tens and 7 ones?',
                  options: ['73', '37', '10', '307'],
                  correctAnswer: 1,
                  explanation: '3 tens = 30, 7 ones = 7. Together: 30 + 7 = 37.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'place-value-confusion',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-004',
                  question: 'Which shows 62 in tens and ones?',
                  options: ['2 tens and 6 ones', '6 tens and 2 ones', '60 tens and 2 ones', '6 tens and 20 ones'],
                  correctAnswer: 1,
                  explanation: '62 = 60 + 2 = 6 tens and 2 ones.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['partitioning-numbers'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'place-value-confusion',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-005',
                  question: 'In the number 14, how many tens are there?',
                  options: ['4', '1', '14', '0'],
                  correctAnswer: 1,
                  explanation: '14 is a teen number with 1 ten and 4 ones.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['teen-numbers', 'tens-digit-identification'],
                    correctToken: 'teen-numbers',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'whole-number-confusion',
                      'teen-number-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-006',
                  question: 'What is 50 + 9?',
                  options: ['59', '509', '95', '14'],
                  correctAnswer: 0,
                  explanation: '5 tens + 9 ones = 59.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      null,
                      'place-value-confusion',
                      'tens-ones-swap-confusion',
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-007',
                  question: 'Break apart 71: how many tens and ones?',
                  options: ['1 ten, 7 ones', '7 tens, 1 one', '71 tens, 0 ones', '0 tens, 71 ones'],
                  correctAnswer: 1,
                  explanation: '71 = 70 + 1 = 7 tens and 1 one.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'place-value-confusion',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-008',
                  question: 'Which number has 8 in the tens place?',
                  options: ['18', '81', '8', '98'],
                  correctAnswer: 1,
                  explanation: 'In 81, the 8 is in the tens place (80). In 18, 8 is in the ones place.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tens-digit-identification'],
                    correctToken: 'tens-digit-identification',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'single-digit-confusion',
                      'ones-digit-focus-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-009',
                  question: 'What number is 9 tens and 0 ones?',
                  options: ['9', '90', '99', '900'],
                  correctAnswer: 1,
                  explanation: '9 tens = 90, 0 ones = 0. Together: 90 + 0 = 90.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'tens-confusion',
                      null,
                      'addition-error',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-010',
                  question: 'In 17, how many ones are there?',
                  options: ['1', '7', '17', '10'],
                  correctAnswer: 1,
                  explanation: '17 = 1 ten and 7 ones. The ones digit is 7.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['teen-numbers', 'ones-digit-identification'],
                    correctToken: 'teen-numbers',
                    incorrectTokens: [
                      'tens-ones-swap-confusion',
                      null,
                      'whole-number-confusion',
                      'tens-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-011',
                  question: 'What is 40 + 6?',
                  options: ['406', '46', '64', '10'],
                  correctAnswer: 1,
                  explanation: '4 tens (40) + 6 ones = 46.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'place-value-confusion',
                      null,
                      'tens-ones-swap-confusion',
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-012',
                  question: 'Which number has the most tens?',
                  options: ['28', '82', '55', '19'],
                  correctAnswer: 1,
                  explanation: '82 has 8 tens, which is more than 2, 5, or 1 tens.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tens-digit-identification'],
                    correctToken: 'tens-digit-identification',
                    incorrectTokens: [
                      'ones-focus-error',
                      null,
                      'comparison-error',
                      'teen-number-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-013',
                  question: '60 + 4 = ?',
                  options: ['604', '64', '46', '10'],
                  correctAnswer: 1,
                  explanation: '6 tens + 4 ones = 64.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'place-value-confusion',
                      null,
                      'tens-ones-swap-confusion',
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-014',
                  question: 'What is the tens digit in 99?',
                  options: ['99', '9', '18', '90'],
                  correctAnswer: 1,
                  explanation: 'In 99, the first 9 is in the tens place.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tens-digit-identification'],
                    correctToken: 'tens-digit-identification',
                    incorrectTokens: [
                      'whole-number-confusion',
                      null,
                      'digit-sum-confusion',
                      'tens-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-015',
                  question: '5 tens and 5 ones makes what number?',
                  options: ['10', '55', '505', '50'],
                  correctAnswer: 1,
                  explanation: '5 tens = 50, 5 ones = 5. Total: 55.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'digit-sum-confusion',
                      null,
                      'place-value-confusion',
                      'ones-omission-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-016',
                  question: 'How is 83 broken into tens and ones?',
                  options: ['80 + 3', '8 + 3', '8 + 30', '83 + 0'],
                  correctAnswer: 0,
                  explanation: '83 = 8 tens (80) + 3 ones (3) = 80 + 3.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'tens-value-confusion',
                      'tens-ones-swap-confusion',
                      'partitioning-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-017',
                  question: 'Which number has 0 ones?',
                  options: ['30', '13', '31', '103'],
                  correctAnswer: 0,
                  explanation: '30 has 3 tens and 0 ones.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['ones-digit-identification'],
                    correctToken: 'ones-digit-identification',
                    incorrectTokens: [
                      null,
                      'zero-identification-error',
                      'zero-identification-error',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-018',
                  question: 'If I have 6 bundles of 10 sticks and 8 single sticks, how many sticks total?',
                  options: ['14', '68', '86', '608'],
                  correctAnswer: 1,
                  explanation: '6 tens (60) + 8 ones (8) = 68 sticks.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['composing-numbers', 'understanding-tens'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'digit-sum-confusion',
                      null,
                      'tens-ones-swap-confusion',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-019',
                  question: 'What number has 4 tens and 0 ones?',
                  options: ['4', '40', '44', '400'],
                  correctAnswer: 1,
                  explanation: '4 tens = 40, 0 ones = 0. The number is 40.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['composing-numbers'],
                    correctToken: 'composing-numbers',
                    incorrectTokens: [
                      'tens-confusion',
                      null,
                      'ones-addition-error',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA088-020',
                  question: 'In the number 100, how many tens are there?',
                  options: ['1', '0', '10', '100'],
                  correctAnswer: 2,
                  explanation: '100 = 10 tens. One hundred equals ten groups of ten!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['understanding-tens'],
                    correctToken: 'understanding-tens',
                    incorrectTokens: [
                      'hundreds-tens-confusion',
                      'zero-confusion',
                      null,
                      'whole-number-confusion',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'addition-subtraction',
          title: 'Addition and Subtraction',
          description: 'Solving simple addition and subtraction problems',
          sections: [
            {
              id: 'VCMNA089',
              code: 'VCMNA089',
              title: 'Addition and Subtraction Strategies',
              description: 'Represent and solve simple addition and subtraction problems using a range of strategies including counting on, partitioning and rearranging parts',
              content: `# Adding and Taking Away

Addition means putting things together. Subtraction means taking things away.

## Addition (+)

When we **add**, we combine groups to find the total.

**Example:** 5 apples + 3 apples = 8 apples

### Counting On Strategy

Start with the bigger number and count forward!

**5 + 3 = ?**
Start at 5, count on 3: "6, 7, 8"
Answer: **8**

### Using Doubles

If you know your doubles, use them!
- 2 + 2 = 4
- 3 + 3 = 6
- 4 + 4 = 8
- 5 + 5 = 10

**Near Doubles:** 5 + 6 = 5 + 5 + 1 = 11

## Subtraction (−)

When we **subtract**, we take away or find the difference.

**Example:** 8 cookies − 3 eaten = 5 cookies left

### Counting Back Strategy

Start with the first number and count backward!

**9 − 4 = ?**
Start at 9, count back 4: "8, 7, 6, 5"
Answer: **5**

## Number Bonds

Numbers can be split apart in different ways:

**10 = 1+9 = 2+8 = 3+7 = 4+6 = 5+5**`,
              keyPoints: [
                'Addition means putting together (+)',
                'Subtraction means taking away (−)',
                'Count on from the bigger number for addition',
                'Count back from the first number for subtraction'
              ],
              knowledgeTokens: [
                {
                  id: 'addition-concept',
                  name: 'Understanding Addition',
                  description: 'Knowing that addition combines quantities',
                },
                {
                  id: 'subtraction-concept',
                  name: 'Understanding Subtraction',
                  description: 'Knowing that subtraction takes away quantities',
                },
                {
                  id: 'counting-on',
                  name: 'Counting On Strategy',
                  description: 'Adding by starting at one number and counting forward',
                  prerequisites: ['addition-concept'],
                },
                {
                  id: 'counting-back',
                  name: 'Counting Back Strategy',
                  description: 'Subtracting by counting backward',
                  prerequisites: ['subtraction-concept'],
                },
                {
                  id: 'doubles-facts',
                  name: 'Doubles Facts',
                  description: 'Knowing addition facts like 3+3, 4+4, 5+5',
                  prerequisites: ['addition-concept'],
                },
                {
                  id: 'number-bonds-ten',
                  name: 'Number Bonds to 10',
                  description: 'Knowing pairs that make 10',
                  prerequisites: ['addition-concept'],
                },
                {
                  id: 'fact-families',
                  name: 'Fact Families',
                  description: 'Understanding related addition and subtraction facts',
                  prerequisites: ['addition-concept', 'subtraction-concept'],
                },
              ],
              examples: [
                {
                  problem: '7 + 5 = ?',
                  solution: '12',
                  explanation: 'Start at 7, count on 5: 8, 9, 10, 11, 12'
                },
                {
                  problem: '12 − 4 = ?',
                  solution: '8',
                  explanation: 'Start at 12, count back 4: 11, 10, 9, 8'
                }
              ],
              questions: [
                {
                  id: 'VCMNA089-001',
                  question: 'What is 3 + 4?',
                  options: ['5', '6', '7', '8'],
                  correctAnswer: 2,
                  explanation: '3 + 4 = 7. Count on from 3: 4, 5, 6, 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['addition-concept', 'counting-on'],
                    correctToken: 'addition-concept',
                    incorrectTokens: [
                      'counting-error',
                      'counting-error',
                      null,
                      'counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-002',
                  question: 'What is 8 − 3?',
                  options: ['4', '5', '6', '11'],
                  correctAnswer: 1,
                  explanation: '8 − 3 = 5. Count back from 8: 7, 6, 5.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['subtraction-concept', 'counting-back'],
                    correctToken: 'subtraction-concept',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-003',
                  question: 'What is 5 + 5?',
                  options: ['9', '10', '11', '25'],
                  correctAnswer: 1,
                  explanation: '5 + 5 = 10. This is a doubles fact!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['doubles-facts'],
                    correctToken: 'doubles-facts',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-004',
                  question: 'What is 6 + 4?',
                  options: ['9', '10', '11', '2'],
                  correctAnswer: 1,
                  explanation: '6 + 4 = 10. These are number bonds to 10!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['number-bonds-ten'],
                    correctToken: 'number-bonds-ten',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-005',
                  question: 'What is 10 − 6?',
                  options: ['3', '4', '5', '16'],
                  correctAnswer: 1,
                  explanation: '10 − 6 = 4. If 6 + 4 = 10, then 10 − 6 = 4.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['number-bonds-ten', 'subtraction-concept'],
                    correctToken: 'number-bonds-ten',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-006',
                  question: 'What is 4 + 4?',
                  options: ['6', '7', '8', '44'],
                  correctAnswer: 2,
                  explanation: '4 + 4 = 8. This is a doubles fact!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['doubles-facts'],
                    correctToken: 'doubles-facts',
                    incorrectTokens: [
                      'counting-error',
                      'counting-error',
                      null,
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-007',
                  question: 'What is 9 − 5?',
                  options: ['3', '4', '5', '14'],
                  correctAnswer: 1,
                  explanation: '9 − 5 = 4. Count back 5 from 9: 8, 7, 6, 5, 4.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['subtraction-concept', 'counting-back'],
                    correctToken: 'counting-back',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-008',
                  question: '7 + 3 = ?',
                  options: ['9', '10', '11', '4'],
                  correctAnswer: 1,
                  explanation: '7 + 3 = 10. These are number bonds to 10!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['number-bonds-ten'],
                    correctToken: 'number-bonds-ten',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-009',
                  question: 'What is 6 + 6?',
                  options: ['10', '11', '12', '66'],
                  correctAnswer: 2,
                  explanation: '6 + 6 = 12. This is a doubles fact!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['doubles-facts'],
                    correctToken: 'doubles-facts',
                    incorrectTokens: [
                      'counting-error',
                      'counting-error',
                      null,
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-010',
                  question: '11 − 5 = ?',
                  options: ['5', '6', '7', '16'],
                  correctAnswer: 1,
                  explanation: '11 − 5 = 6. Count back 5 from 11: 10, 9, 8, 7, 6.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['subtraction-concept', 'counting-back'],
                    correctToken: 'counting-back',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-011',
                  question: 'What number plus 6 equals 10?',
                  options: ['3', '4', '5', '16'],
                  correctAnswer: 1,
                  explanation: '4 + 6 = 10. We need 4 more to get from 6 to 10.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['number-bonds-ten'],
                    correctToken: 'number-bonds-ten',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-012',
                  question: 'What is 8 + 4?',
                  options: ['11', '12', '13', '4'],
                  correctAnswer: 1,
                  explanation: '8 + 4 = 12. Count on from 8: 9, 10, 11, 12.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['addition-concept', 'counting-on'],
                    correctToken: 'counting-on',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-013',
                  question: 'What is 15 − 7?',
                  options: ['7', '8', '9', '22'],
                  correctAnswer: 1,
                  explanation: '15 − 7 = 8. Count back 7 from 15.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['subtraction-concept', 'counting-back'],
                    correctToken: 'counting-back',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-014',
                  question: 'If 5 + 4 = 9, what is 9 − 4?',
                  options: ['4', '5', '13', '3'],
                  correctAnswer: 1,
                  explanation: 'These are fact families! If 5 + 4 = 9, then 9 − 4 = 5.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['fact-families'],
                    correctToken: 'fact-families',
                    incorrectTokens: [
                      'fact-family-confusion',
                      null,
                      'operation-confusion',
                      'counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-015',
                  question: 'What is 7 + 7?',
                  options: ['13', '14', '15', '77'],
                  correctAnswer: 1,
                  explanation: '7 + 7 = 14. This is a doubles fact!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['doubles-facts'],
                    correctToken: 'doubles-facts',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-016',
                  question: 'I had 12 stickers. I gave away 5. How many do I have now?',
                  options: ['6', '7', '8', '17'],
                  correctAnswer: 1,
                  explanation: '12 − 5 = 7. You have 7 stickers left.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['subtraction-concept'],
                    correctToken: 'subtraction-concept',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-017',
                  question: 'What is 9 + 6?',
                  options: ['14', '15', '16', '3'],
                  correctAnswer: 1,
                  explanation: '9 + 6 = 15. Count on 6 from 9: 10, 11, 12, 13, 14, 15.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['addition-concept', 'counting-on'],
                    correctToken: 'counting-on',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-018',
                  question: 'I have 6 red apples and 8 green apples. How many apples altogether?',
                  options: ['12', '13', '14', '2'],
                  correctAnswer: 2,
                  explanation: '6 + 8 = 14 apples altogether.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['addition-concept'],
                    correctToken: 'addition-concept',
                    incorrectTokens: [
                      'counting-error',
                      'counting-error',
                      null,
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-019',
                  question: 'What is 16 − 8?',
                  options: ['7', '8', '9', '24'],
                  correctAnswer: 1,
                  explanation: '16 − 8 = 8. 8 + 8 = 16, so 16 − 8 = 8.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['subtraction-concept', 'doubles-facts'],
                    correctToken: 'subtraction-concept',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA089-020',
                  question: 'What is 8 + 7?',
                  options: ['14', '15', '16', '1'],
                  correctAnswer: 1,
                  explanation: '8 + 7 = 15. Near doubles: 7 + 7 = 14, plus 1 more = 15.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['addition-concept', 'doubles-facts'],
                    correctToken: 'counting-on',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'operation-confusion',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'fractions',
          title: 'Fractions',
          description: 'Understanding halves',
          sections: [
            {
              id: 'VCMNA091',
              code: 'VCMNA091',
              title: 'Understanding Halves',
              description: 'Recognise and describe one-half as one of two equal parts of a whole',
              content: `# What is a Half?

When we share something equally between 2 people, each person gets **one half**.

## Equal Parts

A half means **2 equal parts**. Equal means the same size!

**Examples of halves:**
- Cut a sandwich in half = 2 equal pieces
- Share an apple with a friend = each gets half
- Fold paper in half = 2 equal parts

## The Half Symbol

We write half as: **½**

This means: 1 out of 2 equal parts

## Finding Half

To find half of something:
1. Make sure you have 2 **equal** parts
2. Take ONE of those parts
3. That's half!

| Whole | Half |
|-------|------|
| 🍕🍕 | 🍕 |
| 🍎🍎 | 🍎 |
| 2 | 1 |
| 4 | 2 |
| 10 | 5 |

## Half of a Shape

A shape is cut in half when both pieces are **exactly the same size**.

✅ **This IS half:** A rectangle split down the middle (two equal rectangles)

❌ **This is NOT half:** A rectangle split unevenly (one piece is bigger)`,
              keyPoints: [
                'Half means 2 equal parts',
                'We write half as ½',
                'Both parts must be the SAME SIZE',
                'Half of a whole is 1 out of 2 equal parts'
              ],
              knowledgeTokens: [
                {
                  id: 'equal-parts-concept',
                  name: 'Understanding Equal Parts',
                  description: 'Recognising when parts are equal in size',
                },
                {
                  id: 'half-of-whole',
                  name: 'Half of a Whole',
                  description: 'Identifying one half of a whole object',
                  prerequisites: ['equal-parts-concept'],
                },
                {
                  id: 'half-symbol',
                  name: 'Half Symbol',
                  description: 'Recognising ½ as the symbol for half',
                  prerequisites: ['half-of-whole'],
                },
                {
                  id: 'half-of-quantity',
                  name: 'Half of a Quantity',
                  description: 'Finding half of a number or collection',
                  prerequisites: ['half-of-whole'],
                },
                {
                  id: 'half-of-shape',
                  name: 'Half of a Shape',
                  description: 'Identifying when a shape is divided in half',
                  prerequisites: ['equal-parts-concept'],
                },
                {
                  id: 'not-half-identification',
                  name: 'Identifying Non-Halves',
                  description: 'Recognising when something is NOT half',
                  prerequisites: ['half-of-whole'],
                },
              ],
              examples: [
                {
                  problem: 'What is half of 8?',
                  solution: '4',
                  explanation: 'If we share 8 equally between 2, each gets 4. Half of 8 is 4.'
                },
                {
                  problem: 'Is a pizza cut into one big piece and one small piece cut in half?',
                  solution: 'No',
                  explanation: 'Half means EQUAL parts. If the pieces are different sizes, it\'s not half!'
                }
              ],
              questions: [
                {
                  id: 'VCMNA091-001',
                  question: 'What is half of 2?',
                  options: ['0', '1', '2', '4'],
                  correctAnswer: 1,
                  explanation: 'Half of 2 is 1. If you share 2 cookies equally, each person gets 1.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'zero-confusion',
                      null,
                      'whole-not-half-confusion',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-002',
                  question: 'What is half of 6?',
                  options: ['2', '3', '4', '12'],
                  correctAnswer: 1,
                  explanation: 'Half of 6 is 3. 3 + 3 = 6, so half is 3.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      null,
                      'halving-error',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-003',
                  question: 'A circle is split into 2 parts. Is it split in half if both parts are the same size?',
                  options: ['Yes', 'No', 'Maybe', 'Only if it\'s big'],
                  correctAnswer: 0,
                  explanation: 'Yes! Half means 2 EQUAL parts. Same size = half!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-of-shape', 'equal-parts-concept'],
                    correctToken: 'half-of-shape',
                    incorrectTokens: [
                      null,
                      'equal-parts-confusion',
                      'equal-parts-confusion',
                      'equal-parts-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-004',
                  question: 'What is half of 10?',
                  options: ['2', '5', '10', '20'],
                  correctAnswer: 1,
                  explanation: 'Half of 10 is 5. 5 + 5 = 10.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      null,
                      'whole-not-half-confusion',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-005',
                  question: 'How do we write "half" as a fraction?',
                  options: ['2', '½', '1', '2/2'],
                  correctAnswer: 1,
                  explanation: 'Half is written as ½ (1 out of 2 equal parts).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-symbol'],
                    correctToken: 'half-symbol',
                    incorrectTokens: [
                      'fraction-confusion',
                      null,
                      'fraction-confusion',
                      'whole-fraction-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-006',
                  question: 'What is half of 4?',
                  options: ['1', '2', '3', '8'],
                  correctAnswer: 1,
                  explanation: 'Half of 4 is 2. 2 + 2 = 4.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      null,
                      'halving-error',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-007',
                  question: 'A sandwich is cut so one piece is big and one is small. Is this cut in half?',
                  options: ['Yes', 'No', 'Maybe', 'It depends'],
                  correctAnswer: 1,
                  explanation: 'No! Half means EQUAL parts. Different sizes is NOT half.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['not-half-identification', 'equal-parts-concept'],
                    correctToken: 'not-half-identification',
                    incorrectTokens: [
                      'equal-parts-confusion',
                      null,
                      'equal-parts-confusion',
                      'equal-parts-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-008',
                  question: 'What is half of 8?',
                  options: ['2', '3', '4', '16'],
                  correctAnswer: 2,
                  explanation: 'Half of 8 is 4. 4 + 4 = 8.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      'halving-error',
                      null,
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-009',
                  question: 'You have 12 grapes. You give half to your friend. How many does your friend get?',
                  options: ['4', '5', '6', '12'],
                  correctAnswer: 2,
                  explanation: 'Half of 12 is 6. Your friend gets 6 grapes.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      'halving-error',
                      null,
                      'whole-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-010',
                  question: 'What is half of 20?',
                  options: ['5', '10', '15', '40'],
                  correctAnswer: 1,
                  explanation: 'Half of 20 is 10. 10 + 10 = 20.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      null,
                      'halving-error',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-011',
                  question: 'Which shows a square cut in half?',
                  options: ['A square cut into 2 equal rectangles', 'A square cut into 3 parts', 'A square with 1 small corner cut off', 'A whole square'],
                  correctAnswer: 0,
                  explanation: '2 equal parts = half. The equal rectangles show half.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-shape'],
                    correctToken: 'half-of-shape',
                    incorrectTokens: [
                      null,
                      'parts-count-confusion',
                      'equal-parts-confusion',
                      'whole-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-012',
                  question: 'What is half of 14?',
                  options: ['6', '7', '8', '28'],
                  correctAnswer: 1,
                  explanation: 'Half of 14 is 7. 7 + 7 = 14.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      null,
                      'halving-error',
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-013',
                  question: 'If 6 is half, what is the whole?',
                  options: ['3', '6', '12', '24'],
                  correctAnswer: 2,
                  explanation: 'If 6 is half, the whole is 12 (because 6 + 6 = 12).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-direction-confusion',
                      'whole-not-half-confusion',
                      null,
                      'double-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-014',
                  question: 'A rectangle is folded. Both parts match exactly. Is it folded in half?',
                  options: ['Yes', 'No', 'Only if it\'s a square', 'Only if it\'s paper'],
                  correctAnswer: 0,
                  explanation: 'Yes! When parts match exactly, they are equal, so it is half.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-shape', 'equal-parts-concept'],
                    correctToken: 'half-of-shape',
                    incorrectTokens: [
                      null,
                      'equal-parts-confusion',
                      'shape-type-confusion',
                      'material-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-015',
                  question: 'What is half of 16?',
                  options: ['6', '7', '8', '32'],
                  correctAnswer: 2,
                  explanation: 'Half of 16 is 8. 8 + 8 = 16.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      'halving-error',
                      null,
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-016',
                  question: 'How many equal parts does half have?',
                  options: ['1', '2', '3', '4'],
                  correctAnswer: 1,
                  explanation: 'Half = 2 equal parts. We take 1 of those 2 parts.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['equal-parts-concept', 'half-of-whole'],
                    correctToken: 'equal-parts-concept',
                    incorrectTokens: [
                      'parts-count-confusion',
                      null,
                      'parts-count-confusion',
                      'parts-count-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-017',
                  question: 'You have 18 strawberries. How many is half?',
                  options: ['6', '8', '9', '36'],
                  correctAnswer: 2,
                  explanation: 'Half of 18 is 9. 9 + 9 = 18.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      'halving-error',
                      null,
                      'double-not-half-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-018',
                  question: 'If 10 is half of a number, what is the number?',
                  options: ['5', '10', '15', '20'],
                  correctAnswer: 3,
                  explanation: 'If 10 is half, the whole is 20 (because 10 + 10 = 20).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-direction-confusion',
                      'whole-not-half-confusion',
                      'halving-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA091-019',
                  question: 'A pizza is cut into 2 pieces. One piece is much bigger. Did they cut it in half?',
                  options: ['Yes, it\'s 2 pieces', 'No, the pieces aren\'t equal', 'Yes, any 2 pieces is half', 'Yes, if someone says so'],
                  correctAnswer: 1,
                  explanation: 'No! Half means EQUAL pieces. Different sizes is not half.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['not-half-identification'],
                    correctToken: 'not-half-identification',
                    incorrectTokens: [
                      'parts-count-confusion',
                      null,
                      'equal-parts-confusion',
                      'equal-parts-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA091-020',
                  question: 'What is half of 100?',
                  options: ['10', '25', '50', '200'],
                  correctAnswer: 2,
                  explanation: 'Half of 100 is 50. 50 + 50 = 100.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-of-quantity'],
                    correctToken: 'half-of-quantity',
                    incorrectTokens: [
                      'halving-error',
                      'halving-error',
                      null,
                      'double-not-half-confusion',
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'measurement-geometry',
      name: 'Measurement and Geometry',
      chapters: [
        {
          id: 'shapes',
          title: '2D and 3D Shapes',
          description: 'Recognising and describing shapes',
          sections: [
            {
              id: 'VCMMG098',
              code: 'VCMMG098',
              title: 'Recognising Shapes',
              description: 'Recognise and classify familiar two-dimensional shapes and three-dimensional objects using obvious features',
              content: `# Shapes All Around Us!

Shapes are everywhere - in buildings, toys, food, and nature!

## 2D Shapes (Flat Shapes)

**2D** means flat, like a drawing on paper.

### Circle ⭕
- Perfectly round
- No corners, no straight edges
- Like a pizza, coin, or wheel

### Square ⬜
- 4 equal sides
- 4 corners (we call them vertices)
- Like a window or a cracker

### Rectangle
- 4 sides (2 long, 2 short)
- 4 corners
- Like a door or a book

### Triangle 🔺
- 3 sides
- 3 corners
- Like a sandwich cut diagonally

## 3D Shapes (Solid Shapes)

**3D** shapes are solid - you can pick them up!

### Sphere 🔵
- Like a ball
- Round all over
- Can roll in any direction

### Cube 🎲
- Like a dice or box
- 6 flat faces
- All faces are squares

### Cylinder
- Like a can or tube
- Has 2 flat circle ends
- Can roll in one direction

### Cone 🍦
- Like an ice cream cone
- Has 1 flat circle end
- Has a pointy top`,
              keyPoints: [
                '2D shapes are flat (circle, square, rectangle, triangle)',
                '3D shapes are solid and can be held (sphere, cube, cylinder, cone)',
                'Shapes have sides (edges), corners (vertices), and faces',
                'We see shapes everywhere in the real world!'
              ],
              knowledgeTokens: [
                {
                  id: 'circle-recognition',
                  name: 'Circle Recognition',
                  description: 'Identifying circles by their round shape',
                },
                {
                  id: 'square-recognition',
                  name: 'Square Recognition',
                  description: 'Identifying squares by equal sides and 4 corners',
                },
                {
                  id: 'rectangle-recognition',
                  name: 'Rectangle Recognition',
                  description: 'Identifying rectangles by 4 sides and corners',
                  prerequisites: ['square-recognition'],
                },
                {
                  id: 'triangle-recognition',
                  name: 'Triangle Recognition',
                  description: 'Identifying triangles by 3 sides and corners',
                },
                {
                  id: 'sphere-recognition',
                  name: 'Sphere Recognition',
                  description: 'Identifying spheres as 3D round shapes',
                  prerequisites: ['circle-recognition'],
                },
                {
                  id: 'cube-recognition',
                  name: 'Cube Recognition',
                  description: 'Identifying cubes as 3D boxes with square faces',
                  prerequisites: ['square-recognition'],
                },
                {
                  id: '2d-3d-difference',
                  name: '2D vs 3D Shapes',
                  description: 'Understanding the difference between flat and solid shapes',
                },
                {
                  id: 'shape-features',
                  name: 'Shape Features',
                  description: 'Counting sides, corners, and faces of shapes',
                },
              ],
              examples: [
                {
                  problem: 'Is a ball 2D or 3D?',
                  solution: '3D',
                  explanation: 'A ball is solid - you can hold it. It\'s a sphere, which is a 3D shape.'
                },
                {
                  problem: 'How many corners does a triangle have?',
                  solution: '3 corners',
                  explanation: 'A triangle has 3 sides and 3 corners (vertices).'
                }
              ],
              questions: [
                {
                  id: 'VCMMG098-001',
                  question: 'Which shape is round with no corners?',
                  options: ['Square', 'Triangle', 'Circle', 'Rectangle'],
                  correctAnswer: 2,
                  explanation: 'A circle is round and has no corners.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['circle-recognition'],
                    correctToken: 'circle-recognition',
                    incorrectTokens: [
                      'shape-confusion',
                      'shape-confusion',
                      null,
                      'shape-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-002',
                  question: 'How many sides does a triangle have?',
                  options: ['2', '3', '4', '5'],
                  correctAnswer: 1,
                  explanation: 'A triangle has 3 sides (tri means three!).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['triangle-recognition', 'shape-features'],
                    correctToken: 'triangle-recognition',
                    incorrectTokens: [
                      'sides-counting-error',
                      null,
                      'square-triangle-confusion',
                      'sides-counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-003',
                  question: 'Which shape has 4 equal sides?',
                  options: ['Circle', 'Triangle', 'Square', 'Sphere'],
                  correctAnswer: 2,
                  explanation: 'A square has 4 sides that are all the same length.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['square-recognition'],
                    correctToken: 'square-recognition',
                    incorrectTokens: [
                      'shape-confusion',
                      'shape-confusion',
                      null,
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-004',
                  question: 'A ball is shaped like a:',
                  options: ['Cube', 'Sphere', 'Cylinder', 'Square'],
                  correctAnswer: 1,
                  explanation: 'A ball is round all over - that\'s a sphere!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['sphere-recognition'],
                    correctToken: 'sphere-recognition',
                    incorrectTokens: [
                      '3d-shape-confusion',
                      null,
                      '3d-shape-confusion',
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-005',
                  question: 'Is a circle 2D (flat) or 3D (solid)?',
                  options: ['2D (flat)', '3D (solid)', 'Both', 'Neither'],
                  correctAnswer: 0,
                  explanation: 'A circle is flat - you can draw it on paper. It\'s 2D.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['2d-3d-difference', 'circle-recognition'],
                    correctToken: '2d-3d-difference',
                    incorrectTokens: [
                      null,
                      '2d-3d-confusion',
                      '2d-3d-confusion',
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-006',
                  question: 'A dice (like in board games) is shaped like a:',
                  options: ['Sphere', 'Cube', 'Cylinder', 'Circle'],
                  correctAnswer: 1,
                  explanation: 'A dice is a cube - it has 6 square faces.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['cube-recognition'],
                    correctToken: 'cube-recognition',
                    incorrectTokens: [
                      '3d-shape-confusion',
                      null,
                      '3d-shape-confusion',
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-007',
                  question: 'How many corners does a square have?',
                  options: ['3', '4', '5', '0'],
                  correctAnswer: 1,
                  explanation: 'A square has 4 corners (vertices).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['square-recognition', 'shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      'corners-counting-error',
                      null,
                      'corners-counting-error',
                      'corners-counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-008',
                  question: 'Which shape looks like a door?',
                  options: ['Circle', 'Triangle', 'Rectangle', 'Sphere'],
                  correctAnswer: 2,
                  explanation: 'A door is shaped like a rectangle - 4 sides with 2 long and 2 short.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['rectangle-recognition'],
                    correctToken: 'rectangle-recognition',
                    incorrectTokens: [
                      'shape-confusion',
                      'shape-confusion',
                      null,
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-009',
                  question: 'Which of these is a 3D shape?',
                  options: ['Circle', 'Square', 'Cube', 'Triangle'],
                  correctAnswer: 2,
                  explanation: 'A cube is 3D (solid). The others are 2D (flat).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['2d-3d-difference', 'cube-recognition'],
                    correctToken: '2d-3d-difference',
                    incorrectTokens: [
                      '2d-3d-confusion',
                      '2d-3d-confusion',
                      null,
                      '2d-3d-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-010',
                  question: 'A can of beans is shaped like a:',
                  options: ['Cube', 'Sphere', 'Cylinder', 'Cone'],
                  correctAnswer: 2,
                  explanation: 'A can is a cylinder - it has 2 flat circle ends.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      '3d-shape-confusion',
                      '3d-shape-confusion',
                      null,
                      '3d-shape-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-011',
                  question: 'What shape is a wheel?',
                  options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
                  correctAnswer: 1,
                  explanation: 'A wheel is round - it\'s a circle!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['circle-recognition'],
                    correctToken: 'circle-recognition',
                    incorrectTokens: [
                      'shape-confusion',
                      null,
                      'shape-confusion',
                      'shape-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-012',
                  question: 'An ice cream cone is shaped like a:',
                  options: ['Sphere', 'Cube', 'Cylinder', 'Cone'],
                  correctAnswer: 3,
                  explanation: 'An ice cream cone is a cone shape - pointy at the bottom!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      '3d-shape-confusion',
                      '3d-shape-confusion',
                      '3d-shape-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG098-013',
                  question: 'How many sides does a rectangle have?',
                  options: ['3', '4', '5', '6'],
                  correctAnswer: 1,
                  explanation: 'A rectangle has 4 sides (2 long and 2 short).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['rectangle-recognition', 'shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      'sides-counting-error',
                      null,
                      'sides-counting-error',
                      'sides-counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-014',
                  question: 'Which shape can roll?',
                  options: ['Square', 'Triangle', 'Rectangle', 'Sphere'],
                  correctAnswer: 3,
                  explanation: 'A sphere (ball) can roll because it\'s round all over!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sphere-recognition', 'shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      'rolling-feature-confusion',
                      'rolling-feature-confusion',
                      'rolling-feature-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG098-015',
                  question: 'A sandwich cut corner to corner makes two:',
                  options: ['Circles', 'Squares', 'Triangles', 'Rectangles'],
                  correctAnswer: 2,
                  explanation: 'Cutting a square diagonally makes two triangles!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['triangle-recognition'],
                    correctToken: 'triangle-recognition',
                    incorrectTokens: [
                      'shape-transformation-confusion',
                      'shape-transformation-confusion',
                      null,
                      'shape-transformation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-016',
                  question: 'What is the difference between a square and a rectangle?',
                  options: ['Squares have more sides', 'Squares have all equal sides', 'Rectangles are round', 'There is no difference'],
                  correctAnswer: 1,
                  explanation: 'A square has all 4 sides equal. A rectangle has 2 long and 2 short sides.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['square-recognition', 'rectangle-recognition'],
                    correctToken: 'square-recognition',
                    incorrectTokens: [
                      'sides-counting-error',
                      null,
                      'shape-feature-confusion',
                      'square-rectangle-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-017',
                  question: 'How many faces does a cube have?',
                  options: ['4', '5', '6', '8'],
                  correctAnswer: 2,
                  explanation: 'A cube has 6 faces (like a dice with 6 sides).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['cube-recognition', 'shape-features'],
                    correctToken: 'shape-features',
                    incorrectTokens: [
                      'faces-counting-error',
                      'faces-counting-error',
                      null,
                      'faces-counting-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-018',
                  question: 'Which 2D shape has no straight lines?',
                  options: ['Square', 'Triangle', 'Rectangle', 'Circle'],
                  correctAnswer: 3,
                  explanation: 'A circle is curved - it has no straight lines!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['circle-recognition', 'shape-features'],
                    correctToken: 'circle-recognition',
                    incorrectTokens: [
                      'straight-curved-confusion',
                      'straight-curved-confusion',
                      'straight-curved-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG098-019',
                  question: 'A globe (model of Earth) is shaped like a:',
                  options: ['Circle', 'Cube', 'Sphere', 'Cylinder'],
                  correctAnswer: 2,
                  explanation: 'A globe is round all over - it\'s a sphere!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sphere-recognition'],
                    correctToken: 'sphere-recognition',
                    incorrectTokens: [
                      '2d-3d-confusion',
                      '3d-shape-confusion',
                      null,
                      '3d-shape-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG098-020',
                  question: 'Which of these is NOT a 2D shape?',
                  options: ['Circle', 'Square', 'Sphere', 'Triangle'],
                  correctAnswer: 2,
                  explanation: 'A sphere is 3D (solid). Circle, square, and triangle are 2D (flat).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['2d-3d-difference'],
                    correctToken: '2d-3d-difference',
                    incorrectTokens: [
                      '2d-3d-confusion',
                      '2d-3d-confusion',
                      null,
                      '2d-3d-confusion',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'time',
          title: 'Time',
          description: 'Telling time and understanding duration',
          sections: [
            {
              id: 'VCMMG099',
              code: 'VCMMG099',
              title: 'Telling Time - O\'clock and Half Past',
              description: 'Tell time to the half-hour and describe the features of time-telling devices',
              content: `# Learning to Tell Time

A clock helps us know what time it is. Let's learn how to read one!

## The Clock Face

A clock has:
- **12 numbers** around the edge (1 to 12)
- **Two hands** that point to numbers

## The Clock Hands

### Hour Hand (Short Hand) ⏰
- The **short** hand
- Shows the **hour**
- Moves slowly

### Minute Hand (Long Hand)
- The **long** hand
- Shows the **minutes**
- Moves faster

## O'Clock Times

When the **long hand points to 12**, it's "o'clock"!

| Clock Shows | We Say |
|-------------|--------|
| Short hand on 3, Long hand on 12 | 3 o'clock |
| Short hand on 7, Long hand on 12 | 7 o'clock |
| Short hand on 10, Long hand on 12 | 10 o'clock |

## Half Past Times

When the **long hand points to 6**, it's "half past"!

The short hand will be **between two numbers**.

| Clock Shows | We Say |
|-------------|--------|
| Long hand on 6, Short hand between 3 and 4 | Half past 3 |
| Long hand on 6, Short hand between 8 and 9 | Half past 8 |

## Tip!
- Long hand on **12** = o'clock
- Long hand on **6** = half past`,
              keyPoints: [
                'The short hand shows the hour',
                'The long hand shows the minutes',
                'O\'clock = long hand pointing to 12',
                'Half past = long hand pointing to 6'
              ],
              knowledgeTokens: [
                {
                  id: 'clock-parts',
                  name: 'Clock Parts',
                  description: 'Identifying the hour and minute hands',
                },
                {
                  id: 'oclock-reading',
                  name: 'Reading O\'clock Times',
                  description: 'Telling time when it\'s exactly on the hour',
                  prerequisites: ['clock-parts'],
                },
                {
                  id: 'half-past-reading',
                  name: 'Reading Half Past Times',
                  description: 'Telling time when it\'s half past the hour',
                  prerequisites: ['clock-parts', 'oclock-reading'],
                },
                {
                  id: 'hour-hand-position',
                  name: 'Hour Hand Position',
                  description: 'Understanding where the hour hand points',
                  prerequisites: ['clock-parts'],
                },
                {
                  id: 'minute-hand-position',
                  name: 'Minute Hand Position',
                  description: 'Understanding where the minute hand points',
                  prerequisites: ['clock-parts'],
                },
                {
                  id: 'time-sequence',
                  name: 'Time Sequence',
                  description: 'Understanding the order of hours on a clock',
                  prerequisites: ['oclock-reading'],
                },
              ],
              examples: [
                {
                  problem: 'The short hand is on 5, the long hand is on 12. What time is it?',
                  solution: '5 o\'clock',
                  explanation: 'Long hand on 12 = o\'clock. Short hand on 5 = 5 o\'clock.'
                },
                {
                  problem: 'The long hand is on 6, the short hand is between 2 and 3. What time is it?',
                  solution: 'Half past 2',
                  explanation: 'Long hand on 6 = half past. Short hand just past 2 = half past 2.'
                }
              ],
              questions: [
                {
                  id: 'VCMMG099-001',
                  question: 'Which hand on a clock is shorter?',
                  options: ['Minute hand', 'Hour hand', 'They are the same', 'Clocks don\'t have hands'],
                  correctAnswer: 1,
                  explanation: 'The hour hand is the short hand. It shows the hour.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['clock-parts'],
                    correctToken: 'clock-parts',
                    incorrectTokens: [
                      'hand-length-confusion',
                      null,
                      'hand-length-confusion',
                      'clock-parts-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-002',
                  question: 'The long hand points to 12 and short hand points to 3. What time is it?',
                  options: ['12 o\'clock', '3 o\'clock', 'Half past 3', 'Half past 12'],
                  correctAnswer: 1,
                  explanation: 'Long hand on 12 = o\'clock. Short hand on 3 = 3 o\'clock.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['oclock-reading'],
                    correctToken: 'oclock-reading',
                    incorrectTokens: [
                      'hand-role-confusion',
                      null,
                      'oclock-halfpast-confusion',
                      'hand-role-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-003',
                  question: 'Where does the long hand point at o\'clock times?',
                  options: ['At 3', 'At 6', 'At 9', 'At 12'],
                  correctAnswer: 3,
                  explanation: 'At o\'clock times, the long hand always points to 12.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['oclock-reading', 'minute-hand-position'],
                    correctToken: 'minute-hand-position',
                    incorrectTokens: [
                      'minute-position-confusion',
                      'halfpast-oclock-confusion',
                      'minute-position-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG099-004',
                  question: 'The long hand points to 6 and short hand is between 7 and 8. What time is it?',
                  options: ['7 o\'clock', '8 o\'clock', 'Half past 7', 'Half past 8'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 7 = half past 7.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      'oclock-halfpast-confusion',
                      null,
                      'hour-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-005',
                  question: 'What time is shown when the long hand is on 12 and short hand is on 9?',
                  options: ['9 o\'clock', '12 o\'clock', 'Half past 9', 'Half past 12'],
                  correctAnswer: 0,
                  explanation: 'Long hand on 12 = o\'clock. Short hand on 9 = 9 o\'clock.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['oclock-reading'],
                    correctToken: 'oclock-reading',
                    incorrectTokens: [
                      null,
                      'hand-role-confusion',
                      'oclock-halfpast-confusion',
                      'hand-role-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-006',
                  question: 'Where does the long hand point at half past times?',
                  options: ['At 3', 'At 6', 'At 9', 'At 12'],
                  correctAnswer: 1,
                  explanation: 'At half past times, the long hand points to 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-past-reading', 'minute-hand-position'],
                    correctToken: 'minute-hand-position',
                    incorrectTokens: [
                      'minute-position-confusion',
                      null,
                      'minute-position-confusion',
                      'oclock-halfpast-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-007',
                  question: 'The clock shows 2 o\'clock. Where is the long hand pointing?',
                  options: ['At 2', 'At 6', 'At 10', 'At 12'],
                  correctAnswer: 3,
                  explanation: 'At any o\'clock time, the long hand points to 12.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['oclock-reading', 'minute-hand-position'],
                    correctToken: 'minute-hand-position',
                    incorrectTokens: [
                      'hand-role-confusion',
                      'halfpast-oclock-confusion',
                      'minute-position-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG099-008',
                  question: 'The long hand is on 6, short hand is between 10 and 11. What time is it?',
                  options: ['10 o\'clock', '11 o\'clock', 'Half past 10', 'Half past 11'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 10 = half past 10.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      'hour-identification-error',
                      null,
                      'hour-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-009',
                  question: 'Which hand shows the hour?',
                  options: ['The long hand', 'The short hand', 'Both hands', 'Neither hand'],
                  correctAnswer: 1,
                  explanation: 'The short hand (hour hand) shows what hour it is.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['clock-parts', 'hour-hand-position'],
                    correctToken: 'clock-parts',
                    incorrectTokens: [
                      'hand-role-confusion',
                      null,
                      'hand-role-confusion',
                      'clock-parts-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-010',
                  question: '1 o\'clock: Where is the short hand?',
                  options: ['On 12', 'On 1', 'On 6', 'Between 12 and 1'],
                  correctAnswer: 1,
                  explanation: 'At 1 o\'clock, the short (hour) hand points to 1.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['oclock-reading', 'hour-hand-position'],
                    correctToken: 'hour-hand-position',
                    incorrectTokens: [
                      'hand-role-confusion',
                      null,
                      'halfpast-oclock-confusion',
                      'hour-hand-between-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-011',
                  question: 'What time is it when both hands point to 12?',
                  options: ['6 o\'clock', '12 o\'clock', 'Half past 12', 'Half past 6'],
                  correctAnswer: 1,
                  explanation: 'When both hands point to 12, it\'s 12 o\'clock.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['oclock-reading'],
                    correctToken: 'oclock-reading',
                    incorrectTokens: [
                      'time-reading-confusion',
                      null,
                      'oclock-halfpast-confusion',
                      'time-reading-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-012',
                  question: 'At half past 4, where is the short hand?',
                  options: ['On 4', 'On 5', 'Between 4 and 5', 'On 6'],
                  correctAnswer: 2,
                  explanation: 'At half past, the short hand is between two numbers - here between 4 and 5.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading', 'hour-hand-position'],
                    correctToken: 'hour-hand-position',
                    incorrectTokens: [
                      'hour-hand-halfpast-confusion',
                      'hour-identification-error',
                      null,
                      'hand-role-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-013',
                  question: 'Long hand on 12, short hand on 6. What time is it?',
                  options: ['6 o\'clock', '12 o\'clock', 'Half past 6', 'Half past 12'],
                  correctAnswer: 0,
                  explanation: 'Long hand on 12 = o\'clock. Short hand on 6 = 6 o\'clock.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['oclock-reading'],
                    correctToken: 'oclock-reading',
                    incorrectTokens: [
                      null,
                      'hand-role-confusion',
                      'six-position-confusion',
                      'hand-role-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-014',
                  question: 'Which shows half past 1?',
                  options: ['Long hand on 12, short hand on 1', 'Long hand on 6, short hand between 1 and 2', 'Long hand on 1, short hand on 6', 'Long hand on 6, short hand on 1'],
                  correctAnswer: 1,
                  explanation: 'Half past = long hand on 6. Short hand moves between 1 and 2.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      null,
                      'hand-role-confusion',
                      'hour-hand-halfpast-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-015',
                  question: 'What comes after 11 o\'clock?',
                  options: ['10 o\'clock', '12 o\'clock', '1 o\'clock', 'Half past 11'],
                  correctAnswer: 1,
                  explanation: 'After 11 o\'clock comes 12 o\'clock.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['time-sequence'],
                    correctToken: 'time-sequence',
                    incorrectTokens: [
                      'sequence-backward-error',
                      null,
                      'sequence-skip-error',
                      'oclock-halfpast-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-016',
                  question: 'Long hand on 6, short hand between 5 and 6. What time is it?',
                  options: ['5 o\'clock', '6 o\'clock', 'Half past 5', 'Half past 6'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 5 = half past 5.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      'hour-identification-error',
                      null,
                      'hour-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-017',
                  question: 'School starts at 9 o\'clock. Where will the long hand be?',
                  options: ['On 9', 'On 3', 'On 6', 'On 12'],
                  correctAnswer: 3,
                  explanation: 'At any o\'clock time, the long hand is on 12.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['oclock-reading', 'minute-hand-position'],
                    correctToken: 'minute-hand-position',
                    incorrectTokens: [
                      'hand-role-confusion',
                      'minute-position-confusion',
                      'halfpast-oclock-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG099-018',
                  question: 'What comes after 12 o\'clock?',
                  options: ['13 o\'clock', '1 o\'clock', '11 o\'clock', 'Half past 12'],
                  correctAnswer: 1,
                  explanation: 'After 12 o\'clock, the clock goes back to 1 o\'clock.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['time-sequence'],
                    correctToken: 'time-sequence',
                    incorrectTokens: [
                      'twelve-hour-clock-confusion',
                      null,
                      'sequence-backward-error',
                      'oclock-halfpast-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-019',
                  question: 'The short hand is between 3 and 4, and long hand is on 6. What time is it?',
                  options: ['3 o\'clock', '4 o\'clock', 'Half past 3', 'Half past 4'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 3 = half past 3.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      'hour-identification-error',
                      null,
                      'hour-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG099-020',
                  question: 'Bedtime is at half past 7. Where will the long hand be?',
                  options: ['On 7', 'On 12', 'On 6', 'Between 7 and 8'],
                  correctAnswer: 2,
                  explanation: 'At half past times, the long hand always points to 6.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading', 'minute-hand-position'],
                    correctToken: 'minute-hand-position',
                    incorrectTokens: [
                      'hand-role-confusion',
                      'oclock-halfpast-confusion',
                      null,
                      'hand-role-confusion',
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
