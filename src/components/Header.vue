<template>
    <v-app-bar
      elevate-on-scroll
    >
      <v-toolbar-items class="headline text-uppercase mr-4 align-center">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
      </v-toolbar-items>

        <v-toolbar-items>
            <v-btn to="/">Início</v-btn>
            <v-btn to="/portfolio">Portfolio</v-btn>
            <v-btn to="/stocks">Stocks</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items>
            <v-btn icon><v-icon>mdi-content-save</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-cloud-sync-outline</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-power</v-icon></v-btn>
      </v-toolbar-items>

      <!-- <v-menu
            bottom
            left
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title><v-icon class="mr-2">mdi-content-save</v-icon>Salvar dados</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><v-icon class="mr-2">mdi-cloud-sync-outline</v-icon>Carregar dados</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
    </v-app-bar>
</template>

<script>
    

export default {

}
</script>

<style>

</style>