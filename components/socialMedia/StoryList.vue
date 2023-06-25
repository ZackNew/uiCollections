<script setup lang="ts">
const stories = [
  {
    image: "assets/images/story1.jpeg",
    seen: false,
    name: "quinn",
  },
  {
    image: "assets/images/story2.jpeg",
    seen: true,
    name: "alex",
  },
  {
    image: "assets/images/story3.jpeg",
    seen: false,
    name: "sarah",
  },
  {
    image: "assets/images/story4.jpeg",
    seen: false,
    name: "sebastian",
  },
  {
    image: "assets/images/story5.jpeg",
    seen: false,
    name: "stevy",
  },
  {
    image: "assets/images/story6.jpeg",
    seen: true,
    name: "jose",
  },
  {
    image: "assets/images/story7.jpeg",
    seen: false,
    name: "alita",
  },
  {
    image: "assets/images/story8.jpeg",
    seen: true,
    name: "andrew",
  },
  {
    image: "assets/images/story9.jpeg",
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
