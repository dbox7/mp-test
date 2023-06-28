import React from 'react';
import OptionsList from '../Select/OptionsList';
import './card.css'

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

const Card = ({  }) => {
  return (
    <article className='card'>
      <section className="header">
        <div className="logo">
          <img></img>
          <h2>Тестовая локация</h2>
        </div>
        <button></button>
      </section>
      <section className="main">
        <div className="location">
          Локация
          <OptionsList options={data}/>
        </div>
        <div className="env">
          Среда
          <OptionsList options={data}/>
        </div>
        <div className="servers">
          Серверы
          <p></p>
        </div>
        <div className="prompt">
          Подсказка
          <input type="text" />
        </div>
      </section>
    </article>
  );
}

export default Card;