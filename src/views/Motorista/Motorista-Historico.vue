<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3 texto-list"> Lista de Viagens </p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/veiculo-cadastrar">Voltar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table">
            <thead class="table-secondary" >
              <tr>
                <th scope="col"> ID </th>
                <th scope="col"> Nome </th>
                <th scope="col"> Hora Inicio </th>
                <th scope="col"> Data Inicio </th>
                <th scope="col"> Data Fim </th>
                <th scope="col"> Detalhes </th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              <tr v-for="item in historicoList" :key="item.id">
                <th class="col-md-1">{{ item.id }}</th>              
                <th class="col-md-2"> {{ item.nome }} </th>
                <th class="col-md2">{{item.hora}}</th>
                <th class="col-md1">{{item.data}}</th>
                <th class="col-md1">{{item.dataFim}}</th>
                <th class="col-md-2">
                </th>
              </tr>
  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  </script>

  <style lang="scss">
  .texto-list{
    color:black;
  }

  </style>