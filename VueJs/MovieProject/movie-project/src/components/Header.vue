<template>
  <div>

    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <router-link class="home-link" href="#" style="font-size: 30px" to="/" tag="b-navbar-brand" >MovieTheatre</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input v-model="inputValue" class="mr-sm-2" placeholder="Search for a movie" size="sm"
                            @keyup="searchForMovie()"></b-form-input>
              <router-link
                  class="my-2 my-sm-0"
                  size="sm"
                  type="submit"
                  tag="b-button"
                  to="/foundmovies"
              >Search
              </router-link>
<!--              <b-button class="my-2 my-sm-0" size="sm" type="submit" to="">Search</b-button>-->
            </b-nav-form>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      inputValue: ''
    }
  }
  ,
  methods: {
    searchForMovie() {

      console.log(this.inputValue)

    }
  }
}

</script>

<style scoped>

.mr-sm-2 {
  width: 400px;
}
.home-link{
  cursor: pointer;
}
</style>
