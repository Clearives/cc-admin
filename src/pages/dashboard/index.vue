<template>
  <div class="index">
    <div class="appinfo">
      <li>appName: {{appInfo.appName}}</li>
      <li>appVersion: {{appInfo.appVersion}}</li>
      <li>platform: {{appInfo.platform}}</li>
      <li>userAgent: {{appInfo.userAgent}}</li>
    </div>
    <div>
      <img class='gif' :src="gif" >
    </div>
  </div>
</template>

<script>
import gif from '../../assets/0.gif';
export default {
  name: 'dashboard-index',
  data() {
    return {
      appInfo: {},
      gif: gif + '?' + +new Date(),
    }
  },
  methods: {
    getInfo: () => {
      let appInfo = {}
      appInfo.appName = navigator.appName; //浏览器的正式名称
      appInfo.appVersion = navigator.appVersion; //浏览器的版本号
      appInfo.platform = navigator.platform; // 浏览器正在运行的操作系统平台，包括Win16(windows3.x)
      appInfo.userAgent = navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
      return appInfo
    }
  },
  mounted() {
    this.appInfo = this.getInfo()
  }
}
</script>

<style lang="less" scoped>
  li {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #f60;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .gif {
    margin-left: 300px;
    margin-top: 100px;
  }
</style>
