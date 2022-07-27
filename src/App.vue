<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkModeAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarters content">
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: { BarraLateral },
  data() {
    return {
      darkModeAtivo: false,
    };
  },
  methods: {
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
