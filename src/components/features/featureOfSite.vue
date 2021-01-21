<template>
  <div class="hidden lg:flex flex-col">
    <div class="row-span-1 text-3xl">
      <div class="rm-main-head">
        There's more <br />
        <span class="text-blue-700 pl-10">to Purchase</span>
      </div>
    </div>
    <div class="container grid grid-rows-2 mx-auto mt-10">
      <div class="row-span-1 bg-blue-300">
        <div class="grid grid-cols-3 gap-3 ">
          <div class="col-span-1">
            <features
              heading="Finest-quality products"
              description="Quality matters to you, and us! That's why we do a strict quality-check
         for every product."
            />
          </div>

          <div class="col-start-2 col-end-3">
            <features
              heading="Free Location"
              description="Changing your house or even your city? We'll relocate your rented products for free."
            />
          </div>

          <div class="col-start-3 col-end-4">
            <features
              heading="Easy return on delivery"
              description="If you don't like the product on delivery, you can return it right away—no questions asked."
            />
          </div>
        </div>
      </div>

      <div class="row-span-3 bg-blue-300">
        <div class="grid grid-cols-3 gap-3 mt-2">
          <div class="col-span-1">
            <features
              heading="Keep upgrading"
              description="Quality matters to you, and us! That's why we do a strict quality-check
      for every product."
            />
          </div>

          <div class="col-start-2 col-end-3">
            <features
              heading="Cancel anytime"
              description="Changing your house or even your city? We'll relocate your rented products for free."
            />
          </div>

          <div class="col-start-3 col-end-4">
            <features
              heading="Free maintenance"
              description="If you don't like the product on delivery, you can return it right away—no questions asked."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import features from "./features";
export default {
  name: "feature",
  components: {
    features,
  },
};
</script>