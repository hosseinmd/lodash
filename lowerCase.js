import words from './words.js'
import toString from './toString.js'

const reQuotes = /['\u2019]/g

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @since 4.0.0
 * @category String
 * @example
 *   lowerCase('--Foo-Bar--')
 *   // => 'foo bar'
 *
 *   lowerCase('fooBar')
 *   // => 'foo bar'
 *
 *   lowerCase('__FOO_BAR__')
 *   // => 'foo bar'
 *
 * @param {string} [string] The string to convert. Default is `''`
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @returns {string} Returns the lower cased string.
 */
const lowerCase = (string) =>
  words(toString(string).replace(reQuotes, '')).reduce(
    (result, word, index) => result + (index ? ' ' : '') + word.toLowerCase(),
    ''
  )

export default lowerCase
