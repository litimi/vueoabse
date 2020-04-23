<!--面包屑-->
<template>
  <div class="blog_bread">
    <div class="example-container">
      <!--当前位置：-->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item
          v-for="(item,index) in breadList"
          :key="index"
          :to="{ path: item.path }"
        >{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Bread',
    components: {
    },
    data(){
      return {
        breadList: [] // 路由集合
      }
    },
    watch:{
      $route(){
        this.getBreadcrumb();
      }
    },
    methods: {
      isHome(route) {
        return route.name === "首页";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        if (!this.isHome(matched[0])) {
          matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
        }
        this.breadList = matched;
      }
    },
    created() {
      this.getBreadcrumb();
    }
  }
</script>

<style scoped lang="scss">
  .blog_bread  /deep/ .el-breadcrumb{
    display: inline-block;
    display: inline-block;
    height: 30px;
    vertical-align: top;
    line-height: 30px;
  }
  .blog_bread /deep/ .is-link{
    font-weight: normal;
    color: #fff;
  }
  .blog_bread{
    /*float:left;*/
    text-align: left;
  }
</style>>
