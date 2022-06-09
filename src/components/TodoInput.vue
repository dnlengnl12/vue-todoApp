<template>
  <div class="input-box shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="add-container" v-on:click="addTodo">
        <i class="fa-solid fa-plus add-btn"></i>
      </span>

      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>
            경고!
            <i class="fa-solid fa-circle-xmark closeModalBtn" @click="showModal = false"></i>
          </h3>
        </template>
        <template #body>
          <span>무언가를 입력하세요.</span>
        </template>
        <template #footerDescription>
          <span>copy right</span>
        </template>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/ModalComponent.vue';
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem === '') {
        this.showModal = !this.showModal;
        return;
      }
      //this.$emit('addTodoItem', this.newTodoItem);
      this.$store.commit('addOneItem', this.newTodoItem.trim());
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.input-box {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.input-box input {
  border-style:none;
  font-size: 0.9rem;
}

.add-container {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.add-btn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>