<template>
  <div class="border border-gray-300 p-5 rounded-lg">
    <h1 class="font-bold mb-8">Filter</h1>
    <div class="mb-6">
      <h1 class="font-bold mb-3">Supplier Types</h1>
      <div class="flex items-center text-gray-500">
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
      <div class="mt-2 flex items-center text-gray-500">
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
      <h1 class="font-bold mb-3">Product Types</h1>
      <div class="flex items-center text-gray-500">
        <input
          type="checkbox"
          name="trade-assurance"
          class="rounded mr-2"
          checked
        />
        <label for="trade-assurance">Ready to Ship</label>
      </div>
      <div class="mt-2 flex items-center text-gray-500">
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
      <h1 class="font-bold mb-3">Condition</h1>
      <div class="flex items-center text-gray-500">
        <input type="checkbox" name="trade-assurance" class="rounded mr-2" />
        <label for="trade-assurance ">New Stuff</label>
      </div>
      <div class="mt-2 flex items-center text-gray-500">
        <input type="checkbox" name="verified-suppliers" class="rounded mr-2" />
        <label for="verified-suppliers">Second hand</label>
      </div>
    </div>
    <div class="w-full">
      <label for="range" class="font-bold">Min Order</label>
      <input
        type="range"
        name="price"
        min="1"
        max="100"
        value="10"
        class="w-full h-2 bg-blue-400 appearance-none"
      />
    </div>
  </div>
</template>

<style scoped>
input[type="checkbox"].rounded:checked {
  border-color: rgb(255, 102, 0);
  background-color: rgb(255, 102, 0);
}
</style>
