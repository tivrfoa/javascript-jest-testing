import chunkArray from './array_util';


test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 5 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5];
    const len = 2;

    expect(chunkArray(numbers, len)).toEqual([[1,2],[3,4],[5]]); 
});

test('Chunk an array tests', () => {
    expect(chunkArray([1, 2, 3], 3)).toEqual([ [ 1, 2, 3 ] ]); 
    expect(chunkArray([1, 2, 3], 2)).toEqual([ [ 1, 2 ], [ 3 ] ]); 
    expect(chunkArray([1, 2, 3], 1)).toEqual([ [ 1 ], [ 2 ], [ 3 ] ]); 
});