<template>
  <Layout>
    <section>
      <header>
        <time>{{ $page.post.date }}</time>
        <h1>{{ $page.post.title }}</h1>
        <h2>{{ $page.post.subtitle }}</h2>
      </header>
      <article>
        <div v-html="$page.post.content"/>
      </article>
      <footer>
        <tag-list :tags="$page.post.tags"/>
      </footer>
    </section>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    content,
    date,
    path,
    subtitle,
    tags,
    timeToRead,
    title
  }
}
</page-query>

<script>
import tagList from '~/components/post/tag-list/tag-list.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    tagList
  }
}
</script>

<style lang="less">
  section {
    margin: 0 auto;
    max-width: 50rem;

    header {
      h1 {
        font-size: 2.6rem;
      }

      h2 {
          color: #757575;
          font-size: 1.5rem;
          font-weight: 400;
      }

      time {
          color: #757575;
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          margin-bottom: 0.6rem;
      }
    }

    article {
      margin: 2rem 0;
    }
  }
</style>