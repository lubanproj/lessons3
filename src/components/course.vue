<template>
  <ul>
    <li class="card" v-for="course in courseList" :key="course.id">
      <el-card class="box-card">
        <h4>{{course.title}}</h4>
        <span>{{course.coverImg}}</span>
        <span>{{course.desc}}</span>
        <span>{{course.author.name}}</span>
        <span>{{course.author.title}}</span>
        <span>{{course.uv}}</span>
        <span>{{course.price}}</span>
      </el-card>
    </li>
  </ul>
</template>

<script lang="ts">

import { ref } from 'vue'

export default {
  name: "course",

  setup() {
     const courseList = ref([
       {
         id : 1,
         title : "vue 入门实战",
         coverImg : "../assets/book1.png",
         desc : "通过实战教学的方式，让你迅速掌握 vue 框架",
         author : {
           name : "DIU哥",
           title : "开源社区活跃者",
         },
         uv : 5632,
         price : "免费",
       },
       {
         id : 2,
         coverImg : "../assets/book2.png",
         title : "go 入门实战",
         desc : "通过实战教学的方式，让你迅速掌握 go 语言",
         author : {
           name : "DIU哥",
           title : "开源社区活跃者",
         },
         uv : 9867,
         price : "免费",
       }
     ]);
  }
}
</script>

<style scoped>

</style>
