<template>
  <Layout>
    <section>
      <post 
          title="Conheça Maicão, o bomber-man brasileiro"
          subtitle="Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores."
          time="20 de maio, 2020"
          :tags="['fisiculturismo', 'bomba', 'cavalo']">
        </post>
        <post 
          title="Conheça Maicão, o bomber-man brasileiro"
          subtitle="Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores."
          time="20 de maio, 2020"
          :tags="['fisiculturismo', 'bomba', 'cavalo']">
        </post>
        <post 
          title="Conheça Maicão, o bomber-man brasileiro"
          subtitle="Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores."
          time="20 de maio, 2020"
          :tags="['fisiculturismo', 'bomba', 'cavalo']">
        </post>
    </section>
  </Layout>
</template>

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

<style>
.home-links a {
  margin-right: 1rem;
}
section {
  max-width: 65rem;
  margin: 0 auto;
}
</style>
