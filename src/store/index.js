import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 저장소 모듈
import display from './modules/display';

export default new Vuex.Store({
  
  modules: {
    display
  }

});