<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss">
@import '~mdbootstrap/css/style.css';
@import '~mdbootstrap/css/bootstrap.min.css';
// // @import '~fontawesome-free-5.14.0-web/css/all.css';
// @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');

</style>
