<script setup lang="ts">
const minOrder = ref(10);
</script>

<template>
  <div
    class="border border-gray-300 p-5 rounded-lg dark:bg-[#2a2d3e] dark:border-none"
  >
    <!-- the checkboxes -->
    <h1 class="font-bold mb-8 dark:text-gray-300">Filter</h1>
    <div class="mb-6">
      <h1 class="font-bold mb-3 dark:text-gray-300">Supplier Types</h1>
      <div class="flex items-center text-gray-500 hover:text-orange-600">
        <input
          type="checkbox"
          name="trade-assurance"
          class="rounded mr-2 focus:ring-0"
        />
        <label for="trade-assurance" class="flex items-center"
          ><span
            ><img
              src="/assets/images/crown-svgrepo-com.svg"
              class="w-5 h-5 mr-2"
              alt=""
          /></span>
          Trade Assurance</label
        >
      </div>
      <div class="mt-2 flex items-center text-gray-500 hover:text-orange-600">
        <input type="checkbox" name="verified-suppliers" class="rounded mr-2" />
        <label for="verified-suppliers" class="flex items-center"
          ><span
            ><img
              src="/assets/images/verified.png"
              class="w-5 h-5 mr-2"
              alt="" /></span
          >Verified Suppliers</label
        >
      </div>
    </div>
    <div class="mb-6">
      <h1 class="font-bold mb-3 dark:text-gray-300">Product Types</h1>
      <div class="flex items-center text-gray-500 hover:text-orange-600">
        <input
          type="checkbox"
          name="trade-assurance"
          class="rounded mr-2"
          checked
        />
        <label for="trade-assurance">Ready to Ship</label>
      </div>
      <div class="mt-2 flex items-center text-gray-500 hover:text-orange-600">
        <input
          type="checkbox"
          name="verified-suppliers"
          class="rounded mr-2"
          checked
        />
        <label for="verified-suppliers">Paid Samples</label>
      </div>
    </div>
    <div class="mb-6">
      <h1 class="font-bold mb-3 dark:text-gray-300">Condition</h1>
      <div class="flex items-center text-gray-500 hover:text-orange-600">
        <input type="checkbox" name="trade-assurance" class="rounded mr-2" />
        <label for="trade-assurance ">New Stuff</label>
      </div>
      <div class="mt-2 flex items-center text-gray-500 hover:text-orange-600">
        <input type="checkbox" name="verified-suppliers" class="rounded mr-2" />
        <label for="verified-suppliers">Second hand</label>
      </div>
    </div>
    <!-- the range -->
    <div class="w-full">
      <h1 class="font-bold mb-3 dark:text-gray-300">Min Order</h1>
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        v-model="minOrder"
        class="w-full"
      />
    </div>
    <h1 class="font-bold mb-3 text-sm dark:text-gray-300">{{ minOrder }}</h1>
    <!-- the price -->
    <div>
      <h1 class="font-bold mb-3 dark:text-gray-300">Price</h1>
      <div class="flex items-center max-w-full mb-3">
        <i
          class="mdi mdi-currency-usd text-gray-500 bg-slate-200 dark:text-gray-300 h-10 flex items-center justify-center px-2 rounded-l-lg text-xl dark:bg-slate-600"
        ></i>
        <input
          type="number"
          class="w-[80%] h-10 border border-gray-300 rounded-r-lg focus:ring-0 dark:bg-slate-500 dark:border-none dark:focus:ring-0 dark:text-white"
          value="100"
        />
      </div>
      <div class="flex items-center max-w-full">
        <i
          class="mdi mdi-currency-usd text-gray-500 bg-slate-200 dark:text-gray-300 h-10 flex items-center justify-center px-2 rounded-l-lg text-xl dark:bg-slate-600"
        ></i>
        <input
          type="number"
          class="w-[80%] h-10 border border-gray-300 rounded-r-lg focus:ring-0 dark:bg-slate-500 dark:border-none dark:focus:ring-0 dark:text-white"
          value="5000"
        />
      </div>
    </div>
    <!-- reset Button -->
    <button
      class="w-full py-1 bg-gradient-to-r from-[#ff9b05] to-[#ff5e00] rounded-full mt-6 text-white font-bold"
    >
      Reset Filters
    </button>
  </div>
</template>

<style scoped>
input[type="checkbox"].rounded:checked {
  border-color: rgb(255, 102, 0);
  background-color: rgb(255, 102, 0);
}
input[type="range"] {
  accent-color: #f55050;
}
</style>
