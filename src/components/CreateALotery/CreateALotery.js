import './styles/CreateALotery.css'

// Components
import CreateACard from './CreateACard'
import ShowCards from '../ShowCards/ShowCards'
// Hooks
import useNewLotery from '../../hooks/useNewLotery'
const CreateALotery=()=>{
    const [newLotery,addCard]= useNewLotery([]);


    return(
        <div className='createALotery'>
        
        <CreateACard addCard={addCard} />
        <div className='createALotery-cardsNumberShow'>
            <div className='flexRow'>
                <i 
                    className="bi bi-question-circle-fill createACard-form-titleAlert" 
                    data-tooltip="It needs 56 Card to update lotery"
                />
                <p >Cards made it <span >{newLotery.length}</span ></p>
            </div>
        </div>
        {
            newLotery.length>0
                ?<ShowCards cards={newLotery} styles={{gridTemplateColumns: 'repeat(auto-fill,minmax(4cm,4.1cm))'}} />
                :null
        }
        
        </div>
    )
}

export default CreateALotery