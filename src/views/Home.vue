<template>
  <main class="container">
    <home-main-post
      :id="posts[0].id"
      :picture="posts[0].picture"
      :href="posts[0].href"
      :title="posts[0].title"
      :description="posts[0].description"
    />
    <home-common-post
      v-for="post in posts.slice(1)"
      :key="post.id"
      :id="post.id"
      :picture="post.picture"
      :href="post.href"
      :title="post.title"
      :description="post.description"
      :date="post.date"
    />
  </main>
</template>

<script>
import homeMainPost from "@/components/HomeMainPost";
import homeCommonPost from "@/components/HomeCommonPost";

import { staffPosts } from "@/data/home"

export default {
  name: "Home",

  components: {
    homeMainPost,
    homeCommonPost
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
