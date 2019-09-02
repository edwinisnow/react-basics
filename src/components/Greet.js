import React from 'react';

const Greet = (props) => {
    const { name, heroname } = props;
    return (<div>
        <h1>Functional Component {name} a.k.a {heroname}</h1>
        {props.children}
    </div>)
}

export default Greet;