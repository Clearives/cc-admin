<template>
  <div class="parent">
    <p>I'm Parent</p>
    <div class="input">
      <el-input v-model="msg" placeholder="请输入内容"></el-input>
    </div>
    <p>msg1: <span class="cmsg">{{msg1}}</span></p>
    <p>msg2: <span class="cmsg">{{msg2}}</span></p>
    <div class="clearfix child-wrap">
      <Child1 :child-msg="msg" :child-msg1="msg1" :child-msg2="msg2" @getChild1="getChild1"/>
      <Child2 :child-msg="msg" :child-msg1="msg1" :child-msg2="msg2" @getChild2="getChild2"/>
    </div>
  </div>
</template>

<script>
import Child1 from './Child1';
import Child2 from './Child2';

export default {
  name: 'Parent',
  data() {
    return {
      msg: 'msg',
      msg1: 'msg1',
      msg2: 'msg2'
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    getChild1: function(msg) {
      this.msg1 = msg;
    },
    getChild2: function(msg) {
      this.msg2 = msg;
    }
  }
};
</script>

<style lang="less">
  .parent {
    padding: 50px;
    border: 1px solid #20a0ff;
    border-radius: 5px;
  }
  .input {
    width: 180px;
  }
  .child-wrap {
    margin-top: 50px;
  }
  .cmsg {
    color: #f00;
  }
</style>
