<template>

  <div class="container" style="margin-top: 10px;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Motoristas </p> </div>
      <div class="col-md-2"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/modelo-usuario-lista">Cadastrar
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
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th scope="col" text-start>Data de Nascimento</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            <tr v-for="item in usuarioList" :key="item.id">
              <th class="col-md-1">{{ item.id }}</th>              
              <th class="col-md-2"> 
                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
              </th>
              <th class="col-md2">{{item.nome}}</th>
              <th class="col-md1">{{item.email}}</th>
              <th class="col-md1">{{item.cpf}}</th>
              <th class="col-md1">{{item.telefone}}</th>
              <th class ="col-md-2">{{item.dataNascimento}}</th>
              <th class="col-md-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'usuario-cadastrar-editar', query: {id: item.id, form: 'editar'}}">
                      <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                    </RouterLink>
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                      :to="{name: 'usuario-cadastrar-excluir', query: {id: item.id, form: 'excluir'}}">
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
import { Usuario } from '@/models/usuario';
import usuarioClient from '@/client/usuarioClient';

export default defineComponent({
  name: 'UsuarioLista',
  data() {
    return {
        usuarioList: new Array<Usuario>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
        usuarioClient.listaAll()
        .then(sucess => {
          this.usuarioList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});

</script>