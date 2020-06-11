<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">jeanbairro.com</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/sobre">Sobre</g-link>
        <a href="https://github.com/jeancasulo" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jean-bairro" target="_blank">Linkedin</a>
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
.layout {
  font-size: 1.2rem;
  margin: 0 auto;

  .header {
    align-items: center;
    background-color: black;
    display: flex;
    height: 65px;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    padding: 0 5rem;

    a {
      color: #f1f1f1;
      margin-right: 1rem;

      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
