import Vue from "vue";
import Vuex from "vuex";

import { getActivityList } from "../api/index";
import { data } from "../util/data.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activityList: [],
    id: -1,
    pageIndex:1
  },
  // getters: {
  //   data: function (state) {
  //     return state.activityList;
  //   }
  // },
  mutations: {
    changeState(state, data) {
      state.activityList = data;
    },
    addState(state, data) {
      state.activityList = [
        ...state.activityList,
        ...data
      ];
      console.log('@@',state.activityList);
      
    },
    cacheId(state, data) {
      state.id = data;
    },
    cachePageIndex(state, data) {
      state.pageIndex = data;
    },
  },
  actions: {
    async loadData(context, params) {
      const activityList = await getActivityList(params);
      // console.log(activityList, "activityList***********");
      if (activityList.Code === 1) {
        console.log('=== ',params.id ,context.state.id,params.id ===context.state.id);
        
        if (params.id === context.state.id) {
          context.commit("addState", activityList.Data.List);
          context.commit("cachePageIndex", params.index);

        } else {
          context.commit("changeState", activityList.Data.List);
          context.commit("cachePageIndex", 1);

        }
      }

      // context.commit("changeState", data);
      context.commit('cacheId', params.id)
    }
  }
});
export default store;
