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
        <el-footer></el-footer>
      </el-container>
      <el-aside width="15%"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
