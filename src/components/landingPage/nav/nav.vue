<template>
  <div class="mx-auto bg-purple-700 py-5 px-3 lg:text-xl">
    <div class="flex-row md:justify-between text-white"></div>
    <nav class="flex-row md:justify-between text-white">
      <div class="flex flex-row justify-between">
        <router-link to="/" class="font-sans lg:text-3xl pl-5"
          >Mr. Solution</router-link
        >

        <div class="lg:flex relative text-gray-600 w-2/5">
          <input
            class="border-2 border-purple-300 bg-white lg:h-10 h-8 rounded p-2 text-sm focus:outline-none w-full"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 lg:mt-3  lg:mr-4 mr-3 mt-2"
          >
            <svg
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="2px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
        <button class="md:hidden bg-purple-700" @click="toggleMenu">
          menu
        </button>
        <ul class="hidden md:flex md:flex-row font-sans pt-2" id="mobileMenu">
          <li class="pr-5">
            <router-link to="/fashion"> Fashion </router-link>
          </li>
          <li class="pr-5">
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li class="pr-5"><router-link to="/About">About</router-link></li>
          <li class="pr-5"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="bg-purple-300 relativetochild lg:text-3xl lg:hidden firstChild">
    <nav
      class="flex-row justify-between text-white bg-purple-300"
      :class="{
        'margin-top-neg': flagFormblMenu,
        'margin-top-pos': !flagFormblMenu,
      }"
    >
      <ul class="flex flex-col font-sans mbl-Close-relative" id="mobileMenu">
        <li class="float-right"></li>
        <li class="p-5">
          <button @click="toggleMenu" class="float-right">X</button>
          <router-link to="/fashion"> Fashion </router-link>
        </li>
        <li class="p-5">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li class="p-5"><router-link to="/About">About</router-link></li>
        <li class="p-5"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      flagFormblMenu: true,
    };
  },
  methods: {
    toggleMenu() {
      console.log("clicked");
      if (this.flagFormblMenu) {
        this.flagFormblMenu = false;
      } else {
        this.flagFormblMenu = true;
      }
    },
  },
};
</script>

<style scoped>
.firstChild {
  position: relative;
}
.margin-top-neg {
  margin-top: -330px;
  transition-duration: 1s;
  width: 100%;
  margin-bottom: 90px;
}
.margin-top-pos {
  width: 100%;
  transition-duration: 1s;
  margin-bottom: 30px;
}
</style>
