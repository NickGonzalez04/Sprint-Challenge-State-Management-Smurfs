import react from 'react';


cont smurfCard = props => {
 return (
     <div>
         <h1>Smurf Name: {props.name}</h1>
         <h3> Age: {props.age}</h3>
         <p>Height: {props.height}</p>
     </div>
 )
}

export default smurfCard;