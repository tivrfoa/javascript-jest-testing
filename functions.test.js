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

// Regex
test('Case sensitive search', () => {
    expect('have a nice day').not.toMatch(/nicE/);
    expect('have a nice day').toMatch(/nice/);
});

test('Case insensitive search', () => {
    expect('have a nice day').toMatch(/nicE/i);
});

// Arrays
test('admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});

// async await
test('username Bret', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.username).toEqual('Bret');
});

const nameCheck = () => console.log('Checking name ...');

// describe is used to create a block of tests
describe('Checking names', () => {

    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        expect('Jeff').toBe('Jeff');
    });

    test('User is Karen', () => {
        expect('Karen').toBe('Karen');
    });
});