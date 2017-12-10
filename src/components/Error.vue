<template lang="html">
  <div class="container">
    <h1>Error</h1>
    <h1>{{msg}}</h1>
    <h4>
      <span class="">是否要前往主页?</span>
      <router-link :to="{ name: 'index', params: {} }">是 </router-link>
      <span> / </span>
      <a href="https://www.baidu.com/">否</a>
    </h4>
  </div>
</template>

<script>
export default {
  name:'error',
  data () {
    return{
      msg:'没有找到您要找的页面'
    }
  },
  created(){
    layer.msg('不小心迷路, 好忧伤啊。。。', {icon: 5});
  }
}
</script>

<style scoped>
h1,h4{
  margin: 5rem;
  text-align: center;
}
.layui-layer-btn1{color: #078eba!important;}
</style>
