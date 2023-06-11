<template>

  <img alt="Vue logo" class="logo" src="../assets/fleetControll.png">
  <h1> BEM VINDO!</h1>

<form>
  <div class="mb-3">
    <input type="email" class="form-control" id="Login" placeholder="LOGIN">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="Senha" placeholder="SENHA">
  </div> 
  <div>
    <button type="submit" class="btn">ENTRAR</button>
  </div>  
  <div class="esqueciSenha">
    <a href="#" > ESQUECI MINHA SENHA</a>
  </div>
</form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.logo{
  margin-top: 100px;
  transform: scale(1.2);
}


h1{
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 50px;
  margin-top: 50px;
}

#Senha{
  margin-top: 30px;
  background-color: #1CA290;
  border-color: #1CA290;
  width: 250px;
  height: 45px;
  transition: 1s;
}

#Senha:hover{
  transition: 1s;
  transform: scale(1.1);
}

#Login{
  background-color: #1CA290;
  border-color: #1CA290;
  width: 250px;
  height: 45px;
  align-items: center;
  transition: 1s;
}

#Login:hover{
  transition: 1s;
  transform: scale(1.1);
}

.btn{
  color: #363636;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: white;
  width: 200px;
  height: 40px;
  font-weight: 700;
  border-radius: 1000px;
  transition: 1s;
}

.btn:hover{
  transition: 1s;
  transform: scale(1.1);
}

.esqueciSenha a{
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 1s;
}

.esqueciSenha a:hover{
  transition: 1s;
  color: rgb(160, 160, 160);
}

.form-control{
  display: inline-table;
  border-radius: 1000px;
}

</style>
