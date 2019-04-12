import React from 'react';

import Smurf from './Smurf';

const SmurfsList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf
                    key={Date.now()}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            ))}
        </div>
    )
}

export default SmurfsList;