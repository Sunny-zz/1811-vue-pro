import Vue from "vue"
import VueRouter from "vue-router"
import Topic from "./components/Topic.vue"
import Home from "./components/Home.vue"
import TopicList from "./components/TopicList.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          component: TopicList
        },
        {
          path: ":type",
          component: TopicList
        }
      ]
    },
    {
      path: "/topic/:id",
      component: Topic
    }
  ],
  mode: "history"
})
