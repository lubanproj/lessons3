<template>
  <router-view/>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const activeIndex = ref('1');
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
</style>
