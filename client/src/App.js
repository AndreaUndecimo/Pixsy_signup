import './App.css'
import Login from './Components/Login/Login'
import { StateContext, Store } from './globals/globalStore.reducer'

function App() {
  const [state, dispatch] = Store()
  return (
    <div className='App'>
      <StateContext.Provider value={{ state, dispatch }}>
        <Login />
      </StateContext.Provider>
    </div>
  )
}

export default App
