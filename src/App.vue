<script setup>
  import { RouterView } from 'vue-router';
  import Nav from './components/Nav.vue';

</script>
<template>
        <Nav></Nav>
        <div class="container">
           <RouterView />
        </div>
</template>

<style>
  html{
      overflow-y: scroll;/*Mantiene el scroll */
  }
</style>
