import { Component } from "react";
import './ShowCards.css'

//Components
import Card from './Card.js'

class ShowCards extends Component{
    render(){
        const {cards}=this.props
        
        return(
            
            <div className="ShowContainer" >
                {
                    cards.length
                        ?cards.map((card,key)=>{
                            return<Card
                                    key={key}
                                    name={card.name}
                                    url={card.url}
                                    number={card.number}
                                    />
                        })
                        :null
                }
            </div>
        )
    }

}

export default ShowCards