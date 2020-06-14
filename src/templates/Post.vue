<template>
  <Layout>
    <section>
      <header>
        <date-time :date="$page.post.date" :time-to-read="$page.post.timeToRead" />
        <h1>{{ $page.post.title }}</h1>
        <h2>{{ $page.post.subtitle }}</h2>
        <tag-list :tags="$page.post.tags"/>
      </header>
      <article>
        <div v-html="$page.post.content"/>
      </article>
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
import dateTime from '~/components/post/date-time/date-time.vue'
import tagList from '~/components/post/tag-list/tag-list.vue'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    dateTime,
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
    }

    article {
      margin: 2rem 0;
    }
  }

  .dark {
    section {
      color: #f5f5f5f2;

      header {
        h2 {
          color: #aaa;
        }
      }
    }
  }
</style>