import baseIsMatch from './.internal/baseIsMatch.js'
import getMatchData from './.internal/getMatchData.js'

/**
 * This method is like `isMatch` except that it accepts `customizer` which is
 * invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with five
 * arguments: (objValue, srcValue, index|key, object, source).
 *
 * @since 4.0.0
 * @category Lang
 * @example
 *   function isGreeting(value) {
 *     return /^h(?:i|ello)$/.test(value)
 *   }
 *
 *   function customizer(objValue, srcValue) {
 *     if (isGreeting(objValue) && isGreeting(srcValue)) {
 *       return true
 *     }
 *   }
 *
 *   const object = { greeting: 'hello' }
 *   const source = { greeting: 'hi' }
 *
 *   isMatchWith(object, source, customizer)
 *   // => true
 *
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  return baseIsMatch(object, source, getMatchData(source), customizer)
}

export default isMatchWith
