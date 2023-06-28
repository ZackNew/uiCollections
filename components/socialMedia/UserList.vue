<script setup lang="ts">
const props = defineProps(["image", "name", "status"]);
</script>

<template>
  <div
    class="px-2 py-1 hover:bg-blue-100 rounded-lg transition duration-200 dark:hover:bg-gray-600 ease-in-out"
  >
    <div class="flex justify-between items-center my-2">
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-3" :src="image" alt="" />
        <p class="font-semibold text-gray-600 truncate dark:text-gray-400">
          {{ name }}
        </p>
      </div>
      <div>
        <i
          v-if="status === 'online'"
          class="mdi mdi-checkbox-blank-circle text-sm text-blue-400 text-end"
        ></i>
        <p v-else class="text-gray-500 text-sm dark:text-gray-300">
          {{ status }}
        </p>
      </div>
    </div>
  </div>
</template>
