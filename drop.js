import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @example
 *   drop([1, 2, 3])
 *   // => [2, 3]
 *
 *   drop([1, 2, 3], 2)
 *   // => [3]
 *
 *   drop([1, 2, 3], 5)
 *   // => []
 *
 *   drop([1, 2, 3], 0)
 *   // => [1, 2, 3]
 *
 * @param {Array} array The array to query.
 * @param {number} [n] The number of elements to drop. Default is `1`
 * @returns {Array} Returns the slice of `array`.
 */
function drop(array, n = 1) {
  const length = array == null ? 0 : array.length
  return length ? slice(array, n < 0 ? 0 : toInteger(n), length) : []
}

export default drop
