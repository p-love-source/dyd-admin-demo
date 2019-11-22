<template>
  <div class="manage">
    <el-menu
      mode="horizontal"
      default-active="2"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
      @select="selectEvent"
      background-color="#333"
      text-color="#fff"
      active-text-color="red"
    >
      <el-submenu :class="{active: curSelIndex == idx}" :index="val.type" v-for="(val,idx) in manage_list" :key="idx">
        <template slot="title">
          <!-- <i :class="val.icon"></i> -->
          <span>{{val.name}}</span>
        </template>
        <el-menu-item-group v-for="(item, index) in val.itemMenu" :key="index">
          <el-menu-item :index="item.type" @click="jump(item, idx)">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch("getManageList");
    // console.log(this.manage_list);
  },
  mounted() {
    
  },
  computed: {
    ...mapState({
      // manage_list: "manage_list",
      manage_list: state => state.manage_list
    }),
    ...mapGetters(["curSelIndex"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("open",key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close",key, keyPath);
    },
    selectEvent(key, keyPath) {
      console.log("sel",key, keyPath);
    },
    ...mapMutations(["SET_MANAGE_NAV_STYLE"]),
    jump(val,idx){
      this.$router.push(val.path);
      // console.log(this.$router);
      this.$store.commit("SET_MANAGE_NAV_STYLE",idx);
    }
  },
  components: {

  }
};
</script>
<style lang='less'>
// 改变导航栏高度需要在控制台选中的层级上面再加一点层级才能覆盖默认样式
// .manage .el-menu--horizontal .el-submenu .el-submenu__title {
//   height: 0.56rem;
//   line-height: 0.56rem;
//   border-bottom: 2px solid transparent;
//   color: #909399;
// }

.active {
  background-color: rgb(38, 163, 212) !important;
}
.el-menu-item .is-active {
   background-color: orange !important;
}
.el-submenu__title {
  height: 0.56rem !important;
  line-height: 0.56rem !important;
}
.el-submenu__title:hover{
  // background: orange !important;
  opacity: 0.5;
}
</style>