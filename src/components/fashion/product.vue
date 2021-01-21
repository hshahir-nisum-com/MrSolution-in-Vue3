<template>
  <div class="border-2 border-purple-500 flex flex-col">
    <span v-if="product.length">{{ product[0].title }}</span>
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