<template>
  <div class="row">
    <div class="col-12 text-center">
    <form @submit.prevent="getImage">
      <label for="date">Choose a Date:</label>
    <input v-model="state.date" type="date" name="date" id="date" min="1995-06-20" max="today">
    <button type="submit">SUBMIT</button>
    </form>
  </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { apodService } from "../services/APODService"
export default {
  name: 'DateForm',
  setup(){
    const state = reactive({
      date: '2018-08-02'
      })
    return {
      state,
      getImage(){
        // let dateFormatted = state.date.replace(/-/g,"")
        apodService.getImage(state.date)
      }
    }
  }
}
</script>
