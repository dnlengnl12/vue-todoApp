const storage = {
    fetch() {
        const arr = [];
        const {length} = localStorage;

        if(length > 0) {
          let i = -1;
    
          while(++i < length) {
    
            const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(typeof item !== 'object') {
              continue;
            }
            arr.push(item);
          } 
        }

        return arr;
    }
}

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem}
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, todoItem) {
        const targetItemIndex = state.todoItems
            .indexOf(todoItem);
        state.todoItems[targetItemIndex].completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}