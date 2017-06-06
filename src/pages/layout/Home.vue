<template>
<el-row class="container">
  <Navbar/>
  <el-col :span="24" class="main">
    <Sidebar/>
    <section class="content-container">
      <div class="grid-content bg-purple-light">
        <Breadcrumb/>
        <AppMain/>
      </div>
    </section>
  </el-col>
</el-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { Navbar, Sidebar, Breadcrumb, AppMain } from '@/pages/layout';

export default {
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    AppMain
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style lang="less">
.container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .main {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0;
        overflow: hidden;
        .content-container {
            flex: 1;
            overflow-y: scroll;
            padding: 0 20px 20px 20px;
        }
    }
}
</style>
