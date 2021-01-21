<template>
  <div>
    <h1 class="lg:text-2xl">Our Top Selling Product</h1>

    <Product
      v-if="fetchDataFromApi.product"
      :product="fetchDataFromApi.product"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import Product from "./product";

export default {
  name: "FashionProduct",
  components: {
    Product,
  },
  methods: {
    ...mapActions("fetchDataFromApi", ["fetchData"]),
    async apiCall() {
      await this.fetchData();
    },
  },
  async created() {
    await this.apiCall();
  },
  computed: {
    ...mapState(["fetchDataFromApi"]),
  },
};
</script>