<template>
  <div class="container">
    <img :src="mainImage.hdurl" alt="" class="row img-fluid">
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { apodService } from '../services/APODService';
import { AppState } from "../AppState";

export default {
  name: 'APODGetter',
  setup(){

    onMounted(()=> {
      console.log('mounted')
      apodService.getImage()
    })
    return {
      getImage(){
      },
      mainImage: computed(()=> AppState.image)
    }
  },
}
</script>

