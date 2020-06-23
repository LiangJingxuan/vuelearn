<template>
  <div>
    <h5>home......</h5>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>