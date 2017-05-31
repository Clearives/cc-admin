<template>
  <div class="error-container" style=" margin-top:8%;">
   <div class="panel margin-big-top">
      <div class="text-center">
         <br>
         <h2 class="padding-top"> <strong>404错误！抱歉您要找的页面不存在</strong></h2>
         <div class="">
            <div class="float-left">
                <img src="../assets/0.gif">
                <div class="alert"> 卧槽！页面不见了！ </div>
            </div>
            <div class="float-right">
               <img src="../assets/ds-2.png" width="260">
            </div>
          </div>
          <div class="padding-big">
               <a href="" class="button bg-yellow">返回首页</a>
               <a href="" class="button">保证不打死管理员</a>
          </div>
      </div>
   </div>
</div>

</template>

<script>
export default {
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
    .button {
      border: solid 1px #ddd;
      background: transparent;
      border-radius: 4px;
      font-size: 14px;
      padding: 6px 15px;
      margin: 0;
      display: inline-block;
      line-height: 20px;
      transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1) 0s;
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
