<template>
    <div class="row image-holder text-center justify-content-center">
      <a v-if="mainImage.media_type == 'video'" type="video/webm"
       :href="mainImage.url" class="py-3 text-success">I couldn't embed that image, but you can click here instead.</a>
      <img v-else :src="mainImage.hdurl" alt="" class="col-12 image">
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
      console.log('mounted', Date)
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

