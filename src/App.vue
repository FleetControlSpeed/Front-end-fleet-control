<template>

 
  <div class="container-fluid nav">
    <img alt="Logo"  src="LogoNav.png" class="logo">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="router-link-nav" to="/listaCorridas"><div class="nav-link active" aria-current="page" href="#">Motoristas</div></router-link>
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
            <router-link to="/listaCorridas"><section class="dropdown-item">Historico</section></router-link>
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

<router-view/>

</template> 

<style lang="scss">
.router-link-nav{
  text-decoration: none;
}
#app {
  background-color: rgba(233, 233, 233, 0.226);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color:black;
  height: 100vh;
  width: 100vw;
}

.dropdown{
  color:black
}
.nav{
  background-color:#064F51
}
.container-fluid nav{
  background-color:black

}
.opcoes-nav{
  color: white;
  margin-top: 39%;
}
.nomeUsuario{
  margin-top: 15%;
}
.nav{
   background-color: #064F51;
   color: white;
}

.logo{
    padding-left: 8vh;
    margin-bottom: 0.5%;
}

.nav-item{
    padding-top: 1vh;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    padding-left: 8vh;
}

.botao{
    color: white;
    margin-top: 23%;
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
