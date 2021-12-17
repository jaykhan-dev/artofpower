<template>
<header class="p-4 sticky top-8 bg-black text-white">
    <nav class="flex justify-evenly w-full">
        <router-link to='/'>Home</router-link>
        <router-link to='/stories'>Stories</router-link>
        <router-link to='/strategies'>Strategies</router-link>
        <router-link to='/scout'>Scout</router-link>
        <router-link to='/about'>About</router-link>

    </nav>
</header>
<router-view></router-view>
</template>

<script>

</script>

<style>

</style>