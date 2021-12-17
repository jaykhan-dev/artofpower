<script>
import Navigation from './components/navigation.vue'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<template>
<div class="">
  <div class="h-5 bg-black"></div>
    <h1 class="lg:text-8xl text-4xl font-bold text-center py-8">The Art of Power</h1>
    <p class="text-2xl italic text-center mb-20">Inspiring Leadership</p>

<Navigation />
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,900;1,400&display=swap');
* {
  font-family: 'Playfair Display', serif;
}
</style>
