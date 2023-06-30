import React from 'react';
import './optionsList.css';
import { option } from '../../types';

const OptionsList: React.FC<option> = ( {options, location, handle, filter} ) => {
  const id = Object.hasOwn(options[0], 'envID') ? 'envID' : 'locationID';
  return (
    <select 
      className='optionList'
      value={location[id]} 
      onChange={(event) => {
        handle(location, id, Number(event.target.value))
        if (filter) {
          filter(location.locationID);
        }
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
