<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3 texto-list"> Lista de Motoristas </p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/">Voltar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table table-bordered">
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
            <tbody class="table-group-divider text-table">
              <tr>
                <th class="col-md-1"> 1</th>              
                <th class="col-md-2"> Mopa </th>
                <th class="col-md2"> 12:12:12 </th>
                <th class="col-md1"> 13/13/13</th>
                <th class="col-md1">14/14/14</th>
                <th class="col-md-2"> V </th>
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
  .text-table{
    color: black;
  }

  </style>