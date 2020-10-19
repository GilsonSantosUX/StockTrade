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
                    <transition name="company">
                        <router-view></router-view>
                    </transition>
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

.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}

</style>
