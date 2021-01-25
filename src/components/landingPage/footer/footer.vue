<template>
  <footer class="my footer bg-white relative pt-1 border-b-2 border-black">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div
          class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"
        >
          <div class="flex flex-col">
            <span class="font-bold text-gray-700 uppercase mb-2"
              >we are in Papers</span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >market of the Month in The News</span
              ></span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >The Dawn published our story</span
              ></span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >The Times of Islamabad purchase from us!!!</span
              ></span
            >
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2"
              >About Us</span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >who we are???</span
              ></span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >Our Vision!!!</span
              ></span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >Lets Bring Change</span
              ></span
            >
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2"
              >Found Us on Social Media</span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >Facebook</span
              ></span
            >
            <span class="my-2"
              ><span class="text-white text-md hover:text-gray-700"
                >Twitter</span
              ></span
            >
            <span class="my-2"
              ><span href="#" class="text-white text-md hover:text-gray-700"
                >LinkedIn</span
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-white font-bold mb-2">
            © 2021 by MrSolution.pk
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style  scoped>
.my.footer {
  color: #fff;
  background: #4554e0;
  -webkit-transition: background 1s; /* For Safari 3.0 to 6.0 */
  transition: background 1s; /* For modern browsers */
  bottom: 0;
  width: 100%;
  position: sticky;
}
.my.footer:hover {
  background: #98a4ec;
}
</style>