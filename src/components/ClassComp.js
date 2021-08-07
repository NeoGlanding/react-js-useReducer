import React, { Component } from 'react'

class Product extends Component {
    constructor() {
        super();
        this.state = {counter: 1}
    }

    clickListener() {
        this.setState((curState) => {
            return {counter : curState.counter + 1}
        })
    }

    render() {
        return (
            <React.Fragment>
                <p>Test Component</p>
                <p>Counter - {this.state.counter}</p>
                <button onClick={this.clickListener.bind(this)}>Add</button>
            </React.Fragment>
        )
    }
}

export default Product