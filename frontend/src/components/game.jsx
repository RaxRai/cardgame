import './css/game.css';
import {ItemTypes} from "./../utils/items";
import {cards} from "./../data/cards"
import Card from "./card";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import CardHolder from './cardHolder';
import { useState } from 'react';
function Game(props) {

  const shuffle = (array)=> {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  const [shuffledCards , setShuffledCards] = useState(shuffle(cards));
  const [heartCards, setHeartCards] = useState([]);
  const [spadeCards, setSpadeCards] = useState([]);
  const [clubCards, setClubCards] = useState([]);
  const [diamondCards, setDiamondCards] = useState([]);
  const [count, setCount] = useState(0);
  const handleDrop =(index)=>{
    console.log(index);
    let newShuffledCards = [...shuffledCards];
    newShuffledCards[index] = undefined;
    setShuffledCards(newShuffledCards);
    setCount(count+1);
  }
  const handleRestart=()=>{
    setShuffledCards(shuffle(cards));
    setCount(0);
    setHeartCards([]);
    setSpadeCards([]);
    setDiamondCards([]);
    setClubCards([]);
  }
  const restartButton =()=>{
    return (<div onClick={handleRestart} className="btn" style={{ width: 100, fontSize: 25, justifyContent: "center", borderRadius: "5px"}}> Restart </div>)
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="cards-container">
          {count >= 52 ? restartButton() : ""}
         {shuffledCards.map((card,index)=> card === undefined ? "" : <Card key={index} cardIndex={index} cardtype={card.type} cardname={card.name} />)}
        </div>
        <div className="card-holder">
          <CardHolder key="holder-1"  currentCards={heartCards} setCards={setHeartCards} acceptType={ItemTypes.HEARTS}  onDrop={handleDrop} shuffledCards={shuffledCards} setShuffledCards={setShuffledCards}/>
          <CardHolder key="holder-2"  currentCards={clubCards} setCards={setClubCards} acceptType={ItemTypes.CLUBS}  onDrop={handleDrop}  shuffledCards={shuffledCards} setShuffledCards={setShuffledCards}/>
          <CardHolder key="holder-3" currentCards={diamondCards} setCards={setDiamondCards} acceptType={ItemTypes.DIAMONDS}  onDrop={handleDrop}  shuffledCards={shuffledCards} setShuffledCards={setShuffledCards}/>
          <CardHolder key="holder-4" currentCards={spadeCards} setCards={setSpadeCards} acceptType={ItemTypes.SPADES}  onDrop={handleDrop}  shuffledCards={shuffledCards} setShuffledCards={setShuffledCards}/>
        </div>
      </div>
    </DndProvider>
  );
}

export default Game;
