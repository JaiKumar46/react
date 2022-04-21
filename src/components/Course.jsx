import React from 'react'
import {useParams} from 'react-router-dom'
const Course = () => {
    let {course}=useParams();
  return (
    <div>{course}:<h1>{course}</h1></div>
  )
}

export default Course