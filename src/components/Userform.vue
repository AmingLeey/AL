<template lang="html">
  <div id="userform" class="container">
    <h3>添加客户资料</h3>
    <form class="form-horizontal "  @submit.prevent="submit">
  <div class="form-group row" v-for="(v,k) in forms">
    <label class="col-sm-2 control-label text-center">{{forms[k].label}}</label>
    <div class="col-sm-10">
      <input :type="forms[k].type" :name="forms[k].model" class="form-control border_radius" :placeholder="forms[k].label" >
    </div>
  </div>
  <div id="Image" class="form-group imgs_all">
  <div class="wrapper">
  <label class="col-md-offset-5 col-md-5 control-label width80">相关照片</label>
  <button class="btn btn-primary border_radius" type="button" @click="change_input()">上传照片</button>
  </div>

    <div id="addTextForm" class="btn-group-vertical btn" @change="setImg($event)">
    </div>
    <div id="img-wrapper" class="btn" @click="deleteImg($event)"></div>
    <!-- <P class="btn-wrapper">
    <mt-button type="primary" @click="submit()">提交</mt-button>
    </P> -->
    </div>

  <div class="form-group">
    <div class="col-md-offset-1 col-md-11 text-center">
      <button type="submit"  class="btn btn-primary border_radius">提交</button>
    </div>
  </div>
</form>
<div class="enpty">
  &nbsp
</div>
  </div>
</template>

<script>
function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
export default {
  name: 'userform',
  data() {
    return {
      imgNum:4,
      forms: [
        {label: '姓名',type: 'text',model: 'name'},{label: '项目名称',type: 'text',model: 'pro'},{label: '日期',type: 'date',model: 'date'},{label: '电话', type: 'text',model: 'phone'},{label: '简述',type: 'text',model: 'summary'},{label: '地址',type: 'text',model: 'address'},{label: '账号',type: 'text',model: 'account'},{label: '密码',type: 'text',model: 'psw'},{label: '小程序ID',type: 'text',model: 'app_id'},{label: '小程序秘钥',type: 'text',model: 'secret_key'},{label: '商务号',type: 'text',model: 'business'},{label: '商务号秘钥',type: 'text',model: 'business_key'},{label: '开发者',type: 'text',model: 'developer'},{label: '开发进度',type: 'text',model: 'process'},{label: '后台地址', type: 'text', model: 'url'},{label: '备注',type: 'text',model: 'remarks'},{label: '特殊要求',type: 'text',model: 'demand'},
      ]
    }
  },
  methods: {
    submit: function (e) {
      if (!this.$store.state.user){
        layer.msg('您不是用户,请登录!',{time:1000},()=>{
            // this.$store.commit('login',true)
            this.$router.push({name:'login'})
        })
        return false
      }
      layer.msg("您确定提交吗?要不您再检查一下",{time:2000})
      console.log(e);
      let userforms = {};
      for (let i = 0; i < e.target.length-1; i++) {
        //将多张图片存为数组
        if (userforms[e.target[i].name]) {
          if (e.target[i].value) {
            userforms[e.target[i].name]+=";"+e.target[i].value;
            userforms[e.target[i].name]=userforms[e.target[i].name].split(";").join(',').split(",");
          }
        }else{
          userforms[e.target[i].name] = e.target[i].value;
        }
      }
      console.log(userforms);
    },
    //根据点击上传按钮触发input
    change_input(){
      let inputArr=$('#addTextForm input');
      let add_inputId='';     //需要被触发的input
      for(let i=0;i<inputArr.length;i++){
          // 根据input的value值判断是否已经选择文件
        if(!inputArr[i].value){          //如果没有选择,获得这个input的ID
           add_inputId=inputArr[i].id;
           break;
        }
      }
      if(add_inputId){                   //如果需要被触发的input ID存在,将对应的input触发
        return  $("#"+add_inputId).click();
      }else{
        alert("最多选择"+this.imgNum+"张图片")
      }
    },
    //当input选择了图片的时候触发,将获得的src赋值到相对应的img
    setImg(e){
      let target=e.target;
      $('#img_'+target.id).attr('src',getFileUrl(e.srcElement));
    },
    //点击图片删除该图片并清除相对的input
    deleteImg(e){
      let target=e.target;
      let inputID='';       //需要清除value的input
      if(target.nodeName=='IMG'){
        target.src='';
        inputID=target.id.replace('img_','');    //获得需要清除value的input
        $('input#'+inputID).val("");
      }
    }
  },
  computed :{
    user() {
      return JSON.parse(this.$store.state.user)
    }
  },
  //页面加载后执行
  mounted(){
    for(let i=0;i<this.imgNum;i++){
     //生成input框，默认为1
    let my_input = $('<input type="file" name="image" class="btn btn-info border_radius" />');   //创建一个input
    my_input.attr('id',i);                           //为创建的input添加id
    $('#addTextForm').append(my_input);                     //将生成的input追加到指定的form
    //生成img，默认为1
    let my_img = $('<img src="" class="border_radius">');
    my_img.attr('id', 'img_'+i);
    my_img.attr('name', 'image');
    my_img.css({"max-width":"50%","max-height":"100px",'float':'left'});   //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
    $('#img-wrapper').append(my_img);
    }
  },
}
</script>

<style lang="less" scoped>
#userform {
    width: 100%;
    color: #008cba;
  .imgs_all{
    width: 92%;
    margin: 0 auto;
  }
  .width80{
    width: 75%;
  }
  .enpty{
    height: 80px;
  }
  .border_radius{
    border-radius: 0.3rem;
  }
}
</style>
