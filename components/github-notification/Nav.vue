<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-between bg-slate-900 py-2 px-5">
    <div class="md:hidden">
      <i class="mdi mdi-menu text-white text-lg"></i>
    </div>
    <div class="flex items-center">
      <svg
        class="h-8 w-8 fill-current hover:text-gray-500 text-white text-sm"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47
					7.59.4.07.55-.17.55-.38
					0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
					1.08.58 1.23.82.72 1.21 1.87.87
					2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
					0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
					2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
					2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
					0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
					1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016
					8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
      <span class="hidden md:block ml-4 relative text-sm mr-4"
        ><input
          class="w-full px-3 py-1 bg-gray-800 placeholder-gray-300 rounded-lg focus:outline-none focus:bg-white focus:text-gray-600 transition duration-300 ease-in-out"
          placeholder="Search or jump to..." />
        <button
          class="mt-1 mr-1 absolute right-0 text-center capitalize text-white rounded-lg"
        >
          <svg class="h-5 w-5" viewBox="0 0 19 20">
            <path
              fill="none"
              stroke="#979A9C"
              opacity="0.4"
              d="M3.5,0.5h12c1.7,0,3,1.3,3,3v13c0,1.7-1.3,3-3,3h-12c-1.7,0-3-1.3-3-3v-13C0.5,1.8,1.8,0.5,3.5,0.5z"
            ></path>
            <path fill="#979A9C" d="M11.8,6L8,15.1H7.1L10.8,6L11.8,6z"></path>
          </svg></button
      ></span>
      <a href="https://www.github.com/pulls" target="_blank"
        ><p
          class="hidden md:block font-bold capitalize whitespace-nowrap text-white mr-3 text-sm hover:text-gray-500"
        >
          pull requests
        </p></a
      >

      <a href="https://www.github.com/issues" target="_blank">
        <p
          class="hidden md:block font-bold capitalize whitespace-nowrap text-white mr-3 text-sm hover:text-gray-500"
        >
          Issues
        </p></a
      >

      <a href="https://www.github.com/marketplace" target="_blank"
        ><p
          class="hidden md:block font-bold capitalize whitespace-nowrap text-white mr-3 text-sm hover:text-gray-500"
        >
          Marketplace
        </p></a
      >

      <a href="https://www.github.com/explore" target="_blank"
        ><p
          class="hidden md:block font-bold capitalize whitespace-nowrap text-white mr-3 text-sm hover:text-gray-500"
        >
          Explore
        </p></a
      >
    </div>
    <div class="flex items-center">
      <i
        class="mdi mdi-bell-outline text-white hover:text-gray-400 text-xl mr-4"
      ></i>
      <div
        class="hidden md:flex items-center text-white hover:text-gray-400 text-xl mr-4"
      >
        <i class="mdi mdi-plus"></i>
        <i class="mdi mdi-menu-down"></i>
      </div>
      <div class="md:flex items-center hidden">
        <img
          src="https://res.cloudinary.com/doouhsdka/image/upload/v1687761245/my-ui-collections-images/profile_6_i5vws2.jpg"
          alt=""
          class="w-6 h-6 rounded-full text-white hover:text-gray-400 text-xl mr-1"
        />
        <i class="mdi mdi-menu-down text-white hover:text-gray-400 text-xl"></i>
      </div>
    </div>
  </div>
</template>
