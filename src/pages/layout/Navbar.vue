<template>
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo" :class="sidebar.collapsed?'logo-collapse-width':'logo-width'">
      {{sidebar.collapsed?'C':ccName}}
    </el-col>
    <el-col :span="10">
      <div class="tools" :class="sidebar.collapsed?'tools-collapse':''" @click.prevent="collapse">
        <i class="fa fa-align-justify"></i>
      </div>
    </el-col>
    <el-col :span="4" class="userinfo">
      <a class="userlink" :href="'#/user/' + ccUserName">
        <span class="el-dropdown-link userinfo-inner">
          <img :src="this.ccUserAvatar" /> {{ccUserName}}
        </span>
      </a>
    </el-col>
  </el-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      ccName: 'Cc-Admin',
      ccUserName: '',
      ccUserAvatar: '',
    };
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    collapse() {
      this.$store.dispatch('ToggleSideBar');
    }
  },
  mounted() {
    let user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.ccUserName = user.username || '';
      this.ccUserAvatar = user.avatar || '';
    }
  }
};
</script>

<style lang="less">
.header {
    height: 60px;
    line-height: 60px;
    background: #324157;
    color: #fff;
    .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userlink {
          text-decoration: none;
        }
        .userinfo-inner {
            cursor: pointer;
            color: #fff;
            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin: 10px 0 10px 10px;
                float: right;
            }
        }
    }
    .logo {
        //width:230px;
        height: 60px;
        font-size: 22px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238,241,146,0.3);
        border-right-width: 1px;
        border-right-style: solid;
        img {
            width: 40px;
            float: left;
            margin: 10px 10px 10px 18px;
        }
        .txt {
            color: #fff;
        }
    }
    .logo-width {
        width: 230px;
    }
    .logo-collapse-width {
        width: 60px;
    }
    .tools {
        padding: 0 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        transition: .38s;
        transform-origin: 50% 50%;
        &.tools-collapse {
          transform:rotate(90deg);
        }
    }
}
</style>
