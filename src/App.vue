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
            <el-menu-item index="news">动态</el-menu-item>
            <el-menu-item index="courses">课程</el-menu-item>
          </el-menu>
          <router-view/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
      <el-aside width="15%"></el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import News from './components/news.vue';
import Course from './components/course.vue';

export default {

  components: {
    News,
    Course,
  },

  setup() {
    const router = useRouter();
    const activeIndex = ref('1');
    const handleSelect = (key, keyPath) => {
        const url = "/" + key;
        router.push(url)
    }

    return {
      activeIndex,
      handleSelect,
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
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
