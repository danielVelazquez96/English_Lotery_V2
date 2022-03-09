import './styles/Card.css'

const Card=({name,url,number,messures})=>{

    return(
        <div className="createALotery-card" style={messures}>
                    <img src={url} alt="img" />
                    <h2 >{name}</h2>
                    <span>{number}</span>
        </div>
    ) 
}

export default Card