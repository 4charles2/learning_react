import React from 'react';

//todo A suprimer uniquement present pour les test du tuto

const Greeter = ({whom}) => (
    <button onClick={() => console.log(`bonjour ${whom}`)}>
        Vas-y, clique !
    </button>
)

export default Greeter;