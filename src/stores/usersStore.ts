import { defineStore } from 'pinia'
import { fetchUsers } from '../api/users'

export const usersStore = defineStore('users', {
  state: () => ({ users: [] }),

  getters: {
    getUsers: (state) =>  state.users
  },

  actions: {
    async fetchUsers () {
      try {
        const resp = await fetchUsers()
        this.users = resp.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
})