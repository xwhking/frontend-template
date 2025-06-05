<template>
  <t-head-menu :v-model="menuValue" :onChange="toOtherPage" theme="dark">
    <t-menu-item value="item1"> 基础信息 </t-menu-item>
    <t-menu-item value="item2"> 入学信息 </t-menu-item>
    <t-menu-item value="item3"> 扩展信息 </t-menu-item>
    <template #operations>
      <div class="t-demo-menu--dark">
        <t-button @click="toLogin" variant="text" shape="square">
          <template #icon><t-icon name="user" /></template>
        </t-button>
      </div>
    </template>
  </t-head-menu>
</template>
<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
const router = useRouter()
const menuValue = ref("item1");
const toLogin = () => {
  menuValue.value = null;
  console.log(menuValue.value);
  router.push("/user/login");
}
const toOtherPage = (value) => {
  console.log(value);
  if(value === "item1") {
    router.push("/basic");
  }else if (value === "item2") {
    router.push("/school");
  }else if (value === "item3") {
    router.push("/expand");
  }
}
</script>
<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;
    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
