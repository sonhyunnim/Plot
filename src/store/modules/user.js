import axios  from 'axios';
import store from '../index'

export default {
  state: {
    userInfo: {},
    
    mypageUser: {},
    commentList: []
  },
  getters:{
    getuserInfo(state) {
      return state.userInfo;
    },
    getError(state) {
      return state.errorMessage;
    },
    getMypageUser(state) {
      return state.mypageUser
    },
    getCommentList(state) {
      return state.commentList
    }
  },
  mutations: {
    setUserInfo(state, data){
      state.userInfo = data;
    },
    mypageUser(state, data){
      state.mypageUser = data;
    },
    commentList(state, data){
      state.commentList = data;
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
          sessionStorage.setItem('token', response.data.token);
          console.log(response.data);
          commit('setUserInfo',response.data);
          userInfo._this.$router.push({path: '/home'});
        })
        .catch(error => {
          let data = error.response.data;
          console.log(data)
          if(data.error[0]) {
            alert('이메일/비밀번호를 확인해주세요');
          }
        })
  
      },
    mypageUser: ({commit}, path) => {
      axios
        .get(path)
        .then(response => {
          commit('mypageUser', response.data);
        })
        .catch(error => console.log(error.message));
    },
    commentList: ({commit}, path) => {
      axios
        .get(path)
        .then(response => {
          commit('commentList', response.data);
        })
        .catch(error => console.log(error.message));
    }

  }
}