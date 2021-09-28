<template>
  <div class="row justify-content-center">
    <div id="date-picker" class="text-center">
    <form @submit.prevent="getImage">
    <div class="form-group">
      <label for="date" class="control-label">Choose a Date: &nbsp;</label>
    <input v-model="state.date" type="date" name="date" id="date" min="1995-06-20" max="today" class="form-control">
    </div>
    <button type="submit" class="btn btn-info mx-3">SUBMIT</button>
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
        apodService.getImage(state.date)
      }
    }
  }
}
</script>

<style scoped>
</style>