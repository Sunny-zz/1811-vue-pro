import axios from "axios"
const topics = {
  state: {
    all: []
  },
  mutations: {
    getTopics(state, topics) {
      state.all = topics
    }
  },
  actions: {
    getTopics({ commit }, type) {
      // element-ui  loading
      axios
        .get(`https://www.vue-js.com/api/v1/topics/?tab=${type ? type : "all"}`)
        .then(res => {
          // 关闭
          commit("getTopics", res.data.data)
        })
    }
  }
}
export default topics
