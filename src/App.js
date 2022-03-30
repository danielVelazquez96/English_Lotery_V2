import { useState,useEffect,ReactFragment } from 'react';
import Nav from './components/Nav/Nav.js'
import Template from './pages/Template';
import CreateALotery from './pages/CreateALotery.js'
import getLotery from './api/getLotery.js'
import { Route,Routes} from 'react-router-dom';


const App=()=>{
    const[data,setData]=useState([])

    useEffect(async()=>{
      setData(await getLotery());
    },[])

    return(
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Template data={data} />} /> 
          <Route path='/Template' element={<Template data={data} />} /> 
          <Route default path='/Create-A-Lotery' element={<CreateALotery/>} /> 
        </Routes>
      </>
    )
}

export default App;
