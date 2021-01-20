<template>
  <div class="container md:w-10 lg:w-auto lg:mt-10 md:mt-10 mt-10 mx-auto">
    <carousel :items-to-show="1">
      <slide v-for="ind in 2" :key="ind">
        <img
          :src="getImgUrl(ind)"
          v-bind:alt="ind + ' img missing'"
          class="container"
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
    Navigation
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    }
  }
};
</script>

<style scoped></style>
