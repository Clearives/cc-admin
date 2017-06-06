<template>
  <el-col :span="24" class="breadcrumb-container">
    <el-breadcrumb separator="/" class="breadcrumb-inner">
      <el-breadcrumb-item v-for="(item,index)  in crumbList" :key="item.path">
      <router-link v-if='item.redirect==="noredirect"||index==crumbList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      crumbList: null
    };
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched);
      }
      this.crumbList = matched;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
};
</script>

<style lang="less" scoped>
  .breadcrumb-container {
      border-bottom: 1px solid #eaeefb;
      position: fixed;
      z-index: 2;
      background: #fff;
      .title {
          width: 200px;
          float: left;
          color: #475669;
      }
      .breadcrumb-inner {
          float: left;
          height: 40px;
          line-height: 40px;
      }
      a {
        text-decoration: none;
      }
  }

</style>
