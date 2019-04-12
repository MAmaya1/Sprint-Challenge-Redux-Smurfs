import React from 'react';

import Smurf from './Smurf';

const SmurfsList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf
                    key={Math.random()}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            ))}
        </div>
    )
}

export default SmurfsList;