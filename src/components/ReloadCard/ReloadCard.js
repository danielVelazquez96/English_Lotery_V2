import styled from 'styled-components'
import { useState } from 'react';
import Card from './Card';

import reloadButton from '../../assets/images/re-load.png';

// Styles
const ReloadCardsContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
`
const BigCard=styled.div`
   /* Styles */
   width: 12.9cm;
    height: 19.6cm;
    margin: 50px 0;
    background-color: white;
    border: solid white .3cm;
    box-shadow: 3px 3px 5px black, 
                -3px -3px 5px black;
   
    /* Grid properties */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    row-gap: .5cm;
    column-gap: .3cm;
`
const ReloadButton=styled.div`
  position: relative;
  width: 2cm;
  height: 2cm;
  align-self: center;
  display: block;

  cursor: pointer;
  border-radius: 20%;
  transition: .5 ;
  background-color: lightgreen;

  & img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  &:active{
    box-shadow: 0 0 100px khaki ;
    transform: scale(.9);
  }
`
// Function to select randomly  16 cards from 1 to 56
const chooseRandomlyCards=()=>{
  let cardsSelected= [ ];
  for(let i=0;i<16;i++){
      let number;
      do{
          number=Math.floor(Math.random()*56+1);  // get a random number between 1 from 56
      }while(cardsSelected.find(N=>N==number)) //condition to no repeat the same card
      cardsSelected.push(number);
  }
  return cardsSelected;
}

// Component
const ReloadCard=({cards})=>{
    const [cardsSelected,setCardsSelected]=useState(chooseRandomlyCards())

    return(
      <ReloadCardsContainer>
        <BigCard>
          {cards.length //if there cards
            ? cardsSelected.map(cardSelected=>{
                return <Card 
                        key={cardSelected} 
                        name={cards[cardSelected-1].name} 
                        url={cards[cardSelected-1].url}
                        number={cardSelected}
                        />
            })
            :null}  
        </BigCard>
        <ReloadButton onClick={()=>setCardsSelected(chooseRandomlyCards())} >
                <img  src={reloadButton} alt="reload"/>
        </ReloadButton>
      </ReloadCardsContainer>
    ) 
}

export default ReloadCard;