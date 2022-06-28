<template>
  <v-row>
    <v-col>
      <router-link :to="{ name: 'home'}">
        home
      </router-link> |
      <router-link :to="{ name: 'countries'}">
        country
      </router-link>
    </v-col>
  </v-row>
</template>

<style>
  .v-card .v-card--material__heading {
    top: -30px;
  }
  .v-card--material__heading {
    position: relative;
    top: -70px;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    z-index: 1;
  }
  .vue-world-map {
    max-height: 350px;
  }
  .vue-world-map .land{stroke:#fff!important}
  .vue-world-map .land {
    fill: #dadada;
    stroke: black;
  }
  .vue-world-map #US {
    fill: #838383;
  }
  .vue-world-map #BR {
    fill: #bbbbbb;
  }
  .vue-world-map #AU {
    fill: #b6b6b6;
  }
  #map-svg, .vue-world-map {
    height: 100%;
  }
</style>
