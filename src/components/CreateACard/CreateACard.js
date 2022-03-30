import { useRef } from 'react'
import styled from 'styled-components'
import Card from './Card'
import NewLoteryForm from './NewLoteryForm'
import useNewCard from '../../hooks/useNewCard'
import uploadImage from '../../api/uploadImage'
import {Formik} from 'formik'

// Styles
const CreateACardContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    margin: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    height: auto;
    width: 900px;
    color: #000;
    transition: all .1s ease;
    &:hover{
        background-color: rgb(256,256,256,0.3);
    }
`
const Title=styled.h2`
     color: #fff;
    font-weight: 200px;
    font-size: 50px;
    margin-bottom: 20px;
`
const DesignContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const PreView=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: auto;
`



// Components
const CreateACard=({addCard})=>{
    const inputFile=useRef(null)

   const [newCard,handleChange,handleChangeFile,resetNewCard]=useNewCard({ 
        number:'1',
        name:'',
        urlImg:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
        })
    
    const handleSubmit=async(e)=>{
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
        <CreateACardContainer >
            {/* Create a card Title */}
            <Title>Create  Card</Title>
            <DesignContainer>
                {/* Template to show cards desing */}
                <PreView className='createACard-template'>
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
                </PreView>
                {/* ---------------------------- */}
                {/* Form to cards design*/}
                <Formik
                    initialValues={{
                        number:'1',
                        name:'',
                        urlImg:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
                    }}
                    onSubmit={handleSubmit}
                >
                    <NewLoteryForm 
                        newCard={newCard} 
                        handleChange={handleChange} 
                        handleChangeFile={handleChangeFile} 
                        inputFile={inputFile}
                    />
                </Formik>
                {/* ------------------ */}
            </DesignContainer>
        </CreateACardContainer>
    )
}

export default CreateACard;