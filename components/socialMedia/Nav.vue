<script setup lang="ts">
const icons = [
  "mdi-home-outline",
  "mdi-account-group-outline",
  "mdi-chat-processing-outline",
  "mdi-clock-outline",
  "mdi-flag-outline",
  "mdi-cog-outline",
];

let activeIcon = ref(icons[0]);

function toggleActiveIcon(icon: string) {
  activeIcon.value = icon;
}
</script>

<template>
  <div class="bg-[#f2f7fb] rounded-lg px-[5%] py-3 flex justify-around">
    <div v-for="icon in icons" :key="icon">
      <i
        :class="`mdi ${icon} text-2xl p-2 m-2 lg:m-4 rounded-lg transition duration-300 ease-in-out ${
          icon === activeIcon
            ? 'bg-[#0f3a9c] text-[#02c3d4] transition duration-300 ease-in-out'
            : 'text-gray-500 transition duration-300 ease-in-out hover:bg-gray-200'
        }`"
        @click="toggleActiveIcon(icon)"
      ></i>
    </div>
  </div>
</template>

<style scoped></style>
