<template>
  <div class="bg-white px-8 py-6 break-words">
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Picture Card -->
          <div
            class="mb-4 overflow-hidden rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            <img
              class="w-96 h-full"
              :src="currentUser?.image"
              alt="image description"
            />
          </div>
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-indigo-600">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {{ currentUser?.firstName }} {{ currentUser?.lastName }}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              {{ currentUser?.company?.title }}
            </h3>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-md rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">{{ currentUser?.firstName }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">{{ currentUser?.lastName }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2 text-transform: capitalize">
                    {{ currentUser?.gender }}
                  </div>
                </div>
             
             
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">{{
                      currentUser?.email
                    }}</a>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

       
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import script from "./main";
export default script;
</script>
