import { useState } from 'react';
import './ReloadCard.css'; //stylesheet

// Components
import BigCard from './BigCard.js'
import Card from './Card';
import ReloadButton from './ReloadButton'

// reload button image
import reloadButton from '../../assets/images/re-load.png';

const ReloadCard=({cards})=>{
   
    // Function to select randomly 16 cards from 1 to 56
    const chooseRandomlyCards=()=>{
        let cardsSelected=[];

        for(let i=0;i<16;i++){
            let number;
            // get a random number between 1 from 56
            do{
                number=Math.floor(Math.random()*56+1);
        
            }while(cardsSelected.find(N=>N==number)) //condition to no repeat the same card
    
            // Variable to remind what card has been set it in the compnent and not repet a same card
            cardsSelected.push(number);
        }

        
        // Return array with the number of 16 cards selected
        return cardsSelected;
    }

    const [cardsSelected,setCardsSelected]=useState(chooseRandomlyCards())

    return(
      <div className='ReloadCardsContainer'>
        <BigCard cardsSelected={cardsSelected} cards={cards} >
          {
            cards.length //if there cards
                ? cardsSelected.map(cardSelected=>{
                    return <Card 
                            key={cardSelected} 
                            name={cards[cardSelected-1].name} 
                            url={cards[cardSelected-1].url}
                            number={cardSelected}
                            />
                })
                :null
          }  
        </BigCard>
        
        <ReloadButton onClick={()=>setCardsSelected(chooseRandomlyCards())} >
                <img  src={reloadButton} alt="reload"/>
        </ReloadButton>
      </div>
    ) 
}

export default ReloadCard;