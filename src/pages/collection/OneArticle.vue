<template>
  <div class="one" v-loading="loading">
    <h1>每日一文</h1>
    <el-button @click="getArticle2">随机文章</el-button>
    <br>
    <br>
    <div class="article">
      <h2>{{article.title}}</h2>
      <p class="article_author"><span>{{article.author}}</span></p>
      <div class="article_text" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import { getArticle, getArticle2 } from '../../api/api';
export default {
  data() {
    return {
      article: {},
      loading: false
    }
  },
  methods: {
    getArticle: function () {
      let _this = this;
      _this.loading = true;
      getArticle().then((res) => {
        _this.article = res.data.article;
        _this.loading = false;
      });
    },
    getArticle2: function () {
      let _this = this;
      _this.loading = true;
      getArticle2().then((res) => {
        _this.article = res.data.article;
        _this.loading = false;
      });
    },
  },
  mounted() {
    this.getArticle();
  }
}
</script>

<style lang="less">
  .one {
    width: 600px;
    margin: 0 auto;
    background-color: #FFFFFF;
    background-image: -moz-linear-gradient(center top , #FFFFFF, #ffffff);
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.2), 0 3px 0 #FFFFFF, 0 4px 0 rgba(0, 0, 0, 0.2), 0 6px 0 #FFFFFF, 0 7px 0 rgba(0, 0, 0, 0.2);
    margin: 40px auto 0;
    min-height: 300px;
    padding: 20px 50px 50px;
    position: relative;
    width: 700px;
    z-index: 0;

    h1, h2 {
      text-align: center;
    }

    h2 {
      color: #000000;
      font-weight: normal;
      letter-spacing: 4px;
      margin: 0 0 30px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
    }

    .el-button {
      margin-left: 550px
    }
    .article_author {
      color: #999999 !important;
      margin: 40px 0 50px !important;
      text-align: center !important;
    }
  }
</style>
