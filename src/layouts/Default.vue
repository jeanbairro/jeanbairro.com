<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">jeanbairro.com</g-link>
      </strong>
      <nav class="nav">
        <a href="https://github.com/jeancasulo" target="_blank"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jean-bairro" target="_blank"><i class="fa fa-linkedin"></i></a>
      </nav>
    </header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="less">
@smallAndUp: ~"only screen and (min-width: 576px)";

.layout {
  font-size: 1.2rem;
  margin: 0 auto;

  .header {
    align-items: center;
    background-color: black;
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
        color: #fff;
        text-decoration: none;
      }

      &:last-child {
        margin: 0;
      }
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
