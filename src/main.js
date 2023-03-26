import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "./assets/main.css"

const cursor = document.getElementById("cursor")
const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate(${mouseX - 9}px, ${mouseY - 5}px)`;

}
window.addEventListener('mousemove', moveCursor)

const app = createApp(App)

app.use(router)

app.mount('#app')
