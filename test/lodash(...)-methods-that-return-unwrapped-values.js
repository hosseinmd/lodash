import assert from 'assert'
import lodashStable from 'lodash'

describe('lodash(...) methods that return unwrapped values', function () {
  var funcs = [
    'add',
    'camelCase',
    'capitalize',
    'ceil',
    'clone',
    'deburr',
    'defaultTo',
    'divide',
    'endsWith',
    'escape',
    'escapeRegExp',
    'every',
    'find',
    'floor',
    'has',
    'hasIn',
    'head',
    'includes',
    'isArguments',
    'isArray',
    'isArrayBuffer',
    'isArrayLike',
    'isBoolean',
    'isBuffer',
    'isDate',
    'isElement',
    'isEmpty',
    'isEqual',
    'isError',
    'isFinite',
    'isFunction',
    'isInteger',
    'isMap',
    'isNaN',
    'isNative',
    'isNil',
    'isNull',
    'isNumber',
    'isObject',
    'isObjectLike',
    'isPlainObject',
    'isRegExp',
    'isSafeInteger',
    'isSet',
    'isString',
    'isUndefined',
    'isWeakMap',
    'isWeakSet',
    'join',
    'kebabCase',
    'last',
    'lowerCase',
    'lowerFirst',
    'max',
    'maxBy',
    'min',
    'minBy',
    'multiply',
    'nth',
    'pad',
    'padEnd',
    'padStart',
    'parseInt',
    'pop',
    'random',
    'reduce',
    'reduceRight',
    'repeat',
    'replace',
    'round',
    'sample',
    'shift',
    'size',
    'snakeCase',
    'some',
    'startCase',
    'startsWith',
    'subtract',
    'sum',
    'toFinite',
    'toInteger',
    'toLower',
    'toNumber',
    'toSafeInteger',
    'toString',
    'toUpper',
    'trim',
    'trimEnd',
    'trimStart',
    'truncate',
    'unescape',
    'upperCase',
    'upperFirst'
  ]

  lodashStable.each(funcs, function (methodName) {
    it(
      '`_(...).' +
        methodName +
        '` should return an unwrapped value when implicitly chaining',
      function () {
        var actual = _()[methodName]()
        assert.notOk(actual instanceof _)
      }
    )

    it(
      '`_(...).' +
        methodName +
        '` should return a wrapped value when explicitly chaining',
      function () {
        var actual = _().chain()[methodName]()
        assert.ok(actual instanceof _)
      }
    )
  })
})
