import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { storeContext } from "../../store";
import Card from "../card/Card";
import { ICard } from "../../types";
import './testLocationList.css'

const TestLocationsList = observer(() => {
  const store = useContext(storeContext);
  const [locationsList, setLocationsList] = useState<ICard[]>([{locationID: 1, envID: 1, hint: ''}]);

  function handleDeleteClick(location:ICard):any {
    setLocationsList(locationsList.filter(item => item !== location)) 
  }

  function updateLocationsList(location: ICard, prop: string, value: any):void {
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
        {locationsList.map((location, index) => (
          <Card 
            key={`location-${index}`} 
            location={location} 
            handle={handleDeleteClick}
            updateLocationsList={updateLocationsList}
          />
        ))}

        <div className="buttonsBlock">
          <button
            className="button"
            onClick={() => {
              setLocationsList([...locationsList, { locationID: 1, envID: 1, hint: ''}]);
            }}
          >
            <i className="fa-solid fa-plus"></i> 
            Добавить тестовую локацию
          </button>

          <button
            className="button"
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