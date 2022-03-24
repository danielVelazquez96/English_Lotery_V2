import { useState,useEffect } from 'react';
import './App.css'; //stylesheet
import Nav from './components/Nav/Nav.js'
import Template from './pages/Template';
import CreateALotery from './pages/CreateALotery.js'
import getLotery from './api/getLotery.js'
import usePage from './hooks/usePage';


const App=()=>{
    const[page,changePage]=usePage('CreateALotery')
    const[data,setData]=useState([])

    useEffect(async()=>{
      setData(await getLotery());
    },[])

    return(
      <div>
        <Nav page={page} changePage={changePage}/>
        {
          page==='Template'
            ?<Template data={data} />
            :page==='CreateALotery'
              ?<CreateALotery/>
              :null
        }
      </div>
    )
}

export default App;
