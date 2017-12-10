<template lang="html">
<div id="header">
  <div class="header">
    <div class="title"><span class="">深圳前海圆梦源资产管理有限公司</span></div>
    <div class="header_right" v-if="user">欢迎您，<span class="dl-log-user">Admin</span>
        <a href="#" title="退出系统" class="dl-log-quit" @click = 'loginout'>[退出]</a>
    </div>
    <div class="header_right" v-if="!user">您还没有登录，
        <router-link class="dl-log-user" :to="{ name: 'login', params: {} }">请登录</router-link>
    </div>
   </div>
 </div>
</template>

<script>
export default {
	name: 'header',
	data() {
		return {

		}
	},
	computed: {
		user() {
			return JSON.parse(this.$store.state.user)
		}
	},
	methods: {
        loginout(){
            this.$store.commit('loginout')
        }
	},
	created() {

	}

}
</script>

<style lang="less">
.header {
    width: 100%;
    height: 7rem;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #1b3160;
    color: #fff;
    line-height: 7rem;
    text-align: left;
    .title {
        width: 32%;
        height: 7rem;
        margin-left: 10%;
        font-size: 150%;
    }
    .header_right {
        width: 20%;
        margin-left: 35%;
    }
}
</style>
