<template>
  <div>
    <EcommerceNav />
    <div class="container grid grid-cols-12 gap-4">
      <div class="col-span-3 mt-10">
        <EcommerceFilterBar />
      </div>
      <div class="col-span-9 mt-10"></div>
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
