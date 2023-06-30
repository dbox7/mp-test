import './style.css'
import TestLocationsList from './components/TestLocationList/TestLocationList';
import { store } from './store';

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
