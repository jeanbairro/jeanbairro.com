<template src="./post.html"></template>
<style lang="less" src="./post.less"></style>

<script>
import dateTime from '~/components/post/date-time/date-time.vue'
import tagList from '~/components/post/tag-list/tag-list.vue'

export default {
    props: {
        subtitle: String,
        title: String,
        date: String,
        timeToRead: Number,
        tags: Array
    },
    components: {
        dateTime,
        tagList
    }
}
</script>