/**
 * A specialized version of `lastIndexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {any} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictLastIndexOf(array, value, fromIndex) {
  let index = fromIndex + 1
  while (index--) {
    if (array[index] === value) {
      return index
    }
  }
  return index
}

export default strictLastIndexOf
