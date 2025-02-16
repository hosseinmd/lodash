import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * This method is like `flatMap` except that it recursively flattens the mapped
 * results up to `depth` times.
 *
 * @since 4.7.0
 * @category Collection
 * @example
 *   function duplicate(n) {
 *     return [[[n, n]]]
 *   }
 *
 *   flatMapDepth([1, 2], duplicate, 2)
 *   // => [[1, 1], [2, 2]]
 *
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {number} [depth] The maximum recursion depth. Default is `1`
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @returns {Array} Returns the new flattened array.
 */
function flatMapDepth(collection, iteratee, depth) {
  depth = depth === undefined ? 1 : +depth
  return baseFlatten(map(collection, iteratee), depth)
}

export default flatMapDepth
