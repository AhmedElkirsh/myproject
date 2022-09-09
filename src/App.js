import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute';
import AboutRoute from './Routes/AboutRoute';
import FinalNavbar from './components/FinalNavbar';
import CounterContextProvider from './context/counterContext';
import FunctionNavbar from './components/FunctionNavbar';
import TaskThree from './Routes/TaskThree';
import DetailedProject from './components/DetailedProject';
import ErrorRoute from './Routes/ErrorRoute';

/* let GetDataFooter=(data)=>{
  console.log(data);
} */

function App() {
  /* let [show, setShow] = useState(true)
  let hideContent=()=>{
        setShow(!show)
  } */
  
  return (
    <React.Fragment>
      <FinalNavbar/>
      <Routes>

        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<HomeRoute/>}/>
        <Route path="/AboutUs" element={<AboutRoute/>}/>
        <Route path="/shop" element={<ProductSection/>}/>
        <Route path="*" element={<ErrorRoute/>}/>
        <Route path="/shop/:id" element={<DetailedProject/>}/>
        <Route path="/TaskThree" element={<TaskThree/>}/>
  
      </Routes> 
      <Footer/>
    </React.Fragment>
  )
}

export default App;


