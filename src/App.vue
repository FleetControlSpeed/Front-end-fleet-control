<template>
<nav>

  <router-link to="/lista-historico-motorista">Motorista</router-link>|
  <router-link to="/lista-multas">Multas</router-link>|
  <router-link to="/lista-veiculos">Veiculos</router-link>|
  <router-link to="/modelo-lista">Modelo</router-link>
</nav>

<router-view/>

</template>

<style lang="scss">
// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #26A69A;
    }
  }
}
</style>