import React from 'react';
import './optionsList.css';
import { ILocation, IEnv, ICard } from '../../types';
import { observer } from 'mobx-react-lite';
interface option {
  options: Partial<ILocation & IEnv>[],
  //handler?: React.ChangeEventHandler<HTMLSelectElement>;
  location: ICard
}

const OptionsList: React.FC<option> = ( {options, location} ) => {
  console.log()
  const id = Object.hasOwn(options[0], 'envID') ? 'envID' : 'locationID';
  return (
    <select 
      className='optionList' 
      onChange={(event) => {
        console.log(location[id]);
        location[id] = Number(event.target.value);
        console.log(location[id]);
      }}
    >
      {options.map(item => 
        <option key={item[id]} value={item[id]}>
          {item.name}
        </option>
      )}
    </select>
  );
};

export default OptionsList;
