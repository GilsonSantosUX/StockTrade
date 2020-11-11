<template>
    <v-layout row wrap>
        <v-col sm="12" class="py-0">
            <h1>Portfolio</h1> 
            <div v-if="stocks.length ==0">
                <h4 class="headline darken-3">Você ainda não possui nenhuma ação adquirida, compre e verifique!</h4>
                <v-btn x-large class="blue darken-3 white--text mt-5"
                    @click="$router.push('/stocks')"
                >
                COMPRAR AÇÕES
                </v-btn>
            </div>
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