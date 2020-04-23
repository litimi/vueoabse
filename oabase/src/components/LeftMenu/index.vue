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
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/Warehouse">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>部门管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Department/ItemManagement">公司部门</el-menu-item>
          <el-menu-item index="/Department/Member">部门成员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">物品管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">账务管理</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">用户管理</el-menu-item>
          <el-menu-item index="6-2">权限管理</el-menu-item>
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
