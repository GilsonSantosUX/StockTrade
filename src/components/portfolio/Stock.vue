<template>
    <v-col cols="12" sm="6" md="4">
        <v-card class="draken-3 white--text">
            <v-card-title class="blue headline">
                <strong>{{stock.name}}</strong>
                <v-spacer></v-spacer>
                <v-chip outlined pill text-color="white" class="mr-2">
                    <v-icon class="white--text">mdi-currency-usd</v-icon> <strong>{{stock.price | currency}}</strong>
                </v-chip>
                <v-chip pill text-color="blue" class="white">
                    <strong>{{stock.quantity}}</strong>
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-row class="align-center px-4">
                    <v-text-field 
                        :error="insufficientQuantity || quantity < 0 || !Number.isInteger(quantity)"
                        label="Quantidade"
                        type="number"
                        class="mr-2"
                        v-model.number="quantity"
                    ></v-text-field>
                    <v-btn class="blue darken-3 white--text"
                        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                        @click="sellStock"
                    >{{insufficientQuantity ? "INSUFICIENTE" : "VENDER"}}</v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
// import { mapActions }  from 'vuex'


export default {
    props:['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity(){
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        //...mapActions({sellStockAction: 'sellStock'}), //...mapActions(['sellStock']),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            //sellStockAction(order)
            this.$store.dispatch('sellStock',order)
            this.quantity=0
        }
    },

}
</script>

<style>

</style>