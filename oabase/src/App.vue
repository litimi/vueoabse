<template>
  <div id="app">
    <el-row :gutter="24" v-if="$route.meta.isLogin" style="height: 10%">
      <el-header style="height: 100%">
        <Head style="height: 100%"/>
      </el-header>
    </el-row>
    <el-row :gutter="24" :style="{height: $route.meta.isLogin?'90%':'100%'}">
        <el-col v-if="$route.meta.isLogin" :span="4" style="height: 100%" >
          <el-aside width="200px" style="background: #fff;height: 100%;" v-if="$route.meta.isLogin">
            <el-scrollbar
              :native="false"
              wrapStyle=""
              wrapClass=""
              viewClass=""
              viewStyle=""
              :noresize="false"
              tag="section"
              :style="{width: '100%',height: '100%', overflowX: 'hidden'}">
              <LeftMenu></LeftMenu>
            </el-scrollbar>
          </el-aside>
        </el-col>
        <el-col :span="$route.meta.isLogin?20:24" :style="{height: '100%'}">
        <el-scrollbar
        :native="false"
        wrapStyle=""
        wrapClass=""
        viewClass=""
        viewStyle=""
        :noresize="false"
        tag="section"
        :style="{width: '100%',height: '100%', overflowX: 'hidden'}">
          <el-card class="box-card" :style="{height: '100%', background: $route.meta.isLogin?'rgba(255,255,255,0.5)':'none'}">
            <router-view/>
          </el-card>
        </el-scrollbar>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import Footer from '@/components/Footer';
  import LeftMenu from '@/components/LeftMenu';
  export default {
    name: 'APP',
    components:{
      Head, Footer, LeftMenu
    },
    data(){
      return{

      }
    },
    created() {

    },
    methods:{

    }
  }

</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  /*display: flex;*/
  overflow-x: hidden;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}
</style>
