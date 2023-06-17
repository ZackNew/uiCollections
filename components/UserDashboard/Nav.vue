<script setup lang="ts">
const tabs = ref(["Users", "Roles", "Access Rights"]);
</script>

<template>
  <div class="flex justify-between pt-8 border-b border-gray-200">
    <div class="flex">
      <div v-for="tab in tabs" :key="tab">
        <button
          class="hover:text-green-500 mr-6 font-bold py-2 transition duration-300 ease-in-out"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 hover:text-green-500 transition duration-300 ease-in-out mr-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      <i
        class="mdi mdi-magnify text-2xl hover:text-green-500 transition duration-300 ease-in-out mr-4"
      ></i>
      <input
        type="text"
        class="w-24 focus:outline-none border-none inputField"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<style scoped>
.inputField {
  background: none !important;
}
</style>
