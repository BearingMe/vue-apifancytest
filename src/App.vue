<template>
  <div id="app">
    <header>
      <the-carousel class="d-none d-md-block"/>
      <the-navbar />
    </header>

    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheCarousel from "@/components/TheCarousel";

export default {
  components: {
    TheNavbar,
    TheCarousel
  }
};
</script>

<style>
body {
  font-family: "open sans";
}
</style>
