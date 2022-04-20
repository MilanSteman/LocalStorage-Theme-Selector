<script>
import DarkMode from "./components/DarkMode.vue";

export default {
  components: {
    DarkMode,
  },
};
</script>

<template>
  <main>
    <h1>Vue Dark-/Light toggle switch</h1>
    <DarkMode />
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
