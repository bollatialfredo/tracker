<template>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="users"
      :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
let users = ref([]);
const columns = [
  { title: 'Name', dataIndex: 'first_name' },
  { title: 'Last Name', dataIndex: 'last_name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Phone Number', dataIndex: 'phone' },
];
const getUsers = async () =>{
  await fetch('https://tracker-api-opn6.onrender.com/users')
    .then((response) => response.json())
    .then((data) => {
      users.value = data;
    });
}

getUsers();
</script>