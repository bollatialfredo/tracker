import { LoginPayload } from '../models/authModel';
import { defineStore } from 'pinia'
import { login } from '../api/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({ authenticated: false }),

  getters: {
    isAuthenticated: (state) =>  state.authenticated
  },

  actions: {
    async login (payload: LoginPayload) {
      try {
        const resp = await login(payload)
        this.authenticated = resp;
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      this.authenticated = false;
    }
  },
})