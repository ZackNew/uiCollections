<script setup lang="ts">
const groups = ref([
  {
    id: 1,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/figma_logo_jnoxtm.png",
    name: "Figma Community",
    status: "",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/discord_logo_ssypm8.png",
    name: "Discord Community",
    status: "",
  },
]);
const friends = ref([
  {
    id: 1,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_1_kb56rn.jpg",
    name: "Olivia Davis",
    status: "online",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_1_auleaw.webp",
    name: "Noah Anderson",
    status: "2 hrs",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761249/my-ui-collections-images/anime_1_ybyovx.jpg",
    name: "Ava Wilson",
    status: "online",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/male_1_nbxblm.jpg",
    name: "Isabella Martinez",
    status: "23 mins",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/male_2_lit8sk.jpg",
    name: "Emma Johnson",
    status: "online",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_3_vupgux.jpg",
    name: "Sophia Thompson",
    status: "1 min",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_2_jqhsbs.jpg",
    name: "Liam Smith",
    status: "just now",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_5_q7nkyk.jpg",
    name: "Mia Rodriguez",
    status: "online",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_6_i5vws2.jpg",
    name: "Jackson Lee",
    status: "2 mins",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_7_te9pro.jpg",
    name: "Aiden Walker",
    status: "13 hrs",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/profile_8_uvzux1.jpg",
    name: "Lucas Clark",
    status: "2 hrs",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_3_vupgux.jpg",
    name: "Oliver Wright",
    status: "online",
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761249/my-ui-collections-images/anime_2_l6oeoh.jpg",
    name: "Ethan Turner",
    status: "online",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/anime_3_wkbscv.jpg",
    name: "Amelia Lewis",
    status: "online",
  },
  {
    id: 15,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_2_yrqwug.jpg",
    name: "Harper Scott",
    status: "1 hr",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_4_ittwgd.jpg",
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
