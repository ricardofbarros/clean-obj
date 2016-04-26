var mocha = require('mocha')
var expect = require('chai').expect
var cleanObj = require('../index.js')
var util = require('util')

var describe = mocha.describe
var it = mocha.it

function Test () {}
Test.prototype.ex = 1
function Sample () {}
util.inherits(Sample, Test)

describe('Clean an object with properties object-alike with null/undf properties', function () {
  var undfz

  var sample = new Sample()
  sample.childrenObj = {
    key: undfz
  }
  sample.childrenArr = [ undfz ]

  sample = cleanObj(sample)

  it('should delete the property childrenObj', function (done) {
    expect(sample).to.not.include.keys('childrenObj')
    done()
  })

  it('should delete the property childrenArr', function (done) {
    expect(sample).to.not.include.keys('childrenArr')
    done()
  })

  expect('should keep the sample object', function (done) {
    expect(sample).to.eql({})
    done()
  })
})
