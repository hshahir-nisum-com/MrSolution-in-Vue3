<template>
  <div>
    <h1 class="lg:text-2xl">Our Top Selling Product</h1>

    <div class="grid lg:grid-cols-4 " v-if="fetchDataFromApi.product">
      <Product
        v-for="item in fetchDataFromApi.product"
        :key="item"
        :img="item.image"
        :title="item.title"
        :price="item.price"
      />
    </div>
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