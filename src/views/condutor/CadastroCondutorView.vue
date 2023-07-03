
    
        
        <template>
            <Header />
            
            <div class="container d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="col-md-6">
      <div class="red-box bg-branco rounded p-4">
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="">1 Informações Basicas</a>
          </li>
          <li class="nav-item">
            <router-link to="/condutorcadastro2">
              <a class="nav-link" data-toggle="tab" href="">2 Detalhes Pessoais</a>
            </router-link>
          </li>
        </ul>
        <div class="tab-content">
          <div id="tab1" class="tab-pane fade show active">
            <h2 class="text-start mb-4 fs-12 fw-bolder">Informações Basicas</h2>
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="firstName" class="form-label">Nome</label>
                    <input type="text" class="form-control form-control-sm" id="firstName" placeholder="Digite seu nome">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="gender" class="form-label">Gênero</label>
                    <select class="form-select form-select-sm" id="gender">
                      <option value="">Selecione o gênero</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="lastName" class="form-label">Sobrenome</label>
                    <input type="text" class="form-control form-control-sm" id="lastName" placeholder="Digite seu sobrenome">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="birthDate" class="form-label">Data de Nascimento</label>
                    <input type="date" class="form-control form-control-sm" id="birthDate">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="position" class="form-label">Cargo</label>
                    <select class="form-select form-select-sm" id="position">
                      <option value="">Selecione o cargo</option>
                      <option value="gerente">Gerente</option>
                      <option value="analista">Analista</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control form-control-sm" id="email" placeholder="Digite seu email">
                  </div>
                </div>
              </div>
              <router-link to="/condutorcadastro2">
                <button type="submit" class="btn bg-green">Proximo</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Nav.vue';

export default defineComponent({
    name: 'condutorcadastro',
    components:{
        Header
    }
    
})
</script>
<style>
  body {
    background-color: #f2f2f2; /* Cinza claro */

  }
  .bg-branco{
    background-color: rgb(219, 214, 214);
  }
  .bg-green{
    background-color: #064f51;
    color:aliceblue
}
</style>