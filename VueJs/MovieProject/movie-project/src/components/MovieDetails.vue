<template>
  <div :style="[ movie.backdrop_path ? {
    'background-image': 'url(' + backdropUrl + movie.backdrop_path + ')', 'background-size': 'cover'} : '']" class="movieContainer">
    <div class="backdrop-image-hover">
      <div class="movieWrapper">
        <div class="imgWrapper">
          <FavoritesIcon class="star-item" v-if="movie.id" :movie-id="movie.id"/>
          <img :alt="movie.title" v-if="movie.poster_path" :src="url + movie.poster_path ">
        </div>

        <div class="descriptionWrapper">
          <h2>{{ movie.title }} <span v-if="movie.release_date">( {{movie.release_date.slice(0,4)}} )</span></h2>

          <ul>
            <span style="font-weight: bold">{{ "Genres: " }}</span>
            <li
                v-for="(genre, index) in movie.genres"
                :key="genre.id">{{ genre.name }}
              <span v-if=" index < movie.genres.length-1 ">{{ "," }}</span></li>
            <span>{{ '.' }}</span>
          </ul>
          <p>{{ movie.tagline }}</p>
          <h3>Overview</h3>
          <p>{{ movie.overview }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FavoritesIcon from "@/components/FavoritesIcon";

const axios = require("axios");

export default {
  name: "MovieDetails",
  components:{
    FavoritesIcon
  },
  data() {
    return {
      id: this.$route.params.id,
      movie: {},
      url: "http://image.tmdb.org/t/p/w185",
      backdropUrl: "http://image.tmdb.org/t/p/w1280"
    }
  }, beforeMount() {
    try {

      this.getMovieDetails();

    } catch (e) {
      console.error(e)
    }


  },
  methods: {
    async getMovieDetails() {
      const {
        data: movie
      } = await axios({
        url: `https://api.themoviedb.org/3/movie/${this.id}`,
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2ZjZWM5NDQyZjVhODljODM1ZTBlMjg5YWU2YWNlYSIsInN1YiI6IjVmNGU0N2ZlOWVjZjE4MDAzNTk3NTI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZzxCOaa90zu2v8QyPVyaiYi5fafmjatFMgD9lgfAjY"
        }
      });
      this.movie = movie;


    }
  }
}
</script>

<style scoped>
.movieContainer {
  display: flex;
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 1);
  position: relative;
}
.backdrop-image-hover{
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(8,23,29) 150px, rgba(0,0,0,0.6) 100%);
}
.movieWrapper {
  margin: 10px 10px;
  display: flex;
  position: relative;
  padding: 60px 0;
}

.imgWrapper {
  user-select: none;
}

.descriptionWrapper {
  margin: 10px;
  color: white;
}

h2 {
  font-size: 40px;
}

img {
  width: 300px;
  height: 400px;
  border-radius: 5px;
}

li {
  list-style: none;
  display: inline-block;
}

.star-item{
  position: relative;
  margin-top: 5px;
  margin-right: -50px;
}
</style>
