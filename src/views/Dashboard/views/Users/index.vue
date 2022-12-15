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
          <div
            v-for="user in users"
            :key="user?.id"
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex flex-col items-center pb-10 pt-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                :src="user?.image"
                alt="Bonnie image"
              />
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                {{ user?.firstName }} {{ user?.lastName }}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                user.company.title
              }}</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <router-link
                  :to="`/users/${user.id}`"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View more
                </router-link>
              </div>
              <div>{{user?.id}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-lg mx-auto my-12">
      <Pagination
        class="justify-center"
        :totalPages="totalPages"
        :currentPage="currentPage"
        :hasMorePages="hasMorePages"
        @pagechanged="showMore"
      />
    </div>
  </div>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
