import styled from 'styled-components'
import './CreateALotery.css'
import CreateACard from '../components/CreateACard/CreateACard'
import ShowCards from '../components/ShowCards/ShowCards'
import useNewLotery from '../hooks/useNewLotery'

const CreateALoterContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:${props=>props.LoteryLength?'auto':'100vh'};
`


const CreateALotery=()=>{
    const [newLotery,addCard]= useNewLotery([]);
    const LoteryLength=newLotery.length;
    return(
        <CreateALoterContainer LoteryLength={LoteryLength}>
            <CreateACard addCard={addCard} />
            <div className='createALotery-cardsNumberShow'>
                <div className='flexRow'>
                    <i 
                        className="bi bi-question-circle-fill createACard-form-titleAlert" 
                        data-tooltip="It needs 56 Card to update lotery"
                    />
                    <p >Cards made it <span >{LoteryLength}</span ></p>
                </div>
            </div>
            {LoteryLength>0
            ?<ShowCards cards={newLotery} styles={{gridTemplateColumns: 'repeat(auto-fill,minmax(4cm,4.1cm))'}} />
            :null}
        </CreateALoterContainer>
    )
}

export default CreateALotery