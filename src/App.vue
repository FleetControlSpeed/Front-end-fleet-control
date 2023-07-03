<template>
 
    <nav class=" navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid nav">
    <img alt="Logo"  src="LogoNav.png" class="logo">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Motoristas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Veiculos</a>
        </li>
      </ul>


      <div class="d-flex">
            <p class="nomeUsuario">Pedro Henrique</p>
           <div class="dropdown">
            <button type="button" class="btn opcoes-nav dropdown-toggle" data-bs-toggle="dropdown">P</button>
            <section class="dropdown-menu">
            <section class="dropdown-item">Perfil</section>
            <section class="dropdown-divider"></section>
            <section class="dropdown-item">Multas</section>
            <section class="dropdown-item">Historico</section>
            <section class="dropdown-divider"></section>
            <section class="dropdown-item">Configurações</section>


            </section>
           </div>
      </div>
      <div>
        <button class="btn botao" type="button">
            Sair
            <img src="LogoSair.png">
        </button>
      </div>
    </div>
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
      color: white;
    }
  }

}
.navbarcentral{
  background-color:#26A69A
}
</style>