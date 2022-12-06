<template>
  <a-layout-sider  v-model:collapsed="collapsed" :trigger="null" collapsible>
    <a-menu mode="inline" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys">
      <template v-for="item in sidebarElements" >
        <a-sub-menu v-if="item.subItems && item.subItems.length" :key="item.path">
        <template #title>
          <span class="select-none">
            <Icon class="inline-block sidebar-icon" :icon="item.icon" height="20" width="50"/>{{ item.name }}
          </span>
        </template>
        <a-menu-item v-for="subItem in item.subItems" :key="subItem.path" @click="navigate(subItem.path)">
          <div v-wave-animation></div>
          {{subItem.name}}
        </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.name" @click="navigate(item.path)">
          <span class="select-none">
            <div v-wave-animation></div>
            <Icon class="inline-block sidebar-icon" :icon="item.icon" height="20" width="50"/>{{ item.name }}
          </span>
        </a-menu-item>
      </template>
    </a-menu>
    <div class="logout-menu p-absolute bottom-0">
      <a-menu mode="inline">
        <a-menu-item @click="handleLogoutClick">
          <span class="select-none">
            <div v-wave-animation></div>
            <Icon class="inline-block sidebar-icon" icon="icon:logout" height="20" width="50"/>Logout
          </span>
        </a-menu-item>
      </a-menu>
    </div>
    <confirmation-modal msg="Are you sure you want to logout?" title="Logout" @handleOk="authStore.logout" ref="logoutModal"/>
  </a-layout-sider>
</template>

<script lang="ts">
import { reactive, SetupContext, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import SidebarJSON from '../assets/sidebar.json';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
type LogoutModal = { toggleModal(): void };

export interface SidebarItem {
  name: string,
  id: string,
  path: string,
  icon: string,
  subItems: SidebarItem[]
}

export default {
  components:{
    Icon
  },
  setup(props, context: SetupContext) {
    const router = useRouter();
    const authStore = useAuthStore();
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
      logoutModal: {},
      collapsed: false,
      sidebarElements: SidebarJSON,
    });
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
    };
    const navigate = (path?: string) => {
      if (!path) return
      setTimeout(() => {
        router.push({ path: path })      
      }, 300);
    }
    const handleLogoutClick = () => {
      (state.logoutModal as LogoutModal)?.toggleModal();
    }
    context.expose({ toggleCollapsed, state });
    return {
      ...toRefs(state),
      toggleCollapsed,
      handleLogoutClick,
      authStore,
      navigate
    };
  }
};
</script>

<style lang="scss">
.animated-button {
  height: 100%;
  width: 100%;
  left: 0;
  opacity: 1;
  position: absolute;
}
</style>