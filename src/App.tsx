import { store } from './store';
import TestLocationsList from './components/TestLocationList/TestLocationList';
import './style.css'

function App() {
  store.fetchData();
  return (
    <>
      <h1 className='title'>Тестовые локации</h1>
      <hr/>
      <TestLocationsList />
    </>
  );
}

export default App;
