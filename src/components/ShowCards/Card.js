import { Component } from "react";
import './Card.css'

class Card extends Component{

    render(){
        const {name,url,number}=this.props
        
        return(
            <div className="showContainer-card">
                    <img src={url} alt="img" />
                    <h2 >{name}</h2>
                    <span>{number}</span>
            </div>
        )
    }
}

export default Card