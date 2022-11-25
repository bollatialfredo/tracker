<template>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="store.getUsers"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { usersStore } from '../stores/usersStore'

const store = usersStore();
let users = ref([]);
const columns = [
  { title: 'Name', dataIndex: 'first_name' },
  { title: 'Last Name', dataIndex: 'last_name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Phone Number', dataIndex: 'phone' },
];
store.fetchUsers();
</script>