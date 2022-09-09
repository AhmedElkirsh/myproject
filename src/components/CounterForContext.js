import React, {useEffect, useState, useRef} from 'react'
import {useContext} from 'react'
import { CounterContext } from '../context/counterContext'
export default function CounterForContext() {


    /* let [counter, setCounter] = useState(0); */

  /*   let increase = ()=>{
        setCounter(counter+1)
    }
    let decrease = ()=>{
        setCounter(counter-1)
    } */
    
    
    
    /* useEffect(()=>{
        console.log("did amount");
    },[])

    useEffect(()=>{
        console.log(counter);
    },[counter]) */

    //clean-up effect
    /* useEffect(()=>{
        return function(){
          alert("hello")
        }
      },[]) */

      let datafromcontext= useContext(CounterContext)
     /*  console.log(datafromcontext); */
  return (
    
        <div className='d-flex flex-column p-3 justify-content-center align-items-center bg-light'>
            <h1>
                ContextCounter Affecting Cart
            </h1>
            <h2>
                counter is: {datafromcontext.counter} 
            </h2>
            
            <div className='d-flex gap-3'>
                <button className='btn btn-success px-3 py-2' onClick={datafromcontext.increase}>+</button>
                <button className='btn btn-danger px-3 py-2' onClick={datafromcontext.decrease}>-</button>
                
            </div>
        </div>
    
    
    
  )
}
