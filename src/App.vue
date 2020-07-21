<template>
  <div id="app">
   <el-container>
        <el-header  >
         <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" >

                <el-menu-item index="/index">主 页</el-menu-item>
                <el-menu-item index="/users">用户管理</el-menu-item>
                <el-menu-item index="/msgs">消息中心</el-menu-item>
                <el-submenu index="">
                  <template slot="title">订单管理</template>
                  <el-menu-item index="/orders/1">订单增加</el-menu-item>
                  <el-menu-item index="/orders/2">订单减少</el-menu-item>
                 </el-submenu>
                 <el-menu-item index="/puppeteer">PUPPETEER</el-menu-item>

            </el-menu>
      </el-header>
   </el-container>
   <el-container>
      <el-main>
        <el-card >
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
</div>
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
