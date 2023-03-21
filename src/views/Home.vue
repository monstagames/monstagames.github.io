<script setup>
</script>

<template>
  <main>
    <img id="logo" src="/images/logo.webp" alt="Logo">
    <h3>Out latest project</h3>
    <router-link to="/broken-sleep">
      <button>Learn more</button>
    </router-link>
  </main>
</template>

<style scoped>
#logo {
  width: 50vh;
  transition: all 1s;
}

#logo:hover {
  transition: all 0.5s;
  transform: translateY(-10vh) scale(0.95);
}

h3 {
  transform: translateY(-20vh);
  opacity: 0;
  transition: opacity 1s;
}

main:has(#logo:hover) > h3 {
  transition: opacity 0.5s;
  opacity: 1;
}

main:has(#logo:hover) {
  backdrop-filter: brightness(0.3);
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 5rem);
  backdrop-filter: brightness(1);
  transition: backdrop-filter 0.4s;
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

@media (max-width: 700px) {
  button {
    margin-top: 10vh;
  }
  #logo {
    width: 95vw;
  }
}
</style>