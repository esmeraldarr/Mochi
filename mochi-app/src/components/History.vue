<template lang="">
    <div>
        <div class="sticky top-0">
            <Menu v-model:activoHitoria="activoHitoria"/>
        </div>
        <h1>historia</h1>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'

const activoHitoria = ref(true)


</script>