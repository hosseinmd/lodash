/**
 * The base implementation of `sortBy` which uses `comparer` to define the sort
 * order of `array` and replaces criteria objects with their corresponding values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  let { length } = array

  array.sort(comparer)
  while (length--) {
    array[length] = array[length].value
  }
  return array
}

export default baseSortBy
