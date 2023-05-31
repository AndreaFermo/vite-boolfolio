<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppMain></AppMain>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
