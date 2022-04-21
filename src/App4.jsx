import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AuthProvider from './Api/ContextApi'
import Profile from './components/Profile'
const App4 = () => {
  return (
      <AuthProvider>
    <Router>
        <Routes>
            <Route>
                <Profile/>
            </Route>
        </Routes>
    </Router></AuthProvider>)
}

export default App4