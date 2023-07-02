<template>

  <div class="container" style="margin-top: 10px;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Veiculos </p> </div>
      <div class="col-md-2"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/veiculo-cadastrar">Cadastrar
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">  
        <table class="table">
          <thead class="table-secondary" >
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ativo</th>
              <th scope="col">Placa</th>
              <th scope="col">Cor</th>
              <th scope="col">Tipo</th>
              <th scope="col">Ano</th>
              <th scope="col" text-start>Modelo</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            <tr v-for="item in veiculosList" :key="item.id">
              <th class="col-md-1">{{ item.id }}</th>              
              <th class="col-md-2"> 
                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
              </th>
              <th class="col-md2">{{item.placa}}</th>
              <th class="col-md1">{{item.cor}}</th>
              <th class="col-md1">{{item.tipo}}</th>
              <th class="col-md1">{{item.ano}}</th>
              <th class ="col-md-2">{{item.modelo.nome}}</th>
              <th class="col-md-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'veiculo-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                      <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                    </RouterLink>
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'veiculo-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
                      <span class="badge bg-danger btn text-align-center col">EXCLUIR</span>
                    </RouterLink>
                </div>
              </th>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
    .fs-3{
        color:black
    }
</style>

<script lang="ts">

import { defineComponent } from 'vue';
import VeiculoClient  from '@/client/VeiculoClient';
import { Veiculo } from '@/models/veiculo';

export default defineComponent({
  name: 'VeiculoLista',
  data() {
    return {
        veiculosList: new Array<Veiculo>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      VeiculoClient.listaAll()
        .then(sucess => {
          this.veiculosList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});

</script>