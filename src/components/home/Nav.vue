<template>
  <el-row class="tac">
    <el-col class="col" :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        @select="selectEvent"
        background-color="#333"
        text-color="#fff"
        active-text-color="red"
      >
        <el-submenu :index="val.type" v-for="(val, idx) in nav_list" :key="idx">
          <template slot="title">
            <i :class="val.icon"></i>
            <span>{{val.name}}</span>
          </template>
          <el-menu-item-group v-for="(item, index) in val.itemMenu" :key="index">
            <!-- <template slot="title">{{item.name}}</template> -->
            <router-link :to="path">
              <el-menu-item :index="item.type">{{item.classify_name}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      path: "/userinfo"
    };
  },
  components: {},
  created(){
    this.$store.dispatch("getNavData");
  },
  mounted() {
    // let _time = this.$format.formatTime(new Date(), "yyyy年MM月dd日 hh:mm:ss");
    // console.log(_time);
    // this.getData();
  },
  computed: {
    ...mapGetters(["nav_list"])
  },
  methods: {
    // 打开菜单
    handleOpen(key, keypath) {
      console.log("open",key, keypath);
    },
    // 关闭菜单
    handleClose(key, keypath) {
      console.log("close",key, keypath);
    },
    // 选中菜单中的某一选项
    selectEvent(key, keypath) {
      console.log("sel",key, keypath);
    },
    getData() {
      this.$api.post(
        {
          api_name: "kyk.activityPageV1.getBasicPage",
          page_id: 1568720992,
          ad_id: 1
        },
        res => {
          console.log(res);
        }
      );
    }
  }
};
</script>
<style lang='less' scoped>

</style>