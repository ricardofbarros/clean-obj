clean-obj
=========

Clean objects in javascript,deleting undefined and null properties of objects


## Installation

    npm install clean-obj


## Basic Usage


`cleanObj(obj [,strict]);`


```javascript
var cleanObj = require('clean-obj');

var obj = {
    setted : 'value',
    undf : undefined
};

obj = cleanObj(obj);
	
// Outputs { setted : 'value' }
```


## Strict Mode

If strict mode is set to true it will delete properties that are null and undefined.

**Default is false.**

### Example

```javascript
var cleanObj = require('clean-obj');

var obj = {
    setted : 'value',
    undf : undefined,
    nullKey : null
};

obj = cleanObj(obj, true);
	
// Outputs { setted : 'value' }
```

## Practical Application

**Using express and mongoose (schema database)**

If you want to get all possible values on `req.body` and filter the ones that weren't sent without getting some 
warnings or errors, you could do the following

**Example of update method using mongoose (using model.findOne because of validation middlewares)**

```javascript

model.findOne({id : req.param('id')}, {}, function(err, doc) {
if(err) {
    res.json(resError(err));
} else {

    var obj = {
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    };
    
    obj = cleanObj(obj, true);

    deepExtend(doc, obj);
    
    doc.save(function(err) {
        if(err) {
            res.json(resFail(err));
        } else {
            res.json(resOkay());
        }
    });
}
});

```

## License

MIT
