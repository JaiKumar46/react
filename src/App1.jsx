import React from 'react'
import {BrowserRouter as Rou,Route,Routes} from "react-router-dom"
import Custom from './components/Custom'

import Navabar from './components/Navabar'

const App1 = () => {
  return (
    <Rou>
        <Navabar/>
        <Custom/>
    </Rou>
  )
}

export default App1