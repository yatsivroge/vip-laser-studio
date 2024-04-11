<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopHeader from "@/components/TopHeader.vue";
import NavHeader from "@/components/NavHeader.vue";
import Footer from "@/components/Footer.vue";
import {ref} from "vue";


type AppLang = 'UA' | 'PL';

const applicationLang = ref<AppLang>('UA');
const onLangChange = (lang: AppLang) => {
  applicationLang.value = lang;
}

</script>

<template>
  <div class="all-content-wrapper">
    <TopHeader
        :lang="applicationLang"
        @lang-change="onLangChange"
    ></TopHeader>
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
