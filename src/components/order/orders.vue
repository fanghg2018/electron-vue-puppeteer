<template>

   <el-container>
      <el-main>
        <el-card >
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>

</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    }
  }

}
</script>

<style>

</style>>
