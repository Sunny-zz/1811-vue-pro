<template>
  <div>
    <h1 class="logo">
      <router-link to="/">
        <img src="https://www.vue-js.com/public/images/vue.png" alt>
      </router-link>
    </h1>
    <div v-if="!loginInfo">
      <input type="text" v-model="val">
      <button @click="login(val)">登录</button>
    </div>
    <div v-else>
      <img style="width: 50px" :src="loginInfo.avatar_url" alt>
      <button @click="logout">登出</button>
    </div>
  </div>
</template>
<script>
// 79b3b12e-9631-467b-9210-c68449c98a35
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "top",
  data() {
    return {
      val: "79b3b12e-9631-467b-9210-c68449c98a35"
    };
  },
  computed: {
    ...mapState({
      loginInfo: state => state.login.info
    })
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["logout"])
  },
  created() {
    // 获取本地存储的登录信息
    if (sessionStorage.success) {
      // 登陆过了之后刷新的 要重新把 login 数据更新
      this.$store.commit("login", {
        id: sessionStorage.id,
        loginname: sessionStorage.loginname,
        avatar_url: sessionStorage.avatar_url,
        success: true
      });
    }
  }
};
</script>

<style>
.logo img {
  width: 60px;
}
</style>
