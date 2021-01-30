<template>
  <ul>
    {{ newsList }}
    <li class="card" v-for="news in data.newsList" :key="news.id">
      <el-card class="box-card">
        <h4>{{news.title}}</h4>
        {{news.content}}
      </el-card>
    </li>
  </ul>
</template>

<script lang="ts">
import { GetNews } from '../api/request'
import { reactive } from 'vue';

export default {

  setup() {

    let data = reactive({
       newsList : [],
    });

    GetNews().then(res => {
      data.newsList = res;
    });

    return {
      data
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
</style>
