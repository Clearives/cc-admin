<template>
  <section class="todoapp">
    <header class="todo-header">
      <h1 class="title">todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>
    <section class="todo-main" v-show="todos.length">
      <input class="toggle-all" id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll({ done: !allChecked })">
      <ul class="todo-list">
        <todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></todo>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
          <span class="todo-count">
            <strong>{{ remaining }}</strong>
            {{ remaining | pluralize('item') }} left
          </span>
          <ul class="filters">
            <li v-for="(val, key) in filters">
              <a
                :class="{ selected: visibility === key }"
                @click="visibility = key">{{ key | capitalize }}</a>
            </li>
          </ul>
          <button class="clear-completed"
            v-show="todos.length > remaining"
            @click="clearCompleted">
            Clear completed
          </button>
        </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';
import Todo from './Todo';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
};

export default {
  components: { Todo },
  data() {
    return {
      visibility: 'all',
      filters: filters
    };
  },
  computed: {
    todos () {
      return this.$store.state.todos;
    },
    allChecked () {
      return this.todos.every(todo => todo.done);
    },
    filteredTodos () {
      return filters[this.visibility](this.todos);
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length;
    }
  },
  methods: {
    addTodo (e) {
      let text = e.target.value;
      if (text.trim()) {
        this.$store.commit('addTodo', { text });
      }
      e.target.value = '';
    },
    ...mapMutations([
      'toggleAll',
      'clearCompleted'
    ])
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (`${w}s`),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
};
</script>

<style lang="less" src="./index.less">
</style>
