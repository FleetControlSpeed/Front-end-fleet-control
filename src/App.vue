<template>
  <div>
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
  </div>
</template> 

<style lang="scss">
#app {
  background-color: rgba(233, 233, 233, 0.226);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: white;
  height: 100vh;
  width: 100vw;
}
.opcoes-nav{
  color: white;
  margin-top: 27%;
}
.nomeUsuario{
  margin-top: 11%;
}
.nav{
   background-color: #064F51;
   color: white;
}

.logo{
    padding-left: 8vh;
}

.nav-item{
    padding-top: 1.5vh;
    justify-content: center;
    align-items: center;
    padding-left: 8vh;
}

.botao{
    color: white;
    margin-top: 1.5vh;
    background-color: #064F51;
}

.logoUsuario{
    margin-top: 2vh;
    margin-right: 4vh;
    background-color: #096366dc;
    width: 3vw;
    height: 3vh;
    border-radius: 5px;
}

</style>
