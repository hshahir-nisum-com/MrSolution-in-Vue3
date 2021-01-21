<template>
  <div class="w-full bg-purple-100 mb-20 mt-10 space-x-4">
    <div
      class="container mt-10 mx-auto flex lg:flex-row flex-col lg:space-x-32 lg:p-0 p-5"
    >
      <card
        img="//p.rmjo.in/productSquare/ucr09blq-500x500.jpg"
        title="House Holds"
      />

      <card
        img="//p.rmjo.in/productSquare/n5r2329k-500x500.jpg"
        title="Kitchen Item"
      />
      <card
        img="//p.rmjo.in/productSquare/hc4dc706-500x500.jpg"
        title="Bedroom"
      />
      <card
        img="//p.rmjo.in/productSquare/fhonufah-500x500.jpg"
        title="Mobile & PC"
      />
    </div>
  </div>
</template>
<script>
import card from "./card";
export default {
  name: "mainCategories",
  components: {
    card,
  },
};
</script>