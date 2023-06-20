<template>
<div class="flex:none">
<div>
    
    <h1>Lista de Multas</h1>
    <button type="submit" class="btn">
        <h2>Cadastrar Multa</h2>
        <img>
    </button>
    <div class=" table-responsive-lg col-md-8 offset-md-2">
    <table class="table table-striped table-bordered">
        <thead>
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
        width: 20%;
        border-radius: 10px;
    }
    thead{
        background-color: #b5b5c3;
    }
</style>