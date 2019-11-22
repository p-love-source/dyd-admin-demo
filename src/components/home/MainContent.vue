<template>
    <!-- main区域 -->
    <div class="main-content">
        <div class="main-content-top" v-show="breadcrumb_list.length > 0">
          <!-- 面包屑el组件 -->

          <!-- 默认的图标分隔符 "/" -->
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: val.path}" v-for="(val, idx) in breadcrumb_list" :key="idx">{{val.name}}</el-breadcrumb-item>
          </el-breadcrumb> -->

          <!-- 自定义图标分隔符 ">" -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: val.path}" v-for="(val, idx) in breadcrumb_list" :key="idx">{{val.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-content-bottom">
          <router-view>
            <!-- 内容区 -->
          </router-view>
        </div>
    </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from "vuex";
  export default {
    name:'maincontent',
    data () {
      return {

      };
    },
    created(){
      this.$store.commit("SET_BREADCRUMB");
    },
    mounted() {

    },
    computed: {
      // ...mapState({
      //   breadcrumb_list: state => state.breadcrumb_list
      // }),
      ...mapGetters(["breadcrumb_list"])
    },
    methods: {
      // ...mapMutations(["SET_BREADCRUMB"])
    }

  }

</script>
<style lang='less' scoped>
  .main-content {
    // background: #fff;
    // padding-left: 0.12rem;
  }
  .main-content-top {
    background: #fff;
    padding-left: 0.12rem;
    margin-bottom: 0.12rem;
  }
  .main-content-bottom {
    background: #fff;
    height: 7.6rem;  // 暂时用来控制高度,后面需要根据浏览器来动态设置高度
  }
  .el-breadcrumb__item {
    line-height: 0.42rem;
    font-size: 0.14rem;
  }
</style>