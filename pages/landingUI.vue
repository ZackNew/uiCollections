<script setup lang="ts">
const services = [
  {
    id: 1,
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1688456426/satellite-dish-vector-icon-removebg-preview_fafppa.png",
    title: "calculate weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1688456912/plane_2_grmjdl.png",
    title: "Best Flights",
    description: "Engrossed listening Park gate sell they west hard for the.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1688456496/1079b7fd954042faa0f31ea0e77f4991_rfsotf.png",
    title: "local events",
    description:
      "Barton vanity itself do in it. Prefered to men it engrossed listening.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/doouhsdka/image/upload/v1688457258/gear-removebg-preview_z0hyxy.png",
    title: "customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];
</script>

<template>
  <div>
    <LandingNav />
    <LandingHero />
    <div class="container">
      <h1 class="capitalize text-4xl text-center mt-16 mb-8">
        we offer best services
      </h1>
      <div class="grid grid-cols-12 gap-8 mb-96">
        <div
          class="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-3xl hover:shadow-2xl flex flex-col justify-between items-center p-10 transition duration-500 ease-in-out"
          v-for="service in services"
          :key="service.id"
        >
          <img
            :src="service.img"
            class="w-20 h-20 object-contain mb-3"
            alt=""
          />
          <p class="font-bold mb-2">{{ service.title }}</p>
          <p class="text-sm text-center">{{ service.description }}</p>
        </div>
      </div>
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
