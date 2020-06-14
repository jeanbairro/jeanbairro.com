<template>
  <Layout>
    <section>
      <g-link v-for="edge in $page.allPost.edges" 
        :key="edge.node.id" 
        :to="edge.node.path">
        <post 
          :title="edge.node.title"
          :subtitle="edge.node.subtitle"
          :date="edge.node.date"
          :time-to-read="edge.node.timeToRead"
          :tags="edge.node.tags">
        </post>
      </g-link>
    </section>
  </Layout>
</template>

<page-query>
query {
  allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        date,
        id,
        path,
        subtitle,
        tags,
        timeToRead,
        title
      }
    }
  }
}
</page-query>

<script>

import post from '~/components/post/post.vue'

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
section {
  margin: 0 auto;
  max-width: 50rem;

  a {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
