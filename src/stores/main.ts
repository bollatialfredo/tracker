import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({ count: 0, name: 'Eduardo', authenticated: true }),

  getters: {
    doubleCount: (state) => state.count * 2,
    getCount: (state) => state.count,
    isAuthenticated: (state) => state.authenticated
  },

  actions: {
    increment() {
      this.count++
    },
    login() {
      this.authenticated = true;
    },
    logout() {
      this.authenticated = false;
    }
  },
})