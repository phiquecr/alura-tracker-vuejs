<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Alura" />
    </h1>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'BarraLateral',
  })
</script>

<style>
  header {
    display: flex;
    justify-content: center;
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

  img {
    width: 10rem;
  }
</style>