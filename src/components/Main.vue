<template lang="html">

    <div class="container">
      <!-- 客户信息列表 -->
    <form class="font_color" submit="update"  method="post">
      <h2 class="h2">查询结果：</h2>
      <div class="card border-primary mb-3" v-for="(v,k) in user" v-model="user[k].id">
        <div class="card-header">
          <span style="font-weight: bold;">{{user[k].name}}</span>  客户信息 :
        </div>
        <div class="panel-body table-responsive">
          <p class="user_info tr">
            平台详情 : <input type="text"  :name="summary"  v-if='change'  v-model="user[k].summary"><span v-else>{{user[k].summary}}</span>
          </p>
          <table class="table table-bordered">
            <tr class="table-primary">
              <th scope="row" v-for="v in tablehead1">{{v}}</th>
            </tr>
            <tr class="tr">
              <td>{{user[k].date}}</td>
              <td>{{user[k].name}}</td>
              <td><input type="text" v-if='change'  :name="phone"  v-model="user[k].phone"> <span v-else>{{user[k].phone}}</span> </td>
              <td>{{user[k].pro}}</td>
              <td>{{user[k].account}}</td>
              <td>{{user[k].psw}}</td>
              <td>{{user[k].app_id}}</td>
            </tr>
            <tr class="table-primary">
              <th scope="row" v-for="v in tablehead2">{{v}}</th>
            </tr>
            <tr class="tr">
              <td>{{user[k].secret_key}}</td>
              <td>{{user[k].business}}</td>
              <td>{{user[k].business_key}}</td>
              <td><input type="text" v-if='change'  :name="developer"   v-model="user[k].developer"> <span v-else>{{user[k].developer}}</span> </td>
              <td><input type="text" v-if='change'   :name="process"  v-model="user[k].process"> <span v-else>{{user[k].process}}</span> </td>
              <td><input type="text" v-if='change'   :name="url"  v-model="user[k].url"> <span v-else>{{user[k].url}}</span> </td>
              <td><input type="text" v-if='change'   :name="demand"  v-model="user[k].demand"> <span v-else>{{user[k].demand}}</span> </td>
            </tr>
            <th scope="row" class="tr">
              地址 : <input type="text"  v-if='change'  :name="address"   v-model="user[k].address"><span v-else>{{user[k].address}}</span>
            </th>
            <th scope="row" class="tr">
              客户嘱托 :<input type="text"  v-if='change'  :name="remarks"   v-model="user[k].remarks"><span v-else>{{user[k].remarks}}</span>
            </th>
          </table>
        </div>

        <div class="btn">
          <button type="button" v-if='!change'  class="btn btn-warning btn-sm" :id="user[k].id" @click="changes">更新</button>
          <button type="submit" v-if='change'  class="btn btn-primary btn-sm" @click.prevent="cancel">取消</button>
          <button type="submit" v-if='change'  class="btn btn-danger btn-sm" :id="user[k].id" @click.prevent="update">提交</button>
        </div>
      </div>

    </form>
      <!-- 修改信息 -->
    </div>

</template>

<script>
export default {
  name:'userInfo',
  data () {
    return {
      keywords:'',
      width:10,
      update:false,
      change:false,
      tablehead1:[ '签约日期','姓名','电话','平台名称','账号','密码','App_id' ],
      tablehead2:[ 'App秘钥','商务号','商务号秘钥','开发者','开发进度','后台地址','需求' ],
      choice: [
        {label: '姓名',type: 'text',model: 'name'},{label: '项目名称',type: 'text',model: 'pro'},{label: '日期',type: 'date',model: 'date'},{label: '电话', type: 'text',model: 'phone'},{label: '简述',type: 'text',model: 'summary'},{label: '地址',type: 'text',model: 'address'},{label: '账号',type: 'text',model: 'account'},{label: '密码',type: 'text',model: 'psw'},{label: '小程序ID',type: 'text',model: 'app_id'},{label: '小程序秘钥',type: 'text',model: 'secret_key'},{label: '商务号',type: 'text',model: 'business'},{label: '商务号秘钥',type: 'text',model: 'business_key'},{label: '开发者',type: 'text',model: 'developer'},{label: '开发进度',type: 'text',model: 'process'},{label: '后台地址', type: 'text', model: 'url'},{label: '需求',type: 'text',model: 'remarks'},{label: '需求',type: 'text',model: 'demand'},
      ] ,
      user: [
        {id:'1',name:'大东',date:'2017-12-12',summary:'花粉之家,电商平台,模仿华为商城小程序',phone:'18986665888',address:'牛栏前大厦',pro:'花粉之家',account:'8926555666@qq.com',psw:'dadongk1',app_id:'wx123456789',secret_key:'h5d5f45s4f87e8t1ff5d7ff45',business:'145875325k',business_key:'dadong88888888',developer:'郑东',process:'正在开发',url:'www.ymyxiaochengxu.com/dadong',remarks:'八百里加急',demand:'简单大气 ,UI搭配得体'},
          {id:'2',name:'兴旺',date:'2017-12-18',summary:'三星之家,电商平台,模仿三星商城小程序',phone:'18986665888',address:'牛栏前大厦',pro:'三星之家',account:'8926555666@qq.com',psw:'dadongk1',app_id:'wx123456789',secret_key:'h5d5f45s4f87e8t1ff5d7ff45',business:'145875325k',business_key:'dadong88888888',developer:'兴旺',process:'正在开发',url:'www.ymyxiaochengxu.com/dadong',remarks:'八百里加急',demand:'高端大气 ,UI搭配得体'},
            {id:'3',name:'达威',date:'2017-12-15',summary:'苹果之家,电商平台,模仿苹果商城小程序',phone:'18986665888',address:'牛栏前大厦',pro:'苹果之家',account:'8926555666@qq.com',psw:'dadongk1',app_id:'wx123456789',secret_key:'h5d5f45s4f87e8t1ff5d7ff45',business:'145875325k',business_key:'dadong88888888',developer:'达威',process:'正在开发',url:'www.ymyxiaochengxu.com/dadong',remarks:'八百里加急',demand:'精致优美大气 ,有视频'},
              {id:'4',name:'Aming',date:'2017-12-12',summary:'米粉之家,电商平台,模仿小米商城小程序',phone:'18986665888',address:'牛栏前大厦',pro:'米粉之家',account:'8926555666@qq.com',psw:'dadongk1',app_id:'wx123456789',secret_key:'h5d5f45s4f87e8t1ff5d7ff45',business:'145875325k',business_key:'dadong88888888',developer:'郑东',process:'正在开发',url:'www.ymyxiaochengxu.com/dadong',remarks:'无',demand:'简单大气 ,UI搭配得体'}
      ]
    }
  },
  methods : {
    changes (){
      this.change=true
    },
    cancel (){
      this.change=false
    },
    update (e){
      this.change=false
      console.log(e)
    },
    search: function (e) {
      if (!this.$store.state.user){
        layer.msg('您不是用户,请登录!',{time:1000},()=>{
            // this.$store.commit('login',true)
            this.$router.push({name:'login'})
        })
        return false
      }
      console.log(e);
    }
  },
  computed :{
    user() {
      return JSON.parse(this.$store.state.user)
    },
  }
}
</script>

<style lang="less">
.border-primary{
  border-radius: 0.5rem;
  overflow: hidden;
}
.font_color{
  color: #0389b6;
  .tr{
    color: #111;
  }
}
.h2{
  font-size: 1.1rem;
}
.user_info{
  text-indent: 1rem;
  font-size: 0.9rem;
  text-align: left;
}
</style>
