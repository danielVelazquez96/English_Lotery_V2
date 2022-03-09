import { useState } from 'react'

import './styles/CreateALotery.css'

// Components
import CreateACard from './CreateACard'

const CreateALotery=()=>{
    const [newLotery,setNewLotery]=useState([])
    

    return(
        <div className='createALotery'>
            <CreateACard/>
        </div>
        
    )
}

export default CreateALotery