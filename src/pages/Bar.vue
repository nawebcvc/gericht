<template>
  <header class="header">
    <Navigation />
  </header>
  <main class="main">
    <BookTable />
    <TodaysSpecial />
  </main>
  <footer class="footer">
    <Subscribe />
  </footer>
</template>

<script setup lang="ts">
import Navigation from "@/components/Nav.vue";
import BookTable from "@/components/BookTable.vue";
import Subscribe from "@/components/Subscribe.vue";
import TodaysSpecial from "@/components/TodaysSpecial.vue";

</script>
