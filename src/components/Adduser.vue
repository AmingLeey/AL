<template lang="html">
    <div id="adduser">
      <myNav class="mynav"/>
      <div class="enpty">&nbsp</div>
      <userform class="userform"/>
      <myFooter/>
    </div>
</template>

<script>
import myNav from "@/components/Nav"
import Userform from '@/components/Userform'
import myFooter from '@/components/Footer'

export default {
  name:'adduser',
  components: {
    Userform,myNav,myFooter
  },
  data(){
    return {
      isAdduser:0
    }
  },
  computed :{
    user() {
      return JSON.parse(this.$store.state.user)
    }
  },
  mounted () {

  },
  created () {
    if (!this.$store.state.user) {
    this.$router.push({name:'login'})
    }
  }
}
</script>

<style lang="less">
    #adduser{
      width: 100%;
      background: #fff;
      .mynav{
        width: 100%;
        z-index: 1000;
        position: fixed;
        top: 0;
      }
      .enpty{
        height: 60px;
      }
      .userform{

      }
    }
</style>
