import axios  from 'axios';
import store from '../index'

export default {
  state: {
    userInfo: {}
    
  },
  getters:{
    
    getuserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
      setUserInfo(state, data){
        state.userInfo = data;
      }
  },
  actions: {
    
    //로그인  
    signIn: ({state,commit}, userInfo) => {
      console.log(userInfo)
      
      let url = store.state.url + '/api/member/login/'
      
      axios
        .post(url, {
          "email": userInfo.email,
          "password": userInfo.password
        })
        .then(response => {
          console.log(response.data);
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('token', response.data.nickname);
          commit('setUserInfo',response.data);
          // _this.$router.push({path: '/home'});
        })
        .catch(error => console.log(error.message));
      
      },
    //페이스북 로그인
    fbLogin:  ({commit},userInfo) => {
      console.log(userInfo);
      axios
        .get(path)
        .then(response => {
          commit('getUserList', response.data);
          console.log(respose.data);
        })
        .catch(error => console.log(error.message));
    }
  }

}