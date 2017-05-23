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
    <br/>
    <br/>
    <br/>
    <hr/>
    <h1>action测试</h1>
    <div class="article" v-loading="loading">
      <el-button @click="getArticleAsync">获取随机文章</el-button>
      <h2>{{article.title}}</h2>
      <p class="article_author"><span>{{article.author}}</span></p>
      <div class="article_text" v-html="article.content"></div>
    </div>
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
      'article',
      'loading'
      // ...
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync',
      'getArticleAsync'
    ])
  }
}
</script>

<style lang="less">

</style>
