import storage from "./util/storage.js";

const init = {
    todos: storage.get(),
    filter: 'all',
};

const actions = {
    add({todos}, title) {
        if(title) {
           todos.push({title, completed: false});
        }
    }
}


export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);

    return state;
}