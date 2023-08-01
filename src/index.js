module.exports = function reverse (n) {
    const arr = n.toString().split('').reverse();
    const result = arr.filter(item => {
        return item !== '-'
    }).join('')
    console.log(Number(result))
    return Number(result);
  }
