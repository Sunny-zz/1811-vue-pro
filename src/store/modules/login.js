import axios from "axios"
const login = {
  state: {
    info: null
  },
  mutations: {
    login(state, res) {
      state.info = res
    },
    logout(state) {
      // 清空 sesstionStrage
      sessionStorage.clear()
      state.info = null
    }
  },
  actions: {
    // 用户登录的状态 需要我们前台存储下来 直到退出登录
    // 浏览器的本地存储  cookie       localstorage     sessionstorage
    //  localstorage  sessionstorage 用法
    // 默认情况下 sessionStorage 存储的值关闭当前页面就消失了
    // 默认情况下 localStorage 只要不手动清除一直存在
    // 存储的值必须是字符串或数字
    // localStorage.setItem("myCat", "Tom")
    // sessionStorage.setItem("myCat", { name: "tom" })
    // 清空
    // 该语法用于移除 localStorage 项，如下:
    //
    // localStorage.removeItem('myCat');
    // 该语法用于移除所有的 localStorage 项，如下:
    // 移除所有
    // localStorage.clear();
    login({ commit }, accesstoken) {
      // 发送 post 请求
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", { accesstoken })
        .then(res => {
          sessionStorage.setItem("avatar_url", res.data.avatar_url)
          sessionStorage.setItem("id", res.data.id)
          sessionStorage.setItem("loginname", res.data.loginname)
          sessionStorage.setItem("success", res.data.success)
          sessionStorage.setItem("accesstoken", accesstoken)
          commit("login", res.data)
        })
    }
  }
}
export default login
