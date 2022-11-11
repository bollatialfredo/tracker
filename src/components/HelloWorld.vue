<script setup lang="ts">
  import { ref } from 'vue';
  import { useStore } from '../stores/main'
  import { Icon } from '@iconify/vue';

  const store = useStore()
  const fruits = ref([{name: 'banana', cant: 5},{name: 'frutilla', cant: 6},{name: 'kiwi', cant: 9}]);

  defineProps<{ msg: string }>();
</script>


<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="store.increment">count is {{ store.getCount }}</button>
    <Icon icon="sarasa:account" height="50" width="50"/>
    <Icon icon="sarasa:basket" color="#15CA82" height="50" width="50"/>
    <h1 class="underline">frutas</h1>
    <div v-for="fruit in fruits" :key="fruit.name" style="background-color: red;">{{fruit.name}}: {{fruit.cant}}</div>
  </div>
</template>



<style scoped>

</style>
