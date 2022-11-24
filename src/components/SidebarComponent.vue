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
        <a-menu-item v-else :key="item.path" @click="navigate(item.path)">
          <span class="select-none">
            <div v-wave-animation></div>
            <Icon class="inline-block sidebar-icon" :icon="item.icon" height="20" width="50"/>{{ item.name }}
          </span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { reactive, SetupContext, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import SidebarJSON from '../assets/sidebar.json';
import { useRouter } from 'vue-router';

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
  // mounted() {
  //   console.log(this.$route.fullPath);
  // },
  setup(props, context: SetupContext) {
    const router = useRouter()
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
      sidebarElements: SidebarJSON,
    });

    const toggleCollapsed = () => {
      console.log(state.selectedKeys);
      state.collapsed = !state.collapsed;
    };
    const navigate = (path?: string) => {
      console.log(path);
      
      if (!path) return
      setTimeout(() => {
        router.push({ path: path })      
      }, 300);
    }
    context.expose({ toggleCollapsed, state });
    return {
      ...toRefs(state),
      toggleCollapsed,
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