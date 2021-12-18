<template>
<header class="sticky top-0 bg-black text-white z-20">
    <div class="h-5 bg-sky-500 flex justify-between p-4 items-center">
        <p class="font-bold uppercase">prototype</p>
        <button type="button">Light Mode</button>
                
    </div>
    
    <nav class="flex w-full justify-center items-center">
        <div class="flex p-2">

            <router-link to='/'>
                <div class="flex">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Home</p>
                </div> 
            </router-link>


            <router-link to='/stories'>
                <div class="flex">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Stories</p>
                </div>
            </router-link>           
            
            <router-link to='/strategies'>
                <div class="flex">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Strategies</p>
                </div> 
            </router-link>
            <router-link to='/scout'>
                <div class="flex">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Scout</p>
                </div> 
            </router-link>
            <router-link to='/about'>
                <div class="flex">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">About</p>
                </div> 
            </router-link>
        </div>

    </nav>
</header>
<router-view></router-view>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/solid'

export default {
  components: { 
      BeakerIcon 
    }
}
</script>

<style>

</style>