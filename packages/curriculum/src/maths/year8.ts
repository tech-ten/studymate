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
          ],
        },
      ],
    },
  ],
};
