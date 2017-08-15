var loaderUtils = require('loader-utils')
var Px2rpx = require('px2rpx')

module.exports = function (source) {
  var query = loaderUtils.parseQuery(this.query)
  var px2rpxIns = new Px2rpx(query)
  return px2rpxIns.generaterpx(source)
}
