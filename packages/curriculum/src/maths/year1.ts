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
              id: 'VCMNA087',
              code: 'VCMNA087',
              title: 'Count Collections to 100',
              description: 'Count collections to 100 by partitioning numbers using place value',
              content: `# Counting Collections

When we have lots of things to count, we can use clever tricks to make counting easier!

## Grouping to Count

Instead of counting one by one, we can make groups:
- **Groups of 10** are easiest to count
- **Groups of 5** are helpful too
- **Groups of 2** help us count faster

## Counting a Big Collection

Imagine you have a jar of marbles. How would you count them?

1. **Make piles of 10** - This is the best way!
2. **Count the piles of 10** - Each pile = 10
3. **Count the leftovers** - These are ones

### Example

🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 = 10 marbles
🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 = 10 marbles
🔵🔵🔵🔵🔵 = 5 marbles

**Total: 10 + 10 + 5 = 25 marbles!**

## Why Grouping Helps

| Method | How it works |
|--------|--------------|
| Count by 1s | 1, 2, 3, 4... (slow!) |
| Count by 10s | 10, 20, 30... (fast!) |
| Count by 5s | 5, 10, 15... (medium) |

## Making Equal Groups

When you have 24 things, you can make:
- **2 groups of 10** (that's 20)
- **4 ones left over**
- So 24 = 2 tens and 4 ones!`,
              keyPoints: [
                'Grouping objects makes counting easier and faster',
                'Groups of 10 are the most helpful for counting',
                'Count the groups, then count the leftovers',
                'Any number can be split into tens and ones'
              ],
              knowledgeTokens: [
                {
                  id: 'grouping-by-tens',
                  name: 'Grouping by Tens',
                  description: 'Organise objects into groups of 10 for easier counting',
                },
                {
                  id: 'grouping-by-fives',
                  name: 'Grouping by Fives',
                  description: 'Organise objects into groups of 5 for counting',
                },
                {
                  id: 'grouping-by-twos',
                  name: 'Grouping by Twos',
                  description: 'Organise objects into groups of 2 for counting',
                },
                {
                  id: 'counting-collections',
                  name: 'Counting Collections',
                  description: 'Count large collections accurately using groups',
                  prerequisites: ['grouping-by-tens'],
                },
                {
                  id: 'partitioning-numbers',
                  name: 'Partitioning Numbers',
                  description: 'Break numbers into tens and ones',
                  prerequisites: ['grouping-by-tens'],
                },
                {
                  id: 'estimation-collections',
                  name: 'Estimating Collections',
                  description: 'Make reasonable guesses about quantity before counting',
                },
              ],
              examples: [
                {
                  problem: 'Count this collection: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 🍎🍎🍎🍎🍎🍎🍎',
                  solution: '17 apples',
                  explanation: 'First group: 10 apples. Leftovers: 7 apples. Total: 10 + 7 = 17'
                },
                {
                  problem: 'You have 35 stickers. How many groups of 10 can you make?',
                  solution: '3 groups of 10, with 5 left over',
                  explanation: '35 = 30 + 5 = 3 tens + 5 ones. So 3 groups of 10 with 5 remaining.'
                }
              ],
              questions: [
                {
                  id: 'VCMNA087-001',
                  question: 'You have 10 red apples and 10 green apples. How many apples altogether?',
                  options: ['10', '15', '20', '25'],
                  correctAnswer: 2,
                  explanation: '10 + 10 = 20. Two groups of 10 make 20!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'addition-error',
                      'addition-error',
                      null,
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-002',
                  question: 'Which is the BEST way to count 40 toys quickly?',
                  options: ['Count by 1s', 'Count by 10s', 'Count by 3s', 'Guess'],
                  correctAnswer: 1,
                  explanation: 'Counting by 10s is fastest for large collections. 10, 20, 30, 40!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'inefficient-counting-strategy',
                      null,
                      'inefficient-counting-strategy',
                      'estimation-collections',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-003',
                  question: 'Sam made 2 piles of 10 blocks and has 3 blocks left over. How many blocks altogether?',
                  options: ['13', '23', '32', '20'],
                  correctAnswer: 1,
                  explanation: '2 tens = 20, plus 3 ones = 23 blocks.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'counting-collections'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      'place-value-confusion',
                      null,
                      'digit-reversal',
                      'ones-forgotten',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-004',
                  question: 'How many groups of 5 can you make from 15 pencils?',
                  options: ['2 groups', '3 groups', '4 groups', '5 groups'],
                  correctAnswer: 1,
                  explanation: '15 ÷ 5 = 3. You can make 3 groups of 5 pencils.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['grouping-by-fives', 'counting-collections'],
                    correctToken: 'grouping-by-fives',
                    incorrectTokens: [
                      'grouping-error',
                      null,
                      'grouping-error',
                      'grouping-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-005',
                  question: 'You see 3 bags with 10 lollies in each bag. How many lollies in total?',
                  options: ['13', '30', '33', '10'],
                  correctAnswer: 1,
                  explanation: '3 groups of 10 = 30. Count by 10s: 10, 20, 30!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'addition-vs-multiplication-confusion',
                      null,
                      'addition-vs-multiplication-confusion',
                      'misunderstanding-groups',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-006',
                  question: '27 counters. How many groups of 10 can you make, and how many are left over?',
                  options: ['2 groups, 7 left', '7 groups, 2 left', '3 groups, 0 left', '1 group, 17 left'],
                  correctAnswer: 0,
                  explanation: '27 = 2 tens + 7 ones. So 2 groups of 10 with 7 left over.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'grouping-by-tens'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'digit-reversal',
                      'estimation-error',
                      'partitioning-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-007',
                  question: 'Which shows 34 stars correctly grouped?',
                  options: ['4 groups of 10, 3 left', '3 groups of 10, 4 left', '34 groups of 1', '30 groups of 1, 4 left'],
                  correctAnswer: 1,
                  explanation: '34 = 3 tens + 4 ones. So 3 groups of 10 with 4 left over.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'grouping-by-tens'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      'digit-reversal',
                      null,
                      'inefficient-counting-strategy',
                      'inefficient-counting-strategy',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-008',
                  question: 'Mia counted 4 groups of 10 stickers and 6 loose stickers. How many stickers does she have?',
                  options: ['46', '64', '40', '10'],
                  correctAnswer: 0,
                  explanation: '4 tens = 40, plus 6 ones = 46 stickers.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'counting-collections'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'digit-reversal',
                      'ones-forgotten',
                      'misunderstanding-groups',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-009',
                  question: 'There are about 50 beans in a jar. Which could be the exact count?',
                  options: ['12 beans', '48 beans', '85 beans', '5 beans'],
                  correctAnswer: 1,
                  explanation: '48 is close to 50. The other numbers are too far away from 50.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['estimation-collections'],
                    correctToken: 'estimation-collections',
                    incorrectTokens: [
                      'estimation-too-low',
                      null,
                      'estimation-too-high',
                      'estimation-too-low',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-010',
                  question: 'How many groups of 2 can you make from 8 socks?',
                  options: ['2 groups', '3 groups', '4 groups', '8 groups'],
                  correctAnswer: 2,
                  explanation: '8 ÷ 2 = 4. You can make 4 groups of 2 (4 pairs of socks!).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['grouping-by-twos'],
                    correctToken: 'grouping-by-twos',
                    incorrectTokens: [
                      'grouping-error',
                      'grouping-error',
                      null,
                      'misunderstanding-groups',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-011',
                  question: '5 groups of 10 cubes equals how many cubes?',
                  options: ['15', '50', '55', '510'],
                  correctAnswer: 1,
                  explanation: '5 × 10 = 50. Count by 10s: 10, 20, 30, 40, 50!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'addition-vs-multiplication-confusion',
                      null,
                      'addition-vs-multiplication-confusion',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-012',
                  question: 'Which collection has the MOST objects?',
                  options: ['2 groups of 10', '3 groups of 5', '25 ones', '1 group of 10 and 8 ones'],
                  correctAnswer: 2,
                  explanation: '2 × 10 = 20, 3 × 5 = 15, 25 ones = 25, 10 + 8 = 18. 25 is the most!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['counting-collections', 'partitioning-numbers'],
                    correctToken: 'counting-collections',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-013',
                  question: 'Tom has 52 marbles. He puts them in groups of 10. How many marbles are NOT in a group of 10?',
                  options: ['2 marbles', '5 marbles', '10 marbles', '50 marbles'],
                  correctAnswer: 0,
                  explanation: '52 = 5 tens + 2 ones. So 2 marbles are left over (not in a group of 10).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'grouping-by-tens'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'tens-ones-confusion',
                      'misunderstanding-question',
                      'misunderstanding-question',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-014',
                  question: 'A farmer counts eggs in groups of 10. She counts "10, 20, 30, 40" and has 7 left. How many eggs?',
                  options: ['40 eggs', '47 eggs', '74 eggs', '107 eggs'],
                  correctAnswer: 1,
                  explanation: '4 groups of 10 = 40, plus 7 more = 47 eggs.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'counting-collections',
                    incorrectTokens: [
                      'ones-forgotten',
                      null,
                      'digit-reversal',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-015',
                  question: 'How many different ways can you group 20 objects?',
                  options: ['Only 1 way', '2 ways', 'Many ways', 'No ways'],
                  correctAnswer: 2,
                  explanation: '20 can be grouped as: 2 tens, 4 fives, 10 twos, 20 ones, and more!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['counting-collections', 'partitioning-numbers'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      'fixed-thinking-error',
                      'fixed-thinking-error',
                      null,
                      'misunderstanding-question',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-016',
                  question: 'Emma has 6 bags of 10 oranges and 9 loose oranges. How many oranges altogether?',
                  options: ['69', '96', '15', '60'],
                  correctAnswer: 0,
                  explanation: '6 tens = 60, plus 9 ones = 69 oranges.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'counting-collections'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'digit-reversal',
                      'addition-vs-multiplication-confusion',
                      'ones-forgotten',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-017',
                  question: 'Which is the same as 73?',
                  options: ['7 groups of 10 and 3 ones', '3 groups of 10 and 7 ones', '73 groups of 10', '7 groups of 3'],
                  correctAnswer: 0,
                  explanation: '73 = 7 tens + 3 ones = 7 groups of 10 and 3 ones.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['partitioning-numbers'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'digit-reversal',
                      'place-value-confusion',
                      'misunderstanding-groups',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-018',
                  question: 'You need to count 86 buttons. What groups would be fastest?',
                  options: ['Groups of 1', 'Groups of 2', 'Groups of 10', 'Groups of 3'],
                  correctAnswer: 2,
                  explanation: 'Groups of 10 are fastest! 10, 20, 30, 40, 50, 60, 70, 80... then add 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'inefficient-counting-strategy',
                      'inefficient-counting-strategy',
                      null,
                      'inefficient-counting-strategy',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-019',
                  question: '9 groups of 10 plus 9 ones equals?',
                  options: ['99', '18', '90', '909'],
                  correctAnswer: 0,
                  explanation: '9 × 10 = 90, plus 9 = 99. This is the biggest two-digit number!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['partitioning-numbers', 'grouping-by-tens'],
                    correctToken: 'partitioning-numbers',
                    incorrectTokens: [
                      null,
                      'addition-vs-multiplication-confusion',
                      'ones-forgotten',
                      'place-value-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA087-020',
                  question: 'A teacher has 100 pencils to share. How many groups of 10 is this?',
                  options: ['1 group', '10 groups', '100 groups', '1000 groups'],
                  correctAnswer: 1,
                  explanation: '100 ÷ 10 = 10. There are 10 groups of 10 pencils in 100.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['grouping-by-tens', 'counting-collections'],
                    correctToken: 'grouping-by-tens',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'place-value-confusion',
                      'place-value-confusion',
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
        {
          id: 'sharing-division',
          title: 'Sharing and Division',
          description: 'Understanding equal sharing and grouping',
          sections: [
            {
              id: 'VCMNA090',
              code: 'VCMNA090',
              title: 'Sharing Equally',
              description: 'Represent and solve simple addition and subtraction problems using a range of strategies including counting on, partitioning and rearranging parts',
              content: `# Sharing Fairly!

When we share, everyone gets the same amount. That's called **fair sharing** or **equal sharing**.

## What is Equal Sharing?

If you have 6 cookies and 2 friends, you can share fairly:
- Each friend gets 3 cookies
- 3 + 3 = 6 ✓

## Sharing Strategies

### Deal Out One at a Time
Like dealing cards - give one to each person, then another, until they're all gone!

### Make Groups
Put things into equal groups. If sharing 8 toys between 2 boxes:
- 4 toys in each box
- 4 + 4 = 8 ✓

### Use Pictures
Draw circles for people, then draw dots for items shared equally.

## Checking Fair Shares

Ask yourself:
- Does everyone have the same amount?
- Did I use all the items?
- Can I count to check? (2 + 2 + 2 = 6)

## Examples

| Total Items | People | Each Gets |
|-------------|--------|-----------|
| 4 apples | 2 people | 2 each |
| 6 pencils | 3 people | 2 each |
| 10 stickers | 2 people | 5 each |
| 8 grapes | 4 people | 2 each |`,
              keyPoints: [
                'Equal sharing means everyone gets the same amount',
                'We can share by dealing out one at a time',
                'We can make equal groups',
                'Check: count each group to make sure they match'
              ],
              knowledgeTokens: [
                {
                  id: 'equal-sharing-concept',
                  name: 'Equal Sharing Concept',
                  description: 'Understanding that sharing means equal parts for all',
                },
                {
                  id: 'sharing-between-two',
                  name: 'Sharing Between Two',
                  description: 'Dividing items fairly between 2 people',
                  prerequisites: ['equal-sharing-concept'],
                },
                {
                  id: 'sharing-small-groups',
                  name: 'Sharing in Small Groups',
                  description: 'Dividing items fairly among 3-4 people',
                  prerequisites: ['sharing-between-two'],
                },
                {
                  id: 'making-equal-groups',
                  name: 'Making Equal Groups',
                  description: 'Creating groups with the same number of items',
                  prerequisites: ['equal-sharing-concept'],
                },
                {
                  id: 'checking-fair-shares',
                  name: 'Checking Fair Shares',
                  description: 'Verifying that shares are equal',
                  prerequisites: ['equal-sharing-concept'],
                },
              ],
              examples: [
                {
                  problem: 'Share 8 strawberries between 2 children fairly.',
                  solution: '4 strawberries each',
                  explanation: '8 shared between 2 = 4 each. Check: 4 + 4 = 8 ✓'
                },
                {
                  problem: 'Put 12 blocks into 3 equal groups.',
                  solution: '4 blocks in each group',
                  explanation: '12 blocks ÷ 3 groups = 4 in each group. Check: 4 + 4 + 4 = 12 ✓'
                }
              ],
              questions: [
                {
                  id: 'VCMNA090-001',
                  question: 'You have 4 cookies to share equally between 2 friends. How many does each friend get?',
                  options: ['1 cookie', '2 cookies', '3 cookies', '4 cookies'],
                  correctAnswer: 1,
                  explanation: '4 cookies shared by 2 friends = 2 cookies each. 2 + 2 = 4 ✓',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-002',
                  question: 'Share 6 apples equally between 2 baskets. How many in each basket?',
                  options: ['2 apples', '3 apples', '4 apples', '6 apples'],
                  correctAnswer: 1,
                  explanation: '6 apples ÷ 2 baskets = 3 apples in each basket.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-003',
                  question: 'Mum has 10 grapes for 2 children. How many grapes each?',
                  options: ['3 grapes', '4 grapes', '5 grapes', '10 grapes'],
                  correctAnswer: 2,
                  explanation: '10 grapes shared by 2 = 5 grapes each. 5 + 5 = 10 ✓',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-004',
                  question: '6 toys shared between 3 children. How many each?',
                  options: ['1 toy', '2 toys', '3 toys', '6 toys'],
                  correctAnswer: 1,
                  explanation: '6 toys ÷ 3 children = 2 toys each. 2 + 2 + 2 = 6 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-005',
                  question: 'Put 8 balls into 2 equal boxes. How many in each box?',
                  options: ['2 balls', '3 balls', '4 balls', '8 balls'],
                  correctAnswer: 2,
                  explanation: '8 balls ÷ 2 boxes = 4 balls in each box.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['making-equal-groups'],
                    correctToken: 'making-equal-groups',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-006',
                  question: 'Is this fair sharing? Tom gets 3 lollies, Sam gets 5 lollies.',
                  options: ['Yes, they both got lollies', 'No, they got different amounts', 'Yes, 3 + 5 = 8', 'Yes, Sam is older'],
                  correctAnswer: 1,
                  explanation: 'Fair sharing means EQUAL amounts. 3 and 5 are not equal, so it is not fair.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['equal-sharing-concept'],
                    correctToken: 'equal-sharing-concept',
                    incorrectTokens: [
                      'fair-sharing-confusion',
                      null,
                      'total-vs-share-confusion',
                      'fair-sharing-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-007',
                  question: '12 stickers shared between 2 friends. How many each?',
                  options: ['4 stickers', '5 stickers', '6 stickers', '12 stickers'],
                  correctAnswer: 2,
                  explanation: '12 stickers ÷ 2 friends = 6 stickers each. 6 + 6 = 12 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-008',
                  question: 'Make 3 equal groups from 9 counters. How many in each group?',
                  options: ['2 counters', '3 counters', '4 counters', '9 counters'],
                  correctAnswer: 1,
                  explanation: '9 counters ÷ 3 groups = 3 in each group. 3 + 3 + 3 = 9 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['making-equal-groups'],
                    correctToken: 'making-equal-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-009',
                  question: 'Dad shares 8 strawberries between 4 children. How many each?',
                  options: ['1 strawberry', '2 strawberries', '3 strawberries', '4 strawberries'],
                  correctAnswer: 1,
                  explanation: '8 strawberries ÷ 4 children = 2 each. 2 + 2 + 2 + 2 = 8 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-010',
                  question: '2 children share 14 crayons. How many crayons each?',
                  options: ['5 crayons', '6 crayons', '7 crayons', '14 crayons'],
                  correctAnswer: 2,
                  explanation: '14 crayons ÷ 2 = 7 crayons each. 7 + 7 = 14 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-011',
                  question: 'Which shows fair sharing? 6 lollies between 2 people.',
                  options: ['One person gets 4, one gets 2', 'Each person gets 3', 'One person gets 5, one gets 1', 'One person gets all 6'],
                  correctAnswer: 1,
                  explanation: 'Fair means equal. 3 each is fair because 3 + 3 = 6 and both get the same.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['equal-sharing-concept', 'checking-fair-shares'],
                    correctToken: 'checking-fair-shares',
                    incorrectTokens: [
                      'equal-parts-confusion',
                      null,
                      'equal-parts-confusion',
                      'sharing-concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-012',
                  question: '15 flowers in 3 vases, shared equally. How many in each vase?',
                  options: ['3 flowers', '4 flowers', '5 flowers', '15 flowers'],
                  correctAnswer: 2,
                  explanation: '15 flowers ÷ 3 vases = 5 flowers in each. 5 + 5 + 5 = 15 ✓',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-013',
                  question: '4 children share 20 blocks equally. How many does each child get?',
                  options: ['4 blocks', '5 blocks', '6 blocks', '10 blocks'],
                  correctAnswer: 1,
                  explanation: '20 blocks ÷ 4 children = 5 blocks each.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-014',
                  question: 'Emma has 16 stickers to share equally between herself and her friend. How many does each girl get?',
                  options: ['6 stickers', '7 stickers', '8 stickers', '16 stickers'],
                  correctAnswer: 2,
                  explanation: '16 stickers ÷ 2 girls = 8 stickers each. 8 + 8 = 16 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-015',
                  question: 'There are 12 books and 4 shelves. Put the same number on each shelf. How many on each?',
                  options: ['2 books', '3 books', '4 books', '6 books'],
                  correctAnswer: 1,
                  explanation: '12 books ÷ 4 shelves = 3 books on each shelf.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['making-equal-groups'],
                    correctToken: 'making-equal-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-016',
                  question: 'Mum baked 18 muffins for 2 plates. How many on each plate if shared equally?',
                  options: ['7 muffins', '8 muffins', '9 muffins', '18 muffins'],
                  correctAnswer: 2,
                  explanation: '18 muffins ÷ 2 plates = 9 muffins on each plate.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-017',
                  question: 'Jake, Tom, and Lucy share 12 marbles equally. How many does each child get?',
                  options: ['3 marbles', '4 marbles', '5 marbles', '6 marbles'],
                  correctAnswer: 1,
                  explanation: '12 marbles ÷ 3 children = 4 marbles each. 4 + 4 + 4 = 12 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'division-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-018',
                  question: 'Can you share 7 apples equally between 2 baskets?',
                  options: ['Yes, 3 in each with 1 left over', 'Yes, 4 in each', 'No, you cannot share 7', 'Yes, 7 in each'],
                  correctAnswer: 0,
                  explanation: '7 ÷ 2 = 3 in each basket with 1 apple left over. Not all numbers share equally!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['equal-sharing-concept'],
                    correctToken: 'equal-sharing-concept',
                    incorrectTokens: [
                      null,
                      'remainder-confusion',
                      'sharing-possibility-confusion',
                      'no-sharing-done',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-019',
                  question: '3 friends share 21 stickers. How many each?',
                  options: ['5 stickers', '6 stickers', '7 stickers', '8 stickers'],
                  correctAnswer: 2,
                  explanation: '21 stickers ÷ 3 friends = 7 stickers each. 7 + 7 + 7 = 21 ✓',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['sharing-small-groups'],
                    correctToken: 'sharing-small-groups',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA090-020',
                  question: 'Share 20 counters equally between 2 groups. How many in each group?',
                  options: ['8 counters', '9 counters', '10 counters', '20 counters'],
                  correctAnswer: 2,
                  explanation: '20 counters ÷ 2 groups = 10 counters in each group.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['sharing-between-two'],
                    correctToken: 'sharing-between-two',
                    incorrectTokens: [
                      'division-error',
                      'division-error',
                      null,
                      'no-sharing-done',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'money',
          title: 'Australian Money',
          description: 'Recognising and using Australian coins',
          sections: [
            {
              id: 'VCMNA092',
              code: 'VCMNA092',
              title: 'Australian Coins',
              description: 'Recognise, describe and order Australian coins according to their value',
              content: `# Australian Money!

Learning about money helps you buy things and save up for special treats!

## Australian Coins

We have 6 different coins in Australia:

### Small Value Coins
| Coin | Colour | Size | Value |
|------|--------|------|-------|
| 5 cents (5c) | Silver | Small | Smallest value |
| 10 cents (10c) | Silver | Medium | Two 5c coins |
| 20 cents (20c) | Silver | Big | Four 5c coins |

### Large Value Coins
| Coin | Colour | Size | Value |
|------|--------|------|-------|
| 50 cents (50c) | Silver | Biggest, 12 sides! | Five 10c coins |
| $1 (one dollar) | Gold | Medium | One hundred cents |
| $2 (two dollars) | Gold & Silver | Smallest | Two $1 coins |

## Important Facts

- 100 cents = 1 dollar ($1)
- The $2 coin is smaller than the $1 coin!
- The 50c coin has 12 sides (it's special!)
- Gold coins are worth more than silver coins

## Ordering Coins by Value

From smallest to largest value:
**5c → 10c → 20c → 50c → $1 → $2**

## Adding Coins

To find the total:
- 10c + 10c = 20c
- $1 + $1 = $2
- 50c + 50c = $1`,
              keyPoints: [
                'Australia has 6 coins: 5c, 10c, 20c, 50c, $1, $2',
                '100 cents = 1 dollar',
                'Gold coins ($1, $2) are worth more than silver coins',
                'The $2 coin is smaller than the $1 coin'
              ],
              knowledgeTokens: [
                {
                  id: 'coin-recognition',
                  name: 'Coin Recognition',
                  description: 'Identifying Australian coins by appearance',
                },
                {
                  id: 'coin-value-ordering',
                  name: 'Ordering Coins by Value',
                  description: 'Arranging coins from least to greatest value',
                  prerequisites: ['coin-recognition'],
                },
                {
                  id: 'coin-equivalence',
                  name: 'Coin Equivalence',
                  description: 'Understanding equal value combinations',
                  prerequisites: ['coin-recognition'],
                },
                {
                  id: 'simple-coin-addition',
                  name: 'Simple Coin Addition',
                  description: 'Adding small coin values',
                  prerequisites: ['coin-recognition', 'coin-value-ordering'],
                },
              ],
              examples: [
                {
                  problem: 'Which is worth more: a $1 coin or a $2 coin?',
                  solution: 'The $2 coin',
                  explanation: '$2 is worth more than $1, even though the $2 coin is smaller!'
                },
                {
                  problem: 'How many 10c coins make 50c?',
                  solution: '5 coins',
                  explanation: '10c + 10c + 10c + 10c + 10c = 50c, so 5 coins.'
                }
              ],
              questions: [
                {
                  id: 'VCMNA092-001',
                  question: 'Which coin is gold and the smallest Australian coin?',
                  options: ['5c coin', '10c coin', '$1 coin', '$2 coin'],
                  correctAnswer: 3,
                  explanation: 'The $2 coin is gold coloured and is the smallest Australian coin.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-recognition'],
                    correctToken: 'coin-recognition',
                    incorrectTokens: [
                      'colour-confusion',
                      'colour-confusion',
                      'size-value-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA092-002',
                  question: 'Which coin has 12 sides?',
                  options: ['5c coin', '20c coin', '50c coin', '$1 coin'],
                  correctAnswer: 2,
                  explanation: 'The 50 cent coin is special - it has 12 sides!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-recognition'],
                    correctToken: 'coin-recognition',
                    incorrectTokens: [
                      'coin-shape-confusion',
                      'coin-shape-confusion',
                      null,
                      'coin-shape-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-003',
                  question: 'How many cents are in 1 dollar?',
                  options: ['10 cents', '50 cents', '100 cents', '200 cents'],
                  correctAnswer: 2,
                  explanation: '100 cents = 1 dollar. That is why we write $1.00!',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'dollar-cents-confusion',
                      'dollar-cents-confusion',
                      null,
                      'dollar-cents-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-004',
                  question: 'Which is worth more: a 20c coin or a 10c coin?',
                  options: ['10c coin', '20c coin', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '20 cents is more than 10 cents. 20c > 10c.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-value-ordering'],
                    correctToken: 'coin-value-ordering',
                    incorrectTokens: [
                      'value-comparison-error',
                      null,
                      'value-comparison-error',
                      'value-comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-005',
                  question: 'Which coin is worth the LEAST?',
                  options: ['5c coin', '10c coin', '20c coin', '50c coin'],
                  correctAnswer: 0,
                  explanation: 'The 5 cent coin has the smallest value of all Australian coins.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-value-ordering'],
                    correctToken: 'coin-value-ordering',
                    incorrectTokens: [
                      null,
                      'value-ordering-error',
                      'value-ordering-error',
                      'value-ordering-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-006',
                  question: '10c + 10c = ?',
                  options: ['10c', '15c', '20c', '100c'],
                  correctAnswer: 2,
                  explanation: '10 cents plus 10 cents equals 20 cents.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['simple-coin-addition'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      'no-addition-done',
                      'addition-error',
                      null,
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-007',
                  question: 'Which coins are gold coloured?',
                  options: ['5c and 10c', '20c and 50c', '$1 and $2', 'All coins'],
                  correctAnswer: 2,
                  explanation: 'The $1 and $2 coins are gold (or gold and silver for $2). The others are silver.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['coin-recognition'],
                    correctToken: 'coin-recognition',
                    incorrectTokens: [
                      'coin-colour-confusion',
                      'coin-colour-confusion',
                      null,
                      'coin-colour-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-008',
                  question: 'Put these coins in order from smallest value to largest: 50c, 10c, 20c',
                  options: ['10c, 20c, 50c', '50c, 20c, 10c', '20c, 50c, 10c', '10c, 50c, 20c'],
                  correctAnswer: 0,
                  explanation: 'From smallest to largest value: 10c, then 20c, then 50c.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-value-ordering'],
                    correctToken: 'coin-value-ordering',
                    incorrectTokens: [
                      null,
                      'reverse-ordering',
                      'ordering-error',
                      'ordering-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-009',
                  question: 'How many 5c coins make 10c?',
                  options: ['1 coin', '2 coins', '5 coins', '10 coins'],
                  correctAnswer: 1,
                  explanation: '5c + 5c = 10c, so 2 coins of 5c make 10c.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'equivalence-error',
                      null,
                      'equivalence-error',
                      'equivalence-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-010',
                  question: 'Which is worth more: a $2 coin or two $1 coins?',
                  options: ['$2 coin', 'Two $1 coins', 'They are the same', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: '$2 = $1 + $1. They are worth exactly the same amount!',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'equivalence-error',
                      'equivalence-error',
                      null,
                      'equivalence-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-011',
                  question: '20c + 20c = ?',
                  options: ['20c', '30c', '40c', '200c'],
                  correctAnswer: 2,
                  explanation: '20 cents + 20 cents = 40 cents.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['simple-coin-addition'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      'no-addition-done',
                      'addition-error',
                      null,
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-012',
                  question: 'Is the $2 coin bigger or smaller than the $1 coin?',
                  options: ['Bigger', 'Smaller', 'Same size', 'There is no $2 coin'],
                  correctAnswer: 1,
                  explanation: 'The $2 coin is actually smaller than the $1 coin! This surprises many people.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-recognition'],
                    correctToken: 'coin-recognition',
                    incorrectTokens: [
                      'size-value-confusion',
                      null,
                      'size-value-confusion',
                      'coin-existence-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-013',
                  question: '50c + 50c = ?',
                  options: ['50c', '$1', '$1.50', '$2'],
                  correctAnswer: 1,
                  explanation: '50 cents + 50 cents = 100 cents = $1.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['simple-coin-addition', 'coin-equivalence'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      'no-addition-done',
                      null,
                      'addition-error',
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-014',
                  question: 'How many 10c coins make 50c?',
                  options: ['3 coins', '4 coins', '5 coins', '10 coins'],
                  correctAnswer: 2,
                  explanation: '10c + 10c + 10c + 10c + 10c = 50c, so 5 coins.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'equivalence-error',
                      'equivalence-error',
                      null,
                      'equivalence-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-015',
                  question: 'Which coin is the BIGGEST in size?',
                  options: ['$2 coin', '$1 coin', '50c coin', '20c coin'],
                  correctAnswer: 2,
                  explanation: 'The 50 cent coin is the biggest Australian coin in size.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['coin-recognition'],
                    correctToken: 'coin-recognition',
                    incorrectTokens: [
                      'size-value-confusion',
                      'size-value-confusion',
                      null,
                      'size-recognition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-016',
                  question: '$1 + $1 = ?',
                  options: ['$1', '$2', '$11', '$100'],
                  correctAnswer: 1,
                  explanation: 'One dollar plus one dollar equals two dollars.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['simple-coin-addition'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      'no-addition-done',
                      null,
                      'place-value-error',
                      'addition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-017',
                  question: 'How many 20c coins make $1?',
                  options: ['3 coins', '4 coins', '5 coins', '10 coins'],
                  correctAnswer: 2,
                  explanation: '20c + 20c + 20c + 20c + 20c = 100c = $1, so 5 coins.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'equivalence-error',
                      'equivalence-error',
                      null,
                      'equivalence-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-018',
                  question: 'You have a 50c coin and a 20c coin. How much money is that?',
                  options: ['50c', '60c', '70c', '520c'],
                  correctAnswer: 2,
                  explanation: '50c + 20c = 70c.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['simple-coin-addition'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      'no-addition-done',
                      'addition-error',
                      null,
                      'place-value-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-019',
                  question: 'Which is worth more: three 20c coins or one 50c coin?',
                  options: ['Three 20c coins', 'One 50c coin', 'They are the same', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Three 20c coins = 60c. One 50c coin = 50c. 60c > 50c.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['simple-coin-addition', 'coin-value-ordering'],
                    correctToken: 'simple-coin-addition',
                    incorrectTokens: [
                      null,
                      'comparison-error',
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA092-020',
                  question: 'You want to buy a toy for $2. Which coins could you use?',
                  options: ['One $2 coin', 'Two $1 coins', 'Four 50c coins', 'All of these work'],
                  correctAnswer: 3,
                  explanation: '$2 = $2. $1 + $1 = $2. 50c + 50c + 50c + 50c = $2. All equal $2!',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['coin-equivalence'],
                    correctToken: 'coin-equivalence',
                    incorrectTokens: [
                      'limited-equivalence',
                      'limited-equivalence',
                      'limited-equivalence',
                      null,
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'patterns',
          title: 'Number Patterns',
          description: 'Recognising and continuing patterns',
          sections: [
            {
              id: 'VCMNA093',
              code: 'VCMNA093',
              title: 'Investigating Number Patterns',
              description: 'Investigate and describe number patterns formed by skip counting and patterns with objects',
              content: `# Number Patterns Are Everywhere!

A pattern is something that repeats in a special way. Once you know the pattern, you can guess what comes next!

## What Makes a Pattern?

Patterns follow a **rule**. The rule tells us what to do each time.

### Adding Patterns
- 2, 4, 6, 8, ? → Rule: Add 2 each time → Next: 10
- 5, 10, 15, 20, ? → Rule: Add 5 each time → Next: 25
- 10, 20, 30, 40, ? → Rule: Add 10 each time → Next: 50

### Subtracting Patterns
- 20, 18, 16, 14, ? → Rule: Subtract 2 each time → Next: 12
- 50, 45, 40, 35, ? → Rule: Subtract 5 each time → Next: 30

## Finding the Rule

Ask yourself:
1. Are the numbers getting bigger or smaller?
2. By how much do they change each time?
3. Check: Does the same change work every time?

## Pattern Examples

| Pattern | Rule | Next 3 Numbers |
|---------|------|----------------|
| 3, 6, 9, 12 | +3 | 15, 18, 21 |
| 1, 3, 5, 7 | +2 | 9, 11, 13 |
| 100, 90, 80 | -10 | 70, 60, 50 |
| 4, 8, 12, 16 | +4 | 20, 24, 28 |`,
              keyPoints: [
                'Patterns follow a rule',
                'The rule tells us what changes each time',
                'We can continue patterns by using the rule',
                'Patterns can go up (add) or down (subtract)'
              ],
              knowledgeTokens: [
                {
                  id: 'pattern-recognition',
                  name: 'Pattern Recognition',
                  description: 'Identifying that numbers follow a pattern',
                },
                {
                  id: 'pattern-rule-identification',
                  name: 'Identifying Pattern Rules',
                  description: 'Finding the rule a pattern follows',
                  prerequisites: ['pattern-recognition'],
                },
                {
                  id: 'pattern-continuation',
                  name: 'Continuing Patterns',
                  description: 'Using the rule to find next numbers',
                  prerequisites: ['pattern-rule-identification'],
                },
                {
                  id: 'increasing-patterns',
                  name: 'Increasing Patterns',
                  description: 'Patterns where numbers get bigger',
                  prerequisites: ['pattern-recognition'],
                },
                {
                  id: 'decreasing-patterns',
                  name: 'Decreasing Patterns',
                  description: 'Patterns where numbers get smaller',
                  prerequisites: ['pattern-recognition'],
                },
              ],
              examples: [
                {
                  problem: 'What comes next? 5, 10, 15, 20, ?',
                  solution: '25',
                  explanation: 'The rule is +5 each time. 20 + 5 = 25.'
                },
                {
                  problem: 'What is the rule? 2, 4, 6, 8',
                  solution: 'Add 2',
                  explanation: '4 - 2 = 2, 6 - 4 = 2, 8 - 6 = 2. Each number is 2 more than the one before.'
                }
              ],
              questions: [
                {
                  id: 'VCMNA093-001',
                  question: 'What comes next? 2, 4, 6, 8, ?',
                  options: ['9', '10', '11', '12'],
                  correctAnswer: 1,
                  explanation: 'The pattern is counting by 2s. 8 + 2 = 10.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'counting-error',
                      'skip-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-002',
                  question: 'What comes next? 5, 10, 15, 20, ?',
                  options: ['21', '22', '25', '30'],
                  correctAnswer: 2,
                  explanation: 'The pattern is counting by 5s. 20 + 5 = 25.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'counting-error',
                      null,
                      'skip-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-003',
                  question: 'What is the rule? 10, 20, 30, 40',
                  options: ['Add 1', 'Add 5', 'Add 10', 'Add 20'],
                  correctAnswer: 2,
                  explanation: '20 - 10 = 10, 30 - 20 = 10, 40 - 30 = 10. The rule is add 10.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification'],
                    correctToken: 'pattern-rule-identification',
                    incorrectTokens: [
                      'rule-identification-error',
                      'rule-identification-error',
                      null,
                      'rule-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-004',
                  question: 'What comes next? 10, 20, 30, 40, ?',
                  options: ['45', '50', '60', '100'],
                  correctAnswer: 1,
                  explanation: 'The pattern is counting by 10s. 40 + 10 = 50.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'pattern-confusion',
                      null,
                      'skip-count-error',
                      'pattern-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-005',
                  question: 'What is the rule? 3, 6, 9, 12',
                  options: ['Add 2', 'Add 3', 'Add 4', 'Add 6'],
                  correctAnswer: 1,
                  explanation: '6 - 3 = 3, 9 - 6 = 3, 12 - 9 = 3. The rule is add 3.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification'],
                    correctToken: 'pattern-rule-identification',
                    incorrectTokens: [
                      'rule-identification-error',
                      null,
                      'rule-identification-error',
                      'rule-identification-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-006',
                  question: 'What comes next? 1, 3, 5, 7, ?',
                  options: ['8', '9', '10', '11'],
                  correctAnswer: 1,
                  explanation: 'The pattern is add 2 (odd numbers). 7 + 2 = 9.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      null,
                      'pattern-confusion',
                      'pattern-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-007',
                  question: 'This pattern goes DOWN. What comes next? 20, 18, 16, 14, ?',
                  options: ['10', '11', '12', '13'],
                  correctAnswer: 2,
                  explanation: 'The pattern is subtract 2. 14 - 2 = 12.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'decreasing-patterns'],
                    correctToken: 'decreasing-patterns',
                    incorrectTokens: [
                      'subtraction-error',
                      'subtraction-error',
                      null,
                      'subtraction-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-008',
                  question: 'What are the next TWO numbers? 4, 8, 12, ?, ?',
                  options: ['13, 14', '14, 16', '16, 20', '15, 18'],
                  correctAnswer: 2,
                  explanation: 'The rule is +4. 12 + 4 = 16, 16 + 4 = 20.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'pattern-rule-error',
                      null,
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-009',
                  question: 'What comes next? 50, 45, 40, 35, ?',
                  options: ['30', '32', '34', '40'],
                  correctAnswer: 0,
                  explanation: 'The pattern is subtract 5. 35 - 5 = 30.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'decreasing-patterns'],
                    correctToken: 'decreasing-patterns',
                    incorrectTokens: [
                      null,
                      'subtraction-error',
                      'subtraction-error',
                      'direction-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-010',
                  question: 'What is missing? 6, 12, ?, 24, 30',
                  options: ['15', '16', '18', '20'],
                  correctAnswer: 2,
                  explanation: 'The rule is +6. 12 + 6 = 18. Check: 18 + 6 = 24 ✓',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification', 'pattern-continuation'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'pattern-rule-error',
                      'pattern-rule-error',
                      null,
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-011',
                  question: 'What are the next TWO numbers? 100, 90, 80, ?, ?',
                  options: ['75, 70', '70, 60', '78, 76', '70, 65'],
                  correctAnswer: 1,
                  explanation: 'The rule is -10. 80 - 10 = 70, 70 - 10 = 60.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'decreasing-patterns'],
                    correctToken: 'decreasing-patterns',
                    incorrectTokens: [
                      'pattern-rule-error',
                      null,
                      'pattern-rule-error',
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-012',
                  question: 'Which pattern shows "add 5"?',
                  options: ['2, 4, 6, 8', '5, 10, 15, 20', '1, 5, 10, 15', '3, 6, 9, 12'],
                  correctAnswer: 1,
                  explanation: '5, 10, 15, 20 increases by 5 each time. 10-5=5, 15-10=5, 20-15=5.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification'],
                    correctToken: 'pattern-rule-identification',
                    incorrectTokens: [
                      'add-2-pattern',
                      null,
                      'irregular-pattern',
                      'add-3-pattern',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-013',
                  question: 'What comes next? 7, 14, 21, 28, ?',
                  options: ['29', '30', '35', '42'],
                  correctAnswer: 2,
                  explanation: 'The rule is +7 (counting by 7s). 28 + 7 = 35.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'pattern-rule-error',
                      null,
                      'skip-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-014',
                  question: 'What is the missing number? 10, 15, ?, 25, 30',
                  options: ['16', '18', '20', '22'],
                  correctAnswer: 2,
                  explanation: 'The rule is +5. 15 + 5 = 20. Check: 20 + 5 = 25 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification', 'pattern-continuation'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'pattern-rule-error',
                      'pattern-rule-error',
                      null,
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-015',
                  question: 'Which number does NOT belong? 2, 4, 6, 7, 8, 10',
                  options: ['4', '6', '7', '8'],
                  correctAnswer: 2,
                  explanation: 'The pattern is even numbers (count by 2). 7 is odd, so it does not belong.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-recognition'],
                    correctToken: 'pattern-recognition',
                    incorrectTokens: [
                      'pattern-member-confusion',
                      'pattern-member-confusion',
                      null,
                      'pattern-member-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-016',
                  question: 'Start at 3. Add 4 each time. What are the first 4 numbers?',
                  options: ['3, 6, 9, 12', '3, 7, 11, 15', '3, 4, 5, 6', '4, 8, 12, 16'],
                  correctAnswer: 1,
                  explanation: 'Start at 3, add 4: 3, 7 (3+4), 11 (7+4), 15 (11+4).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-continuation'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'wrong-rule-used',
                      null,
                      'counting-by-ones-error',
                      'wrong-start-number',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-017',
                  question: 'What comes next? 25, 30, 35, 40, ?',
                  options: ['41', '42', '45', '50'],
                  correctAnswer: 2,
                  explanation: 'The pattern is +5. 40 + 5 = 45.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'counting-by-ones-error',
                      'pattern-rule-error',
                      null,
                      'skip-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-018',
                  question: 'What comes next in this decreasing pattern? 30, 25, 20, 15, ?',
                  options: ['5', '10', '12', '14'],
                  correctAnswer: 1,
                  explanation: 'The pattern is -5. 15 - 5 = 10.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'decreasing-patterns'],
                    correctToken: 'decreasing-patterns',
                    incorrectTokens: [
                      'subtraction-error',
                      null,
                      'pattern-rule-error',
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-019',
                  question: 'Fill in both blanks: 8, ?, 16, ?, 24',
                  options: ['10, 18', '12, 20', '11, 19', '10, 22'],
                  correctAnswer: 1,
                  explanation: 'The rule is +4. 8+4=12, 12+4=16, 16+4=20, 20+4=24.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-rule-identification', 'pattern-continuation'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      'pattern-rule-error',
                      null,
                      'pattern-rule-error',
                      'pattern-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA093-020',
                  question: 'What are the next THREE numbers? 1, 2, 3, 4, ?, ?, ?',
                  options: ['5, 6, 7', '5, 7, 9', '6, 8, 10', '4, 5, 6'],
                  correctAnswer: 0,
                  explanation: 'The pattern is +1 (counting by ones). Next: 5, 6, 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-continuation', 'increasing-patterns'],
                    correctToken: 'pattern-continuation',
                    incorrectTokens: [
                      null,
                      'skip-count-confusion',
                      'skip-count-confusion',
                      'sequence-error',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMNA094',
              code: 'VCMNA094',
              title: 'Pattern Rules and Repetition',
              description: 'Describe patterns with shapes, objects and representations',
              content: `# Pattern Rules!

Patterns are everywhere! They can be made with shapes, colours, objects, or actions.

## Repeating Patterns

A **repeating pattern** has a part that repeats over and over.

### Shape Patterns
🔴🔵🔴🔵🔴🔵 → The pattern is: red, blue (repeat)

### Colour Patterns
Red, Yellow, Red, Yellow, Red, Yellow → Pattern unit: Red, Yellow

### Object Patterns
🍎🍌🍎🍌🍎🍌 → Apple, Banana (repeats)

## Finding the Pattern Unit

The **pattern unit** is the part that repeats.

| Full Pattern | Pattern Unit | Times Repeated |
|--------------|--------------|----------------|
| ABABAB | AB | 3 times |
| 🔺⭕🔺⭕🔺⭕ | 🔺⭕ | 3 times |
| 123123123 | 123 | 3 times |
| ABCABCABC | ABC | 3 times |

## Making Your Own Patterns

1. Choose 2 or 3 things
2. Decide the order
3. Repeat the order again and again!

## Checking Patterns

A good pattern:
- Has a clear repeating part
- The same order happens every time
- You can predict what comes next`,
              keyPoints: [
                'Repeating patterns have a part that repeats',
                'The pattern unit is the part that repeats',
                'Patterns can use shapes, colours, numbers, or objects',
                'We can predict what comes next in a pattern'
              ],
              knowledgeTokens: [
                {
                  id: 'repeating-pattern-concept',
                  name: 'Repeating Pattern Concept',
                  description: 'Understanding that patterns repeat',
                },
                {
                  id: 'pattern-unit-identification',
                  name: 'Identifying Pattern Units',
                  description: 'Finding the part that repeats',
                  prerequisites: ['repeating-pattern-concept'],
                },
                {
                  id: 'shape-patterns',
                  name: 'Shape Patterns',
                  description: 'Patterns made with shapes',
                  prerequisites: ['repeating-pattern-concept'],
                },
                {
                  id: 'pattern-prediction',
                  name: 'Pattern Prediction',
                  description: 'Predicting what comes next',
                  prerequisites: ['pattern-unit-identification'],
                },
                {
                  id: 'pattern-creation',
                  name: 'Creating Patterns',
                  description: 'Making new patterns',
                  prerequisites: ['pattern-unit-identification'],
                },
              ],
              examples: [
                {
                  problem: 'What is the pattern unit? ⭐🌙⭐🌙⭐🌙',
                  solution: '⭐🌙',
                  explanation: 'The star and moon repeat together, so ⭐🌙 is the pattern unit.'
                },
                {
                  problem: 'What comes next? 🔴🔴🔵🔴🔴🔵🔴🔴?',
                  solution: '🔵',
                  explanation: 'The pattern is red, red, blue (repeat). After red, red comes blue.'
                }
              ],
              questions: [
                {
                  id: 'VCMNA094-001',
                  question: 'What comes next? 🔴🔵🔴🔵🔴?',
                  options: ['🔴', '🔵', '🟢', '🟡'],
                  correctAnswer: 1,
                  explanation: 'The pattern is red, blue (repeat). After red comes blue.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-prediction', 'shape-patterns'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-002',
                  question: 'What is the pattern unit? ABABAB',
                  options: ['A', 'B', 'AB', 'ABA'],
                  correctAnswer: 2,
                  explanation: 'AB repeats 3 times: AB AB AB. So AB is the pattern unit.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'incomplete-unit',
                      'incomplete-unit',
                      null,
                      'too-large-unit',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-003',
                  question: 'What comes next? 🔺⭕🔺⭕🔺?',
                  options: ['🔺', '⭕', '⬜', '🔷'],
                  correctAnswer: 1,
                  explanation: 'The pattern is triangle, circle (repeat). After triangle comes circle.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-prediction', 'shape-patterns'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-004',
                  question: 'How many times does the pattern repeat? 🍎🍊🍎🍊🍎🍊',
                  options: ['2 times', '3 times', '4 times', '6 times'],
                  correctAnswer: 1,
                  explanation: 'The pattern unit is 🍎🍊. It appears 3 times.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'count-error',
                      null,
                      'count-error',
                      'counting-elements-not-units',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-005',
                  question: 'What is the pattern unit? 🔴🔴🔵🔴🔴🔵🔴🔴🔵',
                  options: ['🔴🔴', '🔴🔵', '🔴🔴🔵', '🔴'],
                  correctAnswer: 2,
                  explanation: 'Red, red, blue repeats: 🔴🔴🔵 is the pattern unit.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'incomplete-unit',
                      'incomplete-unit',
                      null,
                      'incomplete-unit',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-006',
                  question: 'What comes next? 🌟🌟🌙🌟🌟🌙🌟🌟?',
                  options: ['🌟', '🌙', '☀️', '⭐'],
                  correctAnswer: 1,
                  explanation: 'Pattern is star, star, moon. After star, star comes moon.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-007',
                  question: 'Which shows the pattern ABCABC?',
                  options: ['🔴🔵🔴🔵', '🔴🔵🟢🔴🔵🟢', '🔴🔴🔵🔵', '🔴🔵🔵🔴'],
                  correctAnswer: 1,
                  explanation: 'ABC = 3 different things that repeat. 🔴🔵🟢 then 🔴🔵🟢 again.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification', 'shape-patterns'],
                    correctToken: 'shape-patterns',
                    incorrectTokens: [
                      'ab-pattern-confusion',
                      null,
                      'pattern-structure-error',
                      'pattern-structure-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-008',
                  question: 'What are the next TWO? 🔺⬜🔺⬜🔺⬜??',
                  options: ['🔺🔺', '⬜⬜', '🔺⬜', '⬜🔺'],
                  correctAnswer: 2,
                  explanation: 'The pattern unit is 🔺⬜. It continues as 🔺⬜.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      'pattern-unit-error',
                      null,
                      'order-reversed',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-009',
                  question: 'What is the pattern unit? ABBA ABBA ABBA',
                  options: ['AB', 'ABB', 'ABBA', 'A'],
                  correctAnswer: 2,
                  explanation: 'ABBA repeats 3 times, so ABBA is the pattern unit.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'incomplete-unit',
                      'incomplete-unit',
                      null,
                      'incomplete-unit',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-010',
                  question: 'Is this a repeating pattern? 🔴🔵🟢🟡🔴🔵🟢🟡',
                  options: ['Yes', 'No', 'Cannot tell', 'Only if there are more'],
                  correctAnswer: 0,
                  explanation: 'Yes! 🔴🔵🟢🟡 appears twice, so it is a repeating pattern.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['repeating-pattern-concept'],
                    correctToken: 'repeating-pattern-concept',
                    incorrectTokens: [
                      null,
                      'pattern-recognition-error',
                      'pattern-recognition-error',
                      'pattern-recognition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-011',
                  question: 'What comes next? Big, small, small, big, small, small, big, ?',
                  options: ['Big', 'Small', 'Medium', 'Tiny'],
                  correctAnswer: 1,
                  explanation: 'Pattern: big, small, small (repeat). After big comes small.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-012',
                  question: 'How many elements are in the pattern unit? 🔴🔴🔵🔴🔴🔵',
                  options: ['2 elements', '3 elements', '4 elements', '6 elements'],
                  correctAnswer: 1,
                  explanation: 'The pattern unit is 🔴🔴🔵, which has 3 elements.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'counting-total-not-unit',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-013',
                  question: 'Which is NOT a repeating pattern?',
                  options: ['ABABAB', '123123', '🔴🔵🟢🟡🟣', 'ABCABC'],
                  correctAnswer: 2,
                  explanation: '🔴🔵🟢🟡🟣 has 5 different elements that don\'t repeat yet.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['repeating-pattern-concept'],
                    correctToken: 'repeating-pattern-concept',
                    incorrectTokens: [
                      'pattern-recognition-error',
                      'pattern-recognition-error',
                      null,
                      'pattern-recognition-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-014',
                  question: 'Complete the pattern: Clap, stomp, clap, stomp, clap, ?',
                  options: ['Clap', 'Stomp', 'Jump', 'Spin'],
                  correctAnswer: 1,
                  explanation: 'The pattern is clap, stomp (repeat). After clap comes stomp.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-015',
                  question: 'What are the next THREE? 🌈☀️🌈☀️???',
                  options: ['🌈☀️🌈', '☀️🌈☀️', '🌈🌈🌈', '☀️☀️☀️'],
                  correctAnswer: 0,
                  explanation: 'Pattern unit is 🌈☀️. Continuing: 🌈☀️🌈 (start of next repeat).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      null,
                      'start-position-error',
                      'pattern-unit-error',
                      'pattern-unit-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-016',
                  question: 'If the pattern unit is ABC, which shows the pattern correctly?',
                  options: ['AABBCC', 'ABCABC', 'AABCBC', 'AAABBB'],
                  correctAnswer: 1,
                  explanation: 'ABC repeated is ABCABC. The unit stays in the same order.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification', 'pattern-creation'],
                    correctToken: 'pattern-creation',
                    incorrectTokens: [
                      'pattern-structure-error',
                      null,
                      'pattern-structure-error',
                      'pattern-structure-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-017',
                  question: 'What comes next? 🍎🍌🍌🍎🍌🍌🍎?',
                  options: ['🍎', '🍌', '🍊', '🍇'],
                  correctAnswer: 1,
                  explanation: 'Pattern is apple, banana, banana (repeat). After apple comes banana.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-unit-error',
                      null,
                      'wrong-element',
                      'wrong-element',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-018',
                  question: 'How many times has this pattern repeated? ⭐🌙⭐🌙⭐🌙⭐🌙',
                  options: ['2 times', '3 times', '4 times', '8 times'],
                  correctAnswer: 2,
                  explanation: 'The pattern unit ⭐🌙 appears 4 times.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification'],
                    correctToken: 'pattern-unit-identification',
                    incorrectTokens: [
                      'count-error',
                      'count-error',
                      null,
                      'counting-elements-not-units',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-019',
                  question: 'Create a pattern: If your pattern unit is 🔴🔵, what comes after 🔴🔵🔴🔵?',
                  options: ['🔵🔴', '🔴🔵', '🔴🔴', '🔵🔵'],
                  correctAnswer: 1,
                  explanation: 'The pattern unit 🔴🔵 repeats, so next is 🔴🔵 again.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['pattern-creation', 'pattern-prediction'],
                    correctToken: 'pattern-creation',
                    incorrectTokens: [
                      'order-reversed',
                      null,
                      'pattern-unit-error',
                      'pattern-unit-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA094-020',
                  question: 'What is missing? 🔺⬜⭕🔺?⭕🔺⬜⭕',
                  options: ['🔺', '⬜', '⭕', '🔷'],
                  correctAnswer: 1,
                  explanation: 'The pattern unit is 🔺⬜⭕. The missing shape is ⬜.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['pattern-unit-identification', 'pattern-prediction'],
                    correctToken: 'pattern-prediction',
                    incorrectTokens: [
                      'pattern-position-error',
                      null,
                      'pattern-position-error',
                      'wrong-element',
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
        {
          id: 'measurement',
          title: 'Measuring and Comparing',
          description: 'Length, mass, and capacity',
          sections: [
            {
              id: 'VCMMG095',
              code: 'VCMMG095',
              title: 'Length, Mass and Capacity',
              description: 'Measure and compare the lengths, masses and capacities of pairs of objects using uniform informal units',
              content: `# Measuring Things!

We can measure things to find out how long, heavy, or full they are.

## Length - How Long?

Length tells us how long or tall something is.

### Ways to Measure Length
- Use your hand spans
- Use paper clips
- Use blocks or cubes
- Use your feet (heel to toe!)

**Example:** My desk is 8 hand spans long.

### Comparing Length
- **Longer** - takes up more space
- **Shorter** - takes up less space
- **Same length** - equal

## Mass - How Heavy?

Mass tells us how heavy something is.

### Ways to Measure Mass
- Use a balance scale
- Compare by holding one in each hand
- Use blocks or cubes on a balance

**Example:** The apple is heavier than 5 blocks.

### Comparing Mass
- **Heavier** - weighs more
- **Lighter** - weighs less
- **Same mass** - equal weight

## Capacity - How Much Fits?

Capacity tells us how much a container can hold.

### Ways to Measure Capacity
- Use cups
- Use scoops
- Pour from one container to another

**Example:** The jug holds 6 cups of water.

### Comparing Capacity
- **Holds more** - bigger capacity
- **Holds less** - smaller capacity`,
              keyPoints: [
                'Length tells us how long something is',
                'Mass tells us how heavy something is',
                'Capacity tells us how much a container can hold',
                'We can use objects like blocks to measure'
              ],
              knowledgeTokens: [
                {
                  id: 'length-concept',
                  name: 'Understanding Length',
                  description: 'Knowing that length measures how long or tall',
                },
                {
                  id: 'comparing-lengths',
                  name: 'Comparing Lengths',
                  description: 'Determining which is longer or shorter',
                  prerequisites: ['length-concept'],
                },
                {
                  id: 'mass-concept',
                  name: 'Understanding Mass',
                  description: 'Knowing that mass measures how heavy',
                },
                {
                  id: 'comparing-mass',
                  name: 'Comparing Mass',
                  description: 'Determining which is heavier or lighter',
                  prerequisites: ['mass-concept'],
                },
                {
                  id: 'capacity-concept',
                  name: 'Understanding Capacity',
                  description: 'Knowing that capacity measures how much fits',
                },
                {
                  id: 'comparing-capacity',
                  name: 'Comparing Capacity',
                  description: 'Determining which holds more or less',
                  prerequisites: ['capacity-concept'],
                },
                {
                  id: 'informal-units',
                  name: 'Using Informal Units',
                  description: 'Measuring with everyday objects',
                  prerequisites: ['length-concept', 'mass-concept', 'capacity-concept'],
                },
              ],
              examples: [
                {
                  problem: 'A pencil is 7 paper clips long. A pen is 10 paper clips long. Which is longer?',
                  solution: 'The pen is longer',
                  explanation: '10 paper clips is more than 7 paper clips, so the pen is longer.'
                },
                {
                  problem: 'A toy car takes 3 cubes to balance. A teddy bear takes 5 cubes. Which is heavier?',
                  solution: 'The teddy bear is heavier',
                  explanation: '5 cubes is more than 3 cubes, so the teddy bear is heavier.'
                }
              ],
              questions: [
                {
                  id: 'VCMMG095-001',
                  question: 'A book is 6 paper clips long. A ruler is 10 paper clips long. Which is longer?',
                  options: ['The book', 'The ruler', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '10 paper clips is more than 6 paper clips, so the ruler is longer.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-lengths', 'informal-units'],
                    correctToken: 'comparing-lengths',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-002',
                  question: 'Which would you use to measure how long your arm is?',
                  options: ['Cups', 'Hand spans', 'A balance scale', 'A clock'],
                  correctAnswer: 1,
                  explanation: 'Hand spans measure length. Cups measure capacity, scales measure mass.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-concept', 'informal-units'],
                    correctToken: 'informal-units',
                    incorrectTokens: [
                      'measurement-type-confusion',
                      null,
                      'measurement-type-confusion',
                      'measurement-type-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-003',
                  question: 'An apple needs 4 blocks to balance. An orange needs 3 blocks. Which is heavier?',
                  options: ['The apple', 'The orange', 'They are the same', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: '4 blocks is more than 3 blocks, so the apple is heavier.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-mass', 'informal-units'],
                    correctToken: 'comparing-mass',
                    incorrectTokens: [
                      null,
                      'comparison-reversed',
                      'comparison-error',
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-004',
                  question: 'A mug holds 2 scoops. A bowl holds 5 scoops. Which holds more?',
                  options: ['The mug', 'The bowl', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '5 scoops is more than 2 scoops, so the bowl holds more.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-capacity', 'informal-units'],
                    correctToken: 'comparing-capacity',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-005',
                  question: 'What does capacity measure?',
                  options: ['How long something is', 'How heavy something is', 'How much a container holds', 'How hot something is'],
                  correctAnswer: 2,
                  explanation: 'Capacity measures how much a container can hold.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['capacity-concept'],
                    correctToken: 'capacity-concept',
                    incorrectTokens: [
                      'concept-confusion',
                      'concept-confusion',
                      null,
                      'concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-006',
                  question: 'My desk is 12 hand spans wide. My friend\'s desk is 10 hand spans wide. Which desk is wider?',
                  options: ['My desk', 'My friend\'s desk', 'They are the same', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: '12 hand spans is more than 10, so my desk is wider.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-lengths'],
                    correctToken: 'comparing-lengths',
                    incorrectTokens: [
                      null,
                      'comparison-reversed',
                      'comparison-error',
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-007',
                  question: 'What would you use to find out which bag is heavier?',
                  options: ['A ruler', 'Paper clips', 'A balance scale', 'Cups'],
                  correctAnswer: 2,
                  explanation: 'A balance scale measures mass (how heavy something is).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['mass-concept', 'informal-units'],
                    correctToken: 'informal-units',
                    incorrectTokens: [
                      'measurement-type-confusion',
                      'measurement-type-confusion',
                      null,
                      'measurement-type-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-008',
                  question: 'A string is 15 cubes long. Another string is 15 cubes long. How do they compare?',
                  options: ['First is longer', 'Second is longer', 'They are the same length', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'Both strings are 15 cubes long, so they are the same length.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-lengths'],
                    correctToken: 'comparing-lengths',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-009',
                  question: 'Bucket A holds 8 cups. Bucket B holds 6 cups. Which bucket has less capacity?',
                  options: ['Bucket A', 'Bucket B', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '6 cups is less than 8 cups, so Bucket B holds less.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-capacity'],
                    correctToken: 'comparing-capacity',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'measurement-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-010',
                  question: 'A toy car is lighter than a toy truck. What does this tell us?',
                  options: ['The car is longer', 'The car has less mass', 'The car is taller', 'The car holds more'],
                  correctAnswer: 1,
                  explanation: 'Lighter means less mass (weighs less).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-concept', 'comparing-mass'],
                    correctToken: 'mass-concept',
                    incorrectTokens: [
                      'concept-confusion',
                      null,
                      'concept-confusion',
                      'concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-011',
                  question: 'To measure how many hand spans a table is, you should:',
                  options: ['Guess the answer', 'Use the same hand span each time', 'Use different sized spans', 'It doesn\'t matter'],
                  correctAnswer: 1,
                  explanation: 'To measure accurately, use the same unit (hand span) each time.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['informal-units'],
                    correctToken: 'informal-units',
                    incorrectTokens: [
                      'measurement-process-error',
                      null,
                      'measurement-process-error',
                      'measurement-process-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-012',
                  question: 'A pencil case needs 7 blocks to balance. A book needs 12 blocks. How much heavier is the book?',
                  options: ['3 blocks heavier', '5 blocks heavier', '7 blocks heavier', '19 blocks heavier'],
                  correctAnswer: 1,
                  explanation: '12 - 7 = 5, so the book is 5 blocks heavier.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['comparing-mass'],
                    correctToken: 'comparing-mass',
                    incorrectTokens: [
                      'subtraction-error',
                      null,
                      'subtraction-error',
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-013',
                  question: 'A jug holds 4 more cups than a bottle. The bottle holds 3 cups. How much does the jug hold?',
                  options: ['4 cups', '5 cups', '6 cups', '7 cups'],
                  correctAnswer: 3,
                  explanation: '3 + 4 = 7 cups. The jug holds 7 cups.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['comparing-capacity'],
                    correctToken: 'comparing-capacity',
                    incorrectTokens: [
                      'subtraction-error',
                      'addition-error',
                      'addition-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG095-014',
                  question: 'Two objects balance perfectly on a scale. What does this mean?',
                  options: ['One is heavier', 'One is lighter', 'They have the same mass', 'They have the same length'],
                  correctAnswer: 2,
                  explanation: 'When a scale balances, both sides have the same mass (weight).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['mass-concept', 'comparing-mass'],
                    correctToken: 'comparing-mass',
                    incorrectTokens: [
                      'balance-concept-error',
                      'balance-concept-error',
                      null,
                      'concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-015',
                  question: 'What does length measure?',
                  options: ['How heavy something is', 'How long or tall something is', 'How much something holds', 'How old something is'],
                  correctAnswer: 1,
                  explanation: 'Length measures how long, tall, or wide something is.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['length-concept'],
                    correctToken: 'length-concept',
                    incorrectTokens: [
                      'concept-confusion',
                      null,
                      'concept-confusion',
                      'concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-016',
                  question: 'A ribbon is 9 cubes long. You need 12 cubes of ribbon. How many more cubes do you need?',
                  options: ['2 cubes', '3 cubes', '4 cubes', '21 cubes'],
                  correctAnswer: 1,
                  explanation: '12 - 9 = 3 more cubes needed.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-lengths'],
                    correctToken: 'comparing-lengths',
                    incorrectTokens: [
                      'subtraction-error',
                      null,
                      'subtraction-error',
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-017',
                  question: 'Which unit would you use to measure how much water a bucket holds?',
                  options: ['Hand spans', 'Paper clips', 'Cups', 'Blocks on a scale'],
                  correctAnswer: 2,
                  explanation: 'Cups measure capacity (how much a container holds).',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['capacity-concept', 'informal-units'],
                    correctToken: 'informal-units',
                    incorrectTokens: [
                      'measurement-type-confusion',
                      'measurement-type-confusion',
                      null,
                      'measurement-type-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-018',
                  question: 'Object A weighs 6 blocks. Object B weighs 10 blocks. Object C weighs 6 blocks. Which objects have the same mass?',
                  options: ['A and B', 'B and C', 'A and C', 'None of them'],
                  correctAnswer: 2,
                  explanation: 'A and C both weigh 6 blocks, so they have the same mass.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-mass'],
                    correctToken: 'comparing-mass',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-019',
                  question: 'A box is 5 hand spans long. Another box is 8 hand spans long. How much longer is the second box?',
                  options: ['2 hand spans', '3 hand spans', '4 hand spans', '13 hand spans'],
                  correctAnswer: 1,
                  explanation: '8 - 5 = 3 hand spans longer.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-lengths'],
                    correctToken: 'comparing-lengths',
                    incorrectTokens: [
                      'subtraction-error',
                      null,
                      'subtraction-error',
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMMG095-020',
                  question: 'Why do we use the same unit when measuring?',
                  options: ['It is faster', 'So we can compare fairly', 'It looks nicer', 'We don\'t need to'],
                  correctAnswer: 1,
                  explanation: 'Using the same unit lets us compare measurements fairly and accurately.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['informal-units'],
                    correctToken: 'informal-units',
                    incorrectTokens: [
                      'measurement-purpose-error',
                      null,
                      'measurement-purpose-error',
                      'measurement-purpose-error',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMMG096',
              code: 'VCMMG096',
              title: 'Time to the Half Hour',
              description: 'Tell time to the half-hour',
              content: `# Telling Time to the Half Hour

You already know o'clock times. Now let's learn half past times!

## The Clock Hands

Remember:
- **Short hand (hour hand)** - points to the hour
- **Long hand (minute hand)** - points to the minutes

## O'Clock Times

At o'clock times:
- Long hand points to **12**
- Short hand points to the hour number

3 o'clock = Short hand on 3, long hand on 12

## Half Past Times

At half past times:
- Long hand points to **6** (halfway around)
- Short hand is **between** two numbers

Half past 3 = Long hand on 6, short hand between 3 and 4

## Why "Half Past"?

The long hand has gone halfway around the clock:
- Starts at 12 (o'clock)
- Goes halfway to 6 (half past)
- Goes all the way back to 12 (next o'clock)

## Reading Half Past

When the long hand is on 6:
1. Look at where the short hand is pointing
2. It will be between two numbers
3. Say the smaller number, then "half past"

If short hand is between 7 and 8: **Half past 7**`,
              keyPoints: [
                'At half past, the long hand points to 6',
                'At half past, the short hand is between two numbers',
                'Half past means 30 minutes past the hour',
                'Half past 3 means the short hand is between 3 and 4'
              ],
              knowledgeTokens: [
                {
                  id: 'half-past-position',
                  name: 'Half Past Hand Position',
                  description: 'Long hand on 6 means half past',
                  prerequisites: ['oclock-reading'],
                },
                {
                  id: 'half-past-reading',
                  name: 'Reading Half Past Times',
                  description: 'Telling half past times from a clock',
                  prerequisites: ['half-past-position'],
                },
                {
                  id: 'hour-hand-half-past',
                  name: 'Hour Hand at Half Past',
                  description: 'Understanding the hour hand moves between numbers',
                  prerequisites: ['half-past-position'],
                },
              ],
              examples: [
                {
                  problem: 'The long hand is on 6 and the short hand is between 2 and 3. What time is it?',
                  solution: 'Half past 2',
                  explanation: 'Long hand on 6 = half past. Short hand after 2 = half past 2.'
                },
                {
                  problem: 'Show half past 5 on a clock.',
                  solution: 'Long hand on 6, short hand between 5 and 6',
                  explanation: 'For half past, long hand always goes to 6, short hand goes past the hour.'
                }
              ],
              questions: [
                {
                  id: 'VCMMG096-001',
                  question: 'Where does the long hand point at half past any hour?',
                  options: ['On 12', 'On 3', 'On 6', 'On 9'],
                  correctAnswer: 2,
                  explanation: 'At half past times, the long hand always points to 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-past-position'],
                    correctToken: 'half-past-position',
                    incorrectTokens: [
                      'oclock-confusion',
                      'quarter-confusion',
                      null,
                      'quarter-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-002',
                  question: 'The long hand is on 6 and short hand is between 4 and 5. What time is it?',
                  options: ['4 o\'clock', '5 o\'clock', 'Half past 4', 'Half past 5'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 4 = half past 4.',
                  difficulty: 1,
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
                  id: 'VCMMG096-003',
                  question: 'At half past 7, where is the short hand?',
                  options: ['On 7', 'On 8', 'Between 7 and 8', 'On 6'],
                  correctAnswer: 2,
                  explanation: 'At half past, the short hand has moved past the hour but not to the next.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['hour-hand-half-past'],
                    correctToken: 'hour-hand-half-past',
                    incorrectTokens: [
                      'hour-hand-position-error',
                      'hour-hand-position-error',
                      null,
                      'hand-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-004',
                  question: 'What is another way to say half past 9?',
                  options: ['9 o\'clock', '9:30', '9:00', '10 o\'clock'],
                  correctAnswer: 1,
                  explanation: 'Half past 9 is the same as 9:30 (30 minutes past 9).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-equivalence-error',
                      null,
                      'time-equivalence-error',
                      'time-equivalence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-005',
                  question: 'The short hand is between 1 and 2, long hand on 6. What time is it?',
                  options: ['1 o\'clock', '2 o\'clock', 'Half past 1', 'Half past 2'],
                  correctAnswer: 2,
                  explanation: 'Long hand on 6 = half past. Short hand just past 1 = half past 1.',
                  difficulty: 1,
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
                  id: 'VCMMG096-006',
                  question: 'Lunch is at half past 12. Where will the long hand be?',
                  options: ['On 12', 'On 3', 'On 6', 'On 9'],
                  correctAnswer: 2,
                  explanation: 'At all half past times, the long hand points to 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-past-position'],
                    correctToken: 'half-past-position',
                    incorrectTokens: [
                      'oclock-confusion',
                      'quarter-confusion',
                      null,
                      'quarter-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-007',
                  question: 'What comes 30 minutes after 3 o\'clock?',
                  options: ['4 o\'clock', 'Half past 3', '3 o\'clock', 'Half past 4'],
                  correctAnswer: 1,
                  explanation: '30 minutes after 3 o\'clock is half past 3.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-sequence-error',
                      null,
                      'no-change-error',
                      'time-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-008',
                  question: 'At half past 10, the short hand is between which numbers?',
                  options: ['9 and 10', '10 and 11', '11 and 12', '10 and 12'],
                  correctAnswer: 1,
                  explanation: 'At half past 10, the short hand is between 10 and 11.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['hour-hand-half-past'],
                    correctToken: 'hour-hand-half-past',
                    incorrectTokens: [
                      'hour-hand-position-error',
                      null,
                      'hour-hand-position-error',
                      'hour-hand-position-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-009',
                  question: 'The clock shows long hand on 12, short hand on 5. What time is it?',
                  options: ['Half past 5', '5 o\'clock', 'Half past 12', '12 o\'clock'],
                  correctAnswer: 1,
                  explanation: 'Long hand on 12 means o\'clock. Short hand on 5 means 5 o\'clock.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'oclock-halfpast-confusion',
                      null,
                      'hand-role-confusion',
                      'hand-role-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-010',
                  question: 'What time comes after half past 6?',
                  options: ['6 o\'clock', 'Half past 5', '7 o\'clock', 'Half past 7'],
                  correctAnswer: 2,
                  explanation: 'After half past 6, the next hour is 7 o\'clock.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-sequence-error',
                      'time-sequence-error',
                      null,
                      'skip-oclock-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-011',
                  question: 'Which time shows the long hand on 6?',
                  options: ['2 o\'clock', '6 o\'clock', 'Half past 2', '12 o\'clock'],
                  correctAnswer: 2,
                  explanation: 'At half past times, the long hand is on 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['half-past-position'],
                    correctToken: 'half-past-position',
                    incorrectTokens: [
                      'oclock-has-long-on-12',
                      'hand-role-confusion',
                      null,
                      'oclock-has-long-on-12',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-012',
                  question: 'School starts at 9 o\'clock. Recess is at half past 10. Which is later?',
                  options: ['9 o\'clock', 'Half past 10', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Half past 10 is later than 9 o\'clock.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-comparison-error',
                      null,
                      'time-comparison-error',
                      'time-comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-013',
                  question: 'Half past 8 is the same as:',
                  options: ['8:00', '8:15', '8:30', '8:45'],
                  correctAnswer: 2,
                  explanation: 'Half past = 30 minutes past the hour. Half past 8 = 8:30.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'digital-analog-confusion',
                      'quarter-confusion',
                      null,
                      'quarter-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-014',
                  question: 'The movie starts at half past 2. You arrive at 2 o\'clock. Have you missed it?',
                  options: ['Yes', 'No, you are early', 'No, you are exactly on time', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: '2 o\'clock comes before half past 2, so you are early.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-comparison-error',
                      null,
                      'time-comparison-error',
                      'time-comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-015',
                  question: 'What time is 30 minutes before 4 o\'clock?',
                  options: ['Half past 3', 'Half past 4', '3 o\'clock', '5 o\'clock'],
                  correctAnswer: 0,
                  explanation: '30 minutes before 4 o\'clock is half past 3.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      null,
                      'before-after-confusion',
                      'subtraction-error',
                      'before-after-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-016',
                  question: 'At half past 11, what will the short hand be close to?',
                  options: ['10', '11', '12', '6'],
                  correctAnswer: 2,
                  explanation: 'At half past 11, the short hand is between 11 and 12, closer to 12.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['hour-hand-half-past'],
                    correctToken: 'hour-hand-half-past',
                    incorrectTokens: [
                      'hour-hand-position-error',
                      'hour-hand-position-error',
                      null,
                      'hand-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-017',
                  question: 'Is half past 7 in the morning or evening? (hint: it depends!)',
                  options: ['Always morning', 'Always evening', 'It could be either', 'Neither'],
                  correctAnswer: 2,
                  explanation: 'Half past 7 can be 7:30 AM (morning) or 7:30 PM (evening).',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'am-pm-confusion',
                      'am-pm-confusion',
                      null,
                      'am-pm-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-018',
                  question: 'From 1 o\'clock to half past 1, how far does the long hand move?',
                  options: ['From 12 to 3', 'From 12 to 6', 'From 12 to 9', 'It stays on 12'],
                  correctAnswer: 1,
                  explanation: 'The long hand moves from 12 (o\'clock) to 6 (half past).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['half-past-position'],
                    correctToken: 'half-past-position',
                    incorrectTokens: [
                      'quarter-confusion',
                      null,
                      'quarter-confusion',
                      'hand-movement-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-019',
                  question: 'Which list shows times in order from earliest to latest?',
                  options: ['Half past 3, 3 o\'clock, 4 o\'clock', '3 o\'clock, half past 3, 4 o\'clock', '4 o\'clock, half past 3, 3 o\'clock', 'Half past 3, 4 o\'clock, 3 o\'clock'],
                  correctAnswer: 1,
                  explanation: '3 o\'clock, then half past 3, then 4 o\'clock is the correct order.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'time-sequence-error',
                      null,
                      'reverse-order',
                      'time-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG096-020',
                  question: 'How many half-hour times are there between 1 o\'clock and 4 o\'clock?',
                  options: ['2', '3', '4', '6'],
                  correctAnswer: 1,
                  explanation: 'Half past 1, half past 2, half past 3 = 3 half-hour times.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['half-past-reading'],
                    correctToken: 'half-past-reading',
                    incorrectTokens: [
                      'counting-error',
                      null,
                      'counting-error',
                      'counting-error',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMMG097',
              code: 'VCMMG097',
              title: 'Duration and Time Units',
              description: 'Describe duration using months, weeks, days and hours',
              content: `# How Long Things Take

We can describe how long things take using different time words.

## Hours

An hour is 60 minutes.

**Things that take about 1 hour:**
- A movie (usually longer!)
- A car trip to the shops
- Playing at the park

## Days

A day is 24 hours.

**Important parts of a day:**
- Morning - when you wake up
- Afternoon - after lunch
- Evening - before bed
- Night - when you sleep

## Days of the Week

There are 7 days in a week:
1. Monday
2. Tuesday
3. Wednesday
4. Thursday
5. Friday
6. Saturday
7. Sunday

**Weekend** = Saturday and Sunday
**Weekdays** = Monday to Friday

## Weeks

A week is 7 days.

## Months

There are 12 months in a year:
1. January
2. February
3. March
4. April
5. May
6. June
7. July
8. August
9. September
10. October
11. November
12. December

## Comparing Time

**Longer times:** months > weeks > days > hours
**Example:** A month is longer than a week.`,
              keyPoints: [
                'There are 24 hours in a day',
                'There are 7 days in a week',
                'There are 12 months in a year',
                'We can compare how long things take'
              ],
              knowledgeTokens: [
                {
                  id: 'hours-concept',
                  name: 'Understanding Hours',
                  description: 'Knowing hours as a unit of time',
                },
                {
                  id: 'days-of-week',
                  name: 'Days of the Week',
                  description: 'Knowing the 7 days and their order',
                },
                {
                  id: 'weeks-concept',
                  name: 'Understanding Weeks',
                  description: 'A week is 7 days',
                  prerequisites: ['days-of-week'],
                },
                {
                  id: 'months-concept',
                  name: 'Months of the Year',
                  description: 'Knowing the 12 months and their order',
                },
                {
                  id: 'duration-comparison',
                  name: 'Comparing Duration',
                  description: 'Comparing how long different times are',
                  prerequisites: ['hours-concept', 'weeks-concept', 'months-concept'],
                },
              ],
              examples: [
                {
                  problem: 'Which is longer: a week or a day?',
                  solution: 'A week',
                  explanation: 'A week is 7 days, so it is longer than 1 day.'
                },
                {
                  problem: 'What day comes after Wednesday?',
                  solution: 'Thursday',
                  explanation: 'The days go: Monday, Tuesday, Wednesday, Thursday...'
                }
              ],
              questions: [
                {
                  id: 'VCMMG097-001',
                  question: 'How many days are in a week?',
                  options: ['5 days', '6 days', '7 days', '10 days'],
                  correctAnswer: 2,
                  explanation: 'There are 7 days in a week.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['weeks-concept'],
                    correctToken: 'weeks-concept',
                    incorrectTokens: [
                      'weekday-only-error',
                      'count-error',
                      null,
                      'count-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-002',
                  question: 'What day comes after Monday?',
                  options: ['Sunday', 'Tuesday', 'Wednesday', 'Saturday'],
                  correctAnswer: 1,
                  explanation: 'Tuesday comes after Monday.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      'day-sequence-error',
                      null,
                      'day-sequence-error',
                      'day-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-003',
                  question: 'How many months are in a year?',
                  options: ['7 months', '10 months', '12 months', '24 months'],
                  correctAnswer: 2,
                  explanation: 'There are 12 months in a year.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'days-months-confusion',
                      'count-error',
                      null,
                      'count-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-004',
                  question: 'Which is longer: an hour or a day?',
                  options: ['An hour', 'A day', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'A day is 24 hours, so a day is longer than 1 hour.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['duration-comparison'],
                    correctToken: 'duration-comparison',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-005',
                  question: 'Which days are the weekend?',
                  options: ['Monday and Tuesday', 'Friday and Saturday', 'Saturday and Sunday', 'Sunday and Monday'],
                  correctAnswer: 2,
                  explanation: 'Saturday and Sunday are the weekend days.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      'weekend-weekday-confusion',
                      'weekend-weekday-confusion',
                      null,
                      'weekend-weekday-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-006',
                  question: 'What month comes after January?',
                  options: ['December', 'February', 'March', 'June'],
                  correctAnswer: 1,
                  explanation: 'February comes after January.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'month-sequence-error',
                      null,
                      'month-sequence-error',
                      'month-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-007',
                  question: 'Which is longer: a week or a month?',
                  options: ['A week', 'A month', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'A month has about 4 weeks, so a month is longer.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['duration-comparison'],
                    correctToken: 'duration-comparison',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-008',
                  question: 'What day comes before Thursday?',
                  options: ['Friday', 'Wednesday', 'Tuesday', 'Monday'],
                  correctAnswer: 1,
                  explanation: 'Wednesday comes before Thursday.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      'before-after-confusion',
                      null,
                      'day-sequence-error',
                      'day-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-009',
                  question: 'How many hours are in a day?',
                  options: ['12 hours', '20 hours', '24 hours', '60 hours'],
                  correctAnswer: 2,
                  explanation: 'There are 24 hours in a day.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['hours-concept'],
                    correctToken: 'hours-concept',
                    incorrectTokens: [
                      'half-day-confusion',
                      'count-error',
                      null,
                      'minutes-hours-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-010',
                  question: 'In which month is Christmas?',
                  options: ['January', 'July', 'November', 'December'],
                  correctAnswer: 3,
                  explanation: 'Christmas is in December.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'month-event-confusion',
                      'month-event-confusion',
                      'month-event-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG097-011',
                  question: 'If today is Friday, what day is tomorrow?',
                  options: ['Thursday', 'Saturday', 'Sunday', 'Monday'],
                  correctAnswer: 1,
                  explanation: 'Saturday comes after Friday.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      'before-after-confusion',
                      null,
                      'day-sequence-error',
                      'day-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-012',
                  question: 'How many weekdays are there?',
                  options: ['2 days', '5 days', '7 days', '10 days'],
                  correctAnswer: 1,
                  explanation: 'Weekdays are Monday to Friday = 5 days.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      'weekend-only-count',
                      null,
                      'all-days-count',
                      'count-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-013',
                  question: 'Put these in order from shortest to longest: day, hour, week',
                  options: ['Hour, day, week', 'Day, hour, week', 'Week, day, hour', 'Hour, week, day'],
                  correctAnswer: 0,
                  explanation: 'An hour is shortest, then a day, then a week is longest.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['duration-comparison'],
                    correctToken: 'duration-comparison',
                    incorrectTokens: [
                      null,
                      'ordering-error',
                      'reverse-order',
                      'ordering-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-014',
                  question: 'What is the first month of the year?',
                  options: ['December', 'January', 'February', 'March'],
                  correctAnswer: 1,
                  explanation: 'January is the first month of the year.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'month-sequence-error',
                      null,
                      'month-sequence-error',
                      'month-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-015',
                  question: 'If today is Wednesday, what day was yesterday?',
                  options: ['Tuesday', 'Thursday', 'Monday', 'Friday'],
                  correctAnswer: 0,
                  explanation: 'Tuesday comes before Wednesday.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['days-of-week'],
                    correctToken: 'days-of-week',
                    incorrectTokens: [
                      null,
                      'before-after-confusion',
                      'day-sequence-error',
                      'day-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-016',
                  question: 'About how long is a movie?',
                  options: ['A few minutes', 'About 1-2 hours', 'A whole day', 'A whole week'],
                  correctAnswer: 1,
                  explanation: 'Most movies are about 1-2 hours long.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['hours-concept', 'duration-comparison'],
                    correctToken: 'duration-comparison',
                    incorrectTokens: [
                      'duration-estimate-error',
                      null,
                      'duration-estimate-error',
                      'duration-estimate-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-017',
                  question: 'What month comes before December?',
                  options: ['January', 'October', 'November', 'September'],
                  correctAnswer: 2,
                  explanation: 'November comes before December.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'after-december-error',
                      'month-sequence-error',
                      null,
                      'month-sequence-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-018',
                  question: 'Which takes longer: eating breakfast or sleeping at night?',
                  options: ['Eating breakfast', 'Sleeping at night', 'They take the same time', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Sleeping takes many hours. Eating breakfast takes less than an hour.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['duration-comparison'],
                    correctToken: 'duration-comparison',
                    incorrectTokens: [
                      'duration-estimate-error',
                      null,
                      'duration-estimate-error',
                      'duration-estimate-error',
                    ],
                  },
                },
                {
                  id: 'VCMMG097-019',
                  question: 'In 2 weeks, how many days is that?',
                  options: ['7 days', '10 days', '12 days', '14 days'],
                  correctAnswer: 3,
                  explanation: '1 week = 7 days. 2 weeks = 7 + 7 = 14 days.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['weeks-concept'],
                    correctToken: 'weeks-concept',
                    incorrectTokens: [
                      'one-week-only',
                      'calculation-error',
                      'calculation-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMMG097-020',
                  question: 'Put these in order from first to last in a year: March, January, December',
                  options: ['December, January, March', 'January, March, December', 'March, January, December', 'January, December, March'],
                  correctAnswer: 1,
                  explanation: 'January (month 1), March (month 3), December (month 12).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['months-concept'],
                    correctToken: 'months-concept',
                    incorrectTokens: [
                      'month-sequence-error',
                      null,
                      'month-sequence-error',
                      'month-sequence-error',
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
      id: 'statistics-probability',
      name: 'Statistics and Probability',
      chapters: [
        {
          id: 'chance',
          title: 'Chance and Data',
          description: 'Understanding chance and collecting data',
          sections: [
            {
              id: 'VCMSP100',
              code: 'VCMSP100',
              title: 'Chance Events',
              description: 'Identify outcomes of familiar events involving chance and describe them using everyday language such as "will happen", "won\'t happen" or "might happen"',
              content: `# What Might Happen?

Some things are **certain** to happen. Some things **might** happen. Some things will **never** happen!

## Chance Words

We use special words to describe how likely things are:

### Will Happen (Certain)
These things are sure to happen:
- The sun will rise tomorrow
- Monday comes after Sunday
- You will get older

### Won't Happen (Impossible)
These things cannot happen:
- You will turn into a fish
- The moon will fall down
- 2 + 2 will equal 5

### Might Happen (Possible)
These things could happen but might not:
- It might rain tomorrow
- You might win a game
- You might see a rainbow

## Comparing Chances

Some things are **more likely** than others:
- Getting a 1-6 on a dice (will happen) vs getting a 7 (won't happen)
- Sunny day in summer (likely) vs snow in summer (unlikely)

## Everyday Chance

Think about these:
- Will you eat dinner today? (will happen)
- Will you fly like a bird? (won't happen)
- Will it rain? (might happen)`,
              keyPoints: [
                '"Will happen" means it is certain',
                '"Won\'t happen" means it is impossible',
                '"Might happen" means it is possible but not certain',
                'Some things are more likely than others'
              ],
              knowledgeTokens: [
                {
                  id: 'certain-events',
                  name: 'Certain Events',
                  description: 'Things that will definitely happen',
                },
                {
                  id: 'impossible-events',
                  name: 'Impossible Events',
                  description: 'Things that cannot happen',
                },
                {
                  id: 'possible-events',
                  name: 'Possible Events',
                  description: 'Things that might or might not happen',
                },
                {
                  id: 'chance-language',
                  name: 'Using Chance Language',
                  description: 'Describing likelihood with everyday words',
                  prerequisites: ['certain-events', 'impossible-events', 'possible-events'],
                },
              ],
              examples: [
                {
                  problem: 'Will the sun set tonight?',
                  solution: 'Will happen (certain)',
                  explanation: 'The sun always sets at night. It is certain to happen.'
                },
                {
                  problem: 'Will you become invisible?',
                  solution: 'Won\'t happen (impossible)',
                  explanation: 'Humans cannot become invisible. It is impossible.'
                }
              ],
              questions: [
                {
                  id: 'VCMSP100-001',
                  question: 'Will the sun come up tomorrow morning?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'The sun always rises. It will definitely happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-002',
                  question: 'Will you turn into a frog?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'Humans cannot turn into frogs. It won\'t happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['impossible-events'],
                    correctToken: 'impossible-events',
                    incorrectTokens: [
                      'impossibility-confusion',
                      'impossibility-confusion',
                      null,
                      'impossibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-003',
                  question: 'Might it rain tomorrow?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Rain might happen or might not. It is not certain either way.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['possible-events'],
                    correctToken: 'possible-events',
                    incorrectTokens: [
                      'possibility-confusion',
                      null,
                      'possibility-confusion',
                      'possibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-004',
                  question: 'Will Tuesday come after Monday?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Tuesday always comes after Monday. It is certain.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-005',
                  question: 'Will you fly like a bird today (without an aeroplane)?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'Humans cannot fly like birds. It won\'t happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['impossible-events'],
                    correctToken: 'impossible-events',
                    incorrectTokens: [
                      'impossibility-confusion',
                      'impossibility-confusion',
                      null,
                      'impossibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-006',
                  question: 'Will you see a dog today?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'You might see a dog, but it\'s not certain. It might happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['possible-events'],
                    correctToken: 'possible-events',
                    incorrectTokens: [
                      'possibility-confusion',
                      null,
                      'possibility-confusion',
                      'possibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-007',
                  question: 'Will your birthday come this year?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Everyone has a birthday every year. It will happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-008',
                  question: 'If you flip a coin, will it land on heads?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'A coin might land on heads or tails. It might happen.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['possible-events'],
                    correctToken: 'possible-events',
                    incorrectTokens: [
                      'possibility-confusion',
                      null,
                      'possibility-confusion',
                      'possibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-009',
                  question: 'Will you need to eat food this week?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Everyone needs to eat food. It will definitely happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-010',
                  question: 'Will it snow in the middle of summer in Australia?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Very unlikely'],
                  correctAnswer: 3,
                  explanation: 'Snow in Australian summer is very unlikely but not completely impossible in some places.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['chance-language'],
                    correctToken: 'chance-language',
                    incorrectTokens: [
                      'likelihood-confusion',
                      'likelihood-confusion',
                      'likelihood-confusion',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMSP100-011',
                  question: 'Will tomorrow be a day of the week?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Tomorrow is always one of the 7 days. It is certain.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-012',
                  question: 'Will you get a 7 when rolling a normal dice (1-6)?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: 'A normal dice only has 1-6. Getting 7 is impossible.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['impossible-events'],
                    correctToken: 'impossible-events',
                    incorrectTokens: [
                      'impossibility-confusion',
                      'impossibility-confusion',
                      null,
                      'impossibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-013',
                  question: 'Will you see a rainbow today?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Rainbows are possible but not certain. It might happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['possible-events'],
                    correctToken: 'possible-events',
                    incorrectTokens: [
                      'possibility-confusion',
                      null,
                      'possibility-confusion',
                      'possibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-014',
                  question: 'Which is more likely: it will rain OR you will turn into a robot?',
                  options: ['It will rain', 'You will turn into a robot', 'They are equally likely', 'Neither can happen'],
                  correctAnswer: 0,
                  explanation: 'Rain is possible. Turning into a robot is impossible.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['chance-language'],
                    correctToken: 'chance-language',
                    incorrectTokens: [
                      null,
                      'likelihood-comparison-error',
                      'likelihood-comparison-error',
                      'likelihood-comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-015',
                  question: 'Will night come after today\'s daytime?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Night always follows day. It is certain to happen.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-016',
                  question: 'Will you win if you play a game?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'You might win or might lose a game. It\'s not certain.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['possible-events'],
                    correctToken: 'possible-events',
                    incorrectTokens: [
                      'possibility-confusion',
                      null,
                      'possibility-confusion',
                      'possibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-017',
                  question: 'Will 2 + 2 ever equal 5?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 2,
                  explanation: '2 + 2 always equals 4, never 5. It is impossible.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['impossible-events'],
                    correctToken: 'impossible-events',
                    incorrectTokens: [
                      'impossibility-confusion',
                      'impossibility-confusion',
                      null,
                      'impossibility-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-018',
                  question: 'A bag has only red balls. What colour ball will you pick?',
                  options: ['Red - will happen', 'Blue - might happen', 'Any colour - might happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'If all balls are red, you will definitely pick a red ball.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-019',
                  question: 'Will you learn something new this year?',
                  options: ['Will happen', 'Might happen', 'Won\'t happen', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Everyone learns new things. It is certain to happen.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['certain-events'],
                    correctToken: 'certain-events',
                    incorrectTokens: [
                      null,
                      'certainty-confusion',
                      'certainty-confusion',
                      'certainty-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP100-020',
                  question: 'Which word describes something that MIGHT happen?',
                  options: ['Certain', 'Impossible', 'Possible', 'Never'],
                  correctAnswer: 2,
                  explanation: 'Possible means it might happen but is not certain.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['chance-language'],
                    correctToken: 'chance-language',
                    incorrectTokens: [
                      'language-confusion',
                      'language-confusion',
                      null,
                      'language-confusion',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMSP101',
              code: 'VCMSP101',
              title: 'Asking Questions and Collecting Data',
              description: 'Choose simple questions and gather responses',
              content: `# Asking Questions and Collecting Data

We can learn interesting things by asking questions and collecting answers!

## What is Data?

**Data** is information we collect. When we ask questions and write down answers, we are collecting data.

## Choosing Good Questions

Good questions for collecting data:
- Have a small number of answers to choose from
- Can be answered by everyone
- Are interesting to find out about

### Good Questions:
- What is your favourite colour: red, blue, green, or yellow?
- How do you get to school: walk, car, bus, or bike?
- What is your favourite pet: dog, cat, fish, or bird?

### Not-So-Good Questions:
- Tell me everything about yourself (too big!)
- What do you think about... (too hard to compare)

## How to Collect Data

1. **Ask the question** to each person
2. **Record the answer** (write it down or make a mark)
3. **Count** how many of each answer

## Recording Data

Use a **tally chart** to record answers:
- Make a mark for each answer
- Use | | | | to show 5 (four lines with one across)

| Favourite Colour | Tally | Total |
|------------------|-------|-------|
| Red | III | 3 |
| Blue | IIII | 4 |
| Green | II | 2 |`,
              keyPoints: [
                'Data is information we collect',
                'Good questions have clear answer choices',
                'We record answers using tally marks',
                'We count the tallies to find totals'
              ],
              knowledgeTokens: [
                {
                  id: 'data-concept',
                  name: 'Understanding Data',
                  description: 'Knowing what data is',
                },
                {
                  id: 'question-choice',
                  name: 'Choosing Good Questions',
                  description: 'Selecting questions that work for data collection',
                },
                {
                  id: 'data-collection',
                  name: 'Collecting Data',
                  description: 'Gathering responses to questions',
                  prerequisites: ['question-choice'],
                },
                {
                  id: 'tally-marks',
                  name: 'Using Tally Marks',
                  description: 'Recording data with tally marks',
                  prerequisites: ['data-collection'],
                },
              ],
              examples: [
                {
                  problem: 'You want to find out the class\'s favourite fruit. What is a good question to ask?',
                  solution: 'What is your favourite fruit: apple, banana, orange, or grapes?',
                  explanation: 'This question has clear choices that are easy to count.'
                },
                {
                  problem: 'IIII II = how many?',
                  solution: '7',
                  explanation: 'IIII = 5, II = 2. Total = 5 + 2 = 7'
                }
              ],
              questions: [
                {
                  id: 'VCMSP101-001',
                  question: 'What is data?',
                  options: ['A type of food', 'Information we collect', 'A game', 'A colour'],
                  correctAnswer: 1,
                  explanation: 'Data is information that we collect by asking questions.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['data-concept'],
                    correctToken: 'data-concept',
                    incorrectTokens: [
                      'concept-confusion',
                      null,
                      'concept-confusion',
                      'concept-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-002',
                  question: 'Which is a good question for collecting data?',
                  options: ['Tell me everything', 'What is your favourite season: summer, autumn, winter, spring?', 'Why is the sky blue?', 'What do you think?'],
                  correctAnswer: 1,
                  explanation: 'Good questions have clear answer choices to count.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['question-choice'],
                    correctToken: 'question-choice',
                    incorrectTokens: [
                      'question-too-broad',
                      null,
                      'not-countable-question',
                      'question-too-broad',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-003',
                  question: 'How many does IIII mean in tally marks?',
                  options: ['3', '4', '5', '6'],
                  correctAnswer: 2,
                  explanation: 'IIII (four lines with one across) represents 5.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      null,
                      'tally-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-004',
                  question: 'IIII II = how many?',
                  options: ['5', '6', '7', '8'],
                  correctAnswer: 2,
                  explanation: 'IIII = 5, II = 2. Total = 5 + 2 = 7.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      null,
                      'tally-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-005',
                  question: 'Why do we collect data?',
                  options: ['To make things messy', 'To learn and find out information', 'To be loud', 'To break things'],
                  correctAnswer: 1,
                  explanation: 'We collect data to learn and find out interesting information.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['data-concept'],
                    correctToken: 'data-concept',
                    incorrectTokens: [
                      'purpose-confusion',
                      null,
                      'purpose-confusion',
                      'purpose-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-006',
                  question: 'IIII IIII = how many?',
                  options: ['8', '9', '10', '11'],
                  correctAnswer: 2,
                  explanation: 'IIII = 5, IIII = 5. Total = 5 + 5 = 10.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      null,
                      'tally-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-007',
                  question: 'What should you do FIRST when collecting data?',
                  options: ['Count the answers', 'Ask the question', 'Draw a picture', 'Go home'],
                  correctAnswer: 1,
                  explanation: 'First, ask the question. Then record answers. Then count.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['data-collection'],
                    correctToken: 'data-collection',
                    incorrectTokens: [
                      'order-confusion',
                      null,
                      'order-confusion',
                      'order-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-008',
                  question: 'III + IIII = how many altogether?',
                  options: ['7', '8', '9', '10'],
                  correctAnswer: 1,
                  explanation: 'III = 3, IIII = 5. Total = 3 + 5 = 8.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      null,
                      'tally-count-error',
                      'tally-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-009',
                  question: 'You want to know what pets your classmates have. What choices could you give?',
                  options: ['Just "dog"', 'Dog, cat, fish, bird, other', 'Any pet name', 'Numbers 1-10'],
                  correctAnswer: 1,
                  explanation: 'Good choices include common options plus "other" for anything else.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['question-choice'],
                    correctToken: 'question-choice',
                    incorrectTokens: [
                      'too-few-choices',
                      null,
                      'not-specific-enough',
                      'wrong-type-of-choices',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-010',
                  question: 'After collecting answers, what do you do?',
                  options: ['Throw them away', 'Count them', 'Hide them', 'Forget them'],
                  correctAnswer: 1,
                  explanation: 'After collecting data, we count the answers to see the results.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['data-collection'],
                    correctToken: 'data-collection',
                    incorrectTokens: [
                      'process-confusion',
                      null,
                      'process-confusion',
                      'process-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-011',
                  question: 'How do you show 5 with tally marks?',
                  options: ['IIIII', 'IIII', 'IIII I', 'V'],
                  correctAnswer: 1,
                  explanation: 'IIII (four lines with one across) shows 5.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-format-error',
                      null,
                      'tally-format-error',
                      'tally-format-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-012',
                  question: 'IIII IIII III = how many?',
                  options: ['11', '12', '13', '14'],
                  correctAnswer: 2,
                  explanation: 'IIII = 5, IIII = 5, III = 3. Total = 5 + 5 + 3 = 13.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      null,
                      'tally-count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-013',
                  question: 'Which is NOT a good data collection question?',
                  options: ['What is your favourite colour?', 'How do you come to school?', 'Describe your whole life', 'Do you like ice cream?'],
                  correctAnswer: 2,
                  explanation: '"Describe your whole life" is too big and hard to count.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['question-choice'],
                    correctToken: 'question-choice',
                    incorrectTokens: [
                      'question-evaluation-error',
                      'question-evaluation-error',
                      null,
                      'question-evaluation-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-014',
                  question: 'You surveyed 12 friends about their favourite sport. How many answers did you collect?',
                  options: ['1', '6', '12', '24'],
                  correctAnswer: 2,
                  explanation: 'Each friend gives one answer, so 12 friends = 12 answers.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['data-collection'],
                    correctToken: 'data-collection',
                    incorrectTokens: [
                      'count-error',
                      'count-error',
                      null,
                      'count-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-015',
                  question: 'How do you record answers while collecting data?',
                  options: ['Forget them', 'Write them down or use tally marks', 'Just think about them', 'Tell your friend'],
                  correctAnswer: 1,
                  explanation: 'Write down or use tally marks to record answers.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['data-collection', 'tally-marks'],
                    correctToken: 'data-collection',
                    incorrectTokens: [
                      'recording-confusion',
                      null,
                      'recording-confusion',
                      'recording-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-016',
                  question: 'IIII IIII IIII = how many?',
                  options: ['12', '13', '14', '15'],
                  correctAnswer: 3,
                  explanation: 'IIII = 5, three times. 5 + 5 + 5 = 15.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      'tally-count-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMSP101-017',
                  question: 'If 8 children chose "blue" and 6 chose "red", how many answered altogether?',
                  options: ['6', '8', '14', '2'],
                  correctAnswer: 2,
                  explanation: '8 + 6 = 14 children answered altogether.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['data-collection'],
                    correctToken: 'data-collection',
                    incorrectTokens: [
                      'addition-error',
                      'addition-error',
                      null,
                      'subtraction-instead',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-018',
                  question: 'You want to know your class\'s favourite day. What could you ask?',
                  options: ['Why do you like days?', 'What is your favourite day: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?', 'Is day good?', 'How old is day?'],
                  correctAnswer: 1,
                  explanation: 'This question gives clear choices to pick from and count.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['question-choice'],
                    correctToken: 'question-choice',
                    incorrectTokens: [
                      'question-too-vague',
                      null,
                      'question-too-vague',
                      'question-too-vague',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-019',
                  question: 'Why do we use tally marks instead of writing numbers each time?',
                  options: ['They are prettier', 'They are faster to make', 'They are louder', 'They are bigger'],
                  correctAnswer: 1,
                  explanation: 'Tally marks are quick to make and easy to count later.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-purpose-confusion',
                      null,
                      'tally-purpose-confusion',
                      'tally-purpose-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP101-020',
                  question: 'IIII I = how many?',
                  options: ['4', '5', '6', '7'],
                  correctAnswer: 2,
                  explanation: 'IIII = 5, I = 1. Total = 5 + 1 = 6.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['tally-marks'],
                    correctToken: 'tally-marks',
                    incorrectTokens: [
                      'tally-count-error',
                      'tally-count-error',
                      null,
                      'tally-count-error',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMSP102',
              code: 'VCMSP102',
              title: 'Representing Data',
              description: 'Represent data with objects and drawings where one object or drawing represents one data value. Describe the displays',
              content: `# Showing Data with Pictures!

After we collect data, we can show it with pictures and objects. This helps us see the information clearly!

## Picture Graphs

A **picture graph** uses pictures to show data.

### How to Make a Picture Graph:
1. Choose a picture for your data (like a star ⭐ or a circle ●)
2. One picture = one answer
3. Line up pictures in rows or columns
4. Add labels to explain what each row means

### Example: Favourite Fruits

| Fruit | Pictures |
|-------|----------|
| Apple | 🍎🍎🍎🍎 |
| Banana | 🍌🍌🍌 |
| Orange | 🍊🍊🍊🍊🍊 |

We can see that Orange is the most popular!

## Reading Picture Graphs

To read a picture graph:
1. Look at the pictures
2. Count how many pictures are in each row
3. Compare the rows

## Describing Data

Use words like:
- **Most** - the row with the most pictures
- **Least** - the row with the fewest pictures
- **Same** - rows with equal pictures
- **More than** - comparing two rows
- **Fewer than** - comparing two rows

### Example:
"Orange has the most. Banana has the least. Apple has more than banana."`,
              keyPoints: [
                'Picture graphs show data with pictures',
                'One picture represents one answer',
                'We can compare by counting pictures',
                'Use words like most, least, more, fewer to describe'
              ],
              knowledgeTokens: [
                {
                  id: 'picture-graph-concept',
                  name: 'Picture Graphs',
                  description: 'Understanding how picture graphs work',
                },
                {
                  id: 'reading-picture-graphs',
                  name: 'Reading Picture Graphs',
                  description: 'Getting information from picture graphs',
                  prerequisites: ['picture-graph-concept'],
                },
                {
                  id: 'comparing-data',
                  name: 'Comparing Data',
                  description: 'Using most, least, more, fewer',
                  prerequisites: ['reading-picture-graphs'],
                },
                {
                  id: 'creating-displays',
                  name: 'Creating Data Displays',
                  description: 'Making picture graphs',
                  prerequisites: ['picture-graph-concept'],
                },
              ],
              examples: [
                {
                  problem: 'Look at: Dogs ●●●●● Cats ●●● Which has more?',
                  solution: 'Dogs has more',
                  explanation: 'Dogs has 5 circles, Cats has 3. 5 is more than 3.'
                },
                {
                  problem: 'Red ★★★★ Blue ★★★★★ Green ★★ Which has the least?',
                  solution: 'Green has the least',
                  explanation: 'Green has only 2 stars, which is fewer than Red (4) or Blue (5).'
                }
              ],
              questions: [
                {
                  id: 'VCMSP102-001',
                  question: 'In a picture graph, what does one picture represent?',
                  options: ['Many things', 'Nothing', 'One answer or item', 'Everything'],
                  correctAnswer: 2,
                  explanation: 'In a basic picture graph, one picture = one answer.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['picture-graph-concept'],
                    correctToken: 'picture-graph-concept',
                    incorrectTokens: [
                      'representation-confusion',
                      'representation-confusion',
                      null,
                      'representation-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-002',
                  question: 'Dogs: 🐕🐕🐕🐕🐕 Cats: 🐈🐈🐈 How many dogs?',
                  options: ['3', '4', '5', '8'],
                  correctAnswer: 2,
                  explanation: 'Count the dog pictures: 5 dogs.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs'],
                    correctToken: 'reading-picture-graphs',
                    incorrectTokens: [
                      'count-error',
                      'count-error',
                      null,
                      'total-not-row',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-003',
                  question: 'Red: ●●●● Blue: ●● Which colour has more?',
                  options: ['Red', 'Blue', 'They are the same', 'Cannot tell'],
                  correctAnswer: 0,
                  explanation: 'Red has 4, Blue has 2. Red has more.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      null,
                      'comparison-reversed',
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-004',
                  question: 'Apples: 🍎🍎🍎 Bananas: 🍌🍌🍌🍌🍌 Which has the MOST?',
                  options: ['Apples', 'Bananas', 'They are the same', 'Cannot tell'],
                  correctAnswer: 1,
                  explanation: 'Bananas has 5, Apples has 3. Bananas has the most.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'comparison-reversed',
                      null,
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-005',
                  question: 'Stars: ⭐⭐⭐ Moons: ⭐⭐⭐ What can we say about them?',
                  options: ['Stars has more', 'Moons has more', 'They have the same amount', 'Cannot compare'],
                  correctAnswer: 2,
                  explanation: 'Both have 3 pictures. They are the same.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-006',
                  question: 'Car: 🚗🚗 Bus: 🚗🚗🚗🚗 Bike: 🚗🚗🚗 Which has the LEAST?',
                  options: ['Car', 'Bus', 'Bike', 'They are all the same'],
                  correctAnswer: 0,
                  explanation: 'Car has 2, which is fewer than Bus (4) and Bike (3).',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      null,
                      'most-least-confusion',
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-007',
                  question: 'Summer: ☀️☀️☀️☀️☀️ Winter: ☀️☀️ How many MORE chose Summer?',
                  options: ['2 more', '3 more', '5 more', '7 more'],
                  correctAnswer: 1,
                  explanation: 'Summer has 5, Winter has 2. Difference: 5 - 2 = 3 more.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'subtraction-error',
                      null,
                      'subtraction-error',
                      'addition-instead',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-008',
                  question: 'Pizza: 🍕🍕🍕🍕🍕🍕 Pasta: 🍕🍕🍕🍕 How many people answered altogether?',
                  options: ['4', '6', '10', '2'],
                  correctAnswer: 2,
                  explanation: 'Pizza (6) + Pasta (4) = 10 people altogether.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs'],
                    correctToken: 'reading-picture-graphs',
                    incorrectTokens: [
                      'partial-count',
                      'partial-count',
                      null,
                      'subtraction-instead',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-009',
                  question: 'What word describes the category with the fewest pictures?',
                  options: ['Most', 'Least', 'More', 'Many'],
                  correctAnswer: 1,
                  explanation: '"Least" means the smallest amount or fewest pictures.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'vocabulary-confusion',
                      null,
                      'vocabulary-confusion',
                      'vocabulary-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-010',
                  question: 'Walk: 👟👟👟👟👟 Car: 👟👟👟👟👟👟 Bus: 👟👟👟 Which is the most popular way to travel?',
                  options: ['Walk', 'Car', 'Bus', 'They are all the same'],
                  correctAnswer: 1,
                  explanation: 'Car has 6 pictures, which is the most.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs', 'comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'comparison-error',
                      null,
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-011',
                  question: 'If you want to show that 4 children chose "dog", how many dog pictures do you draw?',
                  options: ['1', '2', '3', '4'],
                  correctAnswer: 3,
                  explanation: 'One picture = one child. Draw 4 pictures for 4 children.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['creating-displays'],
                    correctToken: 'creating-displays',
                    incorrectTokens: [
                      'representation-error',
                      'representation-error',
                      'representation-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMSP102-012',
                  question: 'Sunny: ☀️☀️☀️☀️ Rainy: ☀️ Cloudy: ☀️☀️ Put them in order from MOST to LEAST.',
                  options: ['Sunny, Cloudy, Rainy', 'Rainy, Cloudy, Sunny', 'Cloudy, Rainy, Sunny', 'Sunny, Rainy, Cloudy'],
                  correctAnswer: 0,
                  explanation: 'Sunny (4), Cloudy (2), Rainy (1). From most to least.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      null,
                      'reverse-order',
                      'ordering-error',
                      'ordering-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-013',
                  question: 'Cricket: ⚽⚽⚽ Soccer: ⚽⚽⚽⚽⚽ Swimming: ⚽⚽⚽⚽ How many FEWER chose Cricket than Swimming?',
                  options: ['1 fewer', '2 fewer', '3 fewer', '4 fewer'],
                  correctAnswer: 0,
                  explanation: 'Swimming (4) - Cricket (3) = 1 fewer chose Cricket.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      null,
                      'subtraction-error',
                      'subtraction-error',
                      'subtraction-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-014',
                  question: 'Why do we use picture graphs?',
                  options: ['To hide information', 'To make data easy to see and compare', 'To confuse people', 'To make things harder'],
                  correctAnswer: 1,
                  explanation: 'Picture graphs help us see and compare information easily.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['picture-graph-concept'],
                    correctToken: 'picture-graph-concept',
                    incorrectTokens: [
                      'purpose-confusion',
                      null,
                      'purpose-confusion',
                      'purpose-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-015',
                  question: 'Monday: ● Tuesday: ●●● Wednesday: ●●●● Which day has the fewest?',
                  options: ['Monday', 'Tuesday', 'Wednesday', 'They all have the same'],
                  correctAnswer: 0,
                  explanation: 'Monday has 1, which is the fewest.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      null,
                      'comparison-error',
                      'comparison-error',
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-016',
                  question: 'Ice cream: 🍦🍦🍦🍦🍦🍦🍦 Cake: 🍦🍦🍦🍦🍦 How many people were surveyed in total?',
                  options: ['5', '7', '10', '12'],
                  correctAnswer: 3,
                  explanation: 'Ice cream (7) + Cake (5) = 12 people total.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs'],
                    correctToken: 'reading-picture-graphs',
                    incorrectTokens: [
                      'partial-count',
                      'partial-count',
                      'calculation-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMSP102-017',
                  question: 'If Cat has 3 pictures and Dog has 3 MORE pictures than Cat, how many pictures does Dog have?',
                  options: ['3', '4', '5', '6'],
                  correctAnswer: 3,
                  explanation: 'Cat has 3, Dog has 3 more: 3 + 3 = 6 pictures.',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'no-addition-done',
                      'addition-error',
                      'addition-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMSP102-018',
                  question: 'Spring: ●●●● Summer: ●●●●●●● Autumn: ●● Winter: ●●●● Which TWO seasons are EQUAL?',
                  options: ['Spring and Summer', 'Summer and Autumn', 'Spring and Winter', 'Autumn and Winter'],
                  correctAnswer: 2,
                  explanation: 'Spring (4) and Winter (4) both have 4 pictures.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-019',
                  question: 'Red: ★★★★★★ Blue: ★★ Green: ★★★★ Which statement is TRUE?',
                  options: ['Blue has the most', 'Green has more than Red', 'Red has the most', 'They all have the same'],
                  correctAnswer: 2,
                  explanation: 'Red has 6, Green has 4, Blue has 2. Red has the most.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs', 'comparing-data'],
                    correctToken: 'comparing-data',
                    incorrectTokens: [
                      'comparison-error',
                      'comparison-error',
                      null,
                      'comparison-error',
                    ],
                  },
                },
                {
                  id: 'VCMSP102-020',
                  question: 'Looking at a picture graph, what should you do first?',
                  options: ['Guess the answer', 'Read the labels and count the pictures', 'Close your eyes', 'Write a story'],
                  correctAnswer: 1,
                  explanation: 'First read the labels to understand what you\'re looking at, then count.',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['reading-picture-graphs'],
                    correctToken: 'reading-picture-graphs',
                    incorrectTokens: [
                      'process-confusion',
                      null,
                      'process-confusion',
                      'process-confusion',
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
