import React from 'react';
import './style.css'
import Card from './components/card/Card';

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
      <Card />
    </div>
  );
}

export default App;
