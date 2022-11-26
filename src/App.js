
import React from 'react';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';
import './lego.scss';
import Game from './components/Game';



const store = createStore(reducers)

function App() {
  //  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <Game />
      </div>
    </Provider>
  );
}

export default App;
