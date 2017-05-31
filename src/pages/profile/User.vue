<template>
  <div class="user">
    <h3>用户相关</h3>
    <ul>
      <li>
        <span>Email:</span>
        <a target="_blank" href="mailto:clearives@gmail.com">clearives@gmail.com</a>
      </li>
      <li>
        <span>Github:</span>
        <a target="_blank" href="https://github.com/Clearives">Clearives</a>
      </li>
      <li>
        <span>Weibo:</span>
        <a target="_blank" href="http://weibo.com/clearives">@曾祥辉_</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  created() {
    this.userId = this.$route.params.userId
  }
}
</script>

<style lang="less" scoped>
  .user {
    color: #48576a;
    li {
      font-size: 18px;
      line-height: 28px;
      span {

      }
      a {
        font-size: 14px;
        text-decoration: none;
        color: #0366d6;
        &:hover {
          color: #20a0ff;
        }
      }
    }
  }
</style>
