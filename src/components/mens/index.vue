<template>
  <sliderForMens
    v-if="filterdData.length > 1"
    :data1="filterdData[0]"
    :data2="filterdData[1]"
  />
</template>
<script>
import sliderForMens from "./slider";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "mensIndex",
  components: {
    sliderForMens,
  },
  data() {
    return {
      temp: [],
      filterdData: [],
    };
  },
  methods: {
    ...mapActions("fetchDataFromApi", ["fetchData"]),
    filterData() {
      this.filterdData = this.fetchDataFromApi.product.filter(
        (category) =>
          category.category === "men clothing" ||
          category.category === "women clothing"
      );
      console.log("temppppp", this.filterdData);
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState(["fetchDataFromApi"]),
  },
};
</script>
