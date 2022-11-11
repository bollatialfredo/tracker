<template>
  <div class="h-full">
    <map-component ref="map"/>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import GeoJSON from '../assets/geojson.json';
export default {
  data() {
    return {
      geoJsonElements: GeoJSON
    }
  },
  methods: {
    addFeatures() {
      const map = (this.$refs.map as any).map;
      map.addSource('features', {
        type: 'geojson',
        data: this.geoJsonElements
      })
      map.addLayer({
        'id': 'park-boundary',
        'type': 'fill',
        'source': 'features',
        'paint': {
          'fill-color': '#888888',
          'fill-opacity': 0.4
        },
        'filter': ['==', '$type', 'Polygon']
      });
      
      map.addLayer({
        'id': 'park-volcanoes',
        'type': 'circle',
        'source': 'features',
        'paint': {
          'circle-radius': 6,
          'circle-color': '#B42222'
        },
        'filter': ['==', '$type', 'Point']
      });
    }
  },
  mounted() {
    (this.$refs.map as any).map.on('load', ()=>{
      this.addFeatures();
    })
  },
}
</script>
<style lang="scss">

</style>