<template>
  <div class="hello">
   <input v-model="searchContent" @keydown.enter="search" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    async search () {
      await document.googleSearch(this.searchContent)
      this.searchContent = ''
    }
  }
}
</script>
