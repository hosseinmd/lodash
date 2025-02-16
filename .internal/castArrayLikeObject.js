import isArrayLikeObject from '../isArrayLikeObject.js'

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {any} value The value to inspect.
 * @returns {Array | Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : []
}

export default castArrayLikeObject
