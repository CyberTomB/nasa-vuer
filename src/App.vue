<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Welcome to Your Vue.js App</h1>
  <APODGetter/>
</template>

<script>
import APODGetter from './components/APODGetter.vue'

export default {
  name: 'App',
  components: {
    APODGetter
  }
}
</script>
