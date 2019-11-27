<template>
    <div class="login">
        <button @click ="getData">{{title}}</button>
    </div>
</template>

<script>
  export default {
    name:'login',
    data () {
      return {
          title: "登录页"
      };
    },
    computed:{

    },
    components: {},

    mounted() {
      
    },

    methods: {
      getData () {
        this.$store.dispatch("loginData", "登录页发送了一个action--loginData")
      }
    },

  }

</script>
<style lang='' scoped>

</style>