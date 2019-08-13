// https://github.com/Microsoft/TypeScript/issues/9545
// $ yarn add @types/node
// $ tsc array_util.ts --lib es6

function chunkArray(arr: number[], len: number): number[][] {

    if (arr.length <= len) return [arr];

    let chunks = Math.ceil(arr.length / len);

    let response: number[][] = [];
    for (let i = 0, j = 0; i < chunks; ++i) {
        let chunk: number[] = [];
        for (let l = 0; l < len && j < arr.length; ++j, ++l) {
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

export default chunkArray;