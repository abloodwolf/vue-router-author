import {loginByUserInfo} from '../../api/login'
const login = {
  state :{
    username:sessionStorage.getItem('USERNAME'),
    role:sessionStorage.getItem('ROLE'),
    introduce:'',
    newrouter:[]
  },
  mutations:{
    SET_USERNAME:(state,username) =>{
      state.username = username
    },
    SET_ROLE:(state,role) =>{
      state.role = role
    },
    SET_INTRODUCE:(state,introduce) =>{
      state.introduece = introduce
    },
    SET_NEWROUTER:(state,newrouter) =>{
      state.newrouter = newrouter
    }
  },
  actions:{
    Logins({commit},info){
      return new Promise((resolve,reject) =>{
        let data ={};
        loginByUserInfo.map(function(item){//获取所有用户信息
          if(info.username === item.username || info.pew === item.pew){
            commit('SET_USERNAME',item.username);//将username和role进行存储
            sessionStorage.setItem('USERNAME',item.username);//存入session
            commit('SET_ROLE',item.role);
            sessionStorage.setItem('ROLE',item.role)
            return data = {username:item.username,introduce:item.introduce}
          }else{
            return data
          }
        })
        resolve(data)
      }).catch(error =>{
        reject(error)
      })  
    },
    Roles({commit},newrouter){
      return new Promise((resolve,reject) =>{
        commit('SET_NEWROUTER',newrouter) // 存储新路由
        resolve(newrouter)
      }).catch(error =>{
        reject(error)
      })
    },
    Logout({commit,state}){
      return new Promise((resolve,reject) =>{
        commit('SET_USERNAME','')
        commit('SET_ROLE','')
        commit('SET_NEWROUTER',[])
        location.reload()
        sessionStorage.removeItem('USERNAME')
        sessionStorage.removeItem('ROLE')
        resolve()
      }).catch(error =>{
        reject(error)
      })
    }
  }
}

export default login;
