var mocha = require('mocha')
var expect = require('chai').expect
var cleanObj = require('../index.js')

var describe = mocha.describe
var it = mocha.it

describe('Clean an object (strict mode)', function () {
  var undfz
  var fn = function () {}

  // Wow, so much diversification in this object
  var obj = {
    string: 'testing',
    number: 1337,
    float: 3.14159,
    falsy: 0,
    bool: false,
    date: new Date(),
    fn: function (value) {
      return 'testing - ' + value
    },
    nullz: null,
    undf: undfz,
    childrenObj: {
      string: 'testing',
      number: 1337,
      float: 3.14159,
      falsy: 0,
      bool: false,
      date: new Date(),
      fn: function (value) {
        return 'testing - ' + value
      },
      nullz: null,
      undf: undfz,
      childrenArr: ['str', 1, 0, false, true, fn, null, undfz, 1337]
    },
    childrenArr: ['str', 1, 0, false, true, fn, null, undfz, 1337]
  }

  // Clean it! strict mode
  obj = cleanObj(obj, true)

  it('should keep the property string', function (done) {
    expect(obj).to.include.keys('string')
    expect(obj.string).to.equal('testing')
    done()
  })

  it('should keep the property number', function (done) {
    expect(obj).to.include.keys('number')
    expect(obj.number).to.equal(1337)
    done()
  })

  it('should keep the property float', function (done) {
    expect(obj).to.include.keys('float')
    expect(obj.float).to.equal(3.14159)
    done()
  })

  it('should delete the property falsy', function (done) {
    expect(obj).to.not.include.keys('falsy')
    done()
  })

  it('should delete the property bool', function (done) {
    expect(obj).to.not.include.keys('bool')
    done()
  })

  it('should keep the property date', function (done) {
    expect(obj).to.include.keys('date')
    expect(obj.date).to.be.a('date')
    done()
  })

  it('should keep the property fn', function (done) {
    expect(obj).to.include.keys('fn')
    expect(obj.fn).to.be.a('function')
    done()
  })

  it('should delete the property nullz', function (done) {
    expect(obj).to.not.include.keys('nullz')
    done()
  })

  it('should delete the property undf', function (done) {
    expect(obj).to.not.include.keys('undf')
    done()
  })

  it('should clean childrenArr from null and undf values', function (done) {
    expect(obj).to.include.keys('childrenArr')
    expect(obj.childrenArr).to.eql([
      'str',
      1,
      true,
      fn,
      1337
    ])
    done()
  })

  describe('It should have cleaned recursively', function () {
    it('childrenObj should exist', function (done) {
      expect(obj).to.include.keys('childrenObj')
      expect(obj.childrenObj).to.be.an('object')
      done()
    })

    it('should keep the property string', function (done) {
      expect(obj.childrenObj).to.include.keys('string')
      expect(obj.childrenObj.string).to.equal('testing')
      done()
    })

    it('should keep the property number', function (done) {
      expect(obj.childrenObj).to.include.keys('number')
      expect(obj.childrenObj.number).to.equal(1337)
      done()
    })

    it('should keep the property float', function (done) {
      expect(obj.childrenObj).to.include.keys('float')
      expect(obj.childrenObj.float).to.equal(3.14159)
      done()
    })

    it('should delete the property falsy', function (done) {
      expect(obj.childrenObj).to.not.include.keys('falsy')
      done()
    })

    it('should delete the property bool', function (done) {
      expect(obj.childrenObj).to.not.include.keys('bool')
      done()
    })

    it('should keep the property date', function (done) {
      expect(obj.childrenObj).to.include.keys('date')
      expect(obj.childrenObj.date).to.be.a('date')
      done()
    })

    it('should keep the property fn', function (done) {
      expect(obj.childrenObj).to.include.keys('fn')
      expect(obj.childrenObj.fn).to.be.a('function')
      done()
    })

    it('should delete the property nullz', function (done) {
      expect(obj.childrenObj).to.not.include.keys('nullz')
      done()
    })

    it('should delete the property undf', function (done) {
      expect(obj.childrenObj).to.not.include.keys('undf')
      done()
    })

    it('should clean childrenArr from null and undf values', function (done) {
      expect(obj.childrenObj).to.include.keys('childrenArr')
      expect(obj.childrenObj.childrenArr).to.eql([
        'str',
        1,
        true,
        fn,
        1337
      ])
      done()
    })
  })
})
