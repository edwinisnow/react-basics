import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // Approach 1
        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome User</div>)
        // } else {
        //     return (<div>Welcome Guest</div>)
        // }

        // Approach 2
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome User</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )

        // Approach 3
        // return this.state.isLoggedIn ? (<div>Welcome User</div>) : (<div>Welcome Guest</div>)

        // Approach 4
        return this.state.isLoggedIn && <div>Welcome User</div>



        // return (
        //     <div>
        //         <div>Welcome User</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
