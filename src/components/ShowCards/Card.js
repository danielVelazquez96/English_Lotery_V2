import styled from 'styled-components'

//styles
const CardContainer=styled.div`
    position: relative;
    border: solid black 2px;
    height: 7cm;
`
const CardImage=styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
`
const CardTitle=styled.div`
    max-width: 4.9cm;
    max-height: 50cm;
    overflow: hidden;
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translate(-50%,0);
    text-align: center;
    line-height: .8cm;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
`
const CardNumber=styled.div`
    position: absolute;
    top:.1cm;
    left: .15cm;
    font-family: 'Lobster', cursive;
    font-size: 20px;
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