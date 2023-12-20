<template lang="">
    <div>
        <div class="sticky top-0">
            <Menu v-model:activoConocenos="activoConocenos"/>
        </div>
        <h1>conocer</h1>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'

const activoConocenos = ref(true)



</script>