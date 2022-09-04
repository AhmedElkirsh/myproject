import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import holder1 from '../assets/holder.jpg'
import React, { Component } from 'react'

export default class MyCard extends Component {

  /* static defaultProps={
    title:"unknown Product",
    desc:"unkown Description"
  }; */


  render() {

    let {title,desc,insstock,img}=this.props // check destructuring

    return (
        this.props.title
        &&
        <Card style={{ width: '18rem' }} className='bg-white'>
        <Card.Img variant="top" src={this.props.img} className='p-3'/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text> 
          <Button variant={this.props.insstock? "warning":"secondary"} onClick={this.props.funchandeler}
             className={this.props.insstock? "":"disabled"}>
              {this.props.insstock? "Buy Now":"Not Available"}
          </Button>
        </Card.Body>
        {/* {this.props.children} */}
      </Card>
    )

  }
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
