<template lang="html">
  <div id="banner" :style="{height:height+'px'}">
    <div class="banner">
        <div class="images">
          <div class="img"> <img src="../assets/340759-106.jpg" alt=""> </div>
          <div class="img"> <img src="../assets/333057-106.jpg" alt=""> </div>
          <div class="img"> <img src="../assets/154575-106.jpg" alt=""> </div>
          <div class="img"> <img src="../assets/124576-106.jpg" alt=""> </div>
          <div class="img"> <img src="../assets/340759-106.jpg" alt=""> </div>
          <div class="img"> <img src="../assets/333057-106.jpg" alt=""> </div>
        </div>
    </div>
    <div class="span">
        <span class="spot" @mouseenter='enterspan' @mouseleave='timer'></span>
        <span @mouseenter='enterspan' @mouseleave='timer'></span>
        <span @mouseenter='enterspan' @mouseleave='timer'></span>
        <span @mouseenter='enterspan' @mouseleave='timer'></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'banner',
  data() {
    return {
      t: null,
      screenWidth: document.body.clientWidth,
      index: 1,
    }
  },
  computed:{
    height(){
      return this.screenWidth*768/1366
    }
  },
  methods:{
    prve(e) {
        let img = $('.images');
        let spans = $('.span > span');
        img.stop(false, true).animate({
            left: '+=+100%'
        }, 1000, 'linear', () => {
            this.index--;
            if (this.index == 0) {
                this.index = 4;
                img.css({
                    left: '-300%'
                });
            }
            spans.each(function (i) {
                $(this).removeClass('spot');
            })
            spans.eq(this.index - 1).addClass('spot');
        })
    },
    next(e) {
        let img = $('.images');
        let spans = $('.span > span');
        img.stop(false, true).animate({
            left: '+=-100%'
        }, 1000, 'linear', () => {
            this.index++;
            if (this.index == 5) {
                this.index = 1;
                img.css({
                    left: '0%'
                });
            }
            spans.each(function (i) {
                $(this).removeClass('spot');
            })
            spans.eq(this.index - 1).addClass('spot');
        })
    },
    timer() {
        this.t = setInterval(() => {
            this.next()
            // this.prve()
        }, 4000)
    },
    cleart() {
        clearInterval(this.t)
    },
    enterspan(e) {
        let img = $('.images');
        let spans = $('.span > span');
        let i = $(e.target).index();
        this.cleart();
        img.stop(true, false).animate({
            left: (i + 0) * -100 + '%'
        }, 1000, 'linear', function () {
            this.index = i + 1;
            spans.each(function (i) {
                $(this).removeClass('spot');
            })
            spans.eq(this.index - 1).addClass('spot');
        })

    }
  },
   mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
  created(){
    this.timer()
  }
}
</script>

<style lang="less">
#banner{
  .span {
      width: 100%;
      height: 50px;
      position:relative;
      top: -10%;
      z-index: 100;
      margin: 0 auto;
      text-align: center;
      >span {
          display: inline-block;
          width: 14px;
          height: 14px;
          background: #ddd;
          border: 1px solid purple;
          border-radius: 7px;
          cursor: pointer;
      }
      .spot {
          background: purple;
      }
    }
}
.banner{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .images{
    position: absolute;
    width: 600%;
    margin-left: -100%;
    div {
      width: 100/6%;
      float: left;
    img{
      width: 100%;
      height: auto;
    }}
  }
}

  .trans-fadeout{
     -webkit-transition:all 0.5s linear;
     -moz-transition:all 0.5s linear;
     -ms-transition:all 0.5s linear;
     -o-transition:all 0.5s linear;
     transition:all 0.5s linear;
  }
  .image-fadeout{position:absolute; margin-top:20px; visibility:hidden; opacity:0;}
  .hover-fadeout:hover .image-fadeout{ visibility:visible; opacity:1; }
</style>
