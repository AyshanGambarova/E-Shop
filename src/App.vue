<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
