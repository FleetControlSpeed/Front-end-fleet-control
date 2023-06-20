<template>
<div class="flex:none">
    <div class="d-flex fundo-multa">
        <div class=" table-responsive-lg col-md-10 offset-md-1">
            <div class="topo-tabela">
                <h1 class="texto-multa">Lista de Multas</h1>
            <button type="submit" class="btn">
                <h2>Cadastrar Multa</h2>
                <img>
            </button>
        </div>
            <table class="table table-striped table-bordered">
                <thead class="table table-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">ID</th> 
                        <th scope="col">Valor</th> 
                        <th scope="col">Velocidade</th> 
                        <th scope="col">Data da Multa</th> 
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody class="table-striped">
                    <tr>
                        <th scope="row">Cristovão Martins</th>
                        <th scope="row">87364523</th> 
                        <th scope="row">195,23</th> 
                        <th scope="row">Velocidade</th> 
                        <th scope="row">21/12/2022</th> 
                        <th scope="row">
                            <input class="status-multa" type="text" placeholder="PAGO" readonly>
                        </th> 
                    </tr>
                    <tr>
                        <th scope="row">Gabriele Steinmetz</th>
                        <th scope="row">57432231</th> 
                        <th scope="row">195,23</th> 
                        <th scope="row">Velocidade</th> 
                        <th scope="row">31/02/2025</th> 
                        <th scope="row">
                            <input class="status-multa" type="text" placeholder="PAGO" readonly>
                        </th> 
                    </tr>
                    <tr>
                        <th scope="row">Pedro Henrique</th>
                        <th scope="row">88965325</th> 
                        <th scope="row">195,23</th> 
                        <th scope="row">Velocidade</th> 
                        <th scope="row">24/04/2024</th> 
                        <th scope="row">
                            <input class="status-multa" type="text" placeholder="PAGO" readonly>
                        </th> 
                    </tr>
                    <tr>
                        <th scope="row">Ademar Ramalho</th>
                        <th scope="row">80028922</th> 
                        <th scope="row">195,23</th> 
                        <th scope="row">Velocidade</th> 
                        <th scope="row">17/11/2022</th> 
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
</style>