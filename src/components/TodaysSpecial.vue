<template>
    <section class="special">
        <div class="container">
            <div class="special__body wrapper">
                <div class="special__title">
                    <h5 class="title__info spoon">Menu that fits you palatte</h5>
                    <h2 class="title">Today’s Special</h2>
                </div>
                <div class="special__block">
                    <div class="wineBears special__block-left">
                        <h3 class="items__title">Wine & Beer</h3>
                        <ul class="items__list">
                            <li class="item" v-for="(item, i) in winesBeers" :key="i">
                                <div class="item__block">
                                    <h5 class="item__name">{{ item.name }}</h5>
                                    <div class="lineHorizTag"></div>
                                    <h5 class="item__price">${{ item.cost }}</h5>
                                </div>
                                <p class="item__desc">{{ item.info }}</p>
                            </li>
                        </ul>
                    </div>
                    <img class="special__block-center img100" src="@/assets/imgs/wineBeer.png">
                    <div class="cocktails special__block-right">
                        <h3 class="items__title">Cocktails</h3>
                        <ul class="items__list">
                            <li class="item" v-for="(item, i) in cocktails" :key="i">
                                <div class="item__block">
                                    <h5 class="item__name">{{ item.name }}</h5>
                                    <div class="lineHorizTag"></div>
                                    <h5 class="item__price">${{ item.cost }}</h5>
                                </div>
                                <p class="item__desc">{{ item.info }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="submit" class="btn">View More</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const winesBeers = [
    {
        name: "Chapel Hill Shiraz",
        info: "AU | Bottle",
        cost: 56
    },
    {
        name: "Catena Malbec",
        info: "AR | Bottle",
        cost: 59
    },
    {
        name: "La Vieille Rosé",
        info: "FR | 750 ml",
        cost: 44
    },
    {
        name: "Rhino Pale Ale",
        info: "CA | 750 ml",
        cost: 31
    },
    {
        name: "Irish Guinness",
        info: "IE | 750 ml",
        cost: 26
    },

];

const cocktails = [
    {
        name: "Aperol Spritz",
        info: "Aperol | Villa Marchesi prosecco | soda | 30ml",
        cost: 20
    },
    {
        name: "Dark 'N' Stormy",
        info: "Dark rum | Ginger beer | Slice of lime.",
        cost: 16
    },
    {
        name: "Daiquiri",
        info: "Rum | Citrus juice | Sugar",
        cost: 10
    },
    {
        name: "Old Fashioned",
        info: "Bourbon | Brown sugar | Angostura Bitters",
        cost: 31
    },
    {
        name: "Negroni",
        info: "Gin | Sweet Vermouth | Campari | Orange garnish",
        cost: 26
    },

];

function log(txt: string): void {
    console.log(txt);
}

</script>