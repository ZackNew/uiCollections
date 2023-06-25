<script setup lang="ts">
const props = defineProps(["img", "name", "link"]);
</script>

<template>
  <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
    <img
      :src="img"
      loading="lazy"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      alt="Issue Dashboard"
    />
    <div
      class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden"
    >
      <div
        class="py-2 text-center font-bold uppercase tracking-wide text-gray-800"
      >
        {{ name }}
      </div>
      <div class="flex items-center justify-center py-2 px-3 bg-gray-400">
        <a
          :href="link"
          class="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
          >check it out</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.pink {
  border-radius: 2rem;
}
</style>
