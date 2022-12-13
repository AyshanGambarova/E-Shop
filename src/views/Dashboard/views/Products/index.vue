<template>
  <div class="container mx-auto p-4">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <!-- Card -->
          <div
            v-for="product in products"
            :key="product.id"
            class="group relative"
          >
            <router-link :to="`/products/${product.id}`">
              <div
                class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
              >
                <img
                  :src="product?.thumbnail"
                  :alt="product?.title"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </router-link>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product?.brand }}
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product?.category }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">
                ${{ product?.price }}
              </p>
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
