<script setup lang="ts">
const products = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932712/asus4_rfxrf8.jpg",
    price: 999.99,
    discountedPrice: 799.99,
    name: "ASUS Laptop Model 1",
    rating: 4.5,
    isInCart: false,
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932707/asus1_ftohui.jpg",
    price: 1199.99,
    discountedPrice: 999.99,
    name: "ASUS Laptop Model 2",
    rating: 4.2,
    isInCart: true,
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932704/asus5_sm5h3y.jpg",
    price: 899.99,
    discountedPrice: 749.99,
    name: "ASUS Laptop Model 3",
    rating: 4.8,
    isInCart: false,
  },
  // Add more products...
  {
    id: "4",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932701/asus3_gxa9nk.webp",
    price: 1099.99,
    discountedPrice: 899.99,
    name: "ASUS Laptop Model 4",
    rating: 4.3,
    isInCart: true,
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932697/asus6_kz3zyo.webp",
    price: 799.99,
    discountedPrice: 699.99,
    name: "ASUS Laptop Model 5",
    rating: 4.6,
    isInCart: false,
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932697/asus9_z8xjdi.jpg",
    price: 1299.99,
    discountedPrice: 1099.99,
    name: "ASUS Laptop Model 6",
    rating: 4.1,
    isInCart: true,
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932696/asus7_tuigwf.jpg",
    price: 899.99,
    discountedPrice: 749.99,
    name: "ASUS Laptop Model 7",
    rating: 4.7,
    isInCart: false,
  },
  {
    id: "8",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932695/asus8_w4pnrs.jpg",
    price: 999.99,
    discountedPrice: 799.99,
    name: "ASUS Laptop Model 8",
    rating: 4.4,
    isInCart: true,
  },
  {
    id: "9",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932712/asus4_rfxrf8.jpg",
    price: 1199.99,
    discountedPrice: 999.99,
    name: "ASUS Laptop Model 9",
    rating: 4.2,
    isInCart: false,
  },
  {
    id: "10",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932707/asus1_ftohui.jpg",
    price: 899.99,
    discountedPrice: 749.99,
    name: "ASUS Laptop Model 10",
    rating: 4.9,
    isInCart: true,
  },
  {
    id: "11",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932704/asus5_sm5h3y.jpg",
    price: 799.99,
    discountedPrice: 699.99,
    name: "ASUS Laptop Model 11",
    rating: 4.3,
    isInCart: false,
  },
  {
    id: "12",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932701/asus3_gxa9nk.webp",
    price: 1299.99,
    discountedPrice: 1099.99,
    name: "ASUS Laptop Model 12",
    rating: 4.6,
    isInCart: true,
  },
  {
    id: "13",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932697/asus6_kz3zyo.webp",
    price: 899.99,
    discountedPrice: 749.99,
    name: "ASUS Laptop Model 13",
    rating: 4.8,
    isInCart: false,
  },
  {
    id: "14",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932697/asus9_z8xjdi.jpg",
    price: 999.99,
    discountedPrice: 799.99,
    name: "ASUS Laptop Model 14",
    rating: 4.2,
    isInCart: true,
  },
  {
    id: "15",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932696/asus7_tuigwf.jpg",
    price: 1199.99,
    discountedPrice: 999.99,
    name: "ASUS Laptop Model 15",
    rating: 4.5,
    isInCart: false,
  },
  {
    id: "16",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687932695/asus8_w4pnrs.jpg",
    price: 899.99,
    discountedPrice: 749.99,
    name: "ASUS Laptop Model 16",
    rating: 4.7,
    isInCart: true,
  },
];
</script>

<template>
  <div class="dark:bg-[#212332]">
    <EcommerceNav />
    <div class="container grid grid-cols-12 gap-4">
      <!-- Side Filter Bar -->
      <div class="col-span-3 mt-5">
        <EcommerceFilterBar />
      </div>
      <!-- Results, Sortby, Filters List -->
      <div class="col-span-9 mt-10">
        <div class="flex justify-between items-center">
          <h1>
            <span class="dark:text-gray-300"
              >1 - 16 over 7,000 result for
            </span>
            <span class="text-orange-600 font-bold">"Asus"</span>
          </h1>
          <div class="flex items-center">
            <p class="text-gray-500 mr-3 dark:text-gray-300">Sort by:</p>
            <select
              id="volume"
              name="volume"
              class="rounded border-gray-300 py-1 mr-3 text-gray-500 dark:bg-[#2a2d3e] dark:border-none dark:text-gray-300 dark:focus:ring-0"
            >
              <option value="0" disabled selected style="display: none">
                Best Match
              </option>
              <option value="0">Price ASC</option>
              <option value="25">Price DEC</option>
              <option value="50">Ato Z</option>
              <option value="75">Z to A</option>
              <option value="100">Pink</option>
            </select>
            <div class="p-1 px-2 border border-gray-300 rounded">
              <i
                class="mdi mdi-view-grid-outline text-gray-500 dark:text-gray-300"
              ></i>
            </div>
          </div>
        </div>
        <div class="mt-3 flex items-center">
          <div
            class="flex items-center justify-around max-w-min border border-gray-400 rounded-full py-[2px] px-4 text-gray-500 mr-2"
          >
            <h1 class="whitespace-nowrap mr-1">Ready to ship</h1>
            <i class="mdi mdi-close-circle"></i>
          </div>
          <div
            class="flex items-center justify-around max-w-min border border-gray-400 rounded-full py-[2px] px-4 text-gray-500 mr-2"
          >
            <h1 class="whitespace-nowrap mr-1">Paid Samples</h1>
            <i class="mdi mdi-close-circle"></i>
          </div>
          <div
            class="flex items-center justify-around max-w-min border border-gray-400 rounded-full py-[2px] px-4 text-gray-500 mr-2"
          >
            <h1 class="whitespace-nowrap mr-1">Price Minimum</h1>
            <i class="mdi mdi-close-circle"></i>
          </div>
          <div
            class="flex items-center justify-around max-w-min border border-gray-400 rounded-full py-[2px] px-4 text-gray-500 mr-2"
          >
            <h1 class="whitespace-nowrap mr-1">Price Maximum</h1>
            <i class="mdi mdi-close-circle"></i>
          </div>
          <div
            class="flex items-center justify-around max-w-min border border-gray-400 rounded-full py-[2px] px-4 text-gray-500 mr-2"
          >
            <h1 class="whitespace-nowrap mr-1">Minimal Order</h1>
            <i class="mdi mdi-close-circle"></i>
          </div>
        </div>
        <!-- Cards -->
        <div class="grid grid-cols-12 gap-2 mt-5 mb-4">
          <EcommerceCard
            class="col-span-3"
            v-for="product in products"
            :key="product.id"
            :image="product.image"
            :price="product.price"
            :discountedPrice="product.discountedPrice"
            :name="product.name"
            :rating="product.rating"
            :isInCart="product.isInCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
