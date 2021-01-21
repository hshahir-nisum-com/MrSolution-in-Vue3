<template>
  <div class="bg-white">
    <h3 class="text-xl pl-4">{{ heading }}</h3>
    <p class="ml-10 text-l mt-3 ">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "features",
  props: {
    heading: {
      required: true,
    },
    description: {
      required: true,
    },
  },
};
</script>