<template>
    <time>{{ formattedDate }} • {{ timeToRead }} min de leitura</time>
</template>

<script>

export default {
    props: {
        date: String,
        timeToRead: Number 
    },
    computed: {
        formattedDate() {
            let date = new Date(this.date);
            return date.toLocaleString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
        }
    }
}
</script>

<style lang="less">
    time {
        color: #757575;
        display: block;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        margin-bottom: 0.6rem;
    }
    .dark {
        time {
            color: #aaa;
        }
    }
</style>
