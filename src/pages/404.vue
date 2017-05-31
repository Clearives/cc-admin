<template>
  <div class="error-container" style=" margin-top:8%;">
   <div class="panel margin-big-top">
      <div class="text-center">
         <br>
         <h2 class="padding-top"> <strong>404错误！抱歉您要找的页面不存在</strong></h2>
         <div class="">
            <div class="float-left">
                <img src="../assets/0.gif">
                <div class="alert"> 卧槽！页面不见了！</div>
            </div>
            <div class="float-right">
               <img src="../assets/ds-2.png" width="260">
            </div>
          </div>
          <div class="padding-big">
               <el-button @click="back">返回</el-button>
               <el-button @click="back">保证不打死管理员</el-button>
          </div>
      </div>
   </div>
</div>

</template>

<script>
export default {
  methods: {
    back: function() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '#/dashboard' });
      } else {
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .error-container {
    width: 1200px;
    margin: 0 auto;
    .float-left {
      float: left;
    }
    .float-right {
      float: right;
    }
    h2 {
      font-size: 20px;
    }
    a {
      text-decoration: none;
      color: #000;
      &:hover {
        color: #20a0ff;
      }
    }
    .alert {
      font-size: 14px;
    }
    .panel {
      border: solid 1px #ddd;
      border-radius: 4px;
      padding: 10px;
      .text-center {
        text-align: center;
      }
    }
  }
</style>
