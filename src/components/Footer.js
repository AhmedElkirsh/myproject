import React, { Component } from 'react'
import * as icon from 'react-bootstrap-icons'
 

export default class Footer extends Component {
  render() {
    /* let GiveData = this.props.myFunction;
    GiveData("some useful data") */
    this.props.myFunction(1234);
        
    
    return (
        <div className='bg-dark p-4 text-white text-center '>
            <div className='d-flex justify-content-between'>
                <div>
                    <h5 className='text-uppercase'>contact us</h5>
                    <p> <icon.EnvelopeFill/>    ahmed.atef.2019@outlook.com</p>
                </div>
                <div>
                    <h5 className='text-uppercase'>stay connected</h5>
                    <div className='d-flex gap-3 justify-content-between'>
                        <div>
                            <icon.Facebook color='white' size={25}/>
                        </div>
                        <div>
                            <icon.Twitter color='white' size={25}/>
                        </div>
                        <div>
                            <icon.Github color='white' size={25}/>
                        </div>
                        <div>
                            <icon.Instagram color='white' size={25}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className='text-uppercase'>Excited?</h5>
                    <button className='py-2 px-4 rounded-1 no border ' type='button'href='#'>
                        <a className='text-uppercase font-weight-bold text-decoration-none text-dark text-small h6'>join us now</a>
                    </button>
                </div>
            </div>
            <div className='pt-2 border-top d-flex gap-5 justify-content-between mt-2'>
                <p className='fs-6'>© 2022 Ahmed Atef. All rights reserved.</p>
                <ul className="list-unstyled d-flex gap-3">
                    <li className='d-inline-block text-uppercase fs-6'><a href="#" className='text-decoration-none text-white'>privacy policy</a></li>
                    <li className='d-inline-block text-uppercase fs-6' href="#"><a href="#" className='text-decoration-none text-white'>FAQ</a></li>
                    <li className='d-inline-block text-uppercase fs-6' ><a href="#" className='text-decoration-none text-white'>How it works</a></li>                    
                </ul>
            </div>
        </div>
        
    )
  }
}
