<template>
  <div class="h-full" ref="map"></div>
</template>
<script>
import mapboxgl from 'mapbox-gl';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      map: null
    }
  },
  mounted() {
    const self = this;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYm9sbGF0aWFsZnJlZG8iLCJhIjoiY2xhNzdsaXk0MTdwaDNzcHF6ZWd1MTh3YSJ9.taSKUWamlEA6BuZ3UPEqGA';
    const map = new mapboxgl.Map({
      container: self.$refs.map,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-105.55443737719791,40.09393206067918], 
      zoom: 9,
      projection: 'globe'
    });
    map.on('style.load', () => {
      map.setFog({});
    });
    this.map = map;
  }
})

</script>