import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'John'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA  getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = (params) => {
        this.setState({
            name: 'John Doe'
        })
    }

    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />

            </div>
        )
    }
}

export default LifeCycleA
