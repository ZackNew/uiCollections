<script setup lang="ts">
const groups = ref([
  {
    id: 1,
    image: "_nuxt/assets/images/figma_logo.png",
    name: "Figma Community",
    status: "",
  },
  {
    id: 2,
    image: "_nuxt/assets/images/discord_logo.png",
    name: "Discord Community",
    status: "",
  },
]);
const friends = ref([
  {
    id: 1,
    image: "_nuxt/assets/images/female_1.jpg",
    name: "Olivia Davis",
    status: "online",
  },
  {
    id: 2,
    image: "_nuxt/assets/images/profile_1.webp",
    name: "Noah Anderson",
    status: "2 hrs",
  },
  {
    id: 3,
    image: "_nuxt/assets/images/anime_1.jpeg",
    name: "Ava Wilson",
    status: "online",
  },
  {
    id: 4,
    image: "_nuxt/assets/images/male_1.jpeg",
    name: "Isabella Martinez",
    status: "23 mins",
  },
  {
    id: 5,
    image: "_nuxt/assets/images/male_2.jpeg",
    name: "Emma Johnson",
    status: "online",
  },
  {
    id: 6,
    image: "_nuxt/assets/images/profile_3.jpeg",
    name: "Sophia Thompson",
    status: "1 min",
  },
  {
    id: 7,
    image: "_nuxt/assets/images/profile_2.jpeg",
    name: "Liam Smith",
    status: "just now",
  },
  {
    id: 8,
    image: "_nuxt/assets/images/profile_5.jpeg",
    name: "Mia Rodriguez",
    status: "online",
  },
  {
    id: 9,
    image: "_nuxt/assets/images/profile_6.jpeg",
    name: "Jackson Lee",
    status: "2 mins",
  },
  {
    id: 10,
    image: "_nuxt/assets/images/profile_7.jpeg",
    name: "Aiden Walker",
    status: "13 hrs",
  },
  {
    id: 11,
    image: "_nuxt/assets/images/profile_8.jpeg",
    name: "Lucas Clark",
    status: "2 hrs",
  },
  {
    id: 12,
    image: "_nuxt/assets/images/male_3.jpeg",
    name: "Oliver Wright",
    status: "online",
  },
  {
    id: 13,
    image: "_nuxt/assets/images/anime_2.jpeg",
    name: "Ethan Turner",
    status: "online",
  },
  {
    id: 14,
    image: "_nuxt/assets/images/anime_3.jpg",
    name: "Amelia Lewis",
    status: "online",
  },
  {
    id: 15,
    image: "_nuxt/assets/images/female_2.jpeg",
    name: "Harper Scott",
    status: "1 hr",
  },
  {
    id: 16,
    image: "_nuxt/assets/images/female_4.jpeg",
    name: "Charlotte King",
    status: "11 mins",
  },
]);
</script>

<template>
  <div class="mt-6 h-[90%] overflow-auto no-scrollbar px-6">
    <h2 class="uppercase text-gray-500 font-bold dark:text-gray-400">
      Your Groups
    </h2>
    <div v-for="group in groups" :key="group.id">
      <SocialMediaUserList
        :image="group.image"
        :name="group.name"
        :status="group.status"
      />
    </div>
    <h2 class="uppercase text-gray-500 font-bold dark:text-gray-400">
      Friends
    </h2>
    <div v-for="friend in friends" :key="friend.id">
      <SocialMediaUserList
        :image="friend.image"
        :name="friend.name"
        :status="friend.status"
      />
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  width: 30px;
  background-color: none;
  width: 7px;
}
.no-scrollbar::-webkit-scrollbar-thumb {
  background-color: #c5c5c5;
  border-radius: 100px;
}
</style>
