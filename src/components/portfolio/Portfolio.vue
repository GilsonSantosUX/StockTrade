<template>
    <v-layout row wrap>
        <v-col sm="12" class="py-0">
            <h1>Portfolio</h1> 
        </v-col>
        <Stock v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"/>
    </v-layout>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

export default {
    components: { Stock },
    computed: {
        ...mapGetters({ 
            stocks: 'stockPortfolio'
        })
    },
}
</script>

<style>

</style>