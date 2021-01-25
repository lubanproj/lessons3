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
import { ref } from 'vue'
export default {

  setup() {
    const newsList = ref([
      {
        id: 1,
        title: "有一个超漂亮的女朋友什么体验",
        content: "东川: 情侣们永远不会懂得单身狗的苦逼，单身的生活只有真正的单着的人才能懂。别人携带" +
            "情侣过情人节，双十一，而我却一个人过着我的光棍节。我相信大家最害怕的就是逢年过节亲戚们的问候吧！"
      }, {
        id: 2,
        title: "第一名有71亿次的播放量！盘点世界播放量最高的十首歌！",
        content:"油管网作为世界上最大的视频网站，其中歌曲的MV播放量都高的惊人，本期就为大家整理一期单曲播放量" +
            "最高的十首歌，一起来听听看吧"
      }
    ])
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

hr {
  background-color: #f0f7ff;
  border-color: #ffffff;
  border-radius: 1px;
}

</style>
