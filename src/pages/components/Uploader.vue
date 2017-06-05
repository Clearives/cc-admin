<template>
  <div class="uploader">
    <h2>上传组件</h2>
    <vueUploader/>
  </div>
</template>

<script>
import vueUploader from '../../components/vue-uploader/index.vue'
export default {
  name: 'Uploader',
  components: {
    vueUploader
  }
}
</script>

<style lang="less">
</style>
