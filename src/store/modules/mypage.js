import axios from 'axios';

export default {
  state: {
    userLikeList: []
  },
  getters: {
    getLikeList: state => {
      return state.userLikeList;
    }
  },
  mutations: {
    likeList: (state, payload) => {
      // let like = payload
      let displayList = JSON.parse(JSON.stringify(state.displayList));
      // console.log('displayList', displayList);
      console.log('sadfsafsafs')
      let likedList = displayList.filter(item => {
        return payload.some(param => {
          if(item.id === param){
            return true;
          }
        })
      })
      state.userLikeList = likedList;
    }
  },
  actions: {
    likeList: ({commit}, path) => {
      axios
        .get(path)
        .then(response => {
          commit('likeList', response.data.like);
        })
        .catch(error => console.log(error.message));
    }
  }
};