<template>
  <div class="layout" :class="{ dark: isDarkMode }"> 
    <header class="header">
      <strong>
        <g-link to="/">jeanbairro.com</g-link>
      </strong>
      <nav class="nav">
        <a href="https://github.com/jeancasulo" target="_blank"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jean-bairro" target="_blank"><i class="fa fa-linkedin"></i></a>
      </nav>
    </header>
    <transition name="fade" appear>
      <div class="container">
        <slot/>
      </div>
    </transition>
    <footer class="footer">
      <div>
        <svg @click="changeMode()" class="bi bi-brightness-high-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="4"/>
          <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
        <svg @click="scrollToTop()" class="bi bi-arrow-up-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
        </svg>
      </div>
    </footer>
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

  export default {
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
@smallAndUp: ~"only screen and (min-width: 576px)";

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

  .header {
    align-items: center;
    background-color: #141d26;
    display: flex;
    height: 50px;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    padding: 0 1.2rem;

    a {
      color: #f1f1f1;;
      margin-right: 1rem;

      .fa {
        font-size: 1.4rem
      }

      &:hover {
        color: white;
        text-decoration: none;
      }

      &:last-child {
        margin: 0;
      }
    }
  }

  .footer {
    align-items: center;
    background-color: white;
    box-shadow: 2px 3px 4px black;
    bottom: 0;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    position: fixed;
    width: 100%;

    div {
      line-height: 1;

      svg {
        cursor: pointer;
        height: 1.4rem;
        margin-right: 1rem;
        transition: color 0.5s ease 0s;
        width: 1.4rem;

        &:hover {
          color: #1fa1f2;
        }
      }
    }
  }

  &.dark {
    background-color: #141d26;

    .header {
        box-shadow: 1px 1px #444;
    }

    .footer {
      background-color: #141d26;
      color: white;
      box-shadow: -1px -1px #444;
    }
  }
}

@media @smallAndUp {
  .layout {
    .header {
      height: 65px;
      padding: 0 10rem;
    }
  }
}
</style>
