<template lang="html">
  <div id="index">
    <myNav class="mynav"/>
    <!-- <myNav class="mynav"/> -->
    <banner/>
    <myMain/>
    <div class="enpty"></div>
    <myFooter/>
  </div>
</template>

<script>
import myNav from '@/components/Nav'
import Banner from '@/components/Banner'
import myMain from '@/components/Main'
import myFooter from '@/components/Footer'

export default {
  name:'index',
  components:{
    myNav,Banner,myMain,myFooter
  },
  data ( ) {
    return {

    }
  },
  computed: {
		user() {
			return JSON.parse(this.$store.state.user)
		}
	}

}
</script>

<style lang="less">
#index{
  width: 100%;
  background: #fff;
  .mynav{
    width: 100%;
    opacity: 0.9;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  .enpty{
    height: 60px;
  }
}

</style>
