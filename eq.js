/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @since 4.0.0
 * @category Lang
 * @example
 *   const object = { a: 1 }
 *   const other = { a: 1 }
 *
 *   eq(object, object)
 *   // => true
 *
 *   eq(object, other)
 *   // => false
 *
 *   eq('a', 'a')
 *   // => true
 *
 *   eq('a', Object('a'))
 *   // => false
 *
 *   eq(NaN, NaN)
 *   // => true
 *
 * @param {any} value The value to compare.
 * @param {any} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

export default eq
