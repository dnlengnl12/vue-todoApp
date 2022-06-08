<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="index" class="shadow">
          <i class="fa-solid fa-check check-btn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
          <span class="remove-btn" v-on:click="removeTodo(todoItem, index)">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  created: function() {
    const {length} = localStorage;

    if(length > 0) {
      let i = -1;

      while(++i < length) {

        const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(typeof item !== 'object') {
          continue;
        }
        this.todoItems.push(item);
      } 
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      console.log(todoItem, index);
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.check-btn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.remove-btn {
  margin-left: auto;
  color: #de4343;
}
</style>