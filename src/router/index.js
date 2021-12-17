import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'
import StoryPage from '../components/StoryPage.vue'
import Strategies from '../views/Strategies.vue'
import Scout from '../views/Scout.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/stories', name: 'Stories', component: Stories },
    { path: '/storypage/:id', name: 'StoryPage', component: StoryPage},
    { path: '/strategies', name: 'Strategies', component: Strategies },
    { path: '/scout', name: 'Scout', component: Scout },
    { path: '/about', name: 'About', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router