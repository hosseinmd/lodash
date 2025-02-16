import arrayReduceRight from './.internal/arrayReduceRight.js'
import baseEachRight from './.internal/baseEachRight.js'
import baseReduce from './.internal/baseReduce.js'

/**
 * This method is like `reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @since 0.1.0
 * @category Collection
 * @example
 *   const array = [
 *     [0, 1],
 *     [2, 3],
 *     [4, 5]
 *   ]
 *
 *   reduceRight(array, (flattened, other) => flattened.concat(other), [])
 *   // => [4, 5, 2, 3, 0, 1]
 *
 * @param {Array | Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {any} [accumulator] The initial value.
 * @see reduce
 * @returns {any} Returns the accumulated value.
 */
function reduceRight(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduceRight : baseReduce
  const initAccum = arguments.length < 3
  return func(collection, iteratee, accumulator, initAccum, baseEachRight)
}

export default reduceRight
