var isEmpty = require('./lib/empty')
var toStr = Object.prototype.toString.call

module.exports = cleanObj

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
    // If value is evaluated as a falsy value
    if (!value) {
      if (strict || (!strict && value == null)) {
        return delete ref[key]
      }
    }

    var typeOfValue = typeof value

    // If value is an object (excluding date objects)
    if (typeOfValue === 'object' && toStr(value) !== '[object Date]') {
      return cleanObj(ref[key], strict)
    }
  }
}
