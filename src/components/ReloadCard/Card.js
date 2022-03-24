import styled from 'styled-components'

//styles
const CardContainer=styled.div`
    position: relative;
    border: solid 2px black;
`
const CardImage=styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
`
const CardTitle=styled.div`
    max-width: 2.9cm;
    max-height: .9cm;
    overflow: hidden;
    position: absolute;
    font-size: 1rem;
    top: 78%;
    left: 50%;
    transform: translate(-50%,0);
    text-align: center;
    line-height: .4cm;
    font-family: 'Roboto', sans-serif;  
`
const CardNumber=styled.div`
    position: absolute;
    top:.1cm;
    left: .15cm;
    font-family: 'Lobster', cursive;
`
// Components
const Card=({name,url,number})=>{
    return(
        <CardContainer>
            <CardImage src={url} alt="img" />
            <CardTitle>{name}</CardTitle>
            <CardNumber>{number}</CardNumber>
        </CardContainer>
    ) 
}

export default Card