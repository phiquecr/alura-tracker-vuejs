<template>
  <section class="projetos">
    <form @submit.prevent="save">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";

import useNotificador from "@/hooks/notificador";
import { ALTERAR_PROJETOS, CADASTRAR_PROJETOS } from "@/store/type-actions";

export default defineComponent({
  name: "FormularioItem",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.name || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.store
          .dispatch(ALTERAR_PROJETOS, {
            id: this.id,
            name: this.nomeDoProjeto,
          })
          .then(() => this.toSuccess());
      } else {
        this.store
          .dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
          .then(() => this.toSuccess());
      }
    },
    toSuccess() {
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCCESS,
        "Excelente!",
        "O projeto foi cadastrado com sucesso!"
      );
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
