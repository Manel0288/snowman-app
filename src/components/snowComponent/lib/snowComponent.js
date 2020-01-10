

export default {
    name: "SnowComponent",
    data(){

        return {
            actif: false,
            pos: {
                i: 0,
                j: 0
                },
            posP: {
                i: 0,
                j: 0
            },
            posM: {
                i: 0,
                j: 0
            },
            posG: {
                i: 0,
                j: 0
            },
            snowmanCell: '',
        }
    },
    computed: {
        cellPlayerX: function(){
            return this.$store.state.cellPlayerX;
        },

        cellPlayerY: function () {
            return this.$store.state.cellPlayerY;
        },
        cellBigBallX: function () {
            return this.$store.state.cellBigBallX;
        },
        cellBigBallY: function () {
            return this.$store.state.cellBigBallY;
        },
        cellMiddleBallX: function () {
            return this.$store.state.cellMiddleBallX;
        },
        cellMiddleBallY: function () {
            return this.$store.state.cellMiddleBallY;
        },
        cellSmallBallX: function () {
            return this.$store.state.cellSmallBallX;
        },
        cellSmallBallY: function () {
            return this.$store.state.cellSmallBallY;
        },
        cellNorthPlayerX: function () {
            return this.$store.state.cellNorthPlayerX;
        },
        cellNorthPlayerY: function () {
            return this.$store.state.cellNorthPlayerY;
        },
        cellSouthPlayerX: function () {
            return this.$store.state.cellSouthPlayerX;
        },
        cellSouthPlayerY: function () {
            return this.$store.state.cellSouthPlayerY;
        },
        cellEastPlayerX: function () {
            return this.$store.state.cellEastPlayerX;
        },
        cellEastPlayerY: function () {
            return this.$store.state.cellEastPlayerY;
        },
        cellWestPlayerX: function () {
            return this.$store.state.cellWestPlayerX;
        },
        cellWestPlayerY: function () {
            return this.$store.state.cellWestPlayerY;
        },
    },
    mounted(){

       // console.log("refs", this.$el.children[2].children[4]);
       // console.log("body",this.$el.querySelector("#row"));
        this.$store.dispatch("getCellPlayer");
        this.$store.dispatch("getCellBigBall");
        this.$store.dispatch("getCellMiddleBall");
        this.$store.dispatch("getCellSmallBall");
        this.$store.dispatch("getCellNorthPlayer");
        this.$store.dispatch("getCellSouthPlayer");
        this.$store.dispatch("getCellEastPlayer");
        this.$store.dispatch("getCellWestPlayer");


    },
    watch:{
        cellPlayerX(newValPI){
           // console.log("newval ", newValPI);
            this.pos.i = newValPI;
        },
        cellPlayerY(newValPJ){
           // console.log("newval ", newValPJ);
            this.pos.j = newValPJ;
        },
        cellBigBallX(newValGI){

            this.snowmanCell = this.$el.children[this.cellBigBallX].children[this.cellBigBallY];
          //  console.log("newval ", newValGI);
            this.posG.i = newValGI;
        },
        cellBigBallY(newValGJ){
            //console.log("newval ", newValGJ);
            this.posG.j = newValGJ;
        },
        cellMiddleBallX(newValMI){

           // console.log("snowman ", this.snowmanCell);
            this.posM.i = newValMI;
            if (this.posM.i === this.posG.i && this.posM.j === this.posG.j) {
                this.updateSnowmanCell1();
            }
        },
        cellMiddleBallY(newValMJ){
           // console.log("newval ", newValMJ);
            this.posM.j = newValMJ;
            if (this.posM.i === this.posG.i && this.posM.j === this.posG.j) {
                this.updateSnowmanCell1();
            }

        },
        cellSmallBallX(newValPEI){
           // console.log("newval ", newValPEI);
            this.posP.i = newValPEI;
            if (this.posM.i === this.posG.i && this.posP.i === this.posG.i && this.posM.j === this.posG.j && this.posP.j === this.posG.j ) {
                this.updateSnowmanCell2();
            }
        },
        cellSmallBallY(newValPEJ){
           // console.log("newval ", newValPEJ);
            this.posP.j = newValPEJ;
            if (this.posM.i === this.posG.i && this.posP.i === this.posG.i && this.posM.j === this.posG.j && this.posP.j === this.posG.j ) {
                this.updateSnowmanCell2();
            }
        }
    },
    methods: {
        updateSnowmanCell1(){
            //console.log('Inside updateSnowmanCell1');
            let self = this;
            this.$nextTick(() => {
                self.snowmanCell.children[0].classList.remove("grand");
                self.snowmanCell.children[0].classList.remove("moyen");
                self.snowmanCell.children[0].classList.add("moyGr");
              //  console.log("snowman updateSnowmanCell1", self.snowmanCell.children[0].classList);
              //  console.log("snowman classlist", self.snowmanCell.classList);
            });
        },
        updateSnowmanCell2(){
            let self = this;
            this.$nextTick(() => {
                self.snowmanCell.children[0].classList.remove("grand");
                self.snowmanCell.children[0].classList.remove("moyen");
                self.snowmanCell.children[0].classList.remove("petit");
                self.snowmanCell.children[0].classList.add("ptMoyGr");
                let btnContainer = this.$el.querySelector("#row");
                for (let btn of btnContainer.children[0].children){
                   // console.log("btncontainer", btnContainer.children[0].children)
                    btn.disabled = true;
                }
              //  console.log("updateSnowmanCell2",self.snowmanCell.children[0].classList);
            });
        },
        leftCell() {
           // console.log("cellPlayerY1=", this.pos.j);
            //let condBall = this.pos.j - 1;
            if (this.pos.j > 0){
                //console.log("cellPlayerY2=", this.pos.j);
                this.pos.j -= 1;
                this.$store.dispatch("mutateCellPlayerY",
                    {
                                cellP: { x: this.pos.i, oldY: this.pos.j +1, newY: this.pos.j}

                    });

            }

            if (this.pos.i === this.posG.i && this.pos.j === this.posG.j) {
                //this.posG.j -= 1;
                if(this.posG.j > 0 ) {
                this.$store.dispatch("mutateCellBigBallY",
                    {
                                cellP: { x: this.pos.i, oldY: this.pos.j +1, newY: this.pos.j},
                                cellBigBall: { x: this.posG.i, oldY: this.posG.j, newY: this.posG.j -1 }
                    });

                }

            }

            if (this.pos.i === this.posM.i && this.pos.j === this.posM.j) {
                //this.posM.j -= 1;
                if(this.posM.j > 0) {
                    this.$store.dispatch("mutateCellMiddleBallY",
                        {
                            cellP: {x: this.pos.i, oldY: this.pos.j + 1, newY: this.pos.j},
                            cellMiddleBall: {x: this.posM.i, oldY: this.posM.j, newY: this.posM.j - 1}

                        });
                    }
                }

            if (this.pos.i === this.posP.i && this.pos.j === this.posP.j) {
                //this.posP.j -= 1;
                if(this.posP.j > 0){
                this.$store.dispatch("mutateCellSmallBallY",
                    {
                                cellP: { x: this.pos.i, oldY: this.pos.j +1, newY: this.pos.j},
                                cellSmallBall: { x: this.posP.i, oldY: this.posP.j, newY: this.posP.j -1}
                    });
                }
            }

        },
        downCell() {
            if( this.pos.i < 9 ){
                this.pos.i += 1;
                this.$store.dispatch("mutateCellPlayerX",
                    {
                                cellP: { oldX: this.pos.i -1, newX: this.pos.i, y: this.pos.j }

                            });
            }
            if (this.pos.j === this.posG.j && this.pos.i === this.posG.i) {
                //this.posG.i += 1;
                if( this.posG.i < 9 ) {
                    this.$store.dispatch("mutateCellBigBallX",
                        {

                            cellP: {oldX: this.pos.i - 1, newX: this.pos.i, y: this.pos.j},
                            cellBigBall: {oldX: this.posG.i, newX: this.posG.i + 1, y: this.posG.j}
                        });
                }
            }
            if (this.pos.j === this.posM.j && this.pos.i === this.posM.i) {
               // this.posM.i += 1;
                if( this.posM.i < 9 ) {
                    this.$store.dispatch("mutateCellMiddleBallX",
                        {
                            cellP: {oldX: this.pos.i - 1, newX: this.pos.i, y: this.pos.j},
                            cellMiddleBall: {oldX: this.posM.i, newX: this.posM.i + 1, y: this.posM.j}
                        });
                }
            }
            if (this.pos.j === this.posP.j && this.pos.i === this.posP.i) {
                //this.posP.i += 1;
                if( this.pos.i < 9 ) {
                    this.$store.dispatch("mutateCellSmallBallX",
                        {
                            cellP: {oldX: this.pos.i - 1, newX: this.pos.i, y: this.pos.j},
                            cellSmallBall: {oldX: this.posP.i, newX: this.posP.i + 1, y: this.posP.j}
                        });
                }
            }

        },
        upCell() {
            if( this.pos.i > 0 ){
                this.pos.i -= 1;
                this.$store.dispatch("mutateCellPlayerX",
                    {
                                cellP: {  oldX: this.pos.i +1, newX: this.pos.i, y: this.pos.j},

                    });
            }
            if ( this.pos.j === this.posG.j && this.pos.i === this.posG.i){
                //this.posG.i -=1;
                if(this.posG.i > 0 ){
                this.$store.dispatch("mutateCellBigBallX",
                    {
                                cellP: {  oldX: this.pos.i +1, newX: this.pos.i, y: this.pos.j},
                                cellBigBall: {  oldX: this.posG.i, newX: this.posG.i -1, y: this.posG.j}
                    });
                }
            }
            if ( this.pos.j === this.posM.j && this.pos.i === this.posM.i){
                //this.posM.i -=1;
                if(this.posM.i > 0){
                this.$store.dispatch("mutateCellMiddleBallX",
                    {
                                cellP: {  oldX: this.pos.i +1, newX: this.pos.i, y: this.pos.j},
                                cellMiddleBall: {  oldX: this.posM.i, newX: this.posM.i -1, y: this.posM.j}
                    });
                }
            }
            if ( this.pos.j === this.posP.j && this.pos.i === this.posP.i){
                //this.posP.i -=1;
                if(this.posP.i > 0){
                this.$store.dispatch("mutateCellSmallBallX",
                    {

                                cellP: {  oldX: this.pos.i +1, newX: this.pos.i, y: this.pos.j},
                                cellSmallBall: {  oldX: this.posP.i, newX: this.posP.i -1, y: this.posP.j}
                    });
                }
            }
        },
        rightCell() {
            if( this.pos.j < 9 ){
                this.pos.j += 1;
                this.$store.dispatch("mutateCellPlayerY",
                    {
                                cellP: { x: this.pos.i, oldY: this.pos.j -1, newY: this.pos.j}

                    });
            }
            if (this.pos.i === this.posG.i && this.pos.j === this.posG.j) {
                //this.posG.j += 1;
                if(this.posG.j < 9){
                this.$store.dispatch("mutateCellBigBallY",
                       {

                                   cellP: { x: this.pos.i, oldY: this.pos.j -1, newY: this.pos.j},
                                   cellBigBall: { x: this.posG.i, oldY: this.posG.j, newY: this.posG.j +1}
                       });
                }
            }
            if (this.pos.i === this.posM.i && this.pos.j === this.posM.j) {
                //this.posM.j += 1;
                if(this.posM.j < 9){
                this.$store.dispatch("mutateCellMiddleBallY",
                    {
                                cellP: { x: this.pos.i, oldY: this.pos.j -1, newY: this.pos.j},
                                cellMiddleBall: { x: this.posM.i, oldY: this.posM.j, newY: this.posM.j +1}
                    });
                }
            }
            if (this.pos.i === this.posP.i && this.pos.j === this.posP.j) {
                //this.posP.j += 1;
                if(this.posP.j < 9) {
                    this.$store.dispatch("mutateCellSmallBallY",
                        {

                            cellP: {x: this.pos.i, oldY: this.pos.j - 1, newY: this.pos.j},
                            cellSmallBall: {x: this.posP.i, oldY: this.posP.j, newY: this.posP.j + 1}
                        });
                }
            }
        }
    }
}
