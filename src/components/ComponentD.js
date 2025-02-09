import React, { Component } from 'react'
import ComponentE from './ComponentE';
import UserContext from './UserContext';

class ComponentD extends Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                Component D context {this.context}
                <ComponentE />
            </div>
        )
    }
}

// ComponentD.contextType = UserContext;

export default ComponentD
