import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { storeContext } from "../../store";
import Card from "../card/Card";
import { ICard } from "../../types";

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

        <button
          onClick={() => {
            setLocationsList([...locationsList, { locationID: 1, envID: 1, hint: ''}]);
          }}
        >
          Добавить тестовую локацию
        </button>

        <button
          onClick={() => {
            console.log(locationsList);
          }}
        >
          Вывести результат в консоль
        </button>
      </>
    );
  } else {
    return <h1>Идет загрузка локаций...</h1>
  }
});

export default TestLocationsList;