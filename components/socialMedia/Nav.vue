<script setup lang="ts">
const icons = [
  "mdi-home-outline",
  "mdi-account-group-outline",
  "mdi-chat-processing-outline",
  "mdi-clock-outline",
  "mdi-flag-outline",
  "mdi-cog-outline",
];
const isDark = useDark();
const toggleDark = useToggle(isDark);
let activeIcon = ref(icons[0]);

function toggleActiveIcon(icon: string) {
  activeIcon.value = icon;
}
</script>

<template>
  <div class="bg-[#f2f7fb] rounded-lg px-[3%] py-3 flex justify-around">
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
    <div class="flex items-center ml-2">
      <svg
        v-if="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 hover:text-green-500 transition duration-300 ease-in-out mr-4"
        @click="toggleDark()"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      <i
        v-else
        class="mdi mdi-white-balance-sunny text-gray-400 text-xl dark:hover:text-green-500 mr-4"
        @click="toggleDark()"
      ></i>
    </div>
  </div>
</template>

<style scoped></style>
