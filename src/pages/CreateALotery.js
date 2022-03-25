import styled from 'styled-components'
import CreateACard from '../components/CreateACard/CreateACard'
import ShowCards from '../components/ShowCards/ShowCards'
import useNewLotery from '../hooks/useNewLotery'
import NewLoteryCount from '../components/NewLoteryCount/NewLoteryCount'

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
            <NewLoteryCount LoteryLength={LoteryLength}/>
            {LoteryLength>0
            ?<ShowCards cards={newLotery} styles={{gridTemplateColumns: 'repeat(auto-fill,minmax(4cm,4.1cm))'}} />
            :null}
        </CreateALoterContainer>
    )
}

export default CreateALotery