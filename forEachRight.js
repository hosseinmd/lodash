import arrayEachRight from './.internal/arrayEachRight.js'
import baseEachRight from './.internal/baseEachRight.js'

/**
 * This method is like `forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @since 2.0.0
 * @category Collection
 * @example
 *   forEachRight([1, 2], (value) => console.log(value))
 *   // => Logs `2` then `1`.
 *
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @see forEach, forIn, forInRight, forOwn, forOwnRight
 * @alias eachRight
 * @returns {Array | Object} Returns `collection`.
 */
function forEachRight(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight
  return func(collection, iteratee)
}

export default forEachRight
