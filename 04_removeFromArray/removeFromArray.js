const removeFromArray = function(arr, ...theArgs) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = 0;
        while (j <= theArgs.length - 1) {
            if (arr[i] === theArgs[j]) {
                arr.splice(i, 1);
                j = 0
            } else {
                j++
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
