import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componentes/NavBar/navbar'
import { Saludo } from './Componentes/NavBar/ItemListContainer/itemlistcontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < Navbar />
      < Saludo name="tutor"/>
    </div>
  )
}

export default App

