<template>
  <div class=" ">
    <carousel :items-to-show="1">
      <slide v-for="ind in 2" :key="ind">
        <img
          :src="getImgUrl(ind)"
          v-bind:alt="ind + ' img missing'"
          class="container mx-auto"
        />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../../../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
  },
};
</script>

<style scoped>
.carousel {
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .carousel {
    width: 80% !important;
    z-index: -1;
  }
}
</style>
