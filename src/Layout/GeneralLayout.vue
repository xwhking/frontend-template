<script setup>

import Header from "./Header.vue";
</script>

<template>
  <t-layout class="layout">
    <t-header class="myHeader"><Header></Header></t-header>
    <t-content class="myContent">
      <router-view></router-view>
    </t-content>
    <t-footer class="myFooter"><a href="https://www.github.com/xwhking">@copyright created by xwhking</a></t-footer>
  </t-layout>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.layout{
  margin: 0;
  padding: 0;
  background: url("/bg.png") no-repeat center center fixed;
  background-size: 100% 100%;
}
.myHeader {
  height: 5vh;
  text-align: center;
  line-height: 5vh;
}

.myContent {
  height: 88vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.myFooter {
  position: sticky;
  bottom: 0;
  background-color: #f5f5f5;
  width: 100%;
  text-align: center;
  /* 柔和的浅色渐变（左上到右下） */
  background: linear-gradient(to bottom, #f8f9ff 0%, #e6f0ff 100%);
  height: 5vh;
}
.myFooter a {
  text-decoration: none;
  color: black;
  line-height: 5vh;
}

</style>