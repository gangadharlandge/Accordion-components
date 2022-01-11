import React, {useState} from 'react';
import {data} from './api';
import "./app.css"
import Accordion from './Accordion';
function App() {
   
   const[content, setContent] = useState(data)
   

  return (
    
    <div className='wrapper'>
     {
       content.map( (currEle, index) => {
        return(
          <div className="card" key={index}>
            <Accordion {...currEle}/>
            
        </div>
        )
       })
     }
        
    </div>
  );

}
export default App;