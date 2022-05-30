import React from 'react'
import Searth from "./Searth";

function Days() {
  return (
      <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                <div className='my-2 bg-white rounded'>
                <span><Searth/><h4>Speed</h4></span>
            <h3>5 days</h3>
            <p>to fill most roles,</p>
            <p>sometimes same day.</p>                
                </div>    

            </div>



            <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                <div className='my-2 bg-white rounded'>
                <span><Searth/><h4>Time Saved</h4></span>
            <h3>50+ hours</h3>
            <p>of engineering team time</p>
            <p>saved per hire on interviewing.</p>                
                </div>    
                      
            </div>



            <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                <div className='my-2 bg-white rounded'>
                <span><Searth/><h4>Retention</h4></span>
            <h3>97%</h3>
            <p>engagement</p>
            <p>success rate.</p>                
                </div>    
                      
            </div>

          
           

        </div>  
    </div>        
    </>
  )
}

export default Days