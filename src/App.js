import { useState,useEffect } from 'react';
import './App.css'; //stylesheet

// Components
import Nav from './components/Nav/Nav.js'

//Pages 
import Template from './pages/Template';
import CreateALotery from './pages/CreateALotery.js'

// Api
import getLotery from './api/getLotery.js'

const App=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState('Template')

    const changePage=(NewPage)=>{
      setPage(NewPage)
    }

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
