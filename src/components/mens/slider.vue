<template>
  <div class="container mx-auto">
    <div
      class="bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-gradient-to-l md:bg-gradient-to-r"
    >
      <div class="grid grid-cols-3">
        <div class="col-start-2 col-end-3">
          <product
            :img="data1.image"
            :title="data1.title"
            :price="data1.price"
          />
        </div>
        <div class="col-start-3 col-end-4">
          <product />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import product from "../fashion/product";
export default {
  name: "sliderForMens",
  props: {
    data1: {
      required: true,
    },
    data2: {
      required: true,
    },
  },
  components: {
    product,
  },
};
</script>