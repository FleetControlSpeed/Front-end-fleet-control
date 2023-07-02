<template>
<div class="flex:none">
    <div class="d-flex fundo-multa">
        <div class=" table-responsive-lg col-md-10 offset-md-1">
            <div class="topo-tabela">
                <h1 class="texto-pre-nav col-md-10 align-center">Lista de Multas</h1>
                <button type="submit" class="btn">
                <h2>Cadastrar Multa</h2>
                <img>
            </button>
        </div>
            <table class="table table-striped table-bordered">
                <thead class="table table-green">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">ID</th> 
                        <th scope="col">Valor</th> 
                        <th scope="col">Velocidade</th> 
                        <th scope="col">Data da Multa</th> 
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody class="table">
                    <tr v-for="item in multasList" :key="item.id">
                        <th scope="row">{{item.usuario}}</th>
                        <th scope="row">{{item.id}}</th> 
                        <th scope="row">{{item.valor}}</th> 
                        <th scope="row">{{item.tipoMulta}}</th> 
                        <th scope="row">{{item.dataMulta}}</th> 
                        <th scope="row">
                            <input class="status-multa" type="text" placeholder="PAGO" readonly>
                        </th> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {multa} from '@/models/multa'
import multaClient  from '@/client/multaClient';

export default defineComponent({
  name: 'VeiculoLista',
  data() {
    return {
        multasList: new Array<multa>(),

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

<style lang="scss">
    input::placeholder{
        color: #5F8D4E;
        text-align: center;
    }
    .status-multa{
        background-color: #F4FFF3;
        border: none;
        width: 25%;
    }
    .texto-multa{
        font-size: 1em;
        color: black;
    }
    .topo-tabela{
        display: flex;
        align-items: flex-end;
        align-items: center;
    }
    h2{
        font-size: 0.7em;
        color: #ffffff;
        margin-top: 7%;
    }
    .btn{
        display: flex;
        background-color: #064f51;
        margin-left: 85.3%;
        border-radius: 13px;
    }
    .fundo-multa{
        background-color: #ffffff;
        width: 100%;
    }
    .btn:hover{
        background-color: #064f70;
    }
    .texto-pre-nav{
        font-family: Poppins;
        font-size: 36px;
        color:black;
    }
   
   
</style>