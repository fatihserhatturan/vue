<template>
    <div class="sidebar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <!-- Diğer linkler buraya eklenebilir -->
        </ul>
      </nav>
    </div>
  </template>

  <script>
  export default {
    name: 'ProjectSidebar'
  }
  </script>

  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #f8f9fa;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    margin: 10px 0;
  }
  </style>
