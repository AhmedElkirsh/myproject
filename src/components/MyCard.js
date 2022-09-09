import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState}  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AddtoNavCount} from '../store/CounterSlice'
import "./MyCard.css"
import { Link } from 'react-router-dom'


export default function MyCard(props) {

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
    

    return (
        (props.title && props.img)
        &&
        <Card style={{ width: '18rem' }} className='bg-white rounded-0 '>
        <Card.Img variant="top" src={props.img} className='rounded-0'/>
        <Card.Body className='d-flex flex-column'>
          <div className='d-flex justify-content-between line mb-2'>
            <Card.Title>{props.title}</Card.Title>
            <p className='ps-2'>${props.price}</p>
          </div>
          <Card.Text id="text">
            {props.desc}
          </Card.Text> 
          <div className='mt-auto'>
            <Link to={`/shop/${props.id}`} className='btn btn-outline-success text-uppercase rounded-0 w-100 my-1'>
                check product
            </Link>
            <div className='d-flex'>
              <Button variant='success' className='text-uppercase rounded-0 my-1' onClick={increaseProductAmount}> 
              +
              </Button>
              <Button variant='success' className='text-uppercase rounded-0 w-75 my-1' onClick={submitAmountHandeler}>
                add to cart {ProductCount!=1? <span className="badge text-success bg-white">{ProductCount}</span>:""}
              </Button>
              <Button variant='success' className='text-uppercase rounded-0 my-1' onClick={decreaseProductAmount}>
              -
              </Button>
          </div>
          </div>  
          
          
        </Card.Body>
        {props.children}
      </Card>
    )

  
}
//`text-white ${this.props.bgInfo? this.props.bgInfo:"bg-primary"}`//
// static => default attributes of something

// u use (condition)? true event:false event to manipulate values
// of attributes like classes or innerHTML

// u need to put any javascript code between curly brackets

// if un want to do an if statement inside {} use backtick and $--{}

// to make incomplete objects no appear use 
// (true statement (something nessecary like title))&& the rest
// the component

// u can pass a function like attributes.. declare the function in
// parent component then add the name of the function as the value 
// of a new attribute (name doesn't matter) of the child component
// u declare a function inside a class by placing it inside
// render(){} and before return; ..as return returns only 1 thing

// u can use destructuting to type one word 
// instead of this.prop.AttributeName

// u can use this.props.children to implement rare appearances of
// some elements within a repeated component.. u add the children
// between a component's opening and closing tags

// 
