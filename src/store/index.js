import Vue from "vue"
import Vuex from "vuex"
import topics from "./modules/topics"
import login from "./modules/login"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topics,
    login
  }
})
