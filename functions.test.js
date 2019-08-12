import functions from './functions';

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User object', () => {
    expect(functions.createUser('Hello', 'World')).toMatchObject({
        firstName: 'Hello',
        lastName: 'World'
    });
});

test('toBe doesnt work for objects. Using toEqual', () => {
    expect(functions.createUser('Hello', 'World')).toEqual({
        firstName: 'Hello',
        lastName: 'World'
    });
});

test('Numeric boundary', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeGreaterThan(1499);
    expect(load1 + load2).toBeLessThan(1501);
})