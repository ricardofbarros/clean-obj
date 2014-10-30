//Dependencies
var isEmpty = require('./empty');

var cleanObj = function myself(obj, strict) {
  // temp var to evaluate 
  var temp;

  for(var k in obj) {
    if(typeof(obj[k]) === 'object') {
      // Check for dates
      if(Object.prototype.toString.call(obj[k]) !== '[object Date]') {         
        // Strict mode - deletes null & undefined
        if(strict) {
          temp = myself(obj[k], strict);
          
          if(temp === null) {
            delete obj[k];
          } else {
            obj[k] = temp;
          }
        } 
        // Non-Strict mode - deletes only undefined
        else {
          if(obj[k] !== null) {
            temp = myself(obj[k], strict);
            
            if(temp === null) {
              delete obj[k];
            } else {
              obj[k] = temp;
            }
          }                
        }
      }
    } else {
      // If value = undefined, delete obj[key]
      if(typeof(obj[k]) === 'undefined') {
        delete obj[k];
      }
    }
  }   

  // Check if the object is empty
  // If it is return null to delete the object
  if(!isEmpty(obj)) {
    return obj;        
  } else {
    return null;
  } 
};

module.exports = cleanObj;