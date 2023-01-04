<template>
  <div>
    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="store.getUsers"
    >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <div class="flex">
          <a @click="handleAddEditClicked(record)" class="mr-2"><Icon icon="icon:pen" height="20" width="20"/></a>
          <a @click="handleDeleteClicked(record)"><Icon icon="icon:trash" height="20" width="20"/></a>
        </div>
      </template>
    </template>
    </a-table>
    <a-button @click="handleAddEditClicked" class="floating-btn" size="large" type="primary" shape="circle">
      <Icon icon="icon:plus" height="27" width="39"/>
    </a-button>
    <add-edit-user-modal @submitUser="handleSubmit" title="Add User" ref="addEditModal"/>
    <confirmation-modal 
      msg="Are you sure you want to delete this user?" 
      title="Delete User" 
      @emitItem="confirmDelete" 
      ref="deleteModal"/>
  </div>
</template>

<script lang="ts">
import { usersStore } from '../stores/usersStore'
import { Icon } from '@iconify/vue';
import { reactive, toRefs } from 'vue';
import { User } from '../models/userModel';
type AddEditUserModal = { toggleModal(user?: User): void };
type DeleteModal = { toggleModal(user?: User): void };

export default {
  components:{
    Icon
  },
  setup() {
    const store = usersStore();
    const state = reactive({
      addEditModal: {},
      deleteModal: {}
    });
    const columns = [
      { title: 'Name', dataIndex: 'first_name' },
      { title: 'Last Name', dataIndex: 'last_name' },
      { title: 'Age', dataIndex: 'age' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'Phone Number', dataIndex: 'phone' },
      { title: '', dataIndex: 'action' },
    ];
    const handleAddEditClicked = (user?: User) => {      
      (state.addEditModal as AddEditUserModal)?.toggleModal(user);
    }
    const handleSubmit = (user: User) => {
      store.addUser(user);
    }
    const handleDeleteClicked = (user: User) => {
      (state.deleteModal as DeleteModal)?.toggleModal(user);
    }
    const confirmDelete = (user: User) => {
      store.deleteUser({...user})
    }
    store.fetchUsers();
    return {
      ...toRefs(state),
      handleAddEditClicked,
      handleSubmit,
      handleDeleteClicked,
      confirmDelete,
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