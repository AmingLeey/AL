<template lang="html">
  <div id="login">
    <!-- <myCanvas style="position:absolute"/> -->
    <div class="enpty">
      &nbsp
    </div>
        <h2 style="text-align:center;color:#fff;">深圳前海圆梦源资产管理有限公司</h2>
          <h6 style="width:100%;text-align:center;position:relatived;bottom:-3rem;color:#fff;">ShenZhen YuanMengYuan Asset Management Co., Ltd.</h6>

      <form class="form-horizontal width" style="z-index:1000"@submit.prevent="login">
      <div class="form-group">
        <!-- <label  class="col-sm-2 control-label" >账户</label> -->
        <div class="col-sm-offset-1 col-sm-10">
          <input type="text" class="form-control border_radius"  placeholder="账户" v-model="admin">
        </div>
      </div>
      <div class="form-group">
        <!-- <label for="inputPassword3" class="col-sm-2 control-label">密码</label> -->
        <div class=" col-sm-offset-1 col-sm-10">
          <input type="password" class="form-control border_radius" placeholder="密码"v-model="psw">
        </div>
      </div>

          <div class="form-group">
          <div class="col-sm-offset-1 col-sm-10">
          <button type="submit" class="btn btn-info border_radius">登录</button>
        </div>
      </div>
      </form>

  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      admin: '',
      psw: ''
    }
  },
  methods: {
    login() {
      if (!this.admin) {
        alert("请输入账号");
        return false
      }
      if (!this.psw) {
        alert("请输入密码");
        return false
      }
      if (this.admin === "admin" && this.psw === "wsad?8926") {
        console.log("正在登录");
        layer.msg('登录成功!',{time:1000},()=>{
            this.$store.commit('login',true)
            this.$router.push({name:'index'})
        })
        // window.location.href = 'http://localhost:8080/#/index'; //正确登录后页面跳转至
      } else {
        alert("账号密码不匹配")
      }
    },
    canvas(){
          const VW = window.innerWidth;
          const VH = window.innerHeight;

          let getContext = (w, h, c) => {
            if(!$("#login>h2")){
              return false;
            }
              let canvas = document.createElement("canvas");
              canvas.classList.add('header-canvas');
              document.querySelector('h2').appendChild(canvas);
              canvas.width = w || window.innerWidth;
              // canvas.width = w || window.innerWidth;
              canvas.height = h || window.innerHeight;
              return canvas.getContext("2d");
          }

          const ctx = getContext(VW, VH);

          class Particle {
              constructor(x, y, radius, opacity) {
                  this.x = x;
                  this.y = y;
                  this.vx = 0;
                  this.vy = 0;
                  this.radius = 0;
                  this.targetRadius = radius;
                  this.opacity = 0;
                  this.targetOpacity = opacity;
                  this.waxing = true;
              }

              move() {
                  this.vy -= 0.005;
                  this.y += this.vy;

                  this.radius += (this.targetRadius - this.radius) / 50;
                  this.opacity += (this.targetOpacity - this.opacity) / 50;

                  if (this.y < 0) {
                      return true;
                  } else {
                      return false;
                  }
              }

              draw(ctx) {
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                  ctx.fillStyle = `rgba(255,255,255,${this.opacity / 100})`;
                  ctx.fill();
              }
          }

          const particles = [];

          let update = () => {
              let s = Math.round(Math.random() * 100);
              if (s < 10) {
                  let p = new Particle(Math.round(Math.random() * VW), Math.round(Math.random() * VH), Math.ceil(Math.random() * 3), Math.round(Math.random() * 50 + 25));
                  particles.push(p);
              }


              let a = [];
              particles.forEach((e) => {
                  if (!e.move()) {
                      a.push(e);
                  }
              })
              particles.length = 0;
              a.forEach((e) => {
                  particles.push(e);
              })
          }

          let draw = () => {
              ctx.clearRect(0, 0, VW, VH);

              particles.forEach((e) => {
                  e.draw(ctx);
              });
          }

          let frame = setInterval(() => {
              update();
              draw();
          }, 16); // ~60fps
    },
    //背景动态变化
    bg () {
      //背景动态渐变色
      var colors = new Array(
          [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
      var step = 0;
      var colorIndices = [0, 1, 2, 3];
      var gradientSpeed = 0.002;
      function updateGradient() {
          if ($ === undefined) return;//jQuery不存在
          var c0_0 = colors[colorIndices[0]];
          var c0_1 = colors[colorIndices[1]];
          var c1_0 = colors[colorIndices[2]];
          var c1_1 = colors[colorIndices[3]];

          var istep = 1 - step;
          //随机出两种颜色
          var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
          var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
          var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
          var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

          var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
          var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
          var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
          var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
          //设置渐变色变化区间
          $('body').css({
              background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
          }).css({
              background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
          });

          step += gradientSpeed;
          if (step >= 1) {
              step %= 1;
              colorIndices[0] = colorIndices[1];
              colorIndices[2] = colorIndices[3];
              colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
              colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

          }
      }
      setInterval(updateGradient, 20);//渐变速度
    }
  },
  mounted() {
    //画布启动
    this.canvas()
    this.bg()
  }
}
</script>

<style lang="less">
#login{
  width: 100%;
  height: 100%;
  overflow: hidden!important;
  h2{
    margin: 0;
  }
  .enpty{
    height: 5rem;
  }
}
.border_radius{
  border-radius: 0.3rem;
}
.header-canvas {
    position: absolute;
    width: 100%;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
.width {
    width: 30%;
    height: 240px;
    color: #ddd;
    opacity: 0.9;
    text-align: center;
    // border: 1.5px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0px 6px 20px 6px rgba(248, 251, 249, 0.7);
    margin: 11% 35%;
    padding: 4rem;
    .btn {
        width: 100%;
    }
}
</style>
