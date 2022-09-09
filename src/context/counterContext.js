import { createContext } from "react";
import React, {useState} from 'react'
export let CounterContext = createContext()






export default function CounterContextProvider(props) {
    
    let [counter,setCounter] = useState(0)
    let increase=()=>{
        setCounter(counter+1);
    }
    let decrease=()=>{
        setCounter(counter-1);
    }
  return (
    <CounterContext.Provider value={{counter, increase, decrease}}>
        {props.children}
    </CounterContext.Provider>
  )
}
