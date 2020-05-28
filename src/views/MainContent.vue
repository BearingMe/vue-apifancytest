<template>
  <div v-if="posts" class="container">
    <div class="row">
      <div class="page-content" v-html="posts[id].content">
        
      </div>
    </div>
  </div>
</template>

<script>
import { staffPosts } from "@/data/home"

export default {
  name: "MainContent",

  props: {
    id: Number
  },

  data() {
    return {
      posts: false
    };
  },

  async mounted() {
    this.posts = await staffPosts()
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container {
  max-width: 800px;
}

/deep/ .page-content {
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: rgb(216, 216, 216);
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 5rem;
  max-width: 100%;

  img {
    border-radius: 2px;
    max-width: 100%;
    max-height: 450px;
    min-width: 100%;
    object-fit: cover;
    margin: 2rem 0;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 1rem;

  }

  em {
    color: $primary;
  }
}
</style>
