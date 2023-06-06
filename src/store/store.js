import {createStore} from 'vuex';

const store = createStore({
    state: {
        // cart: [],
        // items: [
        //     {
        //         id: 1,
        //         name: 'iphone ',
        //         price: 500,
        //         quantity: 90
        //     },
        //     {
        //         id: 2,
        //         name: 'Notebook',
        //         description: 'Xiaomi Notebook Pro 15.6',
        //         price: 400,
        //         quantity: 100
        //     },
        // ],
        users: [],
        count: 0,

    },
    mutations: {
        increase(state) {
            state.count++;
        },
        getCount(state) {
            return state.count;
        },
        addUser(state, user) {
            state.users.push(user);
        }
    },
    actions: {
        increase(context) {
            context.commit('increase');
        }
    }
});

export default store;