<template>
  <div class="topSectionWrapper">
    <img alt="" src="https://img.huffingtonpost.com/asset/5dbb4b9e210000d642ad487b.jpeg?cache=1bpSGtbQCp&ops=1778_1000">
    <div class="mainText">
      <h1>Welcome to Our Movie Theatre</h1>
      <br>
      <h2>Sit Back Relax Enjoy</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection"

}
</script>

<style scoped>
.topSectionWrapper {
  margin: 0px 0px;
  display: flex;
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 1);
  position: relative;
  justify-content: center;
}

.topSectionWrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.mainText {
  text-align: center;
  position: absolute;
  top: 60px;
  color: white;
}

h1, h2 {
  font-weight: bold;
}
</style>
