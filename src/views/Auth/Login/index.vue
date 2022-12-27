<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit()">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md">
          <div>
            <label class="sr-only">Username</label>
            <input
              type="text"
              v-model="loginingUser.username"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
              @blur="handleBlur('username')"
            />
          </div>
            <div v-if="validate.username.$errors">
              <p v-for="$error in validate.username.$errors" :key="$error.$property" class="text-center text-red-600 tracking-wide">
                {{ $error.$message }}
              </p>
            </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              v-model="loginingUser.password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              @blur="handleBlur('password')"
            />
          </div>
            <div v-if="validate.password.$errors">
              <p v-for="$error in validate.password.$errors" :key="$error.$property" class="text-center text-red-600 tracking-wide">
                {{ $error.$message }}
              </p>
            </div>
        </div>
        <div>
          <button
            :disabled="validate.$invalid"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import script from "./main";
export default script;
</script>
<style>
@import "./style.css";
</style>
