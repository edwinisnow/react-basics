import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'John'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB  getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB Render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
