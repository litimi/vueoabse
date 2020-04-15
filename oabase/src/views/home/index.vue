<!--首页-->
<template>
  <div class="oabase_back home">
    <main>
      <blockquote>
        "This only way to get rid of a temptatioon is to yield to it.
        Ressist it, and you soul grows sick with longing for the
        things it has forbidden to itself, with desire for what its
        monstrous laws have made monstrous and unlawful"
        <footer>
          <cite>
            Oscar Wilde,
            The Picture of Dorian Gray
          </cite>
        </footer>
      </blockquote>
    </main>
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
  methods: {

  },
}
</script>

<style scoped lang="scss">
  .home{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    main{
      width: 60%;
      height: 40%;
      background: hsla(0, 0%,100%,.3);
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }
    main::before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      /*background: rgba(255,0,0,.5);*/
      border-radius: 10px;
      filter: blur(20px);
      margin: -30px;
    }
  }
</style>
