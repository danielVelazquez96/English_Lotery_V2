import { Component } from 'react';
import './ReloadCard.css'; //stylesheet

// Components
import BigCard from './BigCard.js'

// reload button image
import reloadButton from '../../assets/images/re-load.png';

class ReloadCard extends Component{

    constructor(props){
        super(props)
        this.state={
            cardsSelected:this.chooseCardsRandomly(),
        }
    }
    
    // Function to select randomly 16 cards from 1 to 56
    chooseCardsRandomly=()=>{
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

    render(){
        const {cards}=this.props;
        return(
          <div className='ReloadCardsContainer'>
            <BigCard cardsSelected={this.state.cardsSelected} cards={cards} />
            
            <div onClick={()=>this.setState({cardsSelected:this.chooseCardsRandomly()})} className="reload-buttom" >
                    <img  src={reloadButton} alt="reload"/>
            </div>
          </div>
        )
    }
    
}

export default ReloadCard;