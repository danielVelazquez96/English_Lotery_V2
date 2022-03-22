import './ShowCards.css'

//Components
import Card from './Card.js'

// styles argumnets is optional
const ShowCards=({cards},styles)=>{
    return(
        <div className="ShowContainer" style={styles} >
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