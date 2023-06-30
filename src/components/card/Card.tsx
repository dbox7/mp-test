import React, { useContext, useEffect, useState } from 'react';
import OptionsList from '../Select/OptionsList';
import './card.css'
import { storeContext } from '../../store';
import { cardOptions } from '../../types';

const Card: React.FC<cardOptions> = ({location, handle, updateLocationsList}) => {
  
  const store = useContext(storeContext);

  const [filteredServers, setFilteredServers] = useState(store.servers.map(server => server.name).join(','));
  const [filteredEnv, setFilteredEnv] = useState(store.envs);

  function filter(id:number) {
    const [newEnvs, newServers] = store.filter(id);
    setFilteredEnv(newEnvs);
    setFilteredServers(newServers.map(server => server.name).join(', '));
    location.envID = newEnvs[0].envID;
  }

  useEffect(() => {
    filter(location.locationID);
  },[location.locationID])

  return (
    <article className='card'>
      <section className="header">
        <div className="logo">
          <h2>Тестовая локация</h2>
        </div>
        <button  
          className='closeButton'
          onClick={() => {
          handle(location);
        }}><i className="fa-solid fa-trash-can fa-lg" style={{color: '#cb0606'}}></i></button>
      </section>
      <section className="main">
        <div className="location">
          <strong className='desc'>Локация</strong>
          
          <OptionsList 
            options={store.locations}
            location={location}
            handle={updateLocationsList}
            filter={filter}
          />
        </div>
        <div className="env">
          <strong >Среда</strong>
          
          <OptionsList 
            options={filteredEnv}
            location={location}
            handle={updateLocationsList}
          />
        </div>
        <div className="servers">
          <strong >Серверы</strong>
          <span>{filteredServers}</span>
        </div>
        <div className="prompt">
          <strong>Подсказка</strong>
          <input type="text" value={location.hint} onChange={(event) => {
            updateLocationsList(location, 'hint', event.target.value)
          }}/>
        </div>
      </section>
    </article>
  );
};

export default Card;