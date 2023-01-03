<template>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="store.getUsers"
    />
    <a-button @click="handleAddEditClicked" class="floating-btn" size="large" type="primary" shape="circle">
      <Icon icon="icon:plus" height="27" width="39"/>
    </a-button>
    <add-edit-user-modal title="Add User" ref="addEditModal"/>
  </div>
</template>

<script lang="ts">
import { usersStore } from '../stores/usersStore'
import { Icon } from '@iconify/vue';
import { reactive, toRefs } from 'vue';
type AddEditUserModal = { toggleModal(): void };

export default {
  components:{
    Icon
  },
  setup() {
    const state = reactive({
      addEditModal: {},
    });
    const store = usersStore();
    const columns = [
      { title: 'Name', dataIndex: 'first_name' },
      { title: 'Last Name', dataIndex: 'last_name' },
      { title: 'Age', dataIndex: 'age' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'Phone Number', dataIndex: 'phone' },
    ];
    const handleAddEditClicked = () => {
      (state.addEditModal as AddEditUserModal)?.toggleModal();
    }
    store.fetchUsers();
    return {
      ...toRefs(state),
      handleAddEditClicked,
      columns,
      store
    };
  }
}
</script>

<style lang="scss">
.floating-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  }
</style>