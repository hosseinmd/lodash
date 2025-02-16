/**
 * A specialized version of `matchesProperty` for source values suitable for
 * strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {any} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return (object) => {
    if (object == null) {
      return false
    }
    return (
      object[key] === srcValue &&
      (srcValue !== undefined || key in Object(object))
    )
  }
}

export default matchesStrictComparable
