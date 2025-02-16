import baseDifference from './.internal/baseDifference.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `pull`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @example
 *   without([2, 1, 2, 3], 1, 2)
 *   // => [3]
 *
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
 * @returns {Array} Returns the new array of filtered values.
 */
function without(array, ...values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : []
}

export default without
