<script setup>
</script>

<template>
  <div class="container">
    <div id="hero">
      <img id="logo" src="/images/logo.webp" alt="Logo">
      <router-link to="/broken-sleep">
        <button>Learn more</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#logo {
  width: 50vh;
  transition: all 1s;
}

#hero {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 6rem);
  filter: blur(0);
}

main {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1rem);
  padding: 1rem;
}

main h1, main h2, main h3, main h4, main h5, main h6, main p, main span {
  color: white;
}

button {
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bolder;
  transition: all 0.4s;
  cursor: pointer;
  border: none;
}

button:hover {
  background-color: transparent;
  color: white;
}

section {
  background-color: white;
  min-height: 1rem;
}

@media (max-width: 700px) {
  button {
    margin-top: 10vh;
  }
  #logo {
    width: 95vw;
  }
}
</style>