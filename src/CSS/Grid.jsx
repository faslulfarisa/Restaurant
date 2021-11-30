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
    const [activeColumn,setActiveColumn]=useState([null,null])
    const movePiece=(i,j,x,y)=>{
        setChessState(
            prev=>{
                let newState = [...prev];
                let newColumn =[...newState[i]]
                let initialColumn =[...newState[x]];
                console.log(prev[activeColumn[0]][activeColumn[1]]);


                newColumn[j] =prev[x][y]
                
                initialColumn[y]={
                    currentPiece:null
                }
                newState[i]=newColumn
                newState[x]=initialColumn
                return newState;
            }
        )
    }
    return (
        <div className="grid-container">
            {chessState
            .map((currentColumn,i)=>
            currentColumn
            .map(({currentPiece},j)=>{

                return(
                    <div style={{
                        backgroundColor:(i+j) %2 ?  "#954707" : "#e6ccab",
                        border:activeColumn[0] === i && activeColumn[1] === j && "solid 3px red"
                    }}
                    onClick = {
                        () =>{
                        if(currentPiece){
                            if(activeColumn[0] === null || activeColumn[1] === null){
                                setActiveColumn([i,j]);
                            }else{
                                movePiece(i,j,activeColumn[0],activeColumn[1]);
                                setActiveColumn([null,null])
                            }
                        } else{
                            if (activeColumn[0] === null) return
                            movePiece(i,j,activeColumn[0],activeColumn[1])
                            setActiveColumn([null,null])
                        }         
                        }
                    }
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
