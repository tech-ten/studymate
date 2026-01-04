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
      ],
    },
  ],
};
