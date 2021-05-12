<template>
  <ul>
    <li class="card">
      <el-card class="box-card">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.phoneNumber" placeholder="请输入手机号" size="mini" @input="change"></el-input>
            <el-input v-model="form.verifyCode" placeholder="请输入验证码" size="mini" style="width:60%"></el-input>
            <el-button type="default" @click="getVerifyCode" size="mini" style="width:40%; padding:7px; border-color: #fff;">获取验证码</el-button>
            <el-button type="primary" @click="onSubmit" size="mini" style="width:100%; margin:0 auto;">
              <a :href="redirectURL">登录</a>
            </el-button>
            <el-button type="primary" @click="onSubmit" size="mini" style="width:100%; margin:0 auto;">
              <a @click="toEdit()">写文章</a>
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </li>
  </ul>
</template>

<script>

import { useRouter } from 'vue-router';

export default {

  setup() {

    const router = useRouter();
    const clientID = 'cdb46a0d2179ca58daba'
    const redirectURL = 'https://github.com/login/oauth/authorize?client_id=' + clientID +
        '&redirect_uri=http://localhost:3001/oauth/redirect'

    const form = {
      name: '',
      phoneNumber: '',
      verifyCode: '',
    }

    const toEdit = () => {
      router.push('/edit');
    }

    return {
      form,
      redirectURL,
      toEdit,
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left:0px;
}
.card {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.left {
  float: left;
}
.el-input__inner {
  padding: 0 5px;
}
</style>
