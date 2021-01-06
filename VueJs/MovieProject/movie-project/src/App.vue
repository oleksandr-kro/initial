<template>
<div>
  <Header/>
  <TopSection/>

  <router-view></router-view>
  <Footer/>
</div>
</template>

<script>

import Header from "@/components/Header";
import TopSection from "@/components/TopSection";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components:{
    Header,
    TopSection,
    Footer
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

</style>
