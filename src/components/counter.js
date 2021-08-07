import React, { useContext} from 'react';
import { CounterContext } from '../state/counter-context';

function Counter() {
    const ctx = useContext(CounterContext)
    return (
        <React.Fragment>
            <h1>{ctx.x}</h1>
            <h1>First Counter - {ctx.counterState.firstValue}</h1>
            <h1>Second Counter - {ctx.counterState.secondValue}</h1>
            <button onClick={() => ctx.dispacth({type: 'increment1'})}>Increment 1</button>
            <button onClick={() => ctx.dispacth({type: 'increment2'})}>Increment 2</button>
            <button onClick={() => ctx.dispacth({type: 'decrement1'})}>Decrement 1</button>
            <button onClick={() => ctx.dispacth({type: 'decrement2'})}>Decrement 2</button>
        </React.Fragment>
    )
}

export default Counter
