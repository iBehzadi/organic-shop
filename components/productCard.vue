<template>
  <div id="card" class="mx-auto my-8 border border-black max-w-[350px] flex flex-col p-2 rounded-md text-right">
    <div class="card-img">
      <img :src="product.images" class="mx-auto rounded-md" alt="">
    </div>
    <div class="card-info mt-4 overflow-hidden ">
      <h3>{{ product.title }}</h3>
      <hr>
      <p class="text-gray-500 m-2 text-sm">{{ product.description }}</p>
      <div class="actions flex flex-col">
        <div class="ml-2  text-red-700 text-left">
          <span v-if="product.stock_status">موجود</span>
          <span v-else>ناموجود</span>
        </div>
        <button class="bg-green p-2 rounded-md mt-2 hover:opacity-85 transition-all duration-200">افزودن به سبد خرید</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from '../stores/productStore'
defineProps<{
  product: IProduct
}>()
</script>

<style></style>