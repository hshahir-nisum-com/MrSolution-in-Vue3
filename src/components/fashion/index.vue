<template>
  <div>
    <navBar />
  </div>
  <div class="container">
    <div class="flex flex-row">
      <div class="bg-opacity-10 mt-10 ml-20 mr-10 w-2/5 lg:block hidden">
        <ul v-if="FashionProduct">
          <li
            v-for="item in variant"
            :key="item"
            class="border border-opacity-25 border-blue-900 text-center py-3 hover:border-gray-500"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <slider />
      </div>
    </div>
    <div class="lg:mx-20 mx-10 mt-10">
      <FashionProduct />
    </div>
  </div>
</template>

<script>
import navBar from "../landingPage/nav/nav";
import slider from "../landingPage/slider/slider";
import FashionProduct from "./fashionProduct";

export default {
  name: "fashion",
  components: {
    navBar,
    slider,
    FashionProduct,
  },
  data() {
    return {
      variant: [
        "Linen",
        "Wool",
        "Cotton",
        "Linen",
        "Wool",
        "Cotton",
        "Linen",
        "Wool",
        "Cotton",
      ],
    };
  },
};
</script>