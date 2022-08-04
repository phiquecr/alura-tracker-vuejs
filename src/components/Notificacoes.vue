<template>
  <div class="notificacoes">
    <article
      class="message"
      :class="context[notificacao.type]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">{{ notificacao.title }}</div>
      <div class="message-body">{{ notificacao.text }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotificacoesItem",
  data() {
    return {
      context: {
        [TipoNotificacao.SUCCESS]: "is-success",
        [TipoNotificacao.WARNING]: "is-warning",
        [TipoNotificacao.DANGER]: "is-danger",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 100;
}
</style>
