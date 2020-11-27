import React from "react";
import {  useDrag } from 'react-dnd';
import "./css/card.css"
// import { ItemTypes } from "./../utils/items";

export default function Card(props) {
    const { cardtype , cardname , cardIndex  } = props
    const [{isDragging} , dragCard] = useDrag({
        item : {
          type : cardtype,
          name : cardname,
          index : cardIndex
        },
        collect : monitor => ({
            isDragging : !!monitor.isDragging()
        })
      })
      const getCardhouse =(cardtype)=>{
        if(cardtype === "hearts"){
            return "♥️";
        }
        if(cardtype === "spades"){
            return "♠️";
        }
        if(cardtype === "clubs"){
            return "♣️";
        }
        if(cardtype === "diamonds"){
            return "♦";
        }
      }
      const getCardColor = (cardtype)=>{
          if(cardtype === "hearts" || cardtype === "diamonds") return "card-type red";
          return "card-type black";
      }

  return (
    <>
      <div className="card-container" ref={dragCard} style={{opacity: isDragging ? 0.5 : 1}}>
          <div className="card-name">{cardname}</div>
          <div className={getCardColor(cardtype)} >{getCardhouse(cardtype)}</div>

      </div>
    </>

  );
}
