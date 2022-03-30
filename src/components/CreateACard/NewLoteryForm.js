// import './styles/Form.css'
import styled from 'styled-components'
import {Form,useField} from 'formik'

// Styles
const FormContainer=styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    width: 50%;
    padding: 20px;
    margin-left: 50px;
    border: solid #000 2px;
    box-shadow: 5px 5px 10px #000 ;
`
const Input=styled.input`
    &[type="file"]{
        color: #000; 
    }
`
const Label=styled.label`
    width: 100%;
    margin-bottom: 5px;
    display: block;
`
const ButtonSubmit=styled.button`
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

const InputCustom = ({label,tooltip,...props}) => { 
    const[field,meta]=useField(props)
    return(
     <div>
        <Label>
            <i 
                className="bi bi-question-circle-fill" 
                data-tooltip={tooltip}
            />
            {label}
        </Label>
        <Input {...field} {...props} />
        
     </div>   
    )
 }

// Component
const NewLoteryForm=( {newCard,handleChange,handleChangeFile,inputFile,handleSubmit})=>{
    return(
        <FormContainer>
            <Form>
                <InputCustom 
                    name='name' 
                    label='Card Title' 
                    tooltip='It allows 2 words and 18 letters'
                    value={newCard.name} 
                    onChange={handleChange} 
                />
                <div>
                    <Label>
                        <i 
                        className="bi bi-question-circle-fill" 
                        data-tooltip=".png, .jpg, .jpeg formats"
                        />
                        Image
                    </Label> 
                </div>
                <Input 
                    ref={inputFile}
                    name='urlImg' 
                    type="file"
                    onChange={handleChangeFile}
                />
                <ButtonSubmit type='submit' className='submit' >Create</ButtonSubmit>
            </Form>
        </FormContainer>
    )
}

export default NewLoteryForm;