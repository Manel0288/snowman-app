
<template id="snow">
    <v-container class="grey lighten-5">
        <v-row
                v-for="(n, i) in 10"
                :key="i"
                no-gutters
        >
            <v-col
                    v-for="(k, j) in 10"
                    :key="j"
            >
                <v-card
                        ref ="cell"
                        class="pa-1"
                        outlined
                        tile
                        min-height="90px"
                        :class="[{'mario': i === pos.i  && j === pos.j}, {'petit': i === posP.i  && j === posP.j }, {'moyen': i === posM.i  && j === posM.j}, {'grand': i === posG.i  && j === posG.j }]"

                >
                </v-card>
            </v-col>
        </v-row>
        <v-row id="row">
            <v-col class="md6 offset-md-4">
                <v-btn class="ma-2 success" @click="leftCell">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-btn class="ma-2 success" @click="downCell">
                    <v-icon>arrow_downward</v-icon>
                </v-btn>
                <v-btn class="ma-2 success" @click="upCell">
                    <v-icon>arrow_upward</v-icon>
                </v-btn>
                <v-btn class="ma-2 success" @click="rightCell">
                    <v-icon>arrow_forward</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <p> player position i : {{pos.i}} j : {{pos.j}}</p>
    </v-container>
</template>
<script src="./lib/snowComponent.js"></script>
<style src="./lib/snowComponent.css" scoped></style>


