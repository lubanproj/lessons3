<template>
  <el-row>
    <el-col :span="1">

    </el-col>
    <el-col :span="22">
      <el-header>
        <el-row>
          <el-col :span="6">
            <header><a @click="toHome" style="cursor: pointer">Couple</a></header>
          </el-col>
          <el-col :span="18">
            <article>
              <span>{{ article.title }}</span>
            </article>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="25%" style="min-height: 700px;" class="book-aside">
          <el-steps class="el-steps" :active="active" direction="vertical" finish-status="process" space="50px">
            <el-step class="el-step" v-for="article in articleList" :key="article.id" @click="next(article.id)" :title="article.title">

            </el-step>
          </el-steps>
        </el-aside>
        <el-container>
          <div class="book-backend">

          </div>
          <div class="book-cover">
            <el-row class="book-framework">
            <el-col :span="3" class="book-left">
            </el-col>
            <el-col :span="18" class="book-content">
              <div class="book-content-markdown">
                <vue3-markdown-it :source='article.content' />
              </div>
            </el-col>
            <el-col :span="3" class="book-right">
            </el-col>
            </el-row>
          </div>
        </el-container>
      </el-container>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>

</template>

<script lang="ts">

import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

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

    const router = useRouter();
    const toHome = () => {
        router.push("/")
    }

    return {
      active,
      articleList,
      next,
      toHome,
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

.book-aside {
  padding-right: 40px;
}

.book-backend {
  background-color: #e6e6e6;
}
.book-framework {
  min-height: 700px;
}

.book-cover {
  background-color: #eeeeee;
  width: 100%;
}
.book-left {
  background-color: #eeeeee;
}
.book-right {
  background-color: #eeeeee;
}
.book-content {
  margin-top: 10px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2), 2px 6px 20px 2px rgba(0, 0, 0, 0.19);
}
.book-content-markdown {
  padding: 10px;
}
.el-step__description {
  margin-top: 0px;
}

</style>
