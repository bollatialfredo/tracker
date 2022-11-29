<template>
  <a-layout class="h-full" v-if="authStore.isAuthenticated">
    <a-layout-header>
        <img src="./assets/logo.png" class="logo inline-block" alt="" />
        <div class="inline-block relative collapse-button" @click="handleCollapse" v-wave-animation>
          <Icon icon="icon:sidebaropen" height="25" width="25" v-if="isCollapsed"/>
          <Icon icon="icon:sidebarclose" height="25" width="25" v-else/>
        </div>
    </a-layout-header>
    <a-layout>
      <sidebar-component ref="sidebar"/>
      <a-layout-content style="height: 100%;">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <!-- <a-layout-footer>
      footer
    </a-layout-footer> -->
  </a-layout>
  <a-layout v-else>
    <a-layout-content>
      <Login/>
    </a-layout-content>
  </a-layout>
  <div v-if="store.getLoading" class="overlay">
    <a-space>
      <a-spin size="large" />
    </a-space>
  </div>
</template>

<script lang="ts">
import { useStore } from './stores/main';
import { useAuthStore } from './stores/authStore';
import { Icon } from '@iconify/vue';
import  Login  from './pages/Login.vue';
import { computed, ref } from 'vue';
type ChildPublicInstance = { toggleCollapsed(): void, state: {collapsed: boolean} }

export default {
  components:{
    Icon,
    Login
  },
  setup() {
    const store = useStore();
    const authStore = useAuthStore();
    const sidebar = ref();
    const handleCollapse = () => {
      (sidebar.value as ChildPublicInstance)?.toggleCollapsed();
    }
    const isCollapsed = computed(() => (sidebar.value as ChildPublicInstance)?.state.collapsed)
    return {
      store,
      authStore,
      sidebar,
      isCollapsed,
      handleCollapse
    }
  },
}
</script>

<style lang="scss">
@import url( './assets/styles.scss');
.logo {
  height: 3em;
  will-change: filter;
  transition-duration: .3s;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.collapse-button {
  top: 10px;
  left: 15px;
  transition-duration: .3s;
  &:hover{
    color: #1890ff;
    cursor: pointer;
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: .5;
  width: 100vw;
  height: 100vh;
  .ant-space {
    position: relative;
    top: calc(50vh - 50px);
    left: 50vw;
  }
  .ant-spin-lg .ant-spin-dot {
    font-size: 50px;
  }
  .ant-spin-lg .ant-spin-dot i {
    width: 25px;
    height: 25px;
  }
}
</style>
