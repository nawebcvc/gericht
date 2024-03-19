<template>
    <section class="bookTable">
        <img src="@/assets/imgs/scissors.svg" alt="" class="logo img100">
        <div class="container">
            <div class="bookTable__body wrapper">
                <div class="bookTable__block">
                    <h5 class="title__info spoon">Reservations</h5>
                    <h2 class="title">Book A Table</h2>
                    <form action="submit" class="form">
                        <select id="fruits" name="fruits" @click="log('select')">
                            <option v-for="i in 9" :value="i" :key="i">{{ i }} {{ i > 1 ? ' people' : ' person' }}</option>
                        </select>
                        <input type="date" value="2021-05-12" name="bookTable" @click="log('date')" required>
                        <input type="time" value="11:00" name="bookTable" @click="log('time')" required>
                    </form>
                    <button type="submit" class="btn">Book Now</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

function log(txt: string): void {
    console.log(txt);
}

</script>