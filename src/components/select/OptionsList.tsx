import React from 'react';
import './optionsList.css';
import { Location, Env } from '../../store';

// interface ILocations {
//   locationID: number;
//   name: string;
// }

// interface IEnvs {
//   envID: number;
//   name: string;
// }

interface option {
  options: Partial<Location & Env>[];
}

const OptionsList: React.FC<option> = ( {options} ) => {
  const id = Object.hasOwn(options[0], 'envID') ? 'envID' : 'locationID';
  return (
    <select className='optionList'>
      {options.map(item => 
        <option key={item[id]}>
          {item.name}
        </option>
      )}
    </select>
  );
}

export default OptionsList;
