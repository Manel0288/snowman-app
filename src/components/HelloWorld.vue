<template>
  <v-container class="grey lighten-5">
    <v-row
            v-for="n in 10"
            :key="n"
            no-gutters
    >
      <v-col
              v-for="k in 10"
              :key="k"
      >
        <v-card
                class="pa-2"
                outlined
                tile
        >
          {{ ((n-1)*10)+k-1 }}
          <img src="../assets/mario.jpeg" height="50px"  width="50px"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
