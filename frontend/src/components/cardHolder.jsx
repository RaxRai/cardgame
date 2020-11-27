import React from "react";
import {  useDrop } from 'react-dnd'
import "./css/card.css";

export default function CardHolder(props) {
    const { acceptType , onDrop , currentCards ,setCards } = props;
    const houseImages= {
      "clubs" : "https://www.4shared.com/img/yN0LqFStiq/s25/17606111ed0/clubs",
      "spades" : "https://www.4shared.com/img/bSkvYqiSiq/s25/17606112e70/spades",
      "hearts" : "https://www.4shared.com/img/ATDUILo4ea/s25/17606112a88/hearts",
      "diamonds" : "https://www.4shared.com/img/efhT4tUDiq/s25/176061126a0/diamonds"
    }

    const [{isOver} , drop] = useDrop({
        accept : acceptType,
        drop : (item , monitor) => {
            console.log(item);
            let cardsCopy = currentCards;
            cardsCopy.push(item.name)
            setCards(cardsCopy);
            onDrop(item.index);

        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      })

  return (
    <div ref={drop} className={`holders ${acceptType}`} style={ {opacity : isOver ? "0.5" : "1"}}>
        <div className="house-symbol">
          <img src={houseImages[acceptType] }  height="50%" width="100%" alt={acceptType}/>
        </div>
        <div className="small-cards-container">
          {currentCards.map((card,index)=> (
              <div className="small-cards" key={index}>
                  {card}
              </div>
          ))}
        </div>
    </div>
  );
}
