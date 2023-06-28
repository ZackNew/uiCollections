<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <div
      class="border border-gray-300 bg-white dark:bg-[#2a2d3e] dark:border-gray-600"
    >
      <div class="container flex justify-between items-center">
        <div class="flex items-center justify-between md:w-[70%]">
          <a href="/">
            <img
              src="https://res.cloudinary.com/doouhsdka/image/upload/v1687937098/ecomlogo_sodhva.png"
              class="w-8 h-8 md:w-20 md:h-20 mr-2 md:mr-4"
              alt=""
            />
          </a>
          <div
            class="flex items-center border border-gray-300 pr-[3px] pl-4 py-[1px] rounded-full w-full"
          >
            <div class="flex items-center text-gray-400 dark:text-gray-200">
              <i class="mdi mdi-map-marker-outline text-xl mr-1 md:mr-2"></i>
              <p class="mr-1 md:mr-2 whitespace-nowrap dark:text-gray-200">
                New York
              </p>
              <i class="mdi mdi-chevron-down text-2xl"></i>
            </div>
            <p class="text-gray-400 ml-2 font-extralight">|</p>
            <input
              type="text"
              class="focus:ring-0 border-none w-full dark:bg-[#2a2d3e] dark:text-white"
              placeholder="Search for Product..."
              value="Asus"
            />
            <button
              class="rounded-full bg-gradient-to-r from-[#ff9b05] to-[#ff5e00] text-white px-3 py-1 flex items-center"
            >
              <i class="mdi mdi-magnify mr-1 md:mr-2 text-xl"></i>
              Search
            </button>
          </div>
        </div>
        <div class="flex items-center text-gray-500">
          <img
            src="~/assets/images/Flag_of_the_United_States.svg"
            class="w-5 h-5 rounded-full object-cover mr-2"
            alt="flag"
          />
          <p class="mr-0 dark:text-gray-200">EN</p>
          <i
            class="mdi mdi-chevron-down text-xl md:mr-4 dark:text-gray-200"
          ></i>
          <i
            class="mdi mdi-cart-outline text-xl md:mr-4 dark:text-gray-200"
          ></i>
          <i
            class="mdi mdi-bell-outline text-xl md:mr-4 dark:text-gray-200"
          ></i>
          <i
            class="mdi mdi-theme-light-dark text-xl md:mr-4 dark:text-gray-200"
            @click="toggleDark()"
          ></i>
          <p class="text-gray-400 font-extralight md:mx-4 dark:text-gray-200">
            |
          </p>
          <img
            src="https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_2_yrqwug.jpg"
            class="w-10 h-10 object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="border border-gray-300 dark:bg-[#2a2d3e] dark:border-gray-700">
      <div
        class="container flex items-center text-gray-500 py-3 dark:text-gray-200"
      >
        <div class="flex items-center">
          <i class="mdi mdi-format-list-bulleted mr-2"></i>
          <p>Categories</p>
          <i class="mdi mdi-chevron-down text-xl md:mr-4"></i>
        </div>
        <p class="mr-4">Ready to ship</p>
        <p class="mr-4">Personal Protective</p>
        <div class="flex items-center">
          <p>Buyer Central</p>
          <i class="mdi mdi-chevron-down text-xl md:mr-4"></i>
        </div>
        <div class="flex items-center">
          <p>Sell on Odaplace.com</p>
          <i class="mdi mdi-chevron-down text-xl md:mr-4"></i>
        </div>
        <div class="flex items-center">
          <p>Help</p>
          <i class="mdi mdi-chevron-down text-xl md:mr-4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
