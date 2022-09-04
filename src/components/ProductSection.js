import MyCard from './MyCard'
import '../components/ProductSection.css'
import React, { Component } from 'react'

export default class ProductSection extends Component {
  render() {
    /* let myFunction = ()=> {{
      console.log("Hello my function");
    }}  */

    let products=[
      {title:"Shoe", img:"https://api.lorem.space/image/shoes?w=150&h=150", insstock:4, desc:"complete the outfit"},
      {title:"Watch", img:"https://api.lorem.space/image/watch?w=150&h=150", insstock:5, desc:"Stylish and convenient"},
      {title:"Chair", img:"https://api.lorem.space/image/furniture?w=150&h=150", insstock:0, desc:"Comfy and cosy"},
      {title:"Another watch", img:"https://api.lorem.space/image/watch?w=150&h=150", insstock:7, desc:"Surpise!"},
      {title:"Drink", img:"https://api.lorem.space/image/drink?w=150&h=150", insstock:0, desc:"Ice Cold Drink"},
      {title:"Meal", img:"https://api.lorem.space/image/burger?w=150&h=150", insstock:9, desc:"Delicious burger"}
    ]

// every Json Object need a unique key for each of it's objects..usually called id.. so that virtual DOM can differenciate between nodes 

// if a unique value is not available we can use the map method's second parameter (element, [index]) to act like an id.. u can name an attribute called 'key' and assign 
// index value to it

    return (
      <div className='bg-light'>
        <h2 className='pt-4 text-center text-uppercase '>our Products</h2>

        <div className='section'>
        {

          products.map((product,index)=><MyCard title={product.title} img={product.img} insstock={product.insstock} desc={product.desc} key={index}/>)

        } 
        </div>
      </div>
    )   
  }
}
