<template>
    <section class="hero">
        <div class="container">
            <div class="hero__body wrapper">
                <div class="hero__left">
                    <h5 class="title__info spoon">Chase the new Flavour</h5>
                    <h1 class="title"><span>The key to</span> Fine dining</h1>
                    <p class="desc">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
                        facilisis
                        quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <a href="#" class="btn">Explore Menu</a>
                </div>
                <div class="hero__right borders">
                    <ul id="carousel" class="horizontal hdnScrlbrs">
                        <li v-for="(imgItem, i) in heroSecImgs" :key="i" class="imgLi">
                            <img :src="imgItem" alt="" :class="`img${i} hero__img img100`">
                        </li>
                    </ul>
                </div>
            </div>
            <PanelLinks />
        </div>
    </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import makeCarousel from '@/utils/makeCarousel';
import PanelLinks from "@/components/PanelLinks.vue";
import heroImg1 from "@/assets/imgs/9f007a65100f49fab1c9464d032b6c06.jpeg";
import heroImg2 from "@/assets/imgs/f99feacf040ed3f0557709a0ae5610ed.jpeg";
import heroImg3 from "@/assets/imgs/d29831296eea50d1ccfeb2bc46deaa1f.jpeg";

const heroSecImgs = [heroImg1, heroImg2, heroImg3];
// const heroSecImgs = ['f99feacf040ed3f0557709a0ae5610ed.jpeg', '9f007a65100f49fab1c9464d032b6c06.jpeg', 'd29831296eea50d1ccfeb2bc46deaa1f.jpeg'];

onMounted(() => {
    makeCarousel("carousel", 3000)
});

</script>