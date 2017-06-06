<template>
  <el-col :span="24" class="content-wrapper">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </el-col>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
  .content-wrapper {
      background-color: #fff;
      box-sizing: border-box;
      margin-top: 60px;
  }
</style>
