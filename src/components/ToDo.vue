<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @tempoFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { key } from "@/store";
import { NOTIFICAR } from "@/store/type-mutations";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "ToDo",
  emits: ["aoSalvarTarefa"],
  components: {
    Temporizador,
  },
  data() {
    return {
      descricao: "",
      idProjeto: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
      });
      this.descricao = "";
      const projeto = this.projetos.find((proj) => proj.id == this.idProjeto);
      if (!projeto) {
        this.store.commit(NOTIFICAR, {
          title: "Ops!",
          text: "Selecione um projeto antes de finalizar a tarefa!",
          type: TipoNotificacao.WARNING,
        });
        return;
      }
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>

<style scoped>
.form {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
