<template>
    <div class="home">

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.first_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.last_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editUser(user.id)" class="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="confirmDelete(user.id)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          this.users = data.map(user => ({
            id: user.id,
            first_name: user.name.split(' ')[0],
            last_name: user.name.split(' ')[1] || '',
            email: user.email
          }));
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      editUser(id) {
        // Handle edit logic here
        alert(`Edit user with ID: ${id}`);
      },
      confirmDelete(id) {
        // Handle delete confirmation logic here
        if (confirm(`Are you sure you want to delete user with ID: ${id}?`)) {
          alert(`User with ID: ${id} deleted`);
        }
      }
    }
  }
  </script>

  <style scoped>
  .home {
    padding: 20px;
    margin-left: 250px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  </style>
