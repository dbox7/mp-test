import React from 'react';
import Location from './components/location/Location';
import './style.css'

const data = [
  {
    envID: 1,
    name: 'a',
  },
  {
    envID: 2,
    name: 'b',
  }
]

function App() {
  return (
    <div>
      <h1>Тестовые локации</h1>
      <hr></hr>
      <Location />
    </div>
  );
}

export default App;
