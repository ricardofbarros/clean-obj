clean-obj
=========

Clean objects recursively, deleting undefined & null or falsy properties.

## Installation

```bash
  npm i clean-obj --save
```

## Usage

`cleanObj(obj [,strict])`

The usage of this module is very straightforward, as you can see in the example below.

```javascript
var cleanObj = require('clean-obj')

var obj = {
  key: 'value',
  undf: undefined,
  nullz: null,
  falsy: 0,
  bool: false
}

cleanObj(obj) // { set: 'value', falsy: 0, bool: false }

cleanObj(obj, true) // { set: 'value' }
```

## License

MIT
