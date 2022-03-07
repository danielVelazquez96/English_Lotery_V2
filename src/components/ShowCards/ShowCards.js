import './ShowCards.css'

//Components
import Card from './Card.js'

const ShowCards=({cards})=>{
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

export default ShowCards