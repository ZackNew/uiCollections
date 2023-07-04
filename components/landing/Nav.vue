<script setup lang="ts">
const isMenuVisible = ref(false);
</script>

<template>
  <div
    class="md:flex items-center justify-between container md:py-8 px-6 md:px-2"
  >
    <!-- logo -->
    <div class="flex items-center justify-between text-4xl font-bold">
      <a href="/">
        <img class="w-24" src="~/assets/images/jadooLogo.png" alt="" />
      </a>

      <div class="block md:hidden">
        <i
          class="mdi mdi-menu text-2xl"
          @click="isMenuVisible = !isMenuVisible"
        ></i>
      </div>
    </div>
    <!-- menu -->
    <ul
      class="items-center justify-between md:w-[60%] text-slate-700 p-2 md:p-0 shadow-2xl md:shadow-0 rounded-xl md:shadow-none w-full"
      :class="isMenuVisible ? 'md:flex bg-white' : 'hidden md:flex'"
    >
      <li class="py-1 hover:bg-slate-100 px-2 rounded cursor-pointer">
        Destinations
      </li>
      <li class="py-1 hover:bg-slate-100 px-2 rounded cursor-pointer">
        Hotels
      </li>
      <li class="py-1 hover:bg-slate-100 px-2 rounded cursor-pointer">
        Flights
      </li>
      <li class="py-1 hover:bg-slate-100 px-2 rounded cursor-pointer">
        Bookings
      </li>
      <li class="py-1 hover:bg-slate-100 px-2 rounded cursor-pointer">Login</li>
      <button
        class="border border-gray-600 px-3 py-1 rounded hover:bg-slate-100"
      >
        Sign up
      </button>
      <div
        class="flex items-center py-1 hover:bg-slate-100 px-2 rounded cursor-pointer"
      >
        <p>EN</p>
        <i class="mdi mdi-chevron-down"></i>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
