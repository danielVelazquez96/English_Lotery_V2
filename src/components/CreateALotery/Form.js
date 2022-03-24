import './styles/Form.css'

const Form=( {newCard,handleChange,handleChangeFile,inputFile,handleSubmit,...props})=>{
    return(
        <form className='createACard-form' {...props} >
                    <div>
                        <i 
                            className="bi bi-question-circle-fill" 
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
                            className="bi bi-question-circle-fill" 
                            data-tooltip=".png, .jpg, .jpeg formats"
                        />
                        <label>Image</label> 
                    </div>
                    <input 
                        className='createAcard-form-inputFile'
                        ref={inputFile}
                        name='urlImg' 
                        type="file"
                        onChange={handleChangeFile}
                    />
                    <button type='submit' className='submit' >Create</button>
                </form>
    )
}

export default Form;