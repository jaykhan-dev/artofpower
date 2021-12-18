<template>
<div class="h-screen bg-fixed bg-black text-white grid place-items-center" id="home-bg">
    <div  class="absolute left-20 bottom-20 p-4">
        <p class="uppercase py-4">who we are</p>
        <h1 class="lg:text-8xl font-bold py-4">The Art of Power</h1>
        <p class="tracking-wide">Inspiring Leadership with stories and character analysis</p>
    </div>
    
</div>
</template>

<script>

export default {
    name: 'Home',
    components: {

    }
}
</script>

<style>
#home-bg {
    background-image: url('https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>