<template>
  <div v-if="product.length" class="border-2 border-purple-500 w-96">
    <img :src="product[0].image" alt="img" />
    <span>{{ product[0].title }}</span> <br />
    <span>{{ product[0].price }}</span>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Array,
      required: true,
    },
  },
};
</script>