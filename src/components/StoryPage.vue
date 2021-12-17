<template>

<div class="grid place-items-center p-4 dark:bg-black dark:text-white dark:duration-300">
    <div class="mt-20">
        <h2 class="text-center text-6xl font-bold">{{ item.title }}</h2>
    </div>
    <div class="grid place-items-center justify-center mb-20">
        <div 
        v-for="block in item.content" 
        class="lg:w-1/2 md:w-full sm:w-full"
        :key='block.id'>
            <div v-if="block.type == 'title'">
                <h2 v-html="block.value" class="text-4xl font-bold text-center my-8"></h2>
            </div>
            <div v-else-if="block.type == 'story'" class="p-2">
                <div v-html="block.value" class="text-2xl my-2"></div>
            </div>
            <div v-else-if="block.type == 'annotations'" class="p-2 text-blue-800">
                <div v-html="block.value" class="text-2xl my-2"></div>
            </div>                                    
        </div>
    </div>                    
</div>    
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
  name: 'Story',
  props: {
    msg: String
  },
  data: function () {
    return { item: [] }
  },
  methods: {
      getStories() {
          axios
            .get(API_ROOT + this.$route.params.id + '/')
            .then((response) => (this.item = response.data))
      }
    },
  mounted() {
    this.getStories();
    },
  watch: {
        '$route' (to, from) {
          this.getStories();
        }
    }
}
</script>