<template>
  <div class="stars">
    <b-icon
        v-if="!bool"
        class="h2"
        icon="star"
        @click.stop="addToFavorites()"
    >
    </b-icon>
    <b-icon
        v-if="bool"
        class="h2"
        icon="star-fill"
        @click.stop="addToFavorites()"
    >
    </b-icon>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  name: "FavoritesIcon",
  props: ['movieId'],
  data() {
    return {
      id: this.movieId,
      bool: false
    }
  },
  beforeMount() {

    if (localStorage.getItem("favorites") != null) {
      
      this.bool = localStorage.getItem("favorites").split(",").includes(this.id.toString());
    }
  },
  methods: {
    addToFavorites() {

      if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", this.id);
        this.bool = true;

      } else {
        let favorites = localStorage.getItem("favorites").split(",");
        if (!favorites.includes(this.id.toString())) {
          favorites.push(this.id);
          this.bool = true;
        } else {
          favorites.splice(favorites.indexOf(this.id.toString()), 1);
          this.bool = false;
        }
        localStorage.setItem("favorites", favorites.toString());
        EventBus.$emit('favorites', this.id);

      }
    }
  }
}
</script>

<style scoped>
.b-icon.bi {
  position: absolute;
  top: 15px;
  right: 65px;
  background: darkgray;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
}
</style>
