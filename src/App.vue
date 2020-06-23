<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link> -->
    
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userid" tag="button">用户</router-link>
    
    <hr>
    
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userid: '981'
    }
  },
  methods: {
    homeClick(){
      // 跳转
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      // 跳转
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  },
}
</script>

<style lang="less">

</style>
