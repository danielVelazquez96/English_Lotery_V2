import styled from "styled-components"

const NewLoteryCountContaner=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    color: #000;    
`
const Number=styled.span`
    color: #12186F;
`


function NewLoteryCount({LoteryLength}) {
  return (
    <NewLoteryCountContaner>
        <label>
            <i 
                className="bi bi-question-circle-fill createACard-form-titleAlert" 
                data-tooltip="It needs 56 Card to update lotery"
            />
           Cards made it 
        </label>    
        <Number >{LoteryLength}</Number >
    </NewLoteryCountContaner>
  )
}

export default NewLoteryCount