<template>
  <div class="hello">
   <input v-model="searchContent" @keydown.enter="search" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
import { googleSearch } from './GoogleSearch'
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    async search () {
      await googleSearch(this.searchContent)
      this.searchContent = ''
    }
  }
}
</script>
