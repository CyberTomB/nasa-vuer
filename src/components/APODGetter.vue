<template>
    <div class="row text-center justify-content-center">
      <div class="col-12">
        <a v-if="mainImage.media_type == 'video'" type="video/webm"
       :href="mainImage.url" class="py-3 text-success">I couldn't embed that image, but you can click here instead.</a>
        <img v-else :src="mainImage.hdurl" alt="" class="image-frame">
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

.image-frame {
  max-height: 80vh;
}

</style>

