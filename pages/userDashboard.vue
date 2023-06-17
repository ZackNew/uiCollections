<script setup lang="ts"></script>

<template>
  <div
    class="grid grid-cols-7 w-full h-full bg-[#F7FAFC] dark:bg-gray-800 transition duration-500 ease-in-out"
  >
    <div
      class="col-span-1 w-full h-[100vh] bg-blue-50 p-8 flex flex-col justify-between dark:bg-gray-900"
    >
      <div>
        <div class="flex justify-between items-center">
          <nuxt-link to="/">
            <h1 class="text-xl font-bold cursor-pointer dark:text-gray-400">
              My Admin
            </h1>
          </nuxt-link>
          <i
            class="mdi mdi-bell-outline text-2xl text-gray-500 hover:text-green-500 transition duration-200"
          ></i>
        </div>
        <hr class="mt-6" />
        <div class="my-6">
          <img
            class="h-14 w-14 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
        <div class="my-6">
          <h1 class="text-xl font-bold dark:text-gray-400">Hello Nakamura</h1>
          <h2 class="font-bold text-sm">
            <span class="text-green-600">Admin </span>
            <span class="dark:text-gray-400"> id438901</span>
          </h2>
        </div>
        <button
          class="bg-green-400 flex justify-between p-2 text-white w-[90%] rounded items-center opacity-80 mt-10"
        >
          <span>Add User</span>
          <span class="text-2xl"> + </span>
        </button>
        <div class="mt-8">
          <nuxt-link to="/">
            <div
              class="flex justify-start items-center mb-5 p-1 hover:bg-white hover:shadow rounded cursor-pointer transition duration-300 dark:hover:bg-gray-800"
            >
              <i class="mdi mdi-view-dashboard text-gray-400 text-xl mr-6"></i>
              <h2 class="font-bold dark:text-gray-400">Dashboard</h2>
            </div>
          </nuxt-link>
          <div
            class="flex justify-start items-center mb-5 p-1 hover:bg-white hover:shadow rounded cursor-pointer transition duration-300 dark:hover:bg-gray-800"
          >
            <i class="mdi mdi-calendar text-gray-400 text-xl mr-6"></i>
            <h2 class="font-bold dark:text-gray-400">Calendar</h2>
          </div>
          <div
            class="flex justify-start items-center mb-5 p-1 hover:bg-white hover:shadow rounded cursor-pointer transition duration-300 dark:hover:bg-gray-800"
          >
            <i class="mdi mdi-account text-gray-400 text-xl mr-6"></i>
            <h2 class="font-bold dark:text-gray-400">Users</h2>
          </div>
          <div
            class="flex justify-start items-center mb-5 p-1 hover:bg-white hover:shadow rounded cursor-pointer transition duration-300 dark:hover:bg-gray-800"
          >
            <i class="mdi mdi-source-repository text-gray-400 text-xl mr-6"></i>
            <h2 class="font-bold dark:text-gray-400">Tasks</h2>
          </div>
        </div>
      </div>
      <div class="flex text-red-500">
        <i class="mdi mdi-logout text-xl mr-6"></i>
        <p class="font-bold">Log Out</p>
      </div>
    </div>
    <div class="col-span-6 w-full h-full px-12">
      <UserDashboardNav />
      <h1 class="mt-6 font-bold text-3xl mb-8 dark:text-gray-400">User List</h1>
      <div class="flex justify-between border-b border-gray-300 pb-2">
        <div>
          <span class="text-green-500"
            >271 <span class="text-gray-400 mr-3">Users;</span>
          </span>
          <span class="text-green-500"
            >325 <span class="text-gray-400 mr-3">Projects;</span>
          </span>
          <span class="text-green-500"
            >554 <span class="text-gray-400">Roles;</span>
          </span>
        </div>
        <div>
          <span class="text-gray-400">Project </span
          ><span class="text-green-500 mr-3">All </span>
          <span class="text-gray-400">Time Added </span
          ><span class="text-green-500 mr-3">All Time </span>
          <span class="text-gray-400">Role </span
          ><span class="text-green-500">All </span>
        </div>
      </div>
      <UserDashboardTable />
    </div>
  </div>
</template>
