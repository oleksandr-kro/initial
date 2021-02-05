<template>
  <div>
    <footer>
      <div>NASA`s expeditions &#169;{{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343a40;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
</style>
