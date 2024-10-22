<template>
  <form @submit.prevent="submitForm">
    <input v-model="newTodo" placeholder="Add a new todo" required />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['add-todo'],
  setup(props) {
    const newTodo = ref('');

    const submitForm = () => {
      props['add-todo']({ id: Date.now(), text: newTodo.value, completed: false });
      newTodo.value = '';
    };

    return { newTodo, submitForm };
  },
};
</script>
