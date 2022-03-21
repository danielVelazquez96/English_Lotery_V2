import { useState } from "react";

const useNewCard=(initial)=>{
    // { Initial Prototype
    //     number:'1',
    //     name:'',
    //     img:'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg',
    // }
    const [newCard,setNewCard]=useState(initial);

    const handleChange=({target} )=>{
        const text=target.value;
        // filters
        if(text.length > 18) return null;
        if(text.split(" ").length > 2) return null;

        setNewCard({
            ...newCard,
            [target.name]:text,
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
        setNewCard(initial);
    }

    return [newCard,handleChange,handleChangeFile,resetNewCard]
}

export default useNewCard