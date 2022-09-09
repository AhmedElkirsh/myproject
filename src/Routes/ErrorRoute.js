import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import error from '../assets/ErrorImage.svg'

export default function ErrorRoute() {
    let navigate = useNavigate()
    useEffect(() => {
      setTimeout(()=>{
        navigate('/home')
      },4000)
    }, [])
    



  return (
    
        <div>
          <img src={error}/>
        </div>
      
   
  )
}
