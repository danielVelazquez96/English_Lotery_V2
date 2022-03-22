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
            <p >Cards made it <span >{newLotery.length}</span ></p>
        </div>
        <ShowCards cards={newLotery} />
        </div>
    )
}

export default CreateALotery