<template>

<img alt="Vue logo" class="logo" src="../assets/fleetControll.png">
  <h1> BEM VINDO!</h1>

<form>

  <div class="mb-3">
    <input type="email" class="form-control" id="input" placeholder="LOGIN">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="input" placeholder="SENHA">
  </div> 

  <div>
    <router-link to="/lista-multas">
      <button type="submit" class="btn">
        ENTRAR
      </button>  
    </router-link>
  </div>  

  <div class="esqueciSenha">
    <router-link to="/about" >
       ESQUECI MINHA SENHA
    </router-link>
  </div>

</form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});

</script>

<style scoped lang="scss">
.logo{
  margin-top: 10vh;
  transform: scale(1.2);
}

h1{
  font-weight: 700;
  font-size: 3vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
}

#input{
  margin-top: 3vh;
  background-color: #1CA290;
  border-color: #1CA290;
  width: 32vh;
  height: 5vh;
  transition: 1s;
}

#input:hover{
  transition: 1s;
  transform: scale(1.05);
}

.btn{
  color: #363636;
  margin-top: 4vh;
  margin-bottom: 4vh;
  background-color: #1CA290;
  width: 20vh;
  height: 4.5vh;
  font-weight: 700;
  border-radius: 5px;
  transition: 1s;
}

.btn:hover{
  transition: 1s;
  transform: scale(1.05);
}

.esqueciSenha a{
  text-decoration: none;
  color: white;
  font-size: 2vh;
  transition: 1s;
}

.esqueciSenha a:hover{
  transition: 1s;
  color: rgb(160, 160, 160);
}

.form-control{
  display: inline-table;
  border-radius: 5px;
}

</style>

