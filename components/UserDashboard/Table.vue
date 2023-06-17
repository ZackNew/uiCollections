<template>
  <div class="mt-6">
    <table class="w-full">
      <thead>
        <tr>
          <th></th>
          <th class="text-left text-thin text-gray-500">
            Name
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
          <th class="text-left text-thin text-gray-500">
            Login
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
          <th class="w-1/6"></th>
          <th class="text-left text-thin text-gray-500">
            Project
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
          <th class="text-left text-thin text-gray-500">
            Role
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
          <th class="text-left text-thin text-gray-500">
            Status
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
          <th class="text-left text-thin text-gray-500">
            Date
            <span
              class="mdi mdi-sort hover:text-green-400 transition duration-300"
            ></span>
          </th>
        </tr>
      </thead>
      <tr class="h-2"></tr>
      <tbody>
        <tr
          class="bg-white hover:shadow-xl shadow-lg transition duration-300 h-28 dark:bg-gray-700"
        >
          <td>
            <img
              class="h-14 w-14 rounded-full object-cover ml-2"
              src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </td>
          <td class="dark:text-gray-400">Emma Johnson</td>
          <td class="dark:text-gray-400">Emma.John</td>
          <td></td>
          <td>
            <p class="dark:text-gray-400">Aero Treck</p>
            <p class="text-red-400">Search</p>
            <p class="text-gray-400">2 More...</p>
          </td>
          <td>
            <p class="dark:text-gray-400">Designer</p>
            <p class="text-red-400">Designer</p>
          </td>
          <td>
            <p class="dark:text-gray-400">None</p>
            <p class="text-red-400">In Work</p>
          </td>
          <td>
            <p class="text-green-400">20.02.2020</p>
            <p class="text-red-400">07.02.2020</p>
          </td>
        </tr>
        <tr class="spacer"></tr>
        <tr
          class="bg-white hover:shadow-xl shadow-lg transition duration-300 h-28 dark:bg-gray-700"
        >
          <td class="w-20">
            <img
              class="h-14 w-14 rounded-full object-cover ml-2"
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </td>
          <td class="dark:text-gray-400">Liam Rodriguez</td>
          <td class="dark:text-gray-400">Dutche</td>
          <td></td>
          <td>
            <p class="dark:text-gray-400">Aero Treck</p>
          </td>
          <td>
            <p class="dark:text-gray-400">Front-End</p>
          </td>
          <td>
            <p class="text-yellow-500">In Work</p>
          </td>
          <td>
            <p class="text-green-400">24.03.2020</p>
          </td>
        </tr>
        <tr class="spacer"></tr>
        <tr
          class="bg-white hover:shadow-xl shadow-lg transition duration-300 h-28 dark:bg-gray-700"
        >
          <td class="max-w-16">
            <img
              class="h-14 w-14 rounded-full object-cover ml-2"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </td>
          <td class="dark:text-gray-400">Ava Thompson</td>
          <td class="dark:text-gray-400">Ava</td>
          <td></td>
          <td>
            <p class="dark:text-gray-400">Aero Treck</p>
            <p class="text-red-400">Grass Max</p>
            <p class="text-gray-400">Mental</p>
          </td>
          <td>
            <p class="dark:text-gray-400">Designer</p>
            <p class="dark:text-gray-400">Designer</p>
            <p class="dark:text-gray-400">Illustrator</p>
          </td>
          <td>
            <p class="text-green-400">On Check</p>
            <p class="text-yellow-500">In Work</p>
            <p class="dark:text-gray-400">None</p>
          </td>
          <td>
            <p class="text-green-400">20.02.2020</p>
            <p class="text-yellow-500">20.02.2020</p>
            <p class="dark:text-gray-400">20.02.2020</p>
          </td>
        </tr>
        <tr class="spacer"></tr>
        <tr
          class="bg-white hover:shadow-xl shadow-lg transition duration-300 h-28 dark:bg-gray-700"
        >
          <td class="max-w-16">
            <img
              class="h-14 w-14 rounded-full object-cover ml-2"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </td>
          <td class="dark:text-gray-400">Noah Anderson</td>
          <td class="dark:text-gray-400">Noah Anderson</td>
          <td></td>
          <td>
            <p class="dark:text-gray-400">Code Killing</p>
          </td>
          <td>
            <p class="dark:text-gray-400">Hunter</p>
          </td>
          <td>
            <p class="text-yellow-500">In Work</p>
          </td>
          <td>
            <p class="text-green-400">20.02.2020</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.spacer {
  height: 28px;
  display: block;
}
</style>
