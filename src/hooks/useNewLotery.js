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
        console.log(newLotery);
    }

    const resetNewCard=()=>{
        setNewLotery(initial);
    }

    return [newLotery,addCard,resetNewCard]
}

export default useNewLotery
