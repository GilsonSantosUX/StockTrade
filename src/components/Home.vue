<template>
    <div>
    <h1 class="mb-4">
        Negocie e Consulte suas Ações
    </h1>
    <v-alert
        border="left"
        type="info"
    >
    Você pode Salvar & Carregar o dados
    </v-alert>
    <v-alert
        border="left"
        type="success"
    >
        Você pode Salvar & Carregar o dados
    </v-alert>
    <v-chip text color="blue" text-color="white" class="mr-2">
        Seu saldo
        <v-icon class="white--text">mdi-currency-usd</v-icon> <strong>{{ funds | currency }}</strong>
    </v-chip>
    </div>
    
</template>

<script>


export default {
    computed: {
        funds(){
            return this.$store.getters.funds
        }
    },
}
</script>

<style>

</style>