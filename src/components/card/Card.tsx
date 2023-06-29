import React, { useContext, useState } from 'react';
import OptionsList from '../Select/OptionsList';
import './card.css'
import { storeContext } from '../../store';
import { observer } from 'mobx-react-lite';
import { ICard } from '../../types';

interface cardOptions {
  location: ICard,
  handle: any,
}

const Card: React.FC<cardOptions> = observer(({location, handle}) => {
  const store = useContext(storeContext);
  console.log('loc', location);
  
  const [locationID, setLocationID] = useState(1);
  const [envID, setEnvID] = useState(1);
  const [hint, setHint] = useState(location.hint);
  console.log('hint', hint);

  // const handleChangeLocation = (event:React.ChangeEvent<HTMLSelectElement>):void => {
  //   console.log('handler');
    
  //   const filteredEnvs:number[] = [];
  //   const filteredServers = store.servers.filter(server => {
  //     if (server.locationID === Number(event.target.value)) {
  //       filteredEnvs.push(server.envID);
  //     }
  //   });
  //   setEnvs([...envs].filter(env => filteredEnvs.includes(env.envID)))
  // }

  return (
    <article className='card'>
      <section className="header">
        <div className="logo">
          <img></img>
          <h2>Тестовая локация {location.envID}</h2>
        </div>
        <button onClick={() => {
          handle(location);
        }}></button>
      </section>
      <section className="main">
        <div className="location">
          Локация
          <OptionsList 
            options={store.locations}
            location={location}
            // handler={handleChangeLocation}
          />
        </div>
        <div className="env">
          Среда
          <OptionsList 
            options={store.envs}
            location={location}
          />
        </div>
        <div className="servers">
          Серверы
        </div>
        <div className="prompt">
          Подсказка
          <input type="text" value={hint} onChange={(event) => {
            location.hint = event.target.value;
            setHint(event.target.value);
          }}/>
        </div>
      </section>
    </article>
  );
});

export default Card;