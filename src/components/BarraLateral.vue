<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Alura" />
    </h1>
    <div class="position-left">
      <Navegacao />
    </div>
    <div class="position-bottom">
      <button class="button" @click="alterarTema">
        {{ textButton }}
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navegacao from "./Navegacao.vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["temaAlterado"],
  data() {
    return {
      darkModeAtivo: false,
    };
  },
  computed: {
    textButton() {
      if (this.darkModeAtivo) {
        return "Light mode";
      }
      return "Dark mode";
    },
  },
  methods: {
    alterarTema() {
      this.darkModeAtivo = !this.darkModeAtivo;
      this.$emit("temaAlterado", this.darkModeAtivo);
    },
  },
  components: { Navegacao },
});
</script>

<style>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background: #0d3b66;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.position-left {
  display: flex;
  justify-content: left;
  width: 100%;
}

.position-bottom {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

img {
  width: 10rem;
}
</style>
