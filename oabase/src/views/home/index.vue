<!--首页-->
<template>
  <div class="oabase_back">

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      inpContent: ''
    }
  },
  methods: {
    //获取数据
    getArticle() {
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then( (res) => {
        console.log('res', res);
        this.inpContent = res.data[0].name;
      })
    },

    // 添加数据
    insertValue(){
      this.$http.post('/api/insertValue', {
        name: '测试'
      }).then( (res) => {
        console.log('res', res);
        // this.inpContent = res.data[0].name;
      })
    }
  },
}
</script>

<style scoped lang="scss">

</style>>
