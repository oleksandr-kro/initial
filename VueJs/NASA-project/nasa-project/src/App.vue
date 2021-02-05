<template>
  <div id="app">
    <Header/>
    <TopSection/>
    <Photos/>
    <Footer/>
  </div>
</template>

<script>



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Footer from "@/components/Footer";
import TopSection from "@/components/TopSection";
import Header from "@/components/Header";
import Photos from "@/components/Photos";


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    TopSection,
    Photos
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

</style>
