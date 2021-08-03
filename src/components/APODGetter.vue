<template>
  <div>
    <img src="" alt="">
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { apodService } from '../services/APODService';

export default {
  name: 'APODGetter',
  setup(){

    onMounted(()=> {
      console.log('mounted')
      apodService.getImage()
    })
    return {
      getImage(){
  
      }
    }
  },
}
</script>
