module.exports = function reverse (n) {
  let numStr = Math.abs(n).toString();
  return +numStr.split('')
                .reverse()
                .join('');
}
