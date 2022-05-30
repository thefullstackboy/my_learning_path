import Searth from "./Searth";
const Boat = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6 my-2">
                <img src={process.env.PUBLIC_URL + "./image/boat.PNG"}/>   
                </div>

                <div className="col-md-6 col-sm-12 col-lg-6 text-right my-5 mt-5">
              <h1>Remote is challenging</h1>
              <p><Searth/>Building an extensive global pipeline to find great people</p>
              <p><Searth/>Vetting remote candidates without taking up all of the engineering time</p>
              <p><Searth/>Making remote development easy, compliant, and secure</p>
              <li className="nav-item"><a className="nav-link"><button className="btn btn-primary">Hire Developers</button></a></li>
                </div>

            </div>
        </div>
    
        

        
        
        </>
    )
}

export default Boat;