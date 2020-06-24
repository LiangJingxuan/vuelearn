<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link> -->
    
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userid" tag="button">用户</router-link>
    <!-- <router-link to="/profile" tag="button">档案</router-link> -->

    <!-- 传递参数 -->
    <router-link :to="{
      path: '/profile',
      query: {
        name: 'zhangsan',
        age: 18,
        height: 1.78
      }
    }" tag="button">档案</router-link>
    
    <hr>
    
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <!-- 传递参数 -->
    <button @click="profileClick">档案</button>
    
    <!-- <router-view></router-view> -->
    <!-- 只有Profile,User组件不会被缓存 -->
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>

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
    },
    profileClick(){
      // 跳转传参
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zhangsan',
          age: 18,
          height: 1.78
        }
      })
    }
  },
}
</script>

<style lang="less">

</style>
