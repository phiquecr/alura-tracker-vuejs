<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <Botao
      @clicado="iniciar"
      icone="fas fa-play"
      texto="play"
      :disabled="disable"
    />
    <Botao
      @clicado="finalizar"
      icone="fas fa-stop"
      texto="stop"
      :disabled="!disable"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
  name: "TemporizadorItem",
  emits: ["tempoFinalizado"],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      disable: false,
    };
  },
  methods: {
    iniciar() {
      this.disable = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.disable = false;
      clearInterval(this.cronometro);
      this.$emit("tempoFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
  components: { Cronometro, Botao },
});
</script>
