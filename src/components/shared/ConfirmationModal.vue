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
  emits:(['emitItem']),
  setup(props, context: SetupContext) {
    const visible = ref<boolean>(false);
    const item = ref<object>({});
    const toggleModal = (itemProp?: any) => {
      visible.value = !visible.value;
      if(itemProp) item.value = itemProp;
    };
    const handleOk = () => {
      visible.value = false;
      if(item) context.emit('emitItem', {...item.value});
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