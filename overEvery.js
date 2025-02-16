import every from './every.js'

/**
 * Creates a function that checks if **all** of the `predicates` return truthy
 * when invoked with the arguments it receives.
 *
 * @since 4.0.0
 * @category Util
 * @example
 *   const func = overEvery([Boolean, isFinite])
 *
 *   func('1')
 *   // => true
 *
 *   func(null)
 *   // => false
 *
 *   func(NaN)
 *   // => false
 *
 * @param {Function[]} [predicates] The predicates to check. Default is `[identity]`
 * @returns {Function} Returns the new function.
 */
function overEvery(iteratees) {
  return function (...args) {
    return every(iteratees, (iteratee) => iteratee.apply(this, args))
  }
}

export default overEvery
