<script setup lang="ts">
const props = defineProps([
  "image",
  "price",
  "discountedPrice",
  "name",
  "rating",
  "isInCart",
]);
</script>

<template>
  <div
    class="border border-gray-300 rounded-lg hover:shadow-xl transition duration-500 dark:bg-[#2a2d3e] dark:border-none"
  >
    <img :src="image" alt="" class="w-full h-[65%] object-cover" />
    <div class="px-3">
      <div class="flex iems-center">
        <h1 class="font-bold mr-1 dark:text-white">${{ discountedPrice }}</h1>
        <h1 class="mr-2 text-gray-400 line-through">${{ price }}</h1>
      </div>
      <h1 class="text-sm mt-2 dark:text-gray-300">{{ name }}</h1>
      <div class="flex items-center justify-between mt-2">
        <div
          class="flex items-center bg-yellow-500 text-white px-2 rounded-full text-sm"
        >
          <i class="mdi mdi-star"></i>
          <h1>{{ rating }}</h1>
        </div>
        <div class="bg-orange-600 rounded-full px-1">
          <i class="mdi mdi-cart-arrow-down text-white"></i>
        </div>
      </div>
    </div>
  </div>
</template>
