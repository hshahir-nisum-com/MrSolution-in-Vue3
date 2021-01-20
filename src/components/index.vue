<template>
  <navBar />
  <!-- <h1>abc</h1> -->
  <slider />
</template>

<script>
import navBar from "./nav/nav";
import slider from "./slider/slider";
// import Slider from './slider/slider.vue';
export default {
  name: "home",
  components: {
    navBar,
    slider
  }
};
</script>
