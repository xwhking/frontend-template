<template>
  <div style="width: 350px">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item>
        <h2 style="width: 100%;text-align: center">用户登录</h2>
      </t-form-item>
      <t-form-item name="account">
        <t-input v-model="formData.username" clearable placeholder="请输入账户名">
          <template #prefix-icon>
            <desktop-icon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input v-model="formData.passwordHash" type="password" clearable placeholder="请输入密码">
          <template #prefix-icon>
            <lock-on-icon />
          </template>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-select v-model="formData.role">
          <t-option key="apple" label="Apple" value="apple" />
          <t-option key="orange" label="Orange" value="orange"
          >OrangeContentSlot</t-option
          >
          <t-option key="banana" label="Banana" value="banana" />
        </t-select>
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>

    </t-form>

  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next';
import instance from "../Axios/myAxios.js";

const formData = reactive({
  username: '',
  passwordHash: '',
  role:'',
});

const onReset = () => {
  MessagePlugin.success('重置成功');
};

const onSubmit = async ({ validateResult, firstError }) => {
  const res = await instance.get('http://localhost:8080/api/test/get?id=' + firstError+'&X='+PARAM);
  console.log(res)
};
const handle = async () => {
  const res = await instance.get('http://localhost:8080/api/test/get');//链接前后端
  console.log(res)
}
</script>
