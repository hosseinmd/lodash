import baseFindIndex from './.internal/baseFindIndex.js'
import baseIsNaN from './.internal/baseIsNaN.js'
import strictLastIndexOf from './.internal/strictLastIndexOf.js'
import toInteger from './toInteger.js'

/**
 * This method is like `indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @since 0.1.0
 * @category Array
 * @example
 *   lastIndexOf([1, 2, 1, 2], 2)
 *   // => 3
 *
 *   // Search from the `fromIndex`.
 *   lastIndexOf([1, 2, 1, 2], 2, 2)
 *   // => 1
 *
 * @param {Array} array The array to inspect.
 * @param {any} value The value to search for.
 * @param {number} [fromIndex] The index to search from. Default is `array.length-1`
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function lastIndexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = length
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    index =
      index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true)
}

export default lastIndexOf
