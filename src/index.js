
exports.min = function min (array) {
    if (!array || array.length === 0 ) {
        return 0
        }
        else {
            var minimum = array[0];
            array.reduce((accumulator, currentValue) => currentValue < minimum ? minimum = currentValue:0)
        }      
  return minimum;
}

exports.max = function max (array) {
    if (!array || array.length === 0 ) {
        return 0
        }
        else {
            var maximum = array[0];
            array.reduce((accumulator, currentValue) => currentValue > maximum ? maximum = currentValue:0)
        }      
  return maximum;
}

exports.avg = function avg (array) {
    if (!array || array.length === 0 ) {
        return 0
        }
        else {
            return array.reduce((accumulator, currentValue) => accumulator + currentValue)/array.length
        }
}
