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
    <iframe src="https://www.youtube.com/embed/NPOO-Es_0Vk?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="image-gallery" ref="attachment_grid">
      <img class="hide-cursor" v-for="i in 9" :src="`/images/thumbnails/${i}.webp`" alt="Thumbnail">
    </div>
    <p>
      If you've ever wondered about the experience someone goes through dealing with sleep paralysis, insomnia, extreme paranoia, and or schizophrenia, this game offers an interesting perspective on what it's like dealing with mental illness and the true reality for a lot of people.<br><br>What choices will you make to survive?
    </p>
    <a href="https://roblox.com/games/12767012936" target="_blank"><button class="reactive">Play!</button></a>
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
  background-color: rgba(0, 0, 0, 0.8);
}

h1,h2,h3,h4,h5,h6,p,span,img,button {
    color: white;
}

p {
  padding: 0 2rem;
}

iframe {
  width: 50vw;
  aspect-ratio: 1.77;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0.5rem rgba(255, 255, 255, 0.5);
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
  box-shadow: 0 0 0.5rem 0 rgba(255, 255, 255, 0.8);
}

button {
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bolder;
  transition: all 0.4s;
  border: none;
  margin-bottom: 2rem;
}
@media (max-width: 700px) {
  iframe {
    width: 90vw;
  }
}
</style>