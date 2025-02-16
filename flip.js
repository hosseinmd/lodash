/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @since 4.0.0
 * @category Function
 * @example
 *   const flipped = flip((...args) => args)
 *
 *   flipped('a', 'b', 'c', 'd')
 *   // => ['d', 'c', 'b', 'a']
 *
 * @param {Function} func The function to flip arguments for.
 * @see reverse
 * @returns {Function} Returns the new flipped function.
 */
function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function (...args) {
    return func.apply(this, args.reverse())
  }
}

export default flip
