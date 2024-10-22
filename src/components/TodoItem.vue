<template>
  <li>
    <span :class="{ completed: todo.completed }" @click="toggleComplete">{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  emits: ['remove-todo', 'toggle-complete'],
  setup(props) {
    const removeTodo = () => {
      props['remove-todo'](props.todo.id);
    };

    const toggleComplete = () => {
      props['toggle-complete'](props.todo.id);
    };

    return { removeTodo, toggleComplete };
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
