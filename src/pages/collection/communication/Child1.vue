<template>
  <div class="child child1">
    <p>I'm child1</p>
    <p>I'm Parent msg: <span class="cmsg">{{childMsg}}</span></p>
    <p>I'm Child1 msg: <span class="cmsg">{{childMsg1}}</span></p>
    <p>I'm Child2 msg: <span class="cmsg">{{childMsg2}}</span></p>
    <el-button @click="callOther">Child1->Other</el-button>
    <el-button @click="callChild2">Child1->Child2</el-button>
  </div>
</template>

<script>
import ebus from './ebus'
export default {
  name: 'Child1',
  props: {
    childMsg: {
        type: String,
        default: ''
    },
    childMsg1: {
        type: String,
        default: ''
    },
    childMsg2: {
        type: String,
        default: ''
    }
  },
  methods: {
    callOther: function() {
      this.$emit('getChild1',"I'm Child1 msg");
    },
    callChild2: function() {
      ebus.$emit('getChild1Tochild2',"I'm Child1 msg to child2");
    }
  }
}
</script>

<style lang="less">
  .child {
    width: 500px;
    height: 300px;
    border: 1px solid #20a0ff;
    border-radius: 5px;
    float: left;
    margin-right: 50px;
    padding: 10px;
    .cmsg {
      color: #f00;
    }
  }
</style>
