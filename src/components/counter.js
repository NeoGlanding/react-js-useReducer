import React, {useReducer, useContext} from 'react';
import TestContext from './../state/test-context'

let initialState = {
    firstValue: 0,
    secondValue: 0
};
const callback = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {...state ,firstValue: state.firstValue + 1}
        case 'increment2':
            return {...state ,secondValue: state.secondValue + 1}
        case 'decrement2':
            return {...state ,secondValue: state.secondValue - 1}
        case 'decrement1':
            return {...state ,firstValue: state.firstValue - 1}
        default:
            break;
    }
}

function Counter() {
    const [counterState, dispacth] = useReducer(callback, initialState);
    const ctx = useContext(TestContext)
    return (
        <React.Fragment>
            <h1>{ctx.isLogged}</h1>
            <h1>First Counter - {counterState.firstValue}</h1>
            <h1>Second Counter - {counterState.secondValue}</h1>
            <button onClick={() => dispacth({type: 'increment1'})}>Increment 1</button>
            <button onClick={() => dispacth({type: 'increment2'})}>Increment 2</button>
            <button onClick={() => dispacth({type: 'decrement1'})}>Decrement 1</button>
            <button onClick={() => dispacth({type: 'decrement2'})}>Decrement 2</button>
            <button onClick={() => dispacth('reset')}>Reset</button>
        </React.Fragment>
    )
}

export default Counter
