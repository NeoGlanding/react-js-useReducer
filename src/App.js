import React from 'react';
import Counter from './components/counter';
import './App.css';
import TestContext from './state/test-context';
import Product from './components/ClassComp';

const x = 10;

function App() {
  return (
    <React.Fragment>
      <TestContext.Provider value={
        {isLogged: 'sa',
        x
        }
        }>
        <Counter />
        <Product />
      </TestContext.Provider>
    </React.Fragment>
  );
}

export default App;
