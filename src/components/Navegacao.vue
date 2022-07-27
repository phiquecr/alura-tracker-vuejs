<template>
  <nav class="panel mt-5">
    <ul>
      <li>
        <router-link to="/" class="link">
          <i class="fas fa-tasks">Tarefas</i>
        </router-link>
      </li>
      <li>
        <router-link to="/projetos" class="link">
          <i class="fas fa-project-diagram">Projetos</i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavegacaoItem",
});
</script>

<style scoped>
nav {
  width: 100%;
}
.panel li {
  margin: 2rem 0;
}

i {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  margin: 1rem;
}

.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
