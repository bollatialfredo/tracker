<template>
  <div>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <p>{{msg}}</p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue';

export default {
  props: {
    title: String,
    msg: String
  },
  setup(props, context: SetupContext) {
    const visible = ref<boolean>(false);
    const toggleModal = () => {
      visible.value = !visible.value;
    };
    const handleOk = (e: MouseEvent) => {
      visible.value = false;
    };
    context.expose({ toggleModal });
    return {
      visible,
      toggleModal,
      handleOk,
    };
  }
};
</script>