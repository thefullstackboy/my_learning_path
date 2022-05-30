import React from 'react'

function Clouerd() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                <div className='my-2 bg-white rounded'>
                <img src={process.env.PUBLIC_URL + "./image/mgni.png"} className="ml-5" height={200} width={260} />
                <p><b>Tailored to your<br/> requirements</b></p>
                <ul>
                    <li>Role</li>
                    <li>Tech Stack</li>
                    <li>Seniority Level</li>
                </ul>
                </div>          
            </div>


            <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4 mt-5'>
            <h4>Our Intelligent Talent Cloud Platform Leverages</h4>
            <div className='mt-5'>
                <ul>
                    <li><a href='#'>Global Sourcing</a></li>
                    <li><a href='#'>Intelligent Vetting</a></li>
                    <li><a href='#'>Extensive Matching</a></li>
                    <li><a href='#'>HR/Payments Compliance</a></li>
                    <li><a href='#'>Automated On-The-Job Quality Control</a></li>
                </ul> 
            </div>
 

            </div>
             <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                <div className='my-2 bg-white rounded'>
                <img src={process.env.PUBLIC_URL + "./image/ctable.png"} className="ml-5" height={200} width={260} />
                <p><b>Tailored to your<br/> requirements</b></p>
                <ul>
                    <li>Role</li>
                    <li>Tech Stack</li>
                    <li>Seniority Level</li>
                </ul>
                </div>          
            </div>
        </div>      
    </div>
    </>
  )
}

export default Clouerd