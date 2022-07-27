<template>
  <ToDo @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaVazia"> Nenhuma tarefa adicionada Hoje. </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDo from "../components/ToDo.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "App",
  components: { ToDo, Tarefa, Box },
  data() {
    return {
      tarefas: [] as ITarefa[],
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
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
