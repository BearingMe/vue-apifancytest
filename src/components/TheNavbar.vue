<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand px-2" href="#">Coding</a>
      <button
        class="navbar-toggler border-0 px-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link tag="a" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/services">Community</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/contact">Index</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>

<style lang="scss">
@import "@/assets/scss/style";

.navbar {
  background-color: transparentize($color: #131313, $amount: 0.1);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;

  &-brand {
    font-family: "Roboto Slab" !important;
    font-size: 1.5rem !important;
  }

  &-toggler-icon {
    font-size: 0.9em !important;
  }

  @include media-breakpoint-up(md) {
    height: 80px;
  }
}

.nav-link {
  font-weight: 600;
  font-size: 0.85em !important;
}

.router-link-active {
  color: $primary !important;
}
</style>