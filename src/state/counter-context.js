import React, {useReducer} from 'react'

export const CounterContext = React.createContext({
    x: 'd',
    test: true,
    counterState: () => {},
    dispatch: () => {}
});

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
export const  CounterContextProvider = (props) => {
    const [counterState, dispacth] = useReducer(callback, initialState);
    return (
        <CounterContext.Provider value={
            {
                x: 10,
                counterState,
                dispacth
            }
        }>
            {props.children}
        </CounterContext.Provider>
    )
}
