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
      axios
        .get(`https://www.vue-js.com/api/v1/topics/?tab=${type ? type : "all"}`)
        .then(res => {
          commit("getTopics", res.data.data)
        })
    }
  }
}
export default topics
