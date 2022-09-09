import React from 'react'
import CounterForContext from '../components/CounterForContext'
import ProductSection from '../components/ProductSection'
import Slider from '../components/Slider'
import CounterFun from '../components/CounterFun'
import FunctionNavbar from '../components/FunctionNavbar'
import CounterContextProvider from '../context/counterContext'
export default function TaskThree() {
  return (
    <CounterContextProvider>
       <FunctionNavbar/>
        <Slider/>
        <CounterForContext/>
        <CounterFun/>
        <ProductSection/>
    </CounterContextProvider>
  )
}
