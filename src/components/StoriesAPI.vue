<template>

<div class="dark:bg-black dark:text-white dark:duration-300 py-20">

  <div class="fixed left-0 top-0 w-24 grid place-items-center h-screen bg-black text-white z-10">
    <h1 class="text-4xl font-bold -rotate-90">Stories</h1>
  </div>

  <div class="bg-gradient-to-r from-black to-gray-900 rounded full text-white p-4">
        <h1 class="font-bold text-4xl my-4">Character Strategies</h1>
        <p class="mb-8">We hand-pick characters from popular tv shows or movies and present them in the light of strategic thinking.</p>
  </div>

    
  <div class="flex justify-center">
      <div class="lg:w-full">
            <div 
            v-for="item in stories" 
            class="hover:text-blue-800 duration-300"
            :key='item.id'>
                <div class="border-t border-gray-900 hover:shadow-2xl duration-300 p-4 grid grid-cols-3 justify-center py-10">
                  
                  <img v-if="item.story_image_thumbnail" 
                        :src="item.story_image_thumbnail.url"
                        :width="item.story_image_thumbnail.width"
                        :height="item.story_image_thumbnail.height"
                        class="self-align-center">

                    <router-link :to="/storypage/+ item.id">
                      <h1 class="text-4xl my-8 font-bold">{{ item.title }}</h1>
                      <div v-html="item.author" class=""></div>
                      <div v-html="item.blurb" class="italic"></div>                      
                    </router-link>
                  
                  <div class="flex items-center justify-end">
                    <ArrowRightIcon class="h-5 w-5" />
                  </div>
                </div>              
            </div>

          <router-view></router-view> 
        </div> 
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
import { ArrowRightIcon } from '@heroicons/vue/solid'

const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
  name: 'Stories',
  components: {
    ArrowRightIcon
  },
  props: {
    msg: String
  },
  data: function () {
    return { stories: [] }
  },
  mounted() {
    axios
    .get(API_ROOT + '?type=stories.StoryPage&fields=genre,blurb,content,author,story_image_thumbnail')
    .then(response => (this.stories = response.data.items))
  }
}
</script>