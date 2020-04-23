<!--侧边导航栏-->
<template>
  <div class="blog_leftmenu">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-submenu index="/Department">
        <template slot="title">
          <i class="el-icon-copy-document"></i>
          <span>部门管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Department/ItemManagement">部门管理</el-menu-item>
          <el-menu-item index="/Department/Member">部门成员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Goods">
        <i class="el-icon-box"></i>
        <span slot="title">物品管理</span>
      </el-menu-item>
      <el-menu-item index="/Project">
        <i class="el-icon-files"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>
      <el-menu-item index="/Accounting">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">账务管理</span>
      </el-menu-item>
      <el-submenu index="/systemSet">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/systemSet/User">用户管理</el-menu-item>
          <el-menu-item index="/systemSet/Jurisdiction">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: 'LeftMenu',
    components: {
    },
    data(){
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style scoped lang="scss">

</style>>
