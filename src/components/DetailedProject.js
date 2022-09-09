import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {AddtoNavCount} from '../store/CounterSlice'




export default function DetailedProject() {

    let [ProductCount, setProductCount]= useState(1)
  let increaseProductAmount=()=>{

    setProductCount(ProductCount +1)
    
  }

  let decreaseProductAmount=()=>{

    if (ProductCount ==1) {

    } else {
      setProductCount(ProductCount -1)
    }
    
  }

  let dispatch = useDispatch()  
  let submitAmountHandeler = async ()=>{

    dispatch(AddtoNavCount(ProductCount))
    setProductCount(1)

  }
    
    let [product,setProduct]=useState([]) 
    
    useEffect(()=>{
        fetching()
    },[])

    let {id} = useParams()
    let fetching = async ()=>{

        let data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        let Mydata = await data.json()
        setProduct(Mydata)
    }
    

    return (
    <div className='d-flex gap-3'>
        <div>
            <img  src= {product.images} className='m-3'/>
        </div>
        <div className='d-flex justify-content-between flex-column'>
            <div className='d-flex gap-4 flex-column m-3'>
                <div className='h1 700'>
                    {product.title} 
                </div>            
                <div>
                    <div className='h4 '>
                        Description
                    </div>
                    {product.description} 
                </div>
                <div className='fs-4'>
                    <span className='h4 pe-2 '>
                        Price:
                    </span>
                    ${product.price} 
                </div>
                <div className='d-flex'>
                    <Button variant='success' className='text-uppercase rounded-0 my-1' onClick={increaseProductAmount}> 
                    +
                    </Button>
                    <Button variant='success' className='text-uppercase rounded-0 w-25 my-1' onClick={submitAmountHandeler}>
                    add to cart {ProductCount!=1? <span className="badge text-success bg-white">{ProductCount}</span>:""}
                    </Button>
                    <Button variant='success' className='text-uppercase rounded-0 my-1' onClick={decreaseProductAmount}>
                    -
                    </Button>
                </div>
            </div>
            <Link to={'/shop'} className='btn btn-outline-success rounded-0 m-3 w-25'>
                Back to shop
            </Link>
        </div>
        
    </div>
  )
}
