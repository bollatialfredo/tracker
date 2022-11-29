import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({ count: 0, loading: false }),

  getters: {
    doubleCount: (state) => state.count * 2,
    getCount: (state) => state.count,
    getLoading: (state) => state.loading
  },

  actions: {
    increment() {
      this.count++
    },
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    }
  },
})