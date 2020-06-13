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
.tags {
    .fa {
        font-size: 0.9rem;
    }
    ul {
        display: inline-block;
        font-size: 0.9rem;
        list-style: none;
        margin-bottom: 0;
        margin-left: 0.2rem;
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
}
</style>
