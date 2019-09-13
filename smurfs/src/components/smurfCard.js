import React from 'react';


export const smurfCard = props => {
 return (
     <div>
         <h1>Smurf Name: {props.name}</h1>
         <h3> Age: {props.age}</h3>
         <p>Height: {props.height}</p>
     </div>
 )
}

