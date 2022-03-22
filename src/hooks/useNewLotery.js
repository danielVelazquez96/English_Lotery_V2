import { useState } from "react";
import useNewCard from "./useNewCard";

const useNewLotery=(initial)=>{
    // { Initial Prototype
    //     number: 0,
    //     name:'',
    //     url:'',
    // }
    
    
    const [newLotery,setNewLotery]=useState(initial);
    


    const addCard=({name,url})=>{
        const number=newLotery.length+1;
        setNewLotery(newLotery=>[...newLotery,{
            name:name,
            url: url,
            number: number
        }])

    }

    const resetNewCard=()=>{
        setNewLotery({
            number:'1',
            name:'',
            urlImg:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
            });
    }

    return [newLotery,addCard,resetNewCard]
}

export default useNewLotery
