<script setup>
import Home from "./views/Home.vue";
</script>

<template>
  <div class="container">
    <div class="main">
      <Home />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;

  .main {
    max-width: 1275px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
}
</style>
