<template>
  <div class="uploader">
    <h2>上传组件</h2>
    <el-upload
      class="avatar-uploader"
      action="http://up-z2.qiniu.com/"
      :show-file-list="false"
      :data='form'
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import config from '../../api/qiniu-config'
import { getToken } from '../../api/api.js';

export default {
  name: 'Uploader',
  data() {
    return {
      imageUrl: '',
      form: {
        token: '',
        key: null
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = config.domain + '/' + file.name;
    },
    beforeAvatarUpload(file) {
      this.form.key = file.name
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isLt2M;
    }
  },
  created() {
    getToken().then((res) => {
      this.form.token = res.data.token;
    });
  }
}
</script>

<style lang="less">
</style>
