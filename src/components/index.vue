<template>
  <navBar />
  <!-- <h1>abc</h1> -->
  <div class="container mx-auto">
    <slider />
  </div>
  {{this.handleClick}}
</template>

<script>
import navBar from "./nav/nav";
import slider from "./slider/slider";
import apiFetch from '../api/apiFetch';
export default {
  name: "home",
  components: {
    navBar,
    slider,
  },
  methods: {
     handleClick: apiFetch()
  }
};
</script>
