import React from 'react';
import './App.css';
import GithubClone from './features/GithubClone/GithubClone';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <GithubClone/>
    </div>
    </Provider>
  );
}

export default App;
