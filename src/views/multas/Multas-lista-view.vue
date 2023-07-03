<template>

  <div class="container" style="margin-top: 10px;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Multas </p> </div>
      <div class="col-md-2"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/multa-modelo-lista">Cadastrar
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
              <th scope="col">Paga</th>
              <th scope="col">Valor</th>
              <th scope="col">Tipo</th>
              <th scope="col">Data da Multa</th>
              <th scope="col" text-start>Usuario</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            <tr v-for="item in multasList" :key="item.id">
              <th class="col-md-1">{{ item.id }}</th>              
              <th class="col-md-2"> 
                <span v-if="item.ativo" class="badge text-bg-danger"> Nao Paga </span>
                <span v-if="!item.ativo" class="badge text-bg-success"> Paga </span>
              </th>
              <th class="col-md2">{{item.valor}}</th>
              <th class="col-md1">{{item.tipoMulta}}</th>
                <th class="col-md1">{{item.dataMulta}}</th>
              <th class="col-md1">{{item.usuario.email}}</th>
              <th class="col-md-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'multa-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                      <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                    </RouterLink>
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'multa-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
                      <span class="badge bg-success btn text-align-center col">PAGAR</span>
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
import { multa } from '@/models/multa';
import multaClient from '@/client/multaClient';

export default defineComponent({
  name: 'VeiculoLista',
  data() {
    return {
        multasList: new Array<multa>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      multaClient.listaAll()
        .then(sucess => {
          this.multasList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});

</script>