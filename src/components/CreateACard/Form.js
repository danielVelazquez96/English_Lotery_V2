// import './styles/Form.css'
import styled from 'styled-components'

// Styles
const FormContainer=styled.form`
    display: flex;
    flex-direction: column;
    background-color: #A50F0F;
    width: 50%;
    padding: 20px;
    margin-left: 50px;
    border: solid #000 2px;
    box-shadow: 5px 5px 10px #000 ;
`
const Input=styled.input`
    &[type="file"]{
        color: #fff; 
    }
`
const Label=styled.label`
    width: 100px;
    margin-bottom: 5px;
`
const SubmitButton=styled.button`
    width: 35%;
    height: 35px;
    color: #fff;
    background-color: #4A0505;
    align-self: center;
    border: #000 solid 1px;
    font-size: 1.3rem;
    font-weight: 350;
    margin: 10px;
    margin-top: 28px;

    &:hover{
        background-color: #770808;
    }
`
// Component
const Form=( {newCard,handleChange,handleChangeFile,inputFile,handleSubmit,...props})=>{
    return(
        <FormContainer {...props} >
            <div>
                <i 
                    className="bi bi-question-circle-fill" 
                    data-tooltip="It allows 2 words and 18 letters"
                />
                <Label>Title</Label> 
            </div>
            <Input 
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
                <Label>Image</Label> 
            </div>
            <Input 
                className='createAcard-form-inputFile'
                ref={inputFile}
                name='urlImg' 
                type="file"
                onChange={handleChangeFile}
            />
            <SubmitButton type='submit' className='submit' >Create</SubmitButton>
        </FormContainer>
    )
}

export default Form;