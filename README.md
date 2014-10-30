clean-obj
=========

Clean objects recursively, deleting undefined [and null] properties of objects


## Installation

```bash
  npm i clean-obj --save
```

## Basic Usage

`cleanObj(obj [,strict]);`

## Non-Strict Mode

The usage is very simple, in the following example we are deleting all object properties that are `undefined`.

```javascript
var cleanObj = require('clean-obj');

var obj = {
  set: 'value',
  undf: undefined,
  nullz: null
};

obj = cleanObj(obj);

console.log(obj);

// Outputs { set: 'value', nullz: null }
```

## Strict Mode

If strict mode is set to true it will delete all object properties that are `null` and `undefined`.

### Example

```javascript
var cleanObj = require('clean-obj');

var obj = {
  set: 'value',
  undf: undefined,
  nullz: null
};

obj = cleanObj(obj, true);
	
console.log(obj);

// Outputs { set: 'value' }
```

## How to run the tests?

Simple, just run this in your terminal.

```bash
make test
```

## License

MIT
