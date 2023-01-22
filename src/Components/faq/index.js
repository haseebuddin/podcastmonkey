import React from 'react'
import { Nav } from 'react-bootstrap'
import Vectorsmart from "../../Images/Vectorsmart.png" 
import Accordian from "../../Components/accordion" 


const index = () => {
  return (
    <div style={{marginTop:"50px"}} className='container d-flex justify-content-center'>
    <div className='faqdiv container col-md-12 d-flex justify-content-center'>
    <div className=" col-md-2">
        
          </div>
          <div  className=" faqheading col-md-4">
            <h1>
              <b>

          Frequently Ask <br/>
              <span className="theme-primary-color "> Question</span>
           
              </b>
            </h1>
            <div className='d-flex justify-content-center'>

          <img src={Vectorsmart} alt="" width="200px"/>
            </div>
          </div>
          <div className=" col-md-6 acimage">
            <div style={{transform:"scale(0.8)"}}>

         <Accordian/>
            </div>
          </div>
          
    </div>
      
    </div>
  )
}

export default index