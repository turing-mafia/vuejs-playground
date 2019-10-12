<template>
  <div>
    <ul v-for="(todo, i) in todos" class="list-unstyled">
      {{ i+1 }}. {{ todo.title }} <span class="close" aria-hidden="true">&times;</span>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todos']
  };
</script>