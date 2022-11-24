
import React from 'react';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';

import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import ModalGameOver from './components/ModalGameOver';

const store = createStore(reducers)

function App() {

  //  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ttrx</h1>
        </header>
        <div className="game">
          <div className='d-flex flex-column'>
            <NextBlock shape="nextShape1" />
            <NextBlock shape="nextShape2" />
          </div>
          <GridBoard />
          <ScoreBoard />
          <ModalGameOver />
        </div>
      </div>
    </Provider>
  );
}

export default App;
