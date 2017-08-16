import axios  from 'axios';

// store.dispatch('signinList', 'http://plot.ejjeong.com/');
export default {
  state: {
    userInfo: {}
    // user_pk: '',
    // user_token: ''
  },
  getters:{
    // getUserToken: state => {
    //   return state.user_token;
    // },
    // getUserPk: state => {
    //   return state.user_pk;
    // }
    getuserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
      // setUserInfo: (state,payload) => {
      //     state.user_pk = payload.pk;
      //     state.user_token = payload.token;
      // }
      setUserInfo(state, data){
        state.userInfo = data;
      }
  },
  actions: {
    //회원가입
    // signUp: ({commit},userInfo) => {
    //   console.log(userInfo);
    //   axios
    //     .post(userInfo)
    //     .then(response => {
    //       commit('setUserList', response.data);
    //     })
    //     .catch(error => console.log(error.message));
    // },
    // //로그인
    // signIn: ({commit}, userInfo) => {
    //   console.log(userInfo);
    //   axios
    //     .get(userInfo, {
    //         "pk": userInfo.pk,
    //         "token": userInfo.token
    //     })
    //     .then(response => {
    //       commit('setUserInfo', response.data);
    //     })
    //     .catch(error => console.log(error.message));
    // },
    // //페이스북 로그인
    // fbLogin:  ({commit},userInfo) => {
    //   console.log(userInfo);
    //   axios
    //     .get(path)
    //     .then(response => {
    //       commit('getUserList', response.data);
    //     })
    //     .catch(error => console.log(error.message));
    // }
  }

}