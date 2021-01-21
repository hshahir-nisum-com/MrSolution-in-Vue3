<template>
  <navBar />
  <!-- <h1>abc</h1> -->

  <div class="my.container container mx-auto">
    <slider />
  </div>
  <div>
    <mainCategories />
  </div>
  <div class="container mx-auto">
    <feature />
  </div>
  <div class="container mx-auto">
    <review />
  </div>
  <myFooter />
</template>

<script>
import navBar from "./nav/nav";
import slider from "./slider/slider";
import mainCategories from "./mainCat/mainCategori";
import feature from "./features/featureOfSite";
import review from "./reviews/mainReview";
import myFooter from "./footer/footer";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    navBar,
    slider,
    mainCategories,
    feature,
    review,
    myFooter,
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
