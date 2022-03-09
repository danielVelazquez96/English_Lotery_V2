import { useState } from 'react'
import './styles/CreateACard.css'

// Components
import Card from './Card'

const CreateACard=()=>{

    const [newCard,setNewCard]=useState({
        number:'1',
        name:'',
        img:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
        })
    
    const handleChange=({target})=>{
        setNewCard({
            ...newCard,
            [target.name]:target.value,
        })
    }

    const handleChangeFile=({target})=>{
        const file=target.files[0];
        const reader=new FileReader(); //objet to convert file to url image
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            
            setNewCard({
                ...newCard,
                [target.name]:reader.result,
            })
        } 
    }

    const resetNewCard=()=>{
        setNewCard({
            number:'1',
            name:'',
            img:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
        });
    }
       
    const submit=(e)=>{
        e.preventDefault()
        console.log('hola mundo');
        resetNewCard()
    }

    return(
        <div className='createAcard'>
           
            <div className='createACard-template'>
                <Card name={newCard.name} number={newCard.number} url={newCard.img} messures={{height: '7cm',width: '4cm'}}/>    
                <Card name={newCard.name} number={newCard.number} url={newCard.img} messures={{height: '5cm',width: '3cm'}}/>    
            </div>
               
            <form onSubmit={submit} className='createACard-form'>
                <label>Title</label>
                <input 
                    name='name' 
                    placeholder='Card´s Title' 
                    type="text"
                    value={newCard.name}
                    onChange={handleChange}
                />
                <br/>
                <label>Image</label>
                <input 
                    name='img' 
                    type="file"
                    onChange={handleChangeFile}
                />
                <button type='submit' >Create</button>
            </form>
            
            
            
        </div>
    )
}

export default CreateACard;