

const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: x => x,
    createUser: (firstName, lastName) => {
        return { firstName, lastName };
    }
}

export default functions;