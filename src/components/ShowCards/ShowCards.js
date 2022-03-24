import styled from 'styled-components'
import Card from './Card.js'

const ShowCardsContainer=styled.div`
     margin: 50px auto;
    height: auto;
    width: 88.5vw;
    border: solid black 2px;
    box-shadow: 3px 3px 5px black, 
    -3px -3px 5px black;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(4cm,1fr)) ;
    grid-template-rows: repeat(autofit,minmax(6cm,6.1cm));
    background-color: white;
    gap: .3cm;
`
const ShowCards=({cards},styles)=>{
    return(
        <ShowCardsContainer style={styles} >
            {cards.length
                ?cards.map((card,key)=>{
                    return<Card
                            key={key}
                            name={card.name}
                            url={card.url}
                            number={card.number}
                            />
                })
                :null}
        </ShowCardsContainer>
    )

}

export default ShowCards