import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user:$.cookie('user') || null
    },
    mutations:{
        login(state,data){
            let user = JSON.stringify(data)
            $.cookie('user',user)
            state.user = user
        },
        loginout(state){
            $.cookie('user',null,{expires:new Date()})
            state.user = null
        }
    },
    actions:{

    }
})


export default store
