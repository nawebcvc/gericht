<template>
    <section class="hero">
        <div class="container">
            <div class="hero__body wrapper">
                <div class="hero__left">
                    <h5 class="title__info spoon">Chase the new Flavour</h5>
                    <h1 class="title"><span>The key to</span> Fine dining</h1>
                    <div class="desc">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
                        facilisis
                        quam scelerisque sapien. Et, penatibus aliquam amet tellus </div>
                    <a href="#" class="btn">Explore Menu</a>
                </div>
                <img src="@/assets/imgs/hero.png" alt="" class="hero__right img100">
            </div>
            <PanelLinks />
        </div>
    </section>
</template>


<script setup lang="ts">
import PanelLinks from "@/components/PanelLinks.vue";


</script>