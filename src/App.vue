<script setup>
import GeneralLayout from "./Layout/GeneralLayout.vue";
import {useRoute} from "vue-router";
import UserLoginAndRegisterLayout from "./Layout/UserLoginAndRegisterLayout.vue";

const route = useRoute();
</script>

<template>
  <UserLoginAndRegisterLayout v-if="route.path.startsWith('/user')"></UserLoginAndRegisterLayout>
  <GeneralLayout v-else></GeneralLayout>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
