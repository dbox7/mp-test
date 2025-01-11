import { FC } from 'react';
import { IEnv, ILocation, option } from '../../types';
import './select.css';

const OptionsList: FC<option> = ( {options, location, handle, filter} ) => {
  const id = Object.hasOwn(options[0], 'envID') ? 'envID' : 'locationID';
  return (
    <select 
      className='optionList'
      value={location[id]} 
      onChange={(event) => {
        handle(location, id, Number(event.target.value));
        filter(location.locationID, location.envID);
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
