<template>
    <ul>
      <li class="card" v-for="course in data.courses" :key="course.id">
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
</template>

<script lang="ts">

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { GetCourses } from "../api/request";

export default {
  name: "course",

  setup() {
    let data = reactive({
       courses : [],
    });

    GetCourses().then(res => data.courses = res);

    const router = useRouter();
    const toDetails = (id: string) => {
      router.push("/details/" + id);
    }

    return {
      data,
      toDetails,
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
</style>
