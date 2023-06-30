import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { Store, storeContext } from "../../store";
import { ICard, updateValue } from "../../types";
import Card from "../Card/Card";
import './testLocationList.css'

const TestLocationsList:FC = observer(() => {
  const store = useContext<Store>(storeContext);
  const [locationsList, setLocationsList] = useState<ICard[]>([{locationID: 1, envID: 1, hint: ''}]);

  function handleDeleteClick(location:ICard):void {
    setLocationsList(locationsList.filter(item => item !== location)) 
  }

  function updateLocationsList(location: ICard, prop: string, value: updateValue):void {
    setLocationsList(locationsList.map(item => {
      if (item === location) {
        item[prop] = value;
      }
      return item;
    }))
  }

  if (store.isLoaded) {
    return (
      <>
        {locationsList.map((location: ICard, index: number) => (
          <Card 
            key={`location-${index}`}
            idx={index} 
            location={location} 
            handle={handleDeleteClick}
            updateLocationsList={updateLocationsList}
          />
        ))}

        <div className="buttonsBlock">
          <button className="button"
            onClick={() => {
              setLocationsList([...locationsList, { locationID: 1, envID: 1, hint: ''}]);
            }}
          >
            <i className="fa-solid fa-plus"></i> 
            Добавить тестовую локацию
          </button>

          <button className="button"
            onClick={() => {
              console.log(locationsList);
            }}
          >
            <i className="fa-solid fa-terminal"></i>
            Вывести результат в консоль
          </button>
        </div>
      </>
    );
  } else {
    return <h1 className="loading">Идет загрузка локаций...</h1>
  }
});

export default TestLocationsList;