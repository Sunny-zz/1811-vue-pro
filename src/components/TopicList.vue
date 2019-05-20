<template>
  <div>
    <!-- 展示文章列表  -->
    <div v-if="topics.length">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
          <span>{{ topic.last_reply_at | dateFrm }}</span>
        </li>
      </ul>
      <!-- 分页器 -->
      <textarea ref="textarea" v-model="val"></textarea>
      <button @click="add('zzt')">按钮</button>
    </div>

    <div v-else>请稍等一哈...</div>
  </div>
</template>

<script>
// 2019-03-24T13:40:04.762Z
// moment js 专门处理日期
// i18n
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  name: "topiclist",
  data() {
    return {
      total: 0,
      val: "",
      autofocus: false
    };
  },
  watch: {
    "$route.path": {
      handler() {
        // 获取路由的动态参数  type
        const { type } = this.$route.params;
        // [{type:all,total:815},]  判断 类型 更新数据 total
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
    ...mapActions(["getTopics"]),
    add(username) {
      this.val = `@${username} `;
      // 原生
      // document.getElementById("xx").focus();
      // 必须要在 vue  获取真实的 dom 节点，使用 ref
      this.$refs.textarea.focus();
      // 让 textarea 获得焦点
    }
  },
  filters: {
    // 用的一些方法，需要返回值的   看上去和 computed 很类似的
    dateFrm: function(date) {
      moment.locale("zh-cn");
      return moment(date).fromNow();
    }
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
