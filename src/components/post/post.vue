<template src="./post.html"></template>
<style lang="less" src="./post.less"></style>

<script>
import tagList from '~/components/post/tag-list/tag-list.vue'

export default {
    props: {
        subtitle: String,
        title: String,
        time: String,
        tags: Array
    },
    components: {
        tagList
    }
}
</script>