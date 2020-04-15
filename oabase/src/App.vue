<template>
  <div id="app">
    <Head v-if="$route.meta.isLogin"/>
    <el-scrollbar
      :native="false"
      wrapStyle=""
      wrapClass=""
      viewClass=""
      viewStyle=""
      :noresize="false"
      tag="section"
      :style="{width: '100%',overflowX: 'hidden'}">
        <router-view/>
      </el-scrollbar>
    <!--<Footer v-if="$route.meta.isLogin"/>-->
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import Footer from '@/components/Footer';
  export default {
    name: 'APP',
    components:{
      Head, Footer
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
