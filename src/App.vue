<template>
  <div id="app">
    <h1>Vue.js Todo List</h1>
    <TodoForm @add-todo="addTodo" />
    <ul>
      <TodoItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" 
        @remove-todo="removeTodo" 
        @toggle-complete="toggleComplete" 
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import TodoForm from './components/TodoForm.vue';
import { useTodoStore } from './store/todoStore';

export default {
  components: {
    TodoItem,
    TodoForm,
  },
  setup() {
    const todoStore = useTodoStore();
    const todos = todoStore.todos;

    const addTodo = (todo) => {
      todoStore.addTodo(todo);
    };

    const removeTodo = (id) => {
      todoStore.removeTodo(id);
    };

    const toggleComplete = (id) => {
      todoStore.toggleComplete(id);
    };

    return { todos, addTodo, removeTodo, toggleComplete };
  },
};
</script>
