<template>
  <Layout>
    <section class="post-template">
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
  @smallAndUp: ~"only screen and (min-width: 576px)";
  
  .post-template {
    background-color: white;
    margin: 2.4rem auto;
    max-width: 50rem;
    padding: 0 1rem;

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
      margin-top: 2rem;
    }
  }

  .dark {
    .post-template {
      background-color: #141d26;
      color: #f5f5f5f2;

      header {
        h2 {
          color: #aaa;
        }
      }
    }
  }

  @media @smallAndUp {
    .post-template {
      box-shadow: 0 0 0 1px #3336381a;
      padding: 2rem;
    }
    
    .dark {
      .post-template {
        box-shadow: 0 0 0 1px #444;
      }
    }
  }
</style>