<template>
  <div class="main-content col-12 mb-5 mt-4">
    <div class="text">
      <router-link :to="'post/' + id" tag="a" class="h1 font-weight-bold text-shadow mb-3">{{title}}</router-link>
      <p class="text-gray text-shadow">{{description}}</p>
    </div>
    <div :style="`background-image: url(${picture})`" class="image"></div>
  </div>
</template>

<script>
export default {
  name: "homeMainPost",

  props: {
    id: Number,
    href: String,
    picture: String,
    title: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';


.main-content {
  background-color: #242424;
  height: 50vh;

  position: relative;

  border-radius: 5px;
  overflow: hidden;

  .text,
  .image {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .text {
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    text-rendering: optimizeLegibility;

    left: 0;
    z-index: 2;

    * {
      width: 100%;
    }
  }

  .image {
    background-position: center;
    background-size: cover;

    right: 0;
    z-index: 1;
    filter: brightness(80%) contrast(90%);
  }
}

@media only screen and (min-width: 992px) {
  .text,
  .image {
    width: 50% !important;
  }

  .text {
    text-align: left !important;
  }
}
</style>