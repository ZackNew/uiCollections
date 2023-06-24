<script setup lang="ts">
const comments = [
  {
    img: "_nuxt/assets/images/pp1.jpg",
    name: "Adrian",
    comment: "We enjoyed your service. ",
    time: "7:30",
  },
  {
    img: "_nuxt/assets/images/pp2.jpeg",
    name: "Milo Nick",
    comment: "Keep the good work 👍 ",
    time: "7:30",
  },
  {
    img: "_nuxt/assets/images/pp3.jpg",
    name: "Oscar Oasis",
    comment: "Happy Aniversary 😀",
    time: "7:31",
  },
  {
    img: "_nuxt/assets/images/pp4.jpg",
    name: "Micheal",
    comment: "Enjoy",
    time: "7:32",
  },
  {
    img: "_nuxt/assets/images/pp5.jpeg",
    name: "Scofield",
    comment: "Happy aniversary guys...",
    time: "7:32",
  },
];
</script>

<template>
  <div class="bg-[#f0f2ff] h-[100vh] overflow-auto px-[6%]">
    <div class="flex justify-end items-center py-5 px-2">
      <i
        class="mdi mdi-bell-outline text-xl text-gray-500 hover:text-green-500 transition duration-500 mr-8"
      ></i>
      <div class="flex items-center">
        <img
          class="w-7 h-7 rounded-full mr-3"
          src="_nuxt/assets/images/owner.jpg"
          alt=""
        />
        <div class="mr-3">
          <p class="font-bold text-sm">Zack White</p>
        </div>
        <i class="mdi mdi-arrow-down-drop-circle-outline text-blue-500"></i>
      </div>
    </div>
    <div class="bg-white rounded-xl">
      <div class="relative flex flex-row justify-center">
        <div
          class="flex flex-col justify-between gradient-background absolute w-full h-full px-3 pt-3 pb-10"
        >
          <div class="flex">
            <p
              class="uppercase bg-pink-500 text-white py-[2px] text-xs w-[45px] rounded flex justify-center mr-3"
            >
              live
            </p>
            <div
              class="uppercase bg-black text-white py-[2px] text-xs w-[55px] rounded flex justify-around opacity-40"
            >
              <i class="mdi mdi-eye text white"></i>
              <p>342.3k</p>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <div class="flex items-center">
                <img
                  class="w-7 h-7 rounded-full mr-1"
                  src="_nuxt/assets/images/male_3.jpeg"
                  alt=""
                />
                <div>
                  <p class="font-bold text-sm">
                    <span class="text-gray-300">Alex </span
                    ><span class="text-white">Happy Celebrations</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center mt-3">
                <img
                  class="w-7 h-7 rounded-full mr-1"
                  src="_nuxt/assets/images/female_4.jpeg"
                  alt=""
                />
                <div>
                  <p class="font-bold text-sm">
                    <span class="text-gray-300">Maria </span
                    ><span class="text-white">Just joined here ✋</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <img src="_nuxt/assets/images/fire.png" class="w-3 h-4" alt="" />
              <p class="text-white">26.3k</p>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between absolute -bottom-[8%] h-38 bg-blue-700 rounded-lg py-2 px-6 text-blue-200 w-[94%] items-center"
        >
          <div>
            <p class="capitalize text-sm">live Chat</p>
            <div class="flex items-center">
              <i class="mdi mdi-magnify"></i>
              <p class="capitalize text-sm">15.6k Peoples</p>
            </div>
          </div>
          <div class="flex text-lg">
            <i class="mdi mdi-tune mr-2"></i>
            <i class="mdi mdi-close"></i>
          </div>
        </div>
        <div class="h-full overflow-hidden">
          <img class="rounded-t-xl" src="_nuxt/assets/images/live.jpg" alt="" />
        </div>
      </div>

      <div class="mt-14 px-3">
        <div class="bg-[#f0f2ff] rounded-xl px-[10px] py-[5px]">
          <div class="flex items-center">
            <img
              class="w-7 h-7 rounded-full mr-1"
              src="_nuxt/assets/images/pin.png"
              alt=""
            />
            <div>
              <p class="font-bold text-sm text-gray-500">Pinned</p>
              <p class="font-bold text-sm text-gray-600">
                Celebrating our 5th anniversary.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div
            class="flex items-center justify-between my-6"
            v-for="comment in comments"
            :key="comment.img"
          >
            <div class="flex items-center">
              <img
                class="w-7 h-7 rounded-full mr-1"
                :src="comment.img"
                alt=""
              />
              <div>
                <p class="font-bold text-sm text-gray-500">
                  {{ comment.name }}
                </p>
                <p class="font-bold text-sm text-gray-600">
                  {{ comment.comment }}
                </p>
              </div>
            </div>
            <p class="text-gray-400">{{ comment.time }}</p>
          </div>
        </div>
      </div>
      <div
        class="text-gray bg-cyan-400 w-full rounded-b-xl flex items-center py-1 px-2"
      >
        <p class="text-xl">😀</p>
        <input
          class="focus:ring-0 border-none w-full bg-cyan-400 text-white"
          placeholder="Search..."
          type="text"
        />
        <i class="cursor-pointer mdi mdi-send text-xl text-white"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-background {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 27%,
    rgba(0, 0, 0, 0.3799894957983193) 100%
  );
}
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
