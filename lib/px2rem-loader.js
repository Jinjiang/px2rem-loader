var loaderUtils = require('loader-utils')
var Px2rem = require('px2rem')

module.exports = function (source) {
  var query = loaderUtils.parseQuery(this.query)
  var px2remIns = new Px2rem(query)
  return px2remIns.generateRem(source)
}
