<script setup lang="ts">
const projects = [
  {
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1687761242/my-ui-collections-images/userDashboard_d9o2da.png",
    name: "user dashboard",
    link: "/userDashboard",
  },
  {
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/socialMedia_yuofeg.png",
    name: "social media",
    link: "/socialMedia",
  },
  {
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1687777734/comerce_bkxkrc.webp",
    name: "ecommerce",
    link: "/ecommerce",
  },
  {
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1687777734/comerce_bkxkrc.webp",
    name: "github notification clone",
    link: "/githubNotificationClone",
  },
];
</script>

<template>
  <NuxtLayout name="home">
    <div>
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
    </div>
  </NuxtLayout>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
}
</style>
