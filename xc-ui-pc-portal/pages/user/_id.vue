<template>
  <div>
    _id.vue页面，修改用户信息{{id}}，名称：{{name}}
  </div>
</template>

<script>
  export default {
    layout: 'test',
    data () {
      return {
        id: ''
      }
    },
    methods: {

    },
    mounted () {
      this.id = this.$route.params.id
      console.log(this.id)
    },
    async asyncData () {
      console.log('async方法')
      // const a = await new Promise(function (resolve, reject) {
      //   setTimeout(function () {
      //     console.log(1)
      //     resolve(1)
      //   }, 2000)
      // })
      // const b = await new Promise(function (resolve, reject) {
      //   setTimeout(function () {
      //     console.log(2)
      //     resolve(1)
      //   }, 1000)
      // })
      return {
        name: 'Java'
      }
    }
  }
</script>

<style scoped>

</style>
