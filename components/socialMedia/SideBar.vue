<script setup lang="ts"></script>

<template>
  <div class="bg-[#f0f2ff] dark:bg-[#2d3749] h-[100vh]">
    <div class="flex justify-between items-center p-4">
      <i
        class="mdi mdi-menu text-2xl hover:text-blue-500 transition duration-300 ease-in-out mr-4 dark:text-gray-500"
      ></i>
      <input
        class="focus:ring-0 border-none rounded-xl w-full bg-slate-200 dark:bg-slate-700 dark:text-white"
        placeholder="Search..."
        type="text"
      />
    </div>
    <SocialMediaSideBarUsers />
  </div>
</template>
