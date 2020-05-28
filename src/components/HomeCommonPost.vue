<template>
  <div class="common-content col-12 col-md-8">
    <div class="container p-0">
      <div class="row">
        <div :style="`background-image: url(${picture})`" class="image col-5 d-none d-md-block"></div>
        <div class="text col p-0 p-md-4">
          <h2 class="font-weight-bold text-shadow mb-3">
            <router-link :to="'post/' + id" tag="a">{{title}}</router-link>
          </h2>
          <p class="text-gray text-shadow">{{description}}</p>
          <small class="text-gray">Postado em: {{date}}</small>
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "homeCommonPost",

  props: {
    id: Number,
    href: String,
    picture: String,
    title: String,
    description: String,
    date: String
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.common-content {
  .image {
    background-position: center;
    background-size: cover;

    filter: brightness(80%) contrast(90%);
  }

  .text {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    small {
      font-size: 0.75rem;
    }
  }
}

.divider {
  background-color: rgba(80, 80, 80, 0.137);
  border: solid 1x white;
  margin: 2rem -1rem;
  height: 1px;
}
</style>