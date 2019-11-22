<template>
    <!-- 无限滚动 -->
    <ul class="infinite-list" v-infinite-scroll="load">
        <li class="infinite-item-list" v-for="(i,idx) in count" :key="idx">{{i}}</li>
    </ul>
</template>

<script>

  export default {
    name:'',
    data () {
      return {
          count: 0
      };
    },
    mounted() {

    },
    methods: {
        // 重写load加载方法
        load(){
            this.count += 2;
        }
    },
    computed: {

    }
  }

</script>
<style lang='less' scoped>

</style>