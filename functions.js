import Axios from "axios";


const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: x => x,
    createUser: (firstName, lastName) => {
        return { firstName, lastName };
    },
    fetchUser: async () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => {
            console.error(err);
            return 'error';
        }),
}

export default functions;