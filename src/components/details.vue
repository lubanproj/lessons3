<template>

  <el-container>
    <el-aside width="25%" style="min-height: 700px;">
      <el-steps class="el-steps" :active="active" direction="vertical" finish-status="success" space="50px">
        <el-step class="el-step" v-for="chapter in chapterList" :key="chapter.id" @click="next(chapter.id)" :title="chapter.title">

        </el-step>
      </el-steps>
    </el-aside>
    <el-container>

   </el-container>
  </el-container>

</template>

<script lang="ts">

import { ref } from 'vue';

export default {
  name: "details",

  setup() {
    const active = ref(0)
    const chapterList = ref([{
      id: 1,
      title: "前言",
    },{
      id: 2,
      title: "go quick start",
    },{
      id: 3,
      title: "数据类型、变量、条件循环语句",
    },{
      id: 4,
      title: "结构体、函数、数组、切片、map",
    },{
      id: 5,
      title: "异常处理、面向对象(继承、封装、多态)的实现",
    },{
      id: 6,
      title: "并发",
    }])

    const next = (id : number) => {
       active.value = id - 1
    }

    return {
      active,
      chapterList,
      next,
    }
  }
}
</script>

<style scoped>

.el-steps {
  margin-top: 20px;
}

.el-step {
  cursor: pointer;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

</style>
