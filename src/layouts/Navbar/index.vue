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
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <router-link
              :to="`/`"
              class="text-gray-900 dark:text-white hover:underline"
            >
              Home
            </router-link>
          </li>
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
    </div>
  </nav>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
