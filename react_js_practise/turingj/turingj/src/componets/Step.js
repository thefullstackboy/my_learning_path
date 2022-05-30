import React from 'react'
import Searth from './Searth'


function Step() {
  return (
    <>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6 mt-5'>
                <img src={process.env.PUBLIC_URL + "./image/step21.png"}/>
              </div>

              <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6 mt-5'>
               <h1>Why are the best developers</h1>
               <h1>joining Turing? Because they</h1>
               <h1>want careers, not gigs.</h1>
               <p><Searth/>Vetted once, eligible for life</p>
               <p><Searth/>Exclusive Turing developer community</p>
               <p><Searth/>Income stability thanks to 99% rematch rate</p>

               <li className="nav-item"><a className="nav-link"><button className="btn btn-primary">Apply for Jobs</button></a></li>
              </div>       
          </div>
      </div> 

    </>
  )
}

export default Step