<template>
  <div>
    <ul v-for="(todo, i) in todos" v-bind:key="i" class="list-unstyled">
      {{ i+1 }}. {{ todo.title }}
      <span v-on:click="delTodo(todo._id)"
            class="close"
            aria-hidden="true">&times;</span>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todos'],
    methods: {
      delTodo(i) {
        this.$emit('del-todo', i);
      }
    }
  };
</script>