<template>
  <h1 class="mt-20 text-2xl">
    Reviews of our <br />
    <span class="text-purple-400 lg:text-3xl ml-20">valuable Customer</span>
  </h1>
  <div class="my-20 myStyle">
    <carousel :items-to-show="1">
      <slide v-for="ind in reviews.length" :key="ind">
        <div class="text-xl">{{ reviews[ind - 1] }}</div>
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
  name: "review",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      reviews: [
        "Qui nulla consequat commodo ea veniam exercitation aliqua sunt exercitation aute cillum",
        "Qui nulla consequat commodo ea veniam exercitation aliqua sunt exercitation aute cillum",
        "Qui nulla consequat commodo ea veniam exercitation aliqua sunt exercitation aute cillum",
      ],
    };
  },
  methods: {
    nextSlide: function () {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("-translate-x-full");

      let nextSlide = activeSlide.nextElementSibling;
      nextSlide.classList.remove("translate-x-full");
      nextSlide.classList.add("translate-x-0");
    },

    previousSlide: function () {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("translate-x-full");

      let previousSlide = activeSlide.previousElementSibling;
      previousSlide.classList.remove("-translate-x-full");
      previousSlide.classList.add("translate-x-0");
    },
  },
};
</script>

<style  scoped>
.myStyle {
  width: 70%;
  align-items: center;
  margin: 50px auto;
}
</style>