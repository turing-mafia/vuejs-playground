<template>
  <div class="todoApp">
    <div class="form-group">
      <h1><span class="vue">Vue</span> To-Do
        <small>List</small>
      </h1>
      <form role="form">
        <input type="text"
               class="form-control"
               placeholder="해야 할 일"
               v-model="title"
               v-on:keyup.enter="addTodo(title)">
      </form>
      <button type="button"
              v-on:click="addTodo(title)"
              class="btn btn btn-primary">Add</button>
    </div>
    <div class="todo-list">
      <!-- todoList Component -->
      <todoList v-bind:todos="todos" v-on:del-todo="delTodo"></todoList>
    </div>
  </div>
</template>

<script>
  import todoList from '@/components/todoList'
  export default {
    name: "todoApp",
    data() {
      return {
        title: '',
        todos: [
          { title: '운동하기' },
          { title: 'JAVA' },
          { title: 'javascript' },
          { title: '영어' }
        ]
      }
    },
    methods: {
      addTodo(title) {
        if (title) {
          this.todos.push({ title: title });
          this.title = '';
        }
      },
      delTodo(index) {
        this.todos.splice(index, 1);
      }
    },
    components: {
      'todoList': todoList
    }
  }
</script>

<style scoped>
  .todoApp {
    margin: auto;
    width: 500px;
  }
  form {
    display: inline-block;
  }
  .form-group {
    text-align: center;
    margin-top: 10em;
    padding-bottom: 25px;
  }
  .todo-list {
    width: 250px;
    text-align: left;
    margin-left: 130px;
  }
  a.close {
    float: right;
  }
  .vue {
    color: #009900;
  }
</style>