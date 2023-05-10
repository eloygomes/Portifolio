// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Session01 from './Component/Session01'
import NavBar from './Component/NavBar'
import Session02 from './Component/Session02'
import Session03 from './Component/Session03'
import Session04 from './Component/Session04'
import Session05 from './Component/Session05'
import S6 from './Component/S6'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Session01/>
      <Session02/>
      <Session03/>
      <Session04/>
      <Session05/>
      <S6/>
    </>
  )
}

export default App
