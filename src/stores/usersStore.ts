import { defineStore } from 'pinia'
import { fetchUsers } from '../api/users'
import { User } from '../models/userModel';

export const usersStore = defineStore('users', {
  state: () => ({ users: [] as User[] }),

  getters: {
    getUsers: (state) =>  state.users
  },

  actions: {
    async fetchUsers () {
      try {
        const resp = await fetchUsers()
        this.users = resp;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser (user: User) {
        this.users = this.users.filter((eachUser: User) => user.user_id !== eachUser.user_id);
        console.log(this.users);
        
    },
    async addUser (user: any) {
      user.first_name = user.name;
      user.last_name = user.lastName;
      this.users.push(user);
    },
  },
})