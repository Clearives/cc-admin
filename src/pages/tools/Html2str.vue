<template>
  <div class="wrapper">
    <h2>Html转字符串工具</h2>
    <ul class="tips">
      <li>转化为单引号字符串时需要将html里的单引号转化为双引号</li>
      <li>转化为双引号字符串时需要将html里的双引号转化为单引号</li>
    </ul>
    <el-input
      ref="htmlInput"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 20}"
      placeholder="请输入内容"
      v-model="textarea_html">
    </el-input>
    <div class="btn-wrap">
      <el-button @click="handle2Str">转化为单引号</el-button>
      <el-button @click="handle2Str2">转化为双引号</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 20}"
      placeholder="这里将显示转化之后的字符串"
      v-model="textarea_str">
    </el-input>
  </div>
</template>

<script>
let defaultHtml = `<p>请在输入框内贴入你需要转换的HTML代码</p>
<p>HTML转换工具，可以将HTML代码转换为JavaScript字符串</p>
<p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p>
<p>如果您觉得好用，别忘了推荐给朋友！</p>`
export default {
  name: 'Html2str',
  data() {
    return {
      textarea_html: defaultHtml,
      textarea_str: '',
    }
  },
  methods: {
    handle2Str: function() {
      let htmlArr = this.textarea_html.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\"").replace(/\"/g, "\"").split('\n')
      let len = htmlArr.length
      let outArr = []
      htmlArr.map( (v, i) => {
        if (v !== "") {
          i === len -1 ? outArr.push("\'" + v + "\';") : outArr.push("\'" + v + "\'+\n")
        }
      })
      this.textarea_str = outArr.join("")
    },
    handle2Str2: function() {
      let htmlArr = this.textarea_html.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\'").replace(/\"/g, "\'").split('\n')
      let len = htmlArr.length
      let outArr = []
      htmlArr.map( (v, i) => {
        if (v !== "") {
          i === len -1 ? outArr.push("\"" + v + "\";") : outArr.push("\"" + v + "\"+\n")
        }
      })
      this.textarea_str = outArr.join("")
    },
    handleReset: function() {
      this.textarea_html = defaultHtml;
    },
  },
  watch: {
    textarea_html: function(value) {
      let htmlArr = value.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\"").replace(/\"/g, "\"").split('\n')
      let len = htmlArr.length
      let outArr = []
      htmlArr.map( (v, i) => {
        if (v !== "") {
          i === len -1 ? outArr.push("\'" + v + "\';") : outArr.push("\'" + v + "\'+\n")
        }
      })
      this.textarea_str = outArr.join("")
    }
  }
}
</script>

<style lang="less">
  .wrapper {
    .tips {
      margin-bottom: 20px;
    }
    .el-textarea {
      width: 70%;
      textarea {
        color: #ff4949!important;
      }
    }
    .btn-wrap {
      margin: 20px;
    }
  }
</style>
