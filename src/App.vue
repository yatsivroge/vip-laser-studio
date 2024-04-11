<script setup>
import { RouterView } from 'vue-router'
import TopHeader from "@/components/TopHeader.vue";
import NavHeader from "@/components/NavHeader.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="all-content-wrapper">
    <TopHeader></TopHeader>
    <NavHeader></NavHeader>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped>

.all-content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
