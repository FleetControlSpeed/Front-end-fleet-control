<template>
  <div class="container" style="background: ">
    <div class="row">
      <div class="col-md-10 text-start">
        <p class="fs-3">Cadastrar Veiculo</p>
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
        <label class="form-label">Placa *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="veiculo.placa"
        />

        <label class="form-label">Modelo *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="veiculo.modelo"
        />

         <label>Tipo</label>
          <select class="form-control" v-model="veiculo.Modelo.Marca">
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
      <div class="col-md-6 text-start">
        <label class="form-label">Ano *</label>
        <input
          type="text"
          :disabled="this.form === 'excluir' ? '' : disabled"
          class="form-control"
          v-model="veiculo.ano"
        />
      </div>

      <div class="row">
        <div class="col-md-6">
          <label>Tipo</label>
          <select class="form-control" v-model="veiculo.tipo">
            <option value="undefined" disabled hidden>Tipo</option>
            <option value="CARRO">CARRO</option>
            <option value="VAN">VAN</option>
            <option value="MOTO">MOTO</option>
          </select>
        </div>

        <div class="col-md-6">
          <label>Cor</label>
          <select class="form-control" v-model="veiculo.cor">
            <option value="" disabled hidden>Cor</option>
            <option value="AMARELO">AMARELO</option>
            <option value="AZUL">AZUL</option>
            <option value="BEGE">BEGE</option>
            <option value="BRANCO">BRANCO</option>
            <option value="CINZA">CINZA</option>
            <option value="DOURADA">DOURADA</option>
            <option value="GRENÁ">GRENÁ</option>
            <option value="LARANJA">LARANJA</option>
            <option value="MARROM">MARROM</option>
            <option value="PRATA">PRATA</option>
            <option value="PRETO">PRETO</option>
            <option value="ROSA">ROSA</option>
            <option value="ROXA">ROXA</option>
            <option value="VERDE">VERDE</option>
            <option value="VERMELHA">VERMELHA</option>
            <option value="FANTASIA">FANTASIA</option>
          </select>
        </div>
      </div>
      <p><br /></p>

      <div class="row">
        <div class="col-md-3 offset-md-6">
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" to="/veiculo-lista"
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
import modeloClient from "@/client/modeloClient";
import VeiculoClient from "@/client/VeiculoClient";
import { Veiculo } from "@/models/veiculo";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VeiculoFormulario",
  data() {
    return {
      veiculo: new Veiculo(),
      veiculosList: [],
      marcasList: [],
      modelosList: [],
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
    this.modeloListAll();
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    onClickCadastrar() {
      debugger;
      VeiculoClient.cadastrar(this.veiculo)
        .then((sucess) => {
          this.veiculo = new Veiculo();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      VeiculoClient.findById(id)
        .then((sucess) => {
          this.veiculo = sucess;
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      VeiculoClient.editar(this.veiculo.id, this.veiculo)
        .then((sucess) => {
          this.veiculo = new Veiculo();
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir() {
      VeiculoClient.excluir(this.veiculo.id)
        .then((sucess) => {
          this.veiculo = new Veiculo();
          this.$router.push({ name: "VeiculoListView" });
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    modeloListAll() {
      modeloClient.listaAll()
        .then((sucess) => {
          this.modelosList = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>