import Carousel from 'react-bootstrap/Carousel';
import landscape1 from '../assets/landscape1.jpg'
import landscape2 from '../assets/landscape2.jpg'
import landscape3 from '../assets/landscape3.jpg'
import './Slider.css'
import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={landscape1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={landscape2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={landscape3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
