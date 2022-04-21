import React from 'react'
import {useRoutes} from "react-router-dom"
import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import Login from './Login'
import Course from './Course'
import User from './Auth/User'
import Profile from './Auth/Profile'
import Myaccount from './Auth/Myaccount'
// import Navabar from './components/Navabar'
import Signup from './Signup'
import Contact from './Contact'

// import Navabar from './components/Navabar'



const Custom = () => {
    let JsRoutes=useRoutes([{
        path:"",
        element:<Home/>
    },
    {
        path:'login' ,
        element:<Login/>
    },
    {
        path:'about' ,
        element:<About/>
    },{
        path:'signup' ,
        element:<Signup/>
    },
    {
        path:'contact' ,element:<Contact/>
    },
    {
        path:'*' ,element:<NotFound/>
    },{
        path:'/:course' ,element:<Course/>
    },{
        path:'user' ,
        element:<User/>,
        children:[{
            path:'profile',
             element:<Profile/>
        },{
            path:'myaccount' ,element:<Myaccount/>
        }]
    }
    ]);
  return (
    <div>{JsRoutes}</div>
  )
}

export default Custom