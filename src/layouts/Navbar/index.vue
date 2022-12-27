<template>
  <nav
    x-data="{ isOpen: false }"
    class="relative bg-white shadow dark:bg-gray-800 px-10"
  >
    <div class="container px-6 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <router-link
              to="/products"
              class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            >
              E-Shop
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              x-cloak
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          x-cloak
          :class="[
            isOpen
              ? 'translate-x-0 opacity-100 shadow-2xl rounded-md'
              : 'opacity-0 -translate-x-full rounded-none shadow-none',
          ]"
          class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
        >
          <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
            <router-link
              :to="`/products`"
              class="flex justify-center items-center px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Products
            </router-link>
            <router-link
              :to="`/users`"
              class="flex justify-center items-center px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Users
            </router-link>
            <button
              @click="logOut()"
              class="flex justify-center items-center px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sign out
            </button>
          </div>

          <div class="flex items-center justify-end mt-4 lg:mt-0">
            <button
              class="mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <div>
                <router-link
                  :to="`/cart`"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  <div class="relative flex">
                    <svg
                      class="flex-1 w-8 h-8 fill-current"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                      />
                    </svg>
                    <span
                      class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center"
                      >{{ cartTotalCount }}
                    </span>
                  </div>
                </router-link>
              </div>
            </button>
            <router-link to="/user">
              <button
                type="button"
                class="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div
                  class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full"
                >
                  <img
                    :src="currentUser?.image"
                    class="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 class="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  {{ currentUser?.firstName }} {{ currentUser?.lastName }}
                </h3>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
