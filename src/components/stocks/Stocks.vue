<template>
    <v-layout row wrap>
        <v-col sm="12" class="py-0">
            <h1>Ações</h1> 
        </v-col>
        <Stock v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"/>
    </v-layout>
</template>

<script>
import Stock from './Stock'


export default {
    components:{ Stock },
    computed: {
        stocks(){
            return this.$store.getters.stocks
        }
    },
}
</script>

<style>

</style>