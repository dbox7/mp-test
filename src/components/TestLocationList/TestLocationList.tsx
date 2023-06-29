import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { storeContext } from "../../store";
import Card from "../card/Card";
import { ICard } from "../../types";

const TestLocationsList = observer(() => {
  const store = useContext(storeContext);
  const [locationsList, setLocationsList] = useState([{locationID: 1, envID: 1, hint: ''}]);

  function handleDeleteClick(location:ICard):any {
    setLocationsList(locationsList.filter(item => item !== location)) 
  }

  if (store.isLoaded) {
    return (
      <>
        {console.log('here', locationsList)}
        {locationsList.map((location, index) => (
          <Card 
            key={`location-${index}`} 
            location={location} 
            handle={handleDeleteClick}
          />
        ))}

        <button
          onClick={() => {
            setLocationsList([...locationsList, { locationID: 1, envID: 1, hint: '132131'}]);
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