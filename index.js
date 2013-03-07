module.exports = function (selector, childSelector, sep) {
  childSelector || (childSelector = '*')
  sep || (sep = ' ')

  return selector.split(',').map(function (x) {
    return x + sep + childSelector
  }).join(',')
}