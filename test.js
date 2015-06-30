var expect = require('chai').expect
var loader = require('./lib/px2rem-loader')

describe('Loader', function () {

  it('should transform px value into rem', function () {
    var output = loader.call({}, 'body {width: 640px}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 10rem;\n}')
  })
})

describe('Transform Value Comment', function () {

  it('should support `no` transform value comment', function () {
    var output = loader.call({}, 'body {width: 640px; /*no*/}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 640px;\n}')
  })

  it('should support `px` transform value comment', function () {
    var output = loader.call({}, 'body {width: 640px; /*px*/}')
    expect(output).is.a('string')
    expect(output).to.equal('\n\n[data-dpr="1"] body {\n  width: 320px;\n}\n\n[data-dpr="2"] body {\n  width: 640px;\n}\n\n[data-dpr="3"] body {\n  width: 960px;\n}')
  })
})

describe('Loader Query', function () {

  it('should support `remUnit` query', function () {
    var output = loader.call({query: '?remUnit=75'}, 'body {width: 640px}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 8.533333rem;\n}')
  })

  it('should support `remUnit` query', function () {
    var output = loader.call({query: '?remUnit=112.5'}, 'body {width: 640px}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 5.688889rem;\n}')
  })

  it('should support `remPrecision` query', function () {
    var output = loader.call({query: '?remPrecision=3'}, 'body {width: 999px}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 15.609rem;\n}')
  })

  it('should support `remUnit` & `remPrecision` query', function () {
    var output = loader.call({query: '?remUnit=112.5&remPrecision=3'}, 'body {width: 640px}')
    expect(output).is.a('string')
    expect(output).to.equal('body {\n  width: 5.689rem;\n}')
  })
})

