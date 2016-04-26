var hasOwnProp = Object.prototype.hasOwnProperty

module.exports = isEmpty

function isEmpty (obj) {
  // Check if obj has .length property
  // and if === 0 - it's empty
  if (obj.length) {
    return (obj.length === 0)
  }

  // Otherwise, does it have any properties of its own?
  for (var key in obj) {
    if (hasOwnProp.call(obj, key)) return false
  }

  // Fallback
  return true
}
