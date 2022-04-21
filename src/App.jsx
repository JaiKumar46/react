import React from 'react'
import {BrowserRouter as Rou,Route,Routes} from "react-router-dom"
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'
import Login from './components/Login'
import Course from './components/Course'
import User from './components/Auth/User'
import Profile from './components/Auth/Profile'
import Myaccount from './components/Auth/Myaccount'
// import Navabar from './components/Navabar'
import Signup from './components/Signup'
import Contact from './components/Contact'

import Navabar from './components/Navabar'
const App = () => {
  return (
    <Rou>
        <Navabar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/> }/>
            <Route path='/:course' element={<Course/>} />
            <Route path='user' element={<User/>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='myaccount' element={<Myaccount/>}/>
            </Route>
        </Routes>
    </Rou>
  )
}

export default App