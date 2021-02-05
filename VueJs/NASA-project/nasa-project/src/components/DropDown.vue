<template>
  <div id="dropDown">

    <span @click="toggle('div'), flagFirst=!flagFirst" class="dropItem" v-text="flagFirst? 'Rover +':'Rover -'"></span>
    <b-form-group v-slot="{ ariaDescribedby }">
      <div id="div" v-show="false">
        <b-form-radio-group
            id="btn-radios-1"
            v-model="dataFromSubmit.selectedRover"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-btn-stacked"
            style="width: 100%"
            buttons
            stacked
        ></b-form-radio-group>
      </div>

    </b-form-group>
    <span @click="toggle('div2'), flagSecond=!flagSecond" class="dropItem" v-text="flagSecond? 'Camera +':'Camera -'"></span>
    <b-form-group v-slot="{ ariaDescribedby }">
      <div id="div2" v-show="false">
        <b-form-radio-group
            id="btn-radios-2"
            v-model="dataFromSubmit.selectedCamera"
            :options="optionsTwo"
            :aria-describedby="ariaDescribedby"
            name="radio-btn-stacked"
            style="width: 100%"
            buttons
            stacked
        ></b-form-radio-group>
      </div>

    </b-form-group>
    <b-form-input
        v-model="dataFromSubmit.sol"
        id="number" type="number"
        placeholder="Enter Sol(Mars day)"
        style="text-align: center"
    ></b-form-input>
    <b-col lg="4" class="btn-load" @click="submitData">
      <b-button  class="btn-load" @click="submitData">submitData</b-button>
    </b-col>
  </div>
</template>


<script>

import {eventBus} from "@/main";


export default {
  name: "DropDown",

  data() {
    return {
      flagFirst: true,
      flagSecond: true,
      options: [
        {text: 'Curiosity', value: 'curiosity'},
        {text: 'Opportunity', value: 'opportunity'},
        {text: 'Spirit', value: 'spirit'}
      ],
      optionsTwo: [
        {text: 'Front', value: 'fhaz'},
        {text: 'Rear', value: 'rhaz'},
        {text: 'Navigation', value: 'navcam'}
      ],
      dataFromSubmit: {
        selectedRover: '',
        selectedCamera: '',
        sol: '',
      }
    }
  },

  methods: {
    toggle: function (id) {
      if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'inline'
      } else {
        document.getElementById(id).style.display = 'none'
      }
    },

    submitData() {
      eventBus.$emit('submitData', this.dataFromSubmit)
    }


  }
}

</script>


<style scoped>
.btn-load{
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 10px 0;
}
.dropItem {
  display: block;
  text-align: center;
  font-weight: bold;
}

#dropDown {
  background-color: lightgray;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  order: 10;
  z-index: 242;
  display: inline-block;
}
</style>