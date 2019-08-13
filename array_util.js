"use strict";
// $ yarn add @types/node
// $ tsc array_util.ts --lib es6
exports.__esModule = true;
function chunkArray(arr, len) {
    if (arr.length <= len)
        return [arr];
    var chunks = Math.ceil(arr.length / len);
    var response = [];
    for (var i = 0, j = 0; i < chunks; ++i) {
        var chunk = [];
        for (var l = 0; l < len && j < arr.length; ++j, ++l) {
            chunk[l] = arr[j];
        }
        response.push(chunk);
    }
    console.log(chunks);
    return response;
}
console.log(chunkArray([1, 2, 3], 3));
console.log(chunkArray([1, 2, 3], 2));
console.log(chunkArray([1, 2, 3], 1));
exports["default"] = chunkArray;
