<template>
  <div id="wrapper">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="home-link" style="font-size: 1rem" tag="b-navbar-brand">NASA`s
          expeditions to Mars
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button v-b-toggle.sidebar-right>
              Select to search
            </b-button>
            <b-sidebar id="sidebar-right" title="Select to search" right shadow>
              <DropDown class="dropdown"/>
            </b-sidebar>
            <b-nav-form>


            </b-nav-form>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

  </div>
</template>

<script>


import DropDown from "@/components/DropDown";

export default {

  name: "Header",
  components: {
    DropDown
  }

}
</script>

<style scoped>

#wrapper {
  position: relative;
}

.mr-sm-2 {
  width: 400px;
}

.home-link {
  cursor: pointer;
}
</style>
