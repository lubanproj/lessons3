<template>
  <el-header>
    <el-row>
      <el-col :span="6">
        Couple
      </el-col>
      <el-col :span="18">
        <span>{{ article.title }}</span>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="25%" style="min-height: 700px;">
      <el-steps class="el-steps" :active="active" direction="vertical" finish-status="success" space="50px">
        <el-step class="el-step" v-for="article in articleList" :key="article.id" @click="next(article.id)" :title="article.title">

        </el-step>
      </el-steps>
    </el-aside>
    <el-container>
      <div class="content">
        <vue3-markdown-it :source='article.content' />
      </div>
   </el-container>
  </el-container>

</template>

<script lang="ts">

import { ref, reactive, computed } from 'vue';

export default {
  name: "details",

  setup() {

    const active = ref(0)
    const articleList = reactive([{
      id: 1,
      title: "前言",
      content: "# hello world",
    },{
      id: 2,
      title: "go quick start",
      content: "## hello world",
    },{
      id: 3,
      title: "数据类型、变量、条件循环语句",
      content: "### hello world",
    },{
      id: 4,
      title: "结构体、函数、数组、切片、map",
      content: "#### hello world",
    },{
      id: 5,
      title: "异常处理、面向对象(继承、封装、多态)的实现",
      content: "##### hello world",
    },{
      id: 6,
      title: "并发",
      content: "###### hello world",
    }])

    let article = computed( ()=> {
      return articleList[active.value];
    })

    const next = (id : number) => {
       active.value = id - 1;
    }

    return {
      active,
      articleList,
      next,
      article,
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
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 60px;
}
.el-header span {
  font-size: 1.17em;
  font-weight: bold;
}

.el-aside {
  color: #333;
}

</style>
