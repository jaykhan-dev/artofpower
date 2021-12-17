<template>
<div class="dark:bg-black dark:text-white dark:duration-300 py-20">

  <div class="">
    <h1 class="font-bold text-4xl my-4 text-center">Character Strategies</h1>
  </div>  
    
  <div class="flex justify-center">
        
          <div class="lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
            <div 
            v-for="item in stories" 
            class="hover:text-blue-800 duration-300"
            :key='item.id'>
                <div class="hover:bg-yellow-500 duration-300 p-4 justify-center">
                    <router-link :to="/storypage/+ item.id">
                    <img v-if="item.story_image_thumbnail" 
                    :src="item.story_image_thumbnail.url"
                    :width="item.story_image_thumbnail.width"
                    :height="item.story_image_thumbnail.height">
                    <h2 class="text-2xl font-bold">{{ item.title }}</h2>
                    <div v-html="item.author" class=""></div>
                    <div v-html="item.blurb" class="italic"></div>                  
                </router-link>
                </div>              
            </div>

          <router-view></router-view> 
        </div> 
  </div>
</div>
  
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
  name: 'Stories',
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