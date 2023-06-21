<script setup lang="ts">
const props = defineProps([
  "id",
  "title",
  "image",
  "date",
  "meeting",
  "description",
  "user",
  "participants",
  "likes",
  "shares",
]);
</script>

<template>
  <div class="bg-white rounded-xl p-4 grid grid-cols-11 gap-4">
    <div class="col-span-5">
      <img
        class="rounded-xl min-h-[100%] w-[100%] object-cover"
        :src="image"
        alt=""
      />
    </div>
    <div class="col-span-6">
      <div class="flex justify-between mr-5">
        <div
          class="bg-cyan-400 px-2 flex justify-center items-center rounded-lg text-blue-800 text-center mr-2"
        >
          <div>
            <p class="uppercase font-bold">{{ date.split(" ")[1] }}</p>
            <p class="text-3xl font-bold">{{ date.split(" ")[0] }}</p>
          </div>
        </div>
        <div>
          <p class="font-bold text-lg text-blue-900">{{ title }}</p>
          <p class="text-gray-400 capitalize">
            <span>{{ meeting.hour }} </span><span>{{ meeting.platform }}</span>
          </p>
        </div>
        <i class="mdi mdi-dots-horizontal"></i>
      </div>
      <div>
        <p class="text-sm text-gray-400 line-clamp-2 mt-3">{{ description }}</p>
        <hr class="mt-3 opacity-50" />
        <div class="flex items-center mt-5">
          <img class="w-10 h-10 rounded-full mr-3" :src="user.image" alt="" />
          <div>
            <p class="font-bold text-sm">{{ user.name }}</p>
            <p class="text-sm text-gray-500">{{ user.position }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-4">
        <div class="bg-blue-700 rounded-full py-[2px] px-2">
          <div class="flex">
            <p class="text-white">
              <span class="font-bold">{{ participants }}</span> Participants
            </p>
          </div>
        </div>
        <div class="flex w-[30%] justify-around items-center">
          <div class="flex items-center">
            <img
              class="w-3 h-4 mr-2"
              src="_nuxt/assets/images/fire.png"
              alt=""
            />
            <p class="font-bold text-xl">{{ likes }}</p>
          </div>
          <div class="flex items-center">
            <i class="mdi mdi-share mr-2 text-gradient text-2xl"></i>
            <p>{{ shares }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(
    169.4deg,
    #dfe1ee -6.01%,
    #7f9af3 36.87%,
    #3236ff 78.04%,
    #002fff 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
