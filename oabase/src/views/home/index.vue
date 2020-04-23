<!--首页-->
<template>
  <div class="oabase_back home">
    首页
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
    }
  },
  mounted(){
    this.$http.get('/api/getHome',
      null
    ).then( (res) => {
      console.log('res', res);
    })
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
  .home{
  }
</style>
