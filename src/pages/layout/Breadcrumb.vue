<template>
  <el-col :span="24" class="breadcrumb-container">
    <el-breadcrumb separator="/" class="breadcrumb-inner">
      <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      ccName: 'Cc-Admin',
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="less">

</style>
