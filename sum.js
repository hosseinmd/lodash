import baseSum from './.internal/baseSum.js'

/**
 * Computes the sum of the values in `array`.
 *
 * @since 3.4.0
 * @category Math
 * @example
 *   sum([4, 2, 8, 6])
 *   // => 20
 *
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 */
function sum(array) {
  return array != null && array.length ? baseSum(array, (value) => value) : 0
}

export default sum
