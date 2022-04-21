import React,{useRef} from 'react'
import Input from './Input'
const ForwardRef = () => {
    let InputRef=useRef();
    let handleClick=()=>{
        InputRef.current.placeholder="Enter the text";
        InputRef.current.style.background="red"
    }
  return (
    <div>
        <Input ref={InputRef} handleClick={handleClick} />
    </div>
  )
}

export default ForwardRef