<template lang="html">
  <div id="footer">
    <h6>©2017 深圳圆梦源资产管理有限公司</h6>
  </div>
</template>

<script>
export default {
  name:'footer',
  data(){
    return{

    }
  },

}
</script>

<style lang="less">
  #footer{
    width: 100%;
    height: 80px;
    position: relative;
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
    h6{
      width: 50%;
      color: #0990bc;
      color: #eee;
      text-align: center;
      position: absolute;
      top:50%;
      left: 25%;
    }
  }
</style>
