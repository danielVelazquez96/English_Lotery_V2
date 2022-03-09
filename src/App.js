import { useState,useEffect } from 'react';
import './App.css'; //stylesheet

// Components
import Nav from './components/Nav/Nav.js'
import ReloadCard from './components/ReloadCard/ReloadCard.js'
import ShowCards from './components/ShowCards/ShowCards.js'
import CreateALotery from './components/CreateALotery/CreateALotery.js'

// Api
import getLotery from './api/getLotery.js'

const App=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState({template:false})

    const changePage=()=>{
      const newValue=!page.template;
      setPage({template:newValue})
    }

    useEffect(async()=>{
      setData(await getLotery());
    },[])

    return(
      <div>
        <Nav page={page} changePage={changePage}/>
        {
          page.template
          ?<div>
            <ReloadCard cards={data} />
            <ShowCards cards={data} />
           </div>
          :<CreateALotery/>
        }
      </div>
    )
}

export default App;
