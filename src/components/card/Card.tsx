import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import OptionsList from '../Select/Select';
import { Store, storeContext } from '../../store';
import { IEnv, cardOptions } from '../../types';
import './card.css'

const Card: FC<cardOptions> = ({idx, location, handle, updateLocationsList}) => {
  
  const store = useContext<Store>(storeContext);

  const [filteredServers, setFilteredServers] = useState<string>(store.servers.map(server => server.name).join(','));
  const [filteredEnv, setFilteredEnv] = useState<IEnv[]>(store.envs);

  function filter(locId: number, envId: number, flag?: boolean):void {
    const [newEnvs, newServers] = store.filter(locId, envId);
    setFilteredEnv(newEnvs);
    setFilteredServers(newServers.map(server => server.name).join(', '));
    //location.envId = newEnvs[0].envID;    
  }

  useEffect(() => {
    filter(location.locationID, location.envID);
  },[location.locationID, handle])

  return (
    <article className='card'>
      <section className="header">
        <div className="logo">
          <i className="fa-solid fa-vial fa-xl"></i>
          <h2>Тестовая локация {idx + 1}</h2>
        </div>
        <button className='closeButton'
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
            filter={filter}
          />
        </div>
        <div className="servers">
          <strong >Серверы</strong>
          <span>{filteredServers}</span>
        </div>
        <div className="prompt">
          <strong>Подсказка</strong>
          <input type="text" value={location.hint} onChange={(event: ChangeEvent<HTMLInputElement>) => {
            updateLocationsList(location, 'hint', event.target.value)
          }}/>
        </div>
      </section>
    </article>
  );
};

export default Card;