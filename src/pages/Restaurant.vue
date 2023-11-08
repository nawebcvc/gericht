<template>
  <Navigation />
  <header class="header">
    <Hero id="page_01" />
  </header>
  <main class="main">
    <AboutUs id="page_02" />
    <BookTable id="page_03" />
    <TodaysSpecial />
  </main>
  <footer class="footer">
    <Subscribe />
  </footer>
</template>

<script setup lang="ts">
import Navigation from "@/components/Nav.vue";
import Hero from '@/components/Hero.vue';
import BookTable from "@/components/BookTable.vue";
import Subscribe from "@/components/Subscribe.vue";
import TodaysSpecial from "@/components/TodaysSpecial.vue";
import AboutUs from "@/components/AboutUs.vue";

</script>
