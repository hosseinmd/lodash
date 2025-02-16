import baseMerge from './baseMerge.js'
import isObject from '../isObject.js'

/**
 * Used by `defaultsDeep` to customize its `merge` use to merge source objects
 * into destination objects that are passed thru.
 *
 * @private
 * @param {any} objValue The destination value.
 * @param {any} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
 * @returns {any} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue)
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack)
    stack['delete'](srcValue)
  }
  return objValue
}

export default customDefaultsMerge
