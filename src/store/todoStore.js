import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    toggleComplete(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
  },
});
