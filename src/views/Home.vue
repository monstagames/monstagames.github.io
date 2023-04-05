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
  <div class="team">
    <h1>Team @ Monsta Games</h1>
    <h2>Consists of:</h2>
    <ul>
      <li>
        Founder (Builder, Voice Actor)
      </li>
      <li>
        Director (Storywriter, UI Designer, Game Director)
      </li>
      <li>
        4 Proficient programmers
      </li>
      <li>
        Media managers
      </li>
      <li>
        Highly entity modeler
      </li>
    </ul>
    <p>This is how Monsta Games continues to produce high quality projects</p>
  </div>
</template>

<style scoped>
.team {
  backdrop-filter: blur(0.5rem);
  display: flex;
  flex-direction: column;
  border-top: rgba(255, 255, 255, 0.3) 0.2vh dashed;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 2rem 30vw;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: white;
  margin: 0.5rem;
}

li {
  text-align: left;
  color: white;
}

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

main h1,
main h2,
main h3,
main h4,
main h5,
main h6,
main p,
main span {
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
  .team {
    padding: 2rem 0;
  }
}
</style>