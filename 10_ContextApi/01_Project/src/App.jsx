import './App.css'
import Login from './Components/Login'
import User from './Components/User'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <User />
    </UserContextProvider>
  )
}

export default App
