<template>
  <nav class="bg-green nav-size">
    <div class="d-flex justify-content-evenly h-100 d-inline-block">
      <div class="h-100 d-inline-block nav-sts d-flex align-items-end">
        <ul class="nav nav-tabs">
            <img src="">
          <img alt="Vue logo" class="logo me-4 d-flex" src="../assets/fleetControll.png">
          <li class="nav-item mt-5">
            <a class="nav-link fw-bolder text-color" aria-current="page" href="/usuario-lista">Usuario</a>
          </li>
          <li class="nav-item mt-5 ">
            <a class="nav-link fw-bolder text-color" href="/lista-veiculos">Veiculo</a>
          </li>
          <li class="nav-item mt-5">
            <a class="nav-link fw-bolder text-color" href="/modelo-lista">Modelo</a>
          </li>
           <li class="nav-item mt-5">
            <a class="nav-link fw-bolder text-color" href="/lista-multas">Multas</a>
            
          </li>
        </ul>
      </div>

      <!-- <nav class="navbarcentral">
  <h1>Fleet Control</h1>
  <router-link to="/lista-multas">Multas</router-link>|
  <router-link to="/lista-veiculos">Veiculos</router-link>|
  <router-link to="/modelo-lista">Modelo</router-link>|
  <router-link to="/usuario-lista">Usuario</router-link>
</nav> -->



      <div class="w-25"></div>

      <div class="d-flex align-items-center">
        <div class="d-flex flex-column">
          <h8 class="text-color ">ADMIN</h8>
          <h5 class="cor-adm">admin</h5>
        </div>
        <router-link to="/">
        <button type="button" class="btn btn-danger ms-5  text-color fw-bold fs-font">
          Sair
        </button>
      </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
#nav {
  // background-color: #064F51;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
}
.cor-adm{
  color: white;
}
.logo{
  margin-top: 10%;
}
#config-button {
  background-color: #ff0000;
}
#veiculo-button {
  background-color: aqua;
}
#motoristas-button {
  background-color: black;
}
.logo {
  height: 6vh;
  display: flex;
  justify-content: flex-start;
}
.nav-text {
  display: flex;
  align-items: flex-end;
}

a {
  text-decoration: none;
  transition: 1ms;
}
.nav-sts{
  margin-top: 1%;
  display: flex;
}

a :active{
    color:red;
}
.bg-green {
  background-color: #064f51;
}
.navbar-nav .nav-item.active {
  background-color: #ff0000; /* Defina a cor desejada */
}
.text-color {
  color: aliceblue;
}
.nav-size {
  height: 10vh;
}
</style>