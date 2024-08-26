const removeFromArray = function(array, ...extras) {
    array = array.filter(item => !extras.includes(item));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
