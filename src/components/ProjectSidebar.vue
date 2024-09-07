<template>
  <div class="sidebar">
    <ul>
      <li class="mb-6">
        <router-link to="/" class="sidebar-link">
          <font-awesome-icon :icon="['fas', 'home']" class="mr-5" /> <!-- Boşluğu artırdık -->
           | Home
        </router-link>
      </li>
      <!-- Diğer menü öğeleri burada eklenebilir -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectSidebar'
}
</script>

<style scoped>
/* Sidebar genel stili */
.sidebar {
  width: 250px;
  height: 100vh;
  background: linear-gradient(135deg, #333, #555, #777, #999); /* Monokrom tonlar */
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3); /* Hafif gölge ile derinlik */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Link stiline parlak efekt ekleme */
.sidebar-link {
  display: flex;
  align-items: center;
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8); /* Parlak beyaz */
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
  background-color: transparent;
}

.sidebar-link:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2); /* Hover sırasında daha parlak ve belirgin bir arka plan */
  transform: scale(1.05); /* Hafif büyütme efekti */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2); /* Parlak gölge efekti */
}

.sidebar-link i {
  font-size: 1.5rem; /* 24px */
  margin-right: 10px;
}

/* Ul ve Li stili */
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
}

/* Sidebar'a özel ekstra efektler */
.sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.1)); /* Hafif monokrom parlaklık */
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: overlay; /* Renkleri daha parlak yapar */
}

.sidebar-link:hover::before {
  animation: link-hover-glow 1s ease-out forwards; /* Hover sırasında animasyon ekler */
}

@keyframes link-hover-glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }
}
</style>
