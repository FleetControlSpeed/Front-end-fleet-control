<template>

  <div class="container" style="margin-top: 10px;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Modelos </p> </div>
      <div class="col-md-2"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/modelo-modelo-lista">Cadastrar
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">  
        <table class="table table-striped table-bordered">
          <thead class="table table-green" >
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ativo</th>
              <th scope="col">Modelo</th>
              <th scope="col" class="text-start">Marca</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            
            <tr v-for="item in modelosList" :key="item.id">
              <th class="col-md-1">{{ item.id }}</th>              
              <th class="col-md-2"> 
                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
              </th>
              <th class ="col-md-2">{{item.nome}}</th>
              <th class="text-start">{{ item.marca }}</th>
              <th class="col-md-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'modelo-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                      <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                    </RouterLink>
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'modelo-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
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

<script lang="ts">

import modeloClient from '@/client/modeloClient';
import { Modelo } from '@/models/modelo';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeloLista',
  data() {
    return {
        modelosList: new Array<Modelo>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      modeloClient.listaAll()
        .then(sucess => {
          this.modelosList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});

</script>