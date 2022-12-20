<template>
  <div class="container mx-auto p-4">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <!-- Card -->
          <div :loading="loading" v-for="product in products" :key="product.id">
             <router-link :to="`/products/${product.id}`">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              :style="{ backgroundImage: `url(${product?.thumbnail})` }"
            ></div>
             </router-link>
            <div
              class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
            >
              <h3
                class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
              >
                {{ product?.brand }}
              </h3>

              <div
                class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
              >
                <span class="text-gray-800 dark:text-gray-200"
                  >${{ product?.price }}</span
                >
                <button
                  @click="addToCart(product)"
                  class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-indigo-700 rounded hover:bg-indigo-800 dark:hover:bg-indigo-600 focus:bg-indigo-700 dark:focus:bg-indigo-600 focus:outline-none"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
<style></style>
