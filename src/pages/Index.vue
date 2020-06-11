<template>
  <Layout>
    <section>
        <post v-for="edge in $page.allPost.edges" :key="edge.node.id"
          :title="edge.node.title"
          :subtitle="edge.node.subtitle"
          :time="edge.node.date"
          :tags="edge.node.tags">
        </post>
    </section>
  </Layout>
</template>

<page-query>
query {
  allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id,
        title,
        subtitle,
        date,
        timeToRead,
        tags
      }
    }
  }
}
</page-query>

<script>
import post from '~/components/list/post/post.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    post
  }
}
</script>

<style lang="less">
.home-links {
  a {
    margin-right: 1rem;
  }
}
section {
  max-width: 50rem;
  margin: 0 auto;
}
</style>
