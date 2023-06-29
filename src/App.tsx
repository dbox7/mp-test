import React, { useContext } from 'react';
import './style.css'
import TestLocationsList from './components/TestLocationList/TestLocationList';
import { store } from './store';

function App() {
  store.fetchData();
  return (
    <div>
      <h1>Тестовые локации</h1>
      <hr/>
      <TestLocationsList />
    </div>
  );
}

export default App;
