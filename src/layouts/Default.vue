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
body {
  font-family: 'Open Sans', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.header {
  align-items: center;
  background-color: black;
  display: flex;
  height: 65px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 100px;

  a {
    color: #f1f1f1;
    margin-right: 0.8rem;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
