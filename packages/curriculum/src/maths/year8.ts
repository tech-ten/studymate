import { YearLevelCurriculum } from '../types';

export const year8Maths: YearLevelCurriculum = {
  yearLevel: 8,
  subject: 'maths',
  strands: [
    {
      id: 'number-algebra',
      name: 'Number and Algebra',
      chapters: [
        {
          id: 'integers-operations',
          title: 'Integers and Operations',
          description: 'Working with positive and negative integers using all four operations',
          sections: [
            {
              id: 'VCMNA273',
              code: 'VCMNA273',
              title: 'Operations with Integers',
              description: 'Carry out the four operations with rational numbers and integers, using efficient mental and written strategies and appropriate digital technologies',
              content: `# Working with Integers

Integers are whole numbers that can be positive, negative, or zero. Understanding how to perform operations with integers is essential for algebra and real-world applications.

## The Number Line

The number line extends infinitely in both directions:
$$\\leftarrow \\cdots -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 \\cdots \\rightarrow$$

- Numbers to the right are greater
- Numbers to the left are smaller
- Zero is neither positive nor negative

## Adding Integers

### Same Signs: Add and keep the sign
- (+5) + (+3) = +8
- (-5) + (-3) = -8

### Different Signs: Subtract and take the sign of the larger absolute value
- (+7) + (-4) = +3 (7 is larger, so positive)
- (-7) + (+4) = -3 (7 is larger, so negative)

## Subtracting Integers

**Rule:** Subtracting is adding the opposite!
- 5 - (+3) = 5 + (-3) = 2
- 5 - (-3) = 5 + (+3) = 8
- (-5) - (+3) = (-5) + (-3) = -8
- (-5) - (-3) = (-5) + (+3) = -2

## Multiplying Integers

| Signs | Result |
|-------|--------|
| (+) × (+) | + |
| (-) × (-) | + |
| (+) × (-) | - |
| (-) × (+) | - |

**Same signs = Positive, Different signs = Negative**

## Dividing Integers

Same rules as multiplication:
- (+12) ÷ (+4) = +3
- (-12) ÷ (-4) = +3
- (+12) ÷ (-4) = -3
- (-12) ÷ (+4) = -3`,
              keyPoints: [
                'Same signs when adding: add absolute values, keep the sign',
                'Different signs when adding: subtract absolute values, use sign of larger',
                'Subtracting is adding the opposite',
                'Same signs when multiplying/dividing: positive result',
                'Different signs when multiplying/dividing: negative result'
              ],
              knowledgeTokens: [
                {
                  id: 'integer-addition-same-signs',
                  name: 'Adding Same-Signed Integers',
                  description: 'Adding two positive or two negative integers',
                },
                {
                  id: 'integer-addition-different-signs',
                  name: 'Adding Different-Signed Integers',
                  description: 'Adding a positive and negative integer',
                  prerequisites: ['integer-addition-same-signs'],
                },
                {
                  id: 'integer-subtraction',
                  name: 'Subtracting Integers',
                  description: 'Converting subtraction to adding the opposite',
                  prerequisites: ['integer-addition-different-signs'],
                },
                {
                  id: 'integer-multiplication',
                  name: 'Multiplying Integers',
                  description: 'Understanding sign rules for multiplication',
                },
                {
                  id: 'integer-division',
                  name: 'Dividing Integers',
                  description: 'Understanding sign rules for division',
                  prerequisites: ['integer-multiplication'],
                },
                {
                  id: 'order-of-operations-integers',
                  name: 'Order of Operations with Integers',
                  description: 'Applying BODMAS/BIDMAS with negative numbers',
                  prerequisites: ['integer-addition-different-signs', 'integer-multiplication'],
                },
              ],
              examples: [
                {
                  problem: 'Calculate (-8) + 5',
                  solution: '-3',
                  explanation: 'Different signs: 8 - 5 = 3, larger is 8 (negative), so answer is -3'
                },
                {
                  problem: 'Calculate (-6) × (-4)',
                  solution: '24',
                  explanation: 'Same signs (both negative) = positive result. 6 × 4 = 24'
                }
              ],
              questions: [
                {
                  id: 'VCMNA273-001',
                  question: 'What is (-5) + (-3)?',
                  options: ['-8', '-2', '2', '8'],
                  correctAnswer: 0,
                  explanation: 'Same signs: add absolute values (5 + 3 = 8), keep the sign (negative) = -8',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-addition-same-signs'],
                    correctToken: 'integer-addition-same-signs',
                    incorrectTokens: [
                      null,
                      'subtraction-instead-of-addition',
                      'sign-error',
                      'sign-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-002',
                  question: 'What is 7 + (-4)?',
                  options: ['-11', '-3', '3', '11'],
                  correctAnswer: 2,
                  explanation: 'Different signs: 7 - 4 = 3, larger absolute value is 7 (positive), so answer is +3',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-addition-different-signs'],
                    correctToken: 'integer-addition-different-signs',
                    incorrectTokens: [
                      'sign-error',
                      'sign-error',
                      null,
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-003',
                  question: 'What is (-6) × 4?',
                  options: ['-24', '-10', '10', '24'],
                  correctAnswer: 0,
                  explanation: 'Different signs (negative × positive) = negative. 6 × 4 = 24, so answer is -24',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      null,
                      'addition-instead-of-multiplication',
                      'addition-instead-of-multiplication',
                      'sign-rule-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-004',
                  question: 'What is (-8) × (-3)?',
                  options: ['-24', '-11', '11', '24'],
                  correctAnswer: 3,
                  explanation: 'Same signs (negative × negative) = positive. 8 × 3 = 24',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'sign-rule-error',
                      'addition-instead-of-multiplication',
                      'addition-instead-of-multiplication',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA273-005',
                  question: 'What is 8 - (-5)?',
                  options: ['3', '-3', '13', '-13'],
                  correctAnswer: 2,
                  explanation: 'Subtracting a negative = adding a positive. 8 - (-5) = 8 + 5 = 13',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-subtraction'],
                    correctToken: 'integer-subtraction',
                    incorrectTokens: [
                      'double-negative-error',
                      'sign-error',
                      null,
                      'sign-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-006',
                  question: 'What is (-15) ÷ (-3)?',
                  options: ['-5', '5', '-18', '12'],
                  correctAnswer: 1,
                  explanation: 'Same signs = positive result. 15 ÷ 3 = 5',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-division'],
                    correctToken: 'integer-division',
                    incorrectTokens: [
                      'sign-rule-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-007',
                  question: 'What is (-9) + 15?',
                  options: ['-24', '-6', '6', '24'],
                  correctAnswer: 2,
                  explanation: 'Different signs: 15 - 9 = 6, larger is 15 (positive), so answer is +6',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-addition-different-signs'],
                    correctToken: 'integer-addition-different-signs',
                    incorrectTokens: [
                      'addition-instead-of-subtraction',
                      'sign-error',
                      null,
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-008',
                  question: 'What is (-4) - 7?',
                  options: ['3', '-3', '11', '-11'],
                  correctAnswer: 3,
                  explanation: '(-4) - 7 = (-4) + (-7) = -11 (same signs, add and keep negative)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-subtraction'],
                    correctToken: 'integer-subtraction',
                    incorrectTokens: [
                      'sign-error',
                      'subtraction-direction-error',
                      'sign-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA273-009',
                  question: 'What is 24 ÷ (-6)?',
                  options: ['4', '-4', '18', '-18'],
                  correctAnswer: 1,
                  explanation: 'Different signs = negative result. 24 ÷ 6 = 4, so answer is -4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-division'],
                    correctToken: 'integer-division',
                    incorrectTokens: [
                      'sign-rule-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-010',
                  question: 'What is (-7) × 5?',
                  options: ['35', '-35', '12', '-2'],
                  correctAnswer: 1,
                  explanation: 'Different signs = negative result. 7 × 5 = 35, so answer is -35',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'sign-rule-error',
                      null,
                      'addition-instead-of-multiplication',
                      'addition-instead-of-multiplication',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-011',
                  question: 'What is (-12) - (-8)?',
                  options: ['-20', '-4', '4', '20'],
                  correctAnswer: 1,
                  explanation: '(-12) - (-8) = (-12) + 8 = -4 (different signs, subtract, larger is negative)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-subtraction'],
                    correctToken: 'integer-subtraction',
                    incorrectTokens: [
                      'double-negative-error',
                      null,
                      'sign-error',
                      'double-negative-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-012',
                  question: 'Calculate: 3 × (-4) × (-2)',
                  options: ['-24', '24', '-9', '9'],
                  correctAnswer: 1,
                  explanation: '3 × (-4) = -12, then (-12) × (-2) = 24 (same signs = positive)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'multiple-sign-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-013',
                  question: 'What is (-36) ÷ 9?',
                  options: ['4', '-4', '27', '-27'],
                  correctAnswer: 1,
                  explanation: 'Different signs = negative. 36 ÷ 9 = 4, so answer is -4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-division'],
                    correctToken: 'integer-division',
                    incorrectTokens: [
                      'sign-rule-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-014',
                  question: 'Calculate: (-2)³',
                  options: ['6', '-6', '8', '-8'],
                  correctAnswer: 3,
                  explanation: '(-2)³ = (-2) × (-2) × (-2) = 4 × (-2) = -8',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'exponent-multiplication-confusion',
                      'exponent-multiplication-confusion',
                      'odd-power-sign-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA273-015',
                  question: 'What is 5 + (-8) + 3?',
                  options: ['0', '-6', '6', '16'],
                  correctAnswer: 0,
                  explanation: '5 + (-8) = -3, then (-3) + 3 = 0',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-addition-different-signs'],
                    correctToken: 'integer-addition-different-signs',
                    incorrectTokens: [
                      null,
                      'order-of-operations-error',
                      'sign-error',
                      'addition-instead-of-subtraction',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-016',
                  question: 'Calculate: (-20) ÷ (-4) ÷ (-1)',
                  options: ['5', '-5', '25', '-25'],
                  correctAnswer: 1,
                  explanation: '(-20) ÷ (-4) = 5, then 5 ÷ (-1) = -5',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['integer-division'],
                    correctToken: 'integer-division',
                    incorrectTokens: [
                      'multiple-sign-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-017',
                  question: 'What is (-6)²?',
                  options: ['-36', '36', '-12', '12'],
                  correctAnswer: 1,
                  explanation: '(-6)² = (-6) × (-6) = 36 (same signs = positive)',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'even-power-sign-error',
                      null,
                      'exponent-multiplication-confusion',
                      'exponent-multiplication-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-018',
                  question: 'Calculate: 4 × (-3) + (-2) × 5',
                  options: ['-2', '2', '-22', '22'],
                  correctAnswer: 2,
                  explanation: '4 × (-3) = -12, (-2) × 5 = -10, (-12) + (-10) = -22',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['order-of-operations-integers'],
                    correctToken: 'order-of-operations-integers',
                    incorrectTokens: [
                      'order-of-operations-error',
                      'sign-error',
                      null,
                      'sign-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-019',
                  question: 'What is (-48) ÷ 8?',
                  options: ['6', '-6', '40', '-40'],
                  correctAnswer: 1,
                  explanation: 'Different signs = negative. 48 ÷ 8 = 6, so answer is -6',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['integer-division'],
                    correctToken: 'integer-division',
                    incorrectTokens: [
                      'sign-rule-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
                {
                  id: 'VCMNA273-020',
                  question: 'Calculate: (-5) × (-2) × (-3)',
                  options: ['30', '-30', '10', '-10'],
                  correctAnswer: 1,
                  explanation: '(-5) × (-2) = 10, then 10 × (-3) = -30 (odd number of negatives = negative)',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['integer-multiplication'],
                    correctToken: 'integer-multiplication',
                    incorrectTokens: [
                      'multiple-sign-error',
                      null,
                      'wrong-operation',
                      'wrong-operation',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'indices-powers',
          title: 'Indices and Powers',
          description: 'Understanding and applying index laws',
          sections: [
            {
              id: 'VCMNA272',
              code: 'VCMNA272',
              title: 'Index Laws',
              description: 'Use index notation with numbers to establish the index laws with positive integral indices and the zero index',
              content: `# Index Notation and Laws

Indices (or powers/exponents) are a shorthand way of writing repeated multiplication.

## What is an Index?

In the expression **a^n**:
- **a** is the base
- **n** is the index (exponent/power)
- It means: multiply 'a' by itself 'n' times

**Example:** 2⁴ = 2 × 2 × 2 × 2 = 16

## Index Laws

### Law 1: Multiplying with Same Base
When multiplying, **add the indices**:
$$a^m \\times a^n = a^{m+n}$$

**Example:** 3² × 3⁴ = 3^(2+4) = 3⁶ = 729

### Law 2: Dividing with Same Base
When dividing, **subtract the indices**:
$$a^m \\div a^n = a^{m-n}$$

**Example:** 5⁷ ÷ 5³ = 5^(7-3) = 5⁴ = 625

### Law 3: Power of a Power
When raising a power to another power, **multiply the indices**:
$$(a^m)^n = a^{m \\times n}$$

**Example:** (2³)² = 2^(3×2) = 2⁶ = 64

### Law 4: Zero Index
Any number (except 0) raised to power 0 equals 1:
$$a^0 = 1$$

**Example:** 7⁰ = 1, 100⁰ = 1, (-5)⁰ = 1

### Law 5: Power of a Product
$$(ab)^n = a^n \\times b^n$$

**Example:** (2 × 3)⁴ = 2⁴ × 3⁴ = 16 × 81 = 1296`,
              keyPoints: [
                'aᵐ × aⁿ = aᵐ⁺ⁿ (add indices when multiplying same base)',
                'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (subtract indices when dividing same base)',
                '(aᵐ)ⁿ = aᵐˣⁿ (multiply indices for power of a power)',
                'a⁰ = 1 (any number to power 0 equals 1)'
              ],
              knowledgeTokens: [
                {
                  id: 'index-notation',
                  name: 'Index Notation',
                  description: 'Understanding what indices represent',
                },
                {
                  id: 'multiplication-law',
                  name: 'Multiplication Index Law',
                  description: 'Adding indices when multiplying same base',
                  prerequisites: ['index-notation'],
                },
                {
                  id: 'division-law',
                  name: 'Division Index Law',
                  description: 'Subtracting indices when dividing same base',
                  prerequisites: ['index-notation'],
                },
                {
                  id: 'power-of-power-law',
                  name: 'Power of a Power Law',
                  description: 'Multiplying indices for power of a power',
                  prerequisites: ['index-notation'],
                },
                {
                  id: 'zero-index-law',
                  name: 'Zero Index Law',
                  description: 'Understanding that a⁰ = 1',
                  prerequisites: ['division-law'],
                },
                {
                  id: 'evaluating-powers',
                  name: 'Evaluating Powers',
                  description: 'Calculating the value of expressions with indices',
                  prerequisites: ['index-notation'],
                },
              ],
              examples: [
                {
                  problem: 'Simplify 2³ × 2⁵',
                  solution: '2⁸ = 256',
                  explanation: 'Same base (2), so add indices: 3 + 5 = 8. 2⁸ = 256'
                },
                {
                  problem: 'Simplify (5²)³',
                  solution: '5⁶ = 15625',
                  explanation: 'Power of a power: multiply indices: 2 × 3 = 6. 5⁶ = 15625'
                }
              ],
              questions: [
                {
                  id: 'VCMNA272-001',
                  question: 'What is 2⁵?',
                  options: ['10', '25', '32', '64'],
                  correctAnswer: 2,
                  explanation: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['evaluating-powers'],
                    correctToken: 'evaluating-powers',
                    incorrectTokens: [
                      'base-times-index-error',
                      'base-times-index-error',
                      null,
                      'calculation-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-002',
                  question: 'Simplify: 3² × 3⁴',
                  options: ['3⁶', '3⁸', '9⁶', '9⁸'],
                  correctAnswer: 0,
                  explanation: 'Same base: add indices. 3² × 3⁴ = 3^(2+4) = 3⁶',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiplication-law'],
                    correctToken: 'multiplication-law',
                    incorrectTokens: [
                      null,
                      'indices-multiplied-error',
                      'bases-multiplied-error',
                      'both-multiplied-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-003',
                  question: 'What is 10⁰?',
                  options: ['0', '1', '10', '100'],
                  correctAnswer: 1,
                  explanation: 'Any number (except 0) to the power of 0 equals 1',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['zero-index-law'],
                    correctToken: 'zero-index-law',
                    incorrectTokens: [
                      'zero-index-confusion',
                      null,
                      'zero-index-confusion',
                      'zero-index-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-004',
                  question: 'Simplify: 5⁷ ÷ 5³',
                  options: ['5⁴', '5¹⁰', '1⁴', '5²¹'],
                  correctAnswer: 0,
                  explanation: 'Same base: subtract indices. 5⁷ ÷ 5³ = 5^(7-3) = 5⁴',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['division-law'],
                    correctToken: 'division-law',
                    incorrectTokens: [
                      null,
                      'indices-added-error',
                      'base-error',
                      'indices-multiplied-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-005',
                  question: 'Simplify: (2³)⁴',
                  options: ['2⁷', '2¹²', '8⁴', '6¹²'],
                  correctAnswer: 1,
                  explanation: 'Power of a power: multiply indices. (2³)⁴ = 2^(3×4) = 2¹²',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['power-of-power-law'],
                    correctToken: 'power-of-power-law',
                    incorrectTokens: [
                      'indices-added-error',
                      null,
                      'base-evaluated-error',
                      'base-changed-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-006',
                  question: 'What is 3⁴?',
                  options: ['12', '27', '64', '81'],
                  correctAnswer: 3,
                  explanation: '3⁴ = 3 × 3 × 3 × 3 = 81',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['evaluating-powers'],
                    correctToken: 'evaluating-powers',
                    incorrectTokens: [
                      'base-times-index-error',
                      'power-minus-one-error',
                      'wrong-base-error',
                      null,
                    ],
                  },
                },
                {
                  id: 'VCMNA272-007',
                  question: 'Simplify: 7⁵ × 7²',
                  options: ['7⁷', '7¹⁰', '7³', '49⁷'],
                  correctAnswer: 0,
                  explanation: 'Same base: add indices. 7⁵ × 7² = 7^(5+2) = 7⁷',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiplication-law'],
                    correctToken: 'multiplication-law',
                    incorrectTokens: [
                      null,
                      'indices-multiplied-error',
                      'indices-subtracted-error',
                      'bases-multiplied-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-008',
                  question: 'Simplify: 4⁸ ÷ 4⁵',
                  options: ['4³', '4¹³', '4⁴⁰', '1³'],
                  correctAnswer: 0,
                  explanation: 'Same base: subtract indices. 4⁸ ÷ 4⁵ = 4^(8-5) = 4³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-law'],
                    correctToken: 'division-law',
                    incorrectTokens: [
                      null,
                      'indices-added-error',
                      'indices-multiplied-error',
                      'base-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-009',
                  question: 'What is 5³?',
                  options: ['15', '25', '125', '243'],
                  correctAnswer: 2,
                  explanation: '5³ = 5 × 5 × 5 = 125',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['evaluating-powers'],
                    correctToken: 'evaluating-powers',
                    incorrectTokens: [
                      'base-times-index-error',
                      'power-minus-one-error',
                      null,
                      'wrong-base-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-010',
                  question: 'Simplify: (5²)³',
                  options: ['5⁵', '5⁶', '25³', '10⁶'],
                  correctAnswer: 1,
                  explanation: 'Power of a power: multiply indices. (5²)³ = 5^(2×3) = 5⁶',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['power-of-power-law'],
                    correctToken: 'power-of-power-law',
                    incorrectTokens: [
                      'indices-added-error',
                      null,
                      'base-evaluated-error',
                      'base-changed-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-011',
                  question: 'What is 100⁰?',
                  options: ['0', '1', '100', '10000'],
                  correctAnswer: 1,
                  explanation: 'Any non-zero number to the power of 0 equals 1',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['zero-index-law'],
                    correctToken: 'zero-index-law',
                    incorrectTokens: [
                      'zero-index-confusion',
                      null,
                      'zero-index-confusion',
                      'zero-index-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-012',
                  question: 'Simplify: 2⁶ × 2³',
                  options: ['2⁹', '2¹⁸', '4⁹', '2³'],
                  correctAnswer: 0,
                  explanation: 'Same base: add indices. 2⁶ × 2³ = 2^(6+3) = 2⁹',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['multiplication-law'],
                    correctToken: 'multiplication-law',
                    incorrectTokens: [
                      null,
                      'indices-multiplied-error',
                      'bases-multiplied-error',
                      'indices-subtracted-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-013',
                  question: 'What is 2⁶?',
                  options: ['12', '32', '64', '128'],
                  correctAnswer: 2,
                  explanation: '2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['evaluating-powers'],
                    correctToken: 'evaluating-powers',
                    incorrectTokens: [
                      'base-times-index-error',
                      'power-minus-one-error',
                      null,
                      'power-plus-one-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-014',
                  question: 'Simplify: 10⁵ ÷ 10²',
                  options: ['10³', '10⁷', '10¹⁰', '1³'],
                  correctAnswer: 0,
                  explanation: 'Same base: subtract indices. 10⁵ ÷ 10² = 10^(5-2) = 10³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-law'],
                    correctToken: 'division-law',
                    incorrectTokens: [
                      null,
                      'indices-added-error',
                      'indices-multiplied-error',
                      'base-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-015',
                  question: 'Simplify: (3²)⁴',
                  options: ['3⁶', '3⁸', '9⁴', '6⁸'],
                  correctAnswer: 1,
                  explanation: 'Power of a power: multiply indices. (3²)⁴ = 3^(2×4) = 3⁸',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['power-of-power-law'],
                    correctToken: 'power-of-power-law',
                    incorrectTokens: [
                      'indices-added-error',
                      null,
                      'base-evaluated-error',
                      'base-changed-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-016',
                  question: 'Simplify: 6³ × 6⁰',
                  options: ['6³', '6⁰', '0', '1'],
                  correctAnswer: 0,
                  explanation: '6⁰ = 1, so 6³ × 6⁰ = 6³ × 1 = 6³. Or: add indices: 3 + 0 = 3',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplication-law', 'zero-index-law'],
                    correctToken: 'zero-index-law',
                    incorrectTokens: [
                      null,
                      'zero-dominance-error',
                      'zero-dominance-error',
                      'zero-index-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-017',
                  question: 'What is 4³?',
                  options: ['12', '16', '64', '256'],
                  correctAnswer: 2,
                  explanation: '4³ = 4 × 4 × 4 = 64',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['evaluating-powers'],
                    correctToken: 'evaluating-powers',
                    incorrectTokens: [
                      'base-times-index-error',
                      'power-minus-one-error',
                      null,
                      'power-plus-one-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-018',
                  question: 'Simplify: a⁵ × a³',
                  options: ['a⁸', 'a¹⁵', '2a⁸', 'a²'],
                  correctAnswer: 0,
                  explanation: 'Same base (a): add indices. a⁵ × a³ = a^(5+3) = a⁸',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplication-law'],
                    correctToken: 'multiplication-law',
                    incorrectTokens: [
                      null,
                      'indices-multiplied-error',
                      'coefficient-error',
                      'indices-subtracted-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-019',
                  question: 'Simplify: x⁷ ÷ x⁴',
                  options: ['x³', 'x¹¹', 'x²⁸', '1'],
                  correctAnswer: 0,
                  explanation: 'Same base (x): subtract indices. x⁷ ÷ x⁴ = x^(7-4) = x³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['division-law'],
                    correctToken: 'division-law',
                    incorrectTokens: [
                      null,
                      'indices-added-error',
                      'indices-multiplied-error',
                      'zero-result-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA272-020',
                  question: 'Simplify: (y³)⁵',
                  options: ['y⁸', 'y¹⁵', 'y⁵³', '5y³'],
                  correctAnswer: 1,
                  explanation: 'Power of a power: multiply indices. (y³)⁵ = y^(3×5) = y¹⁵',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['power-of-power-law'],
                    correctToken: 'power-of-power-law',
                    incorrectTokens: [
                      'indices-added-error',
                      null,
                      'concatenation-error',
                      'coefficient-error',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'algebra',
          title: 'Algebra',
          description: 'Simplifying expressions and solving equations',
          sections: [
            {
              id: 'VCMNA281',
              code: 'VCMNA281',
              title: 'Simplifying Algebraic Expressions',
              description: 'Simplify algebraic expressions involving the four operations',
              content: `# Simplifying Algebraic Expressions

Algebra uses letters (variables) to represent unknown numbers. Learning to simplify expressions makes solving problems easier.

## Like Terms

**Like terms** have the same variable(s) raised to the same power:
- 3x and 5x are like terms
- 2x² and 7x² are like terms
- 3x and 3y are NOT like terms
- 4x and 4x² are NOT like terms

## Collecting Like Terms

Add or subtract the coefficients (numbers in front):

**Example:** 3x + 5x = 8x
**Example:** 7y - 2y = 5y
**Example:** 4a + 3b + 2a - b = 6a + 2b

## Multiplying Algebraic Terms

Multiply coefficients and add indices for same variables:

**Example:** 3x × 4y = 12xy
**Example:** 2a × 5a = 10a²
**Example:** 4x² × 3x = 12x³

## Dividing Algebraic Terms

Divide coefficients and subtract indices:

**Example:** 12x ÷ 4 = 3x
**Example:** 15a² ÷ 3a = 5a
**Example:** 20x³ ÷ 5x² = 4x

## Expanding Brackets

Multiply each term inside by the term outside:

**Example:** 3(x + 4) = 3x + 12
**Example:** 2(3a - 5) = 6a - 10
**Example:** -4(2x + 3) = -8x - 12`,
              keyPoints: [
                'Like terms have the same variable and power',
                'Collect like terms by adding/subtracting coefficients',
                'When multiplying: multiply coefficients, add indices',
                'When dividing: divide coefficients, subtract indices',
                'Expanding: multiply every term inside the bracket'
              ],
              knowledgeTokens: [
                {
                  id: 'identifying-like-terms',
                  name: 'Identifying Like Terms',
                  description: 'Recognising terms that can be combined',
                },
                {
                  id: 'collecting-like-terms',
                  name: 'Collecting Like Terms',
                  description: 'Adding and subtracting like terms',
                  prerequisites: ['identifying-like-terms'],
                },
                {
                  id: 'multiplying-terms',
                  name: 'Multiplying Algebraic Terms',
                  description: 'Multiplying terms with variables',
                },
                {
                  id: 'dividing-terms',
                  name: 'Dividing Algebraic Terms',
                  description: 'Dividing terms with variables',
                  prerequisites: ['multiplying-terms'],
                },
                {
                  id: 'expanding-brackets',
                  name: 'Expanding Brackets',
                  description: 'Distributing a term across brackets',
                  prerequisites: ['multiplying-terms'],
                },
                {
                  id: 'simplifying-expressions',
                  name: 'Simplifying Complex Expressions',
                  description: 'Combining multiple operations',
                  prerequisites: ['collecting-like-terms', 'expanding-brackets'],
                },
              ],
              examples: [
                {
                  problem: 'Simplify: 4x + 3y + 2x - y',
                  solution: '6x + 2y',
                  explanation: 'Collect x terms: 4x + 2x = 6x. Collect y terms: 3y - y = 2y'
                },
                {
                  problem: 'Expand: 5(2x - 3)',
                  solution: '10x - 15',
                  explanation: '5 × 2x = 10x, 5 × (-3) = -15'
                }
              ],
              questions: [
                {
                  id: 'VCMNA281-001',
                  question: 'Simplify: 3x + 5x',
                  options: ['8x', '8x²', '15x', '8'],
                  correctAnswer: 0,
                  explanation: 'Add coefficients of like terms: 3x + 5x = 8x',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['collecting-like-terms'],
                    correctToken: 'collecting-like-terms',
                    incorrectTokens: [
                      null,
                      'indices-added-error',
                      'coefficients-multiplied-error',
                      'variable-dropped-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-002',
                  question: 'Simplify: 7y - 3y',
                  options: ['4y', '10y', '4', '21y'],
                  correctAnswer: 0,
                  explanation: 'Subtract coefficients: 7y - 3y = 4y',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['collecting-like-terms'],
                    correctToken: 'collecting-like-terms',
                    incorrectTokens: [
                      null,
                      'subtraction-addition-confusion',
                      'variable-dropped-error',
                      'coefficients-multiplied-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-003',
                  question: 'Simplify: 2a × 3a',
                  options: ['5a', '6a', '6a²', '5a²'],
                  correctAnswer: 2,
                  explanation: 'Multiply coefficients (2 × 3 = 6), add indices (a¹ × a¹ = a²) = 6a²',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplying-terms'],
                    correctToken: 'multiplying-terms',
                    incorrectTokens: [
                      'coefficients-added-error',
                      'index-not-added-error',
                      null,
                      'coefficients-added-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-004',
                  question: 'Expand: 3(x + 4)',
                  options: ['3x + 4', '3x + 12', 'x + 12', '3x + 7'],
                  correctAnswer: 1,
                  explanation: '3 × x = 3x, 3 × 4 = 12. So 3(x + 4) = 3x + 12',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['expanding-brackets'],
                    correctToken: 'expanding-brackets',
                    incorrectTokens: [
                      'second-term-not-multiplied',
                      null,
                      'first-term-not-multiplied',
                      'addition-instead-of-multiplication',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-005',
                  question: 'Simplify: 4x + 2y + 3x',
                  options: ['9xy', '7x + 2y', '9x + 2y', '7xy + 2'],
                  correctAnswer: 1,
                  explanation: 'Collect x terms: 4x + 3x = 7x. y stays as 2y. Answer: 7x + 2y',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['collecting-like-terms'],
                    correctToken: 'collecting-like-terms',
                    incorrectTokens: [
                      'unlike-terms-combined',
                      null,
                      'calculation-error',
                      'unlike-terms-combined',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-006',
                  question: 'Simplify: 12x ÷ 4',
                  options: ['3x', '3', '8x', '48x'],
                  correctAnswer: 0,
                  explanation: 'Divide coefficient: 12 ÷ 4 = 3. Variable stays. Answer: 3x',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['dividing-terms'],
                    correctToken: 'dividing-terms',
                    incorrectTokens: [
                      null,
                      'variable-dropped-error',
                      'subtraction-instead-of-division',
                      'multiplication-instead-of-division',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-007',
                  question: 'Expand: 2(3x - 5)',
                  options: ['6x - 5', '6x - 10', '5x - 3', '3x - 10'],
                  correctAnswer: 1,
                  explanation: '2 × 3x = 6x, 2 × (-5) = -10. Answer: 6x - 10',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['expanding-brackets'],
                    correctToken: 'expanding-brackets',
                    incorrectTokens: [
                      'second-term-not-multiplied',
                      null,
                      'calculation-error',
                      'first-term-not-multiplied',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-008',
                  question: 'Simplify: 5a × 4b',
                  options: ['9ab', '20ab', '20a + b', '9a + b'],
                  correctAnswer: 1,
                  explanation: 'Multiply coefficients: 5 × 4 = 20. Combine variables: ab. Answer: 20ab',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplying-terms'],
                    correctToken: 'multiplying-terms',
                    incorrectTokens: [
                      'coefficients-added-error',
                      null,
                      'addition-instead-of-multiplication',
                      'coefficients-added-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-009',
                  question: 'Which terms are like terms?',
                  options: ['3x and 3y', '5x² and 2x', '4ab and 7ab', '6x and 6'],
                  correctAnswer: 2,
                  explanation: 'Like terms have the same variables with the same powers. 4ab and 7ab are like terms.',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['identifying-like-terms'],
                    correctToken: 'identifying-like-terms',
                    incorrectTokens: [
                      'different-variables-confusion',
                      'different-powers-confusion',
                      null,
                      'constant-vs-variable-confusion',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-010',
                  question: 'Simplify: 15a² ÷ 5a',
                  options: ['3a', '10a', '3a²', '10a²'],
                  correctAnswer: 0,
                  explanation: 'Divide coefficients: 15 ÷ 5 = 3. Subtract indices: a² ÷ a = a. Answer: 3a',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['dividing-terms'],
                    correctToken: 'dividing-terms',
                    incorrectTokens: [
                      null,
                      'subtraction-instead-of-division',
                      'index-not-subtracted-error',
                      'both-errors',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-011',
                  question: 'Expand: -2(x + 3)',
                  options: ['-2x + 3', '-2x - 6', '-2x + 6', '2x - 6'],
                  correctAnswer: 1,
                  explanation: '-2 × x = -2x, -2 × 3 = -6. Answer: -2x - 6',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['expanding-brackets'],
                    correctToken: 'expanding-brackets',
                    incorrectTokens: [
                      'negative-second-term-error',
                      null,
                      'sign-error',
                      'negative-first-term-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-012',
                  question: 'Simplify: 6x + 3y - 2x + 5y',
                  options: ['4x + 8y', '8x + 8y', '4x + 2y', '12xy'],
                  correctAnswer: 0,
                  explanation: 'x terms: 6x - 2x = 4x. y terms: 3y + 5y = 8y. Answer: 4x + 8y',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['collecting-like-terms'],
                    correctToken: 'collecting-like-terms',
                    incorrectTokens: [
                      null,
                      'subtraction-error',
                      'second-calculation-error',
                      'unlike-terms-combined',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-013',
                  question: 'Simplify: 3x × 2x²',
                  options: ['6x²', '5x³', '6x³', '5x²'],
                  correctAnswer: 2,
                  explanation: 'Coefficients: 3 × 2 = 6. Indices: x¹ × x² = x³. Answer: 6x³',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['multiplying-terms'],
                    correctToken: 'multiplying-terms',
                    incorrectTokens: [
                      'index-not-added-error',
                      'coefficient-added-error',
                      null,
                      'both-errors',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-014',
                  question: 'Expand: 4(2a + 3b)',
                  options: ['8a + 3b', '8a + 12b', '6a + 7b', '8ab + 12'],
                  correctAnswer: 1,
                  explanation: '4 × 2a = 8a, 4 × 3b = 12b. Answer: 8a + 12b',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['expanding-brackets'],
                    correctToken: 'expanding-brackets',
                    incorrectTokens: [
                      'second-term-not-multiplied',
                      null,
                      'addition-error',
                      'structure-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-015',
                  question: 'Simplify: 20x³ ÷ 4x',
                  options: ['5x²', '5x³', '16x²', '5x⁴'],
                  correctAnswer: 0,
                  explanation: 'Coefficients: 20 ÷ 4 = 5. Indices: x³ ÷ x = x². Answer: 5x²',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['dividing-terms'],
                    correctToken: 'dividing-terms',
                    incorrectTokens: [
                      null,
                      'index-not-subtracted-error',
                      'subtraction-instead-of-division',
                      'index-added-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-016',
                  question: 'Expand and simplify: 2(x + 3) + 3(x - 1)',
                  options: ['5x + 3', '5x + 9', '5x + 6', '6x + 3'],
                  correctAnswer: 0,
                  explanation: '2(x + 3) = 2x + 6. 3(x - 1) = 3x - 3. Combined: 2x + 6 + 3x - 3 = 5x + 3',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['simplifying-expressions'],
                    correctToken: 'simplifying-expressions',
                    incorrectTokens: [
                      null,
                      'like-terms-error',
                      'expansion-error',
                      'coefficient-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-017',
                  question: 'Simplify: -3(2x - 4)',
                  options: ['-6x - 12', '-6x + 12', '6x - 12', '-6x - 4'],
                  correctAnswer: 1,
                  explanation: '-3 × 2x = -6x, -3 × (-4) = +12. Answer: -6x + 12',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['expanding-brackets'],
                    correctToken: 'expanding-brackets',
                    incorrectTokens: [
                      'double-negative-error',
                      null,
                      'first-term-sign-error',
                      'second-term-not-multiplied',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-018',
                  question: 'Simplify: 8a²b ÷ 2ab',
                  options: ['4ab', '4a', '6ab', '4a²'],
                  correctAnswer: 1,
                  explanation: 'Coefficients: 8 ÷ 2 = 4. Variables: a² ÷ a = a, b ÷ b = 1. Answer: 4a',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['dividing-terms'],
                    correctToken: 'dividing-terms',
                    incorrectTokens: [
                      'b-not-cancelled-error',
                      null,
                      'subtraction-error',
                      'a-not-simplified-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-019',
                  question: 'Simplify: 5x + 2x² - 3x + x²',
                  options: ['3x² + 2x', '5x² + 2x', '3x² + 8x', '5x + 3x²'],
                  correctAnswer: 0,
                  explanation: 'x² terms: 2x² + x² = 3x². x terms: 5x - 3x = 2x. Answer: 3x² + 2x',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['collecting-like-terms'],
                    correctToken: 'collecting-like-terms',
                    incorrectTokens: [
                      null,
                      'x-terms-error',
                      'x²-terms-error',
                      'order-only-difference',
                    ],
                  },
                },
                {
                  id: 'VCMNA281-020',
                  question: 'Expand and simplify: 3(x + 2) - 2(x - 1)',
                  options: ['x + 4', 'x + 8', '5x + 4', 'x + 2'],
                  correctAnswer: 1,
                  explanation: '3(x + 2) = 3x + 6. -2(x - 1) = -2x + 2. Combined: 3x + 6 - 2x + 2 = x + 8',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['simplifying-expressions'],
                    correctToken: 'simplifying-expressions',
                    incorrectTokens: [
                      'constant-error',
                      null,
                      'coefficient-error',
                      'double-negative-error',
                    ],
                  },
                },
              ],
            },
            {
              id: 'VCMNA284',
              code: 'VCMNA284',
              title: 'Solving Linear Equations',
              description: 'Solve linear equations using algebraic and graphical techniques. Verify solutions by substitution',
              content: `# Solving Linear Equations

A linear equation contains a variable (like x) raised to the power of 1. Solving means finding the value of the variable that makes the equation true.

## The Balance Method

Think of an equation like a balanced scale:
- Whatever you do to one side, you must do to the other side
- This keeps the equation balanced and true

## Solving Steps

### Step 1: Simplify both sides
Collect like terms and expand brackets if needed.

### Step 2: Get all variables on one side
Add or subtract terms to move variables to one side.

### Step 3: Get all constants on the other side
Add or subtract to isolate the variable term.

### Step 4: Divide (or multiply) to find the variable
Get the variable alone.

## Examples

**Example 1:** Solve 3x + 5 = 14
- Subtract 5 from both sides: 3x = 9
- Divide both sides by 3: x = 3

**Example 2:** Solve 2(x - 3) = 10
- Expand: 2x - 6 = 10
- Add 6 to both sides: 2x = 16
- Divide by 2: x = 8

**Example 3:** Solve 4x + 3 = x + 15
- Subtract x from both sides: 3x + 3 = 15
- Subtract 3 from both sides: 3x = 12
- Divide by 3: x = 4

## Checking Your Answer

Always substitute your answer back into the original equation to verify:
- If x = 3 in 3x + 5 = 14: 3(3) + 5 = 9 + 5 = 14 ✓`,
              keyPoints: [
                'Whatever you do to one side, do to the other',
                'Use inverse operations: + and -, × and ÷',
                'Get all x terms on one side, numbers on the other',
                'Always check by substituting your answer back'
              ],
              knowledgeTokens: [
                {
                  id: 'one-step-equations',
                  name: 'One-Step Equations',
                  description: 'Solving equations with one operation',
                },
                {
                  id: 'two-step-equations',
                  name: 'Two-Step Equations',
                  description: 'Solving equations with two operations',
                  prerequisites: ['one-step-equations'],
                },
                {
                  id: 'equations-with-brackets',
                  name: 'Equations with Brackets',
                  description: 'Solving equations requiring expansion',
                  prerequisites: ['two-step-equations', 'expanding-brackets'],
                },
                {
                  id: 'variables-both-sides',
                  name: 'Variables on Both Sides',
                  description: 'Solving equations with variables on both sides',
                  prerequisites: ['two-step-equations'],
                },
                {
                  id: 'verifying-solutions',
                  name: 'Verifying Solutions',
                  description: 'Checking answers by substitution',
                  prerequisites: ['one-step-equations'],
                },
                {
                  id: 'negative-solutions',
                  name: 'Negative Solutions',
                  description: 'Working with equations that have negative answers',
                  prerequisites: ['two-step-equations'],
                },
              ],
              examples: [
                {
                  problem: 'Solve: 5x - 7 = 18',
                  solution: 'x = 5',
                  explanation: 'Add 7: 5x = 25. Divide by 5: x = 5'
                },
                {
                  problem: 'Solve: 3(x + 2) = 21',
                  solution: 'x = 5',
                  explanation: 'Expand: 3x + 6 = 21. Subtract 6: 3x = 15. Divide by 3: x = 5'
                }
              ],
              questions: [
                {
                  id: 'VCMNA284-001',
                  question: 'Solve: x + 7 = 12',
                  options: ['x = 5', 'x = 19', 'x = -5', 'x = 7'],
                  correctAnswer: 0,
                  explanation: 'Subtract 7 from both sides: x = 12 - 7 = 5',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['one-step-equations'],
                    correctToken: 'one-step-equations',
                    incorrectTokens: [
                      null,
                      'addition-instead-of-subtraction',
                      'sign-error',
                      'no-operation-performed',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-002',
                  question: 'Solve: 3x = 15',
                  options: ['x = 5', 'x = 12', 'x = 18', 'x = 45'],
                  correctAnswer: 0,
                  explanation: 'Divide both sides by 3: x = 15 ÷ 3 = 5',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['one-step-equations'],
                    correctToken: 'one-step-equations',
                    incorrectTokens: [
                      null,
                      'subtraction-instead-of-division',
                      'addition-instead-of-division',
                      'multiplication-instead-of-division',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-003',
                  question: 'Solve: 2x + 5 = 13',
                  options: ['x = 4', 'x = 9', 'x = 8', 'x = 3'],
                  correctAnswer: 0,
                  explanation: 'Subtract 5: 2x = 8. Divide by 2: x = 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-step-equations'],
                    correctToken: 'two-step-equations',
                    incorrectTokens: [
                      null,
                      'only-subtracted',
                      'wrong-order-of-operations',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-004',
                  question: 'Solve: x - 4 = 9',
                  options: ['x = 5', 'x = 13', 'x = -13', 'x = 36'],
                  correctAnswer: 1,
                  explanation: 'Add 4 to both sides: x = 9 + 4 = 13',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['one-step-equations'],
                    correctToken: 'one-step-equations',
                    incorrectTokens: [
                      'subtraction-instead-of-addition',
                      null,
                      'sign-error',
                      'multiplication-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-005',
                  question: 'Solve: 4x - 3 = 17',
                  options: ['x = 5', 'x = 14', 'x = 20', 'x = 4'],
                  correctAnswer: 0,
                  explanation: 'Add 3: 4x = 20. Divide by 4: x = 5',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-step-equations'],
                    correctToken: 'two-step-equations',
                    incorrectTokens: [
                      null,
                      'only-one-step',
                      'wrong-order',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-006',
                  question: 'Solve: x/5 = 4',
                  options: ['x = 20', 'x = 9', 'x = -1', 'x = 0.8'],
                  correctAnswer: 0,
                  explanation: 'Multiply both sides by 5: x = 4 × 5 = 20',
                  difficulty: 1,
                  knowledge: {
                    questionTokens: ['one-step-equations'],
                    correctToken: 'one-step-equations',
                    incorrectTokens: [
                      null,
                      'addition-instead-of-multiplication',
                      'subtraction-error',
                      'division-instead-of-multiplication',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-007',
                  question: 'Solve: 2(x + 3) = 14',
                  options: ['x = 4', 'x = 7', 'x = 5.5', 'x = 11'],
                  correctAnswer: 0,
                  explanation: 'Expand: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['equations-with-brackets'],
                    correctToken: 'equations-with-brackets',
                    incorrectTokens: [
                      null,
                      'expansion-error',
                      'order-of-operations-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-008',
                  question: 'Solve: 3x + 2 = x + 10',
                  options: ['x = 4', 'x = 6', 'x = 3', 'x = 8'],
                  correctAnswer: 0,
                  explanation: 'Subtract x: 2x + 2 = 10. Subtract 2: 2x = 8. Divide by 2: x = 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['variables-both-sides'],
                    correctToken: 'variables-both-sides',
                    incorrectTokens: [
                      null,
                      'variable-collection-error',
                      'arithmetic-error',
                      'wrong-order',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-009',
                  question: 'Solve: 5x = -20',
                  options: ['x = 4', 'x = -4', 'x = -15', 'x = 100'],
                  correctAnswer: 1,
                  explanation: 'Divide both sides by 5: x = -20 ÷ 5 = -4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['negative-solutions'],
                    correctToken: 'negative-solutions',
                    incorrectTokens: [
                      'sign-error',
                      null,
                      'subtraction-error',
                      'multiplication-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-010',
                  question: 'Solve: 3(x - 2) = 12',
                  options: ['x = 6', 'x = 2', 'x = 4', 'x = 10'],
                  correctAnswer: 0,
                  explanation: 'Expand: 3x - 6 = 12. Add 6: 3x = 18. Divide by 3: x = 6',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['equations-with-brackets'],
                    correctToken: 'equations-with-brackets',
                    incorrectTokens: [
                      null,
                      'expansion-error',
                      'arithmetic-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-011',
                  question: 'Solve: 5x - 2 = 3x + 8',
                  options: ['x = 3', 'x = 5', 'x = 2', 'x = 10'],
                  correctAnswer: 1,
                  explanation: 'Subtract 3x: 2x - 2 = 8. Add 2: 2x = 10. Divide by 2: x = 5',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['variables-both-sides'],
                    correctToken: 'variables-both-sides',
                    incorrectTokens: [
                      'calculation-error',
                      null,
                      'variable-collection-error',
                      'wrong-order',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-012',
                  question: 'Solve: x/3 + 2 = 5',
                  options: ['x = 1', 'x = 9', 'x = 21', 'x = 3'],
                  correctAnswer: 1,
                  explanation: 'Subtract 2: x/3 = 3. Multiply by 3: x = 9',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-step-equations'],
                    correctToken: 'two-step-equations',
                    incorrectTokens: [
                      'division-error',
                      null,
                      'wrong-order',
                      'arithmetic-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-013',
                  question: 'Solve: 2x + 7 = 3',
                  options: ['x = 5', 'x = 2', 'x = -2', 'x = -5'],
                  correctAnswer: 2,
                  explanation: 'Subtract 7: 2x = -4. Divide by 2: x = -2',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['negative-solutions'],
                    correctToken: 'negative-solutions',
                    incorrectTokens: [
                      'wrong-sign',
                      'division-error',
                      null,
                      'calculation-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-014',
                  question: 'Solve: 4(x + 1) = 2(x + 7)',
                  options: ['x = 5', 'x = 6', 'x = 3', 'x = 8'],
                  correctAnswer: 0,
                  explanation: 'Expand: 4x + 4 = 2x + 14. Subtract 2x: 2x + 4 = 14. Subtract 4: 2x = 10. x = 5',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['equations-with-brackets', 'variables-both-sides'],
                    correctToken: 'equations-with-brackets',
                    incorrectTokens: [
                      null,
                      'expansion-error',
                      'variable-collection-error',
                      'arithmetic-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-015',
                  question: 'Solve: 6x - 9 = 3x',
                  options: ['x = 3', 'x = -3', 'x = 9', 'x = 1'],
                  correctAnswer: 0,
                  explanation: 'Subtract 3x: 3x - 9 = 0. Add 9: 3x = 9. Divide by 3: x = 3',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['variables-both-sides'],
                    correctToken: 'variables-both-sides',
                    incorrectTokens: [
                      null,
                      'sign-error',
                      'variable-collection-error',
                      'division-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-016',
                  question: 'If x = 4, verify which equation is true:',
                  options: ['2x + 3 = 10', '3x - 5 = 7', '4x + 1 = 18', '5x - 2 = 17'],
                  correctAnswer: 1,
                  explanation: '3(4) - 5 = 12 - 5 = 7 ✓',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['verifying-solutions'],
                    correctToken: 'verifying-solutions',
                    incorrectTokens: [
                      'substitution-error',
                      null,
                      'substitution-error',
                      'substitution-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-017',
                  question: 'Solve: -2x + 8 = 14',
                  options: ['x = 3', 'x = -3', 'x = 11', 'x = -11'],
                  correctAnswer: 1,
                  explanation: 'Subtract 8: -2x = 6. Divide by -2: x = -3',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['negative-solutions'],
                    correctToken: 'negative-solutions',
                    incorrectTokens: [
                      'sign-error',
                      null,
                      'arithmetic-error',
                      'both-sign-errors',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-018',
                  question: 'Solve: 3(2x - 1) = 4x + 7',
                  options: ['x = 5', 'x = 2', 'x = 4', 'x = 10'],
                  correctAnswer: 0,
                  explanation: 'Expand: 6x - 3 = 4x + 7. Subtract 4x: 2x - 3 = 7. Add 3: 2x = 10. x = 5',
                  difficulty: 3,
                  knowledge: {
                    questionTokens: ['equations-with-brackets', 'variables-both-sides'],
                    correctToken: 'equations-with-brackets',
                    incorrectTokens: [
                      null,
                      'expansion-error',
                      'variable-collection-error',
                      'arithmetic-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-019',
                  question: 'Solve: x/4 - 3 = 2',
                  options: ['x = 20', 'x = 5', 'x = -4', 'x = 8'],
                  correctAnswer: 0,
                  explanation: 'Add 3: x/4 = 5. Multiply by 4: x = 20',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['two-step-equations'],
                    correctToken: 'two-step-equations',
                    incorrectTokens: [
                      null,
                      'multiplication-error',
                      'sign-error',
                      'arithmetic-error',
                    ],
                  },
                },
                {
                  id: 'VCMNA284-020',
                  question: 'Solve: 7x + 3 = 5x + 11',
                  options: ['x = 4', 'x = 7', 'x = 2', 'x = 14'],
                  correctAnswer: 0,
                  explanation: 'Subtract 5x: 2x + 3 = 11. Subtract 3: 2x = 8. Divide by 2: x = 4',
                  difficulty: 2,
                  knowledge: {
                    questionTokens: ['variables-both-sides'],
                    correctToken: 'variables-both-sides',
                    incorrectTokens: [
                      null,
                      'variable-collection-error',
                      'arithmetic-error',
                      'wrong-order',
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'real-numbers',
          title: 'Real Numbers',
          description: 'Working with fractions, decimals, percentages, ratios and rates',
          sections: [
            {
              id: 'VCMNA274',
              code: 'VCMNA274',
              title: 'Fractions, Decimals and Percentages',
              description: 'Solve problems involving the use of percentages, including percentage increases and decreases and percentage error',
              content: `# Connecting Fractions, Decimals and Percentages

These three forms are different ways of showing the same value. Converting between them is a key skill.

## Quick Conversions

| Fraction | Decimal | Percentage |
|----------|---------|------------|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/5 | 0.2 | 20% |
| 1/10 | 0.1 | 10% |

## Fraction to Decimal
Divide the numerator by the denominator:
- 3/4 = 3 ÷ 4 = 0.75
- 2/5 = 2 ÷ 5 = 0.4

## Decimal to Percentage
Multiply by 100:
- 0.35 × 100 = 35%
- 0.08 × 100 = 8%

## Percentage to Decimal
Divide by 100:
- 45% ÷ 100 = 0.45
- 7% ÷ 100 = 0.07

## Finding a Percentage of an Amount
Convert percentage to decimal, then multiply:
- 25% of 80 = 0.25 × 80 = 20
- 15% of 200 = 0.15 × 200 = 30`,
              keyPoints: [
                'Fractions, decimals and percentages show the same value differently',
                'Fraction to decimal: divide numerator by denominator',
                'Decimal to percentage: multiply by 100',
                'Percentage to decimal: divide by 100'
              ],
              knowledgeTokens: [
                { id: 'fraction-to-decimal', name: 'Fraction to Decimal', description: 'Converting fractions to decimals' },
                { id: 'decimal-to-percentage', name: 'Decimal to Percentage', description: 'Converting decimals to percentages' },
                { id: 'percentage-to-decimal', name: 'Percentage to Decimal', description: 'Converting percentages to decimals' },
                { id: 'percentage-of-amount', name: 'Percentage of Amount', description: 'Finding a percentage of a quantity', prerequisites: ['percentage-to-decimal'] },
              ],
              examples: [
                { problem: 'Convert 3/8 to a decimal', solution: '0.375', explanation: '3 ÷ 8 = 0.375' },
                { problem: 'Find 30% of 150', solution: '45', explanation: '0.30 × 150 = 45' }
              ],
              questions: [
                { id: 'VCMNA274-001', question: 'Convert 1/4 to a percentage', options: ['25%', '4%', '14%', '40%'], correctAnswer: 0, explanation: '1/4 = 0.25 = 25%', difficulty: 1, knowledge: { questionTokens: ['fraction-to-decimal', 'decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: [null, 'numerator-only-error', 'concatenation-error', 'wrong-multiplication'] } },
                { id: 'VCMNA274-002', question: 'Convert 0.6 to a percentage', options: ['6%', '60%', '0.6%', '600%'], correctAnswer: 1, explanation: '0.6 × 100 = 60%', difficulty: 1, knowledge: { questionTokens: ['decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['forgot-to-multiply', null, 'decimal-placement-error', 'over-multiplication'] } },
                { id: 'VCMNA274-003', question: 'Convert 75% to a decimal', options: ['75', '0.75', '7.5', '0.075'], correctAnswer: 1, explanation: '75 ÷ 100 = 0.75', difficulty: 1, knowledge: { questionTokens: ['percentage-to-decimal'], correctToken: 'percentage-to-decimal', incorrectTokens: ['no-conversion', null, 'wrong-decimal-places', 'over-division'] } },
                { id: 'VCMNA274-004', question: 'What is 20% of 80?', options: ['16', '20', '60', '100'], correctAnswer: 0, explanation: '0.20 × 80 = 16', difficulty: 1, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: [null, 'percentage-as-answer', 'subtraction-error', 'addition-error'] } },
                { id: 'VCMNA274-005', question: 'Convert 3/5 to a decimal', options: ['0.35', '0.6', '0.53', '1.67'], correctAnswer: 1, explanation: '3 ÷ 5 = 0.6', difficulty: 1, knowledge: { questionTokens: ['fraction-to-decimal'], correctToken: 'fraction-to-decimal', incorrectTokens: ['concatenation-error', null, 'reversed-digits', 'inverted-division'] } },
                { id: 'VCMNA274-006', question: 'What is 15% of 200?', options: ['15', '30', '185', '215'], correctAnswer: 1, explanation: '0.15 × 200 = 30', difficulty: 2, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['percentage-as-answer', null, 'subtraction-error', 'addition-error'] } },
                { id: 'VCMNA274-007', question: 'Convert 0.125 to a fraction', options: ['1/8', '1/5', '1/4', '1/125'], correctAnswer: 0, explanation: '0.125 = 125/1000 = 1/8', difficulty: 2, knowledge: { questionTokens: ['fraction-to-decimal'], correctToken: 'fraction-to-decimal', incorrectTokens: [null, 'approximation-error', 'simplification-error', 'denominator-error'] } },
                { id: 'VCMNA274-008', question: 'What percentage is 18 out of 60?', options: ['18%', '30%', '42%', '3%'], correctAnswer: 1, explanation: '18/60 = 0.3 = 30%', difficulty: 2, knowledge: { questionTokens: ['decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['numerator-as-percentage', null, 'subtraction-error', 'division-error'] } },
                { id: 'VCMNA274-009', question: 'Convert 7/8 to a percentage', options: ['78%', '87.5%', '0.875%', '7.8%'], correctAnswer: 1, explanation: '7 ÷ 8 = 0.875 = 87.5%', difficulty: 2, knowledge: { questionTokens: ['fraction-to-decimal', 'decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['concatenation-error', null, 'forgot-to-multiply', 'decimal-error'] } },
                { id: 'VCMNA274-010', question: 'What is 35% of 120?', options: ['35', '42', '85', '155'], correctAnswer: 1, explanation: '0.35 × 120 = 42', difficulty: 2, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['percentage-as-answer', null, 'subtraction-error', 'addition-error'] } },
                { id: 'VCMNA274-011', question: 'A shirt costs $50. With 20% off, what is the sale price?', options: ['$30', '$40', '$10', '$70'], correctAnswer: 1, explanation: 'Discount = 0.20 × 50 = $10. Sale price = 50 - 10 = $40', difficulty: 2, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['too-much-discount', null, 'discount-only', 'added-instead'] } },
                { id: 'VCMNA274-012', question: 'Convert 0.045 to a percentage', options: ['45%', '4.5%', '0.45%', '0.045%'], correctAnswer: 1, explanation: '0.045 × 100 = 4.5%', difficulty: 2, knowledge: { questionTokens: ['decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['decimal-shift-error', null, 'decimal-shift-error', 'no-conversion'] } },
                { id: 'VCMNA274-013', question: 'What is 12.5% of 80?', options: ['12.5', '10', '67.5', '92.5'], correctAnswer: 1, explanation: '0.125 × 80 = 10', difficulty: 3, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['percentage-as-answer', null, 'subtraction-error', 'addition-error'] } },
                { id: 'VCMNA274-014', question: 'A price increased from $80 to $100. What is the percentage increase?', options: ['20%', '25%', '80%', '125%'], correctAnswer: 1, explanation: 'Increase = 20. Percentage = 20/80 × 100 = 25%', difficulty: 3, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['absolute-not-relative', null, 'wrong-base', 'wrong-calculation'] } },
                { id: 'VCMNA274-015', question: 'What is 2/3 as a percentage (to 1 decimal place)?', options: ['23%', '66.7%', '67%', '0.67%'], correctAnswer: 1, explanation: '2 ÷ 3 = 0.666... = 66.7%', difficulty: 3, knowledge: { questionTokens: ['fraction-to-decimal', 'decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['concatenation-error', null, 'rounding-error', 'forgot-to-multiply'] } },
                { id: 'VCMNA274-016', question: '60 is what percentage of 150?', options: ['60%', '40%', '90%', '250%'], correctAnswer: 1, explanation: '60/150 = 0.4 = 40%', difficulty: 2, knowledge: { questionTokens: ['decimal-to-percentage'], correctToken: 'decimal-to-percentage', incorrectTokens: ['numerator-as-percentage', null, 'wrong-order', 'inverted-calculation'] } },
                { id: 'VCMNA274-017', question: 'A population grew by 15% from 2000. What is the new population?', options: ['2015', '2300', '1700', '300'], correctAnswer: 1, explanation: 'Growth = 0.15 × 2000 = 300. New = 2000 + 300 = 2300', difficulty: 3, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['added-percentage', null, 'subtracted-instead', 'growth-only'] } },
                { id: 'VCMNA274-018', question: 'Convert 5/6 to a decimal (to 2 decimal places)', options: ['0.56', '0.83', '0.65', '1.20'], correctAnswer: 1, explanation: '5 ÷ 6 = 0.833... ≈ 0.83', difficulty: 2, knowledge: { questionTokens: ['fraction-to-decimal'], correctToken: 'fraction-to-decimal', incorrectTokens: ['concatenation-error', null, 'reversed-digits', 'inverted-division'] } },
                { id: 'VCMNA274-019', question: 'What is 150% of 40?', options: ['60', '150', '190', '6'], correctAnswer: 0, explanation: '1.50 × 40 = 60', difficulty: 3, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: [null, 'percentage-as-answer', 'addition-error', 'decimal-error'] } },
                { id: 'VCMNA274-020', question: 'A test score improved from 60 to 75. What was the percentage improvement?', options: ['15%', '20%', '25%', '80%'], correctAnswer: 2, explanation: 'Improvement = 15. Percentage = 15/60 × 100 = 25%', difficulty: 3, knowledge: { questionTokens: ['percentage-of-amount'], correctToken: 'percentage-of-amount', incorrectTokens: ['absolute-not-relative', 'wrong-base', null, 'wrong-calculation'] } },
              ],
            },
            {
              id: 'VCMNA275',
              code: 'VCMNA275',
              title: 'Rates and Ratios',
              description: 'Solve a range of problems involving rates and ratios, including distance-time problems for travel at a constant speed',
              content: `# Rates and Ratios

## Ratios
A ratio compares quantities of the same type.

**Example:** 3:5 means for every 3 of one thing, there are 5 of another.

### Simplifying Ratios
Divide both parts by their HCF:
- 12:18 = 2:3 (divide by 6)
- 20:35 = 4:7 (divide by 5)

### Equivalent Ratios
Multiply or divide both parts by the same number:
- 2:3 = 4:6 = 6:9 = 8:12

## Rates
A rate compares quantities of different types.

**Examples:**
- Speed: 60 km/h (kilometres per hour)
- Price: $5/kg (dollars per kilogram)
- Heart rate: 72 bpm (beats per minute)

## Speed, Distance, Time
- **Speed = Distance ÷ Time**
- **Distance = Speed × Time**
- **Time = Distance ÷ Speed**

**Example:** Travel 150 km in 2 hours
Speed = 150 ÷ 2 = 75 km/h`,
              keyPoints: [
                'Ratios compare same type quantities',
                'Rates compare different type quantities',
                'Speed = Distance ÷ Time',
                'Simplify ratios by dividing by HCF'
              ],
              knowledgeTokens: [
                { id: 'simplifying-ratios', name: 'Simplifying Ratios', description: 'Reducing ratios to simplest form' },
                { id: 'equivalent-ratios', name: 'Equivalent Ratios', description: 'Finding equal ratios' },
                { id: 'dividing-in-ratio', name: 'Dividing in a Ratio', description: 'Sharing amounts in given ratios', prerequisites: ['equivalent-ratios'] },
                { id: 'speed-distance-time', name: 'Speed Distance Time', description: 'Calculating with SDT formula' },
                { id: 'unit-rates', name: 'Unit Rates', description: 'Finding rate per single unit' },
              ],
              examples: [
                { problem: 'Simplify the ratio 24:36', solution: '2:3', explanation: 'HCF of 24 and 36 is 12. 24÷12:36÷12 = 2:3' },
                { problem: 'A car travels 240 km in 3 hours. Find the speed.', solution: '80 km/h', explanation: 'Speed = Distance ÷ Time = 240 ÷ 3 = 80 km/h' }
              ],
              questions: [
                { id: 'VCMNA275-001', question: 'Simplify the ratio 15:25', options: ['3:5', '1:2', '5:3', '15:25'], correctAnswer: 0, explanation: 'HCF is 5. 15÷5:25÷5 = 3:5', difficulty: 1, knowledge: { questionTokens: ['simplifying-ratios'], correctToken: 'simplifying-ratios', incorrectTokens: [null, 'wrong-hcf', 'reversed', 'not-simplified'] } },
                { id: 'VCMNA275-002', question: 'A car travels 180 km in 3 hours. What is the speed?', options: ['540 km/h', '60 km/h', '183 km/h', '177 km/h'], correctAnswer: 1, explanation: 'Speed = 180 ÷ 3 = 60 km/h', difficulty: 1, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: ['multiplied', null, 'added', 'subtracted'] } },
                { id: 'VCMNA275-003', question: 'Express 2:5 with first term 8', options: ['8:5', '8:20', '8:10', '2:8'], correctAnswer: 1, explanation: '2×4=8, so 5×4=20. Answer: 8:20', difficulty: 1, knowledge: { questionTokens: ['equivalent-ratios'], correctToken: 'equivalent-ratios', incorrectTokens: ['second-unchanged', null, 'wrong-multiplier', 'reversed'] } },
                { id: 'VCMNA275-004', question: 'How far does a train travel at 90 km/h for 2.5 hours?', options: ['225 km', '92.5 km', '87.5 km', '36 km'], correctAnswer: 0, explanation: 'Distance = Speed × Time = 90 × 2.5 = 225 km', difficulty: 2, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: [null, 'added', 'subtracted', 'divided'] } },
                { id: 'VCMNA275-005', question: 'Divide $120 in the ratio 3:5', options: ['$45 and $75', '$60 and $60', '$40 and $80', '$36 and $84'], correctAnswer: 0, explanation: '3+5=8 parts. Each part=$15. 3×15=$45, 5×15=$75', difficulty: 2, knowledge: { questionTokens: ['dividing-in-ratio'], correctToken: 'dividing-in-ratio', incorrectTokens: [null, 'equal-split', 'wrong-calculation', 'wrong-parts'] } },
                { id: 'VCMNA275-006', question: 'Simplify 48:72', options: ['4:6', '2:3', '8:12', '24:36'], correctAnswer: 1, explanation: 'HCF is 24. 48÷24:72÷24 = 2:3', difficulty: 1, knowledge: { questionTokens: ['simplifying-ratios'], correctToken: 'simplifying-ratios', incorrectTokens: ['partial-simplify', null, 'partial-simplify', 'partial-simplify'] } },
                { id: 'VCMNA275-007', question: 'How long to travel 300 km at 75 km/h?', options: ['225 hours', '4 hours', '375 hours', '25 hours'], correctAnswer: 1, explanation: 'Time = Distance ÷ Speed = 300 ÷ 75 = 4 hours', difficulty: 2, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: ['multiplied', null, 'added', 'wrong-division'] } },
                { id: 'VCMNA275-008', question: 'A recipe uses flour:sugar = 5:2. If 300g flour is used, how much sugar?', options: ['750g', '120g', '150g', '60g'], correctAnswer: 1, explanation: '5 parts = 300g, so 1 part = 60g. Sugar = 2 × 60 = 120g', difficulty: 2, knowledge: { questionTokens: ['equivalent-ratios'], correctToken: 'equivalent-ratios', incorrectTokens: ['multiplied-wrong', null, 'half-of-flour', 'one-part'] } },
                { id: 'VCMNA275-009', question: 'Express 45 minutes as a ratio of 1 hour', options: ['45:1', '3:4', '45:60', '4:3'], correctAnswer: 1, explanation: '45:60 = 3:4 (divide by 15)', difficulty: 2, knowledge: { questionTokens: ['simplifying-ratios'], correctToken: 'simplifying-ratios', incorrectTokens: ['not-converted', null, 'not-simplified', 'reversed'] } },
                { id: 'VCMNA275-010', question: 'A cyclist travels at 24 km/h. How far in 45 minutes?', options: ['18 km', '24 km', '69 km', '32 km'], correctAnswer: 0, explanation: '45 min = 0.75 hours. Distance = 24 × 0.75 = 18 km', difficulty: 2, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: [null, 'time-not-converted', 'added', 'wrong-calculation'] } },
                { id: 'VCMNA275-011', question: 'Divide 180 in the ratio 2:3:4', options: ['40, 60, 80', '36, 54, 72', '20, 30, 40', '60, 60, 60'], correctAnswer: 0, explanation: '2+3+4=9 parts. 180÷9=20 per part. 2×20=40, 3×20=60, 4×20=80', difficulty: 3, knowledge: { questionTokens: ['dividing-in-ratio'], correctToken: 'dividing-in-ratio', incorrectTokens: [null, 'wrong-multiplier', 'ratio-as-answer', 'equal-split'] } },
                { id: 'VCMNA275-012', question: 'If 5 apples cost $3, what is the cost per apple?', options: ['$0.60', '$1.67', '$15', '$8'], correctAnswer: 0, explanation: 'Unit rate = 3 ÷ 5 = $0.60 per apple', difficulty: 1, knowledge: { questionTokens: ['unit-rates'], correctToken: 'unit-rates', incorrectTokens: [null, 'inverted', 'multiplied', 'added'] } },
                { id: 'VCMNA275-013', question: 'A train leaves at 9:00 AM and arrives at 11:30 AM after 200 km. Find speed.', options: ['80 km/h', '100 km/h', '66.7 km/h', '500 km/h'], correctAnswer: 0, explanation: 'Time = 2.5 hours. Speed = 200 ÷ 2.5 = 80 km/h', difficulty: 2, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: [null, 'wrong-time', 'wrong-formula', 'multiplied'] } },
                { id: 'VCMNA275-014', question: 'The ratio of boys to girls is 4:5. If there are 20 boys, how many students total?', options: ['25', '45', '36', '100'], correctAnswer: 1, explanation: '4 parts = 20, so 1 part = 5. Girls = 5×5 = 25. Total = 20+25 = 45', difficulty: 3, knowledge: { questionTokens: ['dividing-in-ratio'], correctToken: 'dividing-in-ratio', incorrectTokens: ['girls-only', null, 'wrong-calculation', 'ratio-multiplied'] } },
                { id: 'VCMNA275-015', question: 'Which is the better buy: 500g for $4 or 750g for $5.50?', options: ['500g for $4', '750g for $5.50', 'Same value', 'Cannot compare'], correctAnswer: 1, explanation: '500g: $8/kg. 750g: $7.33/kg. 750g is cheaper per kg', difficulty: 3, knowledge: { questionTokens: ['unit-rates'], correctToken: 'unit-rates', incorrectTokens: ['wrong-comparison', null, 'no-calculation', 'confused'] } },
                { id: 'VCMNA275-016', question: 'Two towns are 420 km apart. A car travels at 70 km/h. How long is the journey?', options: ['6 hours', '350 hours', '490 hours', '60 hours'], correctAnswer: 0, explanation: 'Time = 420 ÷ 70 = 6 hours', difficulty: 1, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: [null, 'subtracted', 'added', 'multiplied'] } },
                { id: 'VCMNA275-017', question: 'Orange juice concentrate is mixed with water in ratio 1:4. How much water for 200mL concentrate?', options: ['50mL', '800mL', '200mL', '1000mL'], correctAnswer: 1, explanation: '1 part = 200mL. Water = 4 parts = 4 × 200 = 800mL', difficulty: 2, knowledge: { questionTokens: ['equivalent-ratios'], correctToken: 'equivalent-ratios', incorrectTokens: ['inverted', null, 'same-amount', 'total-instead'] } },
                { id: 'VCMNA275-018', question: 'A map scale is 1:50000. A distance of 3 cm on map represents how many km?', options: ['150 km', '1.5 km', '15 km', '0.15 km'], correctAnswer: 1, explanation: '3 cm × 50000 = 150000 cm = 1500 m = 1.5 km', difficulty: 3, knowledge: { questionTokens: ['equivalent-ratios'], correctToken: 'equivalent-ratios', incorrectTokens: ['wrong-conversion', null, 'wrong-conversion', 'wrong-conversion'] } },
                { id: 'VCMNA275-019', question: 'A car uses 8L of petrol per 100 km. How much for a 350 km trip?', options: ['28L', '43.75L', '2800L', '3.5L'], correctAnswer: 0, explanation: '350 ÷ 100 = 3.5. Petrol = 3.5 × 8 = 28L', difficulty: 2, knowledge: { questionTokens: ['unit-rates'], correctToken: 'unit-rates', incorrectTokens: [null, 'wrong-calculation', 'wrong-scale', 'inverted'] } },
                { id: 'VCMNA275-020', question: 'Walking at 5 km/h, then cycling at 20 km/h for equal times of 30 min each. Total distance?', options: ['12.5 km', '25 km', '7.5 km', '2.5 km'], correctAnswer: 0, explanation: 'Walk: 5×0.5=2.5 km. Cycle: 20×0.5=10 km. Total=12.5 km', difficulty: 3, knowledge: { questionTokens: ['speed-distance-time'], correctToken: 'speed-distance-time', incorrectTokens: [null, 'speeds-added', 'one-segment', 'time-error'] } },
              ],
            },
            {
              id: 'VCMNA276',
              code: 'VCMNA276',
              title: 'Percentage Increase and Decrease',
              description: 'Solve problems involving percentage increase and decrease, with and without digital technologies',
              content: `# Percentage Increase and Decrease

## Percentage Increase
New value = Original × (1 + percentage/100)

**Example:** $80 increased by 25%
= $80 × 1.25 = $100

## Percentage Decrease
New value = Original × (1 - percentage/100)

**Example:** $80 decreased by 25%
= $80 × 0.75 = $60

## Finding Percentage Change
Percentage change = (Change ÷ Original) × 100

**Example:** Price goes from $40 to $50
Change = $10. Percentage = (10÷40)×100 = 25% increase

## Multipliers
- 15% increase → multiply by 1.15
- 15% decrease → multiply by 0.85
- 120% of original → multiply by 1.20

## Successive Changes
Multiply the multipliers together.
10% increase then 20% decrease:
1.10 × 0.80 = 0.88 (net 12% decrease)`,
              keyPoints: [
                'Increase: multiply by (1 + %/100)',
                'Decrease: multiply by (1 - %/100)',
                '% change = (change ÷ original) × 100',
                'Successive changes: multiply multipliers'
              ],
              knowledgeTokens: [
                { id: 'percentage-increase', name: 'Percentage Increase', description: 'Calculating increased amounts' },
                { id: 'percentage-decrease', name: 'Percentage Decrease', description: 'Calculating decreased amounts' },
                { id: 'finding-percentage-change', name: 'Finding Percentage Change', description: 'Calculating the percentage difference' },
                { id: 'successive-percentages', name: 'Successive Percentages', description: 'Multiple percentage changes', prerequisites: ['percentage-increase', 'percentage-decrease'] },
              ],
              examples: [
                { problem: 'Increase $60 by 30%', solution: '$78', explanation: '$60 × 1.30 = $78' },
                { problem: 'A price dropped from $80 to $64. Find the percentage decrease.', solution: '20%', explanation: 'Change = $16. (16÷80)×100 = 20%' }
              ],
              questions: [
                { id: 'VCMNA276-001', question: 'Increase $50 by 20%', options: ['$60', '$70', '$10', '$40'], correctAnswer: 0, explanation: '$50 × 1.20 = $60', difficulty: 1, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: [null, 'wrong-percentage', 'increase-only', 'subtracted'] } },
                { id: 'VCMNA276-002', question: 'Decrease $80 by 25%', options: ['$20', '$60', '$100', '$55'], correctAnswer: 1, explanation: '$80 × 0.75 = $60', difficulty: 1, knowledge: { questionTokens: ['percentage-decrease'], correctToken: 'percentage-decrease', incorrectTokens: ['decrease-only', null, 'added-instead', 'wrong-percentage'] } },
                { id: 'VCMNA276-003', question: 'A shirt was $40, now $50. What is the percentage increase?', options: ['10%', '20%', '25%', '50%'], correctAnswer: 2, explanation: 'Change=10. (10÷40)×100 = 25%', difficulty: 2, knowledge: { questionTokens: ['finding-percentage-change'], correctToken: 'finding-percentage-change', incorrectTokens: ['absolute-change', 'wrong-base', null, 'wrong-calculation'] } },
                { id: 'VCMNA276-004', question: 'What multiplier represents a 35% increase?', options: ['0.35', '1.35', '35', '0.65'], correctAnswer: 1, explanation: '100% + 35% = 135% = 1.35', difficulty: 1, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: ['percentage-only', null, 'not-decimal', 'decrease-multiplier'] } },
                { id: 'VCMNA276-005', question: 'A population decreased from 5000 to 4000. Find the percentage decrease.', options: ['10%', '20%', '25%', '1000%'], correctAnswer: 1, explanation: 'Change=1000. (1000÷5000)×100 = 20%', difficulty: 2, knowledge: { questionTokens: ['finding-percentage-change'], correctToken: 'finding-percentage-change', incorrectTokens: ['wrong-calculation', null, 'wrong-base', 'absolute-change'] } },
                { id: 'VCMNA276-006', question: 'Decrease 120 by 15%', options: ['102', '18', '105', '138'], correctAnswer: 0, explanation: '120 × 0.85 = 102', difficulty: 1, knowledge: { questionTokens: ['percentage-decrease'], correctToken: 'percentage-decrease', incorrectTokens: [null, 'decrease-only', 'wrong-calculation', 'added-instead'] } },
                { id: 'VCMNA276-007', question: '10% increase then 10% decrease. Net effect?', options: ['No change', '1% decrease', '1% increase', '20% decrease'], correctAnswer: 1, explanation: '1.10 × 0.90 = 0.99 = 1% decrease', difficulty: 3, knowledge: { questionTokens: ['successive-percentages'], correctToken: 'successive-percentages', incorrectTokens: ['cancelled-out', null, 'reversed', 'added-percentages'] } },
                { id: 'VCMNA276-008', question: 'A $200 item is reduced by 30%. What is the sale price?', options: ['$60', '$140', '$170', '$230'], correctAnswer: 1, explanation: '$200 × 0.70 = $140', difficulty: 1, knowledge: { questionTokens: ['percentage-decrease'], correctToken: 'percentage-decrease', incorrectTokens: ['reduction-only', null, 'wrong-percentage', 'added-instead'] } },
                { id: 'VCMNA276-009', question: 'What multiplier represents a 45% decrease?', options: ['0.45', '1.45', '0.55', '45'], correctAnswer: 2, explanation: '100% - 45% = 55% = 0.55', difficulty: 1, knowledge: { questionTokens: ['percentage-decrease'], correctToken: 'percentage-decrease', incorrectTokens: ['percentage-only', 'increase-multiplier', null, 'not-decimal'] } },
                { id: 'VCMNA276-010', question: 'House value increased from $400,000 to $480,000. Percentage increase?', options: ['8%', '20%', '80,000%', '16.7%'], correctAnswer: 1, explanation: 'Change=$80,000. (80000÷400000)×100 = 20%', difficulty: 2, knowledge: { questionTokens: ['finding-percentage-change'], correctToken: 'finding-percentage-change', incorrectTokens: ['wrong-calculation', null, 'absolute-change', 'wrong-base'] } },
                { id: 'VCMNA276-011', question: 'After a 40% increase, a price is $84. What was the original?', options: ['$60', '$50.40', '$117.60', '$33.60'], correctAnswer: 0, explanation: 'Original × 1.40 = 84. Original = 84 ÷ 1.40 = $60', difficulty: 3, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: [null, 'decrease-from-84', 'increase-from-84', '40%-of-84'] } },
                { id: 'VCMNA276-012', question: '20% increase followed by 25% increase. Combined percentage increase?', options: ['45%', '50%', '40%', '55%'], correctAnswer: 1, explanation: '1.20 × 1.25 = 1.50 = 50% increase', difficulty: 3, knowledge: { questionTokens: ['successive-percentages'], correctToken: 'successive-percentages', incorrectTokens: ['added-percentages', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMNA276-013', question: 'A $600 TV is discounted by 15%, then a further 10% off. Final price?', options: ['$459', '$450', '$510', '$525'], correctAnswer: 0, explanation: '$600 × 0.85 × 0.90 = $459', difficulty: 3, knowledge: { questionTokens: ['successive-percentages'], correctToken: 'successive-percentages', incorrectTokens: [null, 'added-discounts', 'one-discount', 'wrong-order'] } },
                { id: 'VCMNA276-014', question: 'After a 20% decrease, a price is $64. What was the original?', options: ['$80', '$51.20', '$76.80', '$12.80'], correctAnswer: 0, explanation: 'Original × 0.80 = 64. Original = 64 ÷ 0.80 = $80', difficulty: 3, knowledge: { questionTokens: ['percentage-decrease'], correctToken: 'percentage-decrease', incorrectTokens: [null, 'decrease-from-64', 'increase-from-64', '20%-of-64'] } },
                { id: 'VCMNA276-015', question: 'GST adds 10% to a price. A bill is $110 including GST. What was the pre-GST price?', options: ['$99', '$100', '$11', '$121'], correctAnswer: 1, explanation: 'Pre-GST × 1.10 = 110. Pre-GST = 110 ÷ 1.10 = $100', difficulty: 2, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: ['10%-off-110', null, 'gst-only', '10%-of-110'] } },
                { id: 'VCMNA276-016', question: 'Shares fell 50% then rose 50%. Net change?', options: ['No change', '25% decrease', '25% increase', '50% decrease'], correctAnswer: 1, explanation: '1 × 0.50 × 1.50 = 0.75 = 25% decrease', difficulty: 3, knowledge: { questionTokens: ['successive-percentages'], correctToken: 'successive-percentages', incorrectTokens: ['cancelled-out', null, 'reversed', 'same-as-start'] } },
                { id: 'VCMNA276-017', question: 'Increase 250 by 8%', options: ['20', '270', '258', '230'], correctAnswer: 1, explanation: '250 × 1.08 = 270', difficulty: 1, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: ['increase-only', null, 'wrong-calculation', 'subtracted'] } },
                { id: 'VCMNA276-018', question: 'A salary of $52,000 gets a 5% raise. New salary?', options: ['$2,600', '$54,600', '$49,400', '$57,200'], correctAnswer: 1, explanation: '$52,000 × 1.05 = $54,600', difficulty: 1, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: ['raise-only', null, 'subtracted', 'wrong-percentage'] } },
                { id: 'VCMNA276-019', question: 'To return to original after 25% decrease, what increase is needed?', options: ['25%', '33.3%', '20%', '75%'], correctAnswer: 1, explanation: 'After 25% decrease, value = 0.75. To return: 1÷0.75 = 1.333 = 33.3% increase', difficulty: 3, knowledge: { questionTokens: ['successive-percentages'], correctToken: 'successive-percentages', incorrectTokens: ['same-percentage', null, 'wrong-calculation', 'complement'] } },
                { id: 'VCMNA276-020', question: 'Price increased by 60% to $96. Original price?', options: ['$60', '$57.60', '$153.60', '$36'], correctAnswer: 0, explanation: 'Original × 1.60 = 96. Original = 96 ÷ 1.60 = $60', difficulty: 2, knowledge: { questionTokens: ['percentage-increase'], correctToken: 'percentage-increase', incorrectTokens: [null, '60%-of-96', 'added-60%', '60%-off-96'] } },
              ],
            },
            {
              id: 'VCMNA277',
              code: 'VCMNA277',
              title: 'Simple Interest',
              description: 'Solve problems involving simple interest',
              content: `# Simple Interest

Simple interest is calculated only on the original amount (principal).

## The Formula
**I = P × R × T**

Where:
- **I** = Interest earned
- **P** = Principal (starting amount)
- **R** = Rate (as a decimal)
- **T** = Time (usually in years)

## Example
$1000 invested at 5% for 3 years:
- I = 1000 × 0.05 × 3 = $150

## Total Amount
**A = P + I** or **A = P(1 + RT)**

Total = $1000 + $150 = $1150

## Finding Other Values
- **Rate = I ÷ (P × T)**
- **Time = I ÷ (P × R)**
- **Principal = I ÷ (R × T)**`,
              keyPoints: [
                'Simple Interest: I = P × R × T',
                'Rate must be as decimal (5% = 0.05)',
                'Total Amount = Principal + Interest',
                'Interest only calculated on original amount'
              ],
              knowledgeTokens: [
                { id: 'simple-interest-formula', name: 'Simple Interest Formula', description: 'Applying I = PRT' },
                { id: 'finding-total-amount', name: 'Finding Total Amount', description: 'Calculating A = P + I' },
                { id: 'finding-rate', name: 'Finding Interest Rate', description: 'Rearranging to find R', prerequisites: ['simple-interest-formula'] },
                { id: 'finding-time', name: 'Finding Time', description: 'Rearranging to find T', prerequisites: ['simple-interest-formula'] },
              ],
              examples: [
                { problem: 'Find interest on $2000 at 4% for 2 years', solution: '$160', explanation: 'I = 2000 × 0.04 × 2 = $160' },
                { problem: '$500 earns $75 interest in 3 years. Find the rate.', solution: '5%', explanation: 'R = 75 ÷ (500 × 3) = 0.05 = 5%' }
              ],
              questions: [
                { id: 'VCMNA277-001', question: 'Find simple interest on $1000 at 5% for 2 years', options: ['$100', '$50', '$1100', '$10'], correctAnswer: 0, explanation: 'I = 1000 × 0.05 × 2 = $100', difficulty: 1, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'one-year-only', 'total-not-interest', 'wrong-rate'] } },
                { id: 'VCMNA277-002', question: '$2000 at 3% for 4 years. Find the interest.', options: ['$240', '$60', '$2240', '$24'], correctAnswer: 0, explanation: 'I = 2000 × 0.03 × 4 = $240', difficulty: 1, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'one-year-only', 'total-not-interest', 'wrong-calculation'] } },
                { id: 'VCMNA277-003', question: '$5000 invested at 6% for 3 years. What is the total amount?', options: ['$900', '$5900', '$5000', '$6500'], correctAnswer: 1, explanation: 'I = 5000 × 0.06 × 3 = $900. Total = 5000 + 900 = $5900', difficulty: 2, knowledge: { questionTokens: ['finding-total-amount'], correctToken: 'finding-total-amount', incorrectTokens: ['interest-only', null, 'no-interest', 'wrong-calculation'] } },
                { id: 'VCMNA277-004', question: '$800 earns $96 interest in 4 years. What is the rate?', options: ['3%', '12%', '4%', '24%'], correctAnswer: 0, explanation: 'R = 96 ÷ (800 × 4) = 0.03 = 3%', difficulty: 2, knowledge: { questionTokens: ['finding-rate'], correctToken: 'finding-rate', incorrectTokens: [null, 'wrong-formula', 'confused-with-time', 'wrong-calculation'] } },
                { id: 'VCMNA277-005', question: 'At 5% per year, how long for $1000 to earn $200 interest?', options: ['2 years', '4 years', '5 years', '20 years'], correctAnswer: 1, explanation: 'T = 200 ÷ (1000 × 0.05) = 4 years', difficulty: 2, knowledge: { questionTokens: ['finding-time'], correctToken: 'finding-time', incorrectTokens: ['wrong-calculation', null, 'wrong-formula', 'wrong-calculation'] } },
                { id: 'VCMNA277-006', question: '$3000 at 4.5% for 2 years. Find the interest.', options: ['$270', '$135', '$3270', '$27'], correctAnswer: 0, explanation: 'I = 3000 × 0.045 × 2 = $270', difficulty: 2, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'one-year-only', 'total-not-interest', 'decimal-error'] } },
                { id: 'VCMNA277-007', question: 'What principal earns $180 at 6% over 3 years?', options: ['$1000', '$3240', '$540', '$32.40'], correctAnswer: 0, explanation: 'P = 180 ÷ (0.06 × 3) = $1000', difficulty: 3, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'wrong-formula', 'wrong-calculation', 'decimal-error'] } },
                { id: 'VCMNA277-008', question: '$4000 becomes $4480 after 2 years. Find the rate.', options: ['12%', '6%', '2%', '24%'], correctAnswer: 1, explanation: 'I = 480. R = 480 ÷ (4000 × 2) = 0.06 = 6%', difficulty: 3, knowledge: { questionTokens: ['finding-rate'], correctToken: 'finding-rate', incorrectTokens: ['wrong-calculation', null, 'wrong-calculation', 'wrong-formula'] } },
                { id: 'VCMNA277-009', question: 'Simple interest at 8% for 6 months on $2000?', options: ['$80', '$960', '$160', '$40'], correctAnswer: 0, explanation: '6 months = 0.5 years. I = 2000 × 0.08 × 0.5 = $80', difficulty: 2, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'wrong-time', 'one-year', 'wrong-calculation'] } },
                { id: 'VCMNA277-010', question: '$6000 at 7% for 5 years. Total amount?', options: ['$2100', '$8100', '$6000', '$6700'], correctAnswer: 1, explanation: 'I = 6000 × 0.07 × 5 = $2100. Total = 6000 + 2100 = $8100', difficulty: 2, knowledge: { questionTokens: ['finding-total-amount'], correctToken: 'finding-total-amount', incorrectTokens: ['interest-only', null, 'no-interest', 'one-year'] } },
                { id: 'VCMNA277-011', question: 'How long for $2500 to earn $375 at 5%?', options: ['3 years', '5 years', '2.5 years', '7.5 years'], correctAnswer: 0, explanation: 'T = 375 ÷ (2500 × 0.05) = 3 years', difficulty: 2, knowledge: { questionTokens: ['finding-time'], correctToken: 'finding-time', incorrectTokens: [null, 'wrong-calculation', 'wrong-formula', 'wrong-calculation'] } },
                { id: 'VCMNA277-012', question: '$1500 at 4% per year for 18 months. Interest?', options: ['$90', '$60', '$1590', '$108'], correctAnswer: 0, explanation: '18 months = 1.5 years. I = 1500 × 0.04 × 1.5 = $90', difficulty: 2, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'one-year', 'total-not-interest', 'two-years'] } },
                { id: 'VCMNA277-013', question: 'Interest of $420 on $3500 over 2 years. Rate?', options: ['6%', '12%', '3%', '8%'], correctAnswer: 0, explanation: 'R = 420 ÷ (3500 × 2) = 0.06 = 6%', difficulty: 2, knowledge: { questionTokens: ['finding-rate'], correctToken: 'finding-rate', incorrectTokens: [null, 'wrong-formula', 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMNA277-014', question: 'Compare: A) $2000 at 5% for 4 years, B) $4000 at 5% for 2 years', options: ['A earns more', 'B earns more', 'Same interest', 'Cannot compare'], correctAnswer: 2, explanation: 'A: 2000×0.05×4=$400. B: 4000×0.05×2=$400. Same!', difficulty: 3, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: ['wrong-calculation', 'wrong-calculation', null, 'misunderstanding'] } },
                { id: 'VCMNA277-015', question: '$10,000 deposit, 3.5% rate, 2 years. Total at end?', options: ['$700', '$10,700', '$10,350', '$735'], correctAnswer: 1, explanation: 'I = 10000 × 0.035 × 2 = $700. Total = $10,700', difficulty: 2, knowledge: { questionTokens: ['finding-total-amount'], correctToken: 'finding-total-amount', incorrectTokens: ['interest-only', null, 'one-year', 'wrong-rate'] } },
                { id: 'VCMNA277-016', question: 'At what rate will $8000 earn $1200 in 3 years?', options: ['4%', '5%', '15%', '4.5%'], correctAnswer: 1, explanation: 'R = 1200 ÷ (8000 × 3) = 0.05 = 5%', difficulty: 2, knowledge: { questionTokens: ['finding-rate'], correctToken: 'finding-rate', incorrectTokens: ['wrong-calculation', null, 'percentage-error', 'wrong-formula'] } },
                { id: 'VCMNA277-017', question: 'Principal that earns $225 at 4.5% over 2 years?', options: ['$2500', '$5000', '$1012.50', '$2025'], correctAnswer: 0, explanation: 'P = 225 ÷ (0.045 × 2) = $2500', difficulty: 3, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: [null, 'wrong-calculation', 'wrong-formula', 'wrong-calculation'] } },
                { id: 'VCMNA277-018', question: '$7500 grows to $8625 in 3 years. What is the interest rate?', options: ['5%', '15%', '3.75%', '11.25%'], correctAnswer: 0, explanation: 'I = 1125. R = 1125 ÷ (7500 × 3) = 0.05 = 5%', difficulty: 3, knowledge: { questionTokens: ['finding-rate'], correctToken: 'finding-rate', incorrectTokens: [null, 'wrong-base', 'wrong-calculation', 'wrong-formula'] } },
                { id: 'VCMNA277-019', question: 'Quarterly interest: $2000 at 8% p.a. for 3 months?', options: ['$160', '$40', '$480', '$20'], correctAnswer: 1, explanation: '3 months = 0.25 years. I = 2000 × 0.08 × 0.25 = $40', difficulty: 3, knowledge: { questionTokens: ['simple-interest-formula'], correctToken: 'simple-interest-formula', incorrectTokens: ['one-year', null, 'wrong-time', 'wrong-calculation'] } },
                { id: 'VCMNA277-020', question: 'Loan of $15,000 at 9% for 4 years. Total repayment?', options: ['$5400', '$20,400', '$15,540', '$19,050'], correctAnswer: 1, explanation: 'I = 15000 × 0.09 × 4 = $5400. Total = $20,400', difficulty: 2, knowledge: { questionTokens: ['finding-total-amount'], correctToken: 'finding-total-amount', incorrectTokens: ['interest-only', null, 'wrong-calculation', 'wrong-rate'] } },
              ],
            },
            {
              id: 'VCMNA282',
              code: 'VCMNA282',
              title: 'Index Laws',
              description: 'Extend and apply the index laws to variables, using positive integer indices',
              content: `# Index Laws

Index notation is a shorthand for repeated multiplication.

## Basic Concept
aⁿ means a multiplied by itself n times
- 2³ = 2 × 2 × 2 = 8
- x⁴ = x × x × x × x

## Index Law 1: Multiplication
**aᵐ × aⁿ = aᵐ⁺ⁿ**
When multiplying same bases, ADD the indices.
- x³ × x⁴ = x⁷
- 2² × 2⁵ = 2⁷

## Index Law 2: Division
**aᵐ ÷ aⁿ = aᵐ⁻ⁿ**
When dividing same bases, SUBTRACT the indices.
- x⁶ ÷ x² = x⁴
- 3⁵ ÷ 3² = 3³

## Index Law 3: Power of a Power
**(aᵐ)ⁿ = aᵐˣⁿ**
For a power of a power, MULTIPLY the indices.
- (x²)³ = x⁶
- (2³)² = 2⁶

## Index Law 4: Zero Index
**a⁰ = 1** (where a ≠ 0)
Any number to the power of 0 equals 1.`,
              keyPoints: [
                'Multiplication: add indices (aᵐ × aⁿ = aᵐ⁺ⁿ)',
                'Division: subtract indices (aᵐ ÷ aⁿ = aᵐ⁻ⁿ)',
                'Power of power: multiply indices ((aᵐ)ⁿ = aᵐˣⁿ)',
                'Zero index: a⁰ = 1'
              ],
              knowledgeTokens: [
                { id: 'multiplication-law', name: 'Multiplication Index Law', description: 'Adding indices when multiplying' },
                { id: 'division-law', name: 'Division Index Law', description: 'Subtracting indices when dividing' },
                { id: 'power-of-power', name: 'Power of a Power', description: 'Multiplying indices for nested powers' },
                { id: 'zero-index', name: 'Zero Index', description: 'Any base to power 0 equals 1' },
              ],
              examples: [
                { problem: 'Simplify: x⁵ × x³', solution: 'x⁸', explanation: 'Add indices: 5 + 3 = 8' },
                { problem: 'Simplify: (y²)⁴', solution: 'y⁸', explanation: 'Multiply indices: 2 × 4 = 8' }
              ],
              questions: [
                { id: 'VCMNA282-001', question: 'Simplify: x³ × x²', options: ['x⁵', 'x⁶', 'x¹', '2x⁵'], correctAnswer: 0, explanation: 'Add indices: 3 + 2 = 5', difficulty: 1, knowledge: { questionTokens: ['multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: [null, 'multiplied-indices', 'subtracted', 'wrong-base'] } },
                { id: 'VCMNA282-002', question: 'Simplify: y⁷ ÷ y³', options: ['y⁴', 'y¹⁰', 'y²¹', 'y⁻⁴'], correctAnswer: 0, explanation: 'Subtract indices: 7 - 3 = 4', difficulty: 1, knowledge: { questionTokens: ['division-law'], correctToken: 'division-law', incorrectTokens: [null, 'added-indices', 'multiplied', 'wrong-sign'] } },
                { id: 'VCMNA282-003', question: 'Simplify: (a²)³', options: ['a⁵', 'a⁶', 'a⁸', '2a³'], correctAnswer: 1, explanation: 'Multiply indices: 2 × 3 = 6', difficulty: 1, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: ['added-indices', null, 'wrong-calculation', 'wrong-base'] } },
                { id: 'VCMNA282-004', question: 'What is 5⁰?', options: ['0', '5', '1', '50'], correctAnswer: 2, explanation: 'Any number to power 0 = 1', difficulty: 1, knowledge: { questionTokens: ['zero-index'], correctToken: 'zero-index', incorrectTokens: ['zero-confusion', 'base-confusion', null, 'concatenation'] } },
                { id: 'VCMNA282-005', question: 'Simplify: 2³ × 2⁴', options: ['2⁷', '2¹²', '4⁷', '2¹'], correctAnswer: 0, explanation: 'Add indices: 3 + 4 = 7. Answer: 2⁷', difficulty: 1, knowledge: { questionTokens: ['multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: [null, 'multiplied-indices', 'bases-multiplied', 'subtracted'] } },
                { id: 'VCMNA282-006', question: 'Simplify: m⁸ ÷ m⁵', options: ['m³', 'm¹³', 'm⁴⁰', 'm'], correctAnswer: 0, explanation: 'Subtract indices: 8 - 5 = 3', difficulty: 1, knowledge: { questionTokens: ['division-law'], correctToken: 'division-law', incorrectTokens: [null, 'added-indices', 'multiplied', 'wrong-calculation'] } },
                { id: 'VCMNA282-007', question: 'Simplify: (x³)⁴', options: ['x⁷', 'x¹²', 'x⁸¹', '4x³'], correctAnswer: 1, explanation: 'Multiply indices: 3 × 4 = 12', difficulty: 1, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: ['added-indices', null, 'wrong-operation', 'wrong-base'] } },
                { id: 'VCMNA282-008', question: 'Simplify: x⁴ × x⁴', options: ['x⁸', 'x¹⁶', '2x⁴', 'x⁰'], correctAnswer: 0, explanation: 'Add indices: 4 + 4 = 8', difficulty: 1, knowledge: { questionTokens: ['multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: [null, 'multiplied-indices', 'bases-added', 'subtracted'] } },
                { id: 'VCMNA282-009', question: 'Simplify: 10⁶ ÷ 10²', options: ['10⁴', '10⁸', '10³', '10¹²'], correctAnswer: 0, explanation: 'Subtract indices: 6 - 2 = 4', difficulty: 1, knowledge: { questionTokens: ['division-law'], correctToken: 'division-law', incorrectTokens: [null, 'added-indices', 'wrong-subtraction', 'multiplied'] } },
                { id: 'VCMNA282-010', question: 'Simplify: (2²)⁵', options: ['2⁷', '2¹⁰', '4⁵', '2³²'], correctAnswer: 1, explanation: 'Multiply indices: 2 × 5 = 10', difficulty: 2, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: ['added-indices', null, 'base-squared', 'power-confusion'] } },
                { id: 'VCMNA282-011', question: 'Simplify: a² × a³ × a', options: ['a⁵', 'a⁶', 'a⁷', '3a⁶'], correctAnswer: 1, explanation: 'a = a¹. Add: 2 + 3 + 1 = 6', difficulty: 2, knowledge: { questionTokens: ['multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: ['missed-a', null, 'extra-count', 'coefficients-added'] } },
                { id: 'VCMNA282-012', question: 'Simplify: x¹⁰ ÷ x¹⁰', options: ['x⁰', '1', 'x²⁰', '0'], correctAnswer: 1, explanation: 'x¹⁰ ÷ x¹⁰ = x⁰ = 1', difficulty: 2, knowledge: { questionTokens: ['division-law', 'zero-index'], correctToken: 'zero-index', incorrectTokens: ['stopped-at-x⁰', null, 'added-indices', 'zero-confusion'] } },
                { id: 'VCMNA282-013', question: 'Simplify: (y⁴)² × y³', options: ['y⁹', 'y¹¹', 'y²⁴', 'y⁸'], correctAnswer: 1, explanation: '(y⁴)² = y⁸. Then y⁸ × y³ = y¹¹', difficulty: 3, knowledge: { questionTokens: ['power-of-power', 'multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: ['wrong-calculation', null, 'all-multiplied', 'forgot-y³'] } },
                { id: 'VCMNA282-014', question: 'Simplify: (3x²)²', options: ['3x⁴', '6x⁴', '9x⁴', '9x²'], correctAnswer: 2, explanation: '(3x²)² = 3² × (x²)² = 9x⁴', difficulty: 2, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: ['forgot-3', 'added-3', null, 'only-x'] } },
                { id: 'VCMNA282-015', question: 'Simplify: 2x³ × 3x²', options: ['5x⁵', '6x⁵', '6x⁶', '5x⁶'], correctAnswer: 1, explanation: '2×3 = 6, x³ × x² = x⁵. Answer: 6x⁵', difficulty: 2, knowledge: { questionTokens: ['multiplication-law'], correctToken: 'multiplication-law', incorrectTokens: ['added-coefficients', null, 'multiplied-indices', 'both-wrong'] } },
                { id: 'VCMNA282-016', question: 'Simplify: 12a⁶ ÷ 4a²', options: ['3a⁴', '8a⁴', '3a³', '3a⁸'], correctAnswer: 0, explanation: '12÷4 = 3, a⁶ ÷ a² = a⁴. Answer: 3a⁴', difficulty: 2, knowledge: { questionTokens: ['division-law'], correctToken: 'division-law', incorrectTokens: [null, 'subtracted-coefficients', 'wrong-index', 'added-indices'] } },
                { id: 'VCMNA282-017', question: 'Simplify: (2a³b²)²', options: ['4a⁶b⁴', '2a⁶b⁴', '4a⁵b⁴', '4a⁹b⁴'], correctAnswer: 0, explanation: '2² = 4, (a³)² = a⁶, (b²)² = b⁴', difficulty: 3, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: [null, 'forgot-2', 'added-indices', 'wrong-b'] } },
                { id: 'VCMNA282-018', question: 'Simplify: x⁵ × x² ÷ x³', options: ['x⁴', 'x⁰', 'x¹⁰', 'x⁶'], correctAnswer: 0, explanation: 'x⁵ × x² = x⁷. x⁷ ÷ x³ = x⁴', difficulty: 2, knowledge: { questionTokens: ['multiplication-law', 'division-law'], correctToken: 'division-law', incorrectTokens: [null, 'wrong-order', 'all-multiplied', 'wrong-subtraction'] } },
                { id: 'VCMNA282-019', question: 'What is (x²y³)⁴?', options: ['x⁶y⁷', 'x⁸y¹²', 'x²y¹²', '4x²y³'], correctAnswer: 1, explanation: '(x²)⁴ = x⁸, (y³)⁴ = y¹²', difficulty: 2, knowledge: { questionTokens: ['power-of-power'], correctToken: 'power-of-power', incorrectTokens: ['added-indices', null, 'forgot-x', 'coefficient-error'] } },
                { id: 'VCMNA282-020', question: 'Simplify: 15x⁸y⁴ ÷ 5x³y²', options: ['3x⁵y²', '10x⁵y²', '3x¹¹y⁶', '3x⁵y⁶'], correctAnswer: 0, explanation: '15÷5=3, x⁸÷x³=x⁵, y⁴÷y²=y²', difficulty: 3, knowledge: { questionTokens: ['division-law'], correctToken: 'division-law', incorrectTokens: [null, 'subtracted-coeff', 'added-indices', 'wrong-y'] } },
              ],
            },
          ],
        },
        {
          id: 'algebraic-expressions',
          title: 'Algebraic Expressions',
          description: 'Simplifying and expanding algebraic expressions',
          sections: [
            {
              id: 'VCMNA278',
              code: 'VCMNA278',
              title: 'Simplifying Algebraic Expressions',
              description: 'Extend and apply the distributive law to the expansion of algebraic expressions',
              content: `# Simplifying Algebraic Expressions

Algebra uses letters (variables) to represent unknown numbers.

## Terms and Like Terms
- **Term**: A number, variable, or product (e.g., 3x, 5, -2y²)
- **Like terms**: Terms with the same variable and power (e.g., 3x and 5x, but not 3x and 3x²)

## Collecting Like Terms
Only like terms can be added or subtracted.
- 3x + 5x = 8x
- 4a² + 2a² = 6a²
- 3x + 2y stays as 3x + 2y (unlike terms)

## Multiplying Terms
Multiply coefficients, add powers of like variables.
- 3x × 4x = 12x²
- 2a × 5b = 10ab
- 4x² × 3x = 12x³

## The Distributive Law
**a(b + c) = ab + ac**

Multiply the term outside by each term inside the brackets.
- 3(x + 4) = 3x + 12
- 2(3a - 5) = 6a - 10
- x(x + 3) = x² + 3x
- -2(y - 4) = -2y + 8

## Expanding and Simplifying
Expand brackets first, then collect like terms.
- 2(x + 3) + 4(x - 1) = 2x + 6 + 4x - 4 = 6x + 2`,
              keyPoints: [
                'Like terms have the same variable and power',
                'Only like terms can be combined',
                'Distributive law: a(b + c) = ab + ac',
                'Expand brackets before collecting like terms',
              ],
              knowledgeTokens: [
                { id: 'identifying-like-terms', name: 'Identifying Like Terms', description: 'Recognising terms that can be combined' },
                { id: 'collecting-like-terms', name: 'Collecting Like Terms', description: 'Adding and subtracting like terms', prerequisites: ['identifying-like-terms'] },
                { id: 'multiplying-terms', name: 'Multiplying Terms', description: 'Multiplying algebraic terms together' },
                { id: 'distributive-law', name: 'Distributive Law', description: 'Expanding brackets using a(b+c) = ab + ac', prerequisites: ['multiplying-terms'] },
                { id: 'expand-simplify', name: 'Expand and Simplify', description: 'Expanding then collecting like terms', prerequisites: ['distributive-law', 'collecting-like-terms'] },
              ],
              examples: [
                { problem: 'Simplify: 5x + 3x - 2x', solution: '6x', explanation: 'All are like terms: 5 + 3 - 2 = 6, so 6x' },
                { problem: 'Expand: 4(2x - 3)', solution: '8x - 12', explanation: '4 × 2x = 8x, 4 × (-3) = -12' },
              ],
              questions: [
                { id: 'VCMNA278-001', question: 'Simplify: 3x + 5x', options: ['8x', '8x²', '15x', '8'], correctAnswer: 0, explanation: '3x + 5x = 8x (add coefficients)', difficulty: 1, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: [null, 'multiplied', 'wrong-operation', 'lost-variable'] } },
                { id: 'VCMNA278-002', question: 'Simplify: 7a - 4a', options: ['11a', '3a', '-3a', '3'], correctAnswer: 1, explanation: '7a - 4a = 3a (subtract coefficients)', difficulty: 1, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: ['added', null, 'wrong-sign', 'lost-variable'] } },
                { id: 'VCMNA278-003', question: 'Which are like terms?', options: ['3x and 3y', '4a² and 5a²', '2x and 2x²', '5 and 5x'], correctAnswer: 1, explanation: 'Like terms have same variable AND same power. 4a² and 5a² both have a²', difficulty: 1, knowledge: { questionTokens: ['identifying-like-terms'], correctToken: 'identifying-like-terms', incorrectTokens: ['different-variables', null, 'different-powers', 'number-vs-variable'] } },
                { id: 'VCMNA278-004', question: 'Expand: 3(x + 2)', options: ['3x + 2', '3x + 6', 'x + 6', '3x + 5'], correctAnswer: 1, explanation: '3 × x = 3x, 3 × 2 = 6. So 3x + 6', difficulty: 1, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: ['forgot-2nd', null, 'forgot-x', 'wrong-calculation'] } },
                { id: 'VCMNA278-005', question: 'Simplify: 2x + 3y + 4x', options: ['9xy', '6x + 3y', '9x', '2x + 7y'], correctAnswer: 1, explanation: '2x + 4x = 6x, 3y stays. Answer: 6x + 3y', difficulty: 1, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: ['combined-unlike', null, 'forgot-y', 'wrong-addition'] } },
                { id: 'VCMNA278-006', question: 'Expand: 5(2a - 4)', options: ['10a - 4', '10a - 20', '7a - 4', '10a + 20'], correctAnswer: 1, explanation: '5 × 2a = 10a, 5 × (-4) = -20', difficulty: 1, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: ['forgot-multiply-4', null, 'added-instead', 'wrong-sign'] } },
                { id: 'VCMNA278-007', question: 'Simplify: 4x² + 3x + 2x²', options: ['9x²', '6x² + 3x', '9x³', '4x² + 5x'], correctAnswer: 1, explanation: '4x² + 2x² = 6x², 3x cannot combine with x². Answer: 6x² + 3x', difficulty: 2, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: ['combined-all', null, 'added-powers', 'wrong-coefficient'] } },
                { id: 'VCMNA278-008', question: 'What is 3a × 4a?', options: ['7a', '12a', '12a²', '7a²'], correctAnswer: 2, explanation: '3 × 4 = 12, a × a = a². Answer: 12a²', difficulty: 2, knowledge: { questionTokens: ['multiplying-terms'], correctToken: 'multiplying-terms', incorrectTokens: ['added-coefficients', 'forgot-square', null, 'added-both'] } },
                { id: 'VCMNA278-009', question: 'Expand: x(x + 5)', options: ['x + 5x', 'x² + 5x', '2x + 5', 'x² + 5'], correctAnswer: 1, explanation: 'x × x = x², x × 5 = 5x. Answer: x² + 5x', difficulty: 2, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: ['forgot-square', null, 'wrong-calculation', 'forgot-5x'] } },
                { id: 'VCMNA278-010', question: 'Expand: -2(y - 3)', options: ['-2y - 3', '-2y + 6', '-2y - 6', '2y - 6'], correctAnswer: 1, explanation: '-2 × y = -2y, -2 × (-3) = +6', difficulty: 2, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: ['forgot-sign', null, 'both-negative', 'wrong-sign'] } },
                { id: 'VCMNA278-011', question: 'Simplify: 5xy + 3xy - 2xy', options: ['6xy', '6x²y²', '10xy', '6'], correctAnswer: 0, explanation: '5 + 3 - 2 = 6, so 6xy', difficulty: 2, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: [null, 'added-powers', 'wrong-calculation', 'lost-variables'] } },
                { id: 'VCMNA278-012', question: 'Expand and simplify: 2(x + 3) + 3(x + 1)', options: ['5x + 4', '5x + 9', '5x + 6', '6x + 6'], correctAnswer: 1, explanation: '2x + 6 + 3x + 3 = 5x + 9', difficulty: 2, knowledge: { questionTokens: ['expand-simplify'], correctToken: 'expand-simplify', incorrectTokens: ['wrong-calculation', null, 'missed-term', 'coefficients'] } },
                { id: 'VCMNA278-013', question: 'What is 2x × 3y?', options: ['5xy', '6xy', '6x²y', '5x + 5y'], correctAnswer: 1, explanation: '2 × 3 = 6, x × y = xy. Answer: 6xy', difficulty: 1, knowledge: { questionTokens: ['multiplying-terms'], correctToken: 'multiplying-terms', incorrectTokens: ['added-coefficients', null, 'extra-power', 'added-terms'] } },
                { id: 'VCMNA278-014', question: 'Expand: a(2a + 3b)', options: ['2a² + 3b', '2a² + 3ab', '2a + 3ab', '5a²b'], correctAnswer: 1, explanation: 'a × 2a = 2a², a × 3b = 3ab', difficulty: 2, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: ['forgot-a-in-2nd', null, 'forgot-square', 'combined'] } },
                { id: 'VCMNA278-015', question: 'Simplify: 8p - 3p + 2p - p', options: ['6p', '4p', '8p', '14p'], correctAnswer: 0, explanation: '8 - 3 + 2 - 1 = 6, so 6p', difficulty: 2, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: [null, 'missed-term', 'wrong-signs', 'added-all'] } },
                { id: 'VCMNA278-016', question: 'Expand and simplify: 4(x - 2) - 2(x + 3)', options: ['2x - 2', '2x - 14', '6x - 14', '2x + 2'], correctAnswer: 1, explanation: '4x - 8 - 2x - 6 = 2x - 14', difficulty: 3, knowledge: { questionTokens: ['expand-simplify'], correctToken: 'expand-simplify', incorrectTokens: ['wrong-subtraction', null, 'wrong-signs', 'sign-error'] } },
                { id: 'VCMNA278-017', question: 'What is 3x² × 2x?', options: ['6x²', '6x³', '5x³', '5x²'], correctAnswer: 1, explanation: '3 × 2 = 6, x² × x = x³. Answer: 6x³', difficulty: 2, knowledge: { questionTokens: ['multiplying-terms'], correctToken: 'multiplying-terms', incorrectTokens: ['forgot-add-powers', null, 'added-coefficients', 'wrong-power'] } },
                { id: 'VCMNA278-018', question: 'Expand: -3(2x - 5y + 1)', options: ['-6x + 15y - 3', '-6x - 15y - 3', '-6x + 15y + 1', '6x - 15y + 3'], correctAnswer: 0, explanation: '-3×2x = -6x, -3×(-5y) = +15y, -3×1 = -3', difficulty: 3, knowledge: { questionTokens: ['distributive-law'], correctToken: 'distributive-law', incorrectTokens: [null, 'wrong-sign-y', 'missed-last', 'all-wrong-signs'] } },
                { id: 'VCMNA278-019', question: 'Simplify: 3a + 2b - a + 4b - 2a', options: ['6b', '6a + 6b', '6b', '6ab'], correctAnswer: 0, explanation: '3a - a - 2a = 0a, 2b + 4b = 6b. Answer: 6b', difficulty: 3, knowledge: { questionTokens: ['collecting-like-terms'], correctToken: 'collecting-like-terms', incorrectTokens: [null, 'wrong-a', 'correct', 'combined'] } },
                { id: 'VCMNA278-020', question: 'Expand and simplify: x(x + 2) + 2(x + 3)', options: ['x² + 4x + 6', 'x² + 2x + 6', '3x² + 6', 'x² + 4x + 3'], correctAnswer: 0, explanation: 'x² + 2x + 2x + 6 = x² + 4x + 6', difficulty: 3, knowledge: { questionTokens: ['expand-simplify'], correctToken: 'expand-simplify', incorrectTokens: [null, 'missed-2x', 'combined-x²', 'wrong-constant'] } },
              ],
            },
            {
              id: 'VCMNA279',
              code: 'VCMNA279',
              title: 'Solving Linear Equations',
              description: 'Solve linear equations using algebraic and graphical techniques. Verify solutions by substitution',
              content: `# Solving Linear Equations

A linear equation has a variable (like x) raised to the power of 1.

## What is an Equation?
An equation states that two expressions are equal.
- 3x + 5 = 14 is an equation
- The solution is the value that makes it true

## Solving One-Step Equations
Do the opposite (inverse) operation to both sides.
- x + 5 = 12 → x = 12 - 5 = 7
- x - 3 = 8 → x = 8 + 3 = 11
- 4x = 20 → x = 20 ÷ 4 = 5
- x/3 = 6 → x = 6 × 3 = 18

## Solving Two-Step Equations
1. Deal with addition/subtraction first
2. Then deal with multiplication/division

**Example:** 2x + 3 = 11
- 2x + 3 - 3 = 11 - 3 → 2x = 8
- 2x ÷ 2 = 8 ÷ 2 → x = 4

## Equations with Variables on Both Sides
Move all variables to one side.

**Example:** 5x - 2 = 3x + 6
- 5x - 3x - 2 = 6
- 2x - 2 = 6
- 2x = 8
- x = 4

## Verifying Solutions
Substitute back to check: 5(4) - 2 = 18, 3(4) + 6 = 18 ✓`,
              keyPoints: [
                'Do the same operation to both sides',
                'Undo operations in reverse order (BODMAS backwards)',
                'Move all variables to one side',
                'Always verify by substituting back',
              ],
              knowledgeTokens: [
                { id: 'one-step-equations', name: 'One-Step Equations', description: 'Solving equations with one operation' },
                { id: 'two-step-equations', name: 'Two-Step Equations', description: 'Solving equations with two operations', prerequisites: ['one-step-equations'] },
                { id: 'variables-both-sides', name: 'Variables on Both Sides', description: 'Moving variables to one side', prerequisites: ['two-step-equations'] },
                { id: 'verifying-solutions', name: 'Verifying Solutions', description: 'Checking answers by substitution' },
                { id: 'equations-with-brackets', name: 'Equations with Brackets', description: 'Expanding before solving', prerequisites: ['two-step-equations'] },
              ],
              examples: [
                { problem: 'Solve: 3x - 7 = 14', solution: 'x = 7', explanation: '3x = 14 + 7 = 21, x = 21 ÷ 3 = 7' },
                { problem: 'Solve: 4x + 5 = 2x + 13', solution: 'x = 4', explanation: '4x - 2x = 13 - 5, 2x = 8, x = 4' },
              ],
              questions: [
                { id: 'VCMNA279-001', question: 'Solve: x + 7 = 12', options: ['x = 5', 'x = 19', 'x = -5', 'x = 7'], correctAnswer: 0, explanation: 'x = 12 - 7 = 5', difficulty: 1, knowledge: { questionTokens: ['one-step-equations'], correctToken: 'one-step-equations', incorrectTokens: [null, 'added-instead', 'wrong-sign', 'wrong-value'] } },
                { id: 'VCMNA279-002', question: 'Solve: x - 4 = 9', options: ['x = 5', 'x = 13', 'x = -13', 'x = 36'], correctAnswer: 1, explanation: 'x = 9 + 4 = 13', difficulty: 1, knowledge: { questionTokens: ['one-step-equations'], correctToken: 'one-step-equations', incorrectTokens: ['subtracted', null, 'wrong-sign', 'multiplied'] } },
                { id: 'VCMNA279-003', question: 'Solve: 5x = 35', options: ['x = 30', 'x = 7', 'x = 40', 'x = 175'], correctAnswer: 1, explanation: 'x = 35 ÷ 5 = 7', difficulty: 1, knowledge: { questionTokens: ['one-step-equations'], correctToken: 'one-step-equations', incorrectTokens: ['subtracted', null, 'added', 'multiplied'] } },
                { id: 'VCMNA279-004', question: 'Solve: x/4 = 6', options: ['x = 2', 'x = 10', 'x = 24', 'x = 1.5'], correctAnswer: 2, explanation: 'x = 6 × 4 = 24', difficulty: 1, knowledge: { questionTokens: ['one-step-equations'], correctToken: 'one-step-equations', incorrectTokens: ['divided', 'added', null, 'divided'] } },
                { id: 'VCMNA279-005', question: 'Solve: 2x + 5 = 13', options: ['x = 9', 'x = 4', 'x = 8', 'x = 6'], correctAnswer: 1, explanation: '2x = 13 - 5 = 8, x = 8 ÷ 2 = 4', difficulty: 1, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: ['forgot-subtract', null, 'forgot-divide', 'wrong-order'] } },
                { id: 'VCMNA279-006', question: 'Solve: 3x - 2 = 10', options: ['x = 4', 'x = 6', 'x = 8', 'x = 2.67'], correctAnswer: 0, explanation: '3x = 10 + 2 = 12, x = 12 ÷ 3 = 4', difficulty: 1, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: [null, 'wrong-calculation', 'forgot-divide', 'divided-first'] } },
                { id: 'VCMNA279-007', question: 'Solve: 4x + 3 = 3x + 7', options: ['x = 4', 'x = 10', 'x = 1', 'x = -4'], correctAnswer: 0, explanation: '4x - 3x = 7 - 3, x = 4', difficulty: 2, knowledge: { questionTokens: ['variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: [null, 'added-xs', 'wrong-calculation', 'wrong-sign'] } },
                { id: 'VCMNA279-008', question: 'Solve: 5x - 3 = 2x + 9', options: ['x = 2', 'x = 4', 'x = 6', 'x = 3'], correctAnswer: 1, explanation: '5x - 2x = 9 + 3, 3x = 12, x = 4', difficulty: 2, knowledge: { questionTokens: ['variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: ['wrong-calculation', null, 'wrong-division', 'wrong-subtraction'] } },
                { id: 'VCMNA279-009', question: 'Solve: 2(x + 3) = 14', options: ['x = 4', 'x = 5.5', 'x = 7', 'x = 8'], correctAnswer: 0, explanation: '2x + 6 = 14, 2x = 8, x = 4', difficulty: 2, knowledge: { questionTokens: ['equations-with-brackets'], correctToken: 'equations-with-brackets', incorrectTokens: [null, 'no-expand', 'wrong-expand', 'wrong-calculation'] } },
                { id: 'VCMNA279-010', question: 'Verify: Is x = 3 a solution to 2x + 5 = 11?', options: ['Yes', 'No', 'Cannot tell', 'Only if negative'], correctAnswer: 0, explanation: '2(3) + 5 = 6 + 5 = 11 ✓', difficulty: 1, knowledge: { questionTokens: ['verifying-solutions'], correctToken: 'verifying-solutions', incorrectTokens: [null, 'wrong-calculation', 'no-substitution', 'sign-error'] } },
                { id: 'VCMNA279-011', question: 'Solve: 7x - 4 = 3x + 12', options: ['x = 2', 'x = 4', 'x = 8', 'x = -4'], correctAnswer: 1, explanation: '7x - 3x = 12 + 4, 4x = 16, x = 4', difficulty: 2, knowledge: { questionTokens: ['variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: ['wrong-combination', null, 'forgot-divide', 'wrong-sign'] } },
                { id: 'VCMNA279-012', question: 'Solve: x/5 + 2 = 7', options: ['x = 25', 'x = 9', 'x = 45', 'x = 1'], correctAnswer: 0, explanation: 'x/5 = 5, x = 25', difficulty: 2, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: [null, 'forgot-multiply', 'wrong-order', 'divided'] } },
                { id: 'VCMNA279-013', question: 'Solve: 3(x - 2) = 15', options: ['x = 7', 'x = 5', 'x = 11', 'x = 3'], correctAnswer: 0, explanation: '3x - 6 = 15, 3x = 21, x = 7', difficulty: 2, knowledge: { questionTokens: ['equations-with-brackets'], correctToken: 'equations-with-brackets', incorrectTokens: [null, 'no-expand', 'wrong-calculation', 'wrong-division'] } },
                { id: 'VCMNA279-014', question: 'Solve: 6x = 2x + 20', options: ['x = 5', 'x = 2.5', 'x = 10', 'x = 4'], correctAnswer: 0, explanation: '6x - 2x = 20, 4x = 20, x = 5', difficulty: 2, knowledge: { questionTokens: ['variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: [null, 'divided-by-8', 'forgot-divide', 'wrong-subtraction'] } },
                { id: 'VCMNA279-015', question: 'Solve: 4(x + 1) = 2(x + 7)', options: ['x = 5', 'x = 6', 'x = 4', 'x = 3'], correctAnswer: 0, explanation: '4x + 4 = 2x + 14, 2x = 10, x = 5', difficulty: 3, knowledge: { questionTokens: ['equations-with-brackets', 'variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: [null, 'expand-error', 'calculation-error', 'sign-error'] } },
                { id: 'VCMNA279-016', question: 'Solve: 5 - 2x = 11', options: ['x = 3', 'x = -3', 'x = 8', 'x = -8'], correctAnswer: 1, explanation: '-2x = 11 - 5 = 6, x = 6 ÷ (-2) = -3', difficulty: 2, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: ['wrong-sign', null, 'forgot-negative', 'wrong-calculation'] } },
                { id: 'VCMNA279-017', question: 'Solve: 2x/3 = 8', options: ['x = 12', 'x = 16/3', 'x = 24', 'x = 4'], correctAnswer: 0, explanation: '2x = 24, x = 12', difficulty: 2, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: [null, 'divided-by-2', 'wrong-order', 'divided-by-6'] } },
                { id: 'VCMNA279-018', question: 'Solve: 3(2x - 1) = 4x + 5', options: ['x = 4', 'x = 2', 'x = 8', 'x = 1'], correctAnswer: 0, explanation: '6x - 3 = 4x + 5, 2x = 8, x = 4', difficulty: 3, knowledge: { questionTokens: ['equations-with-brackets', 'variables-both-sides'], correctToken: 'variables-both-sides', incorrectTokens: [null, 'expand-error', 'calculation-error', 'wrong-division'] } },
                { id: 'VCMNA279-019', question: 'Solve: (x + 5)/2 = 9', options: ['x = 13', 'x = 7', 'x = 4', 'x = 23'], correctAnswer: 0, explanation: 'x + 5 = 18, x = 13', difficulty: 2, knowledge: { questionTokens: ['two-step-equations'], correctToken: 'two-step-equations', incorrectTokens: [null, 'divided-instead', 'wrong-order', 'wrong-subtraction'] } },
                { id: 'VCMNA279-020', question: 'Solve: 8 - 3(x - 2) = 2', options: ['x = 4', 'x = 0', 'x = 2', 'x = 6'], correctAnswer: 0, explanation: '8 - 3x + 6 = 2, 14 - 3x = 2, 3x = 12, x = 4', difficulty: 3, knowledge: { questionTokens: ['equations-with-brackets'], correctToken: 'equations-with-brackets', incorrectTokens: [null, 'expand-error', 'sign-error', 'wrong-calculation'] } },
              ],
            },
            {
              id: 'VCMNA280',
              code: 'VCMNA280',
              title: 'Linear Graphs',
              description: 'Plot linear relationships on the Cartesian plane with and without the use of digital technologies',
              content: `# Linear Graphs

A linear graph is a straight line on the coordinate plane.

## The Coordinate Plane
- **x-axis**: Horizontal line
- **y-axis**: Vertical line
- **Origin**: The point (0, 0)
- Points are written as (x, y)

## Plotting Points
For point (3, 2): move 3 right and 2 up from the origin.

## Linear Relationships
The equation y = mx + c gives a straight line.
- **m** = gradient (slope) - how steep the line is
- **c** = y-intercept - where the line crosses the y-axis

## Gradient (Slope)
Gradient = rise ÷ run = (change in y) ÷ (change in x)
- Positive gradient: line goes up from left to right ↗
- Negative gradient: line goes down from left to right ↘
- Zero gradient: horizontal line →

## Finding Gradient
Between points (x₁, y₁) and (x₂, y₂):
**m = (y₂ - y₁) ÷ (x₂ - x₁)**

## The Y-Intercept
The value of y when x = 0. In y = 3x + 2, the y-intercept is 2.

## Graphing from Equation
1. Find the y-intercept (set x = 0)
2. Use gradient to find another point
3. Draw the line through both points`,
              keyPoints: [
                'Linear graphs are straight lines',
                'y = mx + c: m is gradient, c is y-intercept',
                'Gradient = rise ÷ run',
                'Y-intercept is where line crosses y-axis (x = 0)',
              ],
              knowledgeTokens: [
                { id: 'plotting-points', name: 'Plotting Points', description: 'Locating points on the coordinate plane' },
                { id: 'understanding-gradient', name: 'Understanding Gradient', description: 'Recognising slope of a line' },
                { id: 'calculating-gradient', name: 'Calculating Gradient', description: 'Finding gradient from two points', prerequisites: ['understanding-gradient'] },
                { id: 'y-intercept', name: 'Y-Intercept', description: 'Finding where line crosses y-axis' },
                { id: 'equation-of-line', name: 'Equation of Line', description: 'Using y = mx + c form', prerequisites: ['understanding-gradient', 'y-intercept'] },
              ],
              examples: [
                { problem: 'Find the gradient of line through (1, 3) and (4, 9)', solution: 'm = 2', explanation: 'm = (9-3)/(4-1) = 6/3 = 2' },
                { problem: 'State the gradient and y-intercept of y = 4x - 3', solution: 'm = 4, c = -3', explanation: 'Comparing with y = mx + c: m = 4, c = -3' },
              ],
              questions: [
                { id: 'VCMNA280-001', question: 'What is the y-intercept of y = 2x + 5?', options: ['2', '5', '0', '7'], correctAnswer: 1, explanation: 'In y = mx + c, c is the y-intercept. Here c = 5', difficulty: 1, knowledge: { questionTokens: ['y-intercept'], correctToken: 'y-intercept', incorrectTokens: ['gradient-confusion', null, 'origin-confusion', 'added'] } },
                { id: 'VCMNA280-002', question: 'What is the gradient of y = 3x - 2?', options: ['-2', '3', '1', '6'], correctAnswer: 1, explanation: 'In y = mx + c, m is the gradient. Here m = 3', difficulty: 1, knowledge: { questionTokens: ['understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: ['y-intercept-confusion', null, 'wrong-value', 'multiplied'] } },
                { id: 'VCMNA280-003', question: 'A line goes through (0, 4) and (2, 10). What is the gradient?', options: ['2', '3', '7', '14'], correctAnswer: 1, explanation: 'm = (10-4)/(2-0) = 6/2 = 3', difficulty: 2, knowledge: { questionTokens: ['calculating-gradient'], correctToken: 'calculating-gradient', incorrectTokens: ['wrong-calculation', null, 'added', 'multiplied'] } },
                { id: 'VCMNA280-004', question: 'Which point lies on the y-axis?', options: ['(2, 0)', '(0, 5)', '(3, 3)', '(1, 1)'], correctAnswer: 1, explanation: 'Points on the y-axis have x = 0', difficulty: 1, knowledge: { questionTokens: ['plotting-points'], correctToken: 'plotting-points', incorrectTokens: ['x-axis', null, 'neither-axis', 'neither-axis'] } },
                { id: 'VCMNA280-005', question: 'What is the gradient between (1, 2) and (3, 8)?', options: ['2', '3', '5', '6'], correctAnswer: 1, explanation: 'm = (8-2)/(3-1) = 6/2 = 3', difficulty: 2, knowledge: { questionTokens: ['calculating-gradient'], correctToken: 'calculating-gradient', incorrectTokens: ['divided-wrong', null, 'added-coords', 'subtracted-wrong'] } },
                { id: 'VCMNA280-006', question: 'A horizontal line has gradient...', options: ['1', 'undefined', '0', '-1'], correctAnswer: 2, explanation: 'Horizontal lines have zero rise, so gradient = 0', difficulty: 1, knowledge: { questionTokens: ['understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: ['confused', 'vertical', null, 'confused'] } },
                { id: 'VCMNA280-007', question: 'What is the y-intercept of y = -x + 7?', options: ['-1', '7', '0', '-7'], correctAnswer: 1, explanation: 'In y = mx + c, c = 7 is the y-intercept', difficulty: 1, knowledge: { questionTokens: ['y-intercept'], correctToken: 'y-intercept', incorrectTokens: ['gradient-confusion', null, 'origin', 'wrong-sign'] } },
                { id: 'VCMNA280-008', question: 'Line through (2, 5) and (6, 13). Find gradient.', options: ['2', '8', '4', '18'], correctAnswer: 0, explanation: 'm = (13-5)/(6-2) = 8/4 = 2', difficulty: 2, knowledge: { questionTokens: ['calculating-gradient'], correctToken: 'calculating-gradient', incorrectTokens: [null, 'numerator-only', 'wrong-division', 'added-all'] } },
                { id: 'VCMNA280-009', question: 'Which equation has a negative gradient?', options: ['y = 2x + 1', 'y = x', 'y = -3x + 5', 'y = 5'], correctAnswer: 2, explanation: 'y = -3x + 5 has m = -3, which is negative', difficulty: 1, knowledge: { questionTokens: ['understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: ['positive', 'positive', null, 'zero'] } },
                { id: 'VCMNA280-010', question: 'If y = 4x, what is the y-intercept?', options: ['4', '0', '1', 'undefined'], correctAnswer: 1, explanation: 'y = 4x can be written as y = 4x + 0, so c = 0', difficulty: 2, knowledge: { questionTokens: ['y-intercept'], correctToken: 'y-intercept', incorrectTokens: ['gradient-confusion', null, 'confused', 'no-intercept'] } },
                { id: 'VCMNA280-011', question: 'Point (4, -2) is in which quadrant?', options: ['I', 'II', 'III', 'IV'], correctAnswer: 3, explanation: 'x positive, y negative = Quadrant IV', difficulty: 2, knowledge: { questionTokens: ['plotting-points'], correctToken: 'plotting-points', incorrectTokens: ['wrong-quadrant', 'wrong-quadrant', 'wrong-quadrant', null] } },
                { id: 'VCMNA280-012', question: 'Find gradient: (0, -3) to (4, 5)', options: ['2', '8', '-2', '0.5'], correctAnswer: 0, explanation: 'm = (5-(-3))/(4-0) = 8/4 = 2', difficulty: 2, knowledge: { questionTokens: ['calculating-gradient'], correctToken: 'calculating-gradient', incorrectTokens: [null, 'numerator-only', 'wrong-sign', 'inverted'] } },
                { id: 'VCMNA280-013', question: 'What is the equation of a line with gradient 2 and y-intercept 3?', options: ['y = 3x + 2', 'y = 2x + 3', 'y = 2x - 3', 'y = 5x'], correctAnswer: 1, explanation: 'y = mx + c with m = 2, c = 3 gives y = 2x + 3', difficulty: 1, knowledge: { questionTokens: ['equation-of-line'], correctToken: 'equation-of-line', incorrectTokens: ['swapped', null, 'wrong-sign', 'added'] } },
                { id: 'VCMNA280-014', question: 'A line passes through origin with gradient 5. Its equation is...', options: ['y = 5', 'x = 5', 'y = 5x', 'y = x + 5'], correctAnswer: 2, explanation: 'Through origin means c = 0. With m = 5: y = 5x', difficulty: 2, knowledge: { questionTokens: ['equation-of-line'], correctToken: 'equation-of-line', incorrectTokens: ['horizontal', 'vertical', null, 'added-intercept'] } },
                { id: 'VCMNA280-015', question: 'Line y = 2x + 4. When x = 3, what is y?', options: ['6', '10', '7', '9'], correctAnswer: 1, explanation: 'y = 2(3) + 4 = 6 + 4 = 10', difficulty: 1, knowledge: { questionTokens: ['equation-of-line'], correctToken: 'equation-of-line', incorrectTokens: ['forgot-4', null, 'wrong-calculation', 'wrong-multiplication'] } },
                { id: 'VCMNA280-016', question: 'Gradient between (-2, 1) and (2, 9)?', options: ['2', '4', '8', '10'], correctAnswer: 0, explanation: 'm = (9-1)/(2-(-2)) = 8/4 = 2', difficulty: 2, knowledge: { questionTokens: ['calculating-gradient'], correctToken: 'calculating-gradient', incorrectTokens: [null, 'wrong-denominator', 'numerator-only', 'added'] } },
                { id: 'VCMNA280-017', question: 'Which line is steeper: y = 3x + 1 or y = 5x - 2?', options: ['y = 3x + 1', 'y = 5x - 2', 'Same steepness', 'Cannot tell'], correctAnswer: 1, explanation: 'Gradient of 5 is steeper than gradient of 3', difficulty: 2, knowledge: { questionTokens: ['understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: ['wrong', null, 'same', 'no-comparison'] } },
                { id: 'VCMNA280-018', question: 'A vertical line has gradient...', options: ['0', '1', 'undefined', '-1'], correctAnswer: 2, explanation: 'Vertical lines have undefined gradient (divide by zero)', difficulty: 2, knowledge: { questionTokens: ['understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: ['horizontal', 'confused', null, 'confused'] } },
                { id: 'VCMNA280-019', question: 'Line passes through (3, 7) with gradient 2. What is y when x = 5?', options: ['11', '9', '13', '7'], correctAnswer: 0, explanation: 'y = 2x + c. At (3,7): 7 = 6 + c, c = 1. When x = 5: y = 10 + 1 = 11', difficulty: 3, knowledge: { questionTokens: ['equation-of-line'], correctToken: 'equation-of-line', incorrectTokens: [null, 'wrong-c', 'wrong-calculation', 'no-change'] } },
                { id: 'VCMNA280-020', question: 'Lines y = 2x + 3 and y = 2x - 1 are...', options: ['Parallel', 'Perpendicular', 'Intersecting', 'The same'], correctAnswer: 0, explanation: 'Same gradient (m = 2) but different y-intercepts = parallel lines', difficulty: 2, knowledge: { questionTokens: ['equation-of-line', 'understanding-gradient'], correctToken: 'understanding-gradient', incorrectTokens: [null, 'perpendicular-error', 'same-gradient', 'identical'] } },
              ],
            },
            {
              id: 'VCMNA281',
              code: 'VCMNA281',
              title: 'Factorising Algebraic Expressions',
              description: 'Factorise algebraic expressions by identifying numerical factors and common algebraic factors',
              content: `# Factorising Algebraic Expressions

Factorising is the reverse of expanding. We write an expression as a product of factors.

## Highest Common Factor (HCF)
Find the largest factor common to all terms.

**Example:** 6x + 12
- HCF of 6 and 12 is 6
- 6x + 12 = 6(x + 2)

## Factorising with Variables
Look for common variables as well as numbers.

**Example:** 4x² + 8x
- HCF of coefficients: 4
- HCF of variables: x (lowest power)
- 4x² + 8x = 4x(x + 2)

## Steps to Factorise
1. Find the HCF of all terms
2. Write the HCF outside the brackets
3. Divide each term by the HCF to find what goes inside

## Checking Your Answer
Expand the brackets to verify you get the original expression.
- 4x(x + 2) = 4x² + 8x ✓

## Common Mistakes
- Not taking out the highest common factor
- Forgetting to include all terms
- Sign errors with negative terms

## Examples with Negatives
- 3x - 6 = 3(x - 2)
- -2x - 4 = -2(x + 2) or 2(-x - 2)
- 5x² - 10x = 5x(x - 2)`,
              keyPoints: [
                'Factorising is the reverse of expanding',
                'Find the HCF of all terms',
                'Include both numbers and variables in the HCF',
                'Always check by expanding back',
              ],
              knowledgeTokens: [
                { id: 'hcf-numbers', name: 'HCF of Numbers', description: 'Finding highest common factor of coefficients' },
                { id: 'hcf-variables', name: 'HCF of Variables', description: 'Finding common variable factors' },
                { id: 'factorising-expressions', name: 'Factorising Expressions', description: 'Taking out common factors', prerequisites: ['hcf-numbers', 'hcf-variables'] },
                { id: 'checking-factorisation', name: 'Checking Factorisation', description: 'Verifying by expanding' },
              ],
              examples: [
                { problem: 'Factorise: 8x + 12', solution: '4(2x + 3)', explanation: 'HCF = 4. 8x ÷ 4 = 2x, 12 ÷ 4 = 3' },
                { problem: 'Factorise: 6x² - 9x', solution: '3x(2x - 3)', explanation: 'HCF = 3x. 6x² ÷ 3x = 2x, -9x ÷ 3x = -3' },
              ],
              questions: [
                { id: 'VCMNA281-001', question: 'Factorise: 4x + 8', options: ['4(x + 2)', '2(2x + 4)', '4(x + 8)', '8(x + 1)'], correctAnswer: 0, explanation: 'HCF = 4. 4x ÷ 4 = x, 8 ÷ 4 = 2', difficulty: 1, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'not-hcf', 'wrong-division', 'wrong-hcf'] } },
                { id: 'VCMNA281-002', question: 'Factorise: 6x - 12', options: ['6(x - 2)', '3(2x - 4)', '6(x - 12)', '2(3x - 6)'], correctAnswer: 0, explanation: 'HCF = 6. 6x ÷ 6 = x, -12 ÷ 6 = -2', difficulty: 1, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'not-hcf', 'wrong-division', 'not-hcf'] } },
                { id: 'VCMNA281-003', question: 'What is the HCF of 12 and 18?', options: ['2', '3', '6', '36'], correctAnswer: 2, explanation: '12 = 2×6, 18 = 3×6. HCF = 6', difficulty: 1, knowledge: { questionTokens: ['hcf-numbers'], correctToken: 'hcf-numbers', incorrectTokens: ['too-small', 'too-small', null, 'lcm'] } },
                { id: 'VCMNA281-004', question: 'Factorise: 3x² + 6x', options: ['3(x² + 2x)', '3x(x + 2)', 'x(3x + 6)', '6x(x + 1)'], correctAnswer: 1, explanation: 'HCF = 3x. 3x² ÷ 3x = x, 6x ÷ 3x = 2', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions', 'hcf-variables'], correctToken: 'factorising-expressions', incorrectTokens: ['missed-x', null, 'not-hcf', 'wrong-hcf'] } },
                { id: 'VCMNA281-005', question: 'Factorise: 10x - 15', options: ['5(2x - 3)', '5(2x - 15)', '10(x - 1.5)', '15(x - 1)'], correctAnswer: 0, explanation: 'HCF = 5. 10x ÷ 5 = 2x, -15 ÷ 5 = -3', difficulty: 1, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-division', 'not-integer', 'wrong-hcf'] } },
                { id: 'VCMNA281-006', question: 'Factorise: 8x² - 12x', options: ['4(2x² - 3x)', '4x(2x - 3)', '2x(4x - 6)', '8x(x - 1.5)'], correctAnswer: 1, explanation: 'HCF = 4x. 8x² ÷ 4x = 2x, -12x ÷ 4x = -3', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: ['missed-x', null, 'not-hcf', 'not-integer'] } },
                { id: 'VCMNA281-007', question: 'What is the HCF of x² and x³?', options: ['x', 'x²', 'x³', 'x⁵'], correctAnswer: 1, explanation: 'Take the lowest power: x²', difficulty: 2, knowledge: { questionTokens: ['hcf-variables'], correctToken: 'hcf-variables', incorrectTokens: ['too-low', null, 'too-high', 'added'] } },
                { id: 'VCMNA281-008', question: 'Factorise: 5a + 5b', options: ['5(a + b)', 'a(5 + b)', '5ab', '(a + b)'], correctAnswer: 0, explanation: 'HCF = 5. Common factor is 5', difficulty: 1, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-factor', 'multiplied', 'lost-5'] } },
                { id: 'VCMNA281-009', question: 'Factorise: 2x² + 4x + 6', options: ['2(x² + 2x + 3)', '2x(x + 2 + 3)', '(2x² + 4x + 6)', '2(x² + 4x + 6)'], correctAnswer: 0, explanation: 'HCF = 2. Each term divided by 2', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-factor', 'not-factorised', 'wrong-division'] } },
                { id: 'VCMNA281-010', question: 'Factorise: 9x³ - 6x²', options: ['3x(3x² - 2x)', '3x²(3x - 2)', '6x²(1.5x - 1)', '9x²(x - 2/3)'], correctAnswer: 1, explanation: 'HCF = 3x². 9x³ ÷ 3x² = 3x, -6x² ÷ 3x² = -2', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions', 'hcf-variables'], correctToken: 'factorising-expressions', incorrectTokens: ['missed-x', null, 'not-hcf', 'not-integer'] } },
                { id: 'VCMNA281-011', question: 'Expand 3(x + 4) to check if it equals 3x + 12', options: ['Yes', 'No, it equals 3x + 4', 'No, it equals x + 12', 'No, it equals 3x + 7'], correctAnswer: 0, explanation: '3(x + 4) = 3x + 12 ✓', difficulty: 1, knowledge: { questionTokens: ['checking-factorisation'], correctToken: 'checking-factorisation', incorrectTokens: [null, 'forgot-multiply', 'forgot-3', 'added'] } },
                { id: 'VCMNA281-012', question: 'Factorise: 15xy + 10x', options: ['5(3xy + 2x)', '5x(3y + 2)', 'x(15y + 10)', '10x(1.5y + 1)'], correctAnswer: 1, explanation: 'HCF = 5x. 15xy ÷ 5x = 3y, 10x ÷ 5x = 2', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: ['missed-x', null, 'not-hcf', 'not-integer'] } },
                { id: 'VCMNA281-013', question: 'Factorise: -4x - 8', options: ['-4(x + 2)', '4(-x - 2)', '-4(x - 2)', 'Both A and B'], correctAnswer: 3, explanation: '-4(x + 2) = -4x - 8 and 4(-x - 2) = -4x - 8', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: ['partial', 'partial', 'sign-error', null] } },
                { id: 'VCMNA281-014', question: 'Factorise: 12a²b - 8ab²', options: ['4ab(3a - 2b)', '4a(3ab - 2b²)', '4b(3a² - 2ab)', '2ab(6a - 4b)'], correctAnswer: 0, explanation: 'HCF = 4ab. 12a²b ÷ 4ab = 3a, -8ab² ÷ 4ab = -2b', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions', 'hcf-variables'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'missed-b', 'missed-a', 'not-hcf'] } },
                { id: 'VCMNA281-015', question: 'What is the HCF of 6x²y and 9xy²?', options: ['3xy', 'xy', '3x²y²', '18x²y²'], correctAnswer: 0, explanation: 'HCF of 6,9 = 3. HCF of x²,x = x. HCF of y,y² = y. So 3xy', difficulty: 2, knowledge: { questionTokens: ['hcf-numbers', 'hcf-variables'], correctToken: 'hcf-variables', incorrectTokens: [null, 'missed-3', 'took-highest', 'lcm'] } },
                { id: 'VCMNA281-016', question: 'Factorise: 7x + 14y - 21', options: ['7(x + 2y - 3)', '7(x + 14y - 21)', '(7x + 14y - 21)', '7x(1 + 2y - 3)'], correctAnswer: 0, explanation: 'HCF = 7. Each term divided by 7', difficulty: 2, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-division', 'not-factorised', 'wrong-factor'] } },
                { id: 'VCMNA281-017', question: 'Factorise completely: 6x³ + 12x² + 18x', options: ['6(x³ + 2x² + 3x)', '6x(x² + 2x + 3)', '3x(2x² + 4x + 6)', '2x(3x² + 6x + 9)'], correctAnswer: 1, explanation: 'HCF = 6x (not just 6). Fully factorised', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: ['missed-x', null, 'not-hcf', 'not-hcf'] } },
                { id: 'VCMNA281-018', question: 'Is 2(5x + 10) fully factorised?', options: ['Yes', 'No, should be 10(x + 2)', 'No, should be 2(5x + 10)', 'No, cannot factorise further'], correctAnswer: 1, explanation: '5x + 10 has common factor 5. Full: 2×5(x + 2) = 10(x + 2)', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: ['incomplete', null, 'same', 'wrong'] } },
                { id: 'VCMNA281-019', question: 'Factorise: x(a + b) + 2(a + b)', options: ['(a + b)(x + 2)', 'x + 2(a + b)', '(a + b) + (x + 2)', 'Cannot factorise'], correctAnswer: 0, explanation: '(a + b) is common to both terms', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-grouping', 'wrong-operation', 'gave-up'] } },
                { id: 'VCMNA281-020', question: 'Factorise: 20x²y³ - 15xy²', options: ['5xy²(4xy - 3)', '5xy(4xy² - 3y)', '5y²(4x²y - 3x)', '15xy²(4/3 xy - 1)'], correctAnswer: 0, explanation: 'HCF = 5xy². 20x²y³ ÷ 5xy² = 4xy, -15xy² ÷ 5xy² = -3', difficulty: 3, knowledge: { questionTokens: ['factorising-expressions', 'hcf-variables'], correctToken: 'factorising-expressions', incorrectTokens: [null, 'wrong-power', 'wrong-power', 'not-integer'] } },
              ],
            },
            {
              id: 'VCMNA285',
              code: 'VCMNA285',
              title: 'Solving Linear Inequalities',
              description: 'Solve linear inequalities and graph their solutions on a number line',
              content: `# Solving Linear Inequalities

Inequalities are like equations, but instead of = we use <, >, ≤, or ≥.

## Inequality Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| < | less than | x < 5 (x is less than 5) |
| > | greater than | x > 3 (x is greater than 3) |
| ≤ | less than or equal to | x ≤ 7 (x is at most 7) |
| ≥ | greater than or equal to | x ≥ 2 (x is at least 2) |

## Solving Inequalities

Solve the same way as equations, with ONE important rule:

**When you multiply or divide by a NEGATIVE number, REVERSE the inequality sign!**

### Example 1: Simple inequality
Solve: 2x + 3 < 11
- 2x < 11 - 3
- 2x < 8
- x < 4

### Example 2: Dividing by negative
Solve: -3x ≥ 12
- x ≤ 12 ÷ (-3)  [Sign reverses!]
- x ≤ -4

## Graphing on Number Line

- **Open circle (○)**: < or > (not including the point)
- **Closed circle (●)**: ≤ or ≥ (including the point)
- **Arrow**: shows direction of solutions

### Example: x > 2
○────────→
   2

### Example: x ≤ 5
←────────●
         5

## Compound Inequalities

Sometimes we have two conditions:
- 2 < x < 6 means x is between 2 and 6
- x < 1 or x > 5 means x is less than 1 OR greater than 5`,
              keyPoints: [
                'Solve inequalities like equations',
                'Reverse sign when multiplying/dividing by negative',
                'Open circle for < and >, closed circle for ≤ and ≥',
                'Arrow shows direction of solution set',
              ],
              knowledgeTokens: [
                { id: 'inequality-symbols', name: 'Inequality Symbols', description: 'Understanding <, >, ≤, ≥' },
                { id: 'solving-inequalities', name: 'Solving Inequalities', description: 'Using inverse operations on inequalities', prerequisites: ['inequality-symbols'] },
                { id: 'negative-multiplication', name: 'Negative Multiplication Rule', description: 'Reversing sign when multiplying/dividing by negative', prerequisites: ['solving-inequalities'] },
                { id: 'graphing-inequalities', name: 'Graphing Inequalities', description: 'Representing solutions on a number line', prerequisites: ['inequality-symbols'] },
                { id: 'compound-inequalities', name: 'Compound Inequalities', description: 'Working with two inequality conditions', prerequisites: ['solving-inequalities'] },
              ],
              examples: [
                { problem: 'Solve: 3x - 5 > 7', solution: 'x > 4', explanation: '3x > 12, so x > 4' },
                { problem: 'Solve: -2x ≤ 8', solution: 'x ≥ -4', explanation: 'Divide by -2 and reverse: x ≥ -4' },
              ],
              questions: [
                { id: 'VCMNA285-001', question: 'Which symbol means "less than or equal to"?', options: ['<', '>', '≤', '≥'], correctAnswer: 2, explanation: '≤ means less than or equal to', difficulty: 1, knowledge: { questionTokens: ['inequality-symbols'], correctToken: 'inequality-symbols', incorrectTokens: ['less-than', 'greater-than', null, 'greater-equal'] } },
                { id: 'VCMNA285-002', question: 'Solve: x + 5 > 12', options: ['x > 7', 'x > 17', 'x < 7', 'x = 7'], correctAnswer: 0, explanation: 'x > 12 - 5 = 7', difficulty: 1, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'added', 'wrong-sign', 'equation'] } },
                { id: 'VCMNA285-003', question: 'Solve: 2x < 10', options: ['x < 5', 'x > 5', 'x < 20', 'x > 20'], correctAnswer: 0, explanation: 'x < 10 ÷ 2 = 5', difficulty: 1, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'wrong-sign', 'multiplied', 'both-wrong'] } },
                { id: 'VCMNA285-004', question: 'Solve: -x > 3', options: ['x > -3', 'x < -3', 'x > 3', 'x < 3'], correctAnswer: 1, explanation: 'Multiply by -1, reverse sign: x < -3', difficulty: 2, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['no-reverse', null, 'wrong-value', 'wrong-both'] } },
                { id: 'VCMNA285-005', question: 'On a number line, x > 3 uses what type of circle at 3?', options: ['Closed circle ●', 'Open circle ○', 'No circle', 'Square'], correctAnswer: 1, explanation: '> means not including 3, so open circle', difficulty: 1, knowledge: { questionTokens: ['graphing-inequalities'], correctToken: 'graphing-inequalities', incorrectTokens: ['closed-error', null, 'no-marker', 'wrong-shape'] } },
                { id: 'VCMNA285-006', question: 'Solve: 3x - 2 ≥ 10', options: ['x ≥ 4', 'x ≤ 4', 'x ≥ 8/3', 'x ≥ 2.67'], correctAnswer: 0, explanation: '3x ≥ 12, x ≥ 4', difficulty: 2, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'wrong-sign', 'wrong-calculation', 'decimal-form'] } },
                { id: 'VCMNA285-007', question: 'Solve: -4x ≤ 20', options: ['x ≤ -5', 'x ≥ -5', 'x ≤ 5', 'x ≥ 5'], correctAnswer: 1, explanation: 'Divide by -4, reverse: x ≥ -5', difficulty: 2, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['no-reverse', null, 'wrong-value', 'wrong-both'] } },
                { id: 'VCMNA285-008', question: 'x ≤ 5 uses what type of circle?', options: ['Open circle ○', 'Closed circle ●', 'Arrow only', 'Two circles'], correctAnswer: 1, explanation: '≤ includes 5, so closed circle', difficulty: 1, knowledge: { questionTokens: ['graphing-inequalities'], correctToken: 'graphing-inequalities', incorrectTokens: ['open-error', null, 'missing-circle', 'wrong-answer'] } },
                { id: 'VCMNA285-009', question: 'Which inequality represents "x is at least 7"?', options: ['x < 7', 'x > 7', 'x ≤ 7', 'x ≥ 7'], correctAnswer: 3, explanation: '"At least" means greater than or equal to', difficulty: 1, knowledge: { questionTokens: ['inequality-symbols'], correctToken: 'inequality-symbols', incorrectTokens: ['less-than', 'greater-not-equal', 'less-equal', null] } },
                { id: 'VCMNA285-010', question: 'Solve: 5 - x < 3', options: ['x < 2', 'x > 2', 'x < -2', 'x > -2'], correctAnswer: 1, explanation: '-x < -2, multiply by -1 and reverse: x > 2', difficulty: 2, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['no-reverse', null, 'wrong-sign', 'wrong-value'] } },
                { id: 'VCMNA285-011', question: 'What values satisfy 2 < x < 5?', options: ['x = 2 and x = 5', 'Numbers between 2 and 5', 'Numbers outside 2 and 5', 'x = 3.5 only'], correctAnswer: 1, explanation: 'Compound inequality means x is between 2 and 5 (not including)', difficulty: 2, knowledge: { questionTokens: ['compound-inequalities'], correctToken: 'compound-inequalities', incorrectTokens: ['endpoints', null, 'wrong-region', 'single-value'] } },
                { id: 'VCMNA285-012', question: 'Solve: 2x + 3 ≤ x + 7', options: ['x ≤ 4', 'x ≥ 4', 'x ≤ 10', 'x ≤ 2'], correctAnswer: 0, explanation: '2x - x ≤ 7 - 3, x ≤ 4', difficulty: 2, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'wrong-sign', 'wrong-calculation', 'wrong-subtraction'] } },
                { id: 'VCMNA285-013', question: 'Solve: -2x + 5 > 11', options: ['x > -3', 'x < -3', 'x > 3', 'x < 3'], correctAnswer: 1, explanation: '-2x > 6, divide by -2 and reverse: x < -3', difficulty: 2, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['no-reverse', null, 'wrong-value', 'wrong-both'] } },
                { id: 'VCMNA285-014', question: 'Which is x ≥ -2 on a number line?', options: ['Arrow left from open circle at -2', 'Arrow right from closed circle at -2', 'Arrow left from closed circle at -2', 'Arrow right from open circle at -2'], correctAnswer: 1, explanation: '≥ means closed circle, and greater means arrow to right', difficulty: 2, knowledge: { questionTokens: ['graphing-inequalities'], correctToken: 'graphing-inequalities', incorrectTokens: ['wrong-circle-direction', null, 'wrong-direction', 'wrong-circle'] } },
                { id: 'VCMNA285-015', question: 'Solve: x/3 < 4', options: ['x < 12', 'x > 12', 'x < 4/3', 'x < 1'], correctAnswer: 0, explanation: 'Multiply both sides by 3: x < 12', difficulty: 1, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'wrong-sign', 'divided', 'wrong-calculation'] } },
                { id: 'VCMNA285-016', question: 'When do you reverse the inequality sign?', options: ['When adding a negative', 'When subtracting', 'When multiplying/dividing by a negative', 'Never'], correctAnswer: 2, explanation: 'Only reverse when multiplying or dividing by a negative number', difficulty: 2, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['wrong-operation', 'wrong-operation', null, 'wrong'] } },
                { id: 'VCMNA285-017', question: 'Solve: 4x - 8 ≥ 2x + 2', options: ['x ≥ 5', 'x ≤ 5', 'x ≥ -3', 'x ≥ 3'], correctAnswer: 0, explanation: '2x ≥ 10, x ≥ 5', difficulty: 2, knowledge: { questionTokens: ['solving-inequalities'], correctToken: 'solving-inequalities', incorrectTokens: [null, 'wrong-sign', 'wrong-calculation', 'wrong-division'] } },
                { id: 'VCMNA285-018', question: 'If x > -1 and x < 3, which is NOT a solution?', options: ['0', '2', '-1', '1'], correctAnswer: 2, explanation: 'x > -1 means -1 is not included', difficulty: 2, knowledge: { questionTokens: ['compound-inequalities'], correctToken: 'compound-inequalities', incorrectTokens: ['valid', 'valid', null, 'valid'] } },
                { id: 'VCMNA285-019', question: 'Solve: -5x - 10 ≤ 15', options: ['x ≤ -5', 'x ≥ -5', 'x ≤ -1', 'x ≥ -1'], correctAnswer: 1, explanation: '-5x ≤ 25, divide by -5 and reverse: x ≥ -5', difficulty: 3, knowledge: { questionTokens: ['negative-multiplication'], correctToken: 'negative-multiplication', incorrectTokens: ['no-reverse', null, 'wrong-calculation', 'wrong-both'] } },
                { id: 'VCMNA285-020', question: 'Which represents "all numbers greater than 2 OR less than -1"?', options: ['−1 < x < 2', 'x < −1 or x > 2', 'x ≤ −1 and x ≥ 2', '−1 ≤ x ≤ 2'], correctAnswer: 1, explanation: '"OR" means either condition: x < -1 or x > 2', difficulty: 3, knowledge: { questionTokens: ['compound-inequalities'], correctToken: 'compound-inequalities', incorrectTokens: ['between', null, 'and-error', 'between-inclusive'] } },
              ],
            },
            {
              id: 'VCMNA283',
              code: 'VCMNA283',
              title: 'Equations with Fractions',
              description: 'Solve linear equations involving simple algebraic fractions',
              content: `# Equations with Fractions

Solving equations with fractions requires clearing denominators or working with algebraic fractions.

## Method 1: Clear the Denominator

Multiply both sides by the denominator to eliminate the fraction.

### Example: x/3 = 5
- Multiply both sides by 3
- x = 15

### Example: (x + 2)/4 = 3
- Multiply both sides by 4
- x + 2 = 12
- x = 10

## Method 2: Cross-Multiplication

For equations like a/b = c/d, cross-multiply: ad = bc

### Example: x/3 = 4/6
- Cross-multiply: 6x = 12
- x = 2

## Equations with Multiple Fractions

Find the LCM of denominators and multiply through.

### Example: x/2 + x/3 = 5
- LCM of 2 and 3 is 6
- Multiply all terms by 6: 3x + 2x = 30
- 5x = 30
- x = 6

## Fractions on Both Sides

### Example: (x + 1)/2 = (x - 3)/4
- Cross-multiply: 4(x + 1) = 2(x - 3)
- 4x + 4 = 2x - 6
- 2x = -10
- x = -5

## Checking Solutions

Always substitute back to verify your answer works in the original equation.`,
              keyPoints: [
                'Multiply both sides by denominator to clear fractions',
                'Cross-multiply when fraction equals fraction',
                'Find LCM when adding/subtracting fractions',
                'Always check solution by substituting back',
              ],
              knowledgeTokens: [
                { id: 'clearing-denominators', name: 'Clearing Denominators', description: 'Multiplying to remove fractions' },
                { id: 'cross-multiplication', name: 'Cross-Multiplication', description: 'Solving a/b = c/d equations' },
                { id: 'lcm-fractions', name: 'LCM for Fractions', description: 'Finding common denominators', prerequisites: ['clearing-denominators'] },
                { id: 'fraction-both-sides', name: 'Fractions Both Sides', description: 'Solving complex fraction equations', prerequisites: ['cross-multiplication'] },
              ],
              examples: [
                { problem: 'Solve: x/5 = 4', solution: 'x = 20', explanation: 'Multiply both sides by 5: x = 20' },
                { problem: 'Solve: x/2 + x/4 = 6', solution: 'x = 8', explanation: 'LCM = 4: 2x + x = 24, 3x = 24, x = 8' },
              ],
              questions: [
                { id: 'VCMNA283-001', question: 'Solve: x/4 = 3', options: ['x = 12', 'x = 7', 'x = 3/4', 'x = 0.75'], correctAnswer: 0, explanation: 'Multiply both sides by 4: x = 12', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'added', 'divided', 'decimal-error'] } },
                { id: 'VCMNA283-002', question: 'Solve: x/6 = 2', options: ['x = 3', 'x = 8', 'x = 12', 'x = 1/3'], correctAnswer: 2, explanation: 'Multiply both sides by 6: x = 12', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: ['divided', 'added', null, 'inverted'] } },
                { id: 'VCMNA283-003', question: 'Solve: (x + 1)/3 = 4', options: ['x = 11', 'x = 13', 'x = 12', 'x = 3'], correctAnswer: 0, explanation: 'x + 1 = 12, so x = 11', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'forgot-subtract', 'no-subtract', 'wrong-calculation'] } },
                { id: 'VCMNA283-004', question: 'Solve: x/2 = 3/6', options: ['x = 1', 'x = 9', 'x = 1/2', 'x = 6'], correctAnswer: 0, explanation: 'Cross-multiply: 6x = 6, x = 1', difficulty: 2, knowledge: { questionTokens: ['cross-multiplication'], correctToken: 'cross-multiplication', incorrectTokens: [null, 'wrong-calculation', 'fraction-form', 'wrong-operation'] } },
                { id: 'VCMNA283-005', question: 'Solve: 2x/5 = 4', options: ['x = 10', 'x = 20', 'x = 8/5', 'x = 2'], correctAnswer: 0, explanation: '2x = 20, x = 10', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'forgot-divide', 'no-simplify', 'wrong-division'] } },
                { id: 'VCMNA283-006', question: 'Solve: x/3 + x/3 = 8', options: ['x = 12', 'x = 8', 'x = 24', 'x = 4'], correctAnswer: 0, explanation: '2x/3 = 8, 2x = 24, x = 12', difficulty: 2, knowledge: { questionTokens: ['lcm-fractions'], correctToken: 'lcm-fractions', incorrectTokens: [null, 'forgot-add', 'wrong-multiplication', 'halved'] } },
                { id: 'VCMNA283-007', question: 'Solve: x/2 + x/4 = 9', options: ['x = 12', 'x = 18', 'x = 6', 'x = 36'], correctAnswer: 0, explanation: 'LCM=4: 2x + x = 36, 3x = 36, x = 12', difficulty: 2, knowledge: { questionTokens: ['lcm-fractions'], correctToken: 'lcm-fractions', incorrectTokens: [null, 'wrong-lcm', 'divided-instead', 'no-simplify'] } },
                { id: 'VCMNA283-008', question: 'Solve: (x - 2)/5 = 3', options: ['x = 17', 'x = 13', 'x = 15', 'x = 1'], correctAnswer: 0, explanation: 'x - 2 = 15, x = 17', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'forgot-add', 'no-add', 'wrong-sign'] } },
                { id: 'VCMNA283-009', question: 'Solve: 3/x = 1/4', options: ['x = 12', 'x = 3/4', 'x = 4/3', 'x = 7'], correctAnswer: 0, explanation: 'Cross-multiply: x = 12', difficulty: 2, knowledge: { questionTokens: ['cross-multiplication'], correctToken: 'cross-multiplication', incorrectTokens: [null, 'wrong-order', 'inverted', 'added'] } },
                { id: 'VCMNA283-010', question: 'Solve: x/3 - x/6 = 2', options: ['x = 12', 'x = 6', 'x = 4', 'x = 24'], correctAnswer: 0, explanation: 'LCM=6: 2x - x = 12, x = 12', difficulty: 2, knowledge: { questionTokens: ['lcm-fractions'], correctToken: 'lcm-fractions', incorrectTokens: [null, 'half', 'wrong-subtraction', 'doubled'] } },
                { id: 'VCMNA283-011', question: 'Solve: (2x + 1)/3 = 5', options: ['x = 7', 'x = 8', 'x = 14', 'x = 2'], correctAnswer: 0, explanation: '2x + 1 = 15, 2x = 14, x = 7', difficulty: 2, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'forgot-subtract', 'forgot-divide', 'wrong-calculation'] } },
                { id: 'VCMNA283-012', question: 'Solve: x/4 = (x + 2)/6', options: ['x = 4', 'x = 2', 'x = 6', 'x = 8'], correctAnswer: 0, explanation: 'Cross-multiply: 6x = 4x + 8, 2x = 8, x = 4', difficulty: 3, knowledge: { questionTokens: ['fraction-both-sides'], correctToken: 'fraction-both-sides', incorrectTokens: [null, 'wrong-cross', 'wrong-subtraction', 'wrong-calculation'] } },
                { id: 'VCMNA283-013', question: 'Solve: 5/x = 10/6', options: ['x = 3', 'x = 12', 'x = 2', 'x = 5'], correctAnswer: 0, explanation: 'Cross-multiply: 30 = 10x, x = 3', difficulty: 2, knowledge: { questionTokens: ['cross-multiplication'], correctToken: 'cross-multiplication', incorrectTokens: [null, 'wrong-operation', 'wrong-division', 'wrong-value'] } },
                { id: 'VCMNA283-014', question: 'Solve: x/2 + x/3 + x/6 = 6', options: ['x = 6', 'x = 3', 'x = 12', 'x = 36'], correctAnswer: 0, explanation: 'LCM=6: 3x + 2x + x = 36, 6x = 36, x = 6', difficulty: 3, knowledge: { questionTokens: ['lcm-fractions'], correctToken: 'lcm-fractions', incorrectTokens: [null, 'wrong-lcm', 'wrong-addition', 'no-simplify'] } },
                { id: 'VCMNA283-015', question: 'Solve: (x - 1)/2 = (x + 1)/4', options: ['x = 3', 'x = 1', 'x = 5', 'x = -1'], correctAnswer: 0, explanation: 'Cross: 4(x-1) = 2(x+1), 4x-4 = 2x+2, 2x = 6, x = 3', difficulty: 3, knowledge: { questionTokens: ['fraction-both-sides'], correctToken: 'fraction-both-sides', incorrectTokens: [null, 'wrong-expand', 'wrong-solve', 'sign-error'] } },
                { id: 'VCMNA283-016', question: 'What is the LCM of 4 and 6?', options: ['2', '10', '12', '24'], correctAnswer: 2, explanation: 'LCM of 4 and 6 is 12', difficulty: 1, knowledge: { questionTokens: ['lcm-fractions'], correctToken: 'lcm-fractions', incorrectTokens: ['hcf', 'added', null, 'multiplied'] } },
                { id: 'VCMNA283-017', question: 'Solve: 4/x = 2/5', options: ['x = 10', 'x = 8/5', 'x = 2.5', 'x = 20'], correctAnswer: 0, explanation: 'Cross-multiply: 20 = 2x, x = 10', difficulty: 2, knowledge: { questionTokens: ['cross-multiplication'], correctToken: 'cross-multiplication', incorrectTokens: [null, 'wrong-cross', 'wrong-division', 'wrong-order'] } },
                { id: 'VCMNA283-018', question: 'Solve: (3x - 2)/4 = (x + 2)/2', options: ['x = 6', 'x = 4', 'x = 2', 'x = 8'], correctAnswer: 0, explanation: '2(3x-2) = 4(x+2), 6x-4 = 4x+8, 2x = 12, x = 6', difficulty: 3, knowledge: { questionTokens: ['fraction-both-sides'], correctToken: 'fraction-both-sides', incorrectTokens: [null, 'wrong-expand', 'wrong-simplify', 'wrong-solve'] } },
                { id: 'VCMNA283-019', question: 'Solve: x/5 - 1 = 2', options: ['x = 15', 'x = 5', 'x = 10', 'x = 1'], correctAnswer: 0, explanation: 'x/5 = 3, x = 15', difficulty: 1, knowledge: { questionTokens: ['clearing-denominators'], correctToken: 'clearing-denominators', incorrectTokens: [null, 'forgot-add', 'wrong-multiplication', 'divided'] } },
                { id: 'VCMNA283-020', question: 'Solve: 2/(x+1) = 1/3', options: ['x = 5', 'x = 6', 'x = 7', 'x = 4'], correctAnswer: 0, explanation: 'Cross-multiply: 6 = x + 1, x = 5', difficulty: 3, knowledge: { questionTokens: ['cross-multiplication'], correctToken: 'cross-multiplication', incorrectTokens: [null, 'wrong-cross', 'forgot-subtract', 'wrong-value'] } },
              ],
            },
            {
              id: 'VCMNA286',
              code: 'VCMNA286',
              title: 'Introduction to Quadratic Expressions',
              description: 'Expand binomial products and factorise monic quadratic expressions',
              content: `# Introduction to Quadratic Expressions

A quadratic expression has a variable raised to the power of 2.

## Expanding Binomial Products

**(a + b)(c + d) = ac + ad + bc + bd**

Use FOIL: First, Outer, Inner, Last

### Example: (x + 3)(x + 2)
- First: x × x = x²
- Outer: x × 2 = 2x
- Inner: 3 × x = 3x
- Last: 3 × 2 = 6
- Result: x² + 2x + 3x + 6 = x² + 5x + 6

## Perfect Squares

**(a + b)² = a² + 2ab + b²**
**(a - b)² = a² - 2ab + b²**

### Example: (x + 4)²
= x² + 2(x)(4) + 4²
= x² + 8x + 16

## Difference of Two Squares

**(a + b)(a - b) = a² - b²**

### Example: (x + 5)(x - 5)
= x² - 25

## Factorising Quadratics (Monic)

For x² + bx + c, find two numbers that:
- Multiply to give c
- Add to give b

### Example: Factorise x² + 7x + 12
- Need numbers that multiply to 12 and add to 7
- 3 × 4 = 12 and 3 + 4 = 7 ✓
- x² + 7x + 12 = (x + 3)(x + 4)

### Example: Factorise x² - 2x - 15
- Need numbers that multiply to -15 and add to -2
- (-5) × 3 = -15 and -5 + 3 = -2 ✓
- x² - 2x - 15 = (x - 5)(x + 3)`,
              keyPoints: [
                'FOIL: First, Outer, Inner, Last for expanding',
                '(a + b)² = a² + 2ab + b²',
                '(a + b)(a - b) = a² - b²',
                'To factorise: find two numbers that multiply to c and add to b',
              ],
              knowledgeTokens: [
                { id: 'foil-method', name: 'FOIL Method', description: 'Expanding binomial products' },
                { id: 'perfect-squares', name: 'Perfect Squares', description: 'Expanding (a+b)² and (a-b)²', prerequisites: ['foil-method'] },
                { id: 'difference-of-squares', name: 'Difference of Squares', description: 'Expanding and factorising a²-b²', prerequisites: ['foil-method'] },
                { id: 'factorising-quadratics', name: 'Factorising Quadratics', description: 'Finding factors of monic quadratics', prerequisites: ['foil-method'] },
              ],
              examples: [
                { problem: 'Expand: (x + 2)(x + 5)', solution: 'x² + 7x + 10', explanation: 'FOIL: x² + 5x + 2x + 10 = x² + 7x + 10' },
                { problem: 'Factorise: x² + 8x + 15', solution: '(x + 3)(x + 5)', explanation: '3 × 5 = 15, 3 + 5 = 8' },
              ],
              questions: [
                { id: 'VCMNA286-001', question: 'Expand: (x + 1)(x + 2)', options: ['x² + 3x + 2', 'x² + 2x + 2', 'x² + 3x + 3', '2x² + 3x + 2'], correctAnswer: 0, explanation: 'FOIL: x² + 2x + x + 2 = x² + 3x + 2', difficulty: 1, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'wrong-middle', 'wrong-constant', 'wrong-leading'] } },
                { id: 'VCMNA286-002', question: 'Expand: (x + 3)(x + 4)', options: ['x² + 7x + 12', 'x² + 12x + 7', 'x² + 7x + 7', 'x² + 12'], correctAnswer: 0, explanation: 'FOIL: x² + 4x + 3x + 12 = x² + 7x + 12', difficulty: 1, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'swapped', 'wrong-constant', 'no-middle'] } },
                { id: 'VCMNA286-003', question: 'Expand: (x + 5)²', options: ['x² + 25', 'x² + 10x + 25', 'x² + 5x + 25', '2x² + 10x + 25'], correctAnswer: 1, explanation: '(x+5)² = x² + 2(5)x + 25 = x² + 10x + 25', difficulty: 1, knowledge: { questionTokens: ['perfect-squares'], correctToken: 'perfect-squares', incorrectTokens: ['no-middle', null, 'wrong-middle', 'wrong-leading'] } },
                { id: 'VCMNA286-004', question: 'Expand: (x - 3)²', options: ['x² - 9', 'x² - 6x + 9', 'x² + 6x + 9', 'x² - 6x - 9'], correctAnswer: 1, explanation: '(x-3)² = x² - 2(3)x + 9 = x² - 6x + 9', difficulty: 1, knowledge: { questionTokens: ['perfect-squares'], correctToken: 'perfect-squares', incorrectTokens: ['no-middle', null, 'wrong-sign', 'wrong-constant'] } },
                { id: 'VCMNA286-005', question: 'Expand: (x + 4)(x - 4)', options: ['x² - 16', 'x² + 16', 'x² - 8x - 16', 'x² - 8'], correctAnswer: 0, explanation: 'Difference of squares: x² - 16', difficulty: 1, knowledge: { questionTokens: ['difference-of-squares'], correctToken: 'difference-of-squares', incorrectTokens: [null, 'wrong-sign', 'not-simplified', 'wrong-value'] } },
                { id: 'VCMNA286-006', question: 'Factorise: x² + 5x + 6', options: ['(x + 2)(x + 3)', '(x + 1)(x + 6)', '(x + 5)(x + 1)', '(x - 2)(x - 3)'], correctAnswer: 0, explanation: '2 × 3 = 6, 2 + 3 = 5', difficulty: 1, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-pair', 'wrong-pair', 'wrong-signs'] } },
                { id: 'VCMNA286-007', question: 'Factorise: x² + 9x + 20', options: ['(x + 4)(x + 5)', '(x + 2)(x + 10)', '(x + 1)(x + 20)', '(x + 9)(x + 20)'], correctAnswer: 0, explanation: '4 × 5 = 20, 4 + 5 = 9', difficulty: 1, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-pair', 'wrong-pair', 'wrong-method'] } },
                { id: 'VCMNA286-008', question: 'Expand: (x + 2)(x - 5)', options: ['x² - 3x - 10', 'x² + 3x - 10', 'x² - 3x + 10', 'x² - 7x - 10'], correctAnswer: 0, explanation: 'FOIL: x² - 5x + 2x - 10 = x² - 3x - 10', difficulty: 2, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'wrong-sign', 'wrong-constant', 'wrong-middle'] } },
                { id: 'VCMNA286-009', question: 'Factorise: x² - 9', options: ['(x + 3)(x - 3)', '(x - 3)(x - 3)', '(x + 9)(x - 1)', 'Cannot factorise'], correctAnswer: 0, explanation: 'Difference of squares: x² - 9 = (x+3)(x-3)', difficulty: 1, knowledge: { questionTokens: ['difference-of-squares'], correctToken: 'difference-of-squares', incorrectTokens: [null, 'perfect-square', 'wrong-values', 'gave-up'] } },
                { id: 'VCMNA286-010', question: 'Factorise: x² - 5x + 6', options: ['(x - 2)(x - 3)', '(x + 2)(x + 3)', '(x - 1)(x - 6)', '(x - 5)(x - 1)'], correctAnswer: 0, explanation: '(-2) × (-3) = 6, (-2) + (-3) = -5', difficulty: 2, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-signs', 'wrong-pair', 'wrong-pair'] } },
                { id: 'VCMNA286-011', question: 'Expand: (x - 1)(x - 4)', options: ['x² - 5x + 4', 'x² - 5x - 4', 'x² + 5x + 4', 'x² - 3x - 4'], correctAnswer: 0, explanation: 'FOIL: x² - 4x - x + 4 = x² - 5x + 4', difficulty: 2, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'wrong-constant', 'wrong-signs', 'wrong-middle'] } },
                { id: 'VCMNA286-012', question: 'Factorise: x² + x - 12', options: ['(x + 4)(x - 3)', '(x - 4)(x + 3)', '(x + 6)(x - 2)', '(x + 12)(x - 1)'], correctAnswer: 0, explanation: '4 × (-3) = -12, 4 + (-3) = 1', difficulty: 2, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-signs', 'wrong-pair', 'wrong-pair'] } },
                { id: 'VCMNA286-013', question: 'Expand: (x + 6)²', options: ['x² + 36', 'x² + 12x + 36', 'x² + 6x + 36', '2x² + 12x + 36'], correctAnswer: 1, explanation: 'x² + 2(6)x + 36 = x² + 12x + 36', difficulty: 1, knowledge: { questionTokens: ['perfect-squares'], correctToken: 'perfect-squares', incorrectTokens: ['no-middle', null, 'wrong-middle', 'wrong-leading'] } },
                { id: 'VCMNA286-014', question: 'Factorise: x² - 25', options: ['(x + 5)(x - 5)', '(x - 5)²', '(x + 25)(x - 1)', 'Cannot factorise'], correctAnswer: 0, explanation: 'Difference of squares: x² - 25 = (x+5)(x-5)', difficulty: 1, knowledge: { questionTokens: ['difference-of-squares'], correctToken: 'difference-of-squares', incorrectTokens: [null, 'perfect-square', 'wrong-values', 'gave-up'] } },
                { id: 'VCMNA286-015', question: 'Factorise: x² - 7x + 10', options: ['(x - 2)(x - 5)', '(x + 2)(x + 5)', '(x - 1)(x - 10)', '(x - 7)(x - 10)'], correctAnswer: 0, explanation: '(-2) × (-5) = 10, (-2) + (-5) = -7', difficulty: 2, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-signs', 'wrong-pair', 'wrong-method'] } },
                { id: 'VCMNA286-016', question: 'Expand: (x - 2)(x + 7)', options: ['x² + 5x - 14', 'x² - 5x - 14', 'x² + 5x + 14', 'x² - 9x - 14'], correctAnswer: 0, explanation: 'FOIL: x² + 7x - 2x - 14 = x² + 5x - 14', difficulty: 2, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'wrong-sign', 'wrong-constant', 'wrong-middle'] } },
                { id: 'VCMNA286-017', question: 'Factorise: x² - x - 20', options: ['(x - 5)(x + 4)', '(x + 5)(x - 4)', '(x - 10)(x + 2)', '(x + 10)(x - 2)'], correctAnswer: 0, explanation: '(-5) × 4 = -20, (-5) + 4 = -1', difficulty: 2, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-signs', 'wrong-pair', 'wrong-pair'] } },
                { id: 'VCMNA286-018', question: 'Expand: (2x + 1)(x + 3)', options: ['2x² + 7x + 3', '2x² + 6x + 3', '2x² + 7x + 4', '3x² + 7x + 3'], correctAnswer: 0, explanation: 'FOIL: 2x² + 6x + x + 3 = 2x² + 7x + 3', difficulty: 2, knowledge: { questionTokens: ['foil-method'], correctToken: 'foil-method', incorrectTokens: [null, 'wrong-middle', 'wrong-constant', 'wrong-leading'] } },
                { id: 'VCMNA286-019', question: 'Factorise: x² + 2x - 15', options: ['(x + 5)(x - 3)', '(x - 5)(x + 3)', '(x + 15)(x - 1)', '(x - 15)(x + 1)'], correctAnswer: 0, explanation: '5 × (-3) = -15, 5 + (-3) = 2', difficulty: 2, knowledge: { questionTokens: ['factorising-quadratics'], correctToken: 'factorising-quadratics', incorrectTokens: [null, 'wrong-signs', 'wrong-pair', 'wrong-pair'] } },
                { id: 'VCMNA286-020', question: 'Expand: (x - 7)²', options: ['x² - 49', 'x² - 14x + 49', 'x² + 14x + 49', 'x² - 7x + 49'], correctAnswer: 1, explanation: '(x-7)² = x² - 14x + 49', difficulty: 2, knowledge: { questionTokens: ['perfect-squares'], correctToken: 'perfect-squares', incorrectTokens: ['no-middle', null, 'wrong-sign', 'wrong-middle'] } },
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
          id: 'measurement',
          title: 'Units and Measurement',
          description: 'Area, perimeter, volume and surface area calculations',
          sections: [
            {
              id: 'VCMMG286',
              code: 'VCMMG286',
              title: 'Area of Composite Shapes',
              description: 'Find perimeters and areas of parallelograms, trapeziums, rhombuses and kites',
              content: `# Area of Composite Shapes

## Area Formulas Review

| Shape | Area Formula |
|-------|--------------|
| Rectangle | A = length × width |
| Triangle | A = ½ × base × height |
| Parallelogram | A = base × height |
| Trapezium | A = ½ × (a + b) × h |
| Circle | A = πr² |

## Parallelogram
**Area = base × perpendicular height**

The height must be perpendicular (at 90°) to the base.

## Trapezium
**Area = ½ × (sum of parallel sides) × height**
A = ½ × (a + b) × h

## Rhombus and Kite
**Area = ½ × diagonal₁ × diagonal₂**

## Composite Shapes
Break the shape into simpler shapes, find each area, then add (or subtract) them.`,
              keyPoints: [
                'Parallelogram: A = base × height',
                'Trapezium: A = ½(a+b) × h',
                'Rhombus/Kite: A = ½ × d₁ × d₂',
                'Composite shapes: break into simple shapes'
              ],
              knowledgeTokens: [
                { id: 'parallelogram-area', name: 'Parallelogram Area', description: 'Calculating area of parallelograms' },
                { id: 'trapezium-area', name: 'Trapezium Area', description: 'Calculating area of trapeziums' },
                { id: 'rhombus-kite-area', name: 'Rhombus and Kite Area', description: 'Using diagonals for area' },
                { id: 'composite-area', name: 'Composite Shape Area', description: 'Breaking shapes into parts', prerequisites: ['parallelogram-area', 'trapezium-area'] },
              ],
              examples: [
                { problem: 'Find area of parallelogram: base 8cm, height 5cm', solution: '40 cm²', explanation: 'A = 8 × 5 = 40 cm²' },
                { problem: 'Find area of trapezium: parallel sides 6cm and 10cm, height 4cm', solution: '32 cm²', explanation: 'A = ½ × (6+10) × 4 = ½ × 16 × 4 = 32 cm²' }
              ],
              questions: [
                { id: 'VCMMG286-001', question: 'Area of parallelogram: base 10cm, height 6cm?', options: ['16 cm²', '60 cm²', '30 cm²', '40 cm²'], correctAnswer: 1, explanation: 'A = base × height = 10 × 6 = 60 cm²', difficulty: 1, knowledge: { questionTokens: ['parallelogram-area'], correctToken: 'parallelogram-area', incorrectTokens: ['added', null, 'halved', 'wrong-calculation'] } },
                { id: 'VCMMG286-002', question: 'Area of trapezium: parallel sides 5cm, 9cm, height 4cm?', options: ['28 cm²', '36 cm²', '18 cm²', '56 cm²'], correctAnswer: 0, explanation: 'A = ½ × (5+9) × 4 = ½ × 14 × 4 = 28 cm²', difficulty: 2, knowledge: { questionTokens: ['trapezium-area'], correctToken: 'trapezium-area', incorrectTokens: [null, 'forgot-half', 'wrong-formula', 'doubled'] } },
                { id: 'VCMMG286-003', question: 'Area of rhombus: diagonals 8cm and 6cm?', options: ['48 cm²', '24 cm²', '14 cm²', '96 cm²'], correctAnswer: 1, explanation: 'A = ½ × 8 × 6 = 24 cm²', difficulty: 1, knowledge: { questionTokens: ['rhombus-kite-area'], correctToken: 'rhombus-kite-area', incorrectTokens: ['forgot-half', null, 'added', 'doubled'] } },
                { id: 'VCMMG286-004', question: 'A parallelogram has area 45 cm² and base 9cm. Find the height.', options: ['5 cm', '54 cm', '36 cm', '4 cm'], correctAnswer: 0, explanation: 'Height = Area ÷ Base = 45 ÷ 9 = 5 cm', difficulty: 2, knowledge: { questionTokens: ['parallelogram-area'], correctToken: 'parallelogram-area', incorrectTokens: [null, 'multiplied', 'subtracted', 'wrong-division'] } },
                { id: 'VCMMG286-005', question: 'Area of kite: diagonals 10cm and 12cm?', options: ['22 cm²', '120 cm²', '60 cm²', '110 cm²'], correctAnswer: 2, explanation: 'A = ½ × 10 × 12 = 60 cm²', difficulty: 1, knowledge: { questionTokens: ['rhombus-kite-area'], correctToken: 'rhombus-kite-area', incorrectTokens: ['added', 'forgot-half', null, 'wrong-calculation'] } },
                { id: 'VCMMG286-006', question: 'Trapezium: parallel sides 8m, 12m, height 5m. Area?', options: ['50 m²', '100 m²', '40 m²', '60 m²'], correctAnswer: 0, explanation: 'A = ½ × (8+12) × 5 = ½ × 20 × 5 = 50 m²', difficulty: 2, knowledge: { questionTokens: ['trapezium-area'], correctToken: 'trapezium-area', incorrectTokens: [null, 'forgot-half', 'one-side-only', 'wrong-formula'] } },
                { id: 'VCMMG286-007', question: 'A shape is made of a rectangle (8×4) and a triangle (base 8, height 3). Total area?', options: ['44 cm²', '32 cm²', '56 cm²', '24 cm²'], correctAnswer: 0, explanation: 'Rectangle = 32, Triangle = ½×8×3 = 12. Total = 44 cm²', difficulty: 2, knowledge: { questionTokens: ['composite-area'], correctToken: 'composite-area', incorrectTokens: [null, 'rectangle-only', 'wrong-triangle', 'wrong-calculation'] } },
                { id: 'VCMMG286-008', question: 'Parallelogram: base 15cm, height 8cm. Area?', options: ['23 cm²', '120 cm²', '60 cm²', '46 cm²'], correctAnswer: 1, explanation: 'A = 15 × 8 = 120 cm²', difficulty: 1, knowledge: { questionTokens: ['parallelogram-area'], correctToken: 'parallelogram-area', incorrectTokens: ['added', null, 'halved', 'perimeter'] } },
                { id: 'VCMMG286-009', question: 'Rhombus with diagonals 14cm and 10cm. Area?', options: ['70 cm²', '140 cm²', '24 cm²', '35 cm²'], correctAnswer: 0, explanation: 'A = ½ × 14 × 10 = 70 cm²', difficulty: 1, knowledge: { questionTokens: ['rhombus-kite-area'], correctToken: 'rhombus-kite-area', incorrectTokens: [null, 'forgot-half', 'added', 'wrong-calculation'] } },
                { id: 'VCMMG286-010', question: 'Trapezium has area 42 cm², parallel sides 6cm and 8cm. Find height.', options: ['6 cm', '3 cm', '7 cm', '21 cm'], correctAnswer: 0, explanation: '42 = ½ × 14 × h. h = 42 × 2 ÷ 14 = 6 cm', difficulty: 3, knowledge: { questionTokens: ['trapezium-area'], correctToken: 'trapezium-area', incorrectTokens: [null, 'wrong-rearrangement', 'forgot-2', 'wrong-calculation'] } },
                { id: 'VCMMG286-011', question: 'L-shaped room: 6×4m and 3×2m attached. Total area?', options: ['30 m²', '24 m²', '6 m²', '36 m²'], correctAnswer: 0, explanation: '6×4 = 24 m², 3×2 = 6 m². Total = 30 m²', difficulty: 2, knowledge: { questionTokens: ['composite-area'], correctToken: 'composite-area', incorrectTokens: [null, 'one-part', 'subtracted', 'wrong-calculation'] } },
                { id: 'VCMMG286-012', question: 'Parallelogram: area 72 cm², height 8cm. Find base.', options: ['9 cm', '64 cm', '80 cm', '576 cm'], correctAnswer: 0, explanation: 'Base = Area ÷ Height = 72 ÷ 8 = 9 cm', difficulty: 2, knowledge: { questionTokens: ['parallelogram-area'], correctToken: 'parallelogram-area', incorrectTokens: [null, 'subtracted', 'added', 'multiplied'] } },
                { id: 'VCMMG286-013', question: 'Kite with one diagonal 16cm, area 80 cm². Find other diagonal.', options: ['5 cm', '10 cm', '64 cm', '1280 cm'], correctAnswer: 1, explanation: '80 = ½ × 16 × d. d = 80 × 2 ÷ 16 = 10 cm', difficulty: 3, knowledge: { questionTokens: ['rhombus-kite-area'], correctToken: 'rhombus-kite-area', incorrectTokens: ['forgot-multiply-2', null, 'subtracted', 'multiplied'] } },
                { id: 'VCMMG286-014', question: 'A square has a triangle cut from one corner (base 4cm, height 4cm). Original square 10×10. Remaining area?', options: ['92 cm²', '100 cm²', '8 cm²', '108 cm²'], correctAnswer: 0, explanation: 'Square = 100 cm². Triangle = ½×4×4 = 8 cm². Remaining = 100-8 = 92 cm²', difficulty: 3, knowledge: { questionTokens: ['composite-area'], correctToken: 'composite-area', incorrectTokens: [null, 'no-subtraction', 'triangle-only', 'added'] } },
                { id: 'VCMMG286-015', question: 'Trapezium with parallel sides 3x and 5x, height x. Area in terms of x?', options: ['4x² cm²', '8x² cm²', '4x cm²', '15x² cm²'], correctAnswer: 0, explanation: 'A = ½ × (3x+5x) × x = ½ × 8x × x = 4x²', difficulty: 3, knowledge: { questionTokens: ['trapezium-area'], correctToken: 'trapezium-area', incorrectTokens: [null, 'forgot-half', 'forgot-x²', 'multiplied-wrong'] } },
                { id: 'VCMMG286-016', question: 'Two identical trapeziums form a parallelogram. Each trapezium: parallel sides 5cm, 9cm. What is the parallelogram base?', options: ['5 cm', '9 cm', '14 cm', '7 cm'], correctAnswer: 3, explanation: 'Parallelogram base = average of parallel sides = (5+9)÷2 = 7 cm', difficulty: 3, knowledge: { questionTokens: ['trapezium-area', 'parallelogram-area'], correctToken: 'trapezium-area', incorrectTokens: ['smaller-side', 'larger-side', 'sum', null] } },
                { id: 'VCMMG286-017', question: 'Parallelogram ABCD has base 12cm. Slant height is 10cm, perpendicular height is 8cm. Area?', options: ['120 cm²', '96 cm²', '80 cm²', '160 cm²'], correctAnswer: 1, explanation: 'Use perpendicular height: A = 12 × 8 = 96 cm²', difficulty: 2, knowledge: { questionTokens: ['parallelogram-area'], correctToken: 'parallelogram-area', incorrectTokens: ['used-slant', null, 'wrong-calculation', 'doubled'] } },
                { id: 'VCMMG286-018', question: 'Arrow shape: rectangle 6×2 plus triangle point (base 2, height 3). Total area?', options: ['12 cm²', '15 cm²', '9 cm²', '18 cm²'], correctAnswer: 1, explanation: 'Rectangle = 12, Triangle = ½×2×3 = 3. Total = 15 cm²', difficulty: 2, knowledge: { questionTokens: ['composite-area'], correctToken: 'composite-area', incorrectTokens: ['rectangle-only', null, 'subtracted', 'wrong-triangle'] } },
                { id: 'VCMMG286-019', question: 'A rhombus has area 54 cm² and one diagonal 9cm. Find the other diagonal.', options: ['6 cm', '12 cm', '45 cm', '108 cm'], correctAnswer: 1, explanation: '54 = ½ × 9 × d. d = 54 × 2 ÷ 9 = 12 cm', difficulty: 2, knowledge: { questionTokens: ['rhombus-kite-area'], correctToken: 'rhombus-kite-area', incorrectTokens: ['forgot-multiply-2', null, 'subtracted', 'multiplied'] } },
                { id: 'VCMMG286-020', question: 'Pool with main rectangle 10×6m and semicircular end (radius 3m). Total area? (π=3.14)', options: ['60 m²', '74.13 m²', '88.26 m²', '45.86 m²'], correctAnswer: 1, explanation: 'Rectangle = 60 m². Semicircle = ½×π×3² = 14.13 m². Total ≈ 74.13 m²', difficulty: 3, knowledge: { questionTokens: ['composite-area'], correctToken: 'composite-area', incorrectTokens: ['rectangle-only', null, 'full-circle', 'wrong-calculation'] } },
              ],
            },
            {
              id: 'VCMMG287',
              code: 'VCMMG287',
              title: 'Volume of Prisms and Cylinders',
              description: 'Develop the formulas for volumes of rectangular and triangular prisms and prisms in general. Use formulas to solve problems involving volume',
              content: `# Volume of Prisms and Cylinders

Volume measures the space inside a 3D shape.

## Prism Volume Formula
**Volume = Base Area × Height**

This works for ANY prism (rectangular, triangular, etc.)

## Rectangular Prism (Cuboid)
V = length × width × height
V = l × w × h

## Cube
V = side³ = s³

## Triangular Prism
V = (½ × base × height of triangle) × length

## Cylinder
V = πr²h
- π ≈ 3.14
- r = radius
- h = height

## Units
- Length in cm → Volume in cm³
- Length in m → Volume in m³
- 1 cm³ = 1 mL
- 1000 cm³ = 1 L`,
              keyPoints: [
                'Prism volume = Base area × Height',
                'Rectangular prism: V = l × w × h',
                'Cylinder: V = πr²h',
                '1000 cm³ = 1 litre'
              ],
              knowledgeTokens: [
                { id: 'rectangular-prism-volume', name: 'Rectangular Prism Volume', description: 'V = l × w × h' },
                { id: 'triangular-prism-volume', name: 'Triangular Prism Volume', description: 'V = base area × length' },
                { id: 'cylinder-volume', name: 'Cylinder Volume', description: 'V = πr²h' },
                { id: 'volume-units', name: 'Volume Units', description: 'Converting between volume and capacity' },
              ],
              examples: [
                { problem: 'Find volume of box: 5cm × 4cm × 3cm', solution: '60 cm³', explanation: 'V = 5 × 4 × 3 = 60 cm³' },
                { problem: 'Cylinder: radius 3cm, height 10cm. Find volume (π=3.14)', solution: '282.6 cm³', explanation: 'V = π × 3² × 10 = 3.14 × 9 × 10 = 282.6 cm³' }
              ],
              questions: [
                { id: 'VCMMG287-001', question: 'Volume of rectangular prism: 6cm × 4cm × 5cm?', options: ['120 cm³', '15 cm³', '60 cm³', '240 cm³'], correctAnswer: 0, explanation: 'V = 6 × 4 × 5 = 120 cm³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'added', 'two-sides', 'doubled'] } },
                { id: 'VCMMG287-002', question: 'Volume of cube with side 4cm?', options: ['12 cm³', '16 cm³', '64 cm³', '48 cm³'], correctAnswer: 2, explanation: 'V = 4³ = 64 cm³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: ['added', 'squared', null, 'perimeter'] } },
                { id: 'VCMMG287-003', question: 'Cylinder: radius 2cm, height 7cm. Volume? (π=3.14)', options: ['87.92 cm³', '43.96 cm³', '28 cm³', '14 cm³'], correctAnswer: 0, explanation: 'V = 3.14 × 2² × 7 = 87.92 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'forgot-square', 'forgot-pi', 'wrong-formula'] } },
                { id: 'VCMMG287-004', question: 'A box holds 2000 cm³. How many litres?', options: ['2 L', '20 L', '0.2 L', '200 L'], correctAnswer: 0, explanation: '2000 ÷ 1000 = 2 litres', difficulty: 1, knowledge: { questionTokens: ['volume-units'], correctToken: 'volume-units', incorrectTokens: [null, 'wrong-conversion', 'wrong-direction', 'extra-zero'] } },
                { id: 'VCMMG287-005', question: 'Triangular prism: triangle base 6cm, height 4cm, prism length 10cm. Volume?', options: ['120 cm³', '240 cm³', '60 cm³', '24 cm³'], correctAnswer: 0, explanation: 'Triangle area = ½×6×4 = 12. V = 12 × 10 = 120 cm³', difficulty: 2, knowledge: { questionTokens: ['triangular-prism-volume'], correctToken: 'triangular-prism-volume', incorrectTokens: [null, 'forgot-half', 'triangle-only', 'wrong-calculation'] } },
                { id: 'VCMMG287-006', question: 'Rectangular prism: 8m × 5m × 3m. Volume?', options: ['120 m³', '16 m³', '240 m³', '40 m³'], correctAnswer: 0, explanation: 'V = 8 × 5 × 3 = 120 m³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'added', 'doubled', 'two-sides'] } },
                { id: 'VCMMG287-007', question: 'Cylinder: diameter 10cm, height 6cm. Volume? (π=3.14)', options: ['188.4 cm³', '471 cm³', '94.2 cm³', '1884 cm³'], correctAnswer: 1, explanation: 'r = 5. V = 3.14 × 5² × 6 = 471 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: ['used-diameter', null, 'forgot-square', 'wrong-calculation'] } },
                { id: 'VCMMG287-008', question: 'A tank holds 5 L. Volume in cm³?', options: ['5 cm³', '500 cm³', '5000 cm³', '50 cm³'], correctAnswer: 2, explanation: '5 × 1000 = 5000 cm³', difficulty: 1, knowledge: { questionTokens: ['volume-units'], correctToken: 'volume-units', incorrectTokens: ['no-conversion', 'wrong-factor', null, 'wrong-factor'] } },
                { id: 'VCMMG287-009', question: 'Cube has volume 27 cm³. What is the side length?', options: ['9 cm', '3 cm', '27 cm', '13.5 cm'], correctAnswer: 1, explanation: '³√27 = 3 cm', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: ['divided-by-3', null, 'no-root', 'square-root'] } },
                { id: 'VCMMG287-010', question: 'Rectangular prism: base 12 cm², height 8cm. Volume?', options: ['20 cm³', '96 cm³', '1.5 cm³', '4 cm³'], correctAnswer: 1, explanation: 'V = base area × height = 12 × 8 = 96 cm³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: ['added', null, 'divided', 'wrong-operation'] } },
                { id: 'VCMMG287-011', question: 'Cylinder: r=4cm, h=10cm. Volume? (π=3.14)', options: ['125.6 cm³', '502.4 cm³', '251.2 cm³', '40 cm³'], correctAnswer: 1, explanation: 'V = 3.14 × 16 × 10 = 502.4 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: ['forgot-square', null, 'forgot-h', 'forgot-pi'] } },
                { id: 'VCMMG287-012', question: 'Prism with hexagonal base area 24 cm², length 15cm. Volume?', options: ['360 cm³', '39 cm³', '1.6 cm³', '180 cm³'], correctAnswer: 0, explanation: 'V = base area × height = 24 × 15 = 360 cm³', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'added', 'divided', 'halved'] } },
                { id: 'VCMMG287-013', question: 'Box: 20cm × 15cm × 10cm. Capacity in litres?', options: ['3 L', '30 L', '0.3 L', '300 L'], correctAnswer: 0, explanation: 'V = 3000 cm³ = 3 L', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume', 'volume-units'], correctToken: 'volume-units', incorrectTokens: [null, 'forgot-conversion', 'wrong-direction', 'extra-zeros'] } },
                { id: 'VCMMG287-014', question: 'Triangular prism: right triangle legs 5cm and 12cm, length 8cm. Volume?', options: ['480 cm³', '240 cm³', '120 cm³', '60 cm³'], correctAnswer: 1, explanation: 'Triangle = ½×5×12 = 30. V = 30 × 8 = 240 cm³', difficulty: 2, knowledge: { questionTokens: ['triangular-prism-volume'], correctToken: 'triangular-prism-volume', incorrectTokens: ['forgot-half', null, 'wrong-calculation', 'triangle-only'] } },
                { id: 'VCMMG287-015', question: 'Cylinder has volume 314 cm³ and height 4cm. Find radius. (π=3.14)', options: ['5 cm', '25 cm', '10 cm', '2.5 cm'], correctAnswer: 0, explanation: '314 = 3.14 × r² × 4. r² = 25, r = 5 cm', difficulty: 3, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'forgot-root', 'wrong-rearrangement', 'halved'] } },
                { id: 'VCMMG287-016', question: 'Rectangular prism volume 180 cm³, base 6×5. Find height.', options: ['6 cm', '30 cm', '150 cm', '3 cm'], correctAnswer: 0, explanation: '180 = 30 × h. h = 6 cm', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'base-only', 'subtracted', 'wrong-division'] } },
                { id: 'VCMMG287-017', question: 'Compare: Cube (5cm side) vs Cylinder (r=3cm, h=5cm). Which is larger? (π=3.14)', options: ['Cube', 'Cylinder', 'Equal', 'Cannot compare'], correctAnswer: 0, explanation: 'Cube = 125 cm³. Cylinder = 3.14×9×5 = 141.3 cm³. Cylinder larger!', difficulty: 3, knowledge: { questionTokens: ['rectangular-prism-volume', 'cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'calculation-error', 'no-calculation', 'confused'] } },
                { id: 'VCMMG287-018', question: 'A pipe is cylindrical: outer radius 5cm, inner radius 3cm, length 20cm. Volume of material? (π=3.14)', options: ['1004.8 cm³', '565.2 cm³', '502.4 cm³', '2009.6 cm³'], correctAnswer: 0, explanation: 'V = π×(5²-3²)×20 = 3.14×16×20 = 1004.8 cm³', difficulty: 3, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'inner-only', 'outer-only', 'added-radii'] } },
                { id: 'VCMMG287-019', question: 'Swimming pool: 25m × 10m × 2m. Capacity in kilolitres?', options: ['500 kL', '50 kL', '5000 kL', '5 kL'], correctAnswer: 0, explanation: 'V = 500 m³ = 500 kL (1 m³ = 1 kL)', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume', 'volume-units'], correctToken: 'volume-units', incorrectTokens: [null, 'wrong-conversion', 'extra-zero', 'wrong-units'] } },
                { id: 'VCMMG287-020', question: 'Cylinder doubles in height. Volume becomes...', options: ['Double', 'Quadruple', 'Same', 'Triple'], correctAnswer: 0, explanation: 'V = πr²h. If h doubles, V doubles.', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'r-squared-confusion', 'no-change', 'wrong-factor'] } },
              ],
            },
          ],
        },
        {
          id: 'pythagoras',
          title: 'Pythagoras Theorem',
          description: 'Using Pythagoras theorem to find sides of right-angled triangles',
          sections: [
            {
              id: 'VCMMG288',
              code: 'VCMMG288',
              title: 'Pythagoras Theorem',
              description: 'Investigate Pythagoras theorem and its application to solving simple problems involving right angled triangles',
              content: `# Pythagoras' Theorem

Pythagoras' Theorem is one of the most important relationships in geometry. It connects the three sides of a right-angled triangle.

## The Theorem
In a right-angled triangle:
**a² + b² = c²**

Where:
- **c** = hypotenuse (longest side, opposite the right angle)
- **a** and **b** = the other two sides (legs)

## Finding the Hypotenuse
If you know the two shorter sides, find the hypotenuse:
- c² = a² + b²
- c = √(a² + b²)

**Example:** Sides are 3 cm and 4 cm
- c² = 3² + 4² = 9 + 16 = 25
- c = √25 = 5 cm

## Finding a Shorter Side
If you know the hypotenuse and one side:
- a² = c² - b²
- a = √(c² - b²)

**Example:** Hypotenuse = 13 cm, one side = 5 cm
- a² = 13² - 5² = 169 - 25 = 144
- a = √144 = 12 cm

## Pythagorean Triples
Common sets of whole numbers that work:
- 3, 4, 5
- 5, 12, 13
- 8, 15, 17
- 7, 24, 25

## Real-World Applications
- Finding diagonal distances
- Checking if corners are square
- Calculating heights and distances`,
              keyPoints: [
                'a² + b² = c² in right-angled triangles',
                'The hypotenuse is always the longest side',
                'To find a side, rearrange and use square roots',
                'Pythagorean triples are whole number solutions',
              ],
              knowledgeTokens: [
                { id: 'pythagoras-theorem', name: 'Pythagoras Theorem', description: 'Understanding a² + b² = c²' },
                { id: 'finding-hypotenuse', name: 'Finding Hypotenuse', description: 'Using c = √(a² + b²)', prerequisites: ['pythagoras-theorem'] },
                { id: 'finding-shorter-side', name: 'Finding Shorter Side', description: 'Using a = √(c² - b²)', prerequisites: ['pythagoras-theorem'] },
                { id: 'pythagorean-triples', name: 'Pythagorean Triples', description: 'Recognising common whole number solutions' },
                { id: 'pythagoras-applications', name: 'Pythagoras Applications', description: 'Real-world problem solving', prerequisites: ['finding-hypotenuse', 'finding-shorter-side'] },
              ],
              examples: [
                { problem: 'Find the hypotenuse of a right triangle with legs 6 cm and 8 cm', solution: '10 cm', explanation: 'c² = 6² + 8² = 36 + 64 = 100, c = √100 = 10 cm' },
                { problem: 'A ladder 10 m long leans against a wall, base is 6 m from wall. How high up the wall?', solution: '8 m', explanation: 'h² = 10² - 6² = 100 - 36 = 64, h = √64 = 8 m' },
              ],
              questions: [
                { id: 'VCMMG288-001', question: 'In a right triangle, the two shorter sides are 3 cm and 4 cm. Find the hypotenuse.', options: ['5 cm', '7 cm', '12 cm', '25 cm'], correctAnswer: 0, explanation: 'c² = 3² + 4² = 9 + 16 = 25, c = √25 = 5 cm', difficulty: 1, knowledge: { questionTokens: ['finding-hypotenuse'], correctToken: 'finding-hypotenuse', incorrectTokens: [null, 'added-sides', 'multiplied', 'no-root'] } },
                { id: 'VCMMG288-002', question: 'Find the hypotenuse: legs are 5 cm and 12 cm.', options: ['17 cm', '13 cm', '169 cm', '7 cm'], correctAnswer: 1, explanation: 'c² = 5² + 12² = 25 + 144 = 169, c = √169 = 13 cm', difficulty: 1, knowledge: { questionTokens: ['finding-hypotenuse'], correctToken: 'finding-hypotenuse', incorrectTokens: ['added-sides', null, 'no-root', 'subtracted'] } },
                { id: 'VCMMG288-003', question: 'Hypotenuse is 10 cm, one leg is 6 cm. Find the other leg.', options: ['4 cm', '8 cm', '16 cm', '64 cm'], correctAnswer: 1, explanation: 'a² = 10² - 6² = 100 - 36 = 64, a = √64 = 8 cm', difficulty: 2, knowledge: { questionTokens: ['finding-shorter-side'], correctToken: 'finding-shorter-side', incorrectTokens: ['wrong-operation', null, 'wrong-calculation', 'no-root'] } },
                { id: 'VCMMG288-004', question: 'Which is a Pythagorean triple?', options: ['2, 3, 4', '3, 4, 5', '4, 5, 6', '5, 6, 7'], correctAnswer: 1, explanation: '3² + 4² = 9 + 16 = 25 = 5². The others do not satisfy a² + b² = c²', difficulty: 1, knowledge: { questionTokens: ['pythagorean-triples'], correctToken: 'pythagorean-triples', incorrectTokens: ['not-verified', null, 'not-verified', 'not-verified'] } },
                { id: 'VCMMG288-005', question: 'A rectangle is 8 m by 6 m. Find the diagonal length.', options: ['14 m', '10 m', '48 m', '100 m'], correctAnswer: 1, explanation: 'd² = 8² + 6² = 64 + 36 = 100, d = √100 = 10 m', difficulty: 2, knowledge: { questionTokens: ['pythagoras-applications', 'finding-hypotenuse'], correctToken: 'pythagoras-applications', incorrectTokens: ['added-sides', null, 'multiplied', 'no-root'] } },
                { id: 'VCMMG288-006', question: 'Find the hypotenuse: legs 8 cm and 15 cm.', options: ['17 cm', '23 cm', '289 cm', '7 cm'], correctAnswer: 0, explanation: 'c² = 8² + 15² = 64 + 225 = 289, c = √289 = 17 cm', difficulty: 2, knowledge: { questionTokens: ['finding-hypotenuse'], correctToken: 'finding-hypotenuse', incorrectTokens: [null, 'added-sides', 'no-root', 'subtracted'] } },
                { id: 'VCMMG288-007', question: 'Hypotenuse = 25 cm, one leg = 7 cm. Find the other leg.', options: ['18 cm', '24 cm', '32 cm', '576 cm'], correctAnswer: 1, explanation: 'a² = 25² - 7² = 625 - 49 = 576, a = √576 = 24 cm', difficulty: 2, knowledge: { questionTokens: ['finding-shorter-side'], correctToken: 'finding-shorter-side', incorrectTokens: ['subtracted-sides', null, 'wrong-calculation', 'no-root'] } },
                { id: 'VCMMG288-008', question: 'A ladder 13 m long reaches 12 m up a wall. How far is the base from the wall?', options: ['1 m', '5 m', '25 m', '√313 m'], correctAnswer: 1, explanation: 'x² = 13² - 12² = 169 - 144 = 25, x = √25 = 5 m', difficulty: 2, knowledge: { questionTokens: ['pythagoras-applications', 'finding-shorter-side'], correctToken: 'pythagoras-applications', incorrectTokens: ['subtracted', null, 'added', 'no-root'] } },
                { id: 'VCMMG288-009', question: 'Is a triangle with sides 6, 8, 10 a right triangle?', options: ['Yes', 'No', 'Cannot tell', 'Only if one angle is marked'], correctAnswer: 0, explanation: '6² + 8² = 36 + 64 = 100 = 10². Yes, it satisfies Pythagoras.', difficulty: 2, knowledge: { questionTokens: ['pythagoras-theorem'], correctToken: 'pythagoras-theorem', incorrectTokens: [null, 'wrong-check', 'needs-info', 'visual-only'] } },
                { id: 'VCMMG288-010', question: 'Find the hypotenuse: legs 9 cm and 12 cm.', options: ['15 cm', '21 cm', '225 cm', '3 cm'], correctAnswer: 0, explanation: 'c² = 9² + 12² = 81 + 144 = 225, c = √225 = 15 cm', difficulty: 1, knowledge: { questionTokens: ['finding-hypotenuse'], correctToken: 'finding-hypotenuse', incorrectTokens: [null, 'added-sides', 'no-root', 'subtracted'] } },
                { id: 'VCMMG288-011', question: 'A TV screen is 48 cm wide and 36 cm tall. Find the diagonal.', options: ['84 cm', '60 cm', '1728 cm', '12 cm'], correctAnswer: 1, explanation: 'd² = 48² + 36² = 2304 + 1296 = 3600, d = √3600 = 60 cm', difficulty: 2, knowledge: { questionTokens: ['pythagoras-applications'], correctToken: 'pythagoras-applications', incorrectTokens: ['added-sides', null, 'area', 'gcd'] } },
                { id: 'VCMMG288-012', question: 'Hypotenuse = 17 cm, one leg = 8 cm. Find the other leg.', options: ['9 cm', '15 cm', '25 cm', '225 cm'], correctAnswer: 1, explanation: 'a² = 17² - 8² = 289 - 64 = 225, a = √225 = 15 cm', difficulty: 2, knowledge: { questionTokens: ['finding-shorter-side'], correctToken: 'finding-shorter-side', incorrectTokens: ['subtracted-sides', null, 'added', 'no-root'] } },
                { id: 'VCMMG288-013', question: 'Two legs of a right triangle are equal and the hypotenuse is 10 cm. Find each leg (to 1 dp).', options: ['5 cm', '7.1 cm', '50 cm', '√50 cm'], correctAnswer: 1, explanation: '2a² = 100, a² = 50, a = √50 ≈ 7.07 ≈ 7.1 cm', difficulty: 3, knowledge: { questionTokens: ['finding-shorter-side'], correctToken: 'finding-shorter-side', incorrectTokens: ['halved-hyp', null, 'no-root', 'exact-only'] } },
                { id: 'VCMMG288-014', question: 'A ship sails 30 km east then 40 km north. How far from the start?', options: ['70 km', '50 km', '10 km', '2500 km'], correctAnswer: 1, explanation: 'd² = 30² + 40² = 900 + 1600 = 2500, d = √2500 = 50 km', difficulty: 2, knowledge: { questionTokens: ['pythagoras-applications'], correctToken: 'pythagoras-applications', incorrectTokens: ['added-distances', null, 'subtracted', 'no-root'] } },
                { id: 'VCMMG288-015', question: 'Is 5, 12, 13 a Pythagorean triple?', options: ['Yes', 'No', 'Only approximately', 'Need more info'], correctAnswer: 0, explanation: '5² + 12² = 25 + 144 = 169 = 13². Yes!', difficulty: 1, knowledge: { questionTokens: ['pythagorean-triples'], correctToken: 'pythagorean-triples', incorrectTokens: [null, 'wrong-check', 'not-whole', 'no-calculation'] } },
                { id: 'VCMMG288-016', question: 'Find the height of an isosceles triangle with base 16 cm and equal sides 10 cm.', options: ['6 cm', '8 cm', '26 cm', '36 cm'], correctAnswer: 0, explanation: 'Height splits base: h² = 10² - 8² = 100 - 64 = 36, h = 6 cm', difficulty: 3, knowledge: { questionTokens: ['pythagoras-applications', 'finding-shorter-side'], correctToken: 'pythagoras-applications', incorrectTokens: [null, 'wrong-split', 'added', 'no-root'] } },
                { id: 'VCMMG288-017', question: 'A ramp is 15 m long and rises 9 m vertically. What is the horizontal distance?', options: ['6 m', '12 m', '24 m', '144 m'], correctAnswer: 1, explanation: 'h² = 15² - 9² = 225 - 81 = 144, h = √144 = 12 m', difficulty: 2, knowledge: { questionTokens: ['finding-shorter-side', 'pythagoras-applications'], correctToken: 'finding-shorter-side', incorrectTokens: ['subtracted', null, 'added', 'no-root'] } },
                { id: 'VCMMG288-018', question: 'In a right triangle, one leg is 24 cm and the hypotenuse is 25 cm. Find the other leg.', options: ['1 cm', '7 cm', '49 cm', '√49 cm'], correctAnswer: 1, explanation: 'a² = 25² - 24² = 625 - 576 = 49, a = √49 = 7 cm', difficulty: 2, knowledge: { questionTokens: ['finding-shorter-side'], correctToken: 'finding-shorter-side', incorrectTokens: ['subtracted', null, 'no-root', 'exact-only'] } },
                { id: 'VCMMG288-019', question: 'A rectangular park is 120 m by 50 m. What is the shortest path diagonally across?', options: ['170 m', '130 m', '6000 m', '70 m'], correctAnswer: 1, explanation: 'd² = 120² + 50² = 14400 + 2500 = 16900, d = √16900 = 130 m', difficulty: 2, knowledge: { questionTokens: ['pythagoras-applications'], correctToken: 'pythagoras-applications', incorrectTokens: ['added', null, 'area', 'subtracted'] } },
                { id: 'VCMMG288-020', question: 'Which set of numbers is NOT a Pythagorean triple?', options: ['3, 4, 5', '6, 8, 10', '5, 12, 13', '4, 5, 6'], correctAnswer: 3, explanation: '4² + 5² = 16 + 25 = 41 ≠ 36 = 6². The others all satisfy a² + b² = c²', difficulty: 2, knowledge: { questionTokens: ['pythagorean-triples'], correctToken: 'pythagorean-triples', incorrectTokens: ['valid-triple', 'valid-triple', 'valid-triple', null] } },
              ],
            },
          ],
        },
        {
          id: 'circles',
          title: 'Circles',
          description: 'Properties and measurements of circles',
          sections: [
            {
              id: 'VCMMG289',
              code: 'VCMMG289',
              title: 'Circle Properties',
              description: 'Investigate the relationship between features of circles such as circumference, area, radius and diameter. Use formulas to solve problems',
              content: `# Circle Properties

Circles are special shapes with many useful properties.

## Parts of a Circle
- **Centre**: The middle point
- **Radius (r)**: Distance from centre to edge
- **Diameter (d)**: Distance across through centre = 2r
- **Circumference (C)**: Distance around the circle
- **Area (A)**: Space inside the circle

## Pi (π)
Pi is a special number ≈ 3.14159...
It relates circumference to diameter: π = C ÷ d

## Circumference Formulas
**C = πd** (using diameter)
**C = 2πr** (using radius)

**Example:** Circle with radius 7 cm
C = 2 × π × 7 = 14π ≈ 43.98 cm

## Area Formula
**A = πr²**

**Example:** Circle with radius 5 cm
A = π × 5² = 25π ≈ 78.54 cm²

## Semicircles and Quadrants
- **Semicircle**: Half a circle
  - Perimeter = πr + 2r (curved part + diameter)
  - Area = ½πr²

- **Quadrant**: Quarter of a circle
  - Perimeter = ½πr + 2r (curved part + two radii)
  - Area = ¼πr²`,
              keyPoints: [
                'Diameter = 2 × radius',
                'Circumference = πd = 2πr',
                'Area = πr²',
                'π ≈ 3.14 or 22/7',
              ],
              knowledgeTokens: [
                { id: 'circle-parts', name: 'Circle Parts', description: 'Understanding radius, diameter, circumference' },
                { id: 'circumference-formula', name: 'Circumference Formula', description: 'Using C = πd or C = 2πr', prerequisites: ['circle-parts'] },
                { id: 'circle-area', name: 'Circle Area', description: 'Using A = πr²', prerequisites: ['circle-parts'] },
                { id: 'semicircle-quadrant', name: 'Semicircle and Quadrant', description: 'Calculating parts of circles', prerequisites: ['circumference-formula', 'circle-area'] },
              ],
              examples: [
                { problem: 'Find the circumference of a circle with diameter 10 cm (π = 3.14)', solution: '31.4 cm', explanation: 'C = πd = 3.14 × 10 = 31.4 cm' },
                { problem: 'Find the area of a circle with radius 4 cm (π = 3.14)', solution: '50.24 cm²', explanation: 'A = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 cm²' },
              ],
              questions: [
                { id: 'VCMMG289-001', question: 'A circle has radius 5 cm. What is the diameter?', options: ['2.5 cm', '5 cm', '10 cm', '25 cm'], correctAnswer: 2, explanation: 'Diameter = 2 × radius = 2 × 5 = 10 cm', difficulty: 1, knowledge: { questionTokens: ['circle-parts'], correctToken: 'circle-parts', incorrectTokens: ['halved', 'same-as-radius', null, 'squared'] } },
                { id: 'VCMMG289-002', question: 'Find the circumference of a circle with diameter 14 cm. (π = 22/7)', options: ['44 cm', '22 cm', '88 cm', '154 cm²'], correctAnswer: 0, explanation: 'C = πd = 22/7 × 14 = 44 cm', difficulty: 1, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: [null, 'used-radius', 'doubled', 'area-confusion'] } },
                { id: 'VCMMG289-003', question: 'Find the area of a circle with radius 7 cm. (π = 22/7)', options: ['44 cm²', '22 cm²', '154 cm²', '49 cm²'], correctAnswer: 2, explanation: 'A = πr² = 22/7 × 49 = 154 cm²', difficulty: 1, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: ['circumference', 'halved', null, 'forgot-pi'] } },
                { id: 'VCMMG289-004', question: 'A circle has diameter 20 cm. What is the radius?', options: ['10 cm', '20 cm', '40 cm', '5 cm'], correctAnswer: 0, explanation: 'Radius = diameter ÷ 2 = 20 ÷ 2 = 10 cm', difficulty: 1, knowledge: { questionTokens: ['circle-parts'], correctToken: 'circle-parts', incorrectTokens: [null, 'no-calculation', 'doubled', 'halved-twice'] } },
                { id: 'VCMMG289-005', question: 'Find circumference: radius = 6 cm (π = 3.14)', options: ['18.84 cm', '37.68 cm', '113.04 cm', '6.28 cm'], correctAnswer: 1, explanation: 'C = 2πr = 2 × 3.14 × 6 = 37.68 cm', difficulty: 2, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: ['forgot-2', null, 'area', 'forgot-radius'] } },
                { id: 'VCMMG289-006', question: 'Find area: radius = 10 cm (π = 3.14)', options: ['31.4 cm²', '62.8 cm²', '314 cm²', '100 cm²'], correctAnswer: 2, explanation: 'A = πr² = 3.14 × 100 = 314 cm²', difficulty: 1, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: ['circumference', 'circumference', null, 'forgot-pi'] } },
                { id: 'VCMMG289-007', question: 'A wheel has circumference 62.8 cm. Find the diameter. (π = 3.14)', options: ['10 cm', '20 cm', '5 cm', '100 cm'], correctAnswer: 1, explanation: 'd = C ÷ π = 62.8 ÷ 3.14 = 20 cm', difficulty: 2, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: ['halved', null, 'radius', 'squared'] } },
                { id: 'VCMMG289-008', question: 'Find area of semicircle: radius = 8 cm (π = 3.14)', options: ['100.48 cm²', '200.96 cm²', '50.24 cm²', '25.12 cm²'], correctAnswer: 0, explanation: 'A = ½πr² = ½ × 3.14 × 64 = 100.48 cm²', difficulty: 2, knowledge: { questionTokens: ['semicircle-quadrant'], correctToken: 'semicircle-quadrant', incorrectTokens: [null, 'full-circle', 'quarter', 'wrong-calculation'] } },
                { id: 'VCMMG289-009', question: 'A circular pool has diameter 12 m. Find the area. (π = 3.14)', options: ['113.04 m²', '452.16 m²', '37.68 m²', '144 m²'], correctAnswer: 0, explanation: 'r = 6. A = πr² = 3.14 × 36 = 113.04 m²', difficulty: 2, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: [null, 'used-diameter', 'circumference', 'forgot-pi'] } },
                { id: 'VCMMG289-010', question: 'Perimeter of semicircle: radius = 7 cm (π = 22/7)', options: ['22 cm', '36 cm', '11 cm', '14 cm'], correctAnswer: 1, explanation: 'P = πr + 2r = 22 + 14 = 36 cm', difficulty: 2, knowledge: { questionTokens: ['semicircle-quadrant'], correctToken: 'semicircle-quadrant', incorrectTokens: ['arc-only', null, 'halved-arc', 'diameter-only'] } },
                { id: 'VCMMG289-011', question: 'A circle has area 78.5 cm². Find the radius. (π = 3.14)', options: ['5 cm', '25 cm', '10 cm', '2.5 cm'], correctAnswer: 0, explanation: 'r² = 78.5 ÷ 3.14 = 25, r = 5 cm', difficulty: 3, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: [null, 'no-root', 'doubled', 'halved'] } },
                { id: 'VCMMG289-012', question: 'A wheel turns 10 complete rotations. If radius = 35 cm, total distance? (π = 22/7)', options: ['220 cm', '2200 cm', '22 cm', '22000 cm'], correctAnswer: 1, explanation: 'C = 2πr = 220 cm. Distance = 10 × 220 = 2200 cm', difficulty: 2, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: ['one-rotation', null, 'forgot-rotations', 'area'] } },
                { id: 'VCMMG289-013', question: 'Find area of quadrant: radius = 10 cm (π = 3.14)', options: ['78.5 cm²', '157 cm²', '314 cm²', '31.4 cm²'], correctAnswer: 0, explanation: 'A = ¼πr² = ¼ × 3.14 × 100 = 78.5 cm²', difficulty: 2, knowledge: { questionTokens: ['semicircle-quadrant'], correctToken: 'semicircle-quadrant', incorrectTokens: [null, 'half-circle', 'full-circle', 'arc-not-area'] } },
                { id: 'VCMMG289-014', question: 'A pizza has diameter 30 cm. Find area. (π = 3.14)', options: ['706.5 cm²', '94.2 cm²', '2826 cm²', '225 cm²'], correctAnswer: 0, explanation: 'r = 15. A = πr² = 3.14 × 225 = 706.5 cm²', difficulty: 2, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: [null, 'circumference', 'used-diameter', 'forgot-pi'] } },
                { id: 'VCMMG289-015', question: 'Circumference is 44 cm. Find radius. (π = 22/7)', options: ['7 cm', '14 cm', '22 cm', '2 cm'], correctAnswer: 0, explanation: 'r = C ÷ (2π) = 44 ÷ (2 × 22/7) = 44 × 7/44 = 7 cm', difficulty: 3, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: [null, 'diameter', 'wrong-calculation', 'halved-wrong'] } },
                { id: 'VCMMG289-016', question: 'Compare: Circle A (r=4cm) and Circle B (r=8cm). How many times larger is area B?', options: ['2 times', '4 times', '8 times', '16 times'], correctAnswer: 1, explanation: 'A_A = π(16), A_B = π(64). Ratio = 64/16 = 4 times', difficulty: 3, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: ['radius-ratio', null, 'circumference-ratio', 'diameter-ratio'] } },
                { id: 'VCMMG289-017', question: 'Perimeter of quadrant: radius = 14 cm (π = 22/7)', options: ['22 cm', '50 cm', '28 cm', '44 cm'], correctAnswer: 1, explanation: 'P = ¼(2πr) + 2r = 22 + 28 = 50 cm', difficulty: 3, knowledge: { questionTokens: ['semicircle-quadrant'], correctToken: 'semicircle-quadrant', incorrectTokens: ['arc-only', null, 'radii-only', 'semicircle'] } },
                { id: 'VCMMG289-018', question: 'A circular garden (r=5m) has a path 1m wide around it. Find area of path. (π=3.14)', options: ['34.54 m²', '78.5 m²', '113.04 m²', '28.26 m²'], correctAnswer: 0, explanation: 'Outer r = 6m. Path = π(36) - π(25) = 11π ≈ 34.54 m²', difficulty: 3, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: [null, 'inner-only', 'outer-only', 'circumference'] } },
                { id: 'VCMMG289-019', question: 'A CD has outer radius 6 cm and inner radius 1 cm. Find area. (π = 3.14)', options: ['109.9 cm²', '113.04 cm²', '3.14 cm²', '37.68 cm²'], correctAnswer: 0, explanation: 'A = π(36) - π(1) = 35π ≈ 109.9 cm²', difficulty: 3, knowledge: { questionTokens: ['circle-area'], correctToken: 'circle-area', incorrectTokens: [null, 'outer-only', 'inner-only', 'circumference'] } },
                { id: 'VCMMG289-020', question: 'If you double the radius, the circumference...', options: ['Stays same', 'Doubles', 'Quadruples', 'Halves'], correctAnswer: 1, explanation: 'C = 2πr. If r doubles, C doubles.', difficulty: 2, knowledge: { questionTokens: ['circumference-formula'], correctToken: 'circumference-formula', incorrectTokens: ['no-relationship', null, 'area-confusion', 'wrong-direction'] } },
              ],
            },
          ],
        },
        {
          id: 'geometric-reasoning',
          title: 'Geometric Reasoning',
          description: 'Properties of angles, triangles, quadrilaterals and circles',
          sections: [
            {
              id: 'VCMMG290',
              code: 'VCMMG290',
              title: 'Properties of Angles',
              description: 'Define congruence of plane shapes using transformations and use properties of congruent figures',
              content: `# Properties of Angles

Understanding angle relationships helps us solve geometry problems.

## Angle Types Review
- **Acute**: Less than 90°
- **Right**: Exactly 90°
- **Obtuse**: Between 90° and 180°
- **Straight**: Exactly 180°
- **Reflex**: Between 180° and 360°

## Angle Relationships

### Complementary Angles
Two angles that add up to 90°
- If one angle is 35°, its complement is 55°

### Supplementary Angles
Two angles that add up to 180°
- If one angle is 110°, its supplement is 70°

### Angles on a Straight Line
Angles on a straight line sum to 180°

### Angles at a Point
Angles around a point sum to 360°

### Vertically Opposite Angles
When two lines cross, opposite angles are equal.

## Parallel Lines and Transversals
When a line crosses two parallel lines:
- **Corresponding angles** are equal (F-shape)
- **Alternate angles** are equal (Z-shape)
- **Co-interior angles** sum to 180° (C-shape)`,
              keyPoints: [
                'Complementary angles sum to 90°',
                'Supplementary angles sum to 180°',
                'Vertically opposite angles are equal',
                'Corresponding and alternate angles are equal with parallel lines'
              ],
              knowledgeTokens: [
                { id: 'complementary-angles', name: 'Complementary Angles', description: 'Angles that sum to 90°' },
                { id: 'supplementary-angles', name: 'Supplementary Angles', description: 'Angles that sum to 180°' },
                { id: 'vertically-opposite', name: 'Vertically Opposite Angles', description: 'Equal angles when lines cross' },
                { id: 'parallel-line-angles', name: 'Parallel Line Angles', description: 'Corresponding and alternate angle properties', prerequisites: ['supplementary-angles'] },
              ],
              examples: [
                { problem: 'Find the complement of 62°', solution: '28°', explanation: '90° - 62° = 28°' },
                { problem: 'Two angles on a straight line: one is 125°. Find the other.', solution: '55°', explanation: '180° - 125° = 55°' }
              ],
              questions: [
                { id: 'VCMMG290-001', question: 'What is the complement of 45°?', options: ['45°', '135°', '55°', '90°'], correctAnswer: 0, explanation: '90° - 45° = 45°', difficulty: 1, knowledge: { questionTokens: ['complementary-angles'], correctToken: 'complementary-angles', incorrectTokens: [null, 'used-180', 'calculation-error', 'no-calculation'] } },
                { id: 'VCMMG290-002', question: 'What is the supplement of 60°?', options: ['30°', '120°', '60°', '300°'], correctAnswer: 1, explanation: '180° - 60° = 120°', difficulty: 1, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: ['used-90', null, 'no-calculation', 'used-360'] } },
                { id: 'VCMMG290-003', question: 'Two lines cross. One angle is 75°. What is the vertically opposite angle?', options: ['75°', '105°', '15°', '285°'], correctAnswer: 0, explanation: 'Vertically opposite angles are equal', difficulty: 1, knowledge: { questionTokens: ['vertically-opposite'], correctToken: 'vertically-opposite', incorrectTokens: [null, 'supplement-confusion', 'complement-confusion', 'reflex-confusion'] } },
                { id: 'VCMMG290-004', question: 'Angles on a straight line are x° and 110°. Find x.', options: ['70°', '110°', '250°', '20°'], correctAnswer: 0, explanation: 'x + 110 = 180, so x = 70°', difficulty: 1, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: [null, 'no-calculation', 'used-360', 'used-90'] } },
                { id: 'VCMMG290-005', question: 'Three angles at a point are 120°, 150°, and x°. Find x.', options: ['90°', '270°', '180°', '30°'], correctAnswer: 0, explanation: '120 + 150 + x = 360, so x = 90°', difficulty: 2, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: [null, 'sum-error', 'used-180', 'subtraction-error'] } },
                { id: 'VCMMG290-006', question: 'Find the complement of 78°', options: ['102°', '12°', '282°', '78°'], correctAnswer: 1, explanation: '90° - 78° = 12°', difficulty: 1, knowledge: { questionTokens: ['complementary-angles'], correctToken: 'complementary-angles', incorrectTokens: ['used-180', null, 'used-360', 'no-calculation'] } },
                { id: 'VCMMG290-007', question: 'Corresponding angles with parallel lines are always...', options: ['Supplementary', 'Equal', 'Complementary', 'Reflex'], correctAnswer: 1, explanation: 'Corresponding angles are equal when lines are parallel', difficulty: 1, knowledge: { questionTokens: ['parallel-line-angles'], correctToken: 'parallel-line-angles', incorrectTokens: ['co-interior-confusion', null, 'definition-error', 'definition-error'] } },
                { id: 'VCMMG290-008', question: 'Two vertically opposite angles are (2x)° and 80°. Find x.', options: ['40', '80', '160', '20'], correctAnswer: 0, explanation: '2x = 80, so x = 40', difficulty: 2, knowledge: { questionTokens: ['vertically-opposite'], correctToken: 'vertically-opposite', incorrectTokens: [null, 'no-division', 'added-instead', 'halved-wrong'] } },
                { id: 'VCMMG290-009', question: 'Co-interior angles with parallel lines sum to...', options: ['90°', '180°', '360°', 'They are equal'], correctAnswer: 1, explanation: 'Co-interior (same-side interior) angles are supplementary', difficulty: 2, knowledge: { questionTokens: ['parallel-line-angles'], correctToken: 'parallel-line-angles', incorrectTokens: ['complement-confusion', null, 'point-confusion', 'alternate-confusion'] } },
                { id: 'VCMMG290-010', question: 'Alternate angles with parallel lines are...', options: ['Supplementary', 'Complementary', 'Equal', 'Right angles'], correctAnswer: 2, explanation: 'Alternate angles are equal when lines are parallel', difficulty: 1, knowledge: { questionTokens: ['parallel-line-angles'], correctToken: 'parallel-line-angles', incorrectTokens: ['co-interior-confusion', 'definition-error', null, 'definition-error'] } },
                { id: 'VCMMG290-011', question: 'An angle and its supplement differ by 40°. Find the smaller angle.', options: ['70°', '110°', '80°', '50°'], correctAnswer: 0, explanation: 'Let angles be x and x+40. Then x + x + 40 = 180, so x = 70°', difficulty: 3, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: [null, 'found-larger', 'algebra-error', 'subtraction-error'] } },
                { id: 'VCMMG290-012', question: 'Find the supplement of the complement of 30°', options: ['120°', '60°', '150°', '30°'], correctAnswer: 0, explanation: 'Complement of 30° = 60°. Supplement of 60° = 120°', difficulty: 3, knowledge: { questionTokens: ['complementary-angles', 'supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: [null, 'only-complement', 'only-supplement', 'no-calculation'] } },
                { id: 'VCMMG290-013', question: 'Two angles on a straight line are (3x)° and (2x+30)°. Find x.', options: ['30', '50', '25', '60'], correctAnswer: 0, explanation: '3x + 2x + 30 = 180, so 5x = 150, x = 30', difficulty: 2, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: [null, 'algebra-error', 'division-error', 'sum-error'] } },
                { id: 'VCMMG290-014', question: 'A transversal crosses parallel lines. If one corresponding angle is 115°, what is its co-interior angle?', options: ['115°', '65°', '245°', '25°'], correctAnswer: 1, explanation: 'Co-interior angles sum to 180°. 180° - 115° = 65°', difficulty: 3, knowledge: { questionTokens: ['parallel-line-angles'], correctToken: 'parallel-line-angles', incorrectTokens: ['equal-confusion', null, 'reflex-error', 'complement-error'] } },
                { id: 'VCMMG290-015', question: 'Four angles at a point are equal. What is each angle?', options: ['45°', '60°', '90°', '180°'], correctAnswer: 2, explanation: '360° ÷ 4 = 90°', difficulty: 1, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: ['wrong-division', 'wrong-total', null, 'used-180'] } },
                { id: 'VCMMG290-016', question: 'An angle is twice its complement. Find the angle.', options: ['30°', '60°', '45°', '120°'], correctAnswer: 1, explanation: 'Let angle = x. Complement = 90-x. x = 2(90-x), so x = 60°', difficulty: 3, knowledge: { questionTokens: ['complementary-angles'], correctToken: 'complementary-angles', incorrectTokens: ['found-complement', null, 'equal-instead', 'supplement-used'] } },
                { id: 'VCMMG290-017', question: 'What is the reflex angle when the acute angle is 50°?', options: ['130°', '310°', '50°', '230°'], correctAnswer: 1, explanation: 'Reflex angle = 360° - 50° = 310°', difficulty: 2, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: ['supplement-confusion', null, 'no-calculation', 'wrong-subtraction'] } },
                { id: 'VCMMG290-018', question: 'Adjacent angles formed by two intersecting lines are (x+20)° and (2x-10)°. Find x.', options: ['50', '70', '60', '40'], correctAnswer: 1, explanation: 'Adjacent angles = 180°. x+20 + 2x-10 = 180, so x = 70', difficulty: 3, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: ['algebra-error', null, 'wrong-setup', 'calculation-error'] } },
                { id: 'VCMMG290-019', question: 'If two parallel lines are cut by a transversal and one angle is 72°, how many other angles also measure 72°?', options: ['1', '2', '3', '4'], correctAnswer: 2, explanation: 'The angle, its vertically opposite, corresponding, and alternate = 4 angles total, so 3 others', difficulty: 2, knowledge: { questionTokens: ['parallel-line-angles', 'vertically-opposite'], correctToken: 'parallel-line-angles', incorrectTokens: ['only-counted-one', 'missed-some', null, 'counted-all-eight'] } },
                { id: 'VCMMG290-020', question: 'The ratio of two supplementary angles is 2:7. Find the smaller angle.', options: ['20°', '40°', '140°', '70°'], correctAnswer: 1, explanation: '2x + 7x = 180, so 9x = 180, x = 20. Smaller = 2×20 = 40°', difficulty: 3, knowledge: { questionTokens: ['supplementary-angles'], correctToken: 'supplementary-angles', incorrectTokens: ['found-x-only', null, 'found-larger', 'ratio-error'] } },
              ],
            },
            {
              id: 'VCMMG291',
              code: 'VCMMG291',
              title: 'Congruence and Similarity',
              description: 'Define congruence of plane shapes using transformations and establish properties of congruent and similar triangles',
              content: `# Congruence and Similarity

## Congruent Shapes
Shapes are **congruent** if they are exactly the same size and shape.
- All corresponding sides are equal
- All corresponding angles are equal
- One can be transformed to the other by translation, rotation, or reflection

## Congruent Triangles
Two triangles are congruent if they satisfy one of these tests:

### SSS (Side-Side-Side)
All three pairs of corresponding sides are equal.

### SAS (Side-Angle-Side)
Two pairs of sides are equal AND the included angle is equal.

### AAS (Angle-Angle-Side)
Two pairs of angles are equal AND a corresponding side is equal.

### RHS (Right-Hypotenuse-Side)
Both triangles have a right angle, equal hypotenuses, and one other equal side.

## Similar Shapes
Shapes are **similar** if they have the same shape but different sizes.
- All corresponding angles are equal
- All corresponding sides are in the same ratio (scale factor)

## Scale Factor
Scale factor = new length ÷ original length

If scale factor is 2, the similar shape is twice as large.
If scale factor is 0.5, the similar shape is half the size.

## Finding Missing Sides
In similar triangles: corresponding sides are proportional.
$$\\frac{a}{A} = \\frac{b}{B} = \\frac{c}{C}$$`,
              keyPoints: [
                'Congruent = same size and shape',
                'Similar = same shape, different size',
                'Congruence tests: SSS, SAS, AAS, RHS',
                'Scale factor relates corresponding sides in similar figures',
              ],
              knowledgeTokens: [
                { id: 'congruent-shapes', name: 'Congruent Shapes', description: 'Understanding congruence' },
                { id: 'congruence-tests', name: 'Congruence Tests', description: 'SSS, SAS, AAS, RHS tests', prerequisites: ['congruent-shapes'] },
                { id: 'similar-shapes', name: 'Similar Shapes', description: 'Understanding similarity' },
                { id: 'scale-factor', name: 'Scale Factor', description: 'Calculating and using scale factors', prerequisites: ['similar-shapes'] },
                { id: 'finding-missing-sides', name: 'Finding Missing Sides', description: 'Using proportion to find unknown lengths', prerequisites: ['scale-factor'] },
              ],
              examples: [
                { problem: 'Triangle ABC has sides 3, 4, 5. Triangle DEF has sides 6, 8, 10. Are they similar?', solution: 'Yes, scale factor 2', explanation: '6÷3 = 8÷4 = 10÷5 = 2. All ratios equal, so similar.' },
                { problem: 'Which congruence test: Two triangles have equal angles of 40°, 60°, 80° and one pair of equal sides.', solution: 'AAS', explanation: 'Two angles and a corresponding side = AAS' },
              ],
              questions: [
                { id: 'VCMMG291-001', question: 'What does congruent mean?', options: ['Same shape, different size', 'Same size and shape', 'Different shape and size', 'Mirror image only'], correctAnswer: 1, explanation: 'Congruent means exactly the same size and shape', difficulty: 1, knowledge: { questionTokens: ['congruent-shapes'], correctToken: 'congruent-shapes', incorrectTokens: ['similar-confusion', null, 'neither', 'reflection-only'] } },
                { id: 'VCMMG291-002', question: 'What does similar mean in geometry?', options: ['Exactly the same', 'Same shape, different size', 'Different shapes', 'Parallel'], correctAnswer: 1, explanation: 'Similar means same shape but possibly different size', difficulty: 1, knowledge: { questionTokens: ['similar-shapes'], correctToken: 'similar-shapes', incorrectTokens: ['congruent-confusion', null, 'wrong', 'wrong'] } },
                { id: 'VCMMG291-003', question: 'Which is a congruence test?', options: ['AAA', 'SSS', 'SS', 'AA'], correctAnswer: 1, explanation: 'SSS (Side-Side-Side) is a valid congruence test', difficulty: 1, knowledge: { questionTokens: ['congruence-tests'], correctToken: 'congruence-tests', incorrectTokens: ['similarity-test', null, 'incomplete', 'similarity-test'] } },
                { id: 'VCMMG291-004', question: 'Triangle A has sides 5, 7, 9. Triangle B has sides 10, 14, 18. Scale factor?', options: ['0.5', '2', '3', '5'], correctAnswer: 1, explanation: '10÷5 = 14÷7 = 18÷9 = 2', difficulty: 2, knowledge: { questionTokens: ['scale-factor'], correctToken: 'scale-factor', incorrectTokens: ['inverted', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMMG291-005', question: 'Two triangles have all angles equal. They must be...', options: ['Congruent', 'Similar', 'Neither', 'Identical'], correctAnswer: 1, explanation: 'AAA proves similarity, not congruence', difficulty: 2, knowledge: { questionTokens: ['similar-shapes'], correctToken: 'similar-shapes', incorrectTokens: ['congruent-error', null, 'wrong', 'same-as-congruent'] } },
                { id: 'VCMMG291-006', question: 'SAS stands for...', options: ['Side-Angle-Angle', 'Side-Angle-Side', 'Same-And-Similar', 'Side-All-Side'], correctAnswer: 1, explanation: 'SAS = Side-Angle-Side (the angle is between the two sides)', difficulty: 1, knowledge: { questionTokens: ['congruence-tests'], correctToken: 'congruence-tests', incorrectTokens: ['wrong-expansion', null, 'made-up', 'wrong-expansion'] } },
                { id: 'VCMMG291-007', question: 'Similar triangles: small has sides 3, 4, 5. Large has sides 9, 12, ?', options: ['13', '15', '17', '10'], correctAnswer: 1, explanation: 'Scale factor = 9÷3 = 3. Missing side = 5×3 = 15', difficulty: 2, knowledge: { questionTokens: ['finding-missing-sides'], correctToken: 'finding-missing-sides', incorrectTokens: ['wrong-calculation', null, 'wrong-calculation', 'wrong-scale'] } },
                { id: 'VCMMG291-008', question: 'Which is NOT a valid congruence test?', options: ['SSS', 'SAS', 'AAA', 'AAS'], correctAnswer: 2, explanation: 'AAA only proves similarity, not congruence', difficulty: 2, knowledge: { questionTokens: ['congruence-tests'], correctToken: 'congruence-tests', incorrectTokens: ['valid', 'valid', null, 'valid'] } },
                { id: 'VCMMG291-009', question: 'A photo is enlarged with scale factor 3. Original width 4cm. New width?', options: ['7 cm', '12 cm', '1.33 cm', '4 cm'], correctAnswer: 1, explanation: 'New = original × scale factor = 4 × 3 = 12 cm', difficulty: 1, knowledge: { questionTokens: ['scale-factor'], correctToken: 'scale-factor', incorrectTokens: ['added', null, 'divided', 'no-change'] } },
                { id: 'VCMMG291-010', question: 'Two right triangles have equal hypotenuses and one equal leg. Test?', options: ['SSS', 'SAS', 'RHS', 'AAS'], correctAnswer: 2, explanation: 'Right angle + Hypotenuse + Side = RHS', difficulty: 2, knowledge: { questionTokens: ['congruence-tests'], correctToken: 'congruence-tests', incorrectTokens: ['wrong-test', 'wrong-test', null, 'wrong-test'] } },
                { id: 'VCMMG291-011', question: 'Scale factor is 0.5. This means the similar shape is...', options: ['Half the size', 'Double the size', 'Same size', 'Congruent'], correctAnswer: 0, explanation: 'Scale factor < 1 means reduction. 0.5 = half', difficulty: 2, knowledge: { questionTokens: ['scale-factor'], correctToken: 'scale-factor', incorrectTokens: [null, 'wrong-direction', 'no-change', 'congruent-confusion'] } },
                { id: 'VCMMG291-012', question: 'All squares are...', options: ['Congruent', 'Similar', 'Neither', 'Only if same size'], correctAnswer: 1, explanation: 'All squares have equal angles (90°), so they are all similar', difficulty: 2, knowledge: { questionTokens: ['similar-shapes'], correctToken: 'similar-shapes', incorrectTokens: ['congruent-error', null, 'wrong', 'incomplete'] } },
                { id: 'VCMMG291-013', question: 'Two triangles: sides 4,5,6 and 8,10,12. Are they congruent?', options: ['Yes', 'No, but similar', 'No, not related', 'Cannot tell'], correctAnswer: 1, explanation: 'Not same size (not congruent), but scale factor 2 (similar)', difficulty: 2, knowledge: { questionTokens: ['congruent-shapes', 'similar-shapes'], correctToken: 'similar-shapes', incorrectTokens: ['congruent-error', null, 'missed-relationship', 'gave-up'] } },
                { id: 'VCMMG291-014', question: 'In similar triangles with scale factor 4, if a side is 3cm, corresponding side is...', options: ['7 cm', '12 cm', '0.75 cm', '3 cm'], correctAnswer: 1, explanation: 'Corresponding side = 3 × 4 = 12 cm', difficulty: 1, knowledge: { questionTokens: ['finding-missing-sides'], correctToken: 'finding-missing-sides', incorrectTokens: ['added', null, 'divided', 'no-change'] } },
                { id: 'VCMMG291-015', question: 'AAS test requires...', options: ['All angles equal', 'Two angles and included side', 'Two angles and any side', 'Three sides'], correctAnswer: 2, explanation: 'AAS = two Angles and Any corresponding Side', difficulty: 2, knowledge: { questionTokens: ['congruence-tests'], correctToken: 'congruence-tests', incorrectTokens: ['aaa', 'asa-confusion', null, 'sss'] } },
                { id: 'VCMMG291-016', question: 'Scale factor from shape A to B is 3. Scale factor from B to A is...', options: ['3', '1/3', '-3', '6'], correctAnswer: 1, explanation: 'Reverse scale factor is the reciprocal: 1/3', difficulty: 2, knowledge: { questionTokens: ['scale-factor'], correctToken: 'scale-factor', incorrectTokens: ['same', null, 'negative', 'doubled'] } },
                { id: 'VCMMG291-017', question: 'Two congruent triangles are placed together. Are they still congruent to the original?', options: ['Yes', 'No', 'Only if reflected', 'Only sometimes'], correctAnswer: 0, explanation: 'Congruent triangles remain congruent regardless of position', difficulty: 2, knowledge: { questionTokens: ['congruent-shapes'], correctToken: 'congruent-shapes', incorrectTokens: [null, 'position-error', 'transformation-confusion', 'uncertain'] } },
                { id: 'VCMMG291-018', question: 'Similar triangles: one has sides 6, 8, 10. Other has sides 9, 12, x. Find x.', options: ['14', '15', '16', '18'], correctAnswer: 1, explanation: 'Scale factor = 9÷6 = 1.5. x = 10 × 1.5 = 15', difficulty: 2, knowledge: { questionTokens: ['finding-missing-sides'], correctToken: 'finding-missing-sides', incorrectTokens: ['wrong-calculation', null, 'wrong-calculation', 'wrong-scale'] } },
                { id: 'VCMMG291-019', question: 'A map has scale 1:50000. A distance of 3cm on map represents...', options: ['150 m', '1500 m', '15000 m', '150000 m'], correctAnswer: 1, explanation: '3 × 50000 = 150000 cm = 1500 m', difficulty: 3, knowledge: { questionTokens: ['scale-factor'], correctToken: 'scale-factor', incorrectTokens: ['wrong-conversion', null, 'wrong-calculation', 'wrong-conversion'] } },
                { id: 'VCMMG291-020', question: 'Which transformation does NOT preserve congruence?', options: ['Rotation', 'Reflection', 'Enlargement', 'Translation'], correctAnswer: 2, explanation: 'Enlargement changes size, so shapes are no longer congruent', difficulty: 2, knowledge: { questionTokens: ['congruent-shapes'], correctToken: 'congruent-shapes', incorrectTokens: ['rotation-error', 'reflection-error', null, 'translation-error'] } },
              ],
            },
            {
              id: 'VCMMG292',
              code: 'VCMMG292',
              title: 'Transformations',
              description: 'Define and describe translations, reflections, rotations and dilations on the Cartesian plane',
              content: `# Transformations

Transformations change the position, size, or orientation of shapes.

## Translation (Slide)
Move every point the same distance in the same direction.
- Described by a vector: (x, y) means move x units right and y units up
- Negative values: left (for x) or down (for y)
- Shape stays the same size and orientation

**Example:** Translate by (3, -2) means move 3 right and 2 down.

## Reflection (Flip)
Mirror image across a line (the axis of reflection).
- Common axes: x-axis, y-axis, or lines like y = x
- Reflecting in y-axis: (x, y) → (-x, y)
- Reflecting in x-axis: (x, y) → (x, -y)
- Shape stays the same size, orientation is reversed

## Rotation (Turn)
Turn around a fixed point (centre of rotation).
- Described by: centre, angle, direction (clockwise/anticlockwise)
- 90° anticlockwise: (x, y) → (-y, x)
- 180°: (x, y) → (-x, -y)
- Shape stays the same size

## Dilation (Enlargement)
Make shape larger or smaller from a centre point.
- Scale factor > 1: enlargement
- Scale factor between 0 and 1: reduction
- Scale factor of 1: no change
- Shape changes size but angles stay same

## Isometry
Transformations that preserve size and shape:
- Translation, Reflection, Rotation are isometries
- Dilation is NOT an isometry (changes size)`,
              keyPoints: [
                'Translation: slide by a vector',
                'Reflection: flip across a line',
                'Rotation: turn around a point',
                'Dilation: enlarge or reduce from a centre',
                'Isometries preserve size and shape',
              ],
              knowledgeTokens: [
                { id: 'translation', name: 'Translation', description: 'Moving shapes by a vector' },
                { id: 'reflection', name: 'Reflection', description: 'Flipping across an axis' },
                { id: 'rotation', name: 'Rotation', description: 'Turning around a centre point' },
                { id: 'dilation', name: 'Dilation', description: 'Enlarging or reducing shapes' },
                { id: 'transformation-rules', name: 'Transformation Rules', description: 'Coordinate rules for transformations', prerequisites: ['translation', 'reflection', 'rotation'] },
              ],
              examples: [
                { problem: 'Point (2, 5) is translated by vector (3, -1). New coordinates?', solution: '(5, 4)', explanation: '(2+3, 5-1) = (5, 4)' },
                { problem: 'Point (4, -2) is reflected in the y-axis. New coordinates?', solution: '(-4, -2)', explanation: 'Reflecting in y-axis changes sign of x: (4, -2) → (-4, -2)' },
              ],
              questions: [
                { id: 'VCMMG292-001', question: 'Translate point (3, 4) by vector (2, 5). New coordinates?', options: ['(5, 9)', '(1, -1)', '(6, 20)', '(5, 4)'], correctAnswer: 0, explanation: '(3+2, 4+5) = (5, 9)', difficulty: 1, knowledge: { questionTokens: ['translation'], correctToken: 'translation', incorrectTokens: [null, 'subtracted', 'multiplied', 'wrong-calculation'] } },
                { id: 'VCMMG292-002', question: 'Reflect point (5, 3) in the y-axis. New coordinates?', options: ['(5, -3)', '(-5, 3)', '(-5, -3)', '(3, 5)'], correctAnswer: 1, explanation: 'Reflecting in y-axis: (x, y) → (-x, y)', difficulty: 1, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: ['x-axis', null, 'both-axes', 'swapped'] } },
                { id: 'VCMMG292-003', question: 'Reflect point (2, -4) in the x-axis. New coordinates?', options: ['(-2, -4)', '(2, 4)', '(-2, 4)', '(4, 2)'], correctAnswer: 1, explanation: 'Reflecting in x-axis: (x, y) → (x, -y)', difficulty: 1, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: ['y-axis', null, 'both-axes', 'swapped'] } },
                { id: 'VCMMG292-004', question: 'Which transformation is a slide?', options: ['Rotation', 'Reflection', 'Translation', 'Dilation'], correctAnswer: 2, explanation: 'Translation is also called a slide', difficulty: 1, knowledge: { questionTokens: ['translation'], correctToken: 'translation', incorrectTokens: ['wrong-name', 'wrong-name', null, 'wrong-name'] } },
                { id: 'VCMMG292-005', question: 'Rotate (1, 0) by 90° anticlockwise about origin. New coordinates?', options: ['(0, 1)', '(0, -1)', '(-1, 0)', '(1, 0)'], correctAnswer: 0, explanation: '90° anticlockwise: (x, y) → (-y, x). (1, 0) → (0, 1)', difficulty: 2, knowledge: { questionTokens: ['rotation'], correctToken: 'rotation', incorrectTokens: [null, 'clockwise', '180-degrees', 'no-change'] } },
                { id: 'VCMMG292-006', question: 'Translate (−2, 3) by vector (5, −4). New coordinates?', options: ['(3, -1)', '(-7, 7)', '(3, 7)', '(-7, -1)'], correctAnswer: 0, explanation: '(-2+5, 3-4) = (3, -1)', difficulty: 1, knowledge: { questionTokens: ['translation'], correctToken: 'translation', incorrectTokens: [null, 'subtracted-both', 'wrong-y', 'wrong-both'] } },
                { id: 'VCMMG292-007', question: 'Which transformation changes the size of a shape?', options: ['Translation', 'Reflection', 'Rotation', 'Dilation'], correctAnswer: 3, explanation: 'Dilation (enlargement) changes size', difficulty: 1, knowledge: { questionTokens: ['dilation'], correctToken: 'dilation', incorrectTokens: ['isometry', 'isometry', 'isometry', null] } },
                { id: 'VCMMG292-008', question: 'Rotate (0, 3) by 180° about origin. New coordinates?', options: ['(0, -3)', '(3, 0)', '(-3, 0)', '(0, 3)'], correctAnswer: 0, explanation: '180°: (x, y) → (-x, -y). (0, 3) → (0, -3)', difficulty: 2, knowledge: { questionTokens: ['rotation'], correctToken: 'rotation', incorrectTokens: [null, 'swapped', 'wrong', 'no-change'] } },
                { id: 'VCMMG292-009', question: 'Point (2, 6) is dilated with scale factor 3 from origin. New coordinates?', options: ['(6, 18)', '(5, 9)', '(6, 9)', '(2/3, 2)'], correctAnswer: 0, explanation: 'Multiply both coordinates by 3: (2×3, 6×3) = (6, 18)', difficulty: 2, knowledge: { questionTokens: ['dilation'], correctToken: 'dilation', incorrectTokens: [null, 'added', 'mixed-up', 'divided'] } },
                { id: 'VCMMG292-010', question: 'Reflect (−3, 2) in the y-axis. New coordinates?', options: ['(-3, -2)', '(3, 2)', '(3, -2)', '(2, -3)'], correctAnswer: 1, explanation: 'Reflecting in y-axis changes sign of x: (-3, 2) → (3, 2)', difficulty: 1, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: ['x-axis', null, 'both', 'swapped'] } },
                { id: 'VCMMG292-011', question: 'Which are isometries (preserve size)?', options: ['Translation only', 'Dilation only', 'Translation, Reflection, Rotation', 'All transformations'], correctAnswer: 2, explanation: 'Translation, Reflection, and Rotation preserve size. Dilation does not.', difficulty: 2, knowledge: { questionTokens: ['transformation-rules'], correctToken: 'transformation-rules', incorrectTokens: ['incomplete', 'wrong', null, 'too-broad'] } },
                { id: 'VCMMG292-012', question: 'Rotate (4, 0) by 90° clockwise about origin. New coordinates?', options: ['(0, 4)', '(0, -4)', '(-4, 0)', '(4, 0)'], correctAnswer: 1, explanation: '90° clockwise: (x, y) → (y, -x). (4, 0) → (0, -4)', difficulty: 2, knowledge: { questionTokens: ['rotation'], correctToken: 'rotation', incorrectTokens: ['anticlockwise', null, '180-degrees', 'no-change'] } },
                { id: 'VCMMG292-013', question: 'A shape is translated by (a, b) then by (c, d). Combined translation?', options: ['(a+c, b+d)', '(ac, bd)', '(a-c, b-d)', '(c, d)'], correctAnswer: 0, explanation: 'Translations add: total = (a+c, b+d)', difficulty: 2, knowledge: { questionTokens: ['translation'], correctToken: 'translation', incorrectTokens: [null, 'multiplied', 'subtracted', 'second-only'] } },
                { id: 'VCMMG292-014', question: 'Dilate (8, 4) with scale factor 0.5 from origin. New coordinates?', options: ['(4, 2)', '(16, 8)', '(8.5, 4.5)', '(4, 8)'], correctAnswer: 0, explanation: 'Multiply by 0.5: (8×0.5, 4×0.5) = (4, 2)', difficulty: 2, knowledge: { questionTokens: ['dilation'], correctToken: 'dilation', incorrectTokens: [null, 'wrong-factor', 'added', 'swapped'] } },
                { id: 'VCMMG292-015', question: 'Reflect (1, 1) in line y = x. New coordinates?', options: ['(-1, -1)', '(1, 1)', '(-1, 1)', '(1, 1)'], correctAnswer: 1, explanation: 'Reflecting in y = x swaps x and y. (1, 1) → (1, 1) - same point!', difficulty: 3, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: ['negated', null, 'wrong', 'different'] } },
                { id: 'VCMMG292-016', question: 'Rotate (−2, 3) by 180° about origin. New coordinates?', options: ['(2, -3)', '(-2, -3)', '(3, -2)', '(-3, 2)'], correctAnswer: 0, explanation: '180°: (x, y) → (-x, -y). (-2, 3) → (2, -3)', difficulty: 2, knowledge: { questionTokens: ['rotation'], correctToken: 'rotation', incorrectTokens: [null, 'only-y', 'swapped', 'swapped-wrong'] } },
                { id: 'VCMMG292-017', question: 'Reflect (5, −2) in the line y = 0 (x-axis). New coordinates?', options: ['(-5, -2)', '(5, 2)', '(-5, 2)', '(2, -5)'], correctAnswer: 1, explanation: 'y = 0 is the x-axis. Reflect: (5, -2) → (5, 2)', difficulty: 2, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: ['y-axis', null, 'both', 'swapped'] } },
                { id: 'VCMMG292-018', question: 'A triangle is rotated 360° about a point. The result is...', options: ['A different triangle', 'Same position', 'Reflected triangle', 'Larger triangle'], correctAnswer: 1, explanation: '360° rotation returns shape to original position', difficulty: 1, knowledge: { questionTokens: ['rotation'], correctToken: 'rotation', incorrectTokens: ['changed', null, 'reflected', 'enlarged'] } },
                { id: 'VCMMG292-019', question: 'Point (3, 4) undergoes dilation with centre origin and scale factor 2. Distance from origin?', options: ['5', '10', '7', '14'], correctAnswer: 1, explanation: 'Original distance = √(9+16) = 5. New distance = 5 × 2 = 10', difficulty: 3, knowledge: { questionTokens: ['dilation'], correctToken: 'dilation', incorrectTokens: ['original', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMMG292-020', question: 'Reflect (2, 5) in line y = x. New coordinates?', options: ['(5, 2)', '(-2, -5)', '(2, -5)', '(-5, -2)'], correctAnswer: 0, explanation: 'Reflecting in y = x swaps x and y: (2, 5) → (5, 2)', difficulty: 2, knowledge: { questionTokens: ['reflection'], correctToken: 'reflection', incorrectTokens: [null, 'negated', 'wrong-axis', 'both-wrong'] } },
              ],
            },
            {
              id: 'VCMMG293',
              code: 'VCMMG293',
              title: 'Time Zones and Duration',
              description: 'Solve problems involving duration, including using 12- and 24-hour time within a single time zone',
              content: `# Time Zones and Duration

Understanding time involves calculations with hours, minutes, and seconds, as well as different time zones.

## 12-Hour and 24-Hour Time

### 12-Hour Time
- Uses AM (midnight to noon) and PM (noon to midnight)
- Examples: 9:30 AM, 2:15 PM

### 24-Hour Time
- Uses 00:00 to 23:59
- No AM/PM needed
- Examples: 09:30 (9:30 AM), 14:15 (2:15 PM)

### Converting Between Formats
- AM times: Same number (but add leading 0 if needed)
- PM times: Add 12 to the hour
- 12:00 PM = 12:00, 12:00 AM = 00:00
- 2:30 PM = 14:30, 8:45 PM = 20:45

## Calculating Duration

### Finding Time Elapsed
Method 1: Count on
- From 9:45 to 11:20
- 9:45 → 10:00 (15 min) → 11:00 (60 min) → 11:20 (20 min)
- Total: 1 hour 35 minutes

Method 2: Subtract (with borrowing)
- 11:20 - 9:45 (borrow 60 minutes)
- 10:80 - 9:45 = 1:35

## Time Zones

### Australian Time Zones
- AEST (Australian Eastern Standard Time): NSW, VIC, QLD, TAS, ACT
- ACST (Australian Central Standard Time): SA, NT - 30 min behind AEST
- AWST (Australian Western Standard Time): WA - 2 hours behind AEST

### Daylight Saving
- Clocks go forward 1 hour in summer
- AEDT, ACDT are daylight saving versions
- QLD, WA, NT don't observe daylight saving

### International Time Zones
- Based on UTC (Coordinated Universal Time)
- Australia is UTC+8 to UTC+11
- Moving East: time increases
- Moving West: time decreases`,
              keyPoints: [
                '24-hour time: add 12 to PM hours',
                'Calculate duration by counting on or subtracting',
                'Australia has 3 main time zones',
                'Moving East gains time, moving West loses time',
                'Daylight saving adds 1 hour in summer',
              ],
              knowledgeTokens: [
                { id: 'time-formats', name: 'Time Formats', description: 'Converting between 12-hour and 24-hour time' },
                { id: 'calculating-duration', name: 'Calculating Duration', description: 'Finding time elapsed between two times' },
                { id: 'australian-time-zones', name: 'Australian Time Zones', description: 'AEST, ACST, AWST and differences' },
                { id: 'international-time-zones', name: 'International Time Zones', description: 'UTC and time zone calculations', prerequisites: ['australian-time-zones'] },
                { id: 'daylight-saving', name: 'Daylight Saving', description: 'Understanding DST adjustments', prerequisites: ['australian-time-zones'] },
              ],
              examples: [
                { problem: 'Convert 3:45 PM to 24-hour time', solution: '15:45', explanation: '3 + 12 = 15, so 3:45 PM = 15:45' },
                { problem: 'It is 2:00 PM in Sydney (AEST). What time is it in Perth (AWST)?', solution: '12:00 PM', explanation: 'Perth is 2 hours behind Sydney: 2:00 PM - 2 hours = 12:00 PM' },
              ],
              questions: [
                { id: 'VCMMG293-001', question: 'Convert 2:30 PM to 24-hour time', options: ['2:30', '14:30', '12:30', '24:30'], correctAnswer: 1, explanation: '2 + 12 = 14, so 2:30 PM = 14:30', difficulty: 1, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['no-conversion', null, 'wrong-addition', 'impossible-time'] } },
                { id: 'VCMMG293-002', question: 'Convert 17:45 to 12-hour time', options: ['7:45 AM', '7:45 PM', '5:45 PM', '5:45 AM'], correctAnswer: 2, explanation: '17 - 12 = 5, so 17:45 = 5:45 PM', difficulty: 1, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['wrong-calculation', 'wrong-subtraction', null, 'wrong-period'] } },
                { id: 'VCMMG293-003', question: 'What is 12:00 AM in 24-hour time?', options: ['12:00', '24:00', '00:00', '0:00 AM'], correctAnswer: 2, explanation: '12:00 AM (midnight) = 00:00 in 24-hour time', difficulty: 2, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['noon-confusion', 'impossible-time', null, 'wrong-format'] } },
                { id: 'VCMMG293-004', question: 'How long from 9:30 AM to 2:15 PM?', options: ['4 hours 45 minutes', '5 hours 15 minutes', '4 hours 15 minutes', '5 hours 45 minutes'], correctAnswer: 0, explanation: '9:30 → 2:30 = 5 hours. 2:30 → 2:15 = -15 min. Total = 4h 45min', difficulty: 2, knowledge: { questionTokens: ['calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: [null, 'wrong-calculation', 'subtracted-wrong', 'added-wrong'] } },
                { id: 'VCMMG293-005', question: 'Convert 8:20 AM to 24-hour time', options: ['8:20', '08:20', '20:20', '20:08'], correctAnswer: 1, explanation: 'AM times stay the same but need leading zero: 08:20', difficulty: 1, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['no-leading-zero', null, 'added-12', 'reversed'] } },
                { id: 'VCMMG293-006', question: 'A movie starts at 19:30 and goes for 2 hours 15 minutes. When does it end?', options: ['21:45', '21:15', '22:45', '17:15'], correctAnswer: 0, explanation: '19:30 + 2:15 = 21:45', difficulty: 2, knowledge: { questionTokens: ['calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: [null, 'forgot-minutes', 'wrong-addition', 'subtracted'] } },
                { id: 'VCMMG293-007', question: 'It is 3:00 PM in Sydney (AEST). What time is it in Adelaide (ACST)?', options: ['2:00 PM', '2:30 PM', '3:30 PM', '1:00 PM'], correctAnswer: 1, explanation: 'Adelaide is 30 minutes behind Sydney: 3:00 PM - 30 min = 2:30 PM', difficulty: 2, knowledge: { questionTokens: ['australian-time-zones'], correctToken: 'australian-time-zones', incorrectTokens: ['wrong-difference', null, 'added-instead', 'wrong-hours'] } },
                { id: 'VCMMG293-008', question: 'Convert 23:15 to 12-hour time', options: ['11:15 AM', '11:15 PM', '1:15 AM', '1:15 PM'], correctAnswer: 1, explanation: '23 - 12 = 11, and it\'s after noon so PM: 11:15 PM', difficulty: 1, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['wrong-period', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMMG293-009', question: 'How many hours difference between Perth (AWST) and Sydney (AEST)?', options: ['1 hour', '2 hours', '3 hours', '30 minutes'], correctAnswer: 1, explanation: 'AWST is 2 hours behind AEST', difficulty: 1, knowledge: { questionTokens: ['australian-time-zones'], correctToken: 'australian-time-zones', incorrectTokens: ['wrong-difference', null, 'wrong-difference', 'adelaide-confusion'] } },
                { id: 'VCMMG293-010', question: 'A flight leaves at 10:45 and takes 3 hours 40 minutes. Arrival time?', options: ['14:25', '13:85', '14:85', '13:25'], correctAnswer: 0, explanation: '10:45 + 3:40 = 13:85 = 14:25 (85 min = 1h 25min)', difficulty: 2, knowledge: { questionTokens: ['calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: [null, 'no-conversion', 'no-conversion', 'wrong-addition'] } },
                { id: 'VCMMG293-011', question: 'What is 12:00 PM in 24-hour time?', options: ['00:00', '12:00', '24:00', '12:00 PM'], correctAnswer: 1, explanation: '12:00 PM (noon) = 12:00 in 24-hour time', difficulty: 1, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['midnight-confusion', null, 'impossible-time', 'wrong-format'] } },
                { id: 'VCMMG293-012', question: 'A train leaves at 08:45 and arrives at 11:20. Journey time?', options: ['2 hours 35 minutes', '3 hours 25 minutes', '2 hours 25 minutes', '3 hours 35 minutes'], correctAnswer: 0, explanation: '11:20 - 08:45 = 10:80 - 08:45 = 2h 35min', difficulty: 2, knowledge: { questionTokens: ['calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: [null, 'wrong-borrow', 'wrong-subtraction', 'added'] } },
                { id: 'VCMMG293-013', question: 'It is 9:00 AM in Melbourne. What time is it in Perth?', options: ['7:00 AM', '11:00 AM', '9:30 AM', '6:30 AM'], correctAnswer: 0, explanation: 'Perth is 2 hours behind Melbourne: 9:00 AM - 2 = 7:00 AM', difficulty: 2, knowledge: { questionTokens: ['australian-time-zones'], correctToken: 'australian-time-zones', incorrectTokens: [null, 'added-instead', 'adelaide-time', 'wrong-difference'] } },
                { id: 'VCMMG293-014', question: 'During daylight saving, if AEST is 2:00 PM, what is AEDT?', options: ['1:00 PM', '2:00 PM', '3:00 PM', '12:00 PM'], correctAnswer: 2, explanation: 'AEDT is 1 hour ahead of AEST: 2:00 PM + 1 = 3:00 PM', difficulty: 2, knowledge: { questionTokens: ['daylight-saving'], correctToken: 'daylight-saving', incorrectTokens: ['subtracted', 'no-change', null, 'wrong-calculation'] } },
                { id: 'VCMMG293-015', question: 'Convert 00:30 to 12-hour time', options: ['12:30 PM', '12:30 AM', '0:30 AM', '24:30'], correctAnswer: 1, explanation: '00:30 is 30 minutes past midnight = 12:30 AM', difficulty: 2, knowledge: { questionTokens: ['time-formats'], correctToken: 'time-formats', incorrectTokens: ['noon-confusion', null, 'wrong-format', 'impossible-time'] } },
                { id: 'VCMMG293-016', question: 'A meeting runs from 14:30 to 16:45. How long is it?', options: ['2 hours 15 minutes', '2 hours 45 minutes', '1 hour 45 minutes', '2 hours 25 minutes'], correctAnswer: 0, explanation: '16:45 - 14:30 = 2:15', difficulty: 1, knowledge: { questionTokens: ['calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: [null, 'wrong-subtraction', 'wrong-calculation', 'wrong-subtraction'] } },
                { id: 'VCMMG293-017', question: 'If it is 5:00 PM Tuesday in Sydney, what time is it in Perth?', options: ['3:00 PM Tuesday', '7:00 PM Tuesday', '5:00 PM Wednesday', '3:00 PM Wednesday'], correctAnswer: 0, explanation: 'Perth is 2 hours behind: 5:00 PM - 2 = 3:00 PM, same day', difficulty: 2, knowledge: { questionTokens: ['australian-time-zones'], correctToken: 'australian-time-zones', incorrectTokens: [null, 'added-instead', 'wrong-day', 'both-wrong'] } },
                { id: 'VCMMG293-018', question: 'Which Australian state does NOT observe daylight saving?', options: ['Victoria', 'New South Wales', 'Queensland', 'Tasmania'], correctAnswer: 2, explanation: 'Queensland, WA, and NT do not observe daylight saving', difficulty: 2, knowledge: { questionTokens: ['daylight-saving'], correctToken: 'daylight-saving', incorrectTokens: ['wrong', 'wrong', null, 'wrong'] } },
                { id: 'VCMMG293-019', question: 'A plane leaves Sydney at 11:00 AM and arrives in Perth at 1:30 PM (Perth time). Flight duration?', options: ['2 hours 30 minutes', '4 hours 30 minutes', '3 hours 30 minutes', '5 hours 30 minutes'], correctAnswer: 1, explanation: '11:00 AM Sydney = 9:00 AM Perth. 9:00 AM to 1:30 PM = 4h 30min', difficulty: 3, knowledge: { questionTokens: ['australian-time-zones', 'calculating-duration'], correctToken: 'calculating-duration', incorrectTokens: ['no-timezone', null, 'wrong-conversion', 'added-instead'] } },
                { id: 'VCMMG293-020', question: 'If UTC time is 10:00, what time is it in Sydney (UTC+11)?', options: ['21:00', '23:00', '01:00', '10:00'], correctAnswer: 0, explanation: 'Sydney is UTC+11, so 10:00 + 11 = 21:00', difficulty: 3, knowledge: { questionTokens: ['international-time-zones'], correctToken: 'international-time-zones', incorrectTokens: [null, 'wrong-addition', 'wrong-direction', 'no-calculation'] } },
              ],
            },
            {
              id: 'VCMMG294',
              code: 'VCMMG294',
              title: 'Surface Area of Prisms and Cylinders',
              description: 'Develop formulas for volumes and surface areas of rectangular and triangular prisms and cylinders',
              content: `# Surface Area of Prisms and Cylinders

Surface area is the total area of all faces (the outside) of a 3D shape.

## Surface Area of a Rectangular Prism (Box)

A rectangular prism has 6 faces: top, bottom, front, back, left, right.

**SA = 2lw + 2lh + 2wh**

Or: SA = 2(lw + lh + wh)

### Example: l = 5cm, w = 3cm, h = 4cm
SA = 2(5×3 + 5×4 + 3×4)
SA = 2(15 + 20 + 12)
SA = 2 × 47 = 94 cm²

## Surface Area of a Cube

All 6 faces are identical squares.

**SA = 6s²**

### Example: s = 4cm
SA = 6 × 4² = 6 × 16 = 96 cm²

## Surface Area of a Triangular Prism

- 2 triangular ends
- 3 rectangular faces

**SA = 2 × (triangle area) + (perimeter of triangle × length)**

### Example: Triangle base 6cm, height 4cm, sides 5cm each, prism length 10cm
- Triangle area = ½ × 6 × 4 = 12 cm²
- Two triangles = 24 cm²
- Rectangles = (6 + 5 + 5) × 10 = 160 cm²
- Total SA = 24 + 160 = 184 cm²

## Surface Area of a Cylinder

A cylinder has:
- 2 circular ends: 2πr²
- 1 curved surface (rectangle when unrolled): 2πrh

**SA = 2πr² + 2πrh = 2πr(r + h)**

### Example: r = 3cm, h = 10cm (π = 3.14)
SA = 2 × 3.14 × 3 × (3 + 10)
SA = 6.28 × 3 × 13
SA = 244.92 cm²`,
              keyPoints: [
                'Rectangular prism: SA = 2(lw + lh + wh)',
                'Cube: SA = 6s²',
                'Cylinder: SA = 2πr² + 2πrh',
                'Surface area is always in square units',
              ],
              knowledgeTokens: [
                { id: 'rectangular-prism-sa', name: 'Rectangular Prism SA', description: 'Surface area of boxes' },
                { id: 'cube-sa', name: 'Cube Surface Area', description: 'SA = 6s²' },
                { id: 'triangular-prism-sa', name: 'Triangular Prism SA', description: 'Two triangles plus three rectangles', prerequisites: ['rectangular-prism-sa'] },
                { id: 'cylinder-sa', name: 'Cylinder Surface Area', description: 'SA = 2πr² + 2πrh', prerequisites: ['rectangular-prism-sa'] },
              ],
              examples: [
                { problem: 'Find SA of cube with side 5cm', solution: '150 cm²', explanation: 'SA = 6 × 5² = 6 × 25 = 150 cm²' },
                { problem: 'Find SA of cylinder: r=2cm, h=8cm (π=3.14)', solution: '125.6 cm²', explanation: 'SA = 2π(2)(2+8) = 2×3.14×2×10 = 125.6 cm²' },
              ],
              questions: [
                { id: 'VCMMG294-001', question: 'Surface area of cube with side 3cm?', options: ['27 cm²', '54 cm²', '18 cm²', '9 cm²'], correctAnswer: 1, explanation: 'SA = 6 × 3² = 6 × 9 = 54 cm²', difficulty: 1, knowledge: { questionTokens: ['cube-sa'], correctToken: 'cube-sa', incorrectTokens: ['volume', null, 'one-face', 'forgot-6'] } },
                { id: 'VCMMG294-002', question: 'How many faces does a rectangular prism have?', options: ['4', '5', '6', '8'], correctAnswer: 2, explanation: 'A rectangular prism has 6 faces', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: ['wrong-count', 'wrong-count', null, 'wrong-count'] } },
                { id: 'VCMMG294-003', question: 'SA of rectangular prism: 4cm × 3cm × 2cm?', options: ['24 cm²', '52 cm²', '26 cm²', '48 cm²'], correctAnswer: 1, explanation: 'SA = 2(4×3 + 4×2 + 3×2) = 2(12+8+6) = 2×26 = 52 cm²', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: ['volume', null, 'forgot-2', 'wrong-calculation'] } },
                { id: 'VCMMG294-004', question: 'A cube has SA = 96 cm². What is the side length?', options: ['4 cm', '16 cm', '6 cm', '8 cm'], correctAnswer: 0, explanation: '6s² = 96, s² = 16, s = 4 cm', difficulty: 2, knowledge: { questionTokens: ['cube-sa'], correctToken: 'cube-sa', incorrectTokens: [null, 's-squared', 'wrong-division', 'wrong-calculation'] } },
                { id: 'VCMMG294-005', question: 'Curved surface area of cylinder: r=5cm, h=10cm (π=3.14)?', options: ['314 cm²', '157 cm²', '785 cm²', '628 cm²'], correctAnswer: 0, explanation: 'Curved SA = 2πrh = 2×3.14×5×10 = 314 cm²', difficulty: 2, knowledge: { questionTokens: ['cylinder-sa'], correctToken: 'cylinder-sa', incorrectTokens: [null, 'forgot-2', 'total-sa', 'wrong-calculation'] } },
                { id: 'VCMMG294-006', question: 'SA of cube with side 6cm?', options: ['216 cm²', '36 cm²', '216 cm³', '36 cm³'], correctAnswer: 0, explanation: 'SA = 6 × 6² = 6 × 36 = 216 cm²', difficulty: 1, knowledge: { questionTokens: ['cube-sa'], correctToken: 'cube-sa', incorrectTokens: [null, 'one-face', 'volume', 'wrong-units'] } },
                { id: 'VCMMG294-007', question: 'Area of one circular end of cylinder with r=4cm (π=3.14)?', options: ['50.24 cm²', '25.12 cm²', '12.56 cm²', '100.48 cm²'], correctAnswer: 0, explanation: 'Area = πr² = 3.14 × 16 = 50.24 cm²', difficulty: 1, knowledge: { questionTokens: ['cylinder-sa'], correctToken: 'cylinder-sa', incorrectTokens: [null, 'circumference', 'wrong-formula', 'doubled'] } },
                { id: 'VCMMG294-008', question: 'Total SA of cylinder: r=3cm, h=7cm (π=3.14)?', options: ['188.4 cm²', '131.88 cm²', '56.52 cm²', '150 cm²'], correctAnswer: 0, explanation: 'SA = 2πr(r+h) = 2×3.14×3×10 = 188.4 cm²', difficulty: 2, knowledge: { questionTokens: ['cylinder-sa'], correctToken: 'cylinder-sa', incorrectTokens: [null, 'curved-only', 'ends-only', 'wrong-calculation'] } },
                { id: 'VCMMG294-009', question: 'A box is 10×8×5 cm. Which pair of faces has the largest area?', options: ['10×8 faces', '10×5 faces', '8×5 faces', 'All same'], correctAnswer: 0, explanation: '10×8=80, 10×5=50, 8×5=40. The 10×8 faces are largest.', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: [null, 'wrong-comparison', 'wrong-comparison', 'no-comparison'] } },
                { id: 'VCMMG294-010', question: 'How many rectangular faces does a triangular prism have?', options: ['2', '3', '4', '5'], correctAnswer: 1, explanation: 'A triangular prism has 3 rectangular faces and 2 triangular ends', difficulty: 1, knowledge: { questionTokens: ['triangular-prism-sa'], correctToken: 'triangular-prism-sa', incorrectTokens: ['triangles', null, 'wrong-count', 'total-faces'] } },
                { id: 'VCMMG294-011', question: 'SA of rectangular prism: 6×4×3 cm?', options: ['72 cm²', '108 cm²', '54 cm²', '144 cm²'], correctAnswer: 1, explanation: 'SA = 2(6×4 + 6×3 + 4×3) = 2(24+18+12) = 2×54 = 108 cm²', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: ['volume', null, 'forgot-2', 'doubled'] } },
                { id: 'VCMMG294-012', question: 'If you double the side of a cube, SA becomes...', options: ['Double', 'Quadruple', 'Triple', 'Same'], correctAnswer: 1, explanation: 'SA = 6s². If s doubles, SA = 6(2s)² = 6×4s² = 4 times original', difficulty: 3, knowledge: { questionTokens: ['cube-sa'], correctToken: 'cube-sa', incorrectTokens: ['linear', null, 'wrong-factor', 'no-change'] } },
                { id: 'VCMMG294-013', question: 'Triangular prism: triangle base 8cm, height 6cm, prism length 12cm. Area of both triangular ends?', options: ['48 cm²', '24 cm²', '96 cm²', '72 cm²'], correctAnswer: 0, explanation: 'One triangle = ½×8×6 = 24. Two triangles = 48 cm²', difficulty: 2, knowledge: { questionTokens: ['triangular-prism-sa'], correctToken: 'triangular-prism-sa', incorrectTokens: [null, 'one-only', 'rectangle-confusion', 'wrong-calculation'] } },
                { id: 'VCMMG294-014', question: 'A cylinder has no curved surface (open). SA with r=2cm (π=3.14)?', options: ['12.56 cm²', '25.12 cm²', '50.24 cm²', '6.28 cm²'], correctAnswer: 1, explanation: 'Only two circular ends: SA = 2πr² = 2×3.14×4 = 25.12 cm²', difficulty: 2, knowledge: { questionTokens: ['cylinder-sa'], correctToken: 'cylinder-sa', incorrectTokens: ['one-end', null, 'included-curved', 'circumference'] } },
                { id: 'VCMMG294-015', question: 'Box: 5×5×10 cm. Find SA.', options: ['200 cm²', '250 cm²', '300 cm²', '150 cm²'], correctAnswer: 1, explanation: 'SA = 2(5×5 + 5×10 + 5×10) = 2(25+50+50) = 250 cm²', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: ['wrong-calculation', null, 'wrong-calculation', 'forgot-2'] } },
                { id: 'VCMMG294-016', question: 'Which has greater SA: cube side 5cm or box 6×4×4cm?', options: ['Cube', 'Box', 'Same', 'Cannot compare'], correctAnswer: 0, explanation: 'Cube: 6×25=150. Box: 2(24+24+16)=128. Cube is larger.', difficulty: 3, knowledge: { questionTokens: ['cube-sa', 'rectangular-prism-sa'], correctToken: 'cube-sa', incorrectTokens: [null, 'wrong-calculation', 'no-calculation', 'confused'] } },
                { id: 'VCMMG294-017', question: 'Open-top box 8×6×4 cm. SA (no lid)?', options: ['152 cm²', '200 cm²', '104 cm²', '160 cm²'], correctAnswer: 0, explanation: 'Bottom + 4 sides = 48 + 2(32) + 2(24) = 48 + 64 + 40 = 152 cm²', difficulty: 3, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: [null, 'full-box', 'missed-sides', 'wrong-calculation'] } },
                { id: 'VCMMG294-018', question: 'Cylinder: diameter 10cm, height 8cm. Total SA? (π=3.14)', options: ['408.2 cm²', '251.2 cm²', '314 cm²', '157 cm²'], correctAnswer: 0, explanation: 'r=5. SA = 2πr(r+h) = 2×3.14×5×13 = 408.2 cm²', difficulty: 2, knowledge: { questionTokens: ['cylinder-sa'], correctToken: 'cylinder-sa', incorrectTokens: [null, 'curved-only', 'wrong-radius', 'ends-only'] } },
                { id: 'VCMMG294-019', question: 'Paint covers 10m² per litre. Box 2×1×0.5m needs how much paint?', options: ['0.7 L', '7 L', '1 L', '0.07 L'], correctAnswer: 0, explanation: 'SA = 2(2+1+0.5) = 7 m². Paint = 7÷10 = 0.7 L', difficulty: 3, knowledge: { questionTokens: ['rectangular-prism-sa'], correctToken: 'rectangular-prism-sa', incorrectTokens: [null, 'no-conversion', 'volume', 'wrong-division'] } },
                { id: 'VCMMG294-020', question: 'Triangular prism: right triangle legs 3cm, 4cm (hypotenuse 5cm), length 10cm. Total SA?', options: ['132 cm²', '120 cm²', '72 cm²', '144 cm²'], correctAnswer: 0, explanation: '2 triangles = 2×½×3×4 = 12. 3 rectangles = 30+40+50 = 120. Total = 132 cm²', difficulty: 3, knowledge: { questionTokens: ['triangular-prism-sa'], correctToken: 'triangular-prism-sa', incorrectTokens: [null, 'rectangles-only', 'triangles-only', 'wrong-calculation'] } },
              ],
            },
            {
              id: 'VCMMG295',
              code: 'VCMMG295',
              title: 'Volume of Prisms and Cylinders',
              description: 'Develop formulas for volumes of rectangular and triangular prisms and cylinders',
              content: `# Volume of Prisms and Cylinders

Volume measures the space inside a 3D shape, always in cubic units (cm³, m³).

## General Formula for Prisms

**Volume = Base Area × Height**

This works for ALL prisms - the base can be any shape.

## Volume of a Rectangular Prism (Cuboid)

**V = length × width × height = lwh**

### Example: l = 5cm, w = 4cm, h = 3cm
V = 5 × 4 × 3 = 60 cm³

## Volume of a Cube

All sides equal, so:

**V = s³**

### Example: s = 4cm
V = 4³ = 64 cm³

## Volume of a Triangular Prism

Base is a triangle: Area = ½ × base × height

**V = ½ × b × h × length**

### Example: Triangle base 6cm, height 4cm, prism length 10cm
V = ½ × 6 × 4 × 10 = 120 cm³

## Volume of a Cylinder

Base is a circle: Area = πr²

**V = πr²h**

### Example: r = 3cm, h = 10cm (π = 3.14)
V = 3.14 × 3² × 10
V = 3.14 × 9 × 10
V = 282.6 cm³

## Capacity and Volume

- 1 cm³ = 1 mL
- 1000 cm³ = 1 L
- 1 m³ = 1000 L`,
              keyPoints: [
                'Volume = Base Area × Height for all prisms',
                'Rectangular prism: V = lwh',
                'Cube: V = s³',
                'Cylinder: V = πr²h',
                '1 cm³ = 1 mL, 1000 cm³ = 1 L',
              ],
              knowledgeTokens: [
                { id: 'prism-volume-formula', name: 'Prism Volume Formula', description: 'V = Base Area × Height' },
                { id: 'rectangular-prism-volume', name: 'Rectangular Prism Volume', description: 'V = lwh' },
                { id: 'cube-volume', name: 'Cube Volume', description: 'V = s³' },
                { id: 'triangular-prism-volume', name: 'Triangular Prism Volume', description: 'V = ½bhl', prerequisites: ['prism-volume-formula'] },
                { id: 'cylinder-volume', name: 'Cylinder Volume', description: 'V = πr²h', prerequisites: ['prism-volume-formula'] },
                { id: 'volume-capacity', name: 'Volume and Capacity', description: 'Converting between cm³ and L' },
              ],
              examples: [
                { problem: 'Volume of box: 8×5×4 cm', solution: '160 cm³', explanation: 'V = 8 × 5 × 4 = 160 cm³' },
                { problem: 'Volume of cylinder: r=5cm, h=10cm (π=3.14)', solution: '785 cm³', explanation: 'V = 3.14 × 25 × 10 = 785 cm³' },
              ],
              questions: [
                { id: 'VCMMG295-001', question: 'Volume of cube with side 5cm?', options: ['25 cm³', '125 cm³', '150 cm³', '15 cm³'], correctAnswer: 1, explanation: 'V = 5³ = 125 cm³', difficulty: 1, knowledge: { questionTokens: ['cube-volume'], correctToken: 'cube-volume', incorrectTokens: ['squared', null, 'surface-area', 'added'] } },
                { id: 'VCMMG295-002', question: 'Volume of box: 6×4×3 cm?', options: ['72 cm³', '13 cm³', '72 cm²', '48 cm³'], correctAnswer: 0, explanation: 'V = 6 × 4 × 3 = 72 cm³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'added', 'wrong-units', 'forgot-dimension'] } },
                { id: 'VCMMG295-003', question: 'Volume of cylinder: r=2cm, h=7cm (π=3.14)?', options: ['87.92 cm³', '43.96 cm³', '28 cm³', '44 cm³'], correctAnswer: 0, explanation: 'V = πr²h = 3.14 × 4 × 7 = 87.92 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'forgot-square', 'no-pi', 'wrong-calculation'] } },
                { id: 'VCMMG295-004', question: 'How many mL in 500 cm³?', options: ['5 mL', '50 mL', '500 mL', '5000 mL'], correctAnswer: 2, explanation: '1 cm³ = 1 mL, so 500 cm³ = 500 mL', difficulty: 1, knowledge: { questionTokens: ['volume-capacity'], correctToken: 'volume-capacity', incorrectTokens: ['divided', 'divided', null, 'multiplied'] } },
                { id: 'VCMMG295-005', question: 'Triangular prism: triangle base 8cm, height 6cm, length 10cm. Volume?', options: ['480 cm³', '240 cm³', '120 cm³', '48 cm³'], correctAnswer: 1, explanation: 'V = ½ × 8 × 6 × 10 = 240 cm³', difficulty: 2, knowledge: { questionTokens: ['triangular-prism-volume'], correctToken: 'triangular-prism-volume', incorrectTokens: ['forgot-half', null, 'forgot-length', 'triangle-only'] } },
                { id: 'VCMMG295-006', question: 'A cube has volume 64 cm³. What is the side length?', options: ['8 cm', '4 cm', '16 cm', '32 cm'], correctAnswer: 1, explanation: 's³ = 64, so s = ∛64 = 4 cm', difficulty: 2, knowledge: { questionTokens: ['cube-volume'], correctToken: 'cube-volume', incorrectTokens: ['squared', null, 'wrong-root', 'halved'] } },
                { id: 'VCMMG295-007', question: 'How many litres in 3000 cm³?', options: ['3 L', '30 L', '300 L', '0.3 L'], correctAnswer: 0, explanation: '3000 cm³ ÷ 1000 = 3 L', difficulty: 1, knowledge: { questionTokens: ['volume-capacity'], correctToken: 'volume-capacity', incorrectTokens: [null, 'wrong-division', 'multiplied', 'wrong-division'] } },
                { id: 'VCMMG295-008', question: 'Cylinder: diameter 8cm, height 10cm (π=3.14). Volume?', options: ['502.4 cm³', '2009.6 cm³', '251.2 cm³', '200.96 cm³'], correctAnswer: 0, explanation: 'r = 4. V = 3.14 × 16 × 10 = 502.4 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'used-diameter', 'forgot-square', 'wrong-calculation'] } },
                { id: 'VCMMG295-009', question: 'Volume = Base Area × Height. If base area is 25 cm² and height is 8 cm, volume is...', options: ['200 cm³', '33 cm³', '200 cm²', '25 cm³'], correctAnswer: 0, explanation: 'V = 25 × 8 = 200 cm³', difficulty: 1, knowledge: { questionTokens: ['prism-volume-formula'], correctToken: 'prism-volume-formula', incorrectTokens: [null, 'added', 'wrong-units', 'forgot-height'] } },
                { id: 'VCMMG295-010', question: 'Box holds 2 litres. What is its volume in cm³?', options: ['2 cm³', '200 cm³', '2000 cm³', '20 cm³'], correctAnswer: 2, explanation: '2 L = 2 × 1000 = 2000 cm³', difficulty: 1, knowledge: { questionTokens: ['volume-capacity'], correctToken: 'volume-capacity', incorrectTokens: ['no-conversion', 'wrong-factor', null, 'wrong-factor'] } },
                { id: 'VCMMG295-011', question: 'Cube volume is 27 cm³. What is the side?', options: ['9 cm', '3 cm', '27 cm', '13.5 cm'], correctAnswer: 1, explanation: 's³ = 27, s = 3 cm', difficulty: 2, knowledge: { questionTokens: ['cube-volume'], correctToken: 'cube-volume', incorrectTokens: ['divided-by-3', null, 'no-root', 'halved'] } },
                { id: 'VCMMG295-012', question: 'Volume of box: 10×10×5 cm?', options: ['500 cm³', '25 cm³', '250 cm³', '100 cm³'], correctAnswer: 0, explanation: 'V = 10 × 10 × 5 = 500 cm³', difficulty: 1, knowledge: { questionTokens: ['rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'added', 'forgot-one', 'two-dimensions'] } },
                { id: 'VCMMG295-013', question: 'If you double all dimensions of a cube, volume becomes...', options: ['Double', 'Quadruple', '8 times', '6 times'], correctAnswer: 2, explanation: 'V = s³. If s doubles: (2s)³ = 8s³ = 8 times original', difficulty: 3, knowledge: { questionTokens: ['cube-volume'], correctToken: 'cube-volume', incorrectTokens: ['linear', 'squared', null, 'surface-area'] } },
                { id: 'VCMMG295-014', question: 'Cylinder: r=4cm, h=5cm (π=3.14). Volume?', options: ['251.2 cm³', '125.6 cm³', '62.8 cm³', '80 cm³'], correctAnswer: 0, explanation: 'V = 3.14 × 16 × 5 = 251.2 cm³', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'forgot-square', 'circumference', 'no-pi'] } },
                { id: 'VCMMG295-015', question: 'Triangular prism: triangle base 10cm, height 8cm, length 15cm. Volume?', options: ['1200 cm³', '600 cm³', '300 cm³', '800 cm³'], correctAnswer: 1, explanation: 'V = ½ × 10 × 8 × 15 = 600 cm³', difficulty: 2, knowledge: { questionTokens: ['triangular-prism-volume'], correctToken: 'triangular-prism-volume', incorrectTokens: ['forgot-half', null, 'forgot-length', 'wrong-calculation'] } },
                { id: 'VCMMG295-016', question: 'Fish tank is 60×30×40 cm. How many litres does it hold?', options: ['72 L', '720 L', '7.2 L', '7200 L'], correctAnswer: 0, explanation: 'V = 60×30×40 = 72000 cm³ = 72 L', difficulty: 2, knowledge: { questionTokens: ['rectangular-prism-volume', 'volume-capacity'], correctToken: 'volume-capacity', incorrectTokens: [null, 'no-conversion', 'wrong-factor', 'wrong-conversion'] } },
                { id: 'VCMMG295-017', question: 'Cylinder holds 1 litre. If r=5cm (π=3.14), what is height?', options: ['12.7 cm', '40 cm', '6.4 cm', '20 cm'], correctAnswer: 0, explanation: '1000 = 3.14 × 25 × h. h = 1000/78.5 ≈ 12.7 cm', difficulty: 3, knowledge: { questionTokens: ['cylinder-volume'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'wrong-rearrange', 'wrong-calculation', 'no-conversion'] } },
                { id: 'VCMMG295-018', question: 'Which has greater volume: cube side 6cm or box 7×5×5cm?', options: ['Cube', 'Box', 'Same', 'Cannot tell'], correctAnswer: 0, explanation: 'Cube: 216 cm³. Box: 175 cm³. Cube is larger.', difficulty: 2, knowledge: { questionTokens: ['cube-volume', 'rectangular-prism-volume'], correctToken: 'rectangular-prism-volume', incorrectTokens: [null, 'wrong-calculation', 'no-calculation', 'confused'] } },
                { id: 'VCMMG295-019', question: 'Pool is 25m × 10m × 2m. Volume in litres?', options: ['500 L', '5000 L', '50000 L', '500000 L'], correctAnswer: 3, explanation: 'V = 500 m³ = 500 × 1000 = 500000 L', difficulty: 3, knowledge: { questionTokens: ['rectangular-prism-volume', 'volume-capacity'], correctToken: 'volume-capacity', incorrectTokens: ['cm-confusion', 'wrong-factor', 'wrong-factor', null] } },
                { id: 'VCMMG295-020', question: 'Cylinder: r=3cm, h=12cm (π=3.14). Volume in mL?', options: ['339.12 mL', '113.04 mL', '339.12 L', '1017.36 mL'], correctAnswer: 0, explanation: 'V = 3.14 × 9 × 12 = 339.12 cm³ = 339.12 mL', difficulty: 2, knowledge: { questionTokens: ['cylinder-volume', 'volume-capacity'], correctToken: 'cylinder-volume', incorrectTokens: [null, 'forgot-height', 'wrong-units', 'wrong-calculation'] } },
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
          id: 'data-representation',
          title: 'Data Representation and Interpretation',
          description: 'Collecting, displaying and analysing data',
          sections: [
            {
              id: 'VCMSP297',
              code: 'VCMSP297',
              title: 'Measures of Centre and Spread',
              description: 'Investigate the effect of individual data values including outliers, on the mean and median',
              content: `# Measures of Centre and Spread

Statistics helps us summarise and understand data. Key measures include mean, median, mode, and range.

## Mean (Average)
Add all values and divide by the count.
- Data: 4, 6, 8, 10, 12
- Mean = (4+6+8+10+12) ÷ 5 = 40 ÷ 5 = 8

## Median (Middle Value)
Arrange data in order and find the middle value.
- Odd count: The middle number
- Even count: Average of two middle numbers
- Data: 3, 5, 7, 9, 11 → Median = 7
- Data: 2, 4, 6, 8 → Median = (4+6) ÷ 2 = 5

## Mode (Most Common)
The value that appears most often.
- Data: 2, 3, 3, 4, 5, 3, 6 → Mode = 3

## Range (Spread)
Difference between highest and lowest.
- Data: 5, 12, 8, 3, 15 → Range = 15 - 3 = 12

## Effect of Outliers
Outliers are values far from others. They affect the mean more than the median.`,
              keyPoints: [
                'Mean = sum of values ÷ count',
                'Median is the middle value when ordered',
                'Mode is the most frequent value',
                'Range = highest - lowest',
                'Outliers affect mean more than median'
              ],
              knowledgeTokens: [
                { id: 'calculating-mean', name: 'Calculating Mean', description: 'Finding the average of a data set' },
                { id: 'finding-median', name: 'Finding Median', description: 'Identifying the middle value' },
                { id: 'identifying-mode', name: 'Identifying Mode', description: 'Finding the most common value' },
                { id: 'calculating-range', name: 'Calculating Range', description: 'Finding the spread of data' },
                { id: 'outlier-effects', name: 'Outlier Effects', description: 'Understanding how outliers affect measures', prerequisites: ['calculating-mean', 'finding-median'] },
              ],
              examples: [
                { problem: 'Find the mean of 5, 8, 12, 15', solution: '10', explanation: '(5+8+12+15) ÷ 4 = 40 ÷ 4 = 10' },
                { problem: 'Find the median of 3, 7, 2, 9, 5', solution: '5', explanation: 'Ordered: 2, 3, 5, 7, 9. Middle value = 5' }
              ],
              questions: [
                { id: 'VCMSP297-001', question: 'Find the mean of 4, 6, 8, 10, 12', options: ['6', '8', '10', '40'], correctAnswer: 1, explanation: '(4+6+8+10+12) ÷ 5 = 40 ÷ 5 = 8', difficulty: 1, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: ['forgot-to-divide', null, 'wrong-count', 'no-division'] } },
                { id: 'VCMSP297-002', question: 'Find the median of 3, 5, 7, 9, 11', options: ['5', '7', '9', '35'], correctAnswer: 1, explanation: 'Data is ordered. Middle value (3rd of 5) = 7', difficulty: 1, knowledge: { questionTokens: ['finding-median'], correctToken: 'finding-median', incorrectTokens: ['wrong-position', null, 'wrong-position', 'sum-error'] } },
                { id: 'VCMSP297-003', question: 'Find the mode of 2, 3, 3, 4, 5, 3, 6', options: ['2', '3', '4', '5'], correctAnswer: 1, explanation: '3 appears most often (3 times)', difficulty: 1, knowledge: { questionTokens: ['identifying-mode'], correctToken: 'identifying-mode', incorrectTokens: ['first-value', null, 'middle-value', 'frequency-error'] } },
                { id: 'VCMSP297-004', question: 'Find the range of 5, 12, 8, 3, 15', options: ['12', '10', '8', '5'], correctAnswer: 0, explanation: 'Range = 15 - 3 = 12', difficulty: 1, knowledge: { questionTokens: ['calculating-range'], correctToken: 'calculating-range', incorrectTokens: [null, 'subtraction-error', 'median-confusion', 'wrong-values'] } },
                { id: 'VCMSP297-005', question: 'Find the median of 2, 4, 6, 8', options: ['4', '5', '6', '20'], correctAnswer: 1, explanation: 'Even count: (4+6) ÷ 2 = 5', difficulty: 2, knowledge: { questionTokens: ['finding-median'], correctToken: 'finding-median', incorrectTokens: ['lower-middle', null, 'upper-middle', 'sum-error'] } },
                { id: 'VCMSP297-006', question: 'The mean of 5 numbers is 12. What is the sum?', options: ['17', '60', '7', '2.4'], correctAnswer: 1, explanation: 'Sum = Mean × Count = 12 × 5 = 60', difficulty: 2, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: ['addition-error', null, 'subtraction-error', 'division-error'] } },
                { id: 'VCMSP297-007', question: 'Data: 10, 12, 14, 16, 100. Which measure is most affected by the outlier?', options: ['Median', 'Mode', 'Mean', 'None'], correctAnswer: 2, explanation: 'The mean is most affected by outliers. It would be pulled up significantly by 100.', difficulty: 2, knowledge: { questionTokens: ['outlier-effects'], correctToken: 'outlier-effects', incorrectTokens: ['median-confusion', 'mode-confusion', null, 'no-effect-error'] } },
                { id: 'VCMSP297-008', question: 'A data set has no mode. What does this mean?', options: ['All values are 0', 'All values appear equally often', 'The median is 0', 'The mean equals the median'], correctAnswer: 1, explanation: 'No mode means no single value appears more frequently than others', difficulty: 2, knowledge: { questionTokens: ['identifying-mode'], correctToken: 'identifying-mode', incorrectTokens: ['zero-confusion', null, 'median-confusion', 'mean-median-confusion'] } },
                { id: 'VCMSP297-009', question: 'Find the mean of 15, 20, 25, 30, 35, 45', options: ['25', '28', '30', '170'], correctAnswer: 1, explanation: '(15+20+25+30+35+45) ÷ 6 = 170 ÷ 6 ≈ 28.3 ≈ 28', difficulty: 2, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: ['median-found', null, 'middle-value', 'no-division'] } },
                { id: 'VCMSP297-010', question: 'The median of 7 ordered values is 15. Which position is 15 in?', options: ['3rd', '4th', '5th', '7th'], correctAnswer: 1, explanation: 'With 7 values, the median is the 4th (middle) value', difficulty: 2, knowledge: { questionTokens: ['finding-median'], correctToken: 'finding-median', incorrectTokens: ['wrong-count', null, 'wrong-position', 'last-position'] } },
                { id: 'VCMSP297-011', question: 'Data: 8, 8, 9, 10, 10, 10, 12. What is the mode?', options: ['8', '9', '10', '8 and 10'], correctAnswer: 2, explanation: '10 appears 3 times, more than any other value', difficulty: 1, knowledge: { questionTokens: ['identifying-mode'], correctToken: 'identifying-mode', incorrectTokens: ['first-repeated', 'unique-value', null, 'bimodal-confusion'] } },
                { id: 'VCMSP297-012', question: 'The mean of 4 numbers is 20. Three numbers are 15, 18, 22. Find the fourth.', options: ['20', '25', '27', '23'], correctAnswer: 1, explanation: 'Sum = 80. Fourth = 80 - (15+18+22) = 80 - 55 = 25', difficulty: 3, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: ['mean-as-answer', null, 'calculation-error', 'wrong-subtraction'] } },
                { id: 'VCMSP297-013', question: 'Adding 10 to every value in a data set will...', options: ['Increase the mean by 10', 'Double the mean', 'Keep the mean the same', 'Increase the range by 10'], correctAnswer: 0, explanation: 'Adding a constant to all values increases the mean by that constant', difficulty: 3, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: [null, 'multiplication-confusion', 'no-effect-error', 'range-confusion'] } },
                { id: 'VCMSP297-014', question: 'Data: 2, 4, 6, 8, 10. If we remove 10, how does the median change?', options: ['Decreases by 2', 'Increases by 2', 'Stays the same', 'Becomes 5'], correctAnswer: 3, explanation: 'Original median = 6. New data: 2,4,6,8. New median = (4+6)/2 = 5', difficulty: 3, knowledge: { questionTokens: ['finding-median'], correctToken: 'finding-median', incorrectTokens: ['calculation-error', 'wrong-direction', 'unchanged-error', null] } },
                { id: 'VCMSP297-015', question: 'Which data set has the largest range?', options: ['10, 12, 14, 16', '5, 10, 15, 20', '1, 2, 3, 100', '50, 51, 52, 53'], correctAnswer: 2, explanation: 'Ranges: 6, 15, 99, 3. Set C has range 99 (100-1)', difficulty: 2, knowledge: { questionTokens: ['calculating-range'], correctToken: 'calculating-range', incorrectTokens: ['wrong-calculation', 'wrong-calculation', null, 'wrong-calculation'] } },
                { id: 'VCMSP297-016', question: 'Mean of 6 values is 15. Five values sum to 80. Find the sixth value.', options: ['10', '90', '5', '15'], correctAnswer: 0, explanation: 'Total = 15 × 6 = 90. Sixth = 90 - 80 = 10', difficulty: 3, knowledge: { questionTokens: ['calculating-mean'], correctToken: 'calculating-mean', incorrectTokens: [null, 'found-total', 'wrong-subtraction', 'mean-as-answer'] } },
                { id: 'VCMSP297-017', question: 'Data: 5, 5, 5, 5, 5. What can you say about mean, median and mode?', options: ['All different', 'Mean = Median only', 'All equal to 5', 'Mode is undefined'], correctAnswer: 2, explanation: 'When all values are the same, mean = median = mode = that value', difficulty: 2, knowledge: { questionTokens: ['calculating-mean', 'finding-median', 'identifying-mode'], correctToken: 'calculating-mean', incorrectTokens: ['properties-error', 'incomplete', null, 'mode-error'] } },
                { id: 'VCMSP297-018', question: 'Removing an outlier from data will typically...', options: ['Increase the mean', 'Have no effect', 'Bring mean and median closer', 'Increase the range'], correctAnswer: 2, explanation: 'Outliers pull the mean away from the median. Removing them brings these measures closer.', difficulty: 3, knowledge: { questionTokens: ['outlier-effects'], correctToken: 'outlier-effects', incorrectTokens: ['wrong-direction', 'no-effect-error', null, 'range-error'] } },
                { id: 'VCMSP297-019', question: 'Find the median of 1, 3, 5, 7, 9, 11, 13, 15, 17', options: ['7', '8', '9', '81'], correctAnswer: 2, explanation: '9 values, median is the 5th value = 9', difficulty: 1, knowledge: { questionTokens: ['finding-median'], correctToken: 'finding-median', incorrectTokens: ['wrong-position', 'average-error', null, 'sum-error'] } },
                { id: 'VCMSP297-020', question: 'Which measure is best for skewed data with outliers?', options: ['Mean', 'Mode', 'Median', 'Range'], correctAnswer: 2, explanation: 'Median is resistant to outliers and better represents typical values in skewed data', difficulty: 3, knowledge: { questionTokens: ['outlier-effects'], correctToken: 'outlier-effects', incorrectTokens: ['mean-preference', 'mode-preference', null, 'range-is-not-centre'] } },
              ],
            },
          ],
        },
        {
          id: 'probability',
          title: 'Probability',
          description: 'Understanding chance and probability',
          sections: [
            {
              id: 'VCMSP298',
              code: 'VCMSP298',
              title: 'Probability Concepts',
              description: 'Identify complementary events and use the sum of probabilities to solve problems',
              content: `# Probability

Probability measures how likely an event is to happen, from 0 (impossible) to 1 (certain).

## Probability Scale
- **0** = Impossible
- **0.5** = Even chance (50-50)
- **1** = Certain

## Calculating Probability
P(event) = Number of favourable outcomes ÷ Total number of outcomes

**Example:** Rolling a 6 on a die
P(6) = 1/6 (one 6 out of 6 possible numbers)

## Complementary Events
Events that together cover all possibilities.
P(A) + P(not A) = 1

**Example:** P(rain) = 0.3, so P(no rain) = 1 - 0.3 = 0.7

## Sample Space
All possible outcomes listed.
Coin: {Heads, Tails}
Die: {1, 2, 3, 4, 5, 6}

## Combined Events
**AND** (both happen): Multiply probabilities
**OR** (either happens): Add probabilities (if mutually exclusive)`,
              keyPoints: [
                'Probability ranges from 0 to 1',
                'P(event) = favourable ÷ total outcomes',
                'P(A) + P(not A) = 1',
                'AND: multiply, OR: add (if exclusive)'
              ],
              knowledgeTokens: [
                { id: 'probability-scale', name: 'Probability Scale', description: 'Understanding 0 to 1 range' },
                { id: 'calculating-probability', name: 'Calculating Probability', description: 'Finding probability from outcomes' },
                { id: 'complementary-events', name: 'Complementary Events', description: 'Events that sum to 1', prerequisites: ['calculating-probability'] },
                { id: 'sample-space', name: 'Sample Space', description: 'Listing all possible outcomes' },
                { id: 'combined-events', name: 'Combined Events', description: 'AND and OR probabilities', prerequisites: ['calculating-probability'] },
              ],
              examples: [
                { problem: 'Find P(even number) when rolling a die', solution: '1/2 or 0.5', explanation: 'Even numbers: 2, 4, 6. That is 3 out of 6 = 1/2' },
                { problem: 'P(winning) = 0.35. Find P(not winning)', solution: '0.65', explanation: 'P(not winning) = 1 - 0.35 = 0.65' }
              ],
              questions: [
                { id: 'VCMSP298-001', question: 'A fair coin is flipped. What is P(heads)?', options: ['0', '1/2', '1', '1/4'], correctAnswer: 1, explanation: '1 head out of 2 outcomes = 1/2', difficulty: 1, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: ['impossible-error', null, 'certain-error', 'wrong-denominator'] } },
                { id: 'VCMSP298-002', question: 'A die is rolled. What is P(rolling a 3)?', options: ['1/3', '1/6', '3/6', '1'], correctAnswer: 1, explanation: 'One 3 out of 6 possible outcomes = 1/6', difficulty: 1, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: ['wrong-denominator', null, 'wrong-numerator', 'certain-error'] } },
                { id: 'VCMSP298-003', question: 'P(rain) = 0.4. What is P(no rain)?', options: ['0.4', '0.6', '0', '1.4'], correctAnswer: 1, explanation: 'P(no rain) = 1 - 0.4 = 0.6', difficulty: 1, knowledge: { questionTokens: ['complementary-events'], correctToken: 'complementary-events', incorrectTokens: ['same-probability', null, 'impossible-error', 'addition-error'] } },
                { id: 'VCMSP298-004', question: 'What is P(rolling even) on a fair die?', options: ['1/6', '1/3', '1/2', '2/3'], correctAnswer: 2, explanation: 'Even: 2, 4, 6 = 3 outcomes out of 6 = 1/2', difficulty: 1, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: ['one-outcome', 'wrong-count', null, 'over-count'] } },
                { id: 'VCMSP298-005', question: 'A bag has 3 red, 2 blue, 5 green balls. P(red)?', options: ['3/10', '3/5', '1/3', '3/7'], correctAnswer: 0, explanation: '3 red out of 10 total = 3/10', difficulty: 1, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: [null, 'wrong-denominator', 'wrong-calculation', 'wrong-denominator'] } },
                { id: 'VCMSP298-006', question: 'If P(A) = 0.7, what is P(not A)?', options: ['0.7', '0.3', '1.7', '0'], correctAnswer: 1, explanation: 'P(not A) = 1 - 0.7 = 0.3', difficulty: 1, knowledge: { questionTokens: ['complementary-events'], correctToken: 'complementary-events', incorrectTokens: ['same-probability', null, 'addition-error', 'impossible-error'] } },
                { id: 'VCMSP298-007', question: 'A spinner has 8 equal sections. P(landing on section 5)?', options: ['5/8', '1/8', '1/5', '8/5'], correctAnswer: 1, explanation: 'One section out of 8 = 1/8', difficulty: 1, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: ['label-as-numerator', null, 'inverted', 'inverted'] } },
                { id: 'VCMSP298-008', question: 'Deck of 52 cards. P(drawing a heart)?', options: ['1/52', '1/4', '4/52', '13'], correctAnswer: 1, explanation: '13 hearts in 52 cards = 13/52 = 1/4', difficulty: 2, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: ['one-card', null, 'suit-confusion', 'no-simplify'] } },
                { id: 'VCMSP298-009', question: 'Two coins flipped. Sample space size?', options: ['2', '3', '4', '8'], correctAnswer: 2, explanation: 'HH, HT, TH, TT = 4 outcomes', difficulty: 2, knowledge: { questionTokens: ['sample-space'], correctToken: 'sample-space', incorrectTokens: ['one-coin', 'forgot-one', null, 'three-coins'] } },
                { id: 'VCMSP298-010', question: 'P(A) = 1/3. P(A happening twice in a row)?', options: ['2/3', '1/9', '1/6', '2/9'], correctAnswer: 1, explanation: 'P(A and A) = 1/3 × 1/3 = 1/9', difficulty: 3, knowledge: { questionTokens: ['combined-events'], correctToken: 'combined-events', incorrectTokens: ['added', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMSP298-011', question: 'Bag: 4 red, 6 blue. P(not red)?', options: ['4/10', '6/10', '10/4', '4/6'], correctAnswer: 1, explanation: 'P(not red) = P(blue) = 6/10', difficulty: 1, knowledge: { questionTokens: ['complementary-events'], correctToken: 'complementary-events', incorrectTokens: ['p-red', null, 'inverted', 'wrong-denominator'] } },
                { id: 'VCMSP298-012', question: 'Which probability is impossible?', options: ['0', '0.5', '0.01', '0.99'], correctAnswer: 0, explanation: 'Probability 0 means the event cannot happen', difficulty: 1, knowledge: { questionTokens: ['probability-scale'], correctToken: 'probability-scale', incorrectTokens: [null, 'even-chance', 'unlikely-not-impossible', 'likely-not-certain'] } },
                { id: 'VCMSP298-013', question: 'Die rolled. P(less than 5)?', options: ['4/6', '5/6', '1/5', '3/6'], correctAnswer: 0, explanation: 'Numbers < 5: 1,2,3,4 = 4 outcomes. P = 4/6 = 2/3', difficulty: 2, knowledge: { questionTokens: ['calculating-probability'], correctToken: 'calculating-probability', incorrectTokens: [null, 'included-5', 'inverted', 'excluded-4'] } },
                { id: 'VCMSP298-014', question: 'P(A or B) if A and B are mutually exclusive: P(A)=0.3, P(B)=0.4', options: ['0.12', '0.7', '0.1', '1'], correctAnswer: 1, explanation: 'Mutually exclusive: P(A or B) = P(A) + P(B) = 0.7', difficulty: 2, knowledge: { questionTokens: ['combined-events'], correctToken: 'combined-events', incorrectTokens: ['multiplied', null, 'subtracted', 'wrong-formula'] } },
                { id: 'VCMSP298-015', question: 'Coin flipped 3 times. P(all heads)?', options: ['1/3', '1/8', '3/8', '1/2'], correctAnswer: 1, explanation: 'P = 1/2 × 1/2 × 1/2 = 1/8', difficulty: 3, knowledge: { questionTokens: ['combined-events'], correctToken: 'combined-events', incorrectTokens: ['wrong-formula', null, 'wrong-formula', 'one-flip'] } },
                { id: 'VCMSP298-016', question: 'Deck of cards. P(King or Queen)?', options: ['8/52', '2/52', '1/52', '16/52'], correctAnswer: 0, explanation: '4 Kings + 4 Queens = 8. P = 8/52', difficulty: 2, knowledge: { questionTokens: ['combined-events'], correctToken: 'combined-events', incorrectTokens: [null, 'only-one', 'only-one', 'doubled'] } },
                { id: 'VCMSP298-017', question: 'A and B are complementary. P(A)=0.35. P(B)?', options: ['0.35', '0.65', '1.35', '0'], correctAnswer: 1, explanation: 'Complementary: P(A) + P(B) = 1. P(B) = 0.65', difficulty: 1, knowledge: { questionTokens: ['complementary-events'], correctToken: 'complementary-events', incorrectTokens: ['same-value', null, 'addition-error', 'impossible'] } },
                { id: 'VCMSP298-018', question: 'P(at least one head in two flips)?', options: ['1/4', '1/2', '3/4', '1'], correctAnswer: 2, explanation: 'P(no heads) = 1/4 (TT only). P(at least one) = 1 - 1/4 = 3/4', difficulty: 3, knowledge: { questionTokens: ['complementary-events', 'combined-events'], correctToken: 'complementary-events', incorrectTokens: ['no-heads', 'one-only', null, 'certain'] } },
                { id: 'VCMSP298-019', question: '5 red, 3 blue marbles. One taken, not replaced. Then another. P(both red)?', options: ['25/64', '20/56', '5/8', '2/8'], correctAnswer: 1, explanation: 'P(1st red) = 5/8, P(2nd red) = 4/7. P = 5/8 × 4/7 = 20/56', difficulty: 3, knowledge: { questionTokens: ['combined-events'], correctToken: 'combined-events', incorrectTokens: ['with-replacement', null, 'one-only', 'wrong-calculation'] } },
                { id: 'VCMSP298-020', question: 'Which represents an even chance?', options: ['0', '0.25', '0.5', '1'], correctAnswer: 2, explanation: '0.5 = 50% chance = equally likely to happen or not', difficulty: 1, knowledge: { questionTokens: ['probability-scale'], correctToken: 'probability-scale', incorrectTokens: ['impossible', 'unlikely', null, 'certain'] } },
              ],
            },
            {
              id: 'VCMSP299',
              code: 'VCMSP299',
              title: 'Two-Way Tables and Venn Diagrams',
              description: 'Represent events in two-way tables and Venn diagrams and solve related problems',
              content: `# Two-Way Tables and Venn Diagrams

These tools help us organise and analyse data involving two categories or overlapping groups.

## Two-Way Tables
A two-way table shows data classified by two different categories.

**Example:** Students' sport and gender preferences
|          | Soccer | Tennis | Total |
|----------|--------|--------|-------|
| Boys     | 15     | 10     | 25    |
| Girls    | 12     | 18     | 30    |
| Total    | 27     | 28     | 55    |

From this table we can find:
- P(Boy) = 25/55
- P(Soccer) = 27/55
- P(Boy AND Soccer) = 15/55
- P(Soccer | Boy) = 15/25 (given they're a boy)

## Venn Diagrams
Venn diagrams use overlapping circles to show relationships between sets.

**Key regions:**
- Inside circle A only: elements in A but not B
- Inside circle B only: elements in B but not A
- Overlap (A ∩ B): elements in both A and B
- Outside both: elements in neither A nor B

## Set Notation
- A ∪ B (union): elements in A OR B (or both)
- A ∩ B (intersection): elements in BOTH A AND B
- A' (complement): elements NOT in A

## The Addition Rule
P(A or B) = P(A) + P(B) - P(A and B)

We subtract the overlap to avoid counting it twice.`,
              keyPoints: [
                'Two-way tables organise data by two categories',
                'Venn diagrams show overlapping groups',
                'Intersection (∩) means both/and',
                'Union (∪) means either/or',
                'P(A or B) = P(A) + P(B) - P(A and B)',
              ],
              knowledgeTokens: [
                { id: 'two-way-tables', name: 'Two-Way Tables', description: 'Reading and creating two-way tables' },
                { id: 'venn-diagrams', name: 'Venn Diagrams', description: 'Representing sets with overlapping circles' },
                { id: 'set-notation', name: 'Set Notation', description: 'Understanding ∪, ∩, and complement' },
                { id: 'addition-rule', name: 'Addition Rule', description: 'P(A or B) = P(A) + P(B) - P(A and B)', prerequisites: ['venn-diagrams'] },
              ],
              examples: [
                { problem: 'In a class: 12 play football, 8 play basketball, 5 play both. How many play at least one sport?', solution: '15', explanation: '12 + 8 - 5 = 15 (subtract overlap)' },
                { problem: 'From a two-way table: 20 boys, 15 girls, 10 boys like maths. P(maths|boy)?', solution: '10/20 = 1/2', explanation: 'Given boy, probability of maths = 10/20' },
              ],
              questions: [
                { id: 'VCMSP299-001', question: 'In a Venn diagram, the overlap of circles A and B represents...', options: ['A only', 'B only', 'A and B', 'A or B'], correctAnswer: 2, explanation: 'The overlap shows elements in both sets (intersection)', difficulty: 1, knowledge: { questionTokens: ['venn-diagrams'], correctToken: 'venn-diagrams', incorrectTokens: ['a-only', 'b-only', null, 'union-confusion'] } },
                { id: 'VCMSP299-002', question: 'Set A has 10 elements, set B has 8 elements, overlap has 3. How many in A ∪ B?', options: ['18', '15', '21', '3'], correctAnswer: 1, explanation: '10 + 8 - 3 = 15 (union = A + B - overlap)', difficulty: 2, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: ['just-added', null, 'added-overlap', 'only-overlap'] } },
                { id: 'VCMSP299-003', question: 'What does A ∩ B mean?', options: ['A or B', 'A and B', 'Not A', 'Not B'], correctAnswer: 1, explanation: '∩ (intersection) means elements in both A AND B', difficulty: 1, knowledge: { questionTokens: ['set-notation'], correctToken: 'set-notation', incorrectTokens: ['union-confusion', null, 'complement-confusion', 'complement-confusion'] } },
                { id: 'VCMSP299-004', question: 'Two-way table: 15 boys like pizza, 10 boys like pasta, 20 girls like pizza, 15 girls like pasta. Total students?', options: ['60', '45', '35', '50'], correctAnswer: 0, explanation: '15 + 10 + 20 + 15 = 60', difficulty: 1, knowledge: { questionTokens: ['two-way-tables'], correctToken: 'two-way-tables', incorrectTokens: [null, 'missed-one', 'boys-only', 'wrong-addition'] } },
                { id: 'VCMSP299-005', question: 'From Q4: P(boy)?', options: ['25/60', '35/60', '15/60', '1/2'], correctAnswer: 0, explanation: 'Boys = 15 + 10 = 25. P(boy) = 25/60', difficulty: 2, knowledge: { questionTokens: ['two-way-tables'], correctToken: 'two-way-tables', incorrectTokens: [null, 'girls', 'pizza-boys', 'simplified-wrong'] } },
                { id: 'VCMSP299-006', question: 'What does A ∪ B mean?', options: ['A and B', 'A or B', 'Not A', 'A minus B'], correctAnswer: 1, explanation: '∪ (union) means elements in A OR B (or both)', difficulty: 1, knowledge: { questionTokens: ['set-notation'], correctToken: 'set-notation', incorrectTokens: ['intersection-confusion', null, 'complement-confusion', 'difference'] } },
                { id: 'VCMSP299-007', question: '40 students: 25 play sport, 20 play music, 10 play both. How many play neither?', options: ['5', '10', '15', '0'], correctAnswer: 0, explanation: 'At least one = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5', difficulty: 2, knowledge: { questionTokens: ['addition-rule', 'venn-diagrams'], correctToken: 'addition-rule', incorrectTokens: [null, 'forgot-subtract', 'wrong-calculation', 'forgot-neither'] } },
                { id: 'VCMSP299-008', question: 'In a Venn diagram, what is outside both circles?', options: ['Intersection', 'Union', 'Complement of union', 'Empty set'], correctAnswer: 2, explanation: 'Outside both circles = elements in neither A nor B', difficulty: 2, knowledge: { questionTokens: ['venn-diagrams'], correctToken: 'venn-diagrams', incorrectTokens: ['intersection', 'union', null, 'empty'] } },
                { id: 'VCMSP299-009', question: 'P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Find P(A ∪ B).', options: ['0.9', '0.7', '0.1', '0.3'], correctAnswer: 1, explanation: 'P(A ∪ B) = 0.5 + 0.4 - 0.2 = 0.7', difficulty: 2, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: ['just-added', null, 'just-overlap', 'wrong-subtraction'] } },
                { id: 'VCMSP299-010', question: 'Two-way table: 30 passed maths, 25 passed English, 20 passed both. How many passed at least one?', options: ['75', '35', '55', '20'], correctAnswer: 1, explanation: '30 + 25 - 20 = 35', difficulty: 2, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: ['added-all', null, 'wrong-calculation', 'only-both'] } },
                { id: 'VCMSP299-011', question: 'If A and B are mutually exclusive, what is A ∩ B?', options: ['A', 'B', 'Empty set', 'A ∪ B'], correctAnswer: 2, explanation: 'Mutually exclusive means no overlap, so intersection is empty', difficulty: 2, knowledge: { questionTokens: ['set-notation', 'venn-diagrams'], correctToken: 'set-notation', incorrectTokens: ['wrong', 'wrong', null, 'union'] } },
                { id: 'VCMSP299-012', question: 'Class of 50: 30 like apples, 35 like bananas. Minimum who like both?', options: ['0', '15', '5', '30'], correctAnswer: 1, explanation: '30 + 35 = 65, but only 50 students. Minimum overlap = 65 - 50 = 15', difficulty: 3, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: ['no-overlap', null, 'wrong-calculation', 'wrong-thinking'] } },
                { id: 'VCMSP299-013', question: 'From two-way table: 40 students total, 15 are boys who play sport. P(boy and sport)?', options: ['15/40', '15/25', '25/40', '1/2'], correctAnswer: 0, explanation: 'P(boy AND sport) = 15/40', difficulty: 1, knowledge: { questionTokens: ['two-way-tables'], correctToken: 'two-way-tables', incorrectTokens: [null, 'conditional', 'wrong-value', 'simplified'] } },
                { id: 'VCMSP299-014', question: 'What is A\' (A complement)?', options: ['Elements in A', 'Elements in B', 'Elements not in A', 'A and B'], correctAnswer: 2, explanation: 'Complement means everything NOT in the set', difficulty: 1, knowledge: { questionTokens: ['set-notation'], correctToken: 'set-notation', incorrectTokens: ['no-complement', 'wrong-set', null, 'intersection'] } },
                { id: 'VCMSP299-015', question: '100 people: 60 drink tea, 50 drink coffee, 20 drink both. P(tea or coffee)?', options: ['0.9', '0.7', '1.1', '0.2'], correctAnswer: 0, explanation: 'P = (60 + 50 - 20)/100 = 90/100 = 0.9', difficulty: 2, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: [null, 'forgot-both', 'impossible', 'only-both'] } },
                { id: 'VCMSP299-016', question: 'Venn diagram: Circle A has 15 (only A), overlap has 8, circle B has 12 (only B). Total in A?', options: ['15', '23', '8', '35'], correctAnswer: 1, explanation: 'Total in A = only A + overlap = 15 + 8 = 23', difficulty: 2, knowledge: { questionTokens: ['venn-diagrams'], correctToken: 'venn-diagrams', incorrectTokens: ['only-a', null, 'just-overlap', 'all'] } },
                { id: 'VCMSP299-017', question: 'If P(A) = 0.6 and P(A\') = ?', options: ['0.6', '0.4', '1.6', '0'], correctAnswer: 1, explanation: 'P(A\') = 1 - P(A) = 1 - 0.6 = 0.4', difficulty: 1, knowledge: { questionTokens: ['set-notation'], correctToken: 'set-notation', incorrectTokens: ['same', null, 'added', 'zero'] } },
                { id: 'VCMSP299-018', question: 'Two-way table shows 12 boys passed, 8 boys failed, 15 girls passed, 5 girls failed. P(pass|girl)?', options: ['15/40', '15/20', '27/40', '3/4'], correctAnswer: 3, explanation: 'Girls = 20. Girls who passed = 15. P = 15/20 = 3/4', difficulty: 3, knowledge: { questionTokens: ['two-way-tables'], correctToken: 'two-way-tables', incorrectTokens: ['wrong-denominator', 'unsimplified', 'all-passes', null] } },
                { id: 'VCMSP299-019', question: 'A ∪ B has 50 elements. A has 30, B has 35. How many in A ∩ B?', options: ['15', '65', '20', '85'], correctAnswer: 0, explanation: '50 = 30 + 35 - overlap. Overlap = 15', difficulty: 3, knowledge: { questionTokens: ['addition-rule'], correctToken: 'addition-rule', incorrectTokens: [null, 'just-added', 'wrong-calculation', 'wrong-operation'] } },
                { id: 'VCMSP299-020', question: 'In a Venn diagram with two circles, how many regions are there?', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'Only A, Only B, Both (overlap), Neither (outside) = 4 regions', difficulty: 2, knowledge: { questionTokens: ['venn-diagrams'], correctToken: 'venn-diagrams', incorrectTokens: ['circles-only', 'forgot-neither', null, 'wrong-count'] } },
              ],
            },
            {
              id: 'VCMSP300',
              code: 'VCMSP300',
              title: 'Data Displays and Analysis',
              description: 'Explore the practicalities and implications of obtaining data through sampling using a variety of investigative processes',
              content: `# Data Displays and Analysis

Different types of graphs are suited to different types of data.

## Types of Data
- **Categorical**: Data in categories (colours, types, names)
- **Numerical - Discrete**: Counted values (number of students, goals scored)
- **Numerical - Continuous**: Measured values (height, weight, time)

## Common Graph Types

### Column/Bar Graphs
- Best for comparing categorical data
- Bars can be horizontal or vertical
- Gaps between bars

### Histograms
- For continuous numerical data
- Bars touch (no gaps)
- Shows frequency distribution

### Line Graphs
- Show change over time
- Points connected by lines
- Good for trends

### Pie Charts
- Show parts of a whole
- Each sector is a proportion
- Total = 360°

### Scatter Plots
- Show relationship between two variables
- Each point represents one data item
- Look for patterns/correlations

### Stem-and-Leaf Plots
- Organise numerical data
- Stem = tens digit, leaf = units
- Keeps original values visible

## Analysing Data
- Look for clusters, gaps, outliers
- Identify trends and patterns
- Compare using mean, median, mode, range`,
              keyPoints: [
                'Choose graph type based on data type',
                'Histograms for continuous data (no gaps)',
                'Bar graphs for categorical data (with gaps)',
                'Scatter plots show relationships between variables',
                'Always label axes and give titles',
              ],
              knowledgeTokens: [
                { id: 'data-types', name: 'Data Types', description: 'Categorical, discrete, continuous' },
                { id: 'bar-graphs', name: 'Bar Graphs', description: 'Displaying categorical data' },
                { id: 'histograms', name: 'Histograms', description: 'Displaying continuous data', prerequisites: ['data-types'] },
                { id: 'scatter-plots', name: 'Scatter Plots', description: 'Showing relationships between variables' },
                { id: 'interpreting-graphs', name: 'Interpreting Graphs', description: 'Reading and analysing data displays', prerequisites: ['bar-graphs', 'histograms'] },
              ],
              examples: [
                { problem: 'What type of graph shows favourite colours of students?', solution: 'Bar graph (or pie chart)', explanation: 'Favourite colour is categorical data - use bar graph or pie chart' },
                { problem: 'What graph would show relationship between study time and test scores?', solution: 'Scatter plot', explanation: 'Scatter plots show relationships between two numerical variables' },
              ],
              questions: [
                { id: 'VCMSP300-001', question: 'Which graph is best for showing favourite sports of students?', options: ['Histogram', 'Bar graph', 'Line graph', 'Scatter plot'], correctAnswer: 1, explanation: 'Favourite sport is categorical data - use a bar graph', difficulty: 1, knowledge: { questionTokens: ['bar-graphs'], correctToken: 'bar-graphs', incorrectTokens: ['histogram-error', null, 'line-error', 'scatter-error'] } },
                { id: 'VCMSP300-002', question: 'What is the main difference between a bar graph and histogram?', options: ['Colours used', 'Gaps between bars', 'Size of bars', 'Number of bars'], correctAnswer: 1, explanation: 'Histograms have no gaps (continuous data), bar graphs have gaps (categorical)', difficulty: 2, knowledge: { questionTokens: ['bar-graphs', 'histograms'], correctToken: 'histograms', incorrectTokens: ['irrelevant', null, 'irrelevant', 'irrelevant'] } },
                { id: 'VCMSP300-003', question: 'Number of siblings is what type of data?', options: ['Categorical', 'Discrete numerical', 'Continuous numerical', 'None'], correctAnswer: 1, explanation: 'Number of siblings is counted (0, 1, 2...) - discrete numerical', difficulty: 1, knowledge: { questionTokens: ['data-types'], correctToken: 'data-types', incorrectTokens: ['categorical-error', null, 'continuous-error', 'confused'] } },
                { id: 'VCMSP300-004', question: 'Height of students is what type of data?', options: ['Categorical', 'Discrete numerical', 'Continuous numerical', 'None'], correctAnswer: 2, explanation: 'Height is measured - continuous numerical data', difficulty: 1, knowledge: { questionTokens: ['data-types'], correctToken: 'data-types', incorrectTokens: ['categorical-error', 'discrete-error', null, 'confused'] } },
                { id: 'VCMSP300-005', question: 'Which graph shows change over time best?', options: ['Pie chart', 'Bar graph', 'Line graph', 'Histogram'], correctAnswer: 2, explanation: 'Line graphs show trends and changes over time', difficulty: 1, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['pie-error', 'bar-error', null, 'histogram-error'] } },
                { id: 'VCMSP300-006', question: 'A scatter plot shows relationship between height and weight. Points go up from left to right. This is...', options: ['No correlation', 'Negative correlation', 'Positive correlation', 'Perfect correlation'], correctAnswer: 2, explanation: 'Points going up from left to right = positive correlation', difficulty: 2, knowledge: { questionTokens: ['scatter-plots'], correctToken: 'scatter-plots', incorrectTokens: ['no-pattern', 'wrong-direction', null, 'too-strong'] } },
                { id: 'VCMSP300-007', question: 'In a stem-and-leaf plot, the number 47 has stem...', options: ['4', '7', '47', '74'], correctAnswer: 0, explanation: 'Stem = tens digit = 4, Leaf = units = 7', difficulty: 1, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: [null, 'leaf-confusion', 'whole-number', 'reversed'] } },
                { id: 'VCMSP300-008', question: 'A pie chart has a sector of 90°. What fraction of the total is this?', options: ['1/2', '1/4', '1/3', '1/6'], correctAnswer: 1, explanation: '90° out of 360° = 90/360 = 1/4', difficulty: 2, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['wrong-calculation', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMSP300-009', question: 'Eye colour is what type of data?', options: ['Categorical', 'Discrete', 'Continuous', 'Numerical'], correctAnswer: 0, explanation: 'Eye colour is a category, not a number', difficulty: 1, knowledge: { questionTokens: ['data-types'], correctToken: 'data-types', incorrectTokens: [null, 'discrete-error', 'continuous-error', 'numerical-error'] } },
                { id: 'VCMSP300-010', question: 'A histogram showing heights has bars for 150-160, 160-170, 170-180. A height of 160cm goes in which bar?', options: ['150-160', '160-170', 'Either', 'Neither'], correctAnswer: 1, explanation: 'Typically, endpoints go in the higher interval (160-170)', difficulty: 2, knowledge: { questionTokens: ['histograms'], correctToken: 'histograms', incorrectTokens: ['wrong-interval', null, 'unclear', 'excluded'] } },
                { id: 'VCMSP300-011', question: 'Which graph would show the proportion of budget spent on different categories?', options: ['Line graph', 'Scatter plot', 'Pie chart', 'Histogram'], correctAnswer: 2, explanation: 'Pie charts show parts of a whole - perfect for budget proportions', difficulty: 1, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['line-error', 'scatter-error', null, 'histogram-error'] } },
                { id: 'VCMSP300-012', question: 'A scatter plot shows no clear pattern. This suggests...', options: ['Positive correlation', 'Negative correlation', 'No correlation', 'Error in data'], correctAnswer: 2, explanation: 'No clear pattern = no correlation between variables', difficulty: 2, knowledge: { questionTokens: ['scatter-plots'], correctToken: 'scatter-plots', incorrectTokens: ['positive-error', 'negative-error', null, 'error-assumption'] } },
                { id: 'VCMSP300-013', question: 'Stem-and-leaf: 3|2 5 7 means...', options: ['3, 2, 5, 7', '32, 35, 37', '23, 53, 73', '3.2, 3.5, 3.7'], correctAnswer: 1, explanation: 'Stem 3 with leaves 2, 5, 7 = 32, 35, 37', difficulty: 2, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['separate-numbers', null, 'reversed', 'decimal-error'] } },
                { id: 'VCMSP300-014', question: 'Which is NOT suitable for showing monthly sales over a year?', options: ['Line graph', 'Bar graph', 'Pie chart', 'Both A and B are suitable'], correctAnswer: 2, explanation: 'Pie chart shows parts of a whole, not change over time', difficulty: 2, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['line-wrong', 'bar-wrong', null, 'both-wrong'] } },
                { id: 'VCMSP300-015', question: 'In a histogram, what does the height of a bar represent?', options: ['The data value', 'The frequency', 'The mean', 'The range'], correctAnswer: 1, explanation: 'Bar height shows frequency (how many in that interval)', difficulty: 1, knowledge: { questionTokens: ['histograms'], correctToken: 'histograms', incorrectTokens: ['value-confusion', null, 'mean-confusion', 'range-confusion'] } },
                { id: 'VCMSP300-016', question: 'A pie chart has 25% for "Other". What angle is this sector?', options: ['25°', '90°', '45°', '100°'], correctAnswer: 1, explanation: '25% of 360° = 0.25 × 360 = 90°', difficulty: 2, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['percentage-as-angle', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMSP300-017', question: 'Temperature throughout a day is best shown by...', options: ['Pie chart', 'Bar graph', 'Line graph', 'Stem-and-leaf'], correctAnswer: 2, explanation: 'Line graph shows continuous change over time', difficulty: 1, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['pie-error', 'bar-error', null, 'stem-error'] } },
                { id: 'VCMSP300-018', question: 'What does a downward trend on a scatter plot indicate?', options: ['Positive correlation', 'Negative correlation', 'No correlation', 'Perfect correlation'], correctAnswer: 1, explanation: 'Downward trend = as one variable increases, other decreases = negative', difficulty: 2, knowledge: { questionTokens: ['scatter-plots'], correctToken: 'scatter-plots', incorrectTokens: ['positive-confusion', null, 'no-pattern', 'perfect-confusion'] } },
                { id: 'VCMSP300-019', question: 'Survey results show: 20 prefer A, 15 prefer B, 25 prefer C. Total degrees for A in pie chart?', options: ['20°', '120°', '72°', '100°'], correctAnswer: 1, explanation: 'Total = 60. A = 20/60 = 1/3. Angle = 360 × 1/3 = 120°', difficulty: 3, knowledge: { questionTokens: ['interpreting-graphs'], correctToken: 'interpreting-graphs', incorrectTokens: ['count-as-angle', null, 'wrong-calculation', 'wrong-calculation'] } },
                { id: 'VCMSP300-020', question: 'Which statement about outliers in a scatter plot is TRUE?', options: ['They should be removed', 'They are points far from the pattern', 'They prove correlation', 'They always indicate errors'], correctAnswer: 1, explanation: 'Outliers are points far from the general pattern - they may or may not be errors', difficulty: 2, knowledge: { questionTokens: ['scatter-plots'], correctToken: 'scatter-plots', incorrectTokens: ['remove-assumption', null, 'prove-error', 'error-assumption'] } },
              ],
            },
            {
              id: 'VCMSP301',
              code: 'VCMSP301',
              title: 'Sampling and Surveys',
              description: 'Investigate techniques for collecting data, including census, sampling and observation',
              content: `# Sampling and Surveys

Data collection methods affect the reliability and usefulness of results.

## Census vs Sample

### Census
- Collects data from **every** member of a population
- Accurate but expensive and time-consuming
- Example: National census every 5 years

### Sample
- Collects data from a **subset** of the population
- Quicker and cheaper
- Must be representative of the population

## Sampling Methods

### Random Sampling
- Each member has equal chance of selection
- Removes bias
- Example: Draw names from a hat

### Systematic Sampling
- Select every nth member
- Example: Every 10th student on a roll

### Stratified Sampling
- Population divided into groups (strata)
- Sample proportionally from each group
- Example: Sample same % of boys and girls

### Convenience Sampling
- Choose whoever is available
- Quick but often biased
- Example: Survey people in a mall

## Sources of Bias

- **Selection bias**: Sample not representative
- **Question bias**: Leading or confusing questions
- **Response bias**: People don't answer truthfully
- **Non-response bias**: Some people don't respond

## Designing Good Surveys
- Use clear, neutral questions
- Avoid leading questions
- Include all relevant options
- Test survey before using
- Ensure sample is representative`,
              keyPoints: [
                'Census: every member; Sample: subset of population',
                'Random sampling gives everyone equal chance',
                'Stratified sampling ensures proportional representation',
                'Bias can affect data collection reliability',
                'Good survey design uses neutral, clear questions',
              ],
              knowledgeTokens: [
                { id: 'census-vs-sample', name: 'Census vs Sample', description: 'Understanding when to use each method' },
                { id: 'random-sampling', name: 'Random Sampling', description: 'Equal chance selection method' },
                { id: 'stratified-sampling', name: 'Stratified Sampling', description: 'Proportional sampling from groups' },
                { id: 'sampling-bias', name: 'Sampling Bias', description: 'Sources of error in data collection', prerequisites: ['census-vs-sample'] },
                { id: 'survey-design', name: 'Survey Design', description: 'Creating effective questionnaires', prerequisites: ['sampling-bias'] },
              ],
              examples: [
                { problem: 'A school has 400 boys and 600 girls. For a stratified sample of 50 students, how many boys?', solution: '20 boys', explanation: 'Boys = 400/1000 = 40%. So 40% of 50 = 20 boys' },
                { problem: 'Is "Don\'t you agree exercise is important?" a good survey question?', solution: 'No - it\'s a leading question', explanation: 'The question pushes respondents toward "yes"' },
              ],
              questions: [
                { id: 'VCMSP301-001', question: 'A census collects data from...', options: ['A random sample', 'Every member of the population', 'Only volunteers', 'The largest group'], correctAnswer: 1, explanation: 'Census = data from every member of the population', difficulty: 1, knowledge: { questionTokens: ['census-vs-sample'], correctToken: 'census-vs-sample', incorrectTokens: ['sample-confusion', null, 'volunteer-error', 'largest-error'] } },
                { id: 'VCMSP301-002', question: 'Which sampling method gives everyone equal chance of selection?', options: ['Convenience', 'Random', 'Stratified', 'Systematic'], correctAnswer: 1, explanation: 'Random sampling gives each member equal probability', difficulty: 1, knowledge: { questionTokens: ['random-sampling'], correctToken: 'random-sampling', incorrectTokens: ['convenience-error', null, 'stratified-error', 'systematic-error'] } },
                { id: 'VCMSP301-003', question: 'Surveying only your friends about favourite music is likely to have...', options: ['No bias', 'Selection bias', 'Response bias', 'Perfect accuracy'], correctAnswer: 1, explanation: 'Friends may have similar tastes - not representative of wider population', difficulty: 2, knowledge: { questionTokens: ['sampling-bias'], correctToken: 'sampling-bias', incorrectTokens: ['no-bias', null, 'response-confusion', 'accuracy-error'] } },
                { id: 'VCMSP301-004', question: 'A population has 60% adults and 40% children. A stratified sample of 100 should have how many children?', options: ['40', '50', '60', '100'], correctAnswer: 0, explanation: '40% of 100 = 40 children', difficulty: 2, knowledge: { questionTokens: ['stratified-sampling'], correctToken: 'stratified-sampling', incorrectTokens: [null, 'half-error', 'adults', 'whole-error'] } },
                { id: 'VCMSP301-005', question: 'Which is an advantage of using a sample instead of a census?', options: ['More accurate', 'Faster and cheaper', 'No bias', 'Includes everyone'], correctAnswer: 1, explanation: 'Samples are faster and cheaper than surveying everyone', difficulty: 1, knowledge: { questionTokens: ['census-vs-sample'], correctToken: 'census-vs-sample', incorrectTokens: ['accuracy-confusion', null, 'bias-error', 'census-description'] } },
                { id: 'VCMSP301-006', question: '"Do you agree our amazing new product is the best?" This question has...', options: ['No issues', 'Question bias', 'Good neutrality', 'Random sampling'], correctAnswer: 1, explanation: 'Words like "amazing" and "best" are leading and biased', difficulty: 2, knowledge: { questionTokens: ['survey-design'], correctToken: 'survey-design', incorrectTokens: ['no-issue-error', null, 'neutral-error', 'sampling-confusion'] } },
                { id: 'VCMSP301-007', question: 'Selecting every 5th person from a list is called...', options: ['Random sampling', 'Convenience sampling', 'Systematic sampling', 'Stratified sampling'], correctAnswer: 2, explanation: 'Selecting every nth item is systematic sampling', difficulty: 1, knowledge: { questionTokens: ['random-sampling'], correctToken: 'random-sampling', incorrectTokens: ['random-confusion', 'convenience-error', null, 'stratified-error'] } },
                { id: 'VCMSP301-008', question: 'A sample is biased if...', options: ['It is too small', 'It is not representative of the population', 'It uses random selection', 'It includes everyone'], correctAnswer: 1, explanation: 'Bias means the sample doesn\'t represent the population well', difficulty: 2, knowledge: { questionTokens: ['sampling-bias'], correctToken: 'sampling-bias', incorrectTokens: ['size-error', null, 'random-error', 'census-confusion'] } },
                { id: 'VCMSP301-009', question: 'Why might a census be impractical for counting fish in a lake?', options: ['Fish can\'t read surveys', 'Impossible to catch every fish', 'Census is too accurate', 'Fish don\'t have opinions'], correctAnswer: 1, explanation: 'You cannot realistically count every single fish', difficulty: 2, knowledge: { questionTokens: ['census-vs-sample'], correctToken: 'census-vs-sample', incorrectTokens: ['silly-answer', null, 'accuracy-confusion', 'opinion-error'] } },
                { id: 'VCMSP301-010', question: 'For a school with Years 7-12, which ensures each year level is represented?', options: ['Random sampling', 'Convenience sampling', 'Stratified sampling', 'Voluntary response'], correctAnswer: 2, explanation: 'Stratified sampling ensures each group (year level) is represented', difficulty: 2, knowledge: { questionTokens: ['stratified-sampling'], correctToken: 'stratified-sampling', incorrectTokens: ['random-error', 'convenience-error', null, 'voluntary-error'] } },
                { id: 'VCMSP301-011', question: 'Survey response rate is 20%. This could cause...', options: ['Selection bias', 'Non-response bias', 'Question bias', 'No bias at all'], correctAnswer: 1, explanation: 'Low response rate means non-responders might differ from responders', difficulty: 2, knowledge: { questionTokens: ['sampling-bias'], correctToken: 'sampling-bias', incorrectTokens: ['selection-confusion', null, 'question-confusion', 'no-bias-error'] } },
                { id: 'VCMSP301-012', question: 'Which question is neutral and unbiased?', options: ['Don\'t you think homework is too much?', 'Do you hate or love homework?', 'How do you feel about the amount of homework assigned?', 'Homework is great, right?'], correctAnswer: 2, explanation: 'This question is neutral and doesn\'t suggest an answer', difficulty: 2, knowledge: { questionTokens: ['survey-design'], correctToken: 'survey-design', incorrectTokens: ['leading-negative', 'extreme-options', null, 'leading-positive'] } },
                { id: 'VCMSP301-013', question: 'A town has 30,000 residents. A sample of 300 is selected. What percentage is sampled?', options: ['1%', '10%', '0.1%', '100%'], correctAnswer: 0, explanation: '300/30,000 = 0.01 = 1%', difficulty: 2, knowledge: { questionTokens: ['census-vs-sample'], correctToken: 'census-vs-sample', incorrectTokens: [null, 'calculation-error', 'decimal-error', 'census-confusion'] } },
                { id: 'VCMSP301-014', question: 'Surveying people at a gym about exercise habits would likely produce...', options: ['Unbiased results', 'Results biased toward more exercise', 'Random results', 'Census data'], correctAnswer: 1, explanation: 'Gym-goers exercise more than average - sample is biased', difficulty: 2, knowledge: { questionTokens: ['sampling-bias'], correctToken: 'sampling-bias', incorrectTokens: ['unbiased-error', null, 'random-error', 'census-confusion'] } },
                { id: 'VCMSP301-015', question: 'Population: 200 seniors, 300 juniors. Stratified sample of 50. How many seniors?', options: ['20', '25', '30', '50'], correctAnswer: 0, explanation: 'Seniors = 200/500 = 40%. 40% of 50 = 20', difficulty: 3, knowledge: { questionTokens: ['stratified-sampling'], correctToken: 'stratified-sampling', incorrectTokens: [null, 'half-error', 'juniors', 'all-error'] } },
                { id: 'VCMSP301-016', question: 'Which is a disadvantage of a census?', options: ['Not accurate', 'Too expensive and time-consuming', 'Sample is too small', 'Results are biased'], correctAnswer: 1, explanation: 'Census requires surveying everyone - very expensive and slow', difficulty: 1, knowledge: { questionTokens: ['census-vs-sample'], correctToken: 'census-vs-sample', incorrectTokens: ['accuracy-error', null, 'sample-confusion', 'bias-error'] } },
                { id: 'VCMSP301-017', question: 'To avoid response bias, surveys should...', options: ['Use leading questions', 'Be anonymous when possible', 'Only ask friends', 'Ignore some answers'], correctAnswer: 1, explanation: 'Anonymous surveys encourage honest responses', difficulty: 2, knowledge: { questionTokens: ['survey-design'], correctToken: 'survey-design', incorrectTokens: ['leading-error', null, 'selection-error', 'ignore-error'] } },
                { id: 'VCMSP301-018', question: 'A random number generator selects student IDs for a survey. This is...', options: ['Convenience sampling', 'Stratified sampling', 'Random sampling', 'Systematic sampling'], correctAnswer: 2, explanation: 'Random number generator gives each student equal chance', difficulty: 1, knowledge: { questionTokens: ['random-sampling'], correctToken: 'random-sampling', incorrectTokens: ['convenience-error', 'stratified-error', null, 'systematic-error'] } },
                { id: 'VCMSP301-019', question: 'Why might stratified sampling be better than simple random sampling for a school survey?', options: ['It\'s faster', 'It ensures all year levels are represented', 'It requires fewer people', 'It\'s more random'], correctAnswer: 1, explanation: 'Stratified sampling guarantees representation from each group', difficulty: 3, knowledge: { questionTokens: ['stratified-sampling'], correctToken: 'stratified-sampling', incorrectTokens: ['speed-error', null, 'size-error', 'random-error'] } },
                { id: 'VCMSP301-020', question: 'A survey option reads: "Excellent, Very Good, Good, Fair, Poor". This is a...', options: ['Biased scale', 'Balanced rating scale', 'Leading question', 'Yes/no question'], correctAnswer: 0, explanation: 'Three positive options (Excellent, Very Good, Good) vs two neutral/negative is unbalanced', difficulty: 3, knowledge: { questionTokens: ['survey-design'], correctToken: 'survey-design', incorrectTokens: [null, 'balanced-error', 'leading-confusion', 'type-error'] } },
              ],
            },
            {
              id: 'VCMSP302',
              code: 'VCMSP302',
              title: 'Probability and Tree Diagrams',
              description: 'Identify complementary events and use sum of probabilities to solve problems',
              content: `# Probability and Tree Diagrams

Tree diagrams help us visualise and calculate probabilities for multi-stage events.

## Tree Diagram Basics

Each branch represents a possible outcome with its probability.

### Example: Two coin flips
         Start
        /     \\
     H(½)     T(½)
    /   \\    /   \\
  H(½) T(½) H(½) T(½)

Outcomes: HH, HT, TH, TT (each with probability ¼)

## Calculating Probabilities

**Multiply along branches** to find probability of a path.

P(HH) = ½ × ½ = ¼

**Add probabilities** for "OR" situations.

P(exactly one head) = P(HT) + P(TH) = ¼ + ¼ = ½

## With Replacement vs Without

### With Replacement
- Probabilities stay the same
- Events are independent

### Without Replacement
- Probabilities change after each selection
- Events are dependent

**Example:** Bag with 3 red, 2 blue balls. Pick two without replacement.

First pick: P(red) = 3/5
Second pick (if first was red): P(red) = 2/4 = ½

## Complementary Events

P(A) + P(not A) = 1

P(at least one head) = 1 - P(no heads) = 1 - ¼ = ¾

## Expected Frequency

Expected frequency = Probability × Number of trials

If P(heads) = 0.5 and we flip 100 times:
Expected heads = 0.5 × 100 = 50`,
              keyPoints: [
                'Multiply along branches for AND',
                'Add branches for OR',
                'With replacement: probabilities unchanged',
                'Without replacement: probabilities change',
                'P(A) + P(not A) = 1',
              ],
              knowledgeTokens: [
                { id: 'tree-diagrams', name: 'Tree Diagrams', description: 'Drawing probability trees' },
                { id: 'multiply-branches', name: 'Multiplying Branches', description: 'Finding probability of a path' },
                { id: 'with-without-replacement', name: 'With/Without Replacement', description: 'How selection affects probability' },
                { id: 'complementary-probability', name: 'Complementary Events', description: 'P(A) + P(not A) = 1', prerequisites: ['multiply-branches'] },
                { id: 'expected-frequency', name: 'Expected Frequency', description: 'Probability × trials', prerequisites: ['multiply-branches'] },
              ],
              examples: [
                { problem: 'Coin flipped twice. P(two heads)?', solution: '1/4', explanation: 'P(HH) = ½ × ½ = ¼' },
                { problem: 'Bag: 4 red, 6 blue. Two picks with replacement. P(both red)?', solution: '4/25', explanation: 'P(R then R) = 4/10 × 4/10 = 16/100 = 4/25' },
              ],
              questions: [
                { id: 'VCMSP302-001', question: 'A coin is flipped twice. How many possible outcomes?', options: ['2', '3', '4', '8'], correctAnswer: 2, explanation: 'HH, HT, TH, TT = 4 outcomes', difficulty: 1, knowledge: { questionTokens: ['tree-diagrams'], correctToken: 'tree-diagrams', incorrectTokens: ['one-flip', 'wrong-count', null, 'three-flips'] } },
                { id: 'VCMSP302-002', question: 'P(heads then heads) for two fair coin flips?', options: ['1/2', '1/4', '1/8', '1'], correctAnswer: 1, explanation: 'P(HH) = ½ × ½ = ¼', difficulty: 1, knowledge: { questionTokens: ['multiply-branches'], correctToken: 'multiply-branches', incorrectTokens: ['one-flip', null, 'three-flips', 'certain'] } },
                { id: 'VCMSP302-003', question: 'If P(rain) = 0.3, what is P(no rain)?', options: ['0.3', '0.7', '1.3', '0'], correctAnswer: 1, explanation: 'P(no rain) = 1 - 0.3 = 0.7', difficulty: 1, knowledge: { questionTokens: ['complementary-probability'], correctToken: 'complementary-probability', incorrectTokens: ['same', null, 'added', 'impossible'] } },
                { id: 'VCMSP302-004', question: 'Bag has 5 red, 5 blue. Pick with replacement. P(red then blue)?', options: ['1/2', '1/4', '5/9', '1/10'], correctAnswer: 1, explanation: 'P(R) = 5/10 = ½, P(B) = ½. P(RB) = ½ × ½ = ¼', difficulty: 2, knowledge: { questionTokens: ['multiply-branches'], correctToken: 'multiply-branches', incorrectTokens: ['one-pick', null, 'no-replacement', 'wrong-calculation'] } },
                { id: 'VCMSP302-005', question: 'Bag has 3 red, 2 blue. First pick is red (without replacement). P(second is red)?', options: ['3/5', '2/4', '2/5', '3/4'], correctAnswer: 1, explanation: 'After removing 1 red: 2 red left, 4 total. P = 2/4 = 1/2', difficulty: 2, knowledge: { questionTokens: ['with-without-replacement'], correctToken: 'with-without-replacement', incorrectTokens: ['with-replacement', null, 'wrong-total', 'wrong-red'] } },
                { id: 'VCMSP302-006', question: 'Two dice rolled. P(both show 6)?', options: ['1/6', '1/12', '1/36', '2/6'], correctAnswer: 2, explanation: 'P(6 then 6) = 1/6 × 1/6 = 1/36', difficulty: 2, knowledge: { questionTokens: ['multiply-branches'], correctToken: 'multiply-branches', incorrectTokens: ['one-die', 'added', null, 'simplified-wrong'] } },
                { id: 'VCMSP302-007', question: 'P(at least one head in two flips)?', options: ['1/4', '1/2', '3/4', '1'], correctAnswer: 2, explanation: 'P(at least one H) = 1 - P(TT) = 1 - ¼ = ¾', difficulty: 2, knowledge: { questionTokens: ['complementary-probability'], correctToken: 'complementary-probability', incorrectTokens: ['P(HH)', 'P(one-H)', null, 'certain'] } },
                { id: 'VCMSP302-008', question: 'With replacement means...', options: ['Item removed permanently', 'Item put back before next pick', 'Same item picked twice', 'No items left'], correctAnswer: 1, explanation: 'With replacement: put item back, probabilities stay same', difficulty: 1, knowledge: { questionTokens: ['with-without-replacement'], correctToken: 'with-without-replacement', incorrectTokens: ['without', null, 'confused', 'wrong'] } },
                { id: 'VCMSP302-009', question: 'Coin flipped 200 times. Expected heads?', options: ['50', '100', '200', '150'], correctAnswer: 1, explanation: 'Expected = P(H) × trials = 0.5 × 200 = 100', difficulty: 1, knowledge: { questionTokens: ['expected-frequency'], correctToken: 'expected-frequency', incorrectTokens: ['quarter', null, 'all', 'three-quarter'] } },
                { id: 'VCMSP302-010', question: 'Spinner: P(red)=0.4. Spun 50 times. Expected red?', options: ['20', '40', '4', '10'], correctAnswer: 0, explanation: 'Expected = 0.4 × 50 = 20', difficulty: 1, knowledge: { questionTokens: ['expected-frequency'], correctToken: 'expected-frequency', incorrectTokens: [null, 'no-multiply', 'divided', 'wrong-calculation'] } },
                { id: 'VCMSP302-011', question: 'P(A) = 0.6, P(B) = 0.3. A and B independent. P(A and B)?', options: ['0.9', '0.18', '0.3', '0.6'], correctAnswer: 1, explanation: 'Independent: P(A and B) = P(A) × P(B) = 0.6 × 0.3 = 0.18', difficulty: 2, knowledge: { questionTokens: ['multiply-branches'], correctToken: 'multiply-branches', incorrectTokens: ['added', null, 'just-B', 'just-A'] } },
                { id: 'VCMSP302-012', question: 'Bag: 4 red, 6 green. Two picks without replacement. P(both green)?', options: ['36/100', '30/90', '6/10', '9/25'], correctAnswer: 1, explanation: 'P(G then G) = 6/10 × 5/9 = 30/90 = 1/3', difficulty: 2, knowledge: { questionTokens: ['with-without-replacement'], correctToken: 'with-without-replacement', incorrectTokens: ['with-replacement', null, 'one-pick', 'wrong-simplify'] } },
                { id: 'VCMSP302-013', question: 'Three coins flipped. P(all heads)?', options: ['1/2', '1/4', '1/8', '3/8'], correctAnswer: 2, explanation: 'P(HHH) = ½ × ½ × ½ = 1/8', difficulty: 2, knowledge: { questionTokens: ['multiply-branches'], correctToken: 'multiply-branches', incorrectTokens: ['one-flip', 'two-flips', null, 'added'] } },
                { id: 'VCMSP302-014', question: 'P(event A) = 0. Event A is...', options: ['Certain', 'Likely', 'Impossible', 'Unlikely'], correctAnswer: 2, explanation: 'P = 0 means impossible (will never happen)', difficulty: 1, knowledge: { questionTokens: ['complementary-probability'], correctToken: 'complementary-probability', incorrectTokens: ['p-equals-1', 'p-high', null, 'p-low'] } },
                { id: 'VCMSP302-015', question: 'Die rolled 60 times. Expected number of 5s?', options: ['5', '10', '12', '30'], correctAnswer: 1, explanation: 'Expected = 1/6 × 60 = 10', difficulty: 1, knowledge: { questionTokens: ['expected-frequency'], correctToken: 'expected-frequency', incorrectTokens: ['confused', null, 'wrong-calculation', 'half'] } },
                { id: 'VCMSP302-016', question: 'Two coin flips. P(exactly one head)?', options: ['1/4', '1/2', '3/4', '1'], correctAnswer: 1, explanation: 'P(HT or TH) = ¼ + ¼ = ½', difficulty: 2, knowledge: { questionTokens: ['tree-diagrams'], correctToken: 'tree-diagrams', incorrectTokens: ['two-heads', null, 'at-least-one', 'certain'] } },
                { id: 'VCMSP302-017', question: 'Bag: 2 red, 3 blue. P(red then blue) without replacement?', options: ['6/25', '6/20', '5/20', '2/5'], correctAnswer: 1, explanation: 'P(R) = 2/5, P(B|R) = 3/4. P(RB) = 2/5 × 3/4 = 6/20', difficulty: 3, knowledge: { questionTokens: ['with-without-replacement'], correctToken: 'with-without-replacement', incorrectTokens: ['with-replacement', null, 'wrong-second', 'forgot-multiply'] } },
                { id: 'VCMSP302-018', question: 'P(A or B) when A and B cannot both happen?', options: ['P(A) × P(B)', 'P(A) + P(B)', 'P(A) - P(B)', 'P(A) ÷ P(B)'], correctAnswer: 1, explanation: 'Mutually exclusive events: P(A or B) = P(A) + P(B)', difficulty: 2, knowledge: { questionTokens: ['tree-diagrams'], correctToken: 'tree-diagrams', incorrectTokens: ['multiply', null, 'subtract', 'divide'] } },
                { id: 'VCMSP302-019', question: 'Spinner P(blue)=0.25. How many blues expected in 80 spins?', options: ['25', '20', '40', '10'], correctAnswer: 1, explanation: 'Expected = 0.25 × 80 = 20', difficulty: 2, knowledge: { questionTokens: ['expected-frequency'], correctToken: 'expected-frequency', incorrectTokens: ['percent-confusion', null, 'half', 'wrong-calculation'] } },
                { id: 'VCMSP302-020', question: 'Two dice. P(sum is 7)?', options: ['1/6', '7/36', '6/36', '2/12'], correctAnswer: 2, explanation: '6 ways to make 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). P = 6/36 = 1/6', difficulty: 3, knowledge: { questionTokens: ['tree-diagrams'], correctToken: 'tree-diagrams', incorrectTokens: [null, 'wrong-count', null, 'wrong-simplify'] } },
              ],
            },
          ],
        },
      ],
    },
  ],
};
