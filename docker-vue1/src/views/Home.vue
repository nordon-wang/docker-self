<template>
  <div class="about">
    <h1> 版本号 web:1.1</h1>
    <input type="text" v-model="name" placeholder="请输入姓名">
    <label for="gender1">
      <input type="radio" name="gender" v-model="gender" value="0" id="gender1">
      <span>男</span>
    </label>
    <label for="gender2">
      <input type="radio" name="gender" v-model="gender" value="1" id="gender2">
      <span>女</span>
    </label>
    <input type="text" v-model="email" placeholder="请输入邮箱">
    <button type="button" @click.prevent="submit()">请求</button>
  </div>
</template>

<script>
import axios from "axios";

const date = Date.now();
export default {
  name: "Home",
  data() {
    return {
      name: date,
      gender: 1,
      email: `xxx${date}@hotels.cn`
    };
  },
  methods: {
    submit(){
      axios.get('http://localhost:3000/', {
        params: {
          name: this.name,
          gender: this.gender,
          email: this.email
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
};
</script>

<style>
</style>
