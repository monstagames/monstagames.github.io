<script setup>
import { reactive } from 'vue';
const slideshow = reactive({
  first: "Screenshot_221",
  second: "Screenshot_222",
  first_style: "opacity: 1;",
  second_style: "opacity: 0; height: 0"
})
var first = true

setInterval(() => {
  first = !first
  if (first == true) {
    slideshow.first = "Screenshot_2" + (21 + Math.floor(Math.random() * 8))
    slideshow.first_style = "opacity: 1"
    slideshow.second_style = "opacity: 0"
  } else {
    slideshow.second = "Screenshot_2" + (21 + Math.floor(Math.random() * 8))
    slideshow.first_style = "opacity: 0"
    slideshow.second_style = "opacity: 1"
  }
}, 6000)
</script>

<template>
  <!-- Slideshow images -->
  <img class="slideshow-element" :style="`${slideshow.first_style}; background-image: url(/images/slideshow/${slideshow.first}.webp);`">
  <img class="slideshow-element" :style="`${slideshow.second_style}; background-image: url(/images/slideshow/${slideshow.second}.webp);`">
  <!---->
  <header>
    <router-link to="/">
      <img id="studio-logo" src="/images/team-logo.webp" alt="Monsta Games logo">
    </router-link>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <footer>

  </footer>
</template>

<style scoped>
header {
  min-height: 5rem;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 2vw;
  backdrop-filter: blur(1rem);
  justify-content: space-between;
  border-bottom: rgba(255, 255, 255, 0.3) 0.2vh dashed;
}

#studio-logo {
  width: 4rem;
  filter: brightness(0) invert(1);
}

.slideshow-element {
  position: fixed;
  background-size: cover;
  background-position: center;
  top: -5vh;
  left: -5vw;
  width: 110vw;
  height: 110vh;
  transition: opacity 5s;
  filter: grayscale(0.9) brightness(1.2);
  z-index: -1;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(-30vw);
}</style>