import { Component } from 'react';
import './App.css'; //stylesheet
import axios from 'axios';

// Components
import Nav from './components/Nav/Nav.js'
import ReloadCard from './components/ReloadCard/ReloadCard.js'
import ShowCards from './components/ShowCards/ShowCards.js'

class App extends Component{
    state={
      data:[]
    }

    getData=async()=>{
      const urlApi=`http://localhost:5000/getData`;
        try{
            // Get data from the API
            const data=await axios.get(urlApi)
            .then(response => {
                return response.data;
            })
            .catch(console.log);

            this.setState({data:data});
            
        }catch(e){
            console.error(e.message);
        }
    }

    componentDidMount(){
      this.getData()
    }

    render(){
      return(
        <div>
          <Nav/>
          <ReloadCard cards={this.state.data} />
          <ShowCards cards={this.state.data} />
        </div>
        
      )
    }
    

}



export default App;
