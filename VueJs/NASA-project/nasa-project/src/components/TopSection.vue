<template>
  <div class="topSectionWrapper">
    <img alt="" src="../assets/topSectionImg.jpg">
    <div class="mainText">
      <h1>Welcome to NASA`s expeditions to Mars</h1>
      <br>

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

h1 {
  margin: 15px;
  font-weight: bold;
  font-size: 2rem;
}
@media (max-width:800px){
  h1{
    font-size: 1.5rem;
    margin: 5px;
  }

}
@media (max-width:400px){
  h1{
    font-size: 1rem;
    font-weight: lighter;
    margin: -25px;
  }

}
</style>
