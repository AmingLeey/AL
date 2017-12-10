<template lang="html">

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">梦之源</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link"  :to="{ name: 'index', params: {} }">主页 <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">管理中心</a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item"  :to="{ name: 'search', params: {} }">查询</router-link>
            <router-link class="dropdown-item"  :to="{ name: 'adduser', params: {} }">添加</router-link>
            <router-link class="dropdown-item":to="{ name: 'search', params: {} }">修改</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">友情链接</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '', params: {} }">服务</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '', params: {} }">体验</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '', params: {} }">公司活动</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: '', params: {} }">关于</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 has-success">
        <input class="form-control mr-sm-2 is-valid border_radius" type="text" placeholder="Search" v-model.trim='keys'>
        <button class="btn btn-warning my-2 my-sm-0 border_radius" type="submit" @click.prevent="search">搜索</button>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item">
          <span class="nav-link"   v-if="user">欢迎您, Admin <a @click = 'loginout' style="color:#e99002;" :to="{ name: '', params: {} }">[退出]</a></span>
          <span class="nav-link" v-else>您还没有登录，<router-link style="color:#e99002;" :to="{ name: 'login', params: {} }">请[登录]</router-link></span>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name:'nav',
  data () {
    return{
      keys:''
    }
  },
  computed: {
		user() {
			return JSON.parse(this.$store.state.user)
		}
	},
  methods:{
    search:function(){
        if (!this.user){
          layer.msg('您不是用户,请登录!',{time:1000},()=>{
              // this.$store.commit('login',true)
              this.$router.push({name:'login'})
          })
          return false
        }
        layer.msg('欢迎查询',{time:1000})
      console.log(this.keys);
    },
      loginout(){
          this.$store.commit('loginout')
      }
  }
}
</script>

<style lang="less" scoped>
nav{
  font-size: 90%;
}
  .border_radius{
    border-radius: 0.4rem;
    font-size: 0.78rem;
  }
</style>
