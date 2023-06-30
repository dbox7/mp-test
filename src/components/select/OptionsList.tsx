import { FC } from 'react';
import { IEnv, ILocation, option } from '../../types';
import './optionsList.css';

const OptionsList: FC<option> = ( {options, location, handle, filter} ) => {
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
      {options.map((item: Partial<ILocation & IEnv>) => 
        <option key={item[id]} value={item[id]}>
          {item.name}
        </option>
      )}
    </select>
  );
};

export default OptionsList;
