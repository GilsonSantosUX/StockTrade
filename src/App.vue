<template>
    <v-app>
        <!-- <v-navigation-drawer app>
        </v-navigation-drawer> -->

        <v-app-bar app>
            <Header/>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import Header from './components/Header'
export default {
    components: { Header },
    created() {
        this.$store.dispatch('initStocks')
    },

}
</script>

<style>
</style>
