import './App.css';
import Login from './Components/Login/Login';
import { Router } from '@reach/router';
import { StateContext, Store } from './globals/globalStore.reducer';
import Confirmation from './Components/Confirmation/Confirmation';

function App() {
  const [state, dispatch] = Store();
  return (
    <div className='App'>
      <StateContext.Provider value={{ state, dispatch }}>
        <Router style={{ height: '100%', overflow: 'hidden' }}>
          <Login path='/' />
          <Confirmation path='confirmation' />
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
