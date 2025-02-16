/**
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN
