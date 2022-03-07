
import axios from 'axios';

const getLotery=async()=>{
    const urlApi=`http://localhost:5000/getData`;
    
      try{
          // Get data from the API
          const data=await axios.get(urlApi)
          .then(response => {
              return response.data;
          })
          .catch(console.log);

          return data
          
      }catch(e){
          console.error(e.message);
      }
  }

  export default getLotery