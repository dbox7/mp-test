import React, { useContext, useState } from "react";

const TestLocationsList = () => {
  const [locationsList, setLocationsList] = useState([{}]);
  return (
    <>
      {locationsList.map((location, index) => (
        <TestLocationForm key={`location-${index}`} />
      ))}
      <button
        onClick={() => {
          setLocationsList([...locationsList, {}]);
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
};

export default TestLocationsList;