<script setup>
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Головна</RouterLink>
          </li>
          <li>
            <RouterLink to="/price">Ціни</RouterLink>
          </li>
          <li>
            <RouterLink to="/discount">Акції</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

header {
  background-color: #2F4E74;
  color: white;
  padding: 10px 0;
  margin-bottom: 32px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
  padding: 0 15px 0 0;
  font-size: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

</style>