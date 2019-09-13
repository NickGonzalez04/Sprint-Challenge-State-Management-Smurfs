import React from 'react';
import { SmurfCard } from './smurfCard';

const smurfList = props => {
    return (
        <div> 
            {props.smurfList.map(smurf => {<SmurfCard key={smurf.id} smurf={smurf}/>
            })}
        </div>
    )
}


export default smurfList;