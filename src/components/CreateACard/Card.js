
import styled from 'styled-components'

// Styles
const CardContainer=styled.div`
    position: relative;
    border: solid 2px #000;
    color: #000;
    box-shadow: 3px 3px 10px #000;
    background-color: #fff;
`
const CardImage=styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
`
const CardTitle=styled.h3`
 max-width: 2.9cm;
    max-height: .9cm;
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    top: 78%;
    left: 50%;
    transform: translate(-50%,0);
    text-align: center;
    line-height: .4cm;
    font-family: 'Roboto', sans-serif;
`
const CardNumber=styled.span`
    position: absolute;
    top:.1cm;
    left: .15cm;
    font-family: 'Lobster', cursive;
`
// Component
const Card=({name,url,number,messures})=>{
    return(
        <CardContainer style={messures} >
                    <CardImage src={url} alt="img" />
                    <CardTitle >{name}</CardTitle>
                    <CardNumber>{number}</CardNumber>
        </CardContainer>
    ) 
}

export default Card