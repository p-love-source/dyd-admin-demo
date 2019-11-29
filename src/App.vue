<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  created () {
    // console.log("初始化，html模板渲染前");
  },
  mounted () {
    // console.log("请求数据，html模板渲染完成后");
  }
}
</script>>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: .24rem;
}
</style>
