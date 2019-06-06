<template>
    <div>
      user.vue页面，用户管理导航，<nuxt-link :to="'/user/110'">修改</nuxt-link>
      <nuxt-child />
    </div>
</template>

<script>
    export default {
      layout: 'test'
    }
</script>

<style scoped>

</style>
