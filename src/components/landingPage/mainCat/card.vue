<template>
  <div class=" w-72 mx-auto mt-10 lg:mt-0 lg:mb-0 mb-5 bg-white">
    <div class="p-10 ">
      <img alt="picture is missing" class="md:w-72" :src="img" lazy="loaded" />
      <h3 class="lg:text-2xl mt-5">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style  scoped>
</style>