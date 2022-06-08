<template>
  <div>
      <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem">{{todoItem}}</li>
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
        if(typeof localStorage.key(i) !== 'string') {
          continue;
        }
        this.todoItems.push(localStorage.key(i));
      } 
    }
  }
}
</script>

<style>

</style>