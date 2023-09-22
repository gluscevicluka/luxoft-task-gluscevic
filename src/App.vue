<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/UI/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
img[alt="www.000webhost.com"] {
  display: none !important;
}
</style>
