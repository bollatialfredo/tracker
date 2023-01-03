<template>
  <div>
    <a-modal class="no-modal-footer" v-model:visible="visible" :title="title">
      <a-form
        class="user-form"
        :model="formState"
        v-bind="layout"
        name="add-user"
        ref="formRef"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
          <a-input v-model:value="formState.user.name" />
        </a-form-item>
        <a-form-item :name="['user', 'lastName']" label="Last Name" :rules="[{ required: true }]">
          <a-input v-model:value="formState.user.lastName" />
        </a-form-item>
        <a-form-item :name="['user', 'email']" label="Email" :rules="[{ required: true }, { type: 'email' }]">
          <a-input v-model:value="formState.user.email" />
        </a-form-item>
        <a-form-item :name="['user', 'phone']" label="Phone Number">
          <a-input v-model:value="formState.user.phone" />
        </a-form-item>
        <a-form-item :name="['user', 'age']" label="Age" :rules="[{ type: 'number', min: 0, max: 200 }]">
          <a-input-number v-model:value="formState.user.age" />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button class="mt-4" type="primary" html-type="submit">Submit</a-button>
          <a-button class="ml-2" type="secondary" @click="toggleModal">Cancel</a-button>
        </a-form-item>
      </a-form>
      <template class="modal-footer" #footer></template>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { reactive, ref, SetupContext } from 'vue';
import type { FormInstance } from 'ant-design-vue';

export default {
  props: {
    title: String,
    msg: String
  },
  setup(props, context: SetupContext) {
    
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    
    const formRef = ref<FormInstance>();
    const visible = ref<boolean>(false);
    const formState = reactive({
      user: {
        name: '',
        lastName: '',
        age: undefined,
        email: '',
        phone: '',
      },
    });

    const onFinish = (values: any) => {
      console.log('Success:', values);
      toggleModal();
    };
    
    const toggleModal = () => {
      visible.value = !visible.value;
      formRef?.value?.resetFields();
    };

    context.expose({ toggleModal });
    return {
      onFinish,
      toggleModal,
      visible,
      formState,
      layout,
      formRef,
      validateMessages,
    };
  }
};
</script>

<style lang="scss" scoped>
  .user-form {
    width: 84%
  }
</style>