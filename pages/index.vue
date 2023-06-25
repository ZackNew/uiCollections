<script setup lang="ts">
const projects = [
  {
    img: "_nuxt/assets/images/userDashboard.png",
    name: "user dashboard",
    link: "/userDashboard",
  },
  {
    img: "_nuxt/assets/images/socialMedia.png",
    name: "social media",
    link: "/socialMedia",
  },
];
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4 mt-4 md:mt-12 justify-center">
      <ProjectsCard
        class="col-span-12 md:col-span-6 lg:col-span-4"
        v-for="project in projects"
        :key="project.name"
        :img="project.img"
        :name="project.name"
        :link="project.link"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
