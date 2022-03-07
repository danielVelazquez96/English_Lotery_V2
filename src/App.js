import { useState,useEffect } from 'react';
import './App.css'; //stylesheet

// Components
import Nav from './components/Nav/Nav.js'
import ReloadCard from './components/ReloadCard/ReloadCard.js'
import ShowCards from './components/ShowCards/ShowCards.js'

// Api
import getLotery from './api/getLotery.js'

const App=()=>{
    const [data,setData]=useState([])


    useEffect(async()=>{
      setData(await getLotery())
    },[])

    return(
      <div>
        <Nav/>
        <ReloadCard cards={data} />
        <ShowCards cards={data} />
      </div>
    )
}

export default App;
