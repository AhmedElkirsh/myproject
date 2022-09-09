import React from 'react'
import aboutusimage from '../assets/Aboutus.svg'

export default function AboutUsSection() {
  return (
    <div className='d-flex gap-5 justify-content-center'>
        <div className='' style={{height:500, aspectRatio:1}}>
            <img src={aboutusimage} className=''/>
        </div>
        <div className='d-flex justify-content-center flex-column gap-3 w-25 '>
           <div className='h2'>
                About Us
           </div>
           <div className='fs-5 '>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lectus vitae enim cursus gravida. Suspendisse lobortis ante ante, nec consequat sem rutrum tristique. Nunc pulvinar ut sapien vitae egestas. Praesent laoreet eget mauris a egestas. Nam viverra nulla nec felis tincidunt posuere. Phasellus pharetra et augue eget malesuada. 
           </div>
        </div>
    </div>
    
        
  )
}
