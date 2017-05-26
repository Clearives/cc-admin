<template>
  <div class="child child2">
    <p>I'm child2</p>
    <p>I'm Parent msg: <span class="cmsg">{{childMsg}}</span></p>
    <p>I'm Child1 msg: <span class="cmsg">{{childMsg1}}</span></p>
    <p>I'm Child2 msg: <span class="cmsg">{{childMsg2}}</span></p>
    <p>I'm Child1 -> Child2 msg: <span class="cmsg">{{msgFromChild1}}</span></p>
    <el-button @click="callOther">Child2->Other</el-button>
  </div>
</template>

<script>
import ebus from './ebus'
export default {
  name: 'Child2',
  data() {
    return {
      msgFromChild1: ''
    }
  },
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
      this.$emit('getChild2',"I'm Child2 msg");
    },
    getFromChild1: function() {
      let _this = this
      ebus.$on('getChild1Tochild2', function(msg) {
        _this.msgFromChild1 = msg
      })
    }
  },
  mounted() {
    this.getFromChild1()
  }
}
</script>

<style lang="less">

</style>
