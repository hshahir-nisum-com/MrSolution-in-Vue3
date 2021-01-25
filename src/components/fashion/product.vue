<template>
  <div
    class="border-2 border-black-500 w-72 p-5 my-10 rounded shadow-inner hover:shadow container mx-auto "
  >
    <img :src="img" alt="img" class="w-48 h-60 mx-auto" />
    <p class="mt-5">{{ title }}</p>
    <br />
    <p class="mt-0">Price : {{ price }}$</p>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    img: { required: true },
    title: { required: true },
    price: { required: true },
  },
};
</script>