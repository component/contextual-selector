module.exports = function (selector, childSelector, sep) {
  // You want a child selector!!!
  childSelector || (childSelector = '*')
  sep || (sep = '')

  return selector
    .split(',')
    .map(trim) // Trim selectors for the next filter
    .filter(I) // No empty selectors
    .map(function (x) {
      return [x, sep, childSelector].join(' ')
    })
    .join(',')
}

function I(x) {
  return x
}

function trim(x) {
  return x.trim()
}