<template>
  <div class="container">
    <APODGetter class="py-3"/>
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
