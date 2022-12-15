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
              :src="user?.image"
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
              {{ user?.firstName }} {{ user?.lastName }}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
              {{ user?.company?.title }}
            </h3>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
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
                  <div class="px-4 py-2">{{ user?.firstName }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">{{ user?.lastName }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2 text-transform: capitalize">
                    {{ user?.gender }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Age</div>
                  <div class="px-4 py-2">{{ user?.age }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">{{ user?.phone }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Address</div>
                  <div class="px-4 py-2">
                    {{ user?.address?.address }},{{ user?.address?.city }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">{{
                      user?.email
                    }}</a>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">{{ user?.birthDate }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-md rounded-sm">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Education</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-blue-800">{{ user?.university }}</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End of Experience and education grid -->
          </div>
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
