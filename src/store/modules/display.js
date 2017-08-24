import axios from 'axios';


export default {

  state: {
    displayList : [],
    filterList : [],
    userLikeList: [],
    searchList: []
  },

  getters: {
    getList: state => {
      return state.displayList;
    },
    getFilter: state => {
      return state.filterList;
    },
    getLikeList: state => {
      return state.userLikeList;
    },
    //검색 결과 리스트  
    getSearchList: state => {
      return state.searchList;
    }
  },

  mutations: {
    initList: (state, payload) => {
      state.displayList = payload;
      state.filterList = payload;
      
      
      
    },
    // addList: (state, payload) => {
    //   state.displayList.push(payload);
    // },
    filterList: (state, payload) => {
      let filter_title = payload
      let displayList = JSON.parse(JSON.stringify(state.displayList));
      let filteredList = displayList.filter(function (param) {
        if (filter_title[0] === '모든 장르') {
          param.genre = '모든 장르'
        }
        if (filter_title[1] === '모든 지역') {
          param.location = '모든 지역'
        }
        if (filter_title[2] === '모든 날짜') {
          param.duration = '모든 날짜'
        }
        if (param.genre === filter_title[0] && param.location === filter_title[1]) {
          return true
        }
      });
      state.filterList = filteredList;
    },
    //좋아요
    likeList: (state, payload) => {
      let displayList = JSON.parse(JSON.stringify(state.displayList));
      let likedList = displayList.filter(item => {
        return payload.some(param => {
          if(item.id === param){
            return true;
          }
        })
      })
      state.userLikeList = likedList;
    },
    //검색 결과 리스트
    searchList:(state, payload) => {
      //검색 키워드
      let search_value = payload;
      // console.log('SEARCH_VALUE:',search_value)
      //검색값과 비교할 전시 정보 데이터  
      let displayList = JSON.parse(JSON.stringify(state.displayList));
      // console.log('DISPLAYLIST:', displayList)
      //전시 디테일 정보중 일치하는 키워드 가 있는지를 비교하여 필터링.
      
        let searched_list = [];
        displayList.filter(function(member){
            Object.values(member).some(function(value){
                if(typeof value === 'string'){
                  if(value.includes(search_value)){
                    searched_list.push(member);
                  }
                }
              })
            }); 
        //중복제서
        searched_list = Array.from(new Set(searched_list));
      
      //검색 키워드와 일치하는 전시리스트 저장.
      state.searchList = searched_list;
      sessionStorage.setItem('result', JSON.stringify(searched_list));
    }
  },
  

  actions: {
    initList: ({commit}, path) => {
      // Ajax 비동기 통신
      axios
        .get(path)
        .then(response => {
          commit('initList', response.data);
        })
        .catch(error => console.log(error.message));
    },
    addList: (store, payload) => {
      let value = {
        done: false,
        content: payload
      };
      window.setTimeout(function() {
        store.commit('addList', value);
      }, 2000);
    },
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