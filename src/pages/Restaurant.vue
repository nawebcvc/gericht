<template>
  <Navigation />
  <header class="header">
    <Hero id="page_01" />
  </header>
  <main class="main">
    <Decoration />
    <AboutUs id="page_02" />
    <BookTable id="page_03" />
    <Menu id="page_04" />
    <TodaysSpecial id="page_05" />
    <Chef id="page_06" />
  </main>
  <footer class="footer">
    <Subscribe />
  </footer>
</template>

<script setup lang="ts">
import Navigation from "@/components/Nav.vue";
import Hero from '@/components/Hero.vue';
import BookTable from "@/components/BookTable.vue";
import Menu from "@/components/Menu.vue";
import Subscribe from "@/components/Subscribe.vue";
import TodaysSpecial from "@/components/TodaysSpecial.vue";
import Chef from '@/components/Chef.vue';
import AboutUs from "@/components/AboutUs.vue";
import Decoration from "@/components/Decoration.vue";

</script>
