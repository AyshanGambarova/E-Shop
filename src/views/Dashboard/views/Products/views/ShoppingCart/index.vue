<template>
  <div class="container mx-auto p-4">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          Shopping cart
        </h2>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="py-3 px-6">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="py-3 px-6">Product</th>
                <th scope="col" class="py-3 px-10">Quantity</th>
                <th scope="col" class="py-3 px-6">Price</th>
                <th scope="col" class="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in cart"
                :key="index"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="p-4 w-32">
                  <img :src="item.product.thumbnail" alt="Apple Watch" />
                </td>
                <td
                  class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                >
                  {{ item.product.brand }}
                </td>
                <td class="py-4 px-6">
                  <div class="flex items-center space-x-3">
                    <button
                    @click="decreaseQuantity(item.product.id)"
                      :class="(item.quantity===1)?'cursor-not-allowed inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700':'inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div>
                      <span>{{ item.quantity }}</span>
                      <!-- <input
                        type="number"
                        id="first_product"
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :placeholder="item.quantity"
                        required
                      /> -->
                    </div>
                    <button
                    @click="increaseQuantity(item.product.id)"
                      class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
                <td
                  class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                >
                  <!-- ${{ item.product.price * item.quantity }} -->
                  ${{ caclItemPrice(item) }}
                </td>
                <td class="py-4 px-6">
                  <div
                    @click="removeProduct(index)"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                  >
                    Remove
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-end m-6">Total price : ${{ cartTotalPrice }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
<style></style>
