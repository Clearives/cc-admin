<template>
  <div>
    <h1>count 测试</h1>
    Clicked: {{ getCount }} times
    <button @click="incrementAsync">Async+</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h1>todo 测试</h1>
    <TodoMvc></TodoMvc>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoMvc from './todomvc'
export default {
  components: { TodoMvc },
  computed: {
    ...mapGetters([
      'getCount',
      // ...
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync'
    ])
  }
}
</script>

<style lang="less">

</style>
