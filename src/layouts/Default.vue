<template>
  <div class="layout" :class="{ dark: isDarkMode }"> 
    <layout-header/>
    <transition name="fade" appear>
      <div class="container">
        <slot/>
      </div>
    </transition>
    <layout-footer @changeModePressed="changeMode" @scrollToTopPressed="scrollToTop"/>
  </div>
</template>

<static-query>

query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import layoutFooter from '~/components/layout/footer/layout-footer.vue'
  import layoutHeader from '~/components/layout/header/layout-header.vue'

  export default {
    components: {
      layoutFooter,
      layoutHeader
    },
    data: function () {
      return {
        isDarkMode: false
      }
    },
    methods: {
      changeMode() {
        this.isDarkMode = !this.isDarkMode; 
        localStorage.isDarkMode = this.isDarkMode;
      },
      scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' })
      } 
    },
    mounted() {
      if (localStorage.isDarkMode && localStorage.isDarkMode === 'true') {
        this.isDarkMode = localStorage.isDarkMode;
      }
    }
  }
</script>

<style lang="less">

.layout {
  color: #141d26;
  font-size: 1.2rem;
  margin: 0 auto;
  padding-bottom: 2.5rem;
  transition: color 0.5s ease 0s;

  .fade-enter-active {
    transition: opacity .3s;
  }

  .fade-enter {
    opacity: 0;
  }
  
  &.dark {
    background-color: #141d26;
  }
}
</style>
