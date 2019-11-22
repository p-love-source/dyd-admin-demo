<template>
  <div class="home">
    
    <!-- 布局一上下结构>左右 -->
    <!-- <el-container class="page">
      <el-header class="page-header">header</el-header>
      <el-container class="page-main">
        <el-aside class="nav" width="200px" style="background-color: rgb(238, 241, 246)">
          <v-nav></v-nav>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container> -->

    <!-- 布局二左右结构>上下 -->
    <el-container class="page">
      <el-aside class="nav" width="2.0rem">
          <p class="title-name">后台管理系统</p>
          <v-nav></v-nav>
      </el-aside>
      <el-container class="page-main">
        <el-header class="page-header clearfix" height="0.56rem">
          <div class="header-left">
            <v-manage></v-manage>
          </div>
          <ul class="header-right clearfix">
            <li><p>安全退出</p></li>
            <li><p>注销</p></li>
          </ul>
        </el-header>
        <el-main class="main">
          <v-main></v-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Nav from "../components/home/Nav";
import ManageNav from "../components/home/ManageNav";
import MainContent from "../components/home/MainContent";
export default {
  name: "index",
  components: {
    "v-nav": Nav,
    "v-manage": ManageNav,
    "v-main": MainContent
  }
}
</script>>
<style lang="less">
@headHeight: 0.56rem;
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.page {
  width: 100%;
  height: 100%;
}
.page-header {
  background: @bgC3;
  font-size: @size14;
  color: @fontCf;
  line-height: @headHeight;
  text-align: center;
  padding: 0 !important;
}
.page-header div {
  float: left;
}
.page-header ul {
  float: right;
}
.page-header ul li {
  float: left;
}
.page-header ul li p {
  padding: 0 20px;
}
.page-main {

}
.title-name {
  font-size: @size18;
  color: @fontCf;
  line-height: @headHeight;
  text-align: center;
}
.nav {
  background: @bgC3;
}
.main {
  background: #ebeef5;
  text-align: center;
}

</style>
