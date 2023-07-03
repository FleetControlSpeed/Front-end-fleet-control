<template>
  <Header /> 



  <div class=" shadow p-3 mb-5 d-flex gap-2  ">
  <button class="btn bg-cor fw-bolder " type="button">Motoristas</button>
  <button class="btn btn-outline-dark fw-bolder" type="button">Admnistracao</button>
  <button class="btn btn-outline-dark fw-bolder" type="button">Contas</button>
</div>
  
  <div class="row d-flex align-items-center w-100">
            <div class="col">
                <h3 class=" d-flex offset-3 fw-bold mt-3">Lista de motoristas</h3>
                <h5 class=" d-flex offset-3 opacity-50">12 motoristas disponiveis </h5>
            </div>
            <div class="col">
              <router-link to="/condutorcadastro">
                <button type="button" class="btn bg-cor-cadastro text-branco fw-bold fs-font"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg> Cadastrar motorista</button>
  </router-link>
            </div>
        </div>



  
 
  









  <div  class="container  mt-2">
  <table class="table  table-hover">
  <thead>
    <tr class="table-active text-center">
      <th scope="col col-sucess">Nome</th>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Celular</th>
      <th scope="col">Data de cadastro</th>
      <td colspan="2"> Status</td>
     <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Matheus</th>
      <td> 12736812</td>
      <td>elmargematheus@gmail.com</td>
      <td>1231231</td>
      <td>22/22/22</td>
      <td colspan="2"><button type="button" class="btn btn-outline-danger" disabled>Inativo</button>
     
    <!-- botao seta-->
    <button type="button" class="btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></button>






      </td>
    </tr>
    <tr>
      <th scope="row">Pedro</th>
      <td>123123 </td>
      <td>pedro@gmail.com</td>
      <td>1231231</td>
      <td>11/11/11</td>
      <td colspan="2"><button type="button" class="btn btn-outline-danger" disabled>Inativo</button>
     
     
     <!-- botao seta-->
     <button type="button" class="btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
 </svg></button>
     </td>
    </tr>

    <tr>
      <th scope="row">Lucas</th>
      <td>1123123 </td>
      <td>lcas@gmail.com</td>
      <td>123123</td>
      <td>33/33/33</td>
      <td colspan="2"><button type="button" class="btn btn-success fw-bold" disabled>Ativo</button>
     
     <!-- botao seta-->
     <button type="button" class="btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
 </svg></button>
 </td>
      
    </tr>


    
  </tbody>
  </table>
</div>







</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Nav.vue';

export default defineComponent({
    name: 'Listagem',
    components:{
        Header
    }
    
})
</script>

<style lang="scss" scoped>
body{
  margin:0;
  padding: 0;
}
.bg-cor{
  background-color: #74C2E3;
  opacity: 60%;
}
.bg-cor-cadastro{
  background-color: #064f51
}
.text-branco{
  color: antiquewhite;
}
.fs-size{
  font-size: x-small;
}
</style>