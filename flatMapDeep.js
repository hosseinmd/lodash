import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * This method is like `flatMap` except that it recursively flattens the mapped results.
 *
 * @since 4.7.0
 * @category Collection
 * @example
 *   function duplicate(n) {
 *     return [[[n, n]]]
 *   }
 *
 *   flatMapDeep([1, 2], duplicate)
 *   // => [1, 1, 2, 2]
 *
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @returns {Array} Returns the new flattened array.
 */
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY)
}

export default flatMapDeep
