<template>

  <div class="container" >

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar Modelo </p> </div>
      <div class="col-md-2"> </div>
    </div>

    <hr/>

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Nome do Modelo *</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="modelo.nome">
        <label>Nome da marca</label> <br>
         <select class="form-control" v-model="modelo.marca">
            <option value="undefined" disabled hidden>Marca</option>
            <option value="FIAT">FIAT</option>
            <option value="CHEVROLET">CHEVROLET</option>
            <option value="VOLKSWAGEN">VOLKSWAGEN</option>
            <option value="HYUNDAI">HYUNDAI</option>
            <option value="RENAULT">RENAULT</option>
            <option value="HONDA">HONDA</option>
            <option value="VOLVO">VOLVO</option>
            <option value="SCANIA">SCANIA</option>
            <option value="MERCEDES">MERCEDES</option>

          </select>      
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/modelo-lista">Voltar
          </router-link>
        </div>
      </div>
      <div class="col-md-3 "> 
        <div class="d-grid gap-2">
          <button v-if="this.form === undefined" type="button" 
              class="btn btn-success" @click="onClickCadastrar()">
            Cadastrar 
          </button>
          <button v-if="this.form === 'editar'" type="button" 
              class="btn btn-warning" @click="onClickEditar()">
            Editar 
          </button>
          <button v-if="this.form === 'excluir'" type="button" 
              class="btn btn-danger" @click="onClickExcluir()">
            Excluir 
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import modeloClient from '@/client/modeloClient';
import { Modelo } from '@/models/modelo';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeloFormulario',
  data() {
    return { 
      modelo: new Modelo(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    }
  },
  mounted() { 

    if(this.id !== undefined){
      this.findById(Number(this.id));
    }


  },
  methods: {

    onClickCadastrar(){
      modeloClient.cadastrar(this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number){
      modeloClient.findById(id)
        .then(sucess => {
          this.modelo = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      modeloClient.editar(this.modelo.id, this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      modeloClient.excluir(this.modelo.id)
        .then(sucess => {
          this.modelo = new Modelo()
          this.$router.push({ name: 'ModeloListaView' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
}
});

</script>