<template>
  <div class="container">
    <APODGetter/>
  <DateForm/>
  </div>
</template>

<script>
import APODGetter from './components/APODGetter.vue'
import DateForm from './components/DateForm.vue'
export default {
  name: 'App',
  components: {
    APODGetter,
    DateForm
  }
}
</script>
