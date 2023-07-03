<template>
    <Header/>
    <div class="container d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="col-md-6">
      <div class="red-box bg-branco rounded p-4">
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <router-link to="/condutorcadastro">
                <a class="nav-link " data-toggle="tab" href="">1 Informações Basicas</a>
            </router-link>
            </li>
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="">2 Detalhes Pessoais</a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="tab1" class="tab-pane fade show active">
            <h2 class="text-start mb-4 fs-11 fw-bolder"> Detalhes Pessoais</h2>
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="firstName" class="form-label fw-bold text">CPF</label>
                    <input type="text" class="form-control form-control-sm" id="firstName" placeholder="CPF">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="gender" class="form-label fw-bold">RG</label>
                    <input type="text" class="form-control form-control-sm" id="firstName" placeholder="RG">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="lastName" class="form-label">CNH</label>
                    <input type="text" class="form-control form-control-sm fw-bold" id="lastName" placeholder="CNH">
                  </div>
                </div>
                
              </div>
              
              <div>
                <router-link to="/condutorcadastro">
                    <button type="submit" class="btn bg-green fw-bold d-flex">Voltar</button>
                </router-link>
            </div>
            <div>
                <router-link to="/listagem">
                <button type="submit" class="btn btn-primary ">Enviar</button>
            </router-link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Nav.vue';
export default defineComponent({
    name: 'cadastrarcondutor2',
    components:{
        Header
    }
})
</script>
<style lang="scss" scoped>
.bg-green{
    background-color: #064f51;
    color:aliceblue
}
</style>