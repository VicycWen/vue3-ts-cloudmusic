<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue';

function fn(){
  console.log('App this:',this);
}
fn();

</script>

<template>
  <Home></Home>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
