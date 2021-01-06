<template>
  <div>
    <h2>Popular movies</h2>
    <div class="contentWrapper">
      <div
          v-for="item in paginatedMovies " :key="item.id"
          class="itemWrapper"
          @click="navigateToMovieDetails(item.id)"
      >
        <img
            :alt="item.title"
            :src="url + item.poster_path "
            loading="lazy"
        >
        <FavoritesIcon :movie-id="item.id"/>

        <p class="title">{{ item.title }}</p>
        <p class="movieData">{{ item.release_date }}</p>
      </div>
    </div>
    <div class="moviesPagination">
      <div
          v-for="page in pages"
          :key="page"
          :class="{'pageSelected': page === pageNumber}"
          class="page"
          @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>

  </div>
</template>

<script>

import FavoritesIcon from "@/components/FavoritesIcon";

const axios = require("axios");

export default {

  name: "PopularFilms",
  data() {
    return {
      items: [],
      url: "http://image.tmdb.org/t/p/w185",
      moviesPerPage: 5,
      pageNumber: 1
    };
  },
  components: {
    FavoritesIcon
  },
  computed: {
    pages() {
      return Math.ceil(this.items.length / 5);
    },
    paginatedMovies() {
      let from = (this.pageNumber - 1) * this.moviesPerPage;
      let to = from + this.moviesPerPage;
      return this.items.slice(from, to);
    }
  },
  beforeMount() {
    try {

      this.getMovies();

    } catch (e) {
      console.error(e)
    }


  },
  methods: {
    async getMovies() {
      const {
        data: {results}
      } = await axios({
        url: "https://api.themoviedb.org/3/movie/popular",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2ZjZWM5NDQyZjVhODljODM1ZTBlMjg5YWU2YWNlYSIsInN1YiI6IjVmNGU0N2ZlOWVjZjE4MDAzNTk3NTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZzxCOaa90zu2v8QyPVyaiYi5fafmjatFMgD9lgfAjY"
        }
      });
      this.items = results;
    },
    pageClick(page) {
      this.pageNumber = page;
    },
    navigateToMovieDetails(id) {
      this.$router.push({path: `/movie/${id}`})
    }
  }
}
</script>

<style>

h2 {
  text-align: center;
  font-weight: bolder;
  margin: 10px 0px;
}

.contentWrapper {
  padding: 0px 10px;
  margin: 0px 10px;
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 1);
  position: relative;
}

.movieData {
  margin-bottom: 5px;
}

.itemWrapper {
  text-align: center;
  width: 20%;
  cursor: pointer;
  position: relative;
  transition: all .1s;
}

.itemWrapper:hover {
  opacity: 0.9;
  transform: scale(.96);
}

.itemWrapper > img {
  border-radius: 10%;
  width: 200px;
  height: 300px;
  padding: 5px;
}

.title {
  font-weight: bold;
  height: 55px;
  margin-bottom: 0;
}

.moviesPagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.page {
  padding: 5px;
  border: solid 1px black;
  border-radius: 5%;
  margin: 10px 5px 5px 5px;
}

.page:hover {
  background-color: dimgray;
  cursor: pointer;
  color: white;
}

.pageSelected {
  background-color: dimgray;
  cursor: pointer;
  color: white;
}
</style>
