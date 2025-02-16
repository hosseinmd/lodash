import baseIsEqual from './.internal/baseIsEqual.js'

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes, sets,
 * strings, symbols, and typed arrays. `Object` objects are compared by their
 * own, not inherited, enumerable properties. Functions and DOM nodes are
 * compared by strict equality, i.e. `===`.
 *
 * @since 0.1.0
 * @category Lang
 * @example
 *   const object = { a: 1 }
 *   const other = { a: 1 }
 *
 *   isEqual(object, other)
 *   // => true
 *
 *   object === other
 *   // => false
 *
 * @param {any} value The value to compare.
 * @param {any} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function isEqual(value, other) {
  return baseIsEqual(value, other)
}

export default isEqual
