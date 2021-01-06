<template>
  <div>
    <PopularFilms/>
    <FavoritesFilms/>
  </div>
</template>

<script>
import PopularFilms from "@/components/PopularFilms";
import FavoritesFilms from "@/components/FavoritesFilms";

export default {
  name: "Home",
  components: {
    PopularFilms,
    FavoritesFilms
  }
}
</script>

<style scoped>

</style>
