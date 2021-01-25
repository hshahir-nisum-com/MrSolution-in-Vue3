<template>
  <div class="my-style-nav">
    <navigationBar />
  </div>
  <router-view />
  <div>
    <footerBar />
  </div>
</template>
<script>
import navigationBar from "./components/landingPage/nav/nav";
import footerBar from "./components/landingPage/footer/footer";
export default {
  components: {
    navigationBar,
    footerBar,
  },
};
</script>
<style>
.my-style-nav {
  margin-bottom: 120px;
}
</style>
