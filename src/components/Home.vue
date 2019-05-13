<template>
  <div>
    <nav class="nav">
      <ul>
        <li>
          <router-link :class="{active: $route.path === '/' || $route.path === '/all'}" to="/all">首页</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/good">精华</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/weex">weex</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/share">分享</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/ask">问答</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/job">招聘</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.nav ul {
  display: flex;
}
.nav ul li {
  margin-right: 10px;
}
.active {
  color: red;
  background-color: yellowgreen;
}
</style>
