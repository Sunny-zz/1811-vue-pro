<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import axios from "axios";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>
