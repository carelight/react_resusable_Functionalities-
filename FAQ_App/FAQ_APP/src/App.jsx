import { useState } from 'react'

import './App.css'
import FAQmain from './Components/FAQmain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
       <h1>Frequently Asked Questions</h1>
    <FAQmain/>
    </div>
       
    </>
  )
}

export default App
