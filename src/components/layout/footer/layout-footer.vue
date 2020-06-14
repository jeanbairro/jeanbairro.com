<template src="./layout-footer.html"></template>
<style lang="less" src="./layout-footer.less"></style>

<script>
export default {
    methods: {
      changeMode() {
        this.$emit('changeModePressed');
      },
      scrollToTop() {
        this.$emit('scrollToTopPressed');
      } 
    }
}
</script>