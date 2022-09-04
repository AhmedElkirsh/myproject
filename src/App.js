import React from 'react';
import "./App.css";
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import Counter from './components/Counter';

let GetDataFooter=(data)=>{
  console.log(data);
}

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Slider></Slider>
      <ProductSection></ProductSection>
      <Footer myFunction={GetDataFooter}></Footer>
      <Counter/>
    </>
  )
}

export default App;
