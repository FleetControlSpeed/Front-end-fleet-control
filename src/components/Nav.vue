<template>
  <nav class="bg-green nav-size">
    <div class="d-flex justify-content-evenly h-100 d-inline-block">
      <div class="h-100 d-inline-block d-flex align-items-end">
        <ul class="nav nav-tabs">
      
          <img alt="Vue logo" class="logo me-4" src="../img/icons8-mapa-641.png">
          <li class="nav-item mt-4">
            <a class="nav-link active fw-bolder " aria-current="page" href="#">Motoristas</a>
          </li>
          <li class="nav-item mt-4 ">
            <a class="nav-link fw-bolder text-color" href="#">Veiculo</a>
          </li>
          <li class="nav-item mt-4">
            <a class="nav-link fw-bolder text-color" href="#">Ajustes</a>
          </li>
        </ul>
      </div>

      <div class="w-25"></div>

      <div class="d-flex align-items-center">
        <div class="d-flex flex-column">
          <h8 class="text-color ">Matheus EL Marge</h8>
          <h5>admin</h5>
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
