<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-7 w-full h-full">
    <div class="col-span-1 w-full h-[100vh] bg-blue-50 p-8">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">My Admin</h1>
        <i class="mdi mdi-bell-outline text-2xl text-gray-500"></i>
      </div>
      <hr class="mt-6" />
      <div class="my-6">
        <img
          class="w-16 h-16 rounded-full"
          src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
      </div>
      <div class="my-6">
        <h1 class="text-xl font-bold">Hello Nakamura</h1>
        <h2 class="font-bold text-sm">
          <span class="text-green-600">Admin </span> <span>id438901</span>
        </h2>
      </div>
      <button
        class="bg-green-400 flex justify-between p-2 text-white w-[90%] rounded items-center opacity-80 mt-10"
      >
        <span>Add User</span>
        <span class="text-2xl"> + </span>
      </button>
      <div class="mt-8">
        <div class="flex justify-start items-center mb-5 p-1">
          <i class="mdi mdi-view-dashboard text-gray-400 text-xl mr-6"></i>
          <h2 class="font-bold">Dashboard</h2>
        </div>
        <div class="flex justify-start items-center mb-5 p-1">
          <i class="mdi mdi-calendar text-gray-400 text-xl mr-6"></i>
          <h2 class="font-bold">Calendar</h2>
        </div>
        <div class="flex justify-start items-center mb-5 p-1">
          <i class="mdi mdi-account text-gray-400 text-xl mr-6"></i>
          <h2 class="font-bold">Users</h2>
        </div>
        <div class="flex justify-start items-center mb-5 p-1">
          <i class="mdi mdi-source-repository text-gray-400 text-xl mr-6"></i>
          <h2 class="font-bold">Tasks</h2>
        </div>
      </div>
    </div>
    <div class="col-span-6 w-full h-full"></div>
  </div>
</template>
