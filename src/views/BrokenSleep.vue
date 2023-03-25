<script setup>
import { onMounted, ref } from 'vue';
const attachment_grid = ref(null);
onMounted(() => {
  const viewer = new Viewer(attachment_grid.value,{
    button: false,
    title: false,
    toolbar: false,
    navbar: 4,
    zoomRatio: 0.2,
  })
})
</script>

<template>
  <div class="container">
    <img id="logo" src="/images/logo.webp" alt="Logo">
    <div class="image-gallery" ref="attachment_grid">
      <img v-for="i in 9" :src="`/images/thumbnails/${i}.webp`" alt="Thumbnail">
    </div>
    <p>
      If you've ever wondered about the experience someone goes through dealing with sleep paralysis, insomnia, extreme paranoia, and or schizophrenia, this game offers an interesting perspective on what it's like dealing with mental illness and the true reality for a lot of people.<br><br>What choices will you make to survive?
    </p>
    <a href="https://roblox.com/games/12767012936" target="_blank"><button>Play!</button></a>
  </div>
</template>

<style scoped>
#logo {
  width: 30vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,h2,h3,h4,h5,h6,p,span,img,button {
    color: white;
}

p {
  padding: 0 2rem;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
}

.image-gallery > img {
  height: 5rem;
  width: auto;
  cursor: zoom-in;
  border-radius: 0.8rem;
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
</style>