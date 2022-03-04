import { Component } from "react";
import './BigCard.css'

// Components
import Card from './Card';


class BigCard extends Component{
    render(){
        const {cards,cardsSelected} = this.props;

        return(
            <div className="BigCardContainer">
                {
                    cards.length
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
            </div>
        )
    }
}

export default BigCard