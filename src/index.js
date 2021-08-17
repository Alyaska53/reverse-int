module.exports = function reverse (n) {
  let numStr = n.toString();
  return +numStr.split('')
                .reverse()
                .join('');
}
