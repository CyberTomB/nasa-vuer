<template>
  <div class="container">
    <div class="row image-holder">
      <img :src="mainImage.hdurl" alt="" class="col-12 image">
    </div>
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

<style scoped>
.image {
  object-fit: cover;
}

.image-holder {
  max-height: 80vh;
  overflow: auto;
}

</style>

