import MyCard from './MyCard'
import '../components/ProductSection.css'
import React, { Component, useEffect, useState } from 'react'
import holder from '../assets/no-image-found.jpg'
import axios from 'axios'

export default function ProductSection(){
  
    /* let myFunction = ()=> {{
      console.log("Hello my function");
    }}  */

    useEffect(()=>{
      fetching()
    },[])

    let pageNO = 1;  // maybe adjustable
    let itemsToShow = 8;
    let skippedCards = [pageNO-1]*itemsToShow

    let fetching = async ()=>{
      /* let data = await fetch("https://api.escuelajs.co/api/v1/products")
      let products = await data.json() */
      let Mydata = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`)
      setProducts(Mydata.data)
      
    }
    
    let [products,setProducts]=useState([]) 
    

// every Json Object need a unique key for each of it's objects..usually called id.. so that virtual DOM can differenciate between nodes 

// if a unique value is not available we can use the map method's second parameter (element, [index]) to act like an id.. u can name an attribute called 'key' and assign 
// index value to it

    return (
      <div className='bg-light'>
        <h2 className='pt-4 text-center text-uppercase '>our Products</h2>

        <div className='section'>
          {

            products.map((product)=>(

              <MyCard 
                title={product.title}
                desc={product.description} 
                price={product.price}
                key={product.id}
                id={product.id}
                
                img={product.images[0]?product.images[0]:'https://placeimg.com/640/480/any?r=0.8807778235430017'} 

              />

            ))

          } 
        </div>
      </div>
    )   
}

