import React from 'react';

const Greet = (props) => {
    return (<div>
        <h1>Functional Component {props.name} a.k.a {props.heroname}</h1>
        {props.children}
    </div>)
}

export default Greet;