import React from 'react';
import { smurfContext } from '../components/context/smurfContext';


export const smurfCard = () => {
    const { smurf } = useContext(smurfContext)
 return (
     <div>

         {smurf.map(smurf => (

             <div>
               <h1>Smurf Name: {smurf.name}</h1>
               <h3> Age: {smurf.age}</h3>
               <p>Height: {smurf.height}</p>
            </div>
         ))}
        
     </div>
 )
}

