import { useRef } from 'react'

import './styles/CreateACard.css'

// Components
import Card from './Card'
import Form from './Form'
// Hooks
import useNewCard from '../../hooks/useNewCard'
// Api
import uploadImage from '../../api/uploadImage'

const CreateACard=({addCard})=>{
    const inputFile=useRef(null)

   const [newCard,handleChange,handleChangeFile,resetNewCard]=useNewCard({ 
        number:'1',
        name:'',
        urlImg:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
        })
    
    const handleSubmit=async(e)=>{

        e.preventDefault();
        
        
        // filters
        if(newCard.name=='') return null;
        if(newCard.urlImg=='https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg') return null;

        // Reset form and usenewCard
        resetNewCard();
        inputFile.current.value="";

        const cloudinaryUrl=await uploadImage(newCard.urlImg);
        
        addCard({
            name: newCard.name,
            url: cloudinaryUrl,
        });

    }

    return(
        <div className='createAcard'>
            {/* Create a card Title */}
            <h1 className='createAcard-title'>Create A Card</h1>
            <div className='CreateACard-container'>
                {/* Template to show cards desing */}
                <div className='createACard-template'>
                    <Card 
                        name={newCard.name} 
                        number={newCard.number} 
                        url={newCard.urlImg} 
                        messures={{height: '6cm',width: '4cm'}}
                    />    
                    <Card 
                        name={newCard.name} 
                        number={newCard.number} 
                        url={newCard.urlImg} 
                        messures={{height: '5cm',width: '3cm'}}  
                    />  
                </div>
                {/* ---------------------------- */}
                {/* Form to cards design*/}
                <Form 
                    newCard={newCard} 
                    handleChange={handleChange} 
                    handleChangeFile={handleChangeFile} 
                    inputFile={inputFile}
                    onSubmit={handleSubmit}
                />
                {/* ------------------ */}
            </div>
        </div>
    )
}

export default CreateACard;