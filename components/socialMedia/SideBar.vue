<script setup lang="ts"></script>

<template>
  <div class="bg-[#f0f2ff] h-[100vh]">
    <div class="flex justify-between items-center p-4">
      <i
        class="mdi mdi-menu text-2xl hover:text-blue-500 transition duration-300 ease-in-out mr-4"
      ></i>
      <input
        class="focus:ring-0 border-none rounded-xl w-full bg-slate-200"
        placeholder="Search..."
        type="text"
        name=""
        id=""
      />
    </div>
    <SocialMediaSideBarUsers />
  </div>
</template>
