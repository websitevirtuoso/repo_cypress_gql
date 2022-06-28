<template>
  <v-app-bar :order="preferences.fullSizeBar">
    <v-app-bar-nav-icon data-test="sidenav-toggle" @click="preferences.toggleLeftSideBar()"/>
    <v-btn
      :icon="`mdi-chevron-${preferences.showMiniSideBar ? 'right' : 'left'}`"
      class="hidden-sm-and-down" @click="preferences.toggleMiniSideBar()" />
    <v-btn icon="mdi-arrow-expand-vertical" class="hidden-sm-and-down" @click="preferences.toggleSizeBar()" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { usePreferences } from "@/stores/preferences"

const preferences = usePreferences();
</script>
