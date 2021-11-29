import React, { useState } from 'react'
import "./style.css"


import pawnImage from "../assets/icons/soldier-white.svg"
import blackPawn from "../assets/icons/soldier-black.svg"


import whiteRook from "../assets/icons/rook-white.svg"
import whiteKnight from "../assets/icons/knight-white.svg"
import whiteBishop from "../assets/icons/white-bishop.svg"
import whiteKing from "../assets/icons/white-king.svg"
import whiteQueen from "../assets/icons/white-queen.svg"

import blackRook from "../assets/icons/rook-black.svg"
import blackKnight from "../assets/icons/knight-black.svg"
import blackBishop from "../assets/icons/black-bishop.svg"
import blackKing from "../assets/icons/black-king.svg"
import blackQueen from "../assets/icons/black-queen.svg"


const chessInitialState=[
    [
        {
            currentPiece:whiteRook
        },
        {
            currentPiece:whiteKnight
        },
        {
            currentPiece:whiteBishop
        },
        {
            currentPiece:whiteKing
        },
        {
            currentPiece:whiteQueen
        },
        {
            currentPiece:whiteBishop
        },
        {
            currentPiece:whiteKnight
        },
        {
            currentPiece:whiteRook
        },
    ],
    [
        ...[...Array(8)].map(()=>{
            return{
                currentPiece:pawnImage
            }
        })
    ],
        ...[...Array(4)].map(()=>{
            return[...Array(8)].map(()=>{
                return{
                    currentPiece:null
                }
            })
           
        })
        ,[
            ...[...Array(8)].map(()=>{
                return{
                    currentPiece:blackPawn
                }
            })
        ],
        [
            {
                currentPiece:blackRook
            },
            {
                currentPiece:blackKnight
            },
            {
                currentPiece:blackBishop
            },
            {
                currentPiece:blackKing
            },
            {
                currentPiece:blackQueen
            },
            {
                currentPiece:blackBishop
            },
            {
                currentPiece:blackKnight
            },
            {
                currentPiece:blackRook
            },
        ],
    ]
    
const Grid = () => {
    // console.log(chessState);

    const [chessState, setChessState]=useState(chessInitialState);
    return (
        <div className="grid-container">
            {chessState
            .map((currentColumn,i)=>
            currentColumn
            .map(({currentPiece},j)=>{

                return(
                    <div style={{
                        backgroundColor:(i+j) %2 ?  "#954707" : "#e6ccab",
                    }}
                    onClick = {() =>{
                        if(i === 4){
                            setChessState(
                                prev=>{
                                    let newState = [...prev];
                                    let newColumn =[...newState[i]]
                                    let initialColumn =[...newState[6]]

                                    newColumn[j] ={
                                        currentPiece:blackPawn
                                    }
                                    initialColumn[j]={
                                        currentPiece:null
                                    }
                                    newState[i]=newColumn
                                    newState[6]=initialColumn
                                    return newState;
                                }
                            )
                        }
                    }}
                    >
                        {
                            currentPiece &&
                            <img src={currentPiece} className="chess_piece"/>
                        }
                    {/* {{indexArray[1]+","+indexArray[0]} */}
                     {/* {indexArray[1] === 1 && <img className="chess_piece" src ={pawnImage} alt="" />} */}

                </div>

                )   
            }))}
            )
        </div>
    )
}

export default Grid
