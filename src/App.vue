<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkModeAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter content">
      <ToDo @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaVazia"> Nenhuma tarefa adicionada Hoje. </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import ToDo from "./components/ToDo.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  components: { BarraLateral, ToDo, Tarefa, Box },
  data() {
    return {
      tarefas: [] as ITarefa[],
      darkModeAtivo: false,
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(darkModeAtivo: boolean) {
      this.darkModeAtivo = darkModeAtivo;
    },
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.dark-mode {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.content {
  background-color: var(--bg-primario);
}
</style>
