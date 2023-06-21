<script setup lang="ts">
const stories = [
  {
    image: "_nuxt/assets/images/story1.jpeg",
    seen: false,
    name: "quinn",
  },
  {
    image: "_nuxt/assets/images/story2.jpeg",
    seen: true,
    name: "alex",
  },
  {
    image: "_nuxt/assets/images/story3.jpeg",
    seen: false,
    name: "sarah",
  },
  {
    image: "_nuxt/assets/images/story4.jpeg",
    seen: false,
    name: "sebastian",
  },
  {
    image: "_nuxt/assets/images/story5.jpeg",
    seen: false,
    name: "stevy",
  },
  {
    image: "_nuxt/assets/images/story6.jpeg",
    seen: true,
    name: "jose",
  },
  {
    image: "_nuxt/assets/images/story7.jpeg",
    seen: false,
    name: "alita",
  },
  {
    image: "_nuxt/assets/images/story8.jpeg",
    seen: true,
    name: "andrew",
  },
  {
    image: "_nuxt/assets/images/story9.jpeg",
    seen: false,
    name: "peter",
  },
];
</script>

<template>
  <div class="flex justify-around overflow-hidden mt-4">
    <div v-for="story in stories" :key="story.image">
      <img
        :class="`img-list w-14 p-1 h-14 lg:w-16 lg:h-16 mr-2 object-cover border-white ${
          story.seen ? '' : 'bg-blue-300'
        }`"
        :src="story.image"
        alt=""
      />
      <p class="text-center text-gray-500 capitalize">{{ story.name }}</p>
    </div>
  </div>
</template>
<style scoped>
.img-list {
  image-rendering: optimizeQuality;
  border-radius: 50%;
}
</style>
