import createMathOperation from './.internal/createMathOperation.js'

/**
 * Multiply two numbers.
 *
 * @since 4.7.0
 * @category Math
 * @example
 *   multiply(6, 4)
 *   // => 24
 *
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} Returns the product.
 */
const multiply = createMathOperation(
  (multiplier, multiplicand) => multiplier * multiplicand,
  1
)

export default multiply
