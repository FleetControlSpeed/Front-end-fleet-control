<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 text-start">
        <p class="fs-3">Cadastrar Multa</p>
      </div>
      <div class="col-md-2"></div>
    </div>
    <hr />

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Valor *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="multa.valor"
        />

        <label class="form-label">Tipo de Multa *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="multa.tipoMulta" placeholder="Tipo de Multa"
        />

      <label>Usuarios</label>
       <select class="form-select" v-model="multa.usuario">
          <option v-for="item in usuariosList" :key="item.id" :value="item">
            {{ item.email }}
          </option>
        </select>

         <label>Data da Multa</label>
         <br>
          <input type="date" v-model="multa.dataMulta">
          

      <div class="row">
        <div class="col-md-3 offset-md-6">
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" to="/lista-multas"
              >Voltar
            </router-link>
          </div>
        </div>
        <div class="col-md-3">
          <div class="d-grid gap-2">
            <button
              v-if="this.form === undefined"
              type="button"
              class="btn btn-success"
              @click="onClickCadastrar()"
            >
              Cadastrar
            </button>
            <button
              v-if="this.form === 'editar'"
              type="button"
              class="btn btn-warning"
              @click="onClickEditar()"
            >
              Editar
            </button>
            <button
              v-if="this.form === 'excluir'"
              type="button"
              class="btn btn-danger"
              @click="onClickExcluir()"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import multaClient from "@/client/multaClient";
import  UsuarioClient from "@/client/usuarioClient";
import { multa } from "@/models/multa";
import { defineComponent } from "vue";

export default defineComponent({
  name: "multaFormulario",
  data() {
    return {
      multa: new multa(),
      usuariosList: [],
      mensagem: { 
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string,
      },
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    },
  },
  mounted() {
    this.usuariosAtivos();
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    onClickCadastrar() {
      multaClient.cadastrar(this.multa)
        .then((sucess) => {
          this.multa = new multa();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      multaClient.findById(id)
        .then((sucess) => {
          this.multa = sucess;
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      multaClient.editar(this.multa.id, this.multa)
        .then((sucess) => {
        this.multa = new multa();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir() {
      multaClient.excluir(this.multa.id)
        .then((sucess) => {
          this.multa = new multa();
          this.$router.push({ name: "lista-multas" });
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
     usuariosAtivos() {
      UsuarioClient.listaAllAtivos()
        .then((sucess) => {
          this.usuariosList = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
</script>