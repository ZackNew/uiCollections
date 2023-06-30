<script setup lang="ts">
const notifications = [
  {
    title: "mitchel/pink #2033",
    description:
      "Fix to allow custom middleware HTTPExceptions to be propagated through",
    howMany: "+3",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687760783/samples/people/smiling-man.jpg",
    ],
    howHong: "7 hours ago",
  },
  {
    title: "samuelcolvin/pydantic #1686",
    description:
      "Add pickle support to dynamically created models and generics",
    howMany: "+6",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687760786/samples/animals/three-dogs.jpg",
    ],
    howHong: "2 hours ago",
  },
  {
    title: "sveltejs/svelte #5339",
    description:
      "Adding the possibility to change intro:true only for a specific",
    howMany: "+6",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_2_yrqwug.jpg",
    ],
    howHong: "5 hours ago",
  },
  {
    title: "tortoise/tortoise-orm #498",
    description: "Add custom attribute name for Prefetch instruction",
    howMany: "+3",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761246/my-ui-collections-images/pp5_dqdu0u.jpg",
    ],
    howHong: "2 days ago",
  },
  {
    title: "mitchel/pink #2033",
    description:
      "Fix to allow custom middleware HTTPExceptions to be propagated through",
    howMany: "+3",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687760783/samples/people/smiling-man.jpg",
    ],
    howHong: "2 days ago",
  },
  {
    title: "pytest-dev/pytest #7718",
    description: "Release 6.0.2",
    howMany: "+3",
    images: [
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/story4_fpd1fz.jpg",
    ],
    howHong: "8 hours ago",
  },
];
</script>
<template>
  <div>
    <div class="md:px-4">
      <div
        class="h-12 mt-10 lg:mt-4 py-3 pr-4 pl-6 flex items-center border md:rounded-t-lg border-gray-300 bg-gray-100"
      >
        <input id="select_all" type="checkbox" />
        <label for="#select_all" class="ml-2 font-semibold text-xs"
          >Select all</label
        >
      </div>
      <ul v-for="notification in notifications" :key="notification.title">
        <li
          class="md:h-32 lg:h-16 p-2 flex items-start lg:items-center justify-between border border-t-0 border-gray-300 hover:bg-indigo-100"
        >
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between w-3/4"
          >
            <div class="flex items-center relative">
              <span class="absolute w-2 h-2 rounded-full bg-blue-500"></span>
              <input class="ml-4" id="select_all" type="checkbox" />
              <svg
                class="w-4 h-4 ml-2 fill-current"
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <div class="ml-2">
                <h5 class="text-xs">{{ notification.title }}</h5>
                <p class="text-sm">
                  {{ notification.description }}
                </p>
                <div class="ml-3 mt-4 lg:hidden flex items-end">
                  <div class="flex items-center">
                    <span class="rounded-full"
                      ><img
                        class="h-6 w-6 rounded-full object-cover"
                        src="https://avatars1.githubusercontent.com/u/23500353?s=88&amp;u=e2e1d736f924d9be81e8bfc565b6d8836ba99773&amp;v=4"
                        alt="0"
                      />
                    </span>
                  </div>
                  <span class="ml-5 px-2 text-xs">subscribed</span>
                </div>
              </div>
            </div>
            <div class="hidden lg:block">
              <span class="px-2">{{ notification.howMany }}</span>
            </div>
          </div>
          <div class="lg:w-64 flex items-center justify-between text-xs">
            <span class="hidden lg:inline-block">subscribed</span>
            <div
              class="hidden lg:inline-flex items-center"
              v-for="img in notification.images"
              :key="img"
            >
              <span class="-mr-3 rounded-full border-2 border-white"
                ><img
                  class="h-6 w-6 rounded-full object-cover"
                  :src="img"
                  alt="0"
                />
              </span>
            </div>
            <span>{{ notification.howHong }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="mt-6 md:px-4 flex flex-col lg:flex-row items-center justify-between"
    >
      <div class="flex items-center text-sm">
        <svg
          class="w-4 h-4 text-gray-600"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
          ></path>
        </svg>
        <div class="ml-1">
          <strong>ProTip!</strong> Filter by
          <a
            href="https://github.com/notifications/beta?query=is%3Aread"
            class="text-blue-500"
            >is:read</a
          >
          then bulk select and mark all as <kbd>Done</kbd> to clean up your
          inbox.
        </div>
      </div>
      <div class="flex items-center text-sm">
        <span class="mr-4"><strong>1-6</strong> of 6</span>
        <div class="flex">
          <button
            class="h-8 w-16 border border-gray-400 rounded-l-lg bg-gray-100 text-blue-300 cursor-default"
            disabled
          >
            Prev
          </button>
          <button
            class="h-8 w-16 border border-l-0 border-gray-400 rounded-r-lg bg-gray-100 text-blue-300 cursor-default"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
