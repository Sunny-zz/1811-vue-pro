<template>
  <div>
    <!-- 展示文章列表  -->
    <ul v-if="topics.length">
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
      </li>
    </ul>
    <div v-else>请稍等一哈...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "topiclist",
  watch: {
    "$route.path": {
      handler() {
        // 获取路由的动态参数  type
        const { type } = this.$route.params;
        this.getTopics(type);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      topics: state => state.topics.all
    })
  },
  methods: {
    ...mapActions(["getTopics"])
  }
  // created() {
  //   // 获取当前页面的地址 根据地址发请求
  //   console.log(11);
  //   this.getTopics();
  // }
};
</script>

<style>
</style>
