<template>
  <div  class="container">

    <h2 v-show="items.length<1" style="text-align: center">There are no photos to show</h2>
    <div v-for="item in items" :key="item.id">
      <div v-for="photos in item" :key="photos.id">
        <div v-for="(photo, index) in photos" :key="photo.id" class="container">


            <div class="item" v-if="index < photoToShow">
              <img
                     :src="photo.img_src"
                     :alt="photo.camera.full_name"
                     loading="lazy"
              >

            </div>

          </div>



      </div>

    </div>
    <b-button  v-show="items.length" class="btn-load" @click="photoToShow+=2">Show More</b-button>
  </div>
</template>

<script>
import {eventBus} from "@/main";

const axios = require("axios");
export default {

  name: "Photos",

  beforeCreate() {

    eventBus.$on('submitData', (value) => {
      let {selectedRover, selectedCamera, sol} = value
      this.getPhotos(selectedRover, selectedCamera, sol)
    })
  },
  data() {
    return {
      items: [],
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/",
      api_key: "LswcDRopTswHg40C6ZEt2g2HdRLQdRk43eih6uy5",
      photoToShow:2
    };
  },

  methods: {
    async getPhotos(rover, camera, sol) {
      if(rover!==undefined|| camera!==undefined||sol!==undefined){
        try {
          const {
            data: photos
          } = await axios({
            url: `${this.url}${rover}/photos?sol=${sol}&camera=${camera}&api_key=${this.api_key}`,
          });
          this.items=[];
          this.photoToShow=2;
          this.items.push(photos);
          this.$forceUpdate();
        }catch (e) {
          console.log(e)
        }

      }

    }
  }
}
</script>

<style >
.btn-load{
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 10px 0;
}
.item {
  margin: 0 auto;
  float: left;
  min-width: 0;
  margin: 2rem;
  transition: 0.8s ease;
  box-shadow: 5px 5px 10px 2px #cccccc;

}


.item img {
  width: 100%;
  max-width: 100%;
  height: auto;

}
@media (max-width:1200px){
  .item img {
    width: 350px;
    max-height: 350px;
  }

}
@media (max-width:1000px){
  .item img {
    width: 280px;
    max-height: 280px;
  }
  .item {
    margin: 1rem;

}}
@media (max-width:1000px){
  .item img {
    width: 240px;
    max-height: 240px;
  }
  .item {
    margin: 0;
  }}
@media (max-width:400px){
  .item img {
    width: 250px;
    max-height: 250px;
  }

}
.item:hover {
  transform: scale(0.9);
}
</style>