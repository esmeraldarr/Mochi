<template lang="">
   <div class="sticky top-0">
        <Menu v-model:activoMochitelleva="activoMochitelleva"/>
    </div>
    <h1>mochi te lleva</h1>
</template>
<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'

const activoMochitelleva = ref(true)

</script>