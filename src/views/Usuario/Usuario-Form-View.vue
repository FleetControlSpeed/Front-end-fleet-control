<template>
  <div class="container" >
    <div class="row">
      <div class="col-md-10 text-start">
        <p class="fs-3">Cadastrar Usuario</p>
      </div>
      <div class="col-md-2"></div>
    </div>

    <hr />

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{mensagem.mensagem}}
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
        <label class="form-label">Email *</label>
        <input
          type="email"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.email"
        />

        <label class="form-label">Cargo *</label>
       <select class="form-select" v-model="usuario.cargo">
          <option value="MOTORISTA">Motorista</option>
           <option value="ADMIN">Admin</option>
        </select>

      </div>
      <div class="col-md-6 text-start">
        <label class="form-label">Usuario *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.usuario"
        />
      </div>

      <div class="col-md-6 text-start">
        <label class="form-label">Senha *</label>
        <input
          type="password"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.senha"
        />
      </div>

       <div class="col-md-6 text-start">
        <label class="form-label">Nome *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.nome"
        />
      </div>

<div class="col-md-6 text-start">
        <label class="form-label">Telefone *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.telefone"
        />
      </div>

      <div class="col-md-6 text-start">
        <label class="form-label">CPF *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.cpf"
        />
      </div>

      <div class="col-md-6 text-start">
        <label class="form-label">Endereço *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.endereco"
        />
      </div>

      <div class="col-md-6 text-start">
        <label class="form-label">Data de Nascimento *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="usuario.dataNascimento"
        />
      </div>
      <br><br><p></p>
       

      <div class="row">
        <div class="col-md-3 offset-md-6">
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" to="/usuario-lista"
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
</template>

<script lang="ts">
import usuarioClient from "@/client/usuarioClient";
import { Usuario } from "@/models/usuario";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsuarioForm",
  data() {
    return {
      usuario: new Usuario(),
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
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    onClickCadastrar() {
      usuarioClient.cadastrar(this.usuario)
        .then((sucess) => {
          this.usuario = new Usuario();
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
      usuarioClient.findById(id)
        .then((sucess) => {
          this.usuario = sucess;
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      usuarioClient.editar(this.usuario.id,this.usuario)
        .then((sucess) => {
          this.usuario = new Usuario();
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
      usuarioClient.excluir(this.usuario.id)
        .then((sucess) => {
          this.usuario = new Usuario();
          this.$router.push({ name: "usuarioForm" });
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
  },
});
</script>