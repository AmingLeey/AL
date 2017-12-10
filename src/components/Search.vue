<template>
<div id="home_box">
  <myNav class="mynav"/>
    <div class="enpty"> &nbsp</div>
  <myMain class="mymain"/>
    <div class="enpty"> &nbsp</div>
  <myFooter/>
</div>
</template>

<script>
import myNav from "@/components/Nav"
import myMain from "@/components/Main"
import myFooter from "@/components/Footer"

export default {
  name: 'home',
  components: {
    myNav,myMain,myFooter
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#home_box {
    width: 100%;
    position: relative;
    background: #fff;
    .mynav{
      width: 100%;
      opacity: 0.8;
      position: fixed;
      top: 0;
      z-index: 1000;
    }
    .enpty{height: 60px}
    .mymain{
      // margin-top: %;
    }
}
</style>
