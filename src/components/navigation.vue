<template>

    <nav class="relative flex flex-wrap w-full justify-center items-center">
        <div class="container flex flex-wrap items-center justify-between p-2">

            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
                        border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                        type="button" 
                        v-on:click="toggleNavbar()">
                  Menu
                </button>
            </div>
            
            <div v-bind:class="{'hidden': !showMenu, 'grid': showMenu}" class="lg:flex md:grid sm:grid items-center">
                <router-link to='/'>
                <div class="flex items-center">
                    <BeakerIcon class="h-5 w-5 text-blue-500"/>
                    <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Home</p>
                </div> 
                </router-link>

                <router-link to='/stories'>
                    <div class="flex items-center">
                        <BeakerIcon class="h-5 w-5 text-blue-500"/>
                        <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Stories</p>
                    </div>
                </router-link>           
                
                <router-link to='/strategies'>
                    <div class="flex items-center">
                        <BeakerIcon class="h-5 w-5 text-blue-500"/>
                        <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Strategies</p>
                    </div> 
                </router-link>

                <router-link to='/scout'>
                    <div class="flex items-center">
                        <BeakerIcon class="h-5 w-5 text-blue-500"/>
                        <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">Scout</p>
                    </div> 
                </router-link>

                <router-link to='/about'>
                    <div class="flex items-center">
                        <BeakerIcon class="h-5 w-5 text-blue-500"/>
                        <p class="mx-2 hover:text-sky-500 duration-300 uppercase font-bold">About</p>
                    </div> 
                </router-link>

            </div>
        </div>
    </nav>

<router-view />
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/solid'

export default {
    name: "navigation",
    components: { 
        BeakerIcon 
        },
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function() {
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style>

</style>