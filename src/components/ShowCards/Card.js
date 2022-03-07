
import './Card.css'

const Card=({name,url,number})=>{
    return(
        <div className="showContainer-card">
                <img src={url} alt="img" />
                <h2 >{name}</h2>
                <span>{number}</span>
        </div>
    )
    
}

export default Card