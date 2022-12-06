<template>
  <div @click="handleCanvasClick" id="particles-js"></div>
  <div class="card">
    <a-form class="formClass select-none" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item class="title">Asset Tracker Login</a-form-item>
      <a-form-item label="Username" name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="Password" name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 0, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../stores/authStore';
import particlesJSON from '../assets/particles.json';
import interactiveParticlesJSON from '../assets/interactiveParticles.json';
import '../utils/particles';
declare global {
  interface Window {
    particlesJS?: any;
  }
}
export default {
  mounted() {
    this.startParticles();
  },
  data() {
    return {
      clickCounts: 0
    }
  },
  methods: {
    startParticles() {
      if (!window.particlesJS) return
      window.particlesJS('particles-js', particlesJSON);
    },
    startInteractiveParticles() {
      if (!window.particlesJS) return
      window.particlesJS('particles-js', interactiveParticlesJSON);
    },
    handleCanvasClick() {
      this.clickCounts++
      if (this.clickCounts === 10) {
        this.startInteractiveParticles();
      }
    }
  },
  setup() {
    const authStore = useAuthStore();
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
      authStore.login({username: formState.username, password: formState.password});
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
      authStore.logout();
    };
    

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
};

</script>

<style scoped>
  .title{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .formClass {
    background-color: #ffffffd1;
    z-index: 0;
    border-radius: 10px;
    padding: 14px;
  }
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

</style>