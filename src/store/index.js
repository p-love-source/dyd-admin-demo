import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const isDev = process.env.NODE_ENV === 'development'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: isDev,
  state,
  getters,
  mutations,
  actions
});
