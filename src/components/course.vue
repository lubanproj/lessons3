<template>
  <el-container>
  <el-header>
    <div id="app">Couple</div>
  </el-header>
  <el-container>
    <el-aside width="15%"></el-aside>
    <el-container>
      <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">动态</el-menu-item>
          <el-menu-item index="2">课程</el-menu-item>
        </el-menu>
      </el-main>
      <ul>
        <li class="card" v-for="course in courseList" :key="course.id">
          <el-card class="box-card">
            <div class="courseItem" @click.active="toDetails(course.id)">
              <el-row>
                <el-col :span="8">
                  <span><img :src="course.coverImg" class="coverImg"/></span>
                </el-col>
                <el-col :span="16">
                  <h4>{{course.title}}</h4>
                  <el-row>
                    <span>{{course.desc}}</span>
                  </el-row>
                  <el-row>
                    <el-col :span="6"><span>作者: {{course.author.name}}</span></el-col>
                    <el-col :span="18"><span>简介: {{course.author.title}}</span></el-col>
                  </el-row>
                  <span>购买数: {{course.uv}}</span> &nbsp;&nbsp;
                  <span>{{course.price}}</span>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </li>
      </ul>
      <el-footer></el-footer>
    </el-container>
    <el-aside width="15%"></el-aside>
  </el-container>
</el-container>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "course",

  setup() {
    const activeIndex = ref('2');
    const courseList = ref([
       {
         id : 1,
         title : "vue 入门实战",
         coverImg : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3971822744,688613491&fm=26&gp=0.jpg",
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
         coverImg : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3976938554,553488700&fm=26&gp=0.jpg",
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

    const handleSelect = (key, keyPath) => {
      let url = ""
      switch (key) {
        case '1':
          url = "/news";
          break;
        case '2':
          url = "/courses";
          break;
      }
      router.push(url)
    }

    const router = useRouter();
     const toDetails = (id: string) => {
        router.push("/details/" + id);
     }

     return {
       activeIndex,
       courseList,
       toDetails,
       handleSelect,
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
.coverImg {
  width: 250px;
  height: 200px;
}
.courseItem {
  line-height:2;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
