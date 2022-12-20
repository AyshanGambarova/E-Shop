<template>
  <!-- <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <a href="https://flowbite.com" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </a>
      <div class="flex items-center">
        <a
          href="tel:5541251234"
          class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
          >(555) 412-1234</a
        >
        <a
          href="#"
          class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >Login</a
        >
      </div>
    </div>
  </nav> -->
  <nav class="bg-gray-100 dark:bg-gray-700 px-10 py-2">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6 justify-between flex">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <router-link
              :to="`/products`"
              class="text-gray-900 dark:text-white hover:underline"
            >
              Products
            </router-link>
          </li>
          <li>
            <router-link
              :to="`/users`"
              class="text-gray-900 dark:text-white hover:underline"
            >
              Users
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-link
          :to="`/cart`"
          class="text-gray-900 dark:text-white hover:underline"
        >
          <div class="relative flex">
            <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
              <path
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            <span
              class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
              >{{cartTotalQuantity}}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
