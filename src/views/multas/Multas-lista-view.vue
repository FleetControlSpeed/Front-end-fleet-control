<template>

<div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Multas
                </div>
           
                <div class="col botao-cadastrar">
                    <router-link to='/'>
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

</template>

<script lang="ts">


</script>

<style lang="scss">

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
   
</style>