import Carousel from 'react-bootstrap/Carousel';
import sale from '../assets/SALE.jpg'
import summer from '../assets/summer.jpg'
import fashion from '../assets/fashion.jpg'
import './Slider.css'
import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
        <Carousel className='Carousel'>
        <Carousel.Item className='Carousel-item'>
          <img
            className="d-block sliderimg w-100"
            src={sale}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block sliderimg w-100"
            src={summer}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderimg w-100"
            src={fashion}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
