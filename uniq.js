import baseUniq from './.internal/baseUniq.js'

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur in
 * the array.
 *
 * @since 0.1.0
 * @category Array
 * @example
 *   uniq([2, 1, 2])
 *   // => [2, 1]
 *
 * @param {Array} array The array to inspect.
 * @see uniqBy, uniqWith
 * @returns {Array} Returns the new duplicate free array.
 */
function uniq(array) {
  return array != null && array.length ? baseUniq(array) : []
}

export default uniq
