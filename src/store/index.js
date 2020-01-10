import gql from 'graphql-tag';
import Vuex from 'vuex';
import Vue from 'vue';
import ApolloClient from "apollo-boost";

Vue.use(Vuex);
const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

export default new Vuex.Store({
    state: {

        cellFree: [],
        cellFreeX: 0,
        cellFreeY: 0,
        cellPlayerX: 0,
        cellPlayerY: 0,
        cellNorthPlayerX: 0,
        cellNorthPlayerY: 0,
        cellSouthPlayerX: 0,
        cellSouthPlayerY: 0,
        cellEastPlayerX: 0,
        cellEastPlayerY: 0,
        cellWestPlayerX: 0,
        cellWestPlayerY: 0,
        cellBigBallX:0,
        cellBigBallY:0,
        cellMiddleBallX:0,
        cellMiddleBallY:0,
        cellSmallBallX:0,
        cellSmallBallY:0

    },
    mutations: {
        setCellFree(state, payload){
            Vue.set(state, "cellFree", payload);
        },
        setCellFreeX(state, payload){
            Vue.set(state, "cellFreeX", payload);
        },
        setCellFreeY(state, payload){
            Vue.set(state, "cellFreeY", payload);
        },
        setCellPlayerX(state, payload){
            Vue.set(state, "cellPlayerX", payload);
        },
        setCellPlayerY(state, payload){
            // eslint-disable-next-line no-undef
            Vue.set(state, "cellPlayerY", payload);
        },
        setCellNorthPlayerX(state, payload){
            Vue.set(state, "cellNorthPlayerX", payload);
        },
        setCellNorthPlayerY(state, payload){
            Vue.set(state, "cellNorthPlayerY", payload);
        },
        setCellSouthPlayerX(state, payload){
            Vue.set(state, "cellSouthPlayerX", payload);
        },
        setCellSouthPlayerY(state, payload){
            Vue.set(state, "cellSouthPlayerY", payload);
        },
        setCellEastPlayerX(state, payload){
            Vue.set(state, "cellEastPlayerY", payload);
        },
        setCellEastPlayerY(state, payload){
            Vue.set(state, "cellEastPlayerY", payload);
        },
        setCellWestPlayerX(state, payload){
            Vue.set(state, "cellWestPlayerX", payload);
        },
        setCellWestPlayerY(state, payload){
            Vue.set(state, "cellWestPlayerY", payload);
        },
        setCellBigBallX(state, payload){
            Vue.set(state, "cellBigBallX", payload);
        },
        setCellBigBallY(state, payload){
            Vue.set(state, "cellBigBallY", payload);
        },
        setCellMiddleBallX(state, payload){
            Vue.set(state, "cellMiddleBallX", payload);
        },
        setCellMiddleBallY(state, payload){
            Vue.set(state, "cellMiddleBallY", payload);
        },
        setCellSmallBallX(state, payload){
            Vue.set(state, "cellSmallBallX", payload);
        },
        setCellSmallBallY(state, payload){
            Vue.set(state, "cellSmallBallY", payload);
        }
    },
    actions: {
       async getCellFree({commit}){
             const reponse  = await client
               .query({
                   query: gql`{
                              cellFree{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }
                                
                              }
                            }`
               });
           // eslint-disable-next-line no-console
           console.log(reponse);
           console.log(reponse.data.cellFree);

       },
        async getCellPlayer({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellPlayer{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            //console.log("response cell player",reponse.data);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellPlayer[0].y.value);
            commit('setCellPlayerX', +reponse.data.cellPlayer[0].x.value);
            commit('setCellPlayerY', +reponse.data.cellPlayer[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async getCellBigBall({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellBigBall{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
          // console.log("response big ball", reponse.data);
            //console.log(reponse.data.cellBigBall[0].x.value);
            commit('setCellBigBallX', +reponse.data.cellBigBall[0].x.value);
            commit('setCellBigBallY', +reponse.data.cellBigBall[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },

        async getCellMiddleBall({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellMiddleBall{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
           // console.log(reponse.data.cellMiddleBall[0].x.value);
            commit('setCellMiddleBallX', +reponse.data.cellMiddleBall[0].x.value);
            commit('setCellMiddleBallY', +reponse.data.cellMiddleBall[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },


        async getCellSmallBall({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellSmallBall{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            //console.log(reponse.data.cellSmallBall[0].x.value);
            commit('setCellSmallBallX', +reponse.data.cellSmallBall[0].x.value);
            commit('setCellSmallBallY', +reponse.data.cellSmallBall[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },

        async getCellNorthPlayer({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellNorthPlayer{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
           // console.log(reponse.data.cellNorthPlayer[0].y.value);
            commit('setCellNorthPlayerX', +reponse.data.cellNorthPlayer[0].x.value);
            commit('setCellNorthPlayerY', +reponse.data.cellNorthPlayer[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },

        async getCellSouthPlayer({commit}){
            const reponse  = await client
                .query({
                    query: gql`{
                              cellSouthPlayer{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
           // console.log(reponse);
            // eslint-disable-next-line no-console
           // console.log(reponse.data.cellSouthPlayer[0].y.value);
            commit('setCellSouthPlayerX', +reponse.data.cellSouthPlayer[0].x.value);
            commit('setCellSouthPlayerY', +reponse.data.cellSouthPlayer[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },

        async getCellEastPlayer({commit}) {
            const reponse = await client
                .query({
                    query: gql`{
                              cellEastPlayer{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
           // console.log(reponse);
            // eslint-disable-next-line no-console
           // console.log("cell east player", reponse.data)
            //console.log(reponse.data.cellEastPlayer[0].y.value);
            commit('setCellEastPlayerX', +reponse.data.cellEastPlayer[0].x.value);
            commit('setCellEastPlayerY', +reponse.data.cellEastPlayer[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async getCellWestPlayer({commit}) {
            const reponse = await client
                .query({
                    query: gql`{
                              cellWestPlayer{
                                 x{
                                  value
                                }
                                y{
                                  value
                                }  
                              }
                            }`
                });
            // eslint-disable-next-line no-console
            console.log(reponse);
            // eslint-disable-next-line no-console
            console.log(reponse.data.cellWestPlayer[0].y.value);
            commit('setCellWestPlayerX', +reponse.data.cellWestPlayer[0].x.value);
            commit('setCellWestPlayerY', +reponse.data.cellWestPlayer[0].y.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellPlayerY({commit}, {cellP}){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellP: CellPlayerYInput){
                                              FullPlayerYMutation(newCellPlayer: $cellP){
                                              x{
                                                value
                                              }
                                              y{
                                                value
                                              }
                                              northX{
                                                value
                                              }
                                              northY{
                                                value
                                              }
                                              southX{
                                                value
                                              }
                                              southY{
                                                value
                                              }
                                              eastX{
                                                value
                                              }
                                              eastY{
                                                value
                                              }
                                              westX{
                                              value
                                              }
                                              westY{
                                              value
                                              }
                                              }
                                              }`,
                    variables: { cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellPlayerY', +reponse.data.FullPlayerYMutation[0].y.value);
            commit('setCellNorthPlayerY', +reponse.data.FullPlayerYMutation[0].northY.value);
            commit('setCellSouthPlayerY', +reponse.data.FullPlayerYMutation[0].southY.value);
            commit('setCellEastPlayerY', +reponse.data.FullPlayerYMutation[0].eastY.value);
            commit('setCellWestPlayerY', +reponse.data.FullPlayerYMutation[0].westY.value);

            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellPlayerX({commit}, { cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellP: CellPlayerXInput){
                                  FullPlayerXMutation(newCellPlayer: $cellP){
                                  x{
                                    value
                                  }
                                  y{
                                    value
                                  }
                                  northX{
                                    value
                                  }
                                  northY{
                                    value
                                  }
                                  southX{
                                    value
                                  }
                                  southY{
                                    value
                                  }
                                  eastX{
                                    value
                                  }
                                  eastY{
                                    value
                                  }
                                  westX{
                                  value
                                  }
                                  westY{
                                  value
                                  }
                                  }
                                  }`,
                    variables: { cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellPlayerX', +reponse.data.FullPlayerXMutation[0].x.value);
            commit('setCellNorthPlayerX', +reponse.data.FullPlayerXMutation[0].northX.value);
            commit('setCellSouthPlayerX', +reponse.data.FullPlayerXMutation[0].southX.value);
            commit('setCellEastPlayerX', +reponse.data.FullPlayerXMutation[0].eastX.value);
            commit('setCellWestPlayerX', +reponse.data.FullPlayerXMutation[0].westX.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellBigBallY({commit}, {cellBigBall, cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellBigBall: CellBigBallYInput, $cellP: CellPlayerYInput ){
                                          CellBigBallYMutation(newCellBigBall: $cellBigBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                          FullPlayerYMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                          }
                                        }`,
                    variables: {cellBigBall, cellP}
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellBigBallY', +reponse.data.CellBigBallYMutation[0].y.value);
            commit('setCellPlayerY', +reponse.data.FullPlayerYMutation[0].y.value);
            commit('setCellNorthPlayerY', +reponse.data.FullPlayerYMutation[0].northY.value);
            commit('setCellSouthPlayerY', +reponse.data.FullPlayerYMutation[0].southY.value);
            commit('setCellEastPlayerY', +reponse.data.FullPlayerYMutation[0].eastY.value);
            commit('setCellWestPlayerY', +reponse.data.FullPlayerYMutation[0].westY.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellBigBallX({commit}, {cellBigBall, cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellBigBall: CellBigBallXInput, $cellP: CellPlayerXInput ){
                                          CellBigBallXMutation(newCellBigBall: $cellBigBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                          FullPlayerXMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                            
                                          }
                                         
                                        }`,
                    variables: {cellBigBall, cellP }
                });
            // eslint-disable-next-line no-console
           // console.log(reponse);
            commit('setCellBigBallX', +reponse.data.CellBigBallXMutation[0].x.value);
            commit('setCellPlayerX', +reponse.data.FullPlayerXMutation[0].x.value);
            commit('setCellNorthPlayerX', +reponse.data.FullPlayerXMutation[0].northX.value);
            commit('setCellSouthPlayerX', +reponse.data.FullPlayerXMutation[0].southX.value);
            commit('setCellEastPlayerX', +reponse.data.FullPlayerXMutation[0].eastX.value);
            commit('setCellWestPlayerX', +reponse.data.FullPlayerXMutation[0].westX.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellMiddleBallY({commit}, {cellMiddleBall, cellP}){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellMiddleBall: CellMiddleBallYInput, $cellP: CellPlayerYInput ){
                                          CellMiddleBallYMutation(newCellMiddleBall: $cellMiddleBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                           FullPlayerYMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                            }
                                        }`,
                    variables: {cellMiddleBall, cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellMiddleBallY', +reponse.data.CellMiddleBallYMutation[0].y.value);
            commit('setCellPlayerY', +reponse.data.FullPlayerYMutation[0].y.value);
            commit('setCellNorthPlayerY', +reponse.data.FullPlayerYMutation[0].northY.value);
            commit('setCellSouthPlayerY', +reponse.data.FullPlayerYMutation[0].southY.value);
            commit('setCellEastPlayerY', +reponse.data.FullPlayerYMutation[0].eastY.value);
            commit('setCellWestPlayerY', +reponse.data.FullPlayerYMutation[0].westY.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellMiddleBallX({commit}, {cellMiddleBall, cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellMiddleBall: CellMiddleBallXInput, $cellP: CellPlayerXInput ){
                                          CellMiddleBallXMutation(newCellMiddleBall: $cellMiddleBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                          FullPlayerXMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                          }
                                           
                                        }`,
                    variables: {cellMiddleBall, cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellMiddleBallX', +reponse.data.CellMiddleBallXMutation[0].x.value);
            commit('setCellPlayerX', +reponse.data.FullPlayerXMutation[0].x.value);
            commit('setCellNorthPlayerX', +reponse.data.FullPlayerXMutation[0].northX.value);
            commit('setCellSouthPlayerX', +reponse.data.FullPlayerXMutation[0].southX.value);
            commit('setCellEastPlayerX', +reponse.data.FullPlayerXMutation[0].eastX.value);
            commit('setCellWestPlayerX', +reponse.data.FullPlayerXMutation[0].westX.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellSmallBallY({commit}, {cellSmallBall, cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellSmallBall: CellSmallBallYInput, $cellP: CellPlayerYInput ){
                                          CellSmallBallYMutation(newCellSmallBall: $cellSmallBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                            FullPlayerYMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                          }
                                         
                                        }`,
                    variables: {cellSmallBall, cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            // console.log(reponse.data.cellSmallBall[0].y.value);
            commit('setCellSmallBallY', +reponse.data.CellSmallBallYMutation[0].y.value);
            commit('setCellPlayerY', +reponse.data.FullPlayerYMutation[0].y.value);
            commit('setCellNorthPlayerY', +reponse.data.FullPlayerYMutation[0].northY.value);
            commit('setCellSouthPlayerY', +reponse.data.FullPlayerYMutation[0].southY.value);
            commit('setCellEastPlayerY', +reponse.data.FullPlayerYMutation[0].eastY.value);
            commit('setCellWestPlayerY', +reponse.data.FullPlayerYMutation[0].westY.value);
            // commit('setCellFreeY', reponse.y.value);
        },
        async mutateCellSmallBallX({commit}, {cellSmallBall, cellP }){
            const reponse  = await client
                .mutate({
                    mutation: gql`mutation ($cellSmallBall: CellSmallBallXInput, $cellP: CellPlayerXInput ){
                                          CellSmallBallXMutation(newCellSmallBall: $cellSmallBall){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                          }
                                           FullPlayerXMutation(newCellPlayer: $cellP){
                                            x{
                                              value
                                            }
                                            y{
                                              value
                                            }
                                            northX{
                                            value
                                            }
                                            northY{
                                            value
                                            } 
                                            southX{
                                            value
                                            }
                                            southY{
                                            value
                                            }
                                            eastX{
                                            value
                                            }
                                            eastY{
                                            value
                                            }
                                            westX{
                                            value
                                            }
                                            westY{
                                            value
                                            }
                                          }                
                                        }`,
                    variables: {cellSmallBall, cellP }
                });
            // eslint-disable-next-line no-console
            //console.log(reponse);
            // eslint-disable-next-line no-console
            //console.log(reponse.data);
            commit('setCellPlayerX', +reponse.data.FullPlayerXMutation[0].x.value);
            commit('setCellNorthPlayerX', +reponse.data.FullPlayerXMutation[0].northX.value);
            commit('setCellSouthPlayerX', +reponse.data.FullPlayerXMutation[0].southX.value);
            commit('setCellEastPlayerX', +reponse.data.FullPlayerXMutation[0].eastX.value);
            commit('setCellWestPlayerX', +reponse.data.FullPlayerXMutation[0].westX.value);
            commit('setCellSmallBallX', +reponse.data.CellSmallBallXMutation[0].x.value);
            // commit('setCellFreeY', reponse.y.value);
        }
    }
})