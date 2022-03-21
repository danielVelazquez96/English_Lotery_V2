import './styles/CreateACard.css'
import axios from 'axios';

// Components
import Card from './Card'
// hooks
import useNewCard from '../../hooks/useNewCard'

const CreateACard=()=>{

   const [newCard,handleChange,handleChangeFile,resetNewCard]=useNewCard({ 
        number:'1',
        name:'',
        urlImg:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
        })
    
    const handleSubmit=(e)=>{

        e.preventDefault()
        resetNewCard()
        uploadImage(newCard.urlImg)
    }

    const uploadImage = async (urlImage) => {
        const urlApi=`http://localhost:5000/api/upload`;
        try {
            const resp=await fetch(urlApi, {
                method: 'POST',
                body: JSON.stringify({ data: urlImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(resp)
        } catch (err) {
            console.error(err);
        }
    };



    return(
        <div className='createAcard'>
            <h1 className='createAcard-title'>Create Lotery</h1>
            <div className='CreateACard-container'>
                <div className='createACard-template'>
                    <Card name={newCard.name} number={newCard.number} url={newCard.urlImg} messures={{height: '7cm',width: '4cm'}}/>    
                    <Card name={newCard.name} number={newCard.number} url={newCard.urlImg} messures={{height: '5cm',width: '3cm'}}/>    
                </div>

                <form onSubmit={handleSubmit} className='createACard-form'>
                    <div>
                        <i 
                            className="bi bi-question-circle-fill createACard-form-titleAlert" 
                            data-tooltip="It allows 2 words and 18 letters"
                        />
                        <label>Title</label> 
                    </div>
                    <input 
                        name='name' 
                        placeholder='Card´s Title' 
                        type="text"
                        value={newCard.name}
                        onChange={handleChange}
                    />
                    <br/>
                    <div>
                        <i 
                            className="bi bi-question-circle-fill createACard-form-titleAlert" 
                            data-tooltip=".png, .jpg, .jpeg formats"
                        />
                        <label>Image</label> 
                    </div>
                    <input 
                        name='urlImg' 
                        type="file"
                        onChange={handleChangeFile}
                    />
                    <button type='submit' className='submit' >Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateACard;