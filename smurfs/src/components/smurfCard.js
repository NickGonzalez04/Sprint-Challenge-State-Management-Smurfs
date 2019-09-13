import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from '../components/context/smurfContext';


 const SmurfCard = () => {
    const { newSmurf } = useContext(SmurfContext);
 return (
     <div>
         {newSmurf.map(smurf => (
             <div>
               <h1>Smurf Name: {smurf.name}</h1>
               <h3> Age: {smurf.age}</h3>
               <p>Height: {smurf.height}</p>
            </div>
         ))}
        
     </div>
 )
}

export default SmurfCard;
