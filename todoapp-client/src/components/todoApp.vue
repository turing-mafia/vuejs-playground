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
        todos: []
      }
    },
    mounted() {
      this.getTodos();
    },
    methods: {
      getTodos() {
        this.$http.get('http://localhost:3000/todo')
          .then(res => this.todos = res.data);
      },
      addTodo(title) {
        if (title) {
          this.$http.post('http://localhost:3000/todo', { title })
            .then(() => this.getTodos());
          this.title = '';
        }
      },
      delTodo(index) {
        this.$http.delete('http://localhost:3000/todo/' + index)
          .then(() => this.getTodos());
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