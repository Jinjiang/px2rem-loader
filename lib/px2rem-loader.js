var px2rem = require('px2rem')
var px2remIns = new Px2rem()

module.exports = function (source) {
  return px2remIns.generateRem(source)
}
