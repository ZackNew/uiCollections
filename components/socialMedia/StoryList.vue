<script setup lang="ts">
const stories = [
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/story1_s3nrvp.jpg",
    seen: false,
    name: "quinn",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761243/my-ui-collections-images/story2_yhi3p1.jpg",
    seen: true,
    name: "alex",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/story3_xn9dul.jpg",
    seen: false,
    name: "sarah",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/story4_fpd1fz.jpg",
    seen: false,
    name: "sebastian",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761243/my-ui-collections-images/story5_emtzyb.jpg",
    seen: false,
    name: "stevy",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761243/my-ui-collections-images/story6_vzhaio.jpg",
    seen: true,
    name: "jose",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/story7_zdtvo8.jpg",
    seen: false,
    name: "alita",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761243/my-ui-collections-images/story8_b9xgjz.jpg",
    seen: true,
    name: "andrew",
  },
  {
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761242/my-ui-collections-images/story9_z12obw.jpg",
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
      <p class="text-center text-gray-500 capitalize dark:text-gray-400">
        {{ story.name }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.img-list {
  image-rendering: optimizeQuality;
  border-radius: 50%;
}
</style>
