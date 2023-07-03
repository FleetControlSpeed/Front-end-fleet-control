<template>

<nav class=" navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid nav">
    <img alt="Logo"  src="LogoNav.png" class="logo">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Motoristas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Veiculos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Configurações</a>
        </li>
      </ul>


      <div class="d-flex">
            <p class="nomeUsuario">Pedro Henrique</p>
           <div class="logoUsuario">
            P
           </div>
      </div>
      <div>
        <button class="btn botao" type="button">
            Sair
            <img src="LogoSair.png">
        </button>
      </div>
    </div>
</nav>

<div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Multas
                </div>
           
                <div class="col botao-cadastrar">
                    <router-link to='/marca/cadastrar'>
                        <button type="button" class="btn btn-success botao-texto"><img src="/logoCadastrar.png">Adicionar Multa</button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="row inicio">
            <div class="col"> Id </div>
            <div class="col"> Nome</div>
            <div class="col"> Status </div>
            <div class="col"> Valor </div>
            <div class="col"> Velocidade </div>
            <div class="col"> Data da Multa </div>
            <div class="col"> Detalhes </div>
        </div>
</div>

    <div class="col botao-voltar">
        <router-link to='/marca/cadastrar'>
            <button type="button" class="btn btn-success botao-texto">Voltar</button>
        </router-link>
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

.nav{
   background-color: #064F51;
   color: white;
}

.logo{
    padding-left: 8vh;
}

.nav-item{
    padding-top: 1.5vh;
    justify-content: center;
    align-items: center;
    padding-left: 8vh;
}

.botao{
    color: white;
    margin-top: 1.5vh;
    background-color: #064F51;
}

.logoUsuario{
    margin-top: 2vh;
    margin-right: 4vh;
    background-color: #096366dc;
    width: 3vw;
    height: 3vh;
    border-radius: 5px;
}

.nomeUsuario{
    margin-top: 2vh;
    margin-right: 1.5vh;
    border-radius: 5px;
}



.tabela{
        margin-top: 2vw;
        background-color: WHITE;
        height: 75vh;
        border-radius: 6px;
    
    }
    
    .inicio{
        background-color: rgba(128, 128, 128, 0.144);
        color: grey;
        text-align: center;
        align-items: center;
        font-size: 10px;
        font-weight: bolder;
        border-radius: 5px;
        margin: 2vh;
        height: 5vh;
      
    }

    .inativo{
            color: red;
            font-weight: bolder;
            background-color: rgba(255, 0, 0, 0.349);
            border-radius: 5px;
        }
    
        .ativo{
            color: green;
            font-weight: bolder;
            background-color: rgba(0, 128, 0, 0.349);
            border-radius: 5px;
        }
    
    .itens{
        background-color: white;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        margin: 2vh;
        transition: 2s;
        height: 5vh;
        
    }
    
    .col{
        font-size: 15px;
        font-weight: 100;
        
    }

    .page-link{
        width: 2vw;
        color: black;
    }
    
    .pagination{
        margin-top: 5vw;
        justify-content: center;
    }
    
    .opcoes{
        color: black;
        align-items: left;
        text-align: left;
        border-radius: 5px;
        margin-top: 2vw;

        font-size: 2vh;
        font-weight: bolder;
    }
    
    .botao-cadastrar{
        height: 2.5vh;
        margin-top: 1.5vw;
        text-align: right;
    }

    .botao-texto{
    color: white;
    background-color: #064F51;
}

.botao-voltar{
    color: white;
    text-align: left;
    margin-left: 35vh;
    margin-top: 1.5vh;
  
}
   
</style>