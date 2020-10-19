<template>
    <v-col cols="12" sm="6" md="4">
        <v-card class="draken-3 white--text">
            <v-card-title class="green headline">
                <strong>{{stock.name}}</strong>
                <v-spacer></v-spacer>
                <v-chip outlined pill text-color="white">
                    <v-icon class="white--text">mdi-currency-usd</v-icon> <strong>{{stock.price}}</strong>
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-text-field 
                    label="Quantidade"
                    type="number"
                    v-model.number="quantity"
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="green darken-3 white--text"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock"
                >COMPRAR</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>


export default {
    props:['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            console.log(order)
            this.quantity=0
        }
    },

}
</script>

<style>

</style>