import createPadding from './.internal/createPadding.js'
import stringSize from './.internal/stringSize.js'

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @since 3.0.0
 * @category String
 * @example
 *   pad('abc', 8)
 *   // => '  abc   '
 *
 *   pad('abc', 8, '_-')
 *   // => '_-abc_-_'
 *
 *   pad('abc', 2)
 *   // => 'abc'
 *
 * @param {string} [string] The string to pad. Default is `''`
 * @param {number} [length] The padding length. Default is `0`
 * @param {string} [chars] The string used as padding. Default is `' '`
 * @returns {string} Returns the padded string.
 */
function pad(string, length, chars) {
  const strLength = length ? stringSize(string) : 0
  if (!length || strLength >= length) {
    return string || ''
  }
  const mid = (length - strLength) / 2
  return (
    createPadding(Math.floor(mid), chars) +
    string +
    createPadding(Math.ceil(mid), chars)
  )
}

export default pad
