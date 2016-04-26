var isEmpty = require('./lib/empty')
var toStr = Object.prototype.toString

module.exports = clean

function clean (obj, strict) {
  strict = strict || false

  obj = cleanObj(obj, strict)

  if (obj === null) {
    obj = {}
  }

  return obj
}

function cleanObj (obj, strict) {
  for (var k in obj) {
    cleanProperty(k, obj[k], obj)
  }

  // Check if the object is empty
  // If it is return null to delete the object
  if (!isEmpty(obj)) {
    return obj
  } else {
    return null
  }

  function cleanProperty (key, value, ref) {
    if (!shouldCleanProperty(value)) {
      delete ref[key]
      return
    }

    var typeOfValue = typeof value

    // If value is an object (excluding date objects)
    if (typeOfValue === 'object' && toStr.call(value) !== '[object Date]') {
      // Exception - If array
      if (toStr.call(obj[k]) === '[object Array]') {
        ref[key] = ref[key].filter(shouldCleanProperty)
      } else {
        cleanObj(ref[key], strict)
      }

      if (isEmpty(ref[key])) {
        delete ref[key]
      }
    }
  }

  function shouldCleanProperty (value) {
    return !(!value && (strict || (!strict && value == null)))
  }
}
