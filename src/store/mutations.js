export const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
export const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
export const toggleOneItem = (state, todoItem) => {
    const targetItemIndex = state.todoItems
        .indexOf(todoItem);
    state.todoItems[targetItemIndex].completed = !todoItem.completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}
export const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}