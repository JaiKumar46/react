import React from 'react'
// import {useNavigate} from 'react-router-dom'
import {useHistroy} from 'react-router-dom'
const Login = () => {
  let his=useHistroy();
  let [state,setState]=useState(true)
  let handleNavi=()=>{
    if(state==true){
      his.push("/")
    }
  }
  return (
    <button onClick={handleNavi}></button>
  )
}

export default Login