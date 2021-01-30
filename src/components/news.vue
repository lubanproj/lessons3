<template>
  <ul>
    <li class="card" v-for="news in newsList" :key="news.id">
      <el-card class="box-card">
        <h4>{{news.title}}</h4>
        {{news.content}}
      </el-card>
    </li>
  </ul>
</template>

<script lang="ts">
import { GetNews } from '../api/request'
import { useStore } from 'vuex';

export default {

  beforeCreate() {
    const store = useStore();
    let newsList;
    GetNews().then(res => {
      newsList = res;
      store.commit('updateNews', newsList)
    });
  },

  setup() {

    const store = useStore();

    let newsList = store.state.newsList;

    return {
      newsList
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
