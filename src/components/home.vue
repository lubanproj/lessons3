<template>
  <el-container>
    <el-header>
      <div id="app">Couple</div>
    </el-header>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">动态</el-menu-item>
            <el-menu-item index="2">课程</el-menu-item>
          </el-menu>
        </el-main>
        <el-container>
          <el-aside width="70%">
            <router-view/>
          </el-aside>
          <el-aside width="2%"></el-aside>
          <el-aside width="20%">
            <Form/>
          </el-aside>
          <el-aside width="8%"></el-aside>
        </el-container>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import Form from './form.vue';
import VuePhoneNumberInput from 'vue-phone-number-input';

export default {

  components: {
    VuePhoneNumberInput,
    Form,
  },

  setup() {
    const router = useRouter();
    const store = useStore();
    const phoneNumber = ref('');
    const activeIndex = store.state.activeIndex;
    const handleSelect = (key, keyPath) => {
      let url = ""
      switch (key) {
        case '1':
          store.commit('changeActive','1');
          url = "/news";
          break;
        case '2':
          store.commit('changeActive', 2);
          url = "/courses";
          break;
      }
      router.push(url)
    }

    return {
      activeIndex,
      handleSelect,
      phoneNumber,
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
