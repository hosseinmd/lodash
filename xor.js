import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of unique values that is the [symmetric
 * difference](https://en.wikipedia.org/wiki/Symmetric_difference) of the given
 * arrays. The order of result values is determined by the order they occur in
 * the arrays.
 *
 * @since 2.4.0
 * @category Array
 * @example
 *   xor([2, 1], [2, 3])
 *   // => [1, 3]
 *
 * @param {...Array} [arrays] The arrays to inspect.
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @returns {Array} Returns the new array of filtered values.
 */
function xor(...arrays) {
  return baseXor(arrays.filter(isArrayLikeObject))
}

export default xor
