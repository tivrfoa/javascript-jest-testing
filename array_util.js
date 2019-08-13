"use strict";
// https://github.com/Microsoft/TypeScript/issues/9545
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
    return response;
}
exports["default"] = chunkArray;
