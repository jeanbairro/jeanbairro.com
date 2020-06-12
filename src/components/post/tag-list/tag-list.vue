<template>
    <div v-if="tags.length > 0" class="tags">
        <i class="fa fa-tags"></i>
        <ul>
            <li v-for="tag in tags" :key="tag">
                {{ tag }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        tags: Array 
    }
}
</script>

<style lang="less">
    ul {
        display: inline-block;
        font-size: 1rem;
        list-style: none;
        margin-left: 0.4rem;
        padding: 0;

        li {
            display: inline-block;

            &::before {
                content: ","
            }

            &:first-child {
                &::before {
                    content: "";
                }
            }
        }
    }
</style>
